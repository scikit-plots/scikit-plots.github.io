# aucplot[#](#aucplot "Link to this heading")

scikitplot.seaborn.aucplot(**data=None**, **\***, **x=None**, **y=None**, **hue=None**, **kind=None**, **weights=None**, **hue\_order=None**, **hue\_norm=None**, **palette=None**, **color=None**, **fill=False**, **baseline=False**, **line\_kws=None**, **log\_scale=None**, **legend=True**, **ax=None**, **annot=None**, **fmt='.4g'**, **annot\_kws=None**, **digits=None**, **common\_norm=None**, **verbose=False**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/seaborn/_auc.py#L1149)[#](#scikitplot.seaborn.aucplot "Link to this definition")
:   Plot PR or ROC curves with a seaborn-like API.

    Parameters:
    :   ****data****[`pandas.DataFrame`](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.1.0.dev0+1159.gd7b577e035)"), [`numpy.ndarray`](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), mapping, or sequence
        :   Input data structure. Either a long-form collection of vectors that can be
            assigned to named variables or a wide-form dataset that will be internally
            reshaped.

        ****x, y****vectors or keys in `data`
        :   Variables that specify positions on the x and y axes.

        ****hue****vector or key in `data`
        :   Semantic variable that is mapped to determine the color of plot elements.

        ****kind****{‘pr’, ‘roc’} or None, default=None
        :   Kind of plot to make.

            * if `'pr'`, the plot is pr curve;
            * if `'roc'`, the plot is roc curve;
            * if `None`, the plot is roc curve.

        ****weights****vector or key in `data`
        :   If provided, observation weights used for computing the distribution function.

        ****hue\_order****vector of strings
        :   Specify the order of processing and plotting for categorical levels of the
            `hue` semantic.

        ****hue\_norm****tuple or [`matplotlib.colors.Normalize`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Normalize.html#matplotlib.colors.Normalize "(in Matplotlib v3.12.0.dev356+g63bd09560)")
        :   Either a pair of values that set the normalization range in data units
            or an object that will map from data units into a [0, 1] interval. Usage
            implies numeric mapping.

        ****palette****string, list, dict, or [`matplotlib.colors.Colormap`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Colormap.html#matplotlib.colors.Colormap "(in Matplotlib v3.12.0.dev356+g63bd09560)")
        :   Method for choosing the colors to use when mapping the `hue` semantic.
            String values are passed to `color_palette`. List or dict values
            imply categorical mapping, while a colormap object implies numeric mapping.

        ****color****[`matplotlib color`](https://matplotlib.org/devdocs/api/colors_api.html#module-matplotlib.colors "(in Matplotlib v3.12.0.dev356+g63bd09560)")
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

        ****ax****[`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev356+g63bd09560)")
        :   Pre-existing axes for the plot. Otherwise, call [`matplotlib.pyplot.gca`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.pyplot.gca.html#matplotlib.pyplot.gca "(in Matplotlib v3.12.0.dev356+g63bd09560)")
            internally.

        ****digits****int, optional, default=4
        :   Number of digits for formatting output floating point values.
            When `output_dict` is `True`, this will be ignored and the
            returned values will not be rounded.

        ****output\_dict****bool, default=False
        :   If True, return output as dict.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Sets the value to return when there is a zero division. If set to
            “warn”, this acts as 0, but warnings are also raised.

        ****common\_norm****bool
        :   If True, scale each conditional density by the number of observations
            such that the total area under all densities sums to 1. Otherwise,
            normalize each density independently.

        ****verbose****bool, optional, default=False
        :   Whether to be verbose.

        ****kwargs****
        :   Other keyword arguments are passed to one of the following matplotlib
            functions:

            * [`matplotlib.axes.Axes.plot`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot "(in Matplotlib v3.12.0.dev356+g63bd09560)")

    Returns:
    :   [`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev356+g63bd09560)")
        :   The matplotlib axes containing the plot.

        > **Warning**
        > 

        Some function parameters are experimental prototypes.


        These may be modified, renamed, or removed in future library versions.


        Use with caution and check documentation for the latest updates.

    Parameters:
    :   * ****data**** (**DataFrame** **|** **None**)
        * ****x**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****y**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****hue**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****kind**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'pr'****,** **'roc'****]** **|** **None**)
        * ****digits**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****verbose**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Axes**](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev356+g63bd09560)")

    > **See also**
    > [`sklearn.metrics.roc_curve`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.roc_curve.html#sklearn.metrics.roc_curve "(in scikit-learn v1.10)")


    [`sklearn.metrics.precision_recall_curve`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.precision_recall_curve.html#sklearn.metrics.precision_recall_curve "(in scikit-learn v1.10)")


    [`sklearn.metrics.average_precision_score`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.average_precision_score.html#sklearn.metrics.average_precision_score "(in scikit-learn v1.10)")

    Notes

    For PR curves, the score displayed as `AUC` is Average Precision (AP).

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_aucplot_script_thumb.png)

[plot\_aucplot\_script with examples](../../auto_examples/seaborn/plot_aucplot_script.html)

plot\_aucplot\_script with examples