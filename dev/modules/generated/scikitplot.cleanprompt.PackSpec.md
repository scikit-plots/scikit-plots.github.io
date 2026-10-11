# PackSpec[#](#packspec "Link to this heading")

class scikitplot.cleanprompt.PackSpec(**name**, **version**, **summary**, **requires=()**, **fields=()**, **patterns=()**, **code=CodeSpec(column\_keywords=(), column\_methods=(), dtype\_roles=())**, **source='<builtin>'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L303)[#](#scikitplot.cleanprompt.PackSpec "Link to this definition")
:   One validated pack.

    Parameters:
    :   ****name****str
        :   Unique pack name.

        ****version****int
        :   The pack’s own version, bumped when its rules change meaning.

        ****summary****str
        :   One line, shown by `cleanprompt packs`.

        ****requires****tuple of str
        :   Packs this one builds on.

        ****fields****tuple of FieldSpec
        :   Field rules.

        ****patterns****tuple of PatternSpec
        :   Value-shape rules, every one already checked against its examples.

        ****code****CodeSpec
        :   Column-naming sites for code artefacts.

        ****source****str
        :   Where it was loaded from.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****summary**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****requires**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****fields**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**FieldSpec**](scikitplot.cleanprompt.FieldSpec.html#scikitplot.cleanprompt.FieldSpec "scikitplot.cleanprompt._packs.FieldSpec")**,** **...****]**)
        * ****patterns**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**PatternSpec**](scikitplot.cleanprompt.PatternSpec.html#scikitplot.cleanprompt.PatternSpec "scikitplot.cleanprompt._patterns.PatternSpec")**,** **...****]**)
        * ****code**** (**CodeSpec**)
        * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****Developer notes.**** Frozen and hashable. `source` is excluded from
    equality, so the same pack loaded from a built-in and from a user file
    compares equal — which is what lets a catalog merge treat an identical
    redefinition as harmless and a **different** one as a conflict.

    code: CodeSpec = CodeSpec(column\_keywords=(), column\_methods=(), dtype\_roles=())[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L)[#](#scikitplot.cleanprompt.PackSpec.code "Link to this definition")

    field\_index()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L344)[#](#scikitplot.cleanprompt.PackSpec.field_index "Link to this definition")
    :   Return normalised field name to its rule.

        Returns:
        :   dict
            :   One entry per name of every field.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**FieldSpec**](scikitplot.cleanprompt.FieldSpec.html#scikitplot.cleanprompt.FieldSpec "scikitplot.cleanprompt._packs.FieldSpec")]

    fields: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[FieldSpec](scikitplot.cleanprompt.FieldSpec.html#scikitplot.cleanprompt.FieldSpec "scikitplot.cleanprompt._packs.FieldSpec"), ...] = ()[#](#scikitplot.cleanprompt.PackSpec.fields "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L303)[#](#scikitplot.cleanprompt.PackSpec.name "Link to this definition")

    patterns: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[PatternSpec](scikitplot.cleanprompt.PatternSpec.html#scikitplot.cleanprompt.PatternSpec "scikitplot.cleanprompt._patterns.PatternSpec"), ...] = ()[#](#scikitplot.cleanprompt.PackSpec.patterns "Link to this definition")

    requires: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.PackSpec.requires "Link to this definition")

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '<builtin>'[#](#scikitplot.cleanprompt.PackSpec.source "Link to this definition")

    summary: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L303)[#](#scikitplot.cleanprompt.PackSpec.summary "Link to this definition")

    version: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_packs.py#L303)[#](#scikitplot.cleanprompt.PackSpec.version "Link to this definition")