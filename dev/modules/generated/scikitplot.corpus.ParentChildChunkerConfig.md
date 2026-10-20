# ParentChildChunkerConfig[#](#parentchildchunkerconfig "Link to this heading")

class scikitplot.corpus.ParentChildChunkerConfig(**parent\_size=2000**, **child\_size=400**, **child\_overlap=0**, **separators=('\n\n', '\n', '. ', ' ', '')**, **emit\_parents=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_recursive.py#L491)[#](#scikitplot.corpus.ParentChildChunkerConfig "Link to this definition")
:   Configuration for [`ParentChildChunker`](scikitplot.corpus.ParentChildChunker.html#scikitplot.corpus.ParentChildChunker "scikitplot.corpus.ParentChildChunker").

    Parameters:
    :   ****parent\_size****int, default=2000
        :   Largest parent, in characters.

        ****child\_size****int, default=400
        :   Largest child, in characters; smaller than `parent_size`.

        ****child\_overlap****int, default=0
        :   Context characters of a child, as `chunk_overlap` of
            [`RecursiveChunkerConfig`](scikitplot.corpus.RecursiveChunkerConfig.html#scikitplot.corpus.RecursiveChunkerConfig "scikitplot.corpus.RecursiveChunkerConfig"), within its parent.

        ****separators****tuple of str, default=(”nn”, “n”, “. “, “ “, “”)
        :   Separators for both levels, coarsest first, ending with `""`.

        ****emit\_parents****bool, default=True
        :   Emit each parent before its children. `False` emits children only
            (each still records its parent’s span in `parent_span`).

    Parameters:
    :   * ****parent\_size**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****child\_size**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****child\_overlap**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****separators**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****emit\_parents**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    child\_overlap: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.ParentChildChunkerConfig.child_overlap "Link to this definition")

    child\_size: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 400[#](#scikitplot.corpus.ParentChildChunkerConfig.child_size "Link to this definition")

    emit\_parents: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.ParentChildChunkerConfig.emit_parents "Link to this definition")

    parent\_size: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 2000[#](#scikitplot.corpus.ParentChildChunkerConfig.parent_size "Link to this definition")

    separators: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ('\n\n', '\n', '. ', ' ', '')[#](#scikitplot.corpus.ParentChildChunkerConfig.separators "Link to this definition")