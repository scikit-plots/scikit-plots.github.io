# FeatureStats[#](#featurestats "Link to this heading")

class scikitplot.feature\_selection.FeatureStats(**name**, **dtype**, **family**, **n\_rows**, **n\_missing**, **n\_non\_null**, **n\_unique=None**, **top\_count=None**, **ordered=None**, **n\_finite=None**, **n\_inf=None**, **min=None**, **max=None**, **mean=None**, **std=None**, **q1=None**, **median=None**, **q3=None**, **skewness=None**, **kurtosis=None**, **integer\_valued=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats "Link to this definition")
:   Training statistics of one column.

    Parameters:
    :   ****name****str
        :   Column name.

        ****dtype****str
        :   `str(series.dtype)` at fit time.

        ****family****str
        :   [`DtypeFamily`](scikitplot.feature_selection.DtypeFamily.html#scikitplot.feature_selection.DtypeFamily "scikitplot.feature_selection.DtypeFamily") value.

        ****n\_rows, n\_missing, n\_non\_null****int
        :   Row count, missing values (`NaN`, `None`, `NaT`, `pd.NA`) and
            the rest.

        ****n\_unique****int or None
        :   Distinct non-missing values; None when the cells are unhashable.

        ****top\_count****int or None
        :   Count of the most frequent non-missing value.

        ****ordered****bool or None
        :   Whether a categorical dtype is ordered; None for other families.

        ****n\_finite, n\_inf****int or None
        :   Finite and infinite values of a numeric column; None otherwise.

        ****min, max, mean, std, q1, median, q3****float or None
        :   Over finite values; `std` uses `ddof=1` and needs two values.

        ****skewness, kurtosis****float or None
        :   Bias-corrected sample skewness (needs 3 finite values) and excess
            kurtosis (needs 4), as [`pandas.Series.skew`](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.skew.html#pandas.Series.skew "(in pandas v3.2)") /
            [`pandas.Series.kurt`](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.kurt.html#pandas.Series.kurt "(in pandas v3.2)"); None for constant data.

        ****integer\_valued****bool or None
        :   Every finite value is a whole number; None when there is none.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****dtype**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****family**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****n\_rows**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_missing**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_non\_null**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****n\_unique**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****top\_count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****ordered**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****n\_finite**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****n\_inf**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****min**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****max**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****mean**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****std**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****q1**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****median**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****q3**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****skewness**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****kurtosis**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****integer\_valued**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)

    > **See also**
    > [`FeatureSpec`](scikitplot.feature_selection.FeatureSpec.html#scikitplot.feature_selection.FeatureSpec "scikitplot.feature_selection.FeatureSpec")
    :   Holds the stats of a fitted feature.

    dtype: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats.dtype "Link to this definition")

    family: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats.family "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L202)[#](#scikitplot.feature_selection.FeatureStats.from_dict "Link to this definition")
    :   Rebuild stats from [`to_dict`](#scikitplot.feature_selection.FeatureStats.to_dict "scikitplot.feature_selection.FeatureStats.to_dict") output, checking field names and types.

        Parameters:
        :   ****data****mapping
            :   The stored fields.

        Returns:
        :   FeatureStats
            :   The stats.

        Raises:
        :   ValueError
            :   For unknown or missing fields or wrongly typed values.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureStats**](#scikitplot.feature_selection.FeatureStats "scikitplot.feature_selection._stats.FeatureStats")

    integer\_valued: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.integer_valued "Link to this definition")

    property is\_numeric: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureStats.is_numeric "Link to this definition")
    :   The family is `integer` or `float`.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    kurtosis: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.kurtosis "Link to this definition")

    max: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.max "Link to this definition")

    mean: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.mean "Link to this definition")

    median: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.median "Link to this definition")

    min: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.min "Link to this definition")

    property missing\_ratio: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureStats.missing_ratio "Link to this definition")
    :   `n_missing / n_rows` (0.0 for an empty frame).

        Type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    n\_finite: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.n_finite "Link to this definition")

    n\_inf: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.n_inf "Link to this definition")

    n\_missing: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats.n_missing "Link to this definition")

    n\_non\_null: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats.n_non_null "Link to this definition")

    n\_rows: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats.n_rows "Link to this definition")

    n\_unique: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.n_unique "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L114)[#](#scikitplot.feature_selection.FeatureStats.name "Link to this definition")

    ordered: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.ordered "Link to this definition")

    q1: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.q1 "Link to this definition")

    q3: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.q3 "Link to this definition")

    skewness: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.skewness "Link to this definition")

    std: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.std "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/feature_selection/_stats.py#L198)[#](#scikitplot.feature_selection.FeatureStats.to_dict "Link to this definition")
    :   Return the fields as a mapping of the shared data model.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    top\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.feature_selection.FeatureStats.top_count "Link to this definition")

    property top\_ratio: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureStats.top_ratio "Link to this definition")
    :   share of the most frequent value among non-missing values.

        Type:
        :   Float or None

    property unique\_ratio: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.feature_selection.FeatureStats.unique_ratio "Link to this definition")
    :   `n_unique / n_non_null`; None when undefined.

        Type:
        :   Float or None