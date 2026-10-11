# diagnose[#](#diagnose "Link to this heading")

scikitplot.cleanprompt.diagnose(**policy=None**, **registry=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_diagnostics.py#L215)[#](#scikitplot.cleanprompt.diagnose "Link to this definition")
:   Report what a configuration can and cannot detect.

    Parameters:
    :   ****policy****RedactionPolicy, optional
        :   The policy to describe. Defaults to
            `DEFAULT_POLICY`.

        ****registry****DetectorRegistry, optional
        :   The detectors that will run. When omitted, the default registry for
            `policy` is assumed, which means structural patterns only.

    Returns:
    :   Diagnosis
        :   The report. Never raises and never imports an optional dependency.

    Parameters:
    :   * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy") **|** **None**)
        * ****registry**** ([**DetectorRegistry**](scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt.DetectorRegistry") **|** **None**)

    Return type:
    :   [Diagnosis](scikitplot.cleanprompt.Diagnosis.html#scikitplot.cleanprompt.Diagnosis "scikitplot.cleanprompt.Diagnosis")

    Examples

    Try it in your browser!
    ```
    >>> report = diagnose()
    >>> "EMAIL" in report.active_kinds
    True
    >>> isinstance(report.headline(), str)
    True

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases