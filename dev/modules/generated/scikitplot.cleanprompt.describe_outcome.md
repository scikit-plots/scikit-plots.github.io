# describe\_outcome[#](#describe-outcome "Link to this heading")

scikitplot.cleanprompt.describe\_outcome(**result**, **diagnosis**, **suggestions=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_diagnostics.py#L609)[#](#scikitplot.cleanprompt.describe_outcome "Link to this definition")
:   Explain a redaction outcome, especially an empty one.

    Parameters:
    :   ****result****RedactionResult
        :   The completed pass.

        ****diagnosis****Diagnosis
        :   What was looking.

        ****suggestions****tuple of Suggestion, default=()
        :   Candidates still in the clear.

    Returns:
    :   dict
        :   A JSON-safe explanation with `level`, `headline`, `detail` and
            `actions`. `level` is `"ok"`, `"warning"` or `"alert"`.

    Parameters:
    :   * ****result**** (**RedactionResult**)
        * ****diagnosis**** ([**Diagnosis**](scikitplot.cleanprompt.Diagnosis.html#scikitplot.cleanprompt.Diagnosis "scikitplot.cleanprompt.Diagnosis"))
        * ****suggestions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**Suggestion**](scikitplot.cleanprompt.Suggestion.html#scikitplot.cleanprompt.Suggestion "scikitplot.cleanprompt.Suggestion")**,** **...****]**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), Any]

    Notes

    ****Developer notes.**** `level` is `"alert"` for the case that motivated
    this module: nothing was found **and** something was not looking. That
    combination must never render as a neutral “no sensitive values detected”,
    because the user reads that as “this text is safe to send”.