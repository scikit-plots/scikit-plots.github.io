# RuntimePolicy[#](#runtimepolicy "Link to this heading")

class scikitplot.corpus.RuntimePolicy(**allow\_network=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/corpus/_runtime.py#L46)[#](#scikitplot.corpus.RuntimePolicy "Link to this definition")
:   Execution policy applied by [`RuntimeCorpus`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus").

    Parameters:
    :   ****allow\_network****bool, optional
        :   Allow `http://` / `https://` sources at execution time. The
            offline-safe default is `False`. This policy is checked before the
            existing reader/URL security layer; it does not replace SSRF, redirect,
            size, timeout, or archive protections.

    Parameters:
    :   ****allow\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    allow\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.RuntimePolicy.allow_network "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus