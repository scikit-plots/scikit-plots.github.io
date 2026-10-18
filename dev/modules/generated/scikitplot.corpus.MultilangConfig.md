# MultilangConfig[#](#multilangconfig "Link to this heading")

class scikitplot.corpus.MultilangConfig(**\***, **enabled=True**, **include\_raw\_text=False**, **include\_preprocessing\_trace=False**, **include\_semantemes=True**, **include\_script\_spans=True**, **include\_grapheme\_counts=True**, **include\_embedding\_hook=True**, **embedding\_model\_name=None**, **embedding\_model\_version=None**, **language\_hint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_multilang_mixin.py#L106)[#](#scikitplot.corpus.MultilangConfig "Link to this definition")
:   Multilang feature flags for any chunker.

    Passed as a constructor parameter to the five chunker classes. All
    flags default to the lowest-cost setting so that existing code that
    does not set `multilang_config` is unaffected.

    Parameters:
    :   ****enabled****bool
        :   Master switch. When `False` the mixin skips ALL multilang
            processing and returns chunks with no `multilang` metadata key.
            Default `True`.

        ****include\_raw\_text****bool
        :   Preserve the pre-normalised raw text in
            `chunk.metadata["multilang"]["raw_text"]` for comparison.
            Default `False`.

        ****include\_preprocessing\_trace****bool
        :   Record every preprocessing step in
            `chunk.metadata["multilang"]["preprocessing_trace"]`.
            Default `False`.

        ****include\_semantemes****bool
        :   Build `SemantemeInfo` list from tokens/morphemes
            and store in `chunk.metadata["multilang"]["semantemes"]`.
            Default `True`.

        ****include\_script\_spans****bool
        :   Run [`ScriptSegmenter`](scikitplot.corpus.ScriptSegmenter.html#scikitplot.corpus.ScriptSegmenter "scikitplot.corpus._chunkers._custom_tokenizer.ScriptSegmenter") on each chunk
            to compute per-script spans.
            Default `True`.

        ****include\_grapheme\_counts****bool
        :   Compute `grapheme_count` and `codepoint_count` per chunk.
            Default `True`.

        ****include\_embedding\_hook****bool
        :   Reserve the `embedding` key in `MultilangChunkMeta` for later
            population by an embedder. Setting this to `False` excludes
            the key entirely.
            Default `True`.

        ****embedding\_model\_name****str or None
        :   Name of the embedding model to record in `script_model_version`.
            Set this when the chunker itself is embedding-aware (e.g.
            [`SemanticChunker`](scikitplot.corpus.SemanticChunker.html#scikitplot.corpus.SemanticChunker "scikitplot.corpus._chunkers._semantic.SemanticChunker")).
            Default `None`.

        ****embedding\_model\_version****str or None
        :   Version tag for `embedding_model_name`. Default `None`.

        ****language\_hint****str or None
        :   BCP-47 language code override. When set, overrides auto-detection
            for all chunks produced in this run. Default `None`.

    Parameters:
    :   * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_raw\_text**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_preprocessing\_trace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_semantemes**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_script\_spans**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_grapheme\_counts**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****include\_embedding\_hook**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****embedding\_model\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****embedding\_model\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****language\_hint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> cfg = MultilangConfig(
    ...     include_raw_text=True,
    ...     include_preprocessing_trace=True,
    ...     include_semantemes=True,
    ... )
    >>> cfg.enabled
    True

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[Compare Corpus Chunking Strategies on OCR Text](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

Compare Corpus Chunking Strategies on OCR Text