# modelplot[#](#modelplot "Link to this heading")

scikitplot.seaborn.modelplot(**data=None**, **\***, **x=None**, **y=None**, **hue=None**, **x\_estimator=None**, **kind=None**, **hue\_order=None**, **hue\_norm=None**, **palette=None**, **color=None**, **fill=False**, **baseline=False**, **line\_kws=None**, **log\_scale=None**, **legend=True**, **ax=None**, **cbar=True**, **cbar\_ax=None**, **cbar\_kws=None**, **text\_kws=None**, **image\_kws=None**, **digits=None**, **common\_norm=None**, **verbose=False**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/seaborn/_model.py#L788)[#](#scikitplot.seaborn.modelplot "Link to this definition")
:   Model Instance and/or Attributes Visualization.

    Supported attributes:

    * `feature_names_in_`
    * `feature_importances_`
    * `coef_`
    * `explained_variance_ratio_`
    * `eigenvalues_`
    * `eigenvectors_`

    Parameters:
    :   ****x\_estimator****model
        :   An instance so access the fitted model attribute(s).

        ****data****[`pandas.DataFrame`](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)"), [`numpy.ndarray`](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)"), mapping, or sequence
        :   Input data structure. Either a long-form collection of vectors that can be
            assigned to named variables or a wide-form dataset that will be internally
            reshaped.

        ****x, y****vectors or keys in `data`
        :   Variables that specify positions on the x and y axes.

        ****hue****vector or key in `data`
        :   Semantic variable that is mapped to determine the color of plot elements.

        ****kind****{‘feature\_importances’} or None, default=None
        :   Kind of plot to make.

        ****hue\_order****vector of strings
        :   Specify the order of processing and plotting for categorical levels of the
            `hue` semantic.

        ****hue\_norm****tuple or [`matplotlib.colors.Normalize`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Normalize.html#matplotlib.colors.Normalize "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
        :   Either a pair of values that set the normalization range in data units
            or an object that will map from data units into a [0, 1] interval. Usage
            implies numeric mapping.

        ****palette****string, list, dict, or [`matplotlib.colors.Colormap`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Colormap.html#matplotlib.colors.Colormap "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
        :   Method for choosing the colors to use when mapping the `hue` semantic.
            String values are passed to `color_palette`. List or dict values
            imply categorical mapping, while a colormap object implies numeric mapping.

        ****color****[`matplotlib color`](https://matplotlib.org/devdocs/api/colors_api.html#module-matplotlib.colors "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
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

        ****ax****[`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
        :   Pre-existing axes for the plot. Otherwise, call [`matplotlib.pyplot.gca`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.pyplot.gca.html#matplotlib.pyplot.gca "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
            internally.

        ****cbar****bool
        :   If True, add a colorbar to annotate the color mapping in a bivariate plot.
            Note: Does not currently support plots with a `hue` variable well.

        ****cbar\_ax****[`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
        :   Pre-existing axes for the colorbar.

        ****cbar\_kws****dict
        :   Additional parameters passed to [`matplotlib.figure.Figure.colorbar`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.figure.Figure.colorbar.html#matplotlib.figure.Figure.colorbar "(in Matplotlib v3.12.0.dev804+g493abb1b6)").

        ****text\_kws****dict
        :   Parameters that control the `'classification_report'` visualization, passed to
            `text`.

        ****image\_kws****dict
        :   Parameters that control the `'confusion_matrix'` visualization, passed to
            `imshow`.
            Recognized keys:

            cmapNone, str or matplotlib.colors.Colormap, optional, default=None
            :   Colormap used for plotting.
                Options include ‘viridis’, ‘PiYG’, ‘plasma’, ‘inferno’, ‘nipy\_spectral’, etc.
                See Matplotlib Colormap documentation for available choices.

                * <https://matplotlib.org/stable/users/explain/colors/index.html>
                * plt.colormaps()
                * plt.get\_cmap() # None == ‘viridis’

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

        ****normalize****{‘true’, ‘pred’, ‘all’, None}, optional
        :   Normalizes the confusion matrix according to the specified mode. Defaults to None.

            * ‘true’: Normalizes by true (actual) values.
            * ‘pred’: Normalizes by predicted values.
            * ‘all’: Normalizes by total values.
            * None: No normalization.

        ****kwargs****
        :   Other keyword arguments are passed to one of the following matplotlib
            functions:

            * [`matplotlib.axes.Axes.plot`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot "(in Matplotlib v3.12.0.dev804+g493abb1b6)")

    Returns:
    :   [`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev804+g493abb1b6)")
        :   The matplotlib axes containing the plot.

        > **Warning**
        > Some function parameters are experimental prototypes.
        These may be modified, renamed, or removed in future library versions.
        Use with caution and check documentation for the latest updates.

    Parameters:
    :   * ****data**** ([**DataFrame**](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.2)") **|** **None**)
        * ****x**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** [**Series**](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)") **|** **None**)
        * ****y**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** [**Series**](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)") **|** **None**)
        * ****hue**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")**[**[**generic**](https://numpy.org/devdocs/reference/arrays.scalars.html#numpy.generic "(in NumPy v2.6.dev0)")**]** **|** [**Series**](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)") **|** **None**)
        * ****kind**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.15)")**[****'feature\_importances'****]** **|** **None**)
        * ****digits**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****verbose**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**Axes**](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev804+g493abb1b6)")

    > **See also**
    > `FastICA`
    :   A fast algorithm for Independent Component Analysis.

    `IncrementalPCA`
    :   Incremental Principal Component Analysis.

    `NMF`
    :   Non-Negative Matrix Factorization.

    `PCA`
    :   Principal component analysis (PCA).

    `KernelPCA`
    :   Kernel Principal component analysis (KPCA).

    `SparsePCA`
    :   Sparse Principal Components Analysis (SparsePCA).

    `TruncatedSVD`
    :   Dimensionality reduction using truncated SVD.

    `permutation_importance`
    :   Permutation importance for feature evaluation [BRE].

    `partial_dependence`
    :   Compute Partial Dependence values.

    `PartialDependenceDisplay`
    :   Partial dependence visualization.

    `PartialDependenceDisplay.from_estimator`
    :   Plot Partial Dependence.

    `DecisionBoundaryDisplay`
    :   Decision boundary visualization.

    `DecisionBoundaryDisplay.from_estimator`
    :   Plot decision boundary given an estimator.

    References

    [BRE]

    [L. Breiman, “Random Forests”, Machine Learning, 45(1), 5-32,
    2001.](https://doi.org/10.1023/A:1010933404324)

    [1]

    [scikit-learn contributors. (2025).
    “sklearn.decomposition”
    scikit-learn. https://scikit-learn.org/stable/api/sklearn.decomposition.html](https://scikit-learn.org/stable/api/sklearn.decomposition.html)

    [2]

    [scikit-learn contributors. (2025).
    “sklearn.inspection”
    scikit-learn. https://scikit-learn.org/stable/api/sklearn.inspection.html](https://scikit-learn.org/stable/api/sklearn.inspection.html)