# CollectionManifest[#](#collectionmanifest "Link to this heading")

class scikitplot.corpus.CollectionManifest(**collection\_id**, **title=None**, **author=None**, **source\_date=None**, **language=None**, **description=''**, **source\_type=None**, **file\_provenance=<factory>**, **tags=<factory>**, **expected\_file\_count=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L48)[#](#scikitplot.corpus.CollectionManifest "Link to this definition")
:   Descriptor for a named corpus collection.

    A `CollectionManifest` holds corpus-level provenance metadata
    (author, title, date, language) that is propagated into every
    [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") produced from this
    collection. It optionally carries per-file provenance overrides so
    that individual files within a multi-file corpus can have their own
    metadata.

    Parameters:
    :   ****collection\_id****str
        :   Unique identifier for this collection. Must be non-empty. Used
            as `CorpusDocument.collection_id` in all produced documents.

        ****title****str or None, optional
        :   Human-readable title of the collection. Default: `None`.

        ****author****str or None, optional
        :   Primary author or editor. Default: `None`.

        ****source\_date****str or None, optional
        :   Publication or creation date in ISO 8601 format. Default: `None`.

        ****language****str or None, optional
        :   Default ISO 639-1 language code for all files. Default: `None`.

        ****description****str, optional
        :   Free-text description of the corpus. Default: `""`.

        ****source\_type****str or None, optional
        :   Default `SourceType` value string for all files. Default: `None`.

        ****file\_provenance****dict[str, dict], optional
        :   Per-file provenance overrides. Keys are filenames (basename only);
            values are dicts with any [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")
            provenance field names. Override values take precedence over the
            collection-level defaults. Default: `{}`.

        ****tags****list[str], optional
        :   Arbitrary tags for search / filtering. Default: `[]`.

        ****expected\_file\_count****int or None, optional
        :   Expected number of source files. Used for completeness validation.
            Default: `None` (no check).

    Raises:
    :   ValueError
        :   If `collection_id` is empty or whitespace-only, or if
            `expected_file_count` is negative.

    Parameters:
    :   * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****title**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****author**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_date**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****description**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****source\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****file\_provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****]**)
        * ****tags**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****expected\_file\_count**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> manifest = CollectionManifest(
    ...     collection_id="gutenberg_shakespeare",
    ...     title="The Complete Works of Shakespeare",
    ...     author="Shakespeare, William",
    ...     source_date="1600",
    ...     language="en",
    ...     source_type="play",
    ... )
    >>> manifest.to_provenance()
    {'collection_id': 'gutenberg_shakespeare', 'source_title': '...', ...}

    ```
    Go BackOpen In Tab

    author: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CollectionManifest.author "Link to this definition")

    check\_completeness(**actual\_file\_count**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L199)[#](#scikitplot.corpus.CollectionManifest.check_completeness "Link to this definition")
    :   Return `True` if the actual file count matches `expected_file_count`.

        Parameters:
        :   ****actual\_file\_count****int
            :   Number of files actually found in the collection directory.

        Returns:
        :   bool
            :   Always `True` when `expected_file_count` is `None`.

        Parameters:
        :   ****actual\_file\_count**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")

    collection\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L48)[#](#scikitplot.corpus.CollectionManifest.collection_id "Link to this definition")

    description: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = ''[#](#scikitplot.corpus.CollectionManifest.description "Link to this definition")

    expected\_file\_count: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CollectionManifest.expected_file_count "Link to this definition")

    file\_provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L48)[#](#scikitplot.corpus.CollectionManifest.file_provenance "Link to this definition")

    language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CollectionManifest.language "Link to this definition")

    provenance\_for\_file(**filename**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L166)[#](#scikitplot.corpus.CollectionManifest.provenance_for_file "Link to this definition")
    :   Return merged provenance for a specific file.

        Starts with collection-level defaults, then applies per-file
        overrides from `file_provenance`. Basename matching only.

        Parameters:
        :   ****filename****str
            :   Source filename (basename). Matched against `file_provenance`
                keys case-sensitively.

        Returns:
        :   dict[str, Any]
            :   Merged provenance dict.

        Parameters:
        :   ****filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Examples

        Try it in your browser!
        ```
        >>> manifest = CollectionManifest(
        ...     collection_id="c1",
        ...     author="Default Author",
        ...     file_provenance={"hamlet.xml": {"source_title": "Hamlet"}},
        ... )
        >>> manifest.provenance_for_file("hamlet.xml")
        {'collection_id': 'c1', 'source_author': 'Default Author',
         'source_title': 'Hamlet'}

        ```
        Go BackOpen In Tab

    source\_date: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CollectionManifest.source_date "Link to this definition")

    source\_type: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CollectionManifest.source_type "Link to this definition")

    tags: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L48)[#](#scikitplot.corpus.CollectionManifest.tags "Link to this definition")

    title: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.CollectionManifest.title "Link to this definition")

    to\_provenance()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L143)[#](#scikitplot.corpus.CollectionManifest.to_provenance "Link to this definition")
    :   Return a provenance dict suitable for
        `create`.

        Only non-`None` values are included.

        Returns:
        :   dict[str, Any]
            :   Keys are `CorpusDocument` provenance field names.

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/e4af755/scikitplot/corpus/_metadata/_metadata.py#L122)[#](#scikitplot.corpus.CollectionManifest.validate "Link to this definition")
    :   Assert that all invariants hold.

        Raises:
        :   ValueError
            :   If any invariant is violated.

        Return type:
        :   None