# get\_data\_home[#](#get-data-home "Link to this heading")

scikitplot.datasets.get\_data\_home(**data\_home=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/25a82c5/scikitplot/datasets/_load_dataset.py#L57)[#](#scikitplot.datasets.get_data_home "Link to this definition")
:   Return a path to the cache directory for example datasets.

    This directory is used by [`load_dataset`](scikitplot.datasets.load_dataset.html#scikitplot.datasets.load_dataset "scikitplot.datasets.load_dataset").

    If the `data_home` argument is not provided, it will use a directory
    specified by the `SCIKITPLOT_DATA` environment variable (if it exists)
    or otherwise default to an OS-appropriate user cache location.