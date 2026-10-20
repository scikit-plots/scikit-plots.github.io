# normalize\_answer[#](#normalize-answer "Link to this heading")

scikitplot.corpus.normalize\_answer(**text**, **\***, **mode='squad'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_metrics/_text.py#L82)[#](#scikitplot.corpus.normalize_answer "Link to this definition")
:   Normalise an answer string for comparison.

    Parameters:
    :   ****text****str
        :   Answer text.

        ****mode****{“squad”, “basic”, None}, default=”squad”
        :   See the module documentation.

    Returns:
    :   str

    Raises:
    :   TypeError
        :   If `text` is not a `str`.

        ValueError
        :   For an unknown `mode`.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> normalize_answer("The  Eiffel Tower!")
    'eiffel tower'
    >>> normalize_answer("Straße", mode="basic")
    'strasse'

    ```
    Go BackOpen In Tab