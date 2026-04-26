# CustomNLPEnricher[#](#customnlpenricher "Link to this heading")

class scikitplot.corpus.CustomNLPEnricher(**config=None**, **\***, **custom\_config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_custom_hooks.py#L617)[#](#scikitplot.corpus.CustomNLPEnricher "Link to this definition")
:   `NLPEnricher` extended with
    fully-replaceable NLP backends.

    Wraps a standard `NLPEnricher` and
    intercepts each processing stage when the corresponding custom callable is
    set in `custom_config`. Built-in backends are used as fallback for
    any stage without a custom override.

    Parameters:
    :   ****config****EnricherConfig or None, optional
        :   Standard enrichment configuration. `None` uses defaults.

        ****custom\_config****CustomEnricherConfig or None, optional
        :   Custom backend callables. `None` disables all custom overrides
            (equivalent to using plain `NLPEnricher`).

    Parameters:
    :   * ****config**** (**Any** **|** **None**)
        * ****custom\_config**** ([**CustomEnricherConfig**](scikitplot.corpus.CustomEnricherConfig.html#scikitplot.corpus.CustomEnricherConfig "scikitplot.corpus.CustomEnricherConfig") **|** **None**)

    > **See also**
    > `scikitplot.corpus._enrichers.NLPEnricher`
    :   Built-in enricher.

    [`CustomEnricherConfig`](scikitplot.corpus.CustomEnricherConfig.html#scikitplot.corpus.CustomEnricherConfig "scikitplot.corpus.CustomEnricherConfig")
    :   Custom backend callables configuration.

    Notes

    ****User note:**** Drop-in replacement for
    `NLPEnricher`.
    The same `enrich_documents()` interface is preserved.

    ****Developer note:**** Delegation order per stage:

    1. If `custom_config.<stage>` is set → call the custom callable.
    2. Otherwise → delegate to the wrapped `NLPEnricher` method.

    This keeps the built-in lazy-loading cache (spaCy, NLTK, stemmer)
    intact for any stage that does not have a custom override.

    Examples

    Try it in your browser!

    Integrate a custom tokenizer (e.g. SentencePiece):

    ```
    import sentencepiece as spm

    sp = spm.SentencePieceProcessor()
    sp.load("bpe.model")

    def sp_tokenize(text):
        return sp.encode(text, out_type=str)

    ccfg = CustomEnricherConfig(custom_tokenizer=sp_tokenize)
    enricher = CustomNLPEnricher(custom_config=ccfg)
    docs = enricher.enrich_documents(corpus_docs)

    ```
    Go BackOpen In Tab

    enrich\_documents(**documents**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_custom_hooks.py#L702)[#](#scikitplot.corpus.CustomNLPEnricher.enrich_documents "Link to this definition")
    :   Enrich a batch of `CorpusDocument` instances using custom or
        built-in backends per stage.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   List of Corpus Document.

            ****overwrite****bool, optional
            :   Overwrite.

        Returns:
        :   list[CorpusDocument]

        Parameters:
        :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]