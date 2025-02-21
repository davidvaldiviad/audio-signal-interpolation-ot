from math import ceil, log2
import librosa
import numpy as np

def load_input_signals(source_path, target_path, sr):
    """
    Load source and target signals. Output signals have same length.

    Args:
        source_path (string): path to source .wav file.
        target_path (string): path to target .wav file.
        sr (double): sample rate.

    Returns:
        source_signal (np.ndarray).
        target_signal (np.ndarray).
    """
    source_signal, _ = librosa.load(source_path, sr=sr)
    target_signal, _ = librosa.load(target_path, sr=sr)
    length = min(len(source_signal), len(target_signal))

    source_signal = source_signal[:length]
    target_signal = target_signal[:length]

    return source_signal, target_signal

def get_stft_config(sr=16000):
    """
    Returns configuration for short-time Fourier transform.
    """
    config = {}
    config['window_size'] = 40 # ms
    config['window_size_samples'] = config['window_size'] * 1e-3 * sr
    config['n_fft'] = 2 ** ceil(log2(config['window_size_samples']))
    config['hop_length'] = config['n_fft'] // 2

    return config

def stft(signal, stft_config=None, sr=16000):
    """
    Computes short-time Fourier transform (stft) of a signal.

    Args:
        signal (np.ndarray): signal of interest.
        stft_config (dict): parameters for stft (see get_stft_config function).
        sr (double): sample rate.

    Returns:
        spec (np.ndarray): stft of input signal.
    """
    if stft_config == None:
        stft_config = get_stft_config(sr=sr)

    spec = librosa.stft(signal, n_fft=stft_config['n_fft'], hop_length=stft_config['hop_length'])
    return spec

def normalized_stft(signal, stft_config=None, return_amplitude=False, sr=16000):
    """
    Computes the normalizezd short-time Fourier transform (stft) of a signal.
    The normalized stft contains only positive values that sum up to 1.
    Used to treat stfts as discrete probability distributions.

    Args:
        signal (np.ndarray): signal of interest.
        stft_config (dict): parameters for stft (see get_stft_config function).
        return_amplitude (bool): return sum of the amplitude of the stft (for amplitude reconstruction).
        sr (double): sample rate.

    Returns:
        normalized_spectrogram (np.ndarray): normalized spectrogram of input signal.
    """
    if stft_config == None:
        stft_config = get_stft_config(sr)
    signal_stft = stft(signal, stft_config)
    spectrogram = np.abs(signal_stft)
    amplitude = spectrogram.sum()
    normalized_spectrogram = spectrogram / amplitude

    if return_amplitude:
        return normalized_spectrogram, amplitude

    return normalized_spectrogram

def time_freq_support(shape):
    """
    Generate time-frequency support.
    
    Args:
        shape (np.ndarray): shape T x F of input spectrograms.

    Returns:
        support ((T dx F, 2) np.ndarray): returned support is a vector of points (t, f). 
        It is ordered row-wise, meaning support = (t_0, f_0), (t_0, f_1), ...
    """
    support = np.zeros((shape[0] * shape[1], 2))

    index = 0
    for t in range(shape[1]):
        for f in range(shape[0]):
            support[index] = [t, f]
            index += 1

    return support

def spec_to_signal(spectrogram, length=None, stft_config=None, sr=16000):
    """
    Build phase for magnitude spectrogram and return audio signal.

    Args:
        spectrogram (np.ndarray): Magnitude spectrogram.
        (optional) length (int): length in samples of output signal.
        (optional) stft_config (dict): stft parameters.
        (optional) sr (int): Sample rate (in Hz).

    Returns:
        signal

    """
    if stft_config == None:
        stft_config = get_stft_config(sr=sr)

    signal = librosa.griffinlim(spectrogram, hop_length=stft_config['hop_length'], n_fft=stft_config['n_fft'], n_iter=100, length=length)

    signal = np.asarray(signal, dtype=np.float32)

    return signal
