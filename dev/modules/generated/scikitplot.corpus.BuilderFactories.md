# BuilderFactories[#](#builderfactories "Link to this heading")

class scikitplot.corpus.BuilderFactories(**reader\_factory=None**, **chunker\_factory=None**, **filter\_factory=None**, **normalizer\_factory=None**, **enricher\_factory=None**, **embedding\_engine\_factory=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/corpus/_custom_hooks.py#L1333)[#](#scikitplot.corpus.BuilderFactories "Link to this definition")
:   Component factory callables for [`FactoryCorpusBuilder`](scikitplot.corpus.FactoryCorpusBuilder.html#scikitplot.corpus.FactoryCorpusBuilder "scikitplot.corpus.FactoryCorpusBuilder").

    Each factory replaces the corresponding lazy-creation method in
    [`CorpusBuilder`](scikitplot.corpus.CorpusBuilder.html#scikitplot.corpus.CorpusBuilder "scikitplot.corpus._corpus_builder.CorpusBuilder"). `None`
    means “use the default from [`BuilderConfig`](scikitplot.corpus.BuilderConfig.html#scikitplot.corpus.BuilderConfig "scikitplot.corpus._corpus_builder.BuilderConfig")”.

    Parameters:
    :   ****reader\_factory****callable or None, optional
        :   Factory for [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").
            Called once per source. Receives `(source: str | Path, chunker,
            **reader_kwargs) -> DocumentReader`. Signature:

            ```
            def reader_factory(
                source: str | pathlib.Path,
                chunker: ChunkerBase | None,
                **reader_kwargs: Any,
            ) -> DocumentReader: ...

            ```

        ****chunker\_factory****callable or None, optional
        :   Factory for the chunker. Called once at build time. No arguments.
            Signature:

            ```
            def chunker_factory() -> ChunkerBase | None: ...

            ```

        ****filter\_factory****callable or None, optional
        :   Factory for the [`FilterBase`](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase").
            Called once at build time. No arguments. Signature:

            ```
            def filter_factory() -> FilterBase | None: ...

            ```

        ****normalizer\_factory****callable or None, optional
        :   Factory for the
            `NormalizationPipeline`.
            Called once at build time. No arguments. Signature:

            ```
            def normalizer_factory() -> NormalizationPipeline | None: ...

            ```

        ****enricher\_factory****callable or None, optional
        :   Factory for the enricher. Called once at build time. No arguments.
            Signature:

            ```
            def enricher_factory() -> NLPEnricher | None: ...

            ```

        ****embedding\_engine\_factory****callable or None, optional
        :   Factory for the embedding engine. Called once at build time.
            No arguments. Signature:

            ```
            def embedding_engine_factory() -> EmbeddingEngine | None: ...

            ```

    Parameters:
    :   * ****reader\_factory**** (**Callable****[****...****,** **Any****]** **|** **None**)
        * ****chunker\_factory**** (**Callable****[****[****]****,** **Any****]** **|** **None**)
        * ****filter\_factory**** (**Callable****[****[****]****,** **Any****]** **|** **None**)
        * ****normalizer\_factory**** (**Callable****[****[****]****,** **Any****]** **|** **None**)
        * ****enricher\_factory**** (**Callable****[****[****]****,** **Any****]** **|** **None**)
        * ****embedding\_engine\_factory**** (**Callable****[****[****]****,** **Any****]** **|** **None**)

    Notes

    ****User note:**** Factories take precedence over the corresponding
    `BuilderConfig` settings. For example, if `chunker_factory` is set,
    `BuilderConfig.chunker` is ignored for chunker creation.

    Examples

    Try it in your browser!

    Use a custom reader factory that injects a per-source language code:

    ```
    from langdetect import detect

    def smart_reader_factory(source, chunker, **kw):
        lang = detect(open(source).read(200)) if Path(source).exists() else None
        return DocumentReader.create(source, chunker=chunker, default_language=lang)

    factories = BuilderFactories(reader_factory=smart_reader_factory)
    builder = FactoryCorpusBuilder(factories=factories)
    result = builder.build("./data/")

    ```
    Go BackOpen In Tab

    chunker\_factory: Callable[[], Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderFactories.chunker_factory "Link to this definition")

    embedding\_engine\_factory: Callable[[], Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderFactories.embedding_engine_factory "Link to this definition")

    enricher\_factory: Callable[[], Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderFactories.enricher_factory "Link to this definition")

    filter\_factory: Callable[[], Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderFactories.filter_factory "Link to this definition")

    normalizer\_factory: Callable[[], Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderFactories.normalizer_factory "Link to this definition")

    reader\_factory: Callable[..., Any] | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.BuilderFactories.reader_factory "Link to this definition")