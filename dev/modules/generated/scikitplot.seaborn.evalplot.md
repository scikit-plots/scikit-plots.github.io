# evalplot[#](#evalplot "Link to this heading")

scikitplot.seaborn.evalplot(**data=None**, **\***, **x=None**, **y=None**, **hue=None**, **kind=None**, **weights=None**, **labels=None**, **threshold=0.5**, **allow\_probs=False**, **hue\_order=None**, **hue\_norm=None**, **palette=None**, **color=None**, **fill=False**, **baseline=False**, **line\_kws=None**, **log\_scale=None**, **legend=False**, **ax=None**, **cbar\_kws=None**, **cbar=True**, **cbar\_ax=None**, **text\_kws=None**, **image\_kws=None**, **annot\_kws=None**, **annot=True**, **fmt=''**, **digits=4**, **common\_norm=None**, **verbose=False**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/seaborn/_confusion_matrix.py#L1092)[#](#scikitplot.seaborn.evalplot "Link to this definition")
:   Visualization of the Confusion Matrix [[1]](#ra7e29df24177-1) alongside a text report showing key classification metrics.

    For guidance on interpreting these plots, refer to the
    [Model Evaluation Guide](https://scikit-learn.org/stable/modules/model_evaluation.html#confusion-matrix).

    Parameters:
    :   ****data****[`pandas.DataFrame`](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.1.0.dev0+1159.gd7b577e035)"), [`numpy.ndarray`](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), mapping, or sequence
        :   Input data structure. Either a long-form collection of vectors that can be
            assigned to named variables or a wide-form dataset that will be internally
            reshaped.

        ****x, y****vectors or keys in `data`
        :   Variables that specify positions on the x and y axes.

        ****hue****vector or key in `data`
        :   Semantic variable that is mapped to determine the color of plot elements.

        ****kind****{‘all’, ‘classification\_report’, ‘confusion\_matrix’} or None, default=None
        :   Which visualization to draw.

            * `'classification_report'`: text report from
              [`sklearn.metrics.classification_report`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.classification_report.html#sklearn.metrics.classification_report "(in scikit-learn v1.10)").
            * `'confusion_matrix'`: heatmap from [`sklearn.metrics.confusion_matrix`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.confusion_matrix.html#sklearn.metrics.confusion_matrix "(in scikit-learn v1.10)").
            * `'all'`: a 1x2 dashboard (classification report + confusion matrix).

        ****weights****vector or key in `data`
        :   Sample weights passed to the underlying scikit-learn metric functions.

        ****labels****array-like, optional
        :   Class label ordering. When provided, it is forwarded to
            [`sklearn.metrics.confusion_matrix`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.confusion_matrix.html#sklearn.metrics.confusion_matrix "(in scikit-learn v1.10)") and [`sklearn.metrics.classification_report`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.classification_report.html#sklearn.metrics.classification_report "(in scikit-learn v1.10)").

        ****threshold****float, default=0.5
        :   Threshold used to convert probabilities into predicted class labels when
            `allow_probs=True`.

        ****allow\_probs****bool, default=False
        :   If True, interpret `y` as probabilities in `[0, 1]` and derive predicted
            labels via `y > threshold`. This requires binary classification.
            Behavior like ‘y > thr’ see [`numpy.argmax`](https://numpy.org/devdocs/reference/generated/numpy.argmax.html#numpy.argmax "(in NumPy v2.6.dev0)").

        ****hue\_order****vector of strings
        :   Specify the order of processing and plotting for categorical levels of the
            `hue` semantic.

        ****hue\_norm****tuple or [`matplotlib.colors.Normalize`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Normalize.html#matplotlib.colors.Normalize "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
        :   Either a pair of values that set the normalization range in data units
            or an object that will map from data units into a [0, 1] interval. Usage
            implies numeric mapping.

        ****palette****string, list, dict, or [`matplotlib.colors.Colormap`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Colormap.html#matplotlib.colors.Colormap "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
        :   Method for choosing the colors to use when mapping the `hue` semantic.
            String values are passed to `color_palette`. List or dict values
            imply categorical mapping, while a colormap object implies numeric mapping.

        ****color****[`matplotlib color`](https://matplotlib.org/devdocs/api/colors_api.html#module-matplotlib.colors "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
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

        ****ax****[`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
        :   Pre-existing axes for the plot. Otherwise, call [`matplotlib.pyplot.gca`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.pyplot.gca.html#matplotlib.pyplot.gca "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
            internally.

        ****cbar\_kws****dict
        :   Additional parameters passed to [`matplotlib.figure.Figure.colorbar`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.colorbar.html#matplotlib.figure.Figure.colorbar "(in Matplotlib v3.12.0.dev348+gbde111fb4)").

        ****cbar****bool
        :   If True, add a colorbar to annotate the color mapping in a bivariate plot.
            Note: Does not currently support plots with a `hue` variable well.

        ****cbar\_ax****[`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
        :   Pre-existing axes for the colorbar.

        ****text\_kws****dict, optional
        :   Keyword arguments passed to [`matplotlib.axes.Axes.text`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.text.html#matplotlib.axes.Axes.text "(in Matplotlib v3.12.0.dev348+gbde111fb4)") when rendering
            the classification report (and for confusion-matrix annotations).

        ****image\_kws****dict, optional
        :   Keyword arguments passed to [`matplotlib.axes.Axes.imshow`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.imshow.html#matplotlib.axes.Axes.imshow "(in Matplotlib v3.12.0.dev348+gbde111fb4)") when drawing
            the confusion matrix.
            Recognized keys:

            cmapNone, str or matplotlib.colors.Colormap, optional, default=None
            :   Colormap used for plotting.
                Options include ‘viridis’, ‘PiYG’, ‘plasma’, ‘inferno’, ‘nipy\_spectral’, etc.
                See Matplotlib Colormap documentation for available choices.

                * <https://matplotlib.org/stable/users/explain/colors/index.html>
                * plt.colormaps()
                * plt.get\_cmap() # None == ‘viridis’

        ****annot\_kws****dict of key, value mappings, optional
        :   Keyword arguments for [`matplotlib.axes.Axes.text`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.text.html#matplotlib.axes.Axes.text "(in Matplotlib v3.12.0.dev348+gbde111fb4)") when `annot`
            is True.

        ****annot****bool or rectangular dataset, optional
        :   If True, write the data value in each cell. If an array-like with the
            same shape as `data`, then use this to annotate the heatmap instead
            of the data. Note that DataFrames will match on position, not index.

        ****fmt****str, optional, default=’’
        :   Formatting spec for confusion matrix annotations (e.g., `'.2f'`). When
            `normalize` is not None and `fmt` is empty, it defaults to `'.2f'`.

        ****digits****int, optional, default=4
        :   Number of digits for formatting output floating point values.
            When `output_dict` is `True`, this will be ignored and the
            returned values will not be rounded.

        ****normalize****{‘true’, ‘pred’, ‘all’, None}, optional, default=None
        :   Normalization mode passed to [`sklearn.metrics.confusion_matrix`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.confusion_matrix.html#sklearn.metrics.confusion_matrix "(in scikit-learn v1.10)") when
            `kind` includes `'confusion_matrix'`.

            * ‘true’: Normalizes by true (actual) values.
            * ‘pred’: Normalizes by predicted values.
            * ‘all’: Normalizes by total values.
            * None: No normalization.

        ****common\_norm****bool
        :   If True, scale each conditional density by the number of observations
            such that the total area under all densities sums to 1. Otherwise,
            normalize each density independently.

        ****zero\_division****{“warn”, 0.0, 1.0, np.nan}, default=”warn”
        :   Sets the value to return when there is a zero division. If set to
            “warn”, this acts as 0, but warnings are also raised.

        ****output\_dict****bool, default=False
        :   If True, return output as dict.

        ****verbose****bool, optional, default=False
        :   Whether to be verbose.

        ****kwargs****
        :   Other keyword arguments are passed to one of the following matplotlib
            functions:

            * [`matplotlib.axes.Axes.plot`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot "(in Matplotlib v3.12.0.dev348+gbde111fb4)")

    Returns:
    :   [`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev348+gbde111fb4)")
        :   The matplotlib axes containing the plot.

        > **Warning**
        > Some function parameters are experimental prototypes.
        These may be modified, renamed, or removed in future library versions.
        Use with caution and check documentation for the latest updates.

    Parameters:
    :   * ****data**** (**DataFrame** **|** **None**)
        * ****x**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****y**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****hue**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** **Series** **|** **None**)
        * ****kind**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'all'****,** **'classification\_report'****,** **'confusion\_matrix'****]** **|** **None**)
        * ****threshold**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****allow\_probs**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****digits**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** **None**)
        * ****verbose**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [**Axes**](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev348+gbde111fb4)")

    > **See also**
    > [`sklearn.metrics.confusion_matrix`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.confusion_matrix.html#sklearn.metrics.confusion_matrix "(in scikit-learn v1.10)")


    [`sklearn.metrics.classification_report`](https://scikit-learn.org/dev/modules/generated/sklearn.metrics.classification_report.html#sklearn.metrics.classification_report "(in scikit-learn v1.10)")

    Notes

    * When `kind='all'`, a 1x2 dashboard is created. If the provided `ax` is not
      the only axes in its figure, a new figure is created.
    * If multiple semantic subsets are present (e.g., multiple `hue` levels),
      confusion-matrix-style plots do not overlay cleanly; only the first subset is
      plotted and a warning is emitted.

    References

    [[1](#id1)]

    [scikit-learn contributors. (2025). “sklearn.metrics”
    scikit-learn documentation. https://scikit-learn.org/stable/api/sklearn.metrics.html](https://scikit-learn.org/stable/api/sklearn.metrics.html)

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_evalplot_script_thumb.png)

[plot\_evalplot\_script with examples](../../auto_examples/seaborn/plot_evalplot_script.html)

plot\_evalplot\_script with examples