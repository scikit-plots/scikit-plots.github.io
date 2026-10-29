# is\_rtl\_char[#](#is-rtl-char "Link to this heading")

scikitplot.corpus.is\_rtl\_char(**ch**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L1353)[#](#scikitplot.corpus.is_rtl_char "Link to this definition")
:   Return `True` if **ch** belongs to a right-to-left script.

    Covers Arabic, Persian, Ottoman, Hebrew, and related blocks.

    Parameters:
    :   ****ch****str
        :   Single character.

    Returns:
    :   bool
        :   `True` for RTL script characters.

    Parameters:
    :   ****ch**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> is_rtl_char("م")
    True
    >>> is_rtl_char("A")
    False
    >>> is_rtl_char("ש")
    True

    ```
    Go BackOpen In Tab