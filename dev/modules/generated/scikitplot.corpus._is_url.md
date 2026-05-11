# \_is\_url[#](#is-url "Link to this heading")

scikitplot.corpus.\_is\_url(**s**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/corpus/_base.py#L218)[#](#scikitplot.corpus._is_url "Link to this definition")
:   Return `True` if **s** is a string that looks like an HTTP(S) URL.

    Parameters:
    :   ****s****object
        :   Value to test.

    Returns:
    :   bool
        :   `True` when **s** is a `str` matching `^https?://`
            (case-insensitive). `False` for `pathlib.Path` objects and
            non-string types.

    Parameters:
    :   ****s**** ([**object**](https://docs.python.org/3/library/functions.html#object "(in Python v3.14)"))

    Return type:
    :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")