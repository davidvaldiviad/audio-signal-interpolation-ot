import argparse
from scipy.io.wavfile import write
from audio_ot import *

#####################
# PARSING ARGUMENTS #
#####################

parser=argparse.ArgumentParser(
    description="Interpolate between source and target signals. Use wav files.")
parser.add_argument('source', help='Source wav file')
parser.add_argument('target', help='Target wav file')
parser.add_argument('method', help='ot/uot')
parser.add_argument('--interpolation_path', help='Path to save interpolation wav file')
parser.add_argument("--alpha", type=float, help="Interpolation parameter (default 0.5)")
parser.add_argument("--p", type=int, help="Time limiting parameter (default 0)")
parser.add_argument("--beta", type=int, help="uot hyperparameter (default 1)")
parser.add_argument("--verbose", type=int, help="Verbose: 0/None (no terminal output), 1 (print steps), 2 (print computation times)")
parser.add_argument("--sr", type=int, help="Sample rate (default 16kHz)")
args=parser.parse_args()

SOURCE_PATH = args.source
TARGET_PATH = args.target

alpha = args.alpha
if alpha == None:
    print("Setting default interpolation parameter to 0.5. (you can change it with e.g. --alpha 0.25)")
    alpha = 0.5

method = args.method
if method == 'uot':
    beta = args.beta
    p = args.p
    if beta == None:
        print("Setting default uot hyperparameter to 1. (you can change it with e.g. --beta 10)")
        beta = 1
    if p == None:
        print("Setting default time limiting parameter to 0. (you can change it with e.g. --p 1)")
        p = 0

verbose = 0 if args.verbose == None else args.verbose
sr = 16000 if args.sr == None else args.sr


filepath = args.interpolation_path
if filepath is None:
    source_title = SOURCE_PATH.split('/')[-1].split('.wav')[0]
    target_title = TARGET_PATH.split('/')[-1].split('.wav')[0]

    filepath = f"{source_title}-{target_title}-method={method}-alpha={alpha}-p={p}-beta={beta}.wav"

############################
# COMPUTE INTERPOLATION
#
# 1) Load signals
# 2) Compute spectrograms
# 3) Build cost matrix
# 4) Compute plan
# 5) Interpolate
# 6) Generate audio signals
#
############################

if verbose > 0:
    print("\nLoading signals...\n")

source_signal, target_signal = load_input_signals(SOURCE_PATH, TARGET_PATH, sr=sr)

if verbose > 0:
    print("Computing spectrograms...\n")

source, source_amplitude = normalized_stft(source_signal, return_amplitude=True, sr=sr)
target, target_amplitude = normalized_stft(target_signal, return_amplitude=True, sr=sr)
shape = source.shape
F, T = shape # F = nb of frequency bins, T = nb of time frames

support = time_freq_support(shape)

if verbose > 0:
    print("Building cost matrix...\n")

if method == 'ot':
    cost_matrix = euclidean_cost_matrix(support)
if method == 'uot':
    cost_matrix = limited_cost_matrix_masked(support, p)

if verbose > 0:
    print("Computing plan...\n")

if method == 'ot':
    plan = exact_ot(source, target, cost_matrix, verbose=(verbose==2))
if method == 'uot':
    plan = uot(source, target, cost_matrix, beta, p, F, T, verbose=(verbose==2))

if verbose > 0:
    print("Computing interpolation...\n")

if method == 'ot':
    interpolation = interpolate_from_plan(plan, alpha, support, shape, verbose=(verbose==2))
if method == 'uot':
    interpolation = interpolate_from_masked_plan(plan, alpha, support, shape, p, T, F, verbose=(verbose==2))

interpolation *= (1 - alpha) * source_amplitude + alpha * target_amplitude # build amplitude

interpolated_signal = spec_to_signal(interpolation, length=len(source_signal), sr=sr)
 
print(f"Saving interpolated file {filepath}")
write(filepath, sr, interpolated_signal)
