# SimpleFrequencyEnricher[#](#simplefrequencyenricher "Link to this heading")

class scikitplot.corpus.SimpleFrequencyEnricher(**spec=None**, **\***, **min\_token\_length=None**, **max\_keywords=None**, **lowercase=None**, **token\_pattern=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_enrichers/_simple.py#L80)[#](#scikitplot.corpus.SimpleFrequencyEnricher "Link to this definition")
:   Populate tokens and deterministic frequency-ranked keywords.

    The implementation is intentionally small and dependency-free. It uses
    `normalized_text` when available, otherwise `text`. Existing tokens or
    keywords are preserved when `overwrite=False`; if tokens already exist
    but keywords do not, those tokens are reused to derive keywords.

    Parameters:
    :   ****spec****SimpleEnricherSpec or None, optional
        :   Declarative configuration. If omitted, keyword overrides can be passed
            directly for convenience.

        ****min\_token\_length****int or None, keyword-only
        :   Convenience override used only when `spec` is omitted.

        ****max\_keywords****int or None, keyword-only
        :   Convenience override used only when `spec` is omitted.

        ****lowercase****bool or None, keyword-only
        :   Convenience override used only when `spec` is omitted.

        ****token\_pattern****str or None, keyword-only
        :   Convenience override used only when `spec` is omitted.

    Parameters:
    :   * ****spec**** ([**SimpleEnricherSpec**](scikitplot.corpus.SimpleEnricherSpec.html#scikitplot.corpus.SimpleEnricherSpec "scikitplot.corpus._enrichers._simple.SimpleEnricherSpec"))
        * ****min\_token\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****max\_keywords**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****lowercase**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****token\_pattern**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> enricher = SimpleFrequencyEnricher(min_token_length=2, max_keywords=3)
    >>> enricher.spec.max_keywords
    3

    ```
    Go BackOpen In Tab

    enrich\_documents(**documents**, **\***, **overwrite=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_enrichers/_simple.py#L181)[#](#scikitplot.corpus.SimpleFrequencyEnricher.enrich_documents "Link to this definition")
    :   Return copy-on-write documents with tokens and keywords populated.

        Parameters:
        :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]**)
            * ****overwrite**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")]

    property max\_keywords: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.SimpleFrequencyEnricher.max_keywords "Link to this definition")
    :   Maximum keyword count from [`spec`](#scikitplot.corpus.SimpleFrequencyEnricher.spec "scikitplot.corpus.SimpleFrequencyEnricher.spec").

    property min\_token\_length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.SimpleFrequencyEnricher.min_token_length "Link to this definition")
    :   Minimum token length from [`spec`](#scikitplot.corpus.SimpleFrequencyEnricher.spec "scikitplot.corpus.SimpleFrequencyEnricher.spec").

    spec: [SimpleEnricherSpec](scikitplot.corpus.SimpleEnricherSpec.html#scikitplot.corpus.SimpleEnricherSpec "scikitplot.corpus._enrichers._simple.SimpleEnricherSpec")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_enrichers/_simple.py#L80)[#](#scikitplot.corpus.SimpleFrequencyEnricher.spec "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus