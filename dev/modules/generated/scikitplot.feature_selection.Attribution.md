# Attribution[#](#attribution "Link to this heading")

class scikitplot.feature\_selection.Attribution(**by\_input**, **unattributed**, **how**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_lineage.py#L979)[#](#scikitplot.feature_selection.Attribution "Link to this definition")
:   Values of transformed features summed back onto raw input features.

    Attributes:
    :   ****by\_input****pandas.Series or pandas.DataFrame
        :   For 1-D values, a Series indexed by input name; for 2-D values
            (`n_samples x n_outputs`, such as SHAP values), a DataFrame with one
            column per input. Only exactly attributable outputs contribute.

        ****unattributed****pandas.DataFrame
        :   One row per output that could not be attributed to a single input,
            with `output`, `origins` (tuple of input names), `reason`
            (`multiple_origins`, `mixed_lineage`, `unknown_lineage`,
            `no_origin`) and, for 1-D values, `value`.

        ****how****str
        :   Aggregation used.

    Parameters:
    :   * ****by\_input**** (**Any**)
        * ****unattributed**** (**pd.DataFrame**)
        * ****how**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****User note.**** Summing is exact for additive quantities: one-hot SHAP
    values, gain-based importances, coefficients’ absolute contributions. It
    is a convention, not a theorem, for permutation importances of correlated
    dummies; prefer permuting the raw column for those.