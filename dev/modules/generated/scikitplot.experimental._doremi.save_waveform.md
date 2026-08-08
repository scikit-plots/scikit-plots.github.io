# save\_waveform[#](#save-waveform "Link to this heading")

scikitplot.experimental.\_doremi.save\_waveform(**waveform**, **file\_path='output.wav'**, **ext=None**, **sample\_rate=44100**, **backend=None**, **dtype='float32'**, **normalize=True**, **stereo\_out=True**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/experimental/_doremi/note_io.py#L39)[#](#scikitplot.experimental._doremi.save_waveform "Link to this definition")
:   Save waveform to an audio file using specified or auto-selected backend.

    Parameters:
    :   ****waveform****np.ndarray | array-like
        :   Audio array, 1D or 2D. Will be reshaped, normalized, and cast.

        ****file\_path****str, default=”output.wav”
        :   Output file\_path.

        ****ext****str or None, optional
        :   File extension override (e.g., ‘wav’, ‘flac’). Inferred from file\_path if None.

        ****sample\_rate****int, default=44100
        :   Sample rate in Hz. Defaults to 44100 if None.

        ****backend****str or None, optional
        :   Audio backend to use: ‘scipy’, ‘soundfile’, or ‘scitools’.
            Auto-selected based on extension if None.

        ****dtype****str, default=’int16’
        :   Output audio dtype: ‘int16’ or ‘float32’.

        ****normalize****bool, default=True
        :   Whether to normalize waveform amplitude to [-1,1].

        ****stereo\_out****bool
        :   Convert mono to stereo by duplication if True.

        ****\*\*kwargs****
        :   Additional arguments passed to backend writers.

    Returns:
    :   str
        :   The file path of the saved audio.

    Raises:
    :   ValueError
        :   If backend unsupported or invalid extension for backend.

    Parameters:
    :   * ****waveform**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"))
        * ****file\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****ext**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****sample\_rate**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****dtype**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****normalize**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****stereo\_out**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Notes

    * 1D mono and 2D multi-channel supported.
    * Channel dimension must be second in shape (samples, channels).
    * Audio will be passed through `preprocess_audio` before saving.
    * Mono audio should be saved as a 1D array with shape (samples,).
    * Audio file formats like WAV expect mono data as a single stream of samples, 1D array.
    * Most audio libraries (e.g., soundfile, scipy.io.wavfile, librosa.output.write\_wav)
      accept mono data as 1D arrays.
    * Stereo/multi-channel audio must be saved as a 2D array with shape (samples, channels).
    * The order of dimensions is important, channels must be the second dimension for
      correct playback.
    * Saving with the wrong shape (e.g., (channels, samples)) will cause audio distortion or
      channel mix-up.

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> tone = 0.5 * np.sin(2 * np.pi * 440 * np.linspace(0, 1, 44100))
    >>> save_waveform(tone, "tone.wav", dtype="int16")

    ```
    Go BackOpen In Tab