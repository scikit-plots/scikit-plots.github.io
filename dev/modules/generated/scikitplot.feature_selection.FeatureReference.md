# FeatureReference[#](#featurereference "Link to this heading")

class scikitplot.feature\_selection.FeatureReference(**name**, **kind**, **method**, **cuts=()**, **categories=()**, **proportions=()**, **truncated=False**, **n\_reference=0**, **note=''**, **family=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L146)[#](#scikitplot.feature_selection.FeatureReference "Link to this definition")
:   Frozen reference buckets of one feature.

    Parameters:
    :   ****name****str
        :   Column name.

        ****kind****str
        :   Feature kind at fit time.

        ****method****{“numeric”, “categorical”, “skipped”}
        :   Bucketing method.

        ****cuts****tuple of float
        :   Interior cut points (numeric).

        ****categories****tuple of str
        :   Kept category keys (categorical).

        ****proportions****tuple of float
        :   Training proportion of each bucket; the last bucket is “missing”,
            and for categorical features the one before it is “other”.

        ****truncated****bool
        :   More training categories existed than were kept.

        ****n\_reference****int
        :   Training rows.

        ****note****str
        :   Why a feature is skipped.

        ****family****str
        :   Dtype family of the training column; later data of another family
            is reported as `type_changed` (integer and float are one numeric
            family, string and categorical one text family).

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****method**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****cuts**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**,** **...****]**)
        * ****categories**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****proportions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**,** **...****]**)
        * ****truncated**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****n\_reference**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****note**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****family**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    bucket\_counts(**series**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L189)[#](#scikitplot.feature_selection.FeatureReference.bucket_counts "Link to this definition")
    :   Count the values of `series` per reference bucket.

        Parameters:
        :   ****series****pandas.Series
            :   Values to bucket.

        Returns:
        :   numpy.ndarray of int
            :   One count per bucket (missing last).

        Raises:
        :   TypeError
            :   If a numeric reference receives values that are not numeric.

        Parameters:
        :   ****series**** ([**Series**](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)"))

        Return type:
        :   [**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")

    categories: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.FeatureReference.categories "Link to this definition")

    cuts: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.FeatureReference.cuts "Link to this definition")

    family: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.feature_selection.FeatureReference.family "Link to this definition")

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L255)[#](#scikitplot.feature_selection.FeatureReference.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.feature_selection.FeatureReference.to_dict "scikitplot.feature_selection.FeatureReference.to_dict") output, checking every field.

        Parameters:
        :   ****data****mapping
            :   Stored form.

        Returns:
        :   FeatureReference
            :   The reference.

        Parameters:
        :   ****data**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**FeatureReference**](#scikitplot.feature_selection.FeatureReference "scikitplot.feature_selection._drift.FeatureReference")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L146)[#](#scikitplot.feature_selection.FeatureReference.kind "Link to this definition")

    method: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L146)[#](#scikitplot.feature_selection.FeatureReference.method "Link to this definition")

    n\_reference: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.feature_selection.FeatureReference.n_reference "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L146)[#](#scikitplot.feature_selection.FeatureReference.name "Link to this definition")

    note: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.feature_selection.FeatureReference.note "Link to this definition")

    proportions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"), ...] = ()[#](#scikitplot.feature_selection.FeatureReference.proportions "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L248)[#](#scikitplot.feature_selection.FeatureReference.to_dict "Link to this definition")
    :   Return the shared-data-model form.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    truncated: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.feature_selection.FeatureReference.truncated "Link to this definition")

    unseen\_ratio(**series**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_drift.py#L225)[#](#scikitplot.feature_selection.FeatureReference.unseen_ratio "Link to this definition")
    :   Return the share of non-missing values never seen in training.

        Parameters:
        :   ****series****pandas.Series
            :   Current values.

        Returns:
        :   float or None
            :   None for numeric or truncated references, or no current values.

        Parameters:
        :   ****series**** ([**Series**](https://pandas.pydata.org/docs/dev/reference/api/pandas.Series.html#pandas.Series "(in pandas v3.2)"))

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | None