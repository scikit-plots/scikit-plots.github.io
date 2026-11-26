# CoverageRow[#](#coveragerow "Link to this heading")

class scikitplot.cleanprompt.CoverageRow(**kind**, **pattern**, **validated**, **default\_on**, **pack\_patterns**, **pack\_fields**, **entity**, **entity\_default**, **entity\_tiers**, **runtime**, **surrogate**, **action**, **reversible**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow "Link to this definition")
:   What covers one detection kind, and what happens to its values.

    Parameters:
    :   ****kind****str
        :   The detection kind.

        ****pattern****bool
        :   A core structural pattern finds it.

        ****validated****bool
        :   A pattern that finds it, core or pack, has a validator (a checksum or
            a structural rule).

        ****default\_on****bool
        :   That pattern runs unless `kinds` narrows the selection.

        ****pack\_patterns****tuple of str
        :   Packs whose patterns find it.

        ****pack\_fields****tuple of str
        :   Packs whose field rules name it (a column, key or header).

        ****entity****bool
        :   An entity engine can report it.

        ****entity\_default****bool
        :   Entity engines report it unless their labels are narrowed.

        ****entity\_tiers****tuple of str
        :   Optional tiers that provide the entity engines; empty when `entity`
            is `False`.

        ****runtime****bool
        :   The runtime issues it itself (`--hide` terms, artefact paths and
            columns).

        ****surrogate****bool
        :   A surrogate stand-in exists for it (the safety floor).

        ****action****str
        :   What the policy does with it: `tokenize`, `surrogate`, `report`
            or `block`.

        ****reversible****bool
        :   Decoding restores its values: the action replaces them with a stand-in
            the vault holds.

    Parameters:
    :   * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****pattern**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****validated**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****default\_on**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****pack\_patterns**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****pack\_fields**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****entity**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****entity\_default**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****entity\_tiers**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****runtime**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****surrogate**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****action**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****reversible**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    action: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.action "Link to this definition")

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L797)[#](#scikitplot.cleanprompt.CoverageRow.as_dict "Link to this definition")
    :   Return the row as JSON-safe data.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    default\_on: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.default_on "Link to this definition")

    entity: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.entity "Link to this definition")

    entity\_default: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.entity_default "Link to this definition")

    entity\_tiers: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.entity_tiers "Link to this definition")

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.kind "Link to this definition")

    pack\_fields: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.pack_fields "Link to this definition")

    pack\_patterns: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.pack_patterns "Link to this definition")

    pattern: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.pattern "Link to this definition")

    reversible: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.reversible "Link to this definition")

    runtime: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.runtime "Link to this definition")

    surrogate: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.surrogate "Link to this definition")

    validated: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_diagnostics.py#L743)[#](#scikitplot.cleanprompt.CoverageRow.validated "Link to this definition")