# NLPEnricher[#](#nlpenricher "Link to this heading")

class scikitplot.corpus.NLPEnricher(**config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_enrichers/_nlp_enricher.py#L484)[#](#scikitplot.corpus.NLPEnricher "Link to this definition")
:   Pipeline component that populates NLP enrichment fields on
    [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument").

    Parameters:
    :   ****config****EnricherConfig or None, optional
        :   Enrichment settings. `None` uses all defaults.

    Parameters:
    :   ****config**** ([**EnricherConfig**](scikitplot.corpus.EnricherConfig.html#scikitplot.corpus.EnricherConfig "scikitplot.corpus.EnricherConfig") **|** **None**)

    Notes

    ****User note:**** Insert after `TextNormalizer` and before
    `EmbeddingEngine` in the pipeline:

    ```
    source → reader → chunker → filter → normalizer
      → **enricher** → embedder

    ```

    The enricher reads `doc.normalized_text` when available,
    falling back to `doc.text`. When `language=None`, the
    dominant script of each document is detected independently via
    `detect_script`.

    ****Developer note:**** All NLP backends are lazy-loaded and cached on
    `self._*` attributes. The class is NOT thread-safe. Use separate
    instances per thread.

    Examples

    Try it in your browser!
    ```
    >>> cfg = EnricherConfig(
    ...     language=["en", "ar"],
    ...     keyword_extractor="tfidf",
    ...     sentence_count=True,
    ...     char_count=True,
    ...     save_token_scores=True,
    ... )
    >>> enricher = NLPEnricher(cfg)
    >>> # docs = enricher.enrich_documents([doc1, doc2])

    ```
    Go BackOpen In Tab

    enrich\_documents(**documents**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_enrichers/_nlp_enricher.py#L535)[#](#scikitplot.corpus.NLPEnricher.enrich_documents "Link to this definition")
    :   Enrich a batch of `CorpusDocument` instances.

        Parameters:
        :   ****documents****Sequence[CorpusDocument]
            :   Documents to enrich. Original objects are not mutated;
                new instances are returned via `doc.replace()`.

            ****overwrite****bool, optional
            :   When `True`, re-enrich even if NLP fields are already set.
                Default `False` (skip already-enriched documents).

        Returns:
        :   list[CorpusDocument]
            :   New document instances with NLP and metadata fields populated.

        Parameters:
        :   * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]**)
            * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

        Notes

        ****Developer note:**** Documents are processed sequentially.
        For large corpora, call in batches to control memory.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples