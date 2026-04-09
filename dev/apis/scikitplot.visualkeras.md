# scikitplot.visualkeras[#](#module-scikitplot.visualkeras "Link to this heading")

****User guide.**** See the [Visualkeras](../user_guide/visualkeras/index.html#visualkeras-index) section for further details.

## Graphical Visualization[#](#module-scikitplot.visualkeras._graph "Link to this heading")

visualkeras \_graph.py

|  |  |
| --- | --- |
| [`graph_view`](../modules/generated/scikitplot.visualkeras.graph_view.html#scikitplot.visualkeras.graph_view "scikitplot.visualkeras.graph_view") | Generates an architectural visualization for a given linear Keras [`tf.keras.Model`](https://www.tensorflow.org/api_docs/python/tf/keras/Model "(in TensorFlow v2.8)") model (i.e., one input and output tensor for each layer) in graph style. |

## Layered Visualization[#](#module-scikitplot.visualkeras._layered "Link to this heading")

visualkeras \_layered.py

|  |  |
| --- | --- |
| [`layered_view`](../modules/generated/scikitplot.visualkeras.layered_view.html#scikitplot.visualkeras.layered_view "scikitplot.visualkeras.layered_view") | Generates an architectural visualization for a given linear Keras [`tf.keras.Model`](https://www.tensorflow.org/api_docs/python/tf/keras/Model "(in TensorFlow v2.8)") model (i.e., one input and output tensor for each layer) in a layered style, which is particularly suitable for convolutional neural networks (CNNs). |

## Visualization Helper[#](#visualization-helper "Link to this heading")

|  |  |
| --- | --- |
| [`SpacingDummyLayer`](../modules/generated/scikitplot.visualkeras.SpacingDummyLayer.html#scikitplot.visualkeras.SpacingDummyLayer "scikitplot.visualkeras.SpacingDummyLayer") | A factory class for dynamically generating a dummy Keras layer with custom spacing. |