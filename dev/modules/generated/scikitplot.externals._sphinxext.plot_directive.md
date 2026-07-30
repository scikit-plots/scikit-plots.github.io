# scikitplot.externals.\_sphinxext.plot\_directive[#](#scikitplot-externals-sphinxext-plot-directive "Link to this heading")

A directive for including a Matplotlib plot in a Sphinx document.

This is a Sphinx extension providing a reStructuredText directive
`.. plot::` for including a plot in a Sphinx document.

In HTML output, `.. plot::` will include a .png file with a link
to a high-res .png and .pdf. In LaTeX output, it will include a .pdf.

The plot content may be defined in one of three ways:

1. ****A path to a source file**** as the argument to the directive:

   ```
   .. plot:: path/to/plot.py

   ```

   When a path to a source file is given, the content of the
   directive may optionally contain a caption for the plot:

   ```
   .. plot:: path/to/plot.py

      The plot caption.

   ```

   Additionally, one may specify the name of a function to call (with
   no arguments) immediately after importing the module:

   ```
   .. plot:: path/to/plot.py plot_function1

   ```
2. Included as ****inline content**** to the directive:

   ```
   .. plot::

      import matplotlib.pyplot as plt
      plt.plot([1, 2, 3], [4, 5, 6])
      plt.title("A plotting example")

   ```
3. Using ****doctest**** syntax:

   ```
   .. plot::

      A plotting example:
      >>> import matplotlib.pyplot as plt
      >>> plt.plot([1, 2, 3], [4, 5, 6])

   ```

Options:

The `.. plot::` directive supports the following options:

`:filename-prefix:`str
:   The base name (without the extension) of the outputted image and script
    files. The default is to use the same name as the input script, or the
    name of the RST document if no script is provided. The filename-prefix for
    each plot directive must be unique.

`:format:`{‘python’, ‘doctest’}
:   The format of the input. If unset, the format is auto-detected.

`:include-source:`bool
:   Whether to display the source code. The default can be changed using
    the `plot_include_source` variable in `conf.py` (which itself
    defaults to False).

`:show-source-link:`bool
:   Whether to show a link to the source in HTML. The default can be
    changed using the `plot_html_show_source_link` variable in
    `conf.py` (which itself defaults to True).

`:context:`bool or str
:   If provided, the code will be run in the context of all previous plot
    directives for which the `:context:` option was specified. This only
    applies to inline code plot directives, not those run from files. If
    the `:context: reset` option is specified, the context is reset
    for this and future plots, and previous figures are closed prior to
    running the code. `:context: close-figs` keeps the context but closes
    previous figures before running the code.

`:nofigs:`bool
:   If specified, the code block will be run, but no figures will be
    inserted. This is usually useful with the `:context:` option.

`:caption:`str
:   If specified, the option’s argument will be used as a caption for the
    figure. This overwrites the caption given in the content, when the plot
    is generated from a file.

Additionally, this directive supports all the options of the [image directive](https://docutils.sourceforge.io/docs/ref/rst/directives.html#image),
except for `:target:` (since plot will add its own target). These include
`:alt:`, `:height:`, `:width:`, `:scale:`, `:align:` and `:class:`.

Configuration options:

The plot directive has the following configuration options:

plot\_include\_source
:   Default value for the include-source option (default: False).

plot\_html\_show\_source\_link
:   Whether to show a link to the source in HTML (default: True).

plot\_pre\_code
:   Code that should be executed before each plot. If None (the default),
    it will default to a string containing:

    ```
    import numpy as np
    from matplotlib import pyplot as plt

    ```

plot\_basedir
:   Base directory, to which `plot::` file names are relative to.
    If None or empty (the default), file names are relative to the
    directory where the file containing the directive is.

plot\_formats
:   File formats to generate (default: [‘png’, ‘hires.png’, ‘pdf’]).
    List of tuples or strings:

    ```
    [(suffix, dpi), suffix, ...]

    ```

    that determine the file format and the DPI. For entries whose
    DPI was omitted, sensible defaults are chosen. When passing from
    the command line through sphinx\_build the list should be passed as
    suffix:dpi,suffix:dpi, …

plot\_html\_show\_formats
:   Whether to show links to the files in HTML (default: True).

plot\_rcparams
:   A dictionary containing any non-standard rcParams that should
    be applied before each plot (default: {}).

plot\_apply\_rcparams
:   By default, rcParams are applied when `:context:` option is not used
    in a plot directive. If set, this configuration option overrides this
    behavior and applies rcParams before each plot.

plot\_working\_directory
:   By default, the working directory will be changed to the directory of
    the example, so the code can get at its data files, if any. Also its
    path will be added to `sys.path` so it can import any helper modules
    sitting beside it. This configuration option can be used to specify
    a central directory (also added to `sys.path`) where data files and
    helper modules for all code are located.

plot\_template
:   Provide a customized template for preparing restructured text.

plot\_srcset
:   Allow the srcset image option for responsive image resolutions. List of
    strings with the multiplicative factors followed by an “x”.
    e.g. [“2.0x”, “1.5x”]. “2.0x” will create a png with the default “png”
    resolution from plot\_formats, multiplied by 2. If plot\_srcset is
    specified, the plot directive uses the
    [matplotlib.sphinxext.figmpl\_directive](https://matplotlib.org/devdocs/api/sphinxext_figmpl_directive_api.html "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
    (instead of the usual figure directive) in the intermediary rst file that is generated.
    The plot\_srcset option is incompatible with **singlehtml** builds, and an
    error will be raised.

Notes on how it works:

The plot directive runs the code it is given, either in the source file or the
code under the directive. The figure created (if any) is saved in the sphinx
build directory under a subdirectory named `plot_directive`. It then creates
an intermediate rst file that calls a `.. figure:` directive (or
`.. figmpl::` directive if `plot_srcset` is being used) and has links to
the `*.png` files in the `plot_directive` directory. These translations can
be customized by changing the **plot\_template**. See the source of
[matplotlib.sphinxext.plot\_directive](https://matplotlib.org/devdocs/api/sphinxext_plot_directive_api.html "(in Matplotlib v3.12.0.dev415+ga888f5e9a)")
for the templates defined in **TEMPLATE** and **TEMPLATE\_SRCSET**.