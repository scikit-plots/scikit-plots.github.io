# Getting started[#](#getting-started "Link to this heading")

```
import scikitplot.visualkeras as visualkeras

image = visualkeras.layered_view(model)
image.save("model.png")

```

Use `layered_view` for a compact architecture-style diagram, especially
for sequential/CNN-like models. Use `graph_view` when connectivity and
branching are more important than layer-block dimensions.

TensorFlow/Keras is intentionally not imported just to import every helper;
rendering a real model still requires a compatible framework environment.