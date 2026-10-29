# dump\_policy[#](#dump-policy "Link to this heading")

scikitplot.feature\_selection.dump\_policy(**policy**, **path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L1115)[#](#scikitplot.feature_selection.dump_policy "Link to this definition")
:   Write `policy` to `path` atomically, verified by reading it back.

    Parameters:
    :   ****policy****FeaturePolicy
        :   The policy to write.

        ****path****str or os.PathLike
        :   Target file.

        ****format****str or None, default=None
        :   Explicit format, else derived from the suffix.

    Returns:
    :   pathlib.Path
        :   The written path.

    Parameters:
    :   * ****policy**** ([**FeaturePolicy**](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection._policy.FeaturePolicy"))
        * ****path**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")