# derive\_graph[#](#derive-graph "Link to this heading")

scikitplot.corpus.derive\_graph(**documents**, **\***, **generation=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_graph.py#L471)[#](#scikitplot.corpus.derive_graph "Link to this definition")
:   Build the G0 view from document fields.

    Parameters:
    :   ****documents****Iterable[Any]
        :   iterable of CorpusDocument

        ****generation****str or None, optional
        :   Recorded on every edge for provenance.

    Returns:
    :   DerivedGraph

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****generation**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   **DerivedGraph**

    Notes

    Four relations are derived, each from fields Corpus already stores:

    `contains` / `parent_of`
    :   from `parent_doc_id`. ****Empty on today’s corpora**** – no producer sets
        that field yet (R13 / unknown U-11).

    `same_source`
    :   from `input_path` and `source_type`.

    `precedes`
    :   from `chunk_index` / `paragraph_index` / `frame_index` within one
        parent.

    `references` is **not** derived: `CorpusDocument` has a single `url`
    field – its own source URL, not outbound links – so true reference edges
    need G1 body-link extraction (finding F-R08-03).