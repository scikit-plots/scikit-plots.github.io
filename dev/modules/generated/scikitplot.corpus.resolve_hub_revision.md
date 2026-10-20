# resolve\_hub\_revision[#](#resolve-hub-revision "Link to this heading")

scikitplot.corpus.resolve\_hub\_revision(**model\_name**, **\***, **timeout=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_embeddings/_cache_policy.py#L247)[#](#scikitplot.corpus.resolve_hub_revision "Link to this definition")
:   Return the Hugging Face Hub commit a model id currently points to.

    Parameters:
    :   ****model\_name****str
        :   A full Hub repository id, `"owner/name"`.

        ****timeout****float or None, default=None
        :   Request timeout in seconds, passed to the Hub client.

    Returns:
    :   str
        :   The commit hash (`huggingface_hub.model_info(model_name).sha`).

    Raises:
    :   ValueError
        :   If `model_name` is not `"owner/name"` (a short name such as
            `"all-MiniLM-L6-v2"` is completed by sentence-transformers’ own
            rules, which this function does not guess), is an existing local
            directory, or the Hub reports no commit.

        ImportError
        :   If `huggingface_hub` is not installed.

    Parameters:
    :   * ****model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****timeout**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****User.**** The engine loads the revision this returns, so the cache key,
    the manifest and the model agree. It needs the network once per engine.