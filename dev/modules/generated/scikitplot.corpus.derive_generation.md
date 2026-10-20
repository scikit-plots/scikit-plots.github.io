# derive\_generation[#](#derive-generation "Link to this heading")

scikitplot.corpus.derive\_generation(**documents**, **\***, **backend=None**, **schema\_version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_generation.py#L210)[#](#scikitplot.corpus.derive_generation "Link to this definition")
:   Derive the generation identity for a set of documents.

    Parameters:
    :   ****documents****Iterable[Any]
        :   iterable of CorpusDocument

        ****backend****str or None, optional
        :   Name of the built index backend.

        ****schema\_version****str or None, optional
        :   Overrides the package’s current serialisation version, for tests and for
            loading a persisted index written by another build.

    Returns:
    :   IndexGeneration

    Raises:
    :   ValueError
        :   If the documents span more than one embedding manifest. That condition
            is already refused at build time; deriving a single generation for
            incompatible vectors would silently paper over it.

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****schema\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**IndexGeneration**](scikitplot.corpus.IndexGeneration.html#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration")

    Notes

    ****Developer.**** `embedding_manifest_id` is taken from the documents rather
    than from an engine, so a **persisted** index can have its generation recomputed
    from what it contains – which is the whole point of moving off a counter.