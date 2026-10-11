# SimpleEnricherSpec[#](#simpleenricherspec "Link to this heading")

class scikitplot.corpus.SimpleEnricherSpec(**min\_token\_length=3**, **max\_keywords=8**, **lowercase=True**, **token\_pattern="[^\\W\\d\_]+(?:['’][^\\W\\d\_]+)\*"**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/corpus/_enrichers/_simple.py#L25)[#](#scikitplot.corpus.SimpleEnricherSpec "Link to this definition")
:   Declarative configuration for [`SimpleFrequencyEnricher`](scikitplot.corpus.SimpleFrequencyEnricher.html#scikitplot.corpus.SimpleFrequencyEnricher "scikitplot.corpus.SimpleFrequencyEnricher").

    Parameters:
    :   ****min\_token\_length****int, default=3
        :   Minimum token length retained after tokenization.

        ****max\_keywords****int, default=8
        :   Maximum number of frequency-ranked keywords stored per document.

        ****lowercase****bool, default=True
        :   Lowercase text before tokenization.

        ****token\_pattern****str, optional
        :   Unicode-aware regular expression used to extract tokens.

    Parameters:
    :   * ****min\_token\_length**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_keywords**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****lowercase**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****token\_pattern**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    The spec has no optional NLP dependencies and performs no resource lookup.
    It can be passed directly to `FluentCorpus.enricher(...)`; runtime
    materialization converts it to [`SimpleFrequencyEnricher`](scikitplot.corpus.SimpleFrequencyEnricher.html#scikitplot.corpus.SimpleFrequencyEnricher "scikitplot.corpus.SimpleFrequencyEnricher").

    lowercase: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.SimpleEnricherSpec.lowercase "Link to this definition")

    max\_keywords: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 8[#](#scikitplot.corpus.SimpleEnricherSpec.max_keywords "Link to this definition")

    min\_token\_length: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 3[#](#scikitplot.corpus.SimpleEnricherSpec.min_token_length "Link to this definition")

    token\_pattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = "[^\\W\\d\_]+(?:['’][^\\W\\d\_]+)\*"[#](#scikitplot.corpus.SimpleEnricherSpec.token_pattern "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus