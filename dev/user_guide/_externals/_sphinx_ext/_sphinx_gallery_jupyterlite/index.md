# Sphinx-Gallery JupyterLite helpers[#](#sphinx-gallery-jupyterlite-helpers "Link to this heading")

`_sphinx_gallery_jupyterlite` has two independent roles:

* a Sphinx extension that injects the documentation `release` value into the
  JupyterLite warning/bootstrap content; and
* public helper callables used from `sphinx_gallery_conf` to prepare
  notebooks and reset optional library state between gallery examples.

## Enable the release-version hook[#](#enable-the-release-version-hook "Link to this heading")

```
extensions += [
    "scikitplot._externals._sphinx_ext._sphinx_gallery_jupyterlite",
]

```

At `builder-inited` the extension uses `app.config.release` as the
authoritative documentation version when it is non-empty. Outside a Sphinx
build it falls back to installed `scikit-plots` package metadata and finally
to `"unknown"` with a warning.

## Connect it to Sphinx-Gallery[#](#connect-it-to-sphinx-gallery "Link to this heading")

The helper callables are referenced by dotted path:

```
sphinx_gallery_conf = {
    "reset_modules": (
        "scikitplot._externals._sphinx_ext._sphinx_gallery_jupyterlite.reset_others",
        "matplotlib",
        "seaborn",
    ),
    "jupyterlite": {
        "notebook_modification_function": (
            "scikitplot._externals._sphinx_ext._sphinx_gallery_jupyterlite."
            "notebook_modification_function"
        ),
    },
}

```

## `notebook_modification_function`[#](#notebook-modification-function "Link to this heading")

The notebook hook prepends the generated JupyterLite notebook with the
Scikit-Plots environment/bootstrap cells needed by the current source. It
uses explicit detection tokens for optional packages and dataset-fetching
patterns rather than installing every optional dependency unconditionally.

The function asserts the Sphinx-Gallery notebook-cell helper contract after
prepending its cells so an incompatible upstream API change fails visibly
instead of quietly producing a malformed notebook.

## `reset_others`[#](#reset-others "Link to this heading")

The reset hook runs garbage collection and, when the optional libraries are
installed, restores the library state the gallery relies on. The current
implementation has explicit handling for scikit-learn, Plotly and PyVista.
Missing optional packages are not treated as errors.

## Customization boundary[#](#customization-boundary "Link to this heading")

The module exposes its behavior through documented module-level constants for
package-detection tokens, HTTP setup and Pyodide base imports. Override those
constants before Sphinx begins processing notebooks if a documentation project
needs a different JupyterLite bootstrap policy.

This helper is for documentation builds. It should not become a runtime
requirement of ordinary Scikit-Plots plotting code.