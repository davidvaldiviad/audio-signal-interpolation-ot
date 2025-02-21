from setuptools import setup, find_packages

setup(
    name='audio_ot',
    version='1.0',
    packages=find_packages(include=['audio_ot', 'audio_ot.*']),
    install_requires=[
        'numpy',
        'pot',
        'scipy',
        'librosa',
    ],
)
