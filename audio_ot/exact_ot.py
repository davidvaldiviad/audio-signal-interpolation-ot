import ot
import numpy as np
from time import time

from .utils import *

def euclidean_cost_matrix(support):
    """
    Compute euclidean cost matrix between points of support.

    Args:
        support (np.ndarray): support of points (see .audio.time_freq_support).

    Returns:
        cost_matrix (np.ndarray): euclidean cost matrix.
        cost_matrix[i, j] = (support[i] - support[j])**2
    """
    cost_matrix = ot.dist(support, support)
    return cost_matrix

def exact_ot(source, target, cost_matrix, verbose=True):
    """
    Computes optimal transport plan between source and target normalized spectrograms.

    Args:
        source (np.ndarray): source normalized spectrogram.
        target (np.ndarray): target normalized spectrogram.
        cost_matrix (np.ndarray): cost matrix.
        verbose (optional, bool): print computation times.

    Returns:
        plan (np.ndarray): optimal transport plan between source and target.
    """
    if verbose:
        tic = time()

    flat_source = source.T.flatten()
    flat_target = target.T.flatten()

    plan = ot.lp.emd(flat_source, flat_target, cost_matrix, numItermax=100000000)
            
    if verbose:
        toc = time()
        print(f"Took {toc - tic:.2f} seconds.\n")

    return plan

def interpolate_from_plan(plan, alpha, support, shape, verbose=None):
    """
    Return interpolation given a plan and an interpolation parameter alpha.

    Args:
        plan (np.ndarray): plan.
        alpha (double): interpolation parameter.
        support (np.ndarray): support for interpolation.
        shape (np.ndarray): shape of interpolant.
        verbose (optional, bool): print computation times.

    Returns:
        interpolation (np.ndarray): interpolation with alpha.
    """
    if verbose:
        tic = time()
    interpolation = np.zeros(shape)

    I_alpha = round_array(((1 - alpha) * support[:, None] + alpha * support[None, :]).reshape(shape[0]**2 * shape[1]**2, 2)).astype(np.int16)

    rows, cols = I_alpha[..., 1], I_alpha[..., 0]

    np.add.at(interpolation, (rows, cols), plan.flatten())

    if verbose:
        toc = time()
        print(f"Took {toc - tic:.2f} seconds.\n")

    return interpolation
