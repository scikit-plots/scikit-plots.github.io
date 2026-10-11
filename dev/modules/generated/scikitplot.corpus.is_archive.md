# is\_archive[#](#is-archive "Link to this heading")

scikitplot.corpus.is\_archive(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_archive_handler.py#L183)[#](#scikitplot.corpus.is_archive "Link to this definition")
:   Check if a file path has a supported archive extension.

    Parameters:
    :   ****path****str or Path
        :   File path to check.

    Returns:
    :   bool
        :   `True` if the file extension (or compound extension) matches
            a supported archive format.

    Parameters:
    :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))

    Return type:
    :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> is_archive("data.zip")
    True
    >>> is_archive("data.tar.gz")
    True
    >>> is_archive("data.pdf")
    False

    ```
    Go BackOpen In Tab