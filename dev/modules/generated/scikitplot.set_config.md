# set\_config[#](#set-config "Link to this heading")

scikitplot.set\_config(**assume\_finite=None**, **working\_memory=None**, **display=None**, **array\_api\_dispatch=None**, **transform\_output=None**, **skip\_parameter\_validation=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/b2a4600/scikitplot/config/_config.py#L141)[#](#scikitplot.set_config "Link to this definition")
:   Set global scikit-plots configuration.

    Added in version 0.19.

    Parameters:
    :   ****assume\_finite****bool, default=None
        :   If True, validation for finiteness will be skipped,
            saving time, but leading to potential crashes. If
            False, validation for finiteness will be performed,
            avoiding error. Global default: False.

            Added in version 0.4.

        ****working\_memory****int, default=None
        :   If set, scikit-plots will attempt to limit the size of temporary arrays
            to this number of MiB (per job when parallelised), often saving both
            computation time and memory on expensive operations that can be
            performed in chunks. Global default: 1024.

            Added in version 0.4.

        ****display****{‘text’, ‘diagram’}, default=None
        :   If ‘diagram’, estimators will be displayed as a diagram in a Jupyter
            lab or notebook context. If ‘text’, estimators will be displayed as
            text. Default is ‘diagram’.

            Added in version 0.4.

        ****array\_api\_dispatch****bool, default=None
        :   Use Array API dispatching when inputs follow the Array API standard.
            Default is False.

            See the [User Guide](https://scikit-learn.org/dev/modules/array_api.html#array-api "(in scikit-learn v1.10)") for more details.

            Added in version 0.4.

        ****transform\_output****str, default=None
        :   Configure output of `transform` and `fit_transform`.

            See [Introducing the set\_output API](https://scikit-learn.org/dev/auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py "(in scikit-learn v1.10)")
            for an example on how to use the API.

            * `"default"`: Default output format of a transformer
            * `"pandas"`: DataFrame output
            * `"polars"`: Polars output
            * `None`: Transform configuration is unchanged

            Added in version 0.4.

        ****skip\_parameter\_validation****bool, default=None
        :   If `True`, disable the validation of the hyper-parameters’ types and values in
            the fit method of estimators and for arguments passed to public helper
            functions. It can save time in some situations but can lead to low level
            crashes and exceptions with confusing error messages.

            Note that for data parameters, such as `X` and `y`, only type validation is
            skipped but validation with `check_array` will continue to run.

            Added in version 0.4.

    > **See also**
    > [`config_context`](scikitplot.config_context.html#scikitplot.config_context "scikitplot.config_context")
    :   Context manager for global scikit-plots configuration.

    [`get_config`](scikitplot.get_config.html#scikitplot.get_config "scikitplot.get_config")
    :   Retrieve current values of the global configuration.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot import set_config
    >>> set_config(display="diagram")

    ```
    Go BackOpen In Tab