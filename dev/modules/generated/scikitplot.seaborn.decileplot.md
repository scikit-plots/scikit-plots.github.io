# decileplot[#](#decileplot "Link to this heading")

scikitplot.seaborn.decileplot(**data=None**, **\***, **x=None**, **y=None**, **hue=None**, **kind=None**, **weights=None**, **n\_deciles=10**, **hue\_order=None**, **hue\_norm=None**, **palette=None**, **color=None**, **fill=False**, **baseline=False**, **line\_kws=None**, **log\_scale=None**, **legend=True**, **ax=None**, **annot=None**, **fmt=''**, **annot\_kws=None**, **digits=None**, **common\_norm=None**, **verbose=False**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/seaborn/_decile.py#L1663)[#](#scikitplot.seaborn.decileplot "Link to this definition")
:   Given binary labels y\_true (0/1) and probabilities y\_score 1d array, compute/plot a decile [[2]](#rd1ed195c7ca1-2) table.

    The function sorts observations by descending score, assigns decile index
    (1..n\_deciles) using pandas qcut on the rank/index to ensure near-equal bins,
    and computes standard decile-level stats (features):

    ```
    [
        "decile",
        "prob_min",
        "prob_max",
        "prob_avg",
        "cnt_resp_total",
        "cnt_resp_true",
        "cnt_resp_false",
        "cnt_resp_rndm_true",
        "cnt_resp_wiz_true",
        "rate_resp",  # (alias to decile_wise_response, decile_wise_gain)
        "rate_resp_pct",  # (alias to decile_wise_response, decile_wise_gain %)
        "overall_rate",
        "cum_resp_total",
        "cum_resp_total_pct",
        "cum_resp_true",  #  (alias to cumulative_gain)
        "cum_resp_true_pct",  #  (alias to cumulative_gain %)
        "cum_resp_false",
        "cum_resp_false_pct",
        "cum_resp_rndm_true",
        "cum_resp_rndm_true_pct",
        "cum_resp_wiz_true",
        "cum_resp_wiz_true_pct",
        "cumulative_lift",
        "decile_wise_lift",
        "KS",
    ]

    ```

    Parameters:
    :   ****data****[`pandas.DataFrame`](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.1.0.dev0+1386.gcb2086a1a4)"), [`numpy.ndarray`](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), mapping, or sequence
        :   Input data structure. Either a long-form collection of vectors that can be
            assigned to named variables or a wide-form dataset that will be internally
            reshaped.

        ****x, y****vectors or keys in `data`
        :   Variables that specify positions on the x and y axes.

        ****hue****vector or key in `data`
        :   Semantic variable that is mapped to determine the color of plot elements.

        ****kind****{‘df’, ‘cumulative\_lift’, ‘decile\_wise\_lift’, ‘cumulative\_gain’, ‘decile\_wise\_gain’, ‘cumulative\_response’, ‘ks\_statistic’, ‘report’} or None, default=None
        :   Kind of plot to make.

            * if `'df'`, not plot return as pandas.DataFrame;
            * if `None`, the plot is roc curve.

        ****weights****vector or key in `data`
        :   If provided, observation weights used for computing the distribution function.

        ****n\_deciles****int, optional, default=10
        :   The number of partitions for creating the table. Defaults to 10 for deciles.

        ****hue\_order****vector of strings
        :   Specify the order of processing and plotting for categorical levels of the
            `hue` semantic.

        ****hue\_norm****tuple or [`matplotlib.colors.Normalize`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Normalize.html#matplotlib.colors.Normalize "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
        :   Either a pair of values that set the normalization range in data units
            or an object that will map from data units into a [0, 1] interval. Usage
            implies numeric mapping.

        ****palette****string, list, dict, or [`matplotlib.colors.Colormap`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Colormap.html#matplotlib.colors.Colormap "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
        :   Method for choosing the colors to use when mapping the `hue` semantic.
            String values are passed to `color_palette`. List or dict values
            imply categorical mapping, while a colormap object implies numeric mapping.

        ****color****[`matplotlib color`](https://matplotlib.org/devdocs/api/colors_api.html#module-matplotlib.colors "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
        :   Single color specification for when hue mapping is not used. Otherwise, the
            plot will try to hook into the matplotlib property cycle.

        ****fill****bool or None
        :   If True, fill in the area under univariate density curves or between
            bivariate contours. If None, the default depends on `multiple`.

        ****{line}\_kws****dictionaries
        :   Additional keyword arguments to pass to `plt.plot`.

        ****log\_scale****bool or number, or pair of bools or numbers
        :   Set axis scale(s) to log. A single value sets the data axis for any numeric
            axes in the plot. A pair of values sets each axis independently.
            Numeric values are interpreted as the desired base (default 10).
            When `None` or `False`, seaborn defers to the existing Axes scale.

        ****legend****bool
        :   If False, suppress the legend for semantic variables.

        ****ax****[`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
        :   Pre-existing axes for the plot. Otherwise, call [`matplotlib.pyplot.gca`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.pyplot.gca.html#matplotlib.pyplot.gca "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
            internally.

        ****digits****int, optional, default=4
        :   Number of digits for formatting output floating point values.
            When `output_dict` is `True`, this will be ignored and the
            returned values will not be rounded.

        ****output\_dict****bool, default=False
        :   If True, return output as dict.

        ****zero\_division****{‘warn’, 0.0, 1.0, np.nan}, default=’warn’
        :   Sets the value to return when there is a zero division. If set to
            ‘warn’, this acts as 0, but warnings are also raised.

        ****common\_norm****bool
        :   If True, scale each conditional density by the number of observations
            such that the total area under all densities sums to 1. Otherwise,
            normalize each density independently.

        ****verbose****bool, optional, default=False
        :   Whether to be verbose.

        ****annot****bool or rectangular dataset, optional
        :   If True, write the data value in each cell. If an array-like with the
            same shape as `data`, then use this to annotate the heatmap instead
            of the data. Note that DataFrames will match on position, not index.

        ****fmt****str, optional, default=’’
        :   String formatting code to use when adding annotations
            (e.g., ‘.2g’, ‘.4g’).

        ****annot\_kws****dict of key, value mappings, optional
        :   Keyword arguments for [`matplotlib.axes.Axes.text`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.text.html#matplotlib.axes.Axes.text "(in Matplotlib v3.12.0.dev415+ga888f5e9a)") when `annot`
            is True.

        ****kwargs****
        :   Other keyword arguments are passed to one of the following matplotlib
            functions:

            * [`matplotlib.axes.Axes.plot`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")

    Returns:
    :   pandas.DataFrame | matplotlib.axes.Axes | dict
        :   The dataframe (decile-table) with the indexed by deciles (sorted ascending)
            and related information (decile-level metrics).
            If hue/facet semantics were used, the returned table will include
            extra columns for those keys (e.g., ‘hue’).

        > **Warning**
        > Some function parameters are experimental prototypes.
        These may be modified, renamed, or removed in future library versions.
        Use with caution and check documentation for the latest updates.

    Parameters:
    :   * ****data**** (**DataFrame** **|** **None**)
        * ****x**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****y**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****hue**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****kind**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'df'****,** **'cumulative\_lift'****,** **'decile\_wise\_lift'****,** **'cumulative\_gain'****,** **'decile\_wise\_gain'****,** **'cumulative\_response'****,** **'ks\_statistic'****,** **'report'****]** **|** **None**)
        * ****n\_deciles**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****digits**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****verbose**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   **DataFrame** | [**Axes**](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")

    References

    [1]

    [tensorbored/kds](https://github.com/tensorbored/kds/blob/master/kds/metrics.py)

    [[2](#id1)]

    [Wikipedia contributors. (2024).
    “Decile”
    Wikipedia. https://en.wikipedia.org/wiki/Decile](https://en.wikipedia.org/wiki/Decile)

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_decileplot_script_thumb.png)

[plot\_decileplot\_script with examples](../../auto_examples/seaborn/plot_decileplot_script.html)

plot\_decileplot\_script with examples