# BlindSpot[#](#blindspot "Link to this heading")

class scikitplot.cleanprompt.BlindSpot(**category**, **reason**, **remedy**, **examples=()**, **severity='medium'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L69)[#](#scikitplot.cleanprompt.BlindSpot "Link to this definition")
:   A category of sensitive information nothing currently detects.

    Parameters:
    :   ****category****str
        :   What is not being found, in the user’s language.

        ****reason****str
        :   Why, in one sentence.

        ****remedy****str
        :   The exact action that would fix it.

        ****examples****tuple of str
        :   Concrete things that would slip through, so the gap is legible without
            knowing the pattern names.

        ****severity****str
        :   `"high"` when the gap covers common personal data, `"medium"`
            otherwise.

    Parameters:
    :   * ****category**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****remedy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****examples**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****severity**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L96)[#](#scikitplot.cleanprompt.BlindSpot.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    category: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L69)[#](#scikitplot.cleanprompt.BlindSpot.category "Link to this definition")

    examples: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.BlindSpot.examples "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L69)[#](#scikitplot.cleanprompt.BlindSpot.reason "Link to this definition")

    remedy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_diagnostics.py#L69)[#](#scikitplot.cleanprompt.BlindSpot.remedy "Link to this definition")

    severity: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'medium'[#](#scikitplot.cleanprompt.BlindSpot.severity "Link to this definition")