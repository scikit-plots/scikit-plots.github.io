# compose\_as\_waveform[#](#compose-as-waveform "Link to this heading")

scikitplot.experimental.\_doremi.compose\_as\_waveform(**composition='\n# Format: NoteOctave-Duration\n# NoteOctave: Musical note + octave number (e.g., G4 means G in the 4th octave)\n# Duration: Length of the note (relative)\n#   1   = quarter note\n#  0.5  = eighth note\n#   2   = half note\n#\n# Happy Birthday Melody — Western notation with lyrics:\n\nG4-0.5    -  G4-0.25   -  A4-0.5    -  G4-0.5    -  C5-0.5    -  B4-1\n# "Happy"    "birth-"   "day"     "to"     "you"\n\nG4-0.5    -  G4-0.25   -  A4-0.5    -  G4-0.5    -  D5-0.5    -  C5-1\n# "Happy"    "birth-"   "day"     "to"     "you"\n\nG4-0.5    -  G4-0.25   -  G5-0.5    -  E5-0.5    -  C5-0.5    -  B4-0.5    -  A4-1\n# "Happy"    "birth-"   "day"     "dear"    "[Name]"\n\nF5-0.5    -  F5-0.25   -  E5-0.5    -  C5-0.5    -  D5-0.5    -  C5-1\n# "Happy"    "birth-"   "day"     "to"     "you"\n'**, **envelope='hann'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/experimental/_doremi/composer.py#L67)[#](#scikitplot.experimental._doremi.compose_as_waveform "Link to this definition")
:   Generate a concatenated waveform from a musical composition input.

    Parameters:
    :   ****composition****str or list of tuples or dict, optional
        :   Musical composition to synthesize. Supported formats:

            * str: Musical notation string, e.g. “C4-0.5 G4-0.5”
            * list of tuples: [(‘C’, 4, 0.5), (‘G’, 4, 0.5), …]
            * dict: {‘notes’: [{‘note’: ‘C’, ‘octave’: 4, ‘duration’: 0.5}, …]}

            Defaults to an internal sample `SHEET`.

        ****envelope****str or callable, optional
        :   Envelope to shape amplitude over time.
            Choose from: ‘hann’, ‘soft’, ‘triangular’, or provide a custom function.

        ****\*\*kwargs****dict
        :   Additional keyword arguments passed to `note_to_sine_wave`,
            such as amplitude, envelope, sample\_rate, etc.

    Returns:
    :   np.ndarray
        :   Concatenated audio waveform representing the full composition.

    Parameters:
    :   * ****composition**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****]** **|** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)"))
        * ****envelope**** (**Union****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **callable****[****[****np.ndarray****,** [**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****,** **np.ndarray****]****,** **None****]**)

    Return type:
    :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.5.dev0)")

    Notes

    * Invalid or unrecognized note tokens are skipped silently.
    * Octave and duration must be numeric values.
    * Supports rests, generating silence of appropriate duration.