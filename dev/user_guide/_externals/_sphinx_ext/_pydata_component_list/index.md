# PyData component list[#](#pydata-component-list "Link to this heading")

`_pydata_component_list` provides one directive, `component-list`, for
building an inventory of the component templates installed with
`pydata_sphinx_theme`. It is intentionally separate from the generic gallery
engine because it reads PyData Sphinx Theme package resources and links each
component to its upstream source file.

## Enable it[#](#enable-it "Link to this heading")

```
extensions += [
    "scikitplot._externals._sphinx_ext._pydata_component_list",
]

```

Then use the directive without arguments or options:

```
.. component-list::

```

## What the directive reads[#](#what-the-directive-reads "Link to this heading")

The directive discovers `*.html` component templates through Python package
resources under the installed `pydata_sphinx_theme` distribution. For each
template it uses the first Jinja comment as the description when one is
available and emits a link to the corresponding upstream component file.

## Failure behavior[#](#failure-behavior "Link to this heading")

The directive reports a located documentation error instead of fabricating an
empty inventory when:

* `pydata_sphinx_theme` is not installed;
* the installed package does not expose the expected component directory;
* no component templates are present; or
* a component template cannot be read as UTF-8.

There is no file-system fallback to a particular PyData Sphinx Theme checkout,
so the result represents the ****installed**** theme package used by the build.