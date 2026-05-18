# CorpusSource[#](#corpussource "Link to this heading")

class scikitplot.corpus.CorpusSource(**kind**, **root=None**, **urls=<factory>**, **pattern='\*\*/\*'**, **recursive=True**, **extensions=None**, **source\_provenance=<factory>**, **follow\_symlinks=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L165)[#](#scikitplot.corpus.CorpusSource "Link to this definition")
:   Declarative descriptor for one or more document sources.

    [`CorpusSource`](#scikitplot.corpus.CorpusSource "scikitplot.corpus.CorpusSource") is a value object — it describes **where** to
    find documents and what provenance metadata to attach. The actual
    file-system access is deferred to [`iter_entries`](#scikitplot.corpus.CorpusSource.iter_entries "scikitplot.corpus.CorpusSource.iter_entries").

    Parameters:
    :   ****kind****SourceKind
        :   What kind of source this is.

        ****root****pathlib.Path or None
        :   Base path (directory root, single file, or manifest file).
            `None` when `kind=URL` without a manifest.

        ****urls****list[str]
        :   Explicit list of URLs. Only relevant when `kind=URL`.

        ****pattern****str
        :   Glob pattern used when `kind=DIRECTORY`. Default: `"**/*"`.

        ****recursive****bool
        :   When `True`, globs descend into sub-directories. Default: `True`.

        ****extensions****list[str] or None
        :   Whitelist of file extensions (lowercase, with leading dot) to
            include when globbing. `None` means accept all. Default: `None`.

        ****source\_provenance****dict
        :   Metadata propagated into every yielded [`SourceEntry`](scikitplot.corpus.SourceEntry.html#scikitplot.corpus.SourceEntry "scikitplot.corpus.SourceEntry")
            (e.g. `{"source_title": "Hamlet", "source_author": "Shakespeare"}`).

        ****follow\_symlinks****bool
        :   Whether to follow symbolic links during directory traversal.
            Default: `True`.

    Parameters:
    :   * ****kind**** ([**SourceKind**](scikitplot.corpus.SourceKind.html#scikitplot.corpus.SourceKind "scikitplot.corpus._sources._source.SourceKind"))
        * ****root**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
        * ****urls**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****pattern**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****recursive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****extensions**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
        * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
        * ****follow\_symlinks**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > [`scikitplot.corpus._pipeline.CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus._pipeline.CorpusPipeline")
    :   Consumes `CorpusSource`.

    Examples

    Try it in your browser!

    Single file:

    ```
    >>> from pathlib import Path
    >>> src = CorpusSource.from_file(Path("article.txt"))
    >>> list(src.iter_entries())
    [SourceEntry(path_or_url='article.txt', kind=<SourceKind.FILE: 'file'>, ...)]

    ```

    Directory glob:

    ```
    >>> src = CorpusSource.from_directory(Path("corpus/"), pattern="*.txt")
    >>> entries = list(src.iter_entries())

    ```

    URL list:

    ```
    >>> src = CorpusSource.from_urls(["https://a.com/p1", "https://b.com/p2"])

    ```

    URL manifest file:

    ```
    >>> src = CorpusSource.from_manifest(Path("urls.txt"))

    ```
    Go BackOpen In Tab

    count()[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L573)[#](#scikitplot.corpus.CorpusSource.count "Link to this definition")
    :   Return the total number of entries this source will yield.

        > **Warning**
        > For `DIRECTORY` sources this iterates all matching files.
        For large directory trees (100k+ files) this may be slow.

        Returns:
        :   int
            :   Number of entries.

        Return type:
        :   [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")

    extensions: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusSource.extensions "Link to this definition")

    follow\_symlinks: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.CorpusSource.follow_symlinks "Link to this definition")

    classmethod from\_directory(**directory**, **pattern='\*\*/\*'**, **recursive=True**, **extensions=None**, **source\_provenance=None**, **follow\_symlinks=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L263)[#](#scikitplot.corpus.CorpusSource.from_directory "Link to this definition")
    :   Create a source that globs a directory.

        Parameters:
        :   ****directory****pathlib.Path or str
            :   Root directory to glob.

            ****pattern****str, optional
            :   Glob pattern relative to **directory**. Default: `"**/*"`
                (all files recursively).

            ****recursive****bool, optional
            :   Whether `**` in **pattern** should recurse into
                sub-directories. Default: `True`.

            ****extensions****list[str] or None, optional
            :   Whitelist of lowercase file extensions with leading dot.
                `None` accepts all. Default: `None`.

            ****source\_provenance****dict, optional
            :   Provenance metadata for all entries. Default: `{}`.

            ****follow\_symlinks****bool, optional
            :   Follow symlinks during traversal. Default: `True`.

        Returns:
        :   CorpusSource

        Parameters:
        :   * ****directory**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****pattern**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****recursive**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****extensions**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
            * ****follow\_symlinks**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**CorpusSource**](#scikitplot.corpus.CorpusSource "scikitplot.corpus._sources._source.CorpusSource")

    classmethod from\_file(**path**, **source\_provenance=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L237)[#](#scikitplot.corpus.CorpusSource.from_file "Link to this definition")
    :   Create a source for a single local file.

        Parameters:
        :   ****path****pathlib.Path or str
            :   Path to the file.

            ****source\_provenance****dict, optional
            :   Provenance metadata merged into every yielded entry.

        Returns:
        :   CorpusSource

        Parameters:
        :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [**CorpusSource**](#scikitplot.corpus.CorpusSource "scikitplot.corpus._sources._source.CorpusSource")

    classmethod from\_manifest(**manifest\_path**, **source\_provenance=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L347)[#](#scikitplot.corpus.CorpusSource.from_manifest "Link to this definition")
    :   Create a source from a UTF-8 manifest file (one entry per line).

        Lines starting with `#` and blank lines are ignored. Each
        non-comment line is treated as either a URL or a filesystem path.

        Parameters:
        :   ****manifest\_path****pathlib.Path or str
            :   Path to the manifest text file.

            ****source\_provenance****dict, optional
            :   Provenance metadata for all entries.

        Returns:
        :   CorpusSource

        Raises:
        :   ValueError
            :   If the manifest file does not exist.

        Parameters:
        :   * ****manifest\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [**CorpusSource**](#scikitplot.corpus.CorpusSource "scikitplot.corpus._sources._source.CorpusSource")

    classmethod from\_urls(**urls**, **source\_provenance=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L308)[#](#scikitplot.corpus.CorpusSource.from_urls "Link to this definition")
    :   Create a source from an explicit list of URLs.

        Parameters:
        :   ****urls****list[str]
            :   List of `http://` or `https://` URLs.

            ****source\_provenance****dict, optional
            :   Provenance metadata for all entries.

        Returns:
        :   CorpusSource

        Raises:
        :   ValueError
            :   If **urls** is empty or any entry is not a valid URL.

        Parameters:
        :   * ****urls**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****source\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [**CorpusSource**](#scikitplot.corpus.CorpusSource "scikitplot.corpus._sources._source.CorpusSource")

    iter\_entries()[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L429)[#](#scikitplot.corpus.CorpusSource.iter_entries "Link to this definition")
    :   Yield resolved [`SourceEntry`](scikitplot.corpus.SourceEntry.html#scikitplot.corpus.SourceEntry "scikitplot.corpus.SourceEntry") objects for this source.

        The generator is lazy — filesystem access happens per-entry, not
        upfront. This keeps memory proportional to working-set size, not
        corpus size.

        Yields:
        :   SourceEntry
            :   One entry per file or URL.

        Raises:
        :   ValueError
            :   If configuration is invalid (delegated to [`validate`](#scikitplot.corpus.CorpusSource.validate "scikitplot.corpus.CorpusSource.validate")).

            FileNotFoundError
            :   If a FILE source path does not exist at iteration time.

        Return type:
        :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.14)")[[**SourceEntry**](scikitplot.corpus.SourceEntry.html#scikitplot.corpus.SourceEntry "scikitplot.corpus._sources._source.SourceEntry"), None, None]

    kind: [SourceKind](scikitplot.corpus.SourceKind.html#scikitplot.corpus.SourceKind "scikitplot.corpus._sources._source.SourceKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L165)[#](#scikitplot.corpus.CorpusSource.kind "Link to this definition")

    pattern: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = '\*\*/\*'[#](#scikitplot.corpus.CorpusSource.pattern "Link to this definition")

    recursive: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.CorpusSource.recursive "Link to this definition")

    root: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CorpusSource.root "Link to this definition")

    source\_provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L165)[#](#scikitplot.corpus.CorpusSource.source_provenance "Link to this definition")

    urls: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L165)[#](#scikitplot.corpus.CorpusSource.urls "Link to this definition")

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/a80a5f3/scikitplot/corpus/_sources/_source.py#L390)[#](#scikitplot.corpus.CorpusSource.validate "Link to this definition")
    :   Assert that this source is internally consistent.

        Raises:
        :   ValueError
            :   On any configuration inconsistency.

        Return type:
        :   None