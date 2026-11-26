# component\_capabilities[#](#component-capabilities "Link to this heading")

scikitplot.corpus.component\_capabilities(**names=None**, **\***, **role=None**, **selected=()**, **active=()**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_capabilities.py#L906)[#](#scikitplot.corpus.component_capabilities "Link to this definition")
:   Return JSON-compatible readiness records for components.

    Unlike [`capability_snapshot`](scikitplot.corpus.capability_snapshot.html#scikitplot.corpus.capability_snapshot "scikitplot.corpus.capability_snapshot"), this API distinguishes package
    installation from asset readiness and contextual selection/activity.
    `role` provides discoverability without requiring callers to know every
    concrete capability identifier. When both `names` and `role` are given,
    the role filters the explicitly requested names.

    Parameters:
    :   * ****names**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****role**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****selected**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****active**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****registry**** ([**CapabilityRegistry**](scikitplot.corpus.CapabilityRegistry.html#scikitplot.corpus.CapabilityRegistry "scikitplot.corpus._capabilities.CapabilityRegistry") **|** **None**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_backend_policy_script_thumb.png)

[Customize Corpus backends and readiness policies](../../auto_examples/corpus/plot_corpus_backend_policy_script.html)

Customize Corpus backends and readiness policies