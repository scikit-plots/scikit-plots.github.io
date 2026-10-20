# materialize\_plan[#](#materialize-plan "Link to this heading")

scikitplot.corpus.materialize\_plan(**plan**, **\***, **policy=None**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_runtime.py#L619)[#](#scikitplot.corpus.materialize_plan "Link to this definition")
:   Resolve a validated [`CorpusPlan`](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus.CorpusPlan") into runtime components.

    Materialization does not read `plan.source`. It constructs only the
    runtime objects required by enabled stages, preserving the side-effect-free
    configuration contract of [`FluentCorpus`](scikitplot.corpus.FluentCorpus.html#scikitplot.corpus.FluentCorpus "scikitplot.corpus.FluentCorpus") itself.

    Parameters:
    :   * ****plan**** ([**CorpusPlan**](scikitplot.corpus.CorpusPlan.html#scikitplot.corpus.CorpusPlan "scikitplot.corpus.CorpusPlan"))
        * ****policy**** ([**RuntimePolicy**](scikitplot.corpus.RuntimePolicy.html#scikitplot.corpus.RuntimePolicy "scikitplot.corpus.RuntimePolicy") **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **Any****]** **|** **None**)
        * ****registry**** ([**ComponentRegistry**](scikitplot.corpus.ComponentRegistry.html#scikitplot.corpus.ComponentRegistry "scikitplot.corpus.ComponentRegistry") **|** **None**)

    Return type:
    :   [RuntimeCorpus](scikitplot.corpus.RuntimeCorpus.html#scikitplot.corpus.RuntimeCorpus "scikitplot.corpus.RuntimeCorpus")