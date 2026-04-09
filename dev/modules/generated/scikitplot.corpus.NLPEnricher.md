# NLPEnricher[#](#nlpenricher "Link to this heading")

class scikitplot.corpus.NLPEnricher(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_enrichers/_nlp_enricher.py#L273)[#](#scikitplot.corpus.NLPEnricher "Link to this definition")
:   Pipeline component that populates NLP enrichment fields on
    `CorpusDocument`.

    Parameters:
    :   ****config****EnricherConfig or None, optional
        :   Enrichment settings. `None` uses defaults.

    Parameters:
    :   ****config**** ([**EnricherConfig**](scikitplot.corpus.EnricherConfig.html#scikitplot.corpus.EnricherConfig "scikitplot.corpus.EnricherConfig") **|** **None**)

    > **See also**
    > [`scikitplot.corpus._normalizers._text_normalizer.TextNormalizer`](scikitplot.corpus.TextNormalizer.html#scikitplot.corpus.TextNormalizer "scikitplot.corpus._normalizers._text_normalizer.TextNormalizer")
    :   Upstream component that prepares `normalized_text`.

    `scikitplot.corpus._schema.CorpusDocument`
    :   The `tokens`, `lemmas`, `stems`, `keywords` fields.

    Notes

    ****User note:**** Insert after `TextNormalizer` and before
    `EmbeddingEngine` in the pipeline:

    ```
    source → reader → chunker → filter → normalizer
      → **enricher** → embedder

    ```

    The enricher reads `doc.normalized_text` when available,
    falling back to `doc.text`.

    ****Developer note:**** All NLP backends are lazy-loaded and
    cached on `self._*` attributes. The class is NOT thread-safe
    (shared mutable cache). Use separate instances per thread.

    Examples

    ```
    >>> enricher = NLPEnricher()
    >>> # doc = CorpusDocument(text="The quick brown fox.", ...)
    >>> # docs = enricher.enrich_documents([doc])
    >>> # docs[0].tokens == ["quick", "brown", "fox"]

    ```

    enrich\_documents(**documents**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/corpus/_enrichers/_nlp_enricher.py#L328)[#](#scikitplot.corpus.NLPEnricher.enrich_documents "Link to this definition")
    :   Enrich a batch of `CorpusDocument` instances.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   Documents to enrich. Not mutated.

            ****overwrite****bool, optional
            :   Re-enrich even if NLP fields are already populated.

        Returns:
        :   list[CorpusDocument]
            :   New instances with NLP fields populated.

        Parameters:
        :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples