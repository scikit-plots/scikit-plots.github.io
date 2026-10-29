# PatternSpec[#](#patternspec "Link to this heading")

class scikitplot.cleanprompt.PatternSpec(**kind**, **pattern**, **intent**, **priority=50**, **flags=0**, **validate=None**, **confidence=1.0**, **enabled\_by\_default=True**, **examples\_yes=()**, **examples\_no=()**, **risk\_reason=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_patterns.py#L57)[#](#scikitplot.cleanprompt.PatternSpec "Link to this definition")
:   One named structural pattern.

    Parameters:
    :   ****kind****str
        :   Category label, used to build placeholders. Upper case by convention.

        ****pattern****str
        :   The regular expression source.

        ****intent****str
        :   What this pattern is for, in one sentence. Reviewed, not decorative.

        ****priority****int, default=50
        :   Arbitration weight under
            `PRIORITY_WINS`
            and as a tie-break elsewhere. Higher means more specific.

        ****flags****int, default=0
        :   Flags passed to [`re.compile`](https://docs.python.org/3/library/re.html#re.compile "(in Python v3.15)").

        ****validate****callable, optional
        :   `validate(match) -> bool`. A structural match returning `False` is
            discarded. Must be pure and total.

        ****confidence****float, default=1.0
        :   Confidence reported for matches of this pattern.

        ****enabled\_by\_default****bool, default=True
        :   Whether [`default_patterns`](scikitplot.cleanprompt.default_patterns.html#scikitplot.cleanprompt.default_patterns "scikitplot.cleanprompt.default_patterns") includes it.

        ****examples\_yes****tuple of str, default=()
        :   Strings that must produce at least one accepted match.

        ****examples\_no****tuple of str, default=()
        :   Strings that must produce no accepted match.

        ****risk\_reason****str, optional
        :   Set when the pack accepts this pattern’s backtracking risk on purpose
            (`risk: accepted`), with the reason written beside it. The pattern
            risk check then lists it as accepted instead of warning.

    Raises:
    :   PatternError
        :   If `pattern` does not compile, or `intent` is empty.

    Parameters:
    :   * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****pattern**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****intent**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****flags**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****validate**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**Match**](https://docs.python.org/3/library/re.html#re.Match "(in Python v3.15)")**]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]** **|** **None**)
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****enabled\_by\_default**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****examples\_yes**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****examples\_no**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****risk\_reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    compiled()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_patterns.py#L123)[#](#scikitplot.cleanprompt.PatternSpec.compiled "Link to this definition")
    :   Return the compiled expression.

        Returns:
        :   re.Pattern
            :   The compiled pattern.

        Return type:
        :   [**Pattern**](https://docs.python.org/3/library/re.html#re.Pattern "(in Python v3.15)")

        Notes

        ****Developer notes.**** [`re.compile`](https://docs.python.org/3/library/re.html#re.compile "(in Python v3.15)") maintains its own cache keyed on
        `(pattern, flags)`, so repeated calls are cheap and no cache is kept
        here. Holding a compiled object on a frozen dataclass would make the
        instance unpicklable for no gain.

    confidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.cleanprompt.PatternSpec.confidence "Link to this definition")

    enabled\_by\_default: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cleanprompt.PatternSpec.enabled_by_default "Link to this definition")

    examples\_no: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.PatternSpec.examples_no "Link to this definition")

    examples\_yes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.PatternSpec.examples_yes "Link to this definition")

    flags: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.cleanprompt.PatternSpec.flags "Link to this definition")

    intent: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_patterns.py#L57)[#](#scikitplot.cleanprompt.PatternSpec.intent "Link to this definition")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_patterns.py#L57)[#](#scikitplot.cleanprompt.PatternSpec.kind "Link to this definition")

    pattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_patterns.py#L57)[#](#scikitplot.cleanprompt.PatternSpec.pattern "Link to this definition")

    priority: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 50[#](#scikitplot.cleanprompt.PatternSpec.priority "Link to this definition")

    risk\_reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.PatternSpec.risk_reason "Link to this definition")

    validate: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[[Match](https://docs.python.org/3/library/re.html#re.Match "(in Python v3.15)")], [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.PatternSpec.validate "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases