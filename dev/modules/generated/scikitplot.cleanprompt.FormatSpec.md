# FormatSpec[#](#formatspec "Link to this heading")

class scikitplot.cleanprompt.FormatSpec(**name**, **version**, **summary**, **extensions**, **splitter**, **round\_trip**, **options=()**, **packs=()**, **source='<builtin>'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec "Link to this definition")
:   One validated file format.

    Parameters:
    :   ****name****str
        :   Unique format name.

        ****version****int
        :   The definition’s own version.

        ****summary****str
        :   One line.

        ****extensions****tuple of str
        :   Lower-case, with the leading dot.

        ****splitter****str
        :   One of `SPLITTERS`.

        ****round\_trip****bool
        :   Whether decode restores the original bytes exactly.

        ****options****tuple of (str, object)
        :   Splitter options, sorted, so the spec stays hashable.

        ****packs****tuple of str
        :   Packs `packs("auto")` selects for this format.

        ****source****str
        :   Where it was loaded from.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****summary**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****extensions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****splitter**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****round\_trip**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****options**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****,** **...****]**)
        * ****packs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    extensions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec.extensions "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec.name "Link to this definition")

    option\_map()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L104)[#](#scikitplot.cleanprompt.FormatSpec.option_map "Link to this definition")
    :   Return the splitter options as a dictionary.

        Returns:
        :   dict
            :   A fresh copy; mutating it changes nothing.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    options: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")], ...] = ()[#](#scikitplot.cleanprompt.FormatSpec.options "Link to this definition")

    packs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.FormatSpec.packs "Link to this definition")

    round\_trip: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec.round_trip "Link to this definition")

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '<builtin>'[#](#scikitplot.cleanprompt.FormatSpec.source "Link to this definition")

    splitter: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec.splitter "Link to this definition")

    summary: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec.summary "Link to this definition")

    version: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_formats.py#L67)[#](#scikitplot.cleanprompt.FormatSpec.version "Link to this definition")