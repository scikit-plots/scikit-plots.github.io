# extract\_archive[#](#extract-archive "Link to this heading")

scikitplot.corpus.extract\_archive(**archive\_path**, **output\_path**, **\***, **supported\_extensions=None**, **max\_files=10000**, **max\_total\_bytes=2147483648**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/corpus/_archive_handler.py#L223)[#](#scikitplot.corpus.extract_archive "Link to this definition")
:   Extract an archive to a destination directory.

    Parameters:
    :   ****archive\_path****str or Path
        :   Path to the archive file.

        ****output\_path****str or Path
        :   Directory to extract files into. Created if it does not exist.

        ****supported\_extensions****frozenset[str] or None, optional
        :   Whitelist of file extensions to include from the archive.
            If `None`, all files are included (subject to hidden-file
            and `__pycache__` filtering). Default: `None`.

        ****max\_files****int, optional
        :   Maximum number of files allowed in the archive. Archives
            exceeding this limit are rejected before extraction begins.
            Default: 10,000.

        ****max\_total\_bytes****int, optional
        :   Maximum cumulative extracted size in bytes. Extraction halts
            if this limit is exceeded (zip-bomb prevention).
            Default: 2 GB.

    Returns:
    :   list[Path]
        :   Sorted list of extracted file paths (absolute).

    Raises:
    :   ValueError
        :   If the file is not a recognised archive format.

        ValueError
        :   If the archive contains more than **max\_files** members.

        ValueError
        :   If cumulative extracted bytes exceed **max\_total\_bytes**.

        OSError
        :   If the archive cannot be opened.

    Parameters:
    :   * ****archive\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****output\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****supported\_extensions**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****max\_files**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_total\_bytes**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")]

    Notes

    ****ZipSlip prevention:**** Every extracted member’s resolved path is
    verified to fall within **output\_path**. Members with path-traversal
    components (`../`) are logged as warnings and skipped.

    ****Symlinks:**** Symbolic links inside archives are always skipped.

    Examples

    Try it in your browser!
    ```
    >>> from pathlib import Path
    >>> files = extract_archive("corpus.zip", "/tmp/corpus_extract")
    >>> [f.suffix for f in files]
    ['.pdf', '.txt', '.txt']

    ```
    Go BackOpen In Tab