# sheet\_converter[#](#sheet-converter "Link to this heading")

scikitplot.experimental.\_doremi.sheet\_converter(**sheet=None**, **add\_frequency=True**, **return\_mode='dict'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/experimental/_doremi/note.py#L323)[#](#scikitplot.experimental._doremi.sheet_converter "Link to this definition")
:   Display parsed notes or note frequencies from a musical sheet.

    Parameters:
    :   ****sheet****str or list or dict or None
        :   Musical input in one of the supported formats:
            - str : Sheet string like “C4-1 D4-0.5”
            - list : List of (note, octave, duration)
            - dict : Dictionary with “notes” key as list of note dicts
            If None, uses internal default `SHEET`.

        ****add\_frequency****bool, default=True
        :   If True, include frequency in output.

        ****return\_mode****{‘str’, ‘list’, ‘dict’, ‘df’}, default=’dict’
        :   Output format:
            - ‘str’ : Multiline string
            - ‘list’ : List of strings
            - ‘dict’ : List of dicts
            - ‘df’ : pandas DataFrame

    Returns:
    :   str or list or dict or pandas.DataFrame
        :   Formatted note data.

    Parameters:
    :   * ****sheet**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)") **|** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") **|** **None**)
        * ****add\_frequency**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****return\_mode**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'str'****,** **'list'****,** **'dict'****,** **'df'****]**)

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)") | [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") | **DataFrame**

    Examples

    Try it in your browser!
    ```
    >>> sheet_converter(return_mode='df')
    ...     note octave duration frequency
    ... 0       G        4          0.50         392.00

    ```
    Go BackOpen In Tab