# play\_waveform[#](#play-waveform "Link to this heading")

scikitplot.experimental.\_doremi.play\_waveform(**music**, **rate=None**, **file\_path=None**, **blocking=True**, **backend='auto'**, **save\_generated=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/experimental/_doremi/waveform_playback.py#L62)[#](#scikitplot.experimental._doremi.play_waveform "Link to this definition")
:   Play audio from a NumPy array using either IPython (for Jupyter) or sounddevice.

    Parameters:
    :   ****music****np.ndarray
        :   A 1D (mono) or 2D (stereo) NumPy array containing audio waveform data.
            Expected dtype is float32 or float64 with values in [-1.0, 1.0].

        ****rate****int
        :   Sampling rate of the audio in Hz (e.g., 44100).

        ****file\_path****str, optional
        :   If this is a path to an existing `.wav` file, it will be played.
            If `music` is provided and `save_generated=True`, the array is saved to this file.

        ****blocking****bool, optional
        :   Whether to block until playback finishes (only applies to sounddevice).

        ****backend****{‘auto’, ‘jupyter’, ‘sounddevice’}, optional
        :   Audio playback backend:
            - ‘auto’: Use IPython if in Jupyter, else fallback to sounddevice.
            - ‘jupyter’: Force IPython.display.Audio.
            - ‘sounddevice’: Force sounddevice playback.

        ****save\_generated****bool, optional
        :   If True and `file_path` is provided, saves `music` to `file_path` before playing.

    Returns:
    :   dict
        :   Playback result info with fields:
            - ‘status’: ‘success’ or ‘error’
            - ‘backend’: backend used
            - ‘blocking’: whether playback was blocking
            - ‘error’: error message if playback failed
            - ‘source’: file or music

    Raises:
    :   ValueError
        :   If the backend is not one of ‘auto’, ‘jupyter’, or ‘sounddevice’
            or inputs are misconfigured.

        Exception
        :   If audio playback fails.

    Parameters:
    :   * ****music**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)"))
        * ****rate**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****file\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****blocking**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****backend**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****save\_generated**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   None

    Notes

    🔧 Requires either IPython (for Jupyter playback) or the `sounddevice` package.
    To install sounddevice and its backend:

    ```
    # Install PortAudio library (needed for sounddevice to work on Linux)
    sudo apt-get install libportaudio2 libportaudiocpp0 portaudio19-dev
    pip install sounddevice

    ```

    If you’re in Docker or WSL/Linux without sound, You must either:
    - Mount PulseAudio socket or use –device /dev/snd and libasound2
    - Or avoid using sounddevice and stick to IPython.display.Audio or exporting .wav files

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np
    >>> duration = 1.0  # seconds
    >>> rate = 44100
    >>> t = np.linspace(0, duration, int(rate * duration), endpoint=False)
    >>> sine_wave = 0.5 * np.sin(2 * np.pi * 440 * t)  # A4 tone
    >>> play_waveform(sine_wave, rate)

    ```

    Automatically picks best option:

    ```
    >>> play_waveform(music, rate=doremi.DEFAULT_SAMPLE_RATE)

    ```

    Force Jupyter output:

    ```
    >>> play_waveform(music, rate=doremi.DEFAULT_SAMPLE_RATE, backend="jupyter")

    ```

    Force sounddevice:

    ```
    >>> play_waveform(music, rate=doremi.DEFAULT_SAMPLE_RATE, backend="sounddevice")

    ```
    Go BackOpen In Tab