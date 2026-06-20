# layered\_view[#](#layered-view "Link to this heading")

scikitplot.visualkeras.layered\_view(**model**, **to\_file=None**, **min\_z=20**, **min\_xy=20**, **max\_z=400**, **max\_xy=2000**, **scale\_z=0.1**, **scale\_xy=4**, **type\_ignore=None**, **index\_ignore=None**, **color\_map=None**, **one\_dim\_orientation='z'**, **index\_2d=None**, **background\_fill='white'**, **draw\_volume=True**, **draw\_reversed=False**, **padding=10**, **text\_callable=None**, **text\_vspacing=4**, **spacing=10**, **draw\_funnel=True**, **shade\_step=10**, **legend=False**, **legend\_text\_spacing\_offset=15**, **font=None**, **font\_color='black'**, **show\_dimension=False**, **backend=None**, **show\_os\_viewer=False**, **show\_fig=True**, **save\_fig=False**, **save\_fig\_filename=''**, **overwrite=True**, **add\_timestamp=False**, **verbose=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f06fe30/scikitplot/visualkeras/_layered.py#L58)[#](#scikitplot.visualkeras.layered_view "Link to this definition")
:   Generates an architectural visualization for a given linear Keras
    [`tf.keras.Model`](https://www.tensorflow.org/api_docs/python/tf/keras/Model "(in TensorFlow v2.8)") model
    (i.e., one input and output tensor for each layer) in a layered style,
    which is particularly suitable for convolutional neural networks (CNNs).

    Parameters:
    :   ****model****tensorflow.keras.Model
        :   A Keras [`tf.keras.Model`](https://www.tensorflow.org/api_docs/python/tf/keras/Model "(in TensorFlow v2.8)") model to be visualized.

        ****to\_file****str or None
        :   Path to the file where the generated image will be saved.
            If the image does not exist yet it will be created, else overwritten.
            The file type is inferred from the file extension.
            If None, no file is created.

            Changed in version 0.4.0: The `to_file` is now deprecated, and will be removed in a future release.
            Users are encouraged to use `'save_fig'` and `'save_fig_filename'`
            instead for improved compatibility.

        ****min\_z****int
        :   Minimum z-dimension size (in pixels) for a layer.

        ****min\_xy****int
        :   Minimum x- and y-dimension size (in pixels) for a layer.

        ****max\_z****int
        :   Maximum z-dimension size (in pixels) for a layer.

        ****max\_xy****int
        :   Maximum x- and y-dimension size (in pixels) for a layer.

        ****scale\_z****float
        :   Scalar multiplier for the z-dimension size of each layer.

        ****scale\_xy****float
        :   Scalar multiplier for the x- and y-dimension size of each layer.

        ****type\_ignore****list of str
        :   List of layer types to ignore when visualizing the model.

        ****index\_ignore****list of int
        :   List of layer indices to ignore when visualizing the model.

        ****color\_map****dict
        :   A dictionary mapping layer defining fill and outline for each layer by class type.
            Layers not specified in the dictionary will use default colors.

        ****one\_dim\_orientation****{‘x’, ‘y’, ‘z’}
        :   Axis along which one-dimensional layers should be drawn.

        ****index\_2d****list of int
        :   Indices of layers to be drawn in 2D when `draw_volume` is True.

        ****background\_fill****str or tuple
        :   Background color of the image.
            Can be a string or a tuple (R, G, B, A).

        ****draw\_volume****bool
        :   Whether to use a 3D volumetric view (True) or a 2D box view (False).

        ****draw\_reversed****bool
        :   Whether to draw 3D boxes in reverse order, from front-right to back-left.

        ****padding****int
        :   Distance in pixels before the first and after the last layer.

        ****text\_callable****{callable, ‘default’, None}
        :   A callable that generates text for layers,
            ‘default’ to use default behavior, or None to skip.
            The callable should take two arguments: the layer index (int) and the layer (Layer).

        ****text\_vspacing****int
        :   Vertical spacing in pixels between lines of text produced by `text_callable`.

        ****spacing****int
        :   Horizontal spacing in pixels between consecutive layers.

        ****draw\_funnel****bool
        :   If set to True, a funnel will be drawn between consecutive layers.

        ****shade\_step****float
        :   Lightness deviation step for shades in the visualization
            (only applicable in 3D volumetric view).

        ****legend****bool
        :   Whether to include a legend of the layers in the image.

        ****legend\_text\_spacing\_offset****float
        :   Offset for the space allocated to legend text.
            Useful for preventing text cutoff in the legend.

        ****font****Union[ImageFont.ImageFont, dict[str, any]], optional
        :   Font to be used for text rendering (e.g., legend or labels).

            * If an `ImageFont.ImageFont` object is provided, it is used directly.
            * If a dictionary is provided, it can include customization options:
              :   * `font_path`str, optional
                    :   Path to a one of ‘.ttf .otf .ttc’ font file.
                  * `font_size`int, optional
                    :   Size of the font. Must be a positive integer.
                  * `use_default_font`bool, optional
                    :   If True, uses the default system font.
                        Default is True.

            If `None`, the default font is used.

        ****font\_color****str or tuple
        :   Color of the font.
            Can be a string or a tuple (R, G, B, A).

        ****show\_dimension****bool
        :   Whether to display layer dimensions in the legend (only when `legend` is True).

        ****\*\*kwargs****dict
        :   Generic keyword arguments.

    Returns:
    :   PIL.Image.Image or matplotlib.image.AxesImage
        :   The generated architecture visualization image.

    Other Parameters:
    :   ****backend****bool, str, optional, default=None
        :   Specifies the backend used to process and save the image.
            If the value is one of `'matplotlib'`, `'true'`, or `'none'` (case-insensitive),
            the Matplotlib backend will be used. This is useful for better DPI control and
            consistent rendering. Any other value will fall back to using the PIL backend.
            Default is `None`. Common values include:

            * `'matplotlib'`, `'true'`, `'none'` : Use Matplotlib
            * `'pil'`, `'fast'`, etc. : Use PIL (Python Imaging Library)

            Added in version 0.4.0: The `backend` parameter was added to allow switching between PIL and Matplotlib.

        ****show\_os\_viewer****bool, optional, default=False
        :   If True, displays the saved image (by PIL) in the system’s default image viewer
            using PIL’s `.show()` method. Default is False.

            Added in version 0.4.0.

        ****show\_fig****bool, default=True
        :   Show the plot.

            Added in version 0.4.0.

        ****save\_fig****bool, default=False
        :   Save the plot.

            Added in version 0.4.0.

        ****save\_fig\_filename****str, optional, default=’’
        :   Specify the path and filetype to save the plot.
            If nothing specified, the plot will be saved as png
            inside `result_images` under to the current working directory.
            Defaults to plot image named to used `func.__name__`.

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

    Parameters:
    :   * ****to\_file**** (**Optional****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****min\_z**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****min\_xy**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_z**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_xy**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****scale\_z**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****scale\_xy**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****type\_ignore**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)"))
        * ****index\_ignore**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)"))
        * ****color\_map**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)"))
        * ****one\_dim\_orientation**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****index\_2d**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)"))
        * ****background\_fill**** (**any**)
        * ****draw\_volume**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****draw\_reversed**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****padding**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****text\_callable**** (**Optional****[****Union****[****Callable****[****[**[**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**,** **Layer****]****,** [**tuple**](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")**]****]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]**)
        * ****text\_vspacing**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****spacing**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****draw\_funnel**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****legend**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****font**** (**Optional****[****Union****[****ImageFont.ImageFont****,** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **"any"****]****]****]**)
        * ****font\_color**** (**any**)
        * ****backend**** (**Optional****[****Union****[**[**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")**,**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]**)
        * ****show\_os\_viewer**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****show\_fig**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****save\_fig**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****save\_fig\_filename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****overwrite**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****verbose**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    Return type:
    :   [PIL.Image.Image](https://pillow.readthedocs.io/en/stable/reference/Image.html#PIL.Image.Image "(in Pillow (PIL Fork) v12.2.0)") | [matplotlib.image.AxesImage](https://matplotlib.org/devdocs/api/image_api.html#matplotlib.image.AxesImage "(in Matplotlib v3.12.0.dev283+g91f9a9d16)")

    Notes

    This function calls `get_font(font)` internally to normalize the input.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_dl_ann_conv_dense_thumb.png)

[Visualkeras: Spam Classification Conv1D Dense Example](../../auto_examples/visualkeras/plot_dl_ann_conv_dense.html)

Visualkeras: Spam Classification Conv1D Dense Example![](../../_images/sphx_glr_plot_dl_ann_dense_thumb.png)

[visualkeras: Spam Dense example](../../auto_examples/visualkeras/plot_dl_ann_dense.html)

visualkeras: Spam Dense example![](../../_images/sphx_glr_plot_dl_cnn_autoencoder_thumb.png)

[visualkeras: autoencoder example](../../auto_examples/visualkeras/plot_dl_cnn_autoencoder.html)

visualkeras: autoencoder example![](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_thumb.png)

[visualkeras: custom vgg16 example](../../auto_examples/visualkeras/plot_dl_cnn_custom_vgg16.html)

visualkeras: custom vgg16 example![](../../_images/sphx_glr_plot_dl_cnn_custom_vgg16_show_dimension_thumb.png)

[visualkeras: custom vgg16 show dimension example](../../auto_examples/visualkeras/plot_dl_cnn_custom_vgg16_show_dimension.html)

visualkeras: custom vgg16 show dimension example![](../../_images/sphx_glr_plot_dl_cnn_efficientnetv2_thumb.png)

[visualkeras: EfficientNetV2 example](../../auto_examples/visualkeras/plot_dl_cnn_efficientnetv2.html)

visualkeras: EfficientNetV2 example![](../../_images/sphx_glr_plot_dl_cnn_resnetv2_thumb.png)

[visualkeras: ResNetV2 example](../../auto_examples/visualkeras/plot_dl_cnn_resnetv2.html)

visualkeras: ResNetV2 example![](../../_images/sphx_glr_plot_dl_cnn_vgg_thumb.png)

[visualkeras: custom VGG example](../../auto_examples/visualkeras/plot_dl_cnn_vgg.html)

visualkeras: custom VGG example