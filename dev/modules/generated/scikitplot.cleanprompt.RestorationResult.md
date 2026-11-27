# RestorationResult[#](#restorationresult "Link to this heading")

class scikitplot.cleanprompt.RestorationResult(**text**, **restored**, **unknown=()**, **unused=()**, **repaired=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_types.py#L284)[#](#scikitplot.cleanprompt.RestorationResult "Link to this definition")
:   Output of a restoration pass.

    Parameters:
    :   ****text****str
        :   The text with placeholders replaced by their original values.

        ****restored****tuple of str
        :   Labels that were found and replaced, in first-appearance order.

        ****unknown****tuple of str
        :   Labels that matched the placeholder grammar but were not in the vault.
            Empty unless restoration ran in non-strict mode.

        ****unused****tuple of str
        :   Vault labels that did not appear in the text.

        ****repaired****tuple of tuple of str
        :   `(as the reply spelled it, the label it was taken to mean)` for every
            placeholder that had to be matched leniently, in first-appearance
            order. Empty when the reply came back with its labels intact.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****restored**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****unknown**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****unused**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****repaired**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** **...****]**)

    Notes

    ****User notes.**** A non-empty `unknown` means the reply referred to a
    placeholder this vault never issued; the model may have invented it. A
    non-empty `unused` is normal: a summary need not mention every entity.

    `repaired` is worth reading. It lists the places where the model rewrote
    a placeholder and restoration matched it anyway — `[EMAIL_1]` taken to
    mean `[EMAIL-1]`. The substitution happened, and the entry says so rather
    than leaving you to notice.

    property complete: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.cleanprompt.RestorationResult.complete "Link to this definition")
    :   `True` when every placeholder found was resolved.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    repaired: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], ...] = ()[#](#scikitplot.cleanprompt.RestorationResult.repaired "Link to this definition")

    restored: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_types.py#L284)[#](#scikitplot.cleanprompt.RestorationResult.restored "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_types.py#L284)[#](#scikitplot.cleanprompt.RestorationResult.text "Link to this definition")

    unknown: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.RestorationResult.unknown "Link to this definition")

    unused: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.RestorationResult.unused "Link to this definition")