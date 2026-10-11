# make\_path[#](#make-path "Link to this heading")

scikitplot.utils.\_path.make\_path(**prefix=''**, **suffix=''**, **ext=''**, **root=PosixPath('scikitplot-artifacts')**, **\***, **by\_day=False**, **add\_secret=False**, **private=False**, **mkdir=True**, **subdir=None**, **now=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/utils/_path.py#L580)[#](#scikitplot.utils._path.make_path "Link to this definition")
:   Make Convenience wrapper to build a unique path (callable with zero args).

    Parameters:
    :   ****prefix****str, default=””
        :   Filename prefix.

        ****suffix****str, default=””
        :   Filename suffix.

        ****ext****str, default=””
        :   File extension (e.g., `"csv"`).

        ****root****str or pathlib.Path, default=Path(“scikitplot-artifacts”)
        :   Base output directory.

        ****by\_day****bool, default=False
        :   If True, nest outputs under `YYYY/MM/DD` in UTC.

        ****add\_secret****bool, default=False
        :   If True, append an extra random token for opacity.

        ****private****bool, default=False
        :   If True, append an extra random token for opacity.

        ****mkdir****bool, default=True
        :   If True, create the output directory if needed.

        ****subdir****str or None, default=None
        :   Optional subdirectory when `by_day=False`.

        ****now****datetime or None, default=None
        :   Timestamp to use. If None, uses current UTC time. Naive datetimes are
            treated as UTC.

    Returns:
    :   ****path****pathlib.Path
        :   Full path to a unique file location.

    Parameters:
    :   * ****prefix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****suffix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****ext**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****root**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****by\_day**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****add\_secret**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****private**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****mkdir**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****subdir**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****now**** ([**datetime**](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")

    > **See also**
    > [`PathNamer`](scikitplot.utils._path.PathNamer.html#scikitplot.utils._path.PathNamer "scikitplot.utils._path.PathNamer")
    :   Configurable generator for repeated use.

    Notes

    For repeated use with the same configuration, prefer [`PathNamer`](scikitplot.utils._path.PathNamer.html#scikitplot.utils._path.PathNamer "scikitplot.utils._path.PathNamer")
    to avoid re-specifying parameters.

    If `private=True`, a random token is appended to make names hard to guess.
    This affects naming only (not OS-level file permissions).

    Examples

    Try it in your browser!

    Zero-argument usage:

    ```
    >>> from scikitplot.utils._path import make_path
    >>> p = make_path()
    >>> p.name.startswith("file-")
    True

    ```

    Choose a prefix and extension:

    ```
    >>> p = make_path(prefix="report", ext="csv")
    >>> p.name.endswith(".csv")
    True

    ```

    Disable daily folders and write under a stable subdirectory:

    ```
    >>> p = make_path(
    ...     root="scikitplot-artifacts",
    ...     by_day=False,
    ...     subdir="runs",
    ...     prefix="run",
    ...     ext="json",
    ... )
    >>> "runs" in p.as_posix()
    True

    ```

    Expand “~” and create a private filename:

    ```
    >>> p = make_path(root="~/artifacts", prefix="run", ext="json", private=True)
    >>> p.name.endswith(".json")
    True

    ```
    Go BackOpen In Tab