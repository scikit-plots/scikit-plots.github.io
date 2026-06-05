# load\_dataset[#](#load-dataset "Link to this heading")

scikitplot.datasets.load\_dataset(**name**, **cache=True**, **data\_home=None**, **\*\*kws**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/datasets/_load_dataset.py#L76)[#](#scikitplot.datasets.load_dataset "Link to this definition")
:   Load an example dataset from the online repository (requires internet).

    This function provides quick access to a small number of example datasets
    that are useful for documenting scikit-plots or generating reproducible examples
    for bug reports. It is not necessary for normal usage.

    Note that some of the datasets have a small amount of preprocessing applied
    to define a proper ordering for categorical variables.

    Use [`get_dataset_names`](scikitplot.datasets.get_dataset_names.html#scikitplot.datasets.get_dataset_names "scikitplot.datasets.get_dataset_names") to see a list of available datasets.

    Parameters:
    :   ****name****str
        :   Name of the dataset (`{name}.csv` on
            [scikit-plots/scikit-plots-data](https://github.com/scikit-plots/scikit-plots-data)).

        ****cache****boolean, optional
        :   If True, try to load from the local cache first, and save to the cache
            if a download is required.

        ****data\_home****string, optional
        :   The directory in which to cache data; see [`get_data_home`](scikitplot.datasets.get_data_home.html#scikitplot.datasets.get_data_home "scikitplot.datasets.get_data_home").

        ****kws****keys and values, optional
        :   Additional keyword arguments are passed to passed through to
            [`pandas.read_csv`](https://pandas.pydata.org/docs/dev/reference/api/pandas.read_csv.html#pandas.read_csv "(in pandas v3.1.0.dev0+974.ge652ee88a5)").

    Returns:
    :   ****df****[`pandas.DataFrame`](https://pandas.pydata.org/docs/dev/reference/api/pandas.DataFrame.html#pandas.DataFrame "(in pandas v3.1.0.dev0+974.ge652ee88a5)")
        :   Tabular data, possibly with some preprocessing applied.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_dummy_code_encoder_thumb.png)

[Comparing DummyCode Encoder with Other Encoders](../../auto_examples/preprocessing/plot_dummy_code_encoder.html)

Comparing DummyCode Encoder with Other Encoders