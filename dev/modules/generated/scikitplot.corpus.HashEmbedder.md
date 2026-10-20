# HashEmbedder[#](#hashembedder "Link to this heading")

class scikitplot.corpus.HashEmbedder(**dimension=1024**, **token\_pattern="[^\\W\\d\_]+(?:['’][^\\W\\d\_]+)\*"**, **lowercase=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_hashing.py#L34)[#](#scikitplot.corpus.HashEmbedder "Link to this definition")
:   Embed text with deterministic signed feature hashing.

    Parameters:
    :   ****dimension****int, default=1024
        :   Number of output features. Must be positive.

        ****token\_pattern****str, optional
        :   Regular expression used to extract tokens. The default recognizes
            Unicode words and internal straight/curly apostrophes.

        ****lowercase****bool, default=True
        :   Lowercase text before tokenization.

    Parameters:
    :   * ****dimension**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****token\_pattern**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****lowercase**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    This embedder is deliberately local and deterministic. Each token is hashed
    with BLAKE2b into one output column and assigned a deterministic sign. Rows
    are L2-normalized. The result is suitable for reproducible lexical/dense
    teaching paths, smoke tests, and offline retrieval baselines.

    It does ****not**** provide learned semantic similarity and should not be
    presented as a substitute for sentence-transformer or API embeddings.

    Examples

    Try it in your browser!
    ```
    >>> embedder = HashEmbedder(dimension=32)
    >>> vectors = embedder(["ghost father", "sleep dream"])
    >>> vectors.shape
    (2, 32)
    >>> vectors.dtype == np.float32
    True

    ```
    Go BackOpen In Tab

    \_\_call\_\_(**texts**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_embeddings/_hashing.py#L89)[#](#scikitplot.corpus.HashEmbedder.__call__ "Link to this definition")
    :   Return a normalized `float32` matrix for `texts`.

        Parameters:
        :   ****texts****iterable of str
            :   Input texts. The iterable is consumed exactly once.

        Returns:
        :   numpy.ndarray
            :   Array with shape `(n_texts, dimension)` and dtype `float32`.

        Parameters:
        :   ****texts**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   **NDArray**[**float32**]

    dimension: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 1024[#](#scikitplot.corpus.HashEmbedder.dimension "Link to this definition")

    lowercase: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.HashEmbedder.lowercase "Link to this definition")

    token\_pattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = "[^\\W\\d\_]+(?:['’][^\\W\\d\_]+)\*"[#](#scikitplot.corpus.HashEmbedder.token_pattern "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_mcp_corpus_annoy_hamlet_script_thumb.png)

[Serve a Real Hamlet Corpus over MCP with Annoy](../../auto_examples/mcp/plot_mcp_corpus_annoy_hamlet_script.html)

Serve a Real Hamlet Corpus over MCP with Annoy