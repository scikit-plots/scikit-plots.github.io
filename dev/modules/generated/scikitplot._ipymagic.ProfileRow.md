# ProfileRow[#](#profilerow "Link to this heading")

class scikitplot.\_ipymagic.ProfileRow(**ncalls**, **primitive\_calls**, **tottime**, **cumtime**, **file**, **line**, **function**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow "Link to this definition")
:   One function of a profile.

    Parameters:
    :   ****ncalls****int
        :   Calls, recursive ones included.

        ****primitive\_calls****int
        :   Calls that were not recursive.

        ****tottime****float
        :   Seconds in the function itself.

        ****cumtime****float
        :   Seconds in the function and everything it called.

        ****file****str
        :   Source file (`"~"` for built-ins).

        ****line****int
        :   First line.

        ****function****str
        :   Function name.

    Parameters:
    :   * ****ncalls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****primitive\_calls**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****tottime**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****cumtime**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****file**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****line**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****function**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    cumtime: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.cumtime "Link to this definition")

    file: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.file "Link to this definition")

    function: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.function "Link to this definition")

    line: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.line "Link to this definition")

    property location: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot._ipymagic.ProfileRow.location "Link to this definition")
    :   `file:line(function)`, as [`pstats`](https://docs.python.org/3/library/pstats.html#module-pstats "(in Python v3.15)") writes it.

        Type:
        :   Where the function is

    ncalls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.ncalls "Link to this definition")

    primitive\_calls: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.primitive_calls "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L165)[#](#scikitplot._ipymagic.ProfileRow.to_dict "Link to this definition")
    :   Return the row as plain data.

        Returns:
        :   dict
            :   Every field.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    tottime: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/f7759b55/scikitplot/_ipymagic/_results.py#L127)[#](#scikitplot._ipymagic.ProfileRow.tottime "Link to this definition")