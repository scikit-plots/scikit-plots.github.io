# scikitplot.externals.\_sphinxext.figmpl\_directive[#](#scikitplot-externals-sphinxext-figmpl-directive "Link to this heading")

Add a `figure-mpl` directive that is a responsive version of `figure`.

This implementation is very similar to `.. figure::`, except it also allows a
`srcset=` argument to be passed to the image tag, hence allowing responsive
resolution images.

There is no particular reason this could not be used standalone, but is meant
to be used with [matplotlib.sphinxext.plot\_directive](https://matplotlib.org/devdocs/api/sphinxext_plot_directive_api.html "(in Matplotlib v3.12.0.dev263+g0677cc8c1)").

Note that the directory organization is a bit different than `.. figure::`.
See the **FigureMpl** documentation below.