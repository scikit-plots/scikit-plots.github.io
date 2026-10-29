# Keras architecture visualization[#](#keras-architecture-visualization "Link to this heading")

`scikitplot.visualkeras` renders Keras/TensorFlow model structure as either a layered architecture diagram or a graph/connectivity diagram. It includes the vendored visualkeras behavior behind the Scikit-Plots namespace.

> **Important**
> Visualization is derived from model metadata and framework internals. Test representative models against the exact Keras/TensorFlow version you ship; a rendered diagram is not a validation of model computation or tensor correctness.
Getting started

Render a Keras model with layered\_view or graph\_view.

[Getting started](getting_started.html#visualkeras-getting-started)Layered view

Dimension scaling, ignored layers, text, spacing, colors, and CNN-style diagrams.

[Layered view](layered_view.html#visualkeras-layered-view)Graph view

Connectivity-oriented visualization for functional/branched models.

[Graph view](graph_view.html#visualkeras-graph-view)Styling and spacing

Color maps, labels, SpacingDummyLayer, image output, and layout trade-offs.

[Styling and spacing](styling_and_spacing.html#visualkeras-styling-and-spacing)Python API

The three stable top-level exports and dependency behavior.

[Python API](python_api.html#visualkeras-python-api)Dependencies and limits

TensorFlow/Keras/Pillow/aggdraw optionality, model-shape caveats, and current maintenance findings.

[Dependencies and limits](dependencies_and_limits.html#visualkeras-dependencies-and-limits)Troubleshooting

Unsupported layer shapes, Keras-version differences, fonts/output files, and large diagrams.

[Troubleshooting](troubleshooting.html#visualkeras-troubleshooting)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Visualkeras](../../auto_examples/visualkeras/index.html#visualkeras-examples) for executable examples that accompany this guide.

## Further reading[#](#further-reading "Link to this heading")

> **See also**
> * [paulgavrikov/visualkeras](https://github.com/paulgavrikov/visualkeras)
* [triton-lang/triton](https://github.com/triton-lang/triton/)
* <https://triton-lang.org/main/getting-started/installation.html>