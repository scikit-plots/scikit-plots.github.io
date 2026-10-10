# FieldSpec[#](#fieldspec "Link to this heading")

class scikitplot.cleanprompt.FieldSpec(**names**, **kind**, **role='field'**, **suffix=True**, **span='line'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_packs.py#L238)[#](#scikitplot.cleanprompt.FieldSpec "Link to this definition")
:   A field whose value is sensitive wherever it appears in a record.

    Parameters:
    :   ****names****tuple of str
        :   Normalised names that identify the field.

        ****kind****str
        :   The kind its values are recorded under.

        ****role****str
        :   The schema role a column of this name carries, for the role-preserving
            stand-ins of notebooks and modules.

        ****suffix****bool, default=True
        :   Whether a key that **ends** with one of the names also matches, so that
            `billing_phone` is a `phone`. Off for names too generic to trust
            as a suffix: `state` would otherwise match `loading_state`.

        ****span****{‘line’, ‘clause’, ‘token’}, default=’line’
        :   How far a value runs in **prose** (`Key: value` in running text).
            `line` hides to the end of the line — right for names, addresses,
            diagnoses and dates, which may contain a comma. `clause` stops at
            the first comma or semicolon — right for identifiers whose format
            never contains one but may contain spaces (a telephone number).
            `token` stops at the first whitespace — right only for identifiers
            whose format contains neither, so that `MRN: 00412345 for
            ann@example.com` hides the number as an MRN and leaves the address to
            the email rule. Choose by the identifier’s **format**; when in doubt,
            `line` hides more and never less. Structured formats are unaffected:
            a CSV cell or a JSON value is always the whole value.

    Parameters:
    :   * ****names**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****role**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****suffix**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****span**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_packs.py#L238)[#](#scikitplot.cleanprompt.FieldSpec.kind "Link to this definition")

    names: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_packs.py#L238)[#](#scikitplot.cleanprompt.FieldSpec.names "Link to this definition")

    role: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'field'[#](#scikitplot.cleanprompt.FieldSpec.role "Link to this definition")

    span: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'line'[#](#scikitplot.cleanprompt.FieldSpec.span "Link to this definition")

    suffix: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cleanprompt.FieldSpec.suffix "Link to this definition")