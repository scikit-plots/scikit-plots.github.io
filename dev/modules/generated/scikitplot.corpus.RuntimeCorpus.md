# RuntimeCorpus[#](#runtimecorpus "Link to this heading")

class scikitplot.corpus.RuntimeCorpus(**plan**, **pipeline**, **storage=None**, **index\_config=None**, **retrieval\_config=None**, **export\_format=None**, **policy=<factory>**, **\_owns\_storage=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L405)[#](#scikitplot.corpus.RuntimeCorpus "Link to this definition")
:   Materialized operational view of a validated [`CorpusPlan`](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus.CorpusPlan").

    The runtime delegates content processing to [`CorpusPipeline`](scikitplot.corpus.CorpusPipeline.html#scikitplot.corpus.CorpusPipeline "scikitplot.corpus.CorpusPipeline"),
    persistence to [`StorageBase`](scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase "scikitplot.corpus.StorageBase"), dense/sparse search to
    [`RetrievalIndex`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex "scikitplot.corpus.RetrievalIndex"), and serialization to [`export_documents`](scikitplot.corpus.export_documents.html#scikitplot.corpus.export_documents "scikitplot.corpus.export_documents").
    It owns orchestration and lifecycle only.

    Parameters:
    :   * ****plan**** ([**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan"))
        * ****pipeline**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****storage**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****index\_config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****retrieval\_config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****export\_format**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****policy**** ([**RuntimePolicy**](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy"))
        * ****\_owns\_storage**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    add(**source**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L531)[#](#scikitplot.corpus.RuntimeCorpus.add "Link to this definition")
    :   Process additional source(s), then rebuild one coherent index generation.

        Parameters:
        :   ****source**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L601)[#](#scikitplot.corpus.RuntimeCorpus.close "Link to this definition")
    :   Release runtime-owned resources. Safe to call more than once.

        Return type:
        :   None

    property closed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.RuntimeCorpus.closed "Link to this definition")
    :   Whether [`close`](#scikitplot.corpus.RuntimeCorpus.close "scikitplot.corpus.RuntimeCorpus.close") has been called.

    property documents: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"), ...][#](#scikitplot.corpus.RuntimeCorpus.documents "Link to this definition")
    :   Documents committed to this runtime generation.

    export(**output\_path**, **\***, **format=None**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L584)[#](#scikitplot.corpus.RuntimeCorpus.export "Link to this definition")
    :   Export the currently committed documents using the plan’s export format.

        Parameters:
        :   * ****output\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
            * ****format**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")

    export\_format: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.RuntimeCorpus.export_format "Link to this definition")

    property index: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[#](#scikitplot.corpus.RuntimeCorpus.index "Link to this definition")
    :   Built [`RetrievalIndex`](scikitplot.corpus.RetrievalIndex.html#scikitplot.corpus.RetrievalIndex "scikitplot.corpus.RetrievalIndex"), or `None` before a successful run.

    index\_config: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.RuntimeCorpus.index_config "Link to this definition")

    property index\_generation: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[#](#scikitplot.corpus.RuntimeCorpus.index_generation "Link to this definition")
    :   Current retrieval-index generation, or `None` when no index exists.

    pipeline: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L405)[#](#scikitplot.corpus.RuntimeCorpus.pipeline "Link to this definition")

    plan: [CorpusPlan](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus._plan.CorpusPlan")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L405)[#](#scikitplot.corpus.RuntimeCorpus.plan "Link to this definition")

    property plan\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.RuntimeCorpus.plan_fingerprint "Link to this definition")
    :   Fingerprint of the immutable plan that produced this runtime.

    policy: [RuntimePolicy](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L405)[#](#scikitplot.corpus.RuntimeCorpus.policy "Link to this definition")

    query\_storage(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L577)[#](#scikitplot.corpus.RuntimeCorpus.query_storage "Link to this definition")
    :   Query the configured storage backend.

        Parameters:
        :   ****query**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    retrieval\_config: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.RuntimeCorpus.retrieval_config "Link to this definition")

    run(**source=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L503)[#](#scikitplot.corpus.RuntimeCorpus.run "Link to this definition")
    :   Process the plan source and commit storage/index state once.

        Use [`add`](#scikitplot.corpus.RuntimeCorpus.add "scikitplot.corpus.RuntimeCorpus.add") for subsequent sources. Requiring an explicit `add`
        avoids a second `run` silently mixing new data with storage/index state
        left by the first generation.

        Parameters:
        :   ****source**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    search(**query**, **\***, **config=None**, **filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L542)[#](#scikitplot.corpus.RuntimeCorpus.search "Link to this definition")
    :   Search the current runtime index using the configured retrieval policy.

        `filter` (a `Filter` or its JSON form) restricts the search to
        matching documents (R2-2); see `RetrievalIndex.search`.

        Parameters:
        :   * ****query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****config**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****filter**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    storage: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.corpus.RuntimeCorpus.storage "Link to this definition")