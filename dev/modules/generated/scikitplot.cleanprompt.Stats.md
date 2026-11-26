# Stats[#](#stats "Link to this heading")

class scikitplot.cleanprompt.Stats(**input\_chars**, **output\_chars**, **detected\_spans**, **resolved\_spans**, **dropped\_spans**, **entries**, **by\_kind**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats "Link to this definition")
:   Counters describing one redaction pass.

    Parameters:
    :   ****input\_chars****int
        :   Length of the input text.

        ****output\_chars****int
        :   Length of the redacted text.

        ****detected\_spans****int
        :   Spans produced by detectors, before overlap resolution.

        ****resolved\_spans****int
        :   Spans surviving overlap resolution.

        ****dropped\_spans****int
        :   Spans discarded by overlap resolution.

        ****entries****int
        :   Distinct values redacted.

        ****by\_kind****dict of str to int
        :   Distinct values per category.

    Parameters:
    :   * ****input\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****output\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****detected\_spans**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****resolved\_spans**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****dropped\_spans**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****entries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****by\_kind**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    by\_kind: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.by_kind "Link to this definition")

    detected\_spans: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.detected_spans "Link to this definition")

    dropped\_spans: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.dropped_spans "Link to this definition")

    entries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.entries "Link to this definition")

    input\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.input_chars "Link to this definition")

    output\_chars: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.output_chars "Link to this definition")

    resolved\_spans: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_types.py#L182)[#](#scikitplot.cleanprompt.Stats.resolved_spans "Link to this definition")