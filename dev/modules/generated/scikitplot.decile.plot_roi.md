# plot\_roi[#](#plot-roi "Link to this heading")

scikitplot.decile.plot\_roi(**plot\_input**, **\***, **fixed\_costs**, **variable\_costs\_per\_unit**, **profit\_per\_unit**, **highlight\_ntile=None**, **highlight\_how='plot\_text'**, **autopct='%.2f%%'**, **line\_kws=None**, **ref\_line\_kws=None**, **legend\_kws=None**, **grid\_kws=None**, **axes\_kws=None**, **annotation\_kws=None**, **footer\_kws=None**, **save\_fig=True**, **save\_fig\_filename=''**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/db9d710b/scikitplot/decile/_decile_modelplotpy.py#L3971)[#](#scikitplot.decile.plot_roi "Link to this definition")
:   Plot ROI (return on investment) curve.

    Parameters:
    :   ****plot\_input****pandas.DataFrame
        :   Output of [`ModelPlotPy.plotting_scope`](scikitplot.decile.ModelPlotPy.html#scikitplot.decile.ModelPlotPy.plotting_scope "scikitplot.decile.ModelPlotPy.plotting_scope").

        ****fixed\_costs****float
        :   Fixed costs independent of selection size.

        ****variable\_costs\_per\_unit****float
        :   Variable cost per selected unit.

        ****profit\_per\_unit****float
        :   Revenue per positive unit.

        ****highlight\_ntile****int or Sequence[int] or None, default=None
        :   Ntile index/indices to highlight (each in 1..ntiles).

        ****highlight\_how****{‘plot’, ‘text’, ‘plot\_text’}, default=’plot\_text’
        :   Where to render highlight information.

        ****autopct****None or str or callable, default=’%.2f%%’
        :   Percentage formatter for ROI (expressed as a fraction).

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
    :   ValueError
        :   If investments are zero for any ntile.

        \_PlotInputError
        :   If plot\_input lacks required columns.

    Parameters:
    :   * ****plot\_input**** (**DataFrame**)
        * ****fixed\_costs**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****variable\_costs\_per\_unit**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****profit\_per\_unit**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****highlight\_ntile**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") **|** [**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.14)")**[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**]** **|** **None**)
        * ****highlight\_how**** ([**Literal**](https://docs.python.org/3/library/typing.html#typing.Literal "(in Python v3.14)")**[****'plot'****,** **'text'****,** **'plot\_text'****]**)
        * ****autopct**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)")**]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
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
    :   [**Axes**](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.html#matplotlib.axes.Axes "(in Matplotlib v3.12.0.dev414+g30073003d)")

    > **See also**
    > [`plot_profit`](scikitplot.decile.plot_profit.html#scikitplot.decile.plot_profit "scikitplot.decile.plot_profit"), [`plot_costsrevs`](scikitplot.decile.plot_costsrevs.html#scikitplot.decile.plot_costsrevs "scikitplot.decile.plot_costsrevs")

    Notes

    ROI = profit / investments.

    * profit = revenues - investments
    * revenues = profit\_per\_unit \* cumpos
    * investments = fixed\_costs + variable\_costs\_per\_unit \* cumtot

    Highlight lines use cumulative 1..N semantics and include cumpos / cumtot.

    Examples

    Try it in your browser!
    ```
    >>> # ax = plot_roi(plot_input, fixed_costs=100, variable_costs_per_unit=1, profit_per_unit=10)

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_modelplotpy_script_thumb.png)

[Introduction to modelplotpy](../../auto_examples/decile/plot_modelplotpy_script.html)

Introduction to modelplotpy