import numpy as np

# MOST OF THE FUNCTIONS USED HERE ARE UTILITARY FUNCTIONS TO COMPUTE
# UNBALANCED OPTIMAL TRANSPORT ON VECTORIZED PLANS.


def number_of_blocks(p, T):
    s = 0
    for i in range(1, p + 1):
        s += 2 * (p + i)
    s += (T - 2 * p) * (2 * p + 1)

    return s

def masked_outer_product(u, v, p, T, F):
    N_blocks = 0
    for t in range(T):
        blocks_left  = min(p, t)
        blocks_right = min(p, T - 1 - t)
        blocks_per_t = 1 + blocks_left + blocks_right
        N_blocks += blocks_per_t

    out = np.zeros(N_blocks * (F**2), dtype=u.dtype)
    blocks_seen_so_far = 0

    for t in range(T):
        blocks_left  = min(p, t)
        blocks_right = min(p, T - 1 - t)
        blocks_per_t = 1 + blocks_left + blocks_right

        row_start = t * F
        row_end   = (t + 1) * F
        u_slice   = u[row_start : row_end]  # shape (F,)

        col_start = (t - blocks_left) * F
        col_end   = (t + 1 + blocks_right) * F
        v_slice   = v[col_start : col_end]  # shape (blocks_per_t * F,)

        sub_block = np.outer(u_slice, v_slice).ravel()  # shape = (F * blocks_per_t*F,)

        begin = blocks_seen_so_far * (F**2)
        end   = (blocks_seen_so_far + blocks_per_t) * (F**2)
        out[begin : end] = sub_block

        blocks_seen_so_far += blocks_per_t

    return out

def sum_rows_masked(M, p, F, T):
    s = np.zeros(F * T, dtype=M.dtype)
    blocks_seen_so_far = 0

    for t in range(T):
        blocks_to_left = min(p, t)
        blocks_to_right = min(p, T - 1 - t)
        blocks_per_row = 1 + blocks_to_left + blocks_to_right

        # The sub-block for row t starts here in the big array:
        chunk_start = blocks_seen_so_far * (F**2)
        chunk_end   = (blocks_seen_so_far + blocks_per_row) * (F**2)
        sub_block   = M[chunk_start:chunk_end]

        # sub_block is shape (blocks_per_row * F^2,)
        # Reshape to (F, blocks_per_row * F)
        sub_block = sub_block.reshape(F, blocks_per_row * F)

        # Sum each row across all columns:
        row_sums = sub_block.sum(axis=1)  # shape (F,)

        # Store result
        s[t*F : (t+1)*F] = row_sums

        # Advance offset so next row picks up where we left off
        blocks_seen_so_far += blocks_per_row

    return s

def sum_cols_masked(M, p, F, T):
    s = np.zeros(F * T, dtype=M.dtype)
    blocks_seen_so_far = 0

    for t in range(T):
        blocks_to_left = min(p, t)
        blocks_to_right = min(p, T - 1 - t)
        blocks_per_row = 1 + blocks_to_left + blocks_to_right

        # Identify our sub-block slice for row t:
        chunk_start = blocks_seen_so_far * F**2
        chunk_end   = (blocks_seen_so_far + blocks_per_row) * F**2
        sub_block = M[chunk_start : chunk_end]
        sub_block = sub_block.reshape(F, blocks_per_row * F)

        # For each column inside sub_block:
        for col_id in range(blocks_per_row * F):
            # Map local col_id -> (t2, f2):
            f2 = col_id % F
            delta_t = col_id // F
            t2 = t - blocks_to_left + delta_t

            # The global column index in the masked matrix:
            c = t2 * F + f2

            # sub_block[:, col_id] has shape (F,)
            # Summation across the row-dimension for this single column:
            column_value = sub_block[:, col_id].sum()
            s[c] += column_value

        blocks_seen_so_far += blocks_per_row

    return s

def has_plateaud(values, tol):
    values = np.array(values)
    return np.abs(values[:-1] - values[1:]).mean() < tol

def kullback_leibler(a, b):
    """
    Returns KL divergence for masses a and b.

    Args: 
        a (np.ndarray): weights
        b (np.ndarray): weights

    Returns:
        kl_div (double): KL(a, b)

    """
    kl_div = a * np.log((a + 1e-16) / (b + 1e-16)) + b - a
    return kl_div.sum()

def masked_outer_sum(u, v, p, T, F):
    N_blocks = 0
    for t in range(T):
        blocks_left  = min(p, t)
        blocks_right = min(p, T - 1 - t)
        blocks_per_t = 1 + blocks_left + blocks_right
        N_blocks += blocks_per_t

    out = np.zeros(N_blocks * (F**2), dtype=u.dtype)
    blocks_seen_so_far = 0

    for t in range(T):
        blocks_left  = min(p, t)
        blocks_right = min(p, T - 1 - t)
        blocks_per_t = 1 + blocks_left + blocks_right

        row_start = t * F
        row_end   = (t + 1) * F
        u_slice   = u[row_start : row_end]  # shape (F,)

        col_start = (t - blocks_left) * F
        col_end   = (t + 1 + blocks_right) * F
        v_slice   = v[col_start : col_end]  # shape (blocks_per_t * F,)

        sub_block = np.add.outer(u_slice, v_slice).ravel()  # shape = (F * blocks_per_t*F,)

        begin = blocks_seen_so_far * (F**2)
        end   = (blocks_seen_so_far + blocks_per_t) * (F**2)
        out[begin : end] = sub_block

        blocks_seen_so_far += blocks_per_t

    return out

def round_array(array):
    """
    Rounds array of points such that 0.5 goes to int below (improvement on np.round).
    
    Args:
        array (np.ndarray): array of [x, y] coordinates
        
    Returns:
        array where point coordinates are rounded."""
    
    x, y = array[:, 0], array[:, 1]

    new_x = np.where((x % 1) == 0.5, np.floor(x).astype(int), np.round(x).astype(int))
    new_y = np.where((y % 1) == 0.5, np.floor(y).astype(int), np.round(y).astype(int))

    return np.column_stack((new_x, new_y))
