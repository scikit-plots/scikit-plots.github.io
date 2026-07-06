# plot\_cumlift[#](#plot-cumlift "Link to this heading")

scikitplot.decile.plot\_cumlift(**plot\_input**, **\***, **highlight\_ntile=None**, **highlight\_how='plot\_text'**, **line\_kws=None**, **ref\_line\_kws=None**, **legend\_kws=None**, **grid\_kws=None**, **axes\_kws=None**, **annotation\_kws=None**, **footer\_kws=None**, **save\_fig=True**, **save\_fig\_filename=''**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/decile/_decile_modelplotpy.py#L2827)[#](#scikitplot.decile.plot_cumlift "Link to this definition")
:   Plot cumulative lift curve.

    Parameters:
    :   ****plot\_input****pandas.DataFrame
        :   Output of [`ModelPlotPy.plotting_scope`](scikitplot.decile.ModelPlotPy.html#scikitplot.decile.ModelPlotPy.plotting_scope "scikitplot.decile.ModelPlotPy.plotting_scope").

        ****highlight\_ntile****int, Sequence[int], or None, default=None
        :   Ntile index/indices to highlight (each must be in `1..ntiles`).

        ****highlight\_how****{‘plot’, ‘text’, ‘plot\_text’}, default=’plot\_text’
        :   Where to render highlight information.

        ****line\_kws, ref\_line\_kws, legend\_kws, grid\_kws, axes\_kws, annotation\_kws, footer\_kws****Mapping[str, Any] or None
        :   Per-component styling kwargs.

        ****\*\*kwargs****Any
        :   Legacy alias for `line_kws`.

    Returns:
    :   matplotlib.axes.Axes
        :   Axes containing the plot.

    Other Parameters:
    :   ****show\_fig****bool, default=True
        :   Show the plot.

            Added in version 0.4.0.

        ****save\_fig****bool, default=False
        :   Save the plot.
            Used by `save_plot_decorator`.

            Added in version 0.4.0.

        ****save\_fig\_filename****str, optional, default=’’
        :   Specify the path and filetype to save the plot.
            If nothing specified, the plot will be saved as png
            inside `result_images` under to the current working directory.
            Defaults to plot image named to used `func.__name__`.
            Used by `save_plot_decorator`.

            Added in version 0.4.0.

        ****overwrite****bool, optional, default=True
        :   If False and a file exists, auto-increments the filename to avoid overwriting.

            Added in version 0.4.0.

        ****add\_timestamp****bool, optional, default=False
        :   Whether to append a timestamp to the filename.
            Default is False.

            Added in version 0.4.0.

        ****verbose****bool, optional
        :   If True, enables verbose output with informative messages during execution.
            Useful for debugging or understanding internal operations such as backend selection,
            font loading, and file saving status. If False, runs silently unless errors occur.

            Default is False.

            Added in version 0.4.0: The `verbose` parameter was added to control logging and user feedback verbosity.

    Raises:
    :   \_PlotInputError
        :   If plot\_input lacks required columns.

    Parameters:
    :   * ****plot\_input**** (**DataFrame**)
        * ****highlight\_ntile**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
        * ****highlight\_how**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'plot'****,** **'text'****,** **'plot\_text'****]**)
        * ****line\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****ref\_line\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****legend\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****grid\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****axes\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****annotation\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****footer\_kws**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]** **|** **None**)
        * ****save\_fig**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****save\_fig\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

    Return type:
    :   [**Axes**](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev324+g9cc14f1ab)")

    > **See also**
    > [`plot_response`](scikitplot.decile.plot_response.html#scikitplot.decile.plot_response "scikitplot.decile.plot_response"), [`plot_cumresponse`](scikitplot.decile.plot_cumresponse.html#scikitplot.decile.plot_cumresponse "scikitplot.decile.plot_cumresponse"), [`plot_cumgains`](scikitplot.decile.plot_cumgains.html#scikitplot.decile.plot_cumgains "scikitplot.decile.plot_cumgains")

    Notes

    Lift is a ratio (baseline = 1.0). It is highlighted as cumulative 1..N.

    Examples

    Try it in your browser!
    ```
    >>> # ax = plot_cumlift(plot_input)

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_modelplotpy_script_thumb.png)

[Introduction to modelplotpy](../../auto_examples/decile/plot_modelplotpy_script.html)

Introduction to modelplotpy