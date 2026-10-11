# Encoded[#](#encoded "Link to this heading")

class scikitplot.cleanprompt.Encoded(**text**, **source**, **format**, **output\_name**, **round\_trip**, **report=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded "Link to this definition")
:   One encoded input: safe text and a report. ****Holds no removed value****.

    Parameters:
    :   ****text****str
        :   Safe to send.

        ****source****str
        :   The name the input was given as.

        ****format****str
        :   The format that read it.

        ****output\_name****str
        :   The name to write it under: the source name for formats that round
            trip, `name.ext.txt` for formats whose text was extracted.

        ****round\_trip****bool
        :   Whether decoding restores the original bytes rather than extracted
            text.

        ****report****dict
        :   Counts only — packs, kinds, fields matched — never a value.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****output\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****round\_trip**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****report**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    property count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cleanprompt.Encoded.count "Link to this definition")
    :   Distinct values replaced in this input.

        Type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    format: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded.format "Link to this definition")

    output\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded.output_name "Link to this definition")

    report: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded.report "Link to this definition")

    round\_trip: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded.round_trip "Link to this definition")

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded.source "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_runtime.py#L200)[#](#scikitplot.cleanprompt.Encoded.text "Link to this definition")