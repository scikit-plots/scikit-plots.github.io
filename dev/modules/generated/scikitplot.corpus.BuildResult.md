# BuildResult[#](#buildresult "Link to this heading")

class scikitplot.corpus.BuildResult(**documents=<factory>**, **n\_sources=0**, **n\_raw=0**, **n\_filtered=0**, **n\_normalised=0**, **n\_enriched=0**, **n\_embedded=0**, **index=None**, **errors=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_corpus_builder.py#L292)[#](#scikitplot.corpus.BuildResult "Link to this definition")
:   Result of a corpus build operation.

    Parameters:
    :   ****documents****list[CorpusDocument]
        :   The processed documents.

        ****n\_sources****int
        :   Number of source files/URLs processed.

        ****n\_raw****int
        :   Total raw chunks before filtering.

        ****n\_filtered****int
        :   Chunks removed by filtering.

        ****n\_normalised****int
        :   Chunks that were text-normalised.

        ****n\_enriched****int
        :   Chunks that were NLP-enriched.

        ****n\_embedded****int
        :   Chunks that were embedded.

        ****index****SimilarityIndex or None
        :   Built similarity index (if `build_index=True`).

        ****errors****list[tuple[str, Exception]]
        :   `(input_path, exception)` pairs for failed sources.

    Parameters:
    :   * ****documents**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[****Any****]**)
        * ****n\_sources**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_raw**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_filtered**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_normalised**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_enriched**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****n\_embedded**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****index**** (**Any**)
        * ****errors**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Exception**](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)")**]****]**)

    Notes

    ****User note:**** Access documents directly:

    ```
    result = builder.build("./data/")
    for doc in result.documents:
        print(doc.text[:80])

    ```

    documents: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[Any][[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_corpus_builder.py#L292)[#](#scikitplot.corpus.BuildResult.documents "Link to this definition")

    errors: [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [Exception](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)")]][[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_corpus_builder.py#L292)[#](#scikitplot.corpus.BuildResult.errors "Link to this definition")

    index: Any = None[#](#scikitplot.corpus.BuildResult.index "Link to this definition")

    property n\_documents: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.BuildResult.n_documents "Link to this definition")
    :   Number of [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument") instances in [`documents`](#scikitplot.corpus.BuildResult.documents "scikitplot.corpus.BuildResult.documents").

        Returns:
        :   int

    n\_embedded: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.BuildResult.n_embedded "Link to this definition")

    n\_enriched: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.BuildResult.n_enriched "Link to this definition")

    n\_filtered: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.BuildResult.n_filtered "Link to this definition")

    n\_normalised: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.BuildResult.n_normalised "Link to this definition")

    n\_raw: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.BuildResult.n_raw "Link to this definition")

    n\_sources: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.BuildResult.n_sources "Link to this definition")

    property success\_rate: [float](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")[#](#scikitplot.corpus.BuildResult.success_rate "Link to this definition")
    :   Fraction of ingested sources that completed without error.

        Returns:
        :   float
            :   `(n_sources - len(errors)) / n_sources` in `[0.0, 1.0]`.
                Returns `1.0` when no sources were processed.

    summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/corpus/_corpus_builder.py#L361)[#](#scikitplot.corpus.BuildResult.summary "Link to this definition")
    :   Return a multi-line human-readable build summary.

        Returns:
        :   str
            :   Multi-line string reporting sources, documents, normalisation,
                enrichment, embedding counts, and any errors.

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")