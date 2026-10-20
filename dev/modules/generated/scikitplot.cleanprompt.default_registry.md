# default\_registry[#](#default-registry "Link to this heading")

scikitplot.cleanprompt.default\_registry(**kinds=None**, **literal\_terms=None**, **literal\_kind='CUSTOM'**, **word\_boundary=False**, **ignore\_case=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L638)[#](#scikitplot.cleanprompt.default_registry "Link to this definition")
:   Build a registry from the pattern library, plus optional literal terms.

    Parameters:
    :   ****kinds****iterable of str, optional
        :   Pattern kinds to include. `None` selects
            `default_patterns`.

        ****literal\_terms****iterable of str, optional
        :   Exact strings to hide, added as a [`LiteralDetector`](scikitplot.cleanprompt.LiteralDetector.html#scikitplot.cleanprompt.LiteralDetector "scikitplot.cleanprompt.LiteralDetector").

        ****literal\_kind****str, default=’CUSTOM’
        :   Category for the literal detector.

        ****word\_boundary****bool, default=False
        :   Passed to the literal detector.

        ****ignore\_case****bool, default=False
        :   Passed to the literal detector.

    Returns:
    :   DetectorRegistry
        :   A registry containing one [`RegexDetector`](scikitplot.cleanprompt.RegexDetector.html#scikitplot.cleanprompt.RegexDetector "scikitplot.cleanprompt.RegexDetector") per selected pattern
            and, when terms were given, one [`LiteralDetector`](scikitplot.cleanprompt.LiteralDetector.html#scikitplot.cleanprompt.LiteralDetector "scikitplot.cleanprompt.LiteralDetector").

    Raises:
    :   PatternError
        :   If a requested kind is not in the pattern library.

    Parameters:
    :   * ****kinds**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****literal\_terms**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****literal\_kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****word\_boundary**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****ignore\_case**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**DetectorRegistry**](scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt._detectors.DetectorRegistry")

    Examples

    Try it in your browser!
    ```
    >>> registry = default_registry(kinds=["EMAIL"], literal_terms=["Acme"])
    >>> len(registry)
    2

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases