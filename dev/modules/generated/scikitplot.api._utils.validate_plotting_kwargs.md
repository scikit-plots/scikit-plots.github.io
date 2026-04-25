# validate\_plotting\_kwargs[#](#validate-plotting-kwargs "Link to this heading")

scikitplot.api.\_utils.validate\_plotting\_kwargs(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2e65b07/scikitplot/api/_utils/validation.py#L198)[#](#scikitplot.api._utils.validate_plotting_kwargs "Link to this definition")
:   Validate the provided axes and figure or create new ones if needed.

    This function checks if valid axes and figure objects are provided. If not, it creates
    new ones based on the specified parameters.

    Added in version 0.3.9.

    Parameters:
    :   ****ax****matplotlib.axes.Axes, optional, default=None
        :   The axis to plot the figure on. If None is passed in the current axes
            will be used (or generated if required).

            Added in version 0.4.0.

        ****fig****matplotlib.pyplot.figure, optional, default: None
        :   The figure to plot the Visualizer on. If None is passed in the current
            plot will be used (or generated if required).

            Added in version 0.4.0.

        ****figsize****tuple, optional, default=None
        :   Width, height in inches.
            Tuple denoting figure size of the plot e.g. (12, 5)

            Added in version 0.4.0.

        ****nrows****int, optional, default=1
        :   Number of rows in the subplot grid.

            Added in version 0.4.0.

        ****ncols****int, optional, default=1
        :   Number of columns in the subplot grid.

            Added in version 0.4.0.

        ****plot\_style****str, optional, default=None
        :   Check available styles with “plt.style.available”. Examples include:
            [‘ggplot’, ‘seaborn’, ‘bmh’, ‘classic’, ‘dark\_background’, ‘fivethirtyeight’,
            ‘grayscale’, ‘seaborn-bright’, ‘seaborn-colorblind’, ‘seaborn-dark’,
            ‘seaborn-dark-palette’, ‘tableau-colorblind10’, ‘fast’].

            Added in version 0.4.0.

    Returns:
    :   ****fig****matplotlib.figure.Figure
        :   The figure to be used for plotting.

        ****ax****matplotlib.axes.Axes or list of matplotlib.axes.Axes
        :   The axes to be used for plotting.
            Returns a single Axes object if only one subplot is created,
            or a list of Axes objects if multiple subplots are created.

    Parameters:
    :   * ****args**** ([**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)"))
        * ****kwargs**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)"))

    Notes

    The subplot position can be described by either:

    > * Three integers (nrows, ncols, index)
    > * The subplot will take the index position on a grid with nrows rows and ncols columns.
    >   index starts at 1 in the upper left corner and increases to the right.

    Examples

    Try it in your browser!

    Create a new figure and axes:

    ```
    >>> fig, ax = validate_plotting_kwargs()

    ```

    Use an existing axes:

    ```
    >>> fig, ax = plt.subplots()
    >>> fig, ax = validate_plotting_kwargs(ax=ax)

    ```
    Go BackOpen In Tab