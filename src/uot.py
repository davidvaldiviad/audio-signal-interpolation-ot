import ot
import numpy as np
from time import time

from .utils import *

def limited_cost_matrix_masked(support, p):
    """
    Compute structured cost matrix that limits movement of mass for more than p time frames.

    Args:
        support (np.ndarray): support of points (see .audio.time_freq_support).
        p (int): number of time frames where mass is allowed to move.

    Returns:
        cost_matrix (np.ndarray): structured cost matrix.
        It is in vector form, infinite entries are not used.
    """
    T, F = np.array(support[-1] + 1, dtype=np.int32) # n_freqs , n_rows = (p + 1) * n_freqs
    p = min(p, T)    
    N_blocks = number_of_blocks(p, T)
    cost_matrix = np.zeros(F**2 * N_blocks)
    blocks_seen = 0

    for t in range(T): # probleme si p > T mais bon a regler plus tard
        blocks_to_left = min(p, t)
        blocks_to_right = min(p, T - 1 - t)
        blocks_per_row = 1 + blocks_to_left + blocks_to_right
        current_col = support[t * F : (t + 1) * F]
        cols_to_compare = support[(t - blocks_to_left) * F : (t + 1 + blocks_to_right) * F]
        cost_matrix[blocks_seen * F**2: (blocks_per_row + blocks_seen) * F**2] = ot.dist(current_col, cols_to_compare).flatten()
        blocks_seen += blocks_per_row

    cost_matrix /= cost_matrix.max()
    return cost_matrix


def uot_loss(a, b, beta, cost_matrix, plan, p, F, T):
    """
    Compute the uot loss for weights a and b. It benefits from the structure of the cost matrix.

    Args:
        a (np.ndarray): probability weight vectors.
        b (np.ndarray): probability weight vectors.
        beta (double): UOT hyperparameter, control the marginal relaxation term.
        cost_matrix (np.ndarray): structured cost matrix in vector form.
        plan (np.ndarray): transport plan in vector form.
        p (int): number of time frames where mass is allowed to move.
        F (int): number of frequency bins in spectrogram.
        T (int): number of time frames in spectrogram.

    Returns:
        UOT loss.
    """

    return (cost_matrix * plan).sum() + beta * kullback_leibler(sum_rows_masked(plan, p, F, T), a) + beta * kullback_leibler(sum_cols_masked(plan, p, F, T), b)

def uot(source, target, cost_matrix, beta, p, F, T, nitermax=10000, verbose=None, plateaud_length=100, plateau_tol=1e-6):
    """
    Computes UOT plan between source and target normalized spectrograms. It benefits from the structure of the cost matrix.
    
    Args:
        source (np.ndarray): normalized source spectrogram. 
        target (np.ndarray): normalized target spectrogram. 
        cost_matrix (np.ndarray): structured cost matrix in vector form.
        beta (double): UOT hyperparameter, control the marginal relaxation term.
        plan (np.ndarray): transport plan in vector form.
        p (int): number of time frames where mass is allowed to move.
        F (int): number of frequency bins in spectrogram.
        T (int): number of time frames in spectrogram.
        nitermax (int): max number of iterations.
        verbose (optional, bool): print computation times.
        plateaud_length (int): convergence plateau detection length.
        plateau_tol (double): convergence criterion for plateau.

    Returns:
        plan (np.ndarray): UOT vectorized form plan.
    """
    if verbose:
        tic = time()

    p = min(p, T)
    flat_source = source.T.flatten()
    flat_target = target.T.flatten()
    
    # C expected to be masked
    K = np.exp(-cost_matrix/beta/2)

    plan_0 = masked_outer_product(flat_source, flat_target, p, T, F)
    plan = plan_0.copy()

    loss = [] # to check convergence

    for i in range(nitermax):
        u = np.sqrt(flat_source / (sum_rows_masked(plan, p, F, T) + 1e-16))
        v = np.sqrt(flat_target / (sum_cols_masked(plan, p, F, T) + 1e-16))

        prod = masked_outer_product(u, v, p, T, F)
    
        plan = plan * K * prod

        l = uot_loss(flat_source, flat_target, beta, cost_matrix, plan, p, F, T)

        loss.append(l)

        if len(loss) > plateaud_length and has_plateaud(loss[-plateaud_length:], plateau_tol):
            break
        if i == nitermax - 1:
            print(f"convergence not reached after {i} iterations")

    if verbose:
        toc = time()
        print(f"Took {toc - tic:.2f} seconds.\n")

    return plan
    
def interpolate_from_masked_plan(plan, alpha, support, shape, p, T, F, verbose=None):
    """
    Return interpolation given a vectorized plan and an interpolation parameter alpha.

    Args:
        plan (np.ndarray): plan.
        alpha (double): interpolation parameter.
        support (np.ndarray): support for interpolation.
        shape (np.ndarray): shape of interpolant.
        p (int): number of time frames where mass is allowed to move.
        F (int): number of frequency bins in spectrogram.
        T (int): number of time frames in spectrogram.
        verbose (optional, bool): print computation times.

    Returns:
        interpolation (np.ndarray): interpolation with alpha.
    """
    if verbose:
        tic = time()

    p = min(p, T)
    
    interpolation = np.zeros(shape)

    A = masked_outer_sum((1 - alpha) * support[:, 0], alpha * support[:, 0], p, T, F)
    B = masked_outer_sum((1 - alpha) * support[:, 1], alpha * support[:, 1], p, T, F)

    AB = np.array(list(map(list, zip(A, B))))

    I_alpha = round_array(AB).astype(np.int16)

    rows, cols = I_alpha[..., 1], I_alpha[..., 0]

    np.add.at(interpolation, (rows, cols), plan.flatten())

    if verbose:
        toc = time()
        print(f"Took {toc - tic:.2f} seconds.\n")

    return interpolation
