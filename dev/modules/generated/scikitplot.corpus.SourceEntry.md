# SourceEntry[#](#sourceentry "Link to this heading")

class scikitplot.corpus.SourceEntry(**path\_or\_url**, **kind**, **provenance=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_sources/_source.py#L117)[#](#scikitplot.corpus.SourceEntry "Link to this definition")
:   A single resolved source entry yielded by [`CorpusSource.iter_entries`](scikitplot.corpus.CorpusSource.html#scikitplot.corpus.CorpusSource.iter_entries "scikitplot.corpus.CorpusSource.iter_entries").

    Parameters:
    :   ****path\_or\_url****str
        :   Filesystem path (absolute or relative) or full URL.

        ****kind****SourceKind
        :   Whether this is a local file or a URL.

        ****provenance****dict
        :   Merged provenance metadata to propagate into
            `create` calls.

    Parameters:
    :   * ****path\_or\_url**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kind**** ([**SourceKind**](scikitplot.corpus.SourceKind.html#scikitplot.corpus.SourceKind "scikitplot.corpus._sources._source.SourceKind"))
        * ****provenance**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)

    property as\_path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")[#](#scikitplot.corpus.SourceEntry.as_path "Link to this definition")
    :   Return `path_or_url` as a [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)").

        Raises:
        :   ValueError
            :   If this entry is a URL (not a local path).

    property is\_url: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.SourceEntry.is_url "Link to this definition")
    :   Return `True` if this entry is a URL.

    kind: [SourceKind](scikitplot.corpus.SourceKind.html#scikitplot.corpus.SourceKind "scikitplot.corpus._sources._source.SourceKind")[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_sources/_source.py#L117)[#](#scikitplot.corpus.SourceEntry.kind "Link to this definition")

    path\_or\_url: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_sources/_source.py#L117)[#](#scikitplot.corpus.SourceEntry.path_or_url "Link to this definition")

    provenance: [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/corpus/_sources/_source.py#L117)[#](#scikitplot.corpus.SourceEntry.provenance "Link to this definition")