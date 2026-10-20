# closest[#](#closest "Link to this heading")

scikitplot.levenshtein.closest(**query**, **choices**, **\***, **key=None**, **score\_cutoff=0.0**, **backend='auto'**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/levenshtein/_core.py#L581)[#](#scikitplot.levenshtein.closest "Link to this definition")
:   Return the closest choice, or `None` for an empty iterable.

    Parameters:
    :   * ****query**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****choices**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****key**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****score\_cutoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**Match**](scikitplot.levenshtein.Match.html#scikitplot.levenshtein.Match "scikitplot.levenshtein._core.Match") | None

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_levenshtein_ranking_script_thumb.png)

[Rank fuzzy matches](../../auto_examples/levenshtein/plot_levenshtein_ranking_script.html)

Rank fuzzy matches