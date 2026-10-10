# VectorIndex[#](#vectorindex "Link to this heading")

class scikitplot.mcp.VectorIndex(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_corpus_annoy.py#L71)[#](#scikitplot.mcp.VectorIndex "Link to this definition")
:   Anything that returns `(doc_id, score)` pairs for a query vector.

    Satisfied by `scikitplot.corpus.RetrievalIndex` (via its `query`
    seam), whose default dense backend is `scikitplot.annoy`.

    query(**vector**, **k**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/mcp/_corpus_annoy.py#L79)[#](#scikitplot.mcp.VectorIndex.query "Link to this definition")
    :   Parameters:
        :   * ****vector**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]