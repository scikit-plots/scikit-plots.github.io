# Diagnosis[#](#diagnosis "Link to this heading")

class scikitplot.cleanprompt.Diagnosis(**active\_kinds**, **inactive\_kinds**, **tiers**, **blind\_spots**, **ner\_active**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L107)[#](#scikitplot.cleanprompt.Diagnosis "Link to this definition")
:   What a given configuration can and cannot detect.

    Parameters:
    :   ****active\_kinds****tuple of str
        :   Detection kinds that will run.

        ****inactive\_kinds****tuple of str
        :   Kinds available in the library but not enabled by this configuration.

        ****tiers****dict
        :   Per-tier capability report, keyed by tier name.

        ****blind\_spots****tuple of BlindSpot
        :   Categories nothing currently covers.

        ****ner\_active****bool
        :   Whether named-entity detection will run.

    Parameters:
    :   * ****active\_kinds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****inactive\_kinds**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****tiers**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****blind\_spots**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**BlindSpot**](scikitplot.cleanprompt.BlindSpot.html#scikitplot.cleanprompt.BlindSpot "scikitplot.cleanprompt._diagnostics.BlindSpot")**,** **...****]**)
        * ****ner\_active**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User notes.**** `blind_spots` is the field to read. An empty tuple means
    every category this tool knows about is covered by something.

    active\_kinds: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L107)[#](#scikitplot.cleanprompt.Diagnosis.active_kinds "Link to this definition")

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L163)[#](#scikitplot.cleanprompt.Diagnosis.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    blind\_spots: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[BlindSpot](scikitplot.cleanprompt.BlindSpot.html#scikitplot.cleanprompt.BlindSpot "scikitplot.cleanprompt._diagnostics.BlindSpot"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L107)[#](#scikitplot.cleanprompt.Diagnosis.blind_spots "Link to this definition")

    headline()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L142)[#](#scikitplot.cleanprompt.Diagnosis.headline "Link to this definition")
    :   Return one sentence describing the detection posture.

        Returns:
        :   str
            :   Suitable for a banner in a terminal or a web page.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    property healthy: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.cleanprompt.Diagnosis.healthy "Link to this definition")
    :   `True` when no high-severity blind spot is present.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    inactive\_kinds: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L107)[#](#scikitplot.cleanprompt.Diagnosis.inactive_kinds "Link to this definition")

    ner\_active: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L107)[#](#scikitplot.cleanprompt.Diagnosis.ner_active "Link to this definition")

    tiers: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_diagnostics.py#L107)[#](#scikitplot.cleanprompt.Diagnosis.tiers "Link to this definition")