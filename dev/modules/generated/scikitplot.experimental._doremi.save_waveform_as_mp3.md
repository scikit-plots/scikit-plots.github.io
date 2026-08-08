# save\_waveform\_as\_mp3[#](#save-waveform-as-mp3 "Link to this heading")

scikitplot.experimental.\_doremi.save\_waveform\_as\_mp3(**waveform**, **file\_path='output.mp3'**, **sample\_rate=44100**, **amplitude\_int=32767**, **bitrate='192k'**, **metadata=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6e9440d/scikitplot/experimental/_doremi/note_io.py#L167)[#](#scikitplot.experimental._doremi.save_waveform_as_mp3 "Link to this definition")
:   Save waveform as an MP3 file using pydub and ffmpeg, with support for mono or stereo.

    Parameters:
    :   ****waveform****np.ndarray
        :   Waveform as float32 array, range [-1, 1].

        ****file\_path****str, default=”output.mp3”
        :   Output file path, must end with ‘.mp3’.

        ****sample\_rate****int or None
        :   Sampling rate in Hz, defaults to 44100.

        ****amplitude\_int****int or None
        :   Integer scale factor for converting float waveform to PCM int16.
            Defaults to 32767 (16-bit max).

        ****bitrate****str or None
        :   Bitrate string for MP3 encoding (e.g., ‘192k’).

        ****metadata****dict or None
        :   Metadata tags to embed into the MP3 file.

    Returns:
    :   str
        :   The file path of the saved audio.

    Parameters:
    :   * ****waveform**** ([**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"))
        * ****file\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****sample\_rate**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****amplitude\_int**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****bitrate**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****metadata**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> save_waveform_as_mp3(
    ...     tone, "Do4.mp3", metadata={"title": "Do4", "artist": "NoteGen"}
    ... )

    ```
    Go BackOpen In Tab