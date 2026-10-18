# EngineSpec[#](#enginespec "Link to this heading")

class scikitplot.cleanprompt.EngineSpec(**name**, **tier**, **summary**, **languages**, **needs\_model**, **priority=30**, **confidence=0.7**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L163)[#](#scikitplot.cleanprompt.EngineSpec "Link to this definition")
:   Static description of one named-entity engine.

    Parameters:
    :   ****name****str
        :   Engine name, as used by `--ner-engine`.

        ****tier****str
        :   Capability tier that must be available for it to run.

        ****summary****str
        :   One line describing what it is for.

        ****languages****tuple of str
        :   Language codes it can handle, or `("*",)` for “depends on the model”.

        ****needs\_model****bool
        :   Whether a separate model download is required.

        ****priority****int
        :   Detector arbitration weight. Below the structural patterns, so an
            address recognised by both is labelled `EMAIL`, not `ORG`.

        ****confidence****float
        :   Reported confidence for this engine’s spans.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****tier**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****summary**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****languages**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****needs\_model**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    confidence: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 0.7[#](#scikitplot.cleanprompt.EngineSpec.confidence "Link to this definition")

    languages: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L163)[#](#scikitplot.cleanprompt.EngineSpec.languages "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L163)[#](#scikitplot.cleanprompt.EngineSpec.name "Link to this definition")

    needs\_model: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L163)[#](#scikitplot.cleanprompt.EngineSpec.needs_model "Link to this definition")

    priority: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 30[#](#scikitplot.cleanprompt.EngineSpec.priority "Link to this definition")

    summary: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L163)[#](#scikitplot.cleanprompt.EngineSpec.summary "Link to this definition")

    supports(**language**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L195)[#](#scikitplot.cleanprompt.EngineSpec.supports "Link to this definition")
    :   Return whether this engine can handle `language`.

        Parameters:
        :   ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    tier: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_engines.py#L163)[#](#scikitplot.cleanprompt.EngineSpec.tier "Link to this definition")