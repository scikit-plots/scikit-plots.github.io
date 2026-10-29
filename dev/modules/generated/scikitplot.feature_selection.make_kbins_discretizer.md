# make\_kbins\_discretizer[#](#make-kbins-discretizer "Link to this heading")

scikitplot.feature\_selection.make\_kbins\_discretizer(**schema**, **columns=None**, **\***, **encode='ordinal'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_binning.py#L336)[#](#scikitplot.feature_selection.make_kbins_discretizer "Link to this definition")
:   Build a `KBinsDiscretizer` with the recommended per-feature bin counts.

    Parameters:
    :   ****schema****FeatureSchema
        :   A fitted schema with binning recommendations.

        ****columns****sequence of str or None, default=None
        :   Columns to bin; None takes every suitable feature in schema order.

        ****encode****{“ordinal”, “onehot”, “onehot-dense”}, default=”ordinal”
        :   Passed to `KBinsDiscretizer`.

        ****\*\*kwargs****
        :   Other `KBinsDiscretizer` arguments (`subsample`, `quantile_method`
            …). `strategy` defaults to the policy’s strategy.

    Returns:
    :   ****columns****list of str
        :   Columns the discretizer applies to, in order (use them in a
            `ColumnTransformer`).

        ****discretizer****sklearn.preprocessing.KBinsDiscretizer
        :   Unfitted discretizer with `n_bins` set per column.

    Raises:
    :   ValueError
        :   If a requested column is not suitable for binning or no column is.

    Parameters:
    :   * ****schema**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****columns**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****encode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> import numpy as np, pandas as pd
    >>> from scikitplot.feature_selection import (
    ...     profile_features,
    ...     make_kbins_discretizer,
    ... )
    >>> X = pd.DataFrame({"x": np.random.default_rng(0).gamma(2.0, size=500)})
    >>> cols, kb = make_kbins_discretizer(profile_features(X))
    >>> cols, int(kb.n_bins[0]) > 1
    (['x'], True)

    ```
    Go BackOpen In Tab