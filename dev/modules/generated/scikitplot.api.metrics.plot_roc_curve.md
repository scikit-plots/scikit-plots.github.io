# plot\_roc\_curve[#](#plot-roc-curve "Link to this heading")

scikitplot.api.metrics.plot\_roc\_curve(**y\_true**, **y\_probas**, **title='ROC Curves'**, **curves=('micro', 'macro', 'each\_class')**, **ax=None**, **figsize=None**, **cmap='nipy\_spectral'**, **title\_fontsize='large'**, **text\_fontsize='medium'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/5fb281e/scikitplot/api/metrics/_classification/_roc_curve.py#L45)[#](#scikitplot.api.metrics.plot_roc_curve "Link to this definition")
:   Generates the ROC curves from labels and predicted scores/probabilities

    Parameters:
    :   * ****y\_true**** (**array-like****,** **shape** **(****n\_samples****)**) – Ground truth (correct) target values.
        * ****y\_probas**** (**array-like****,** **shape** **(****n\_samples****,** **n\_classes****)**) – Prediction probabilities for each class returned by a classifier.
        * ****title**** (**string****,** **optional**) – Title of the generated plot. Defaults to
          “ROC Curves”.
        * ****curves**** (**array-like**) – A listing of which curves should be plotted on the
          resulting plot. Defaults to `("micro", "macro", "each_class")`
          i.e. “micro” for micro-averaged curve, “macro” for macro-averaged
          curve
        * ****ax**** ([`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev87+g5ffcca935)"), optional) – The axes upon which to
          plot the curve. If None, the plot is drawn on a new set of axes.
        * ****figsize**** (**2-tuple****,** **optional**) – Tuple denoting figure size of the plot
          e.g. (6, 6). Defaults to `None`.
        * ****cmap**** (string or [`matplotlib.colors.Colormap`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.colors.Colormap.html#matplotlib.colors.Colormap "(in Matplotlib v3.12.0.dev87+g5ffcca935)") instance, optional) – Colormap used for plotting the projection. View Matplotlib Colormap
          documentation for available options.
          <https://matplotlib.org/users/colormaps.html>
        * ****title\_fontsize**** (**string** **or** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **optional**) – Matplotlib-style fontsizes.
          Use e.g. “small”, “medium”, “large” or integer-values. Defaults to
          “large”.
        * ****text\_fontsize**** (**string** **or** [**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **optional**) – Matplotlib-style fontsizes.
          Use e.g. “small”, “medium”, “large” or integer-values. Defaults to
          “medium”.

    Returns:
    :   The axes on which the plot was
        :   drawn.

    Return type:
    :   ax ([`matplotlib.axes.Axes`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev87+g5ffcca935)"))

    Example

    ```
    >>> import scikitplot as skplt
    >>> nb = GaussianNB()
    >>> nb = nb.fit(X_train, y_train)
    >>> y_probas = nb.predict_proba(X_test)
    >>> skplt.metrics.plot_roc_curve(y_test, y_probas)

    ```
    ![ROC Curves](../../_images/plot_roc_curve.png)