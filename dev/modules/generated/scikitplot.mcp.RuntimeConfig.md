# RuntimeConfig[#](#runtimeconfig "Link to this heading")

class scikitplot.mcp.RuntimeConfig(**transport**, **docs\_jsonl**, **corpus\_annoy**, **corpus\_embedding\_model**, **hash\_dimension**, **annoy\_metric**, **annoy\_n\_trees**, **corpus\_mode**, **host**, **port**, **path**, **health\_path**, **max\_concurrency**, **max\_request\_body**, **stateful\_http**, **allow\_unauthenticated\_remote**, **docker**, **log\_level**, **probe**, **probe\_timeout**, **self\_test**, **self\_test\_query**, **self\_test\_require\_match**, **self\_test\_expected\_doc\_id**, **corpus\_filter=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig "Link to this definition")
:   Validated effective CLI configuration.

    Parameters:
    :   * ****transport**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****docs\_jsonl**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****corpus\_annoy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****corpus\_embedding\_model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****hash\_dimension**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****annoy\_metric**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****annoy\_n\_trees**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****corpus\_mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****host**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****port**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****health\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****max\_concurrency**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_request\_body**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****stateful\_http**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****allow\_unauthenticated\_remote**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****docker**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****log\_level**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****probe**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****probe\_timeout**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****self\_test**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****self\_test\_query**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****self\_test\_require\_match**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****self\_test\_expected\_doc\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****corpus\_filter**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    allow\_unauthenticated\_remote: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.allow_unauthenticated_remote "Link to this definition")

    annoy\_metric: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.annoy_metric "Link to this definition")

    annoy\_n\_trees: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.annoy_n_trees "Link to this definition")

    corpus\_annoy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.corpus_annoy "Link to this definition")

    corpus\_embedding\_model: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.corpus_embedding_model "Link to this definition")

    corpus\_filter: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.mcp.RuntimeConfig.corpus_filter "Link to this definition")

    corpus\_mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.corpus_mode "Link to this definition")

    docker: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.docker "Link to this definition")

    docs\_jsonl: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.docs_jsonl "Link to this definition")

    hash\_dimension: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.hash_dimension "Link to this definition")

    health\_path: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.health_path "Link to this definition")

    host: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.host "Link to this definition")

    log\_level: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.log_level "Link to this definition")

    max\_concurrency: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.max_concurrency "Link to this definition")

    max\_request\_body: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.max_request_body "Link to this definition")

    path: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.path "Link to this definition")

    port: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.port "Link to this definition")

    probe: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.probe "Link to this definition")

    probe\_timeout: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.probe_timeout "Link to this definition")

    self\_test: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.self_test "Link to this definition")

    self\_test\_expected\_doc\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.self_test_expected_doc_id "Link to this definition")

    self\_test\_query: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.self_test_query "Link to this definition")

    self\_test\_require\_match: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.self_test_require_match "Link to this definition")

    stateful\_http: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.stateful_http "Link to this definition")

    transport: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/mcp/__main__.py#L90)[#](#scikitplot.mcp.RuntimeConfig.transport "Link to this definition")