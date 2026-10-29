# load\_policy[#](#load-policy "Link to this heading")

scikitplot.feature\_selection.load\_policy(**source**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/feature_selection/_policy.py#L1074)[#](#scikitplot.feature_selection.load_policy "Link to this definition")
:   Load a [`FeaturePolicy`](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection.FeaturePolicy") from a file, a mapping or a policy.

    Parameters:
    :   ****source****str, os.PathLike, mapping or FeaturePolicy
        :   A path to a `.toml`, `.yaml`/`.yml` or `.json` file, a mapping
            in config form, or a policy (returned unchanged).

        ****format****str or None, default=None
        :   Explicit file format, else derived from the suffix.

    Returns:
    :   FeaturePolicy
        :   The policy.

    Raises:
    :   PolicyError, IncompatibleSchemaError
        :   If the document is off contract.

    Parameters:
    :   * ****source**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**FeaturePolicy**](scikitplot.feature_selection.FeaturePolicy.html#scikitplot.feature_selection.FeaturePolicy "scikitplot.feature_selection._policy.FeaturePolicy")

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.feature_selection import load_policy
    >>> load_policy({"roles": {"target": ["y"]}}).roles_map["target"].columns
    ('y',)

    ```
    Go BackOpen In Tab