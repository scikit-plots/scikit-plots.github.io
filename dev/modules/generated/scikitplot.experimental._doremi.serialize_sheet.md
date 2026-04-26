# serialize\_sheet[#](#serialize-sheet "Link to this heading")

scikitplot.experimental.\_doremi.serialize\_sheet(**sheet=None**, **save\_format='json'**, **add\_frequency=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/experimental/_doremi/note.py#L394)[#](#scikitplot.experimental._doremi.serialize_sheet "Link to this definition")
:   Serialize sheet notes to JSON or YAML string.

    Parameters:
    :   ****sheet****str or list or dict or None
        :   Musical sheet input (same supported formats as sheet\_converter).

        ****save\_format****{‘json’, ‘yaml’}, default=’json’
        :   Serialization save\_format.

        ****add\_frequency****bool, default=True
        :   Include frequency in output.

    Returns:
    :   str
        :   Serialized string in requested save\_format.

    Parameters:
    :   * ****sheet**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)") **|** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)") **|** **None**)
        * ****save\_format**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'json'****,** **'yaml'****]**)
        * ****add\_frequency**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    Examples

    Try it in your browser!
    ```
    >>> print(serialize_sheet("A4-1", save_format="json"))
    >>> print(serialize_sheet("A4-1", save_format="yaml"))

    ```
    Go BackOpen In Tab