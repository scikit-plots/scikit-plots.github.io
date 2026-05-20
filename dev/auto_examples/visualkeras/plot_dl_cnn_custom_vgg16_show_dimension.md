> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-visualkeras-plot-dl-cnn-custom-vgg16-show-dimension-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# visualkeras: custom vgg16 show dimension example[#](#visualkeras-custom-vgg16-show-dimension-example "Link to this heading")

An example showing the [`visualkeras`](../../apis/scikitplot.visualkeras.html#module-scikitplot.visualkeras "scikitplot.visualkeras") function
used by a [`tf.keras.Model`](https://www.tensorflow.org/api_docs/python/tf/keras/Model "(in TensorFlow v2.8)") model.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
# visualkeras Need aggdraw tensorflow
# !pip install scikitplot[core, cpu]
# or
# !pip install aggdraw
# !pip install tensorflow
# python -c "import tensorflow as tf, google.protobuf as pb; print('tf', tf.__version__); print('protobuf', pb.__version__)"
# python -m pip check
# If Needed
# pip install -U "protobuf<6"
# pip install protobuf==5.29.4
import tensorflow as tf

# Clear any session to reset the state of TensorFlow/Keras
tf.keras.backend.clear_session()

from scikitplot import visualkeras

```

create VGG16

```
image_size = 224
model = tf.keras.models.Sequential()
model.add(tf.keras.layers.InputLayer(shape=(image_size, image_size, 3)))

model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(64, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(64, activation="relu", kernel_size=(3, 3)))
model.add(visualkeras.SpacingDummyLayer())

model.add(tf.keras.layers.MaxPooling2D((2, 2), strides=(2, 2)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(128, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(128, activation="relu", kernel_size=(3, 3)))
model.add(visualkeras.SpacingDummyLayer())

model.add(tf.keras.layers.MaxPooling2D((2, 2), strides=(2, 2)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(256, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(256, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(256, activation="relu", kernel_size=(3, 3)))
model.add(visualkeras.SpacingDummyLayer())

model.add(tf.keras.layers.MaxPooling2D((2, 2), strides=(2, 2)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(512, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(512, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(512, activation="relu", kernel_size=(3, 3)))
model.add(visualkeras.SpacingDummyLayer())

model.add(tf.keras.layers.MaxPooling2D((2, 2), strides=(2, 2)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(512, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(512, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.ZeroPadding2D((1, 1)))
model.add(tf.keras.layers.Conv2D(512, activation="relu", kernel_size=(3, 3)))
model.add(tf.keras.layers.MaxPooling2D())
model.add(visualkeras.SpacingDummyLayer())

model.add(tf.keras.layers.Flatten())

model.add(tf.keras.layers.Dense(4096, activation="relu"))
model.add(tf.keras.layers.Dropout(0.5))
model.add(tf.keras.layers.Dense(4096, activation="relu"))
model.add(tf.keras.layers.Dropout(0.5))
model.add(tf.keras.layers.Dense(1000, activation="softmax"))
# model.summary()

```

Now visualize the model!

```
from collections import defaultdict

color_map = defaultdict(dict)
color_map[tf.keras.layers.Conv2D]["fill"] = "orange"
color_map[tf.keras.layers.ZeroPadding2D]["fill"] = "gray"
color_map[tf.keras.layers.Dropout]["fill"] = "pink"
color_map[tf.keras.layers.MaxPooling2D]["fill"] = "red"
color_map[tf.keras.layers.Dense]["fill"] = "green"
color_map[tf.keras.layers.Flatten]["fill"] = "teal"

```
```
from PIL import ImageFont

ImageFont.load_default()

```
```
<PIL.ImageFont.FreeTypeFont object at 0x76842407d550>

```
```
img_vgg16_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[visualkeras.SpacingDummyLayer],
    font={
        "font_size": 61,
        # 'use_default_font': False,
        # 'font_path': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    },
    # to_file="result_images/vgg16_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_show_dimension.png",
)
img_vgg16_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_001.png)
```
<matplotlib.image.AxesImage object at 0x76840024cdd0>

```
```
img_vgg16_legend_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[visualkeras.SpacingDummyLayer],
    font={
        "font_size": 61,
        # 'use_default_font': False,
        # 'font_path': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    },
    # to_file="result_images/vgg16_legend_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_legend_show_dimension.png",
)
img_vgg16_legend_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_002.png)
```
<matplotlib.image.AxesImage object at 0x7684002f4750>

```
```
img_vgg16_spacing_layers_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[],
    spacing=0,
    font={
        "font_size": 61,
        # 'use_default_font': False,
        # 'font_path': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    },
    # to_file="result_images/vgg16_spacing_layers_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_spacing_layers_show_dimension.png",
)
img_vgg16_spacing_layers_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_003.png)
```
<matplotlib.image.AxesImage object at 0x768400141390>

```
```
img_vgg16_type_ignore_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[
        tf.keras.layers.ZeroPadding2D,
        tf.keras.layers.Dropout,
        tf.keras.layers.Flatten,
        visualkeras.SpacingDummyLayer,
    ],
    font={
        "font_size": 61,
        # 'use_default_font': False,
        # 'font_path': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    },
    # to_file="result_images/vgg16_type_ignore_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_type_ignore_show_dimension.png",
)
img_vgg16_type_ignore_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_004.png)
```
<matplotlib.image.AxesImage object at 0x7684001f72d0>

```
```
img_vgg16_color_map_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[visualkeras.SpacingDummyLayer],
    color_map=color_map,
    font={
        "font_size": 61,
        # 'use_default_font': False,
        # 'font_path': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    },
    # to_file="result_images/vgg16_color_map_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_color_map_show_dimension.png",
)
img_vgg16_color_map_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_005.png)
```
<matplotlib.image.AxesImage object at 0x76840005e2d0>

```
```
img_vgg16_flat_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[visualkeras.SpacingDummyLayer],
    draw_volume=False,
    font={
        "font_size": 61,
        # 'use_default_font': False,
        # 'font_path': '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    },
    # to_file="result_images/vgg16_flat_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_flat_show_dimension.png",
)
img_vgg16_flat_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_006.png)
```
<matplotlib.image.AxesImage object at 0x7684000a6750>

```
```
img_vgg16_scaling_show_dimension = visualkeras.layered_view(
    model,
    legend=True,
    show_dimension=True,
    type_ignore=[visualkeras.SpacingDummyLayer],
    # min_z = 1,
    # min_xy = 1,
    # max_z = 4096,
    # max_xy = 4096,
    # scale_z = 0.25,
    # scale_xy = 5,
    font={"font_size": 61},
    # to_file="result_images/vgg16_scaling_show_dimension.png",
    save_fig=True,
    save_fig_filename="vgg16_scaling_show_dimension.png",
)
img_vgg16_scaling_show_dimension

```
![plot dl cnn custom vgg16 show dimension](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_007.png)
```
<matplotlib.image.AxesImage object at 0x7683d872d2d0>

```

Tags: [model-type: classification](../../_tags/model-type-classification.html) [model-workflow: model building](../../_tags/model-workflow-model-building.html) [plot-type: visualkeras](../../_tags/plot-type-visualkeras.html) [domain: neural network](../../_tags/domain-neural-network.html) [level: intermediate](../../_tags/level-intermediate.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 13.480 seconds)

[![Launch binder](../../_images/binder_badge_logo18.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/visualkeras/plot_dl_cnn_custom_vgg16_show_dimension.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo18.svg)](../../lite/lab/index.html?path=auto_examples/visualkeras/plot_dl_cnn_custom_vgg16_show_dimension.ipynb)

[`Download Jupyter notebook: plot_dl_cnn_custom_vgg16_show_dimension.ipynb`](../../_downloads/85bfae4ce68ec7adeb49d57919e26417/plot_dl_cnn_custom_vgg16_show_dimension.ipynb)

[`Download Python source code: plot_dl_cnn_custom_vgg16_show_dimension.py`](../../_downloads/8fed160edff57661ba2bc69893b4c299/plot_dl_cnn_custom_vgg16_show_dimension.py)

[`Download zipped: plot_dl_cnn_custom_vgg16_show_dimension.zip`](../../_downloads/839df956e9fa44c3117efb85f73e4e4e/plot_dl_cnn_custom_vgg16_show_dimension.zip)

Related examples

![](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_thumb.png)

[visualkeras: custom vgg16 example](plot_dl_cnn_custom_vgg16.html)

visualkeras: custom vgg16 example![](../../_images/sphx_glr_plot_dl_cnn_autoencoder_thumb.png)

[visualkeras: autoencoder example](plot_dl_cnn_autoencoder.html)

visualkeras: autoencoder example![](../../_images/sphx_glr_plot_dl_ann_dense_thumb.png)

[visualkeras: Spam Dense example](plot_dl_ann_dense.html)

visualkeras: Spam Dense example![](../../_images/sphx_glr_plot_dl_ann_conv_dense_thumb.png)

[Visualkeras: Spam Classification Conv1D Dense Example](plot_dl_ann_conv_dense.html)

Visualkeras: Spam Classification Conv1D Dense Example

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)