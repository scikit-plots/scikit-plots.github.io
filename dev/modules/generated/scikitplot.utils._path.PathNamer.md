# PathNamer[#](#pathnamer "Link to this heading")

class scikitplot.utils.\_path.PathNamer(**root=PosixPath('scikitplot-artifacts')**, **prefix=''**, **suffix=''**, **ext=''**, **by\_day=False**, **add\_secret=False**, **private=False**, **mkdir=True**, **directory=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/utils/_path.py#L319)[#](#scikitplot.utils._path.PathNamer "Link to this definition")
:   Generate portable, collision-resistant filenames and paths.

    Parameters:
    :   ****prefix****str, default=””
        :   Default filename prefix (sanitized before use).

        ****suffix****str, default=””
        :   Default filename suffix (sanitized before use).

        ****ext****str, default=””
        :   Default extension, with or without a leading dot (e.g., `"csv"`).

        ****root****pathlib.Path, default=Path(“scikitplot-artifacts”)
        :   Base directory where paths are created. “~” and env vars are expanded.

        ****by\_day****bool, default=False
        :   If True, nest outputs under `YYYY/MM/DD` using UTC dates.

        ****add\_secret****bool, default=False
        :   If True, append a cryptographically strong random token, making names
            harder to guess. UUID4 already provides uniqueness; this option is for
            opacity when filenames may be exposed publicly.

        ****private****bool, default=False
        :   If True, force adding an extra random token (opacity). This is a more
            user-friendly alias for “make it hard to guess” and implies secret token
            behavior regardless of `add_secret`.

        ****mkdir****bool, default=True
        :   If True, create the target directory (parents included).

        ****directory****path-like or None, default=None
        :   Convenience alias for `root`. When provided it takes precedence
            over `root`. Useful when callers prefer the name `directory`:

            ```
            PathNamer(prefix="run", ext=".annoy", directory="/tmp/idx")

            ```

    Parameters:
    :   * ****root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****prefix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****suffix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****ext**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****by\_day**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****add\_secret**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****private**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****mkdir**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****directory**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    > **See also**
    > [`make_path`](scikitplot.utils._path.make_path.html#scikitplot.utils._path.make_path "scikitplot.utils._path.make_path")
    :   Convenience wrapper callable with zero arguments.

    [`uuid.uuid4`](https://docs.python.org/3/library/uuid.html#uuid.uuid4 "(in Python v3.14)")
    :   UUID generator used for collision resistance.

    [`secrets.token_hex`](https://docs.python.org/3/library/secrets.html#secrets.token_hex "(in Python v3.14)")
    :   Optional token source when `add_secret=True`.

    Notes

    Generated filename format (default):

    `[ {prefix}- ]{YYYYMMDDTHHMMSSmmmZ}-{counter:06d}-{uuid4hex}[ -{secret} ][ -{suffix} ][ .{ext} ]`

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot.utils as sp

    ```
    ```
    >>> with sp.Timer(verbose=True, logging_level="debug"):
    ...     sp.PathNamer()

    ```
    ```
    >>> with sp.Timer(logging_level="debug"):
    ...     sp.PathNamer().make_filename()

    ```
    ```
    >>> with sp.Timer(logging_level="info"):
    ...     sp.PathNamer().make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="warn"):
    ...     sp.make_path()

    ```

    Create a path with defaults (UTC date folders):

    ```
    >>> from scikitplot.utils._path import PathNamer
    >>> namer = PathNamer()
    >>> path = namer.make_path(prefix="report")
    >>> path.parts[-1].startswith("report-")
    True

    ```

    Write outputs under a project directory:

    ```
    >>> from pathlib import Path
    >>> namer = PathNamer(
    ...     root=Path("artifacts"), prefix="report", suffix="report", ext="csv"
    ... )
    >>> p = namer.make_path()
    >>> p.as_posix().startswith("artifacts/")
    True
    >>> namer = PathNamer(root="~/artifacts", prefix="run", suffix="report", ext="json")
    >>> p = namer.make_path()
    >>> p.name.startswith("run-")
    True

    ```

    Disable date folders and group under a custom subdirectory:

    ```
    >>> namer = PathNamer(
    ...     root=Path("scikitplot-artifacts"),
    ...     by_day=False,
    ...     prefix="snapshot",
    ...     ext="parquet",
    ... )
    >>> p = namer.make_path(subdir="models")
    >>> "models" in p.as_posix()
    True

    ```

    Generate only the filename (no directory):

    ```
    >>> fname = namer.make_filename(prefix="metrics", ext="json")
    >>> fname.startswith("metrics-")
    True
    >>> fname.endswith(".json")
    True

    ```

    Private (unguessable) names:

    ```
    >>> namer = PathNamer(
    ...     root="scikitplot-artifacts",
    ...     prefix="report",
    ...     ext="csv",
    ...     private=True,
    ... )
    >>> p = namer.make_path()
    >>> p.name.endswith(".csv")
    True

    ```
    Go BackOpen In Tab

    add\_secret: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.utils._path.PathNamer.add_secret "Link to this definition")

    by\_day: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.utils._path.PathNamer.by_day "Link to this definition")

    directory: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.utils._path.PathNamer.directory "Link to this definition")

    ext: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.utils._path.PathNamer.ext "Link to this definition")

    make\_filename(**prefix=None**, **suffix=None**, **ext=None**, **\***, **now=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/utils/_path.py#L467)[#](#scikitplot.utils._path.PathNamer.make_filename "Link to this definition")
    :   Create a unique, portable filename.

        Parameters:
        :   ****prefix****str or None, default=None
            :   Filename prefix. If None, uses `prefix` attr.

            ****suffix****str or None, default=None
            :   Filename suffix. If None, uses `suffix` attr.

            ****ext****str or None, default=None
            :   File extension. If None, uses `ext` attr.

            ****now****datetime or None, default=None
            :   Timestamp to use. If None, uses current time in UTC.
                Naive datetimes are treated as UTC.

        Returns:
        :   ****filename****str
            :   A filename (no directory) suitable for common filesystems.

        Parameters:
        :   * ****prefix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****suffix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****ext**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****now**** ([**datetime**](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.14)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")

    make\_path(**prefix=None**, **suffix=None**, **ext=None**, **\***, **subdir=None**, **now=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/utils/_path.py#L520)[#](#scikitplot.utils._path.PathNamer.make_path "Link to this definition")
    :   Create a full path (folder + unique filename).

        Parameters:
        :   ****prefix****str or None, default=None
            :   Filename prefix. If None, uses `prefix` attr.

            ****suffix****str or None, default=None
            :   Filename suffix. If None, uses `suffix` attr.

            ****ext****str or None, default=None
            :   File extension. If None, uses `ext` attr.

            ****subdir****str or None, default=None
            :   Optional subdirectory (sanitized) when `by_day=False`.

            ****now****datetime or None, default=None
            :   Timestamp to use. If None, uses current time in UTC.
                Naive datetimes are treated as UTC.

        Returns:
        :   ****path****pathlib.Path
            :   Full path to a unique file location.

        Parameters:
        :   * ****prefix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****suffix**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****ext**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****subdir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****now**** ([**datetime**](https://docs.python.org/3/library/datetime.html#datetime.datetime "(in Python v3.14)") **|** **None**)

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

        > **See also**
        > [`make_filename`](#scikitplot.utils._path.PathNamer.make_filename "scikitplot.utils._path.PathNamer.make_filename")
        :   Build only the filename portion.

        [`pathlib.Path.mkdir`](https://docs.python.org/3/library/pathlib.html#pathlib.Path.mkdir "(in Python v3.14)")
        :   Directory creation.

        Notes

        A single timestamp (`now`) is used for both folder selection and filename,
        preventing mismatches at day boundaries.

    mkdir: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.utils._path.PathNamer.mkdir "Link to this definition")

    prefix: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.utils._path.PathNamer.prefix "Link to this definition")

    private: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.utils._path.PathNamer.private "Link to this definition")

    root: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") = PosixPath('scikitplot-artifacts')[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/../../pathlib.py#L)[#](#scikitplot.utils._path.PathNamer.root "Link to this definition")

    suffix: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.utils._path.PathNamer.suffix "Link to this definition")