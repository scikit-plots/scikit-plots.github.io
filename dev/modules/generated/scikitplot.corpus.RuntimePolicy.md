# RuntimePolicy[#](#runtimepolicy "Link to this heading")

class scikitplot.corpus.RuntimePolicy(**allow\_network=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_runtime.py#L52)[#](#scikitplot.corpus.RuntimePolicy "Link to this definition")
:   Execution-boundary policy applied by [`RuntimeCorpus`](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus").

    Parameters:
    :   ****allow\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    allow\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.RuntimePolicy.allow_network "Link to this definition")

    classmethod from\_config(**config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_runtime.py#L76)[#](#scikitplot.corpus.RuntimePolicy.from_config "Link to this definition")
    :   Build from JSON/YAML-shaped data, rejecting unknown fields.

        Parameters:
        :   ****config**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**RuntimePolicy**](#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy")

    classmethod networked()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_runtime.py#L67)[#](#scikitplot.corpus.RuntimePolicy.networked "Link to this definition")
    :   Return a policy that explicitly permits URL source execution.

        Return type:
        :   [**RuntimePolicy**](#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy")

    classmethod offline()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_runtime.py#L62)[#](#scikitplot.corpus.RuntimePolicy.offline "Link to this definition")
    :   Return the default local-only execution policy.

        Return type:
        :   [**RuntimePolicy**](#scikitplot.corpus.RuntimePolicy "scikitplot.corpus._runtime.RuntimePolicy")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_runtime.py#L72)[#](#scikitplot.corpus.RuntimePolicy.to_dict "Link to this definition")
    :   Return a JSON-compatible representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_fluent_corpus_script_thumb.png)

[Configure Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_corpus_script.html)

Configure Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script.html)

Build and Search a Real Hamlet Corpus with FluentCorpus![](../../_images/sphx_glr_plot_corpus_fluent_hamlet_retrieval_script_v2_thumb.png)

[Build and Search a Real Hamlet Corpus with FluentCorpus](../../auto_examples/corpus/plot_corpus_fluent_hamlet_retrieval_script_v2.html)

Build and Search a Real Hamlet Corpus with FluentCorpus