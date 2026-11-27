# ReadCoverage[#](#readcoverage "Link to this heading")

class scikitplot.corpus.ReadCoverage(**unit='part'**, **read=0**, **empty=0**, **skipped=<factory>**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L146)[#](#scikitplot.corpus.ReadCoverage "Link to this definition")
:   What one read of a source covered: parts read, empty and skipped.

    Parameters:
    :   ****unit****str
        :   What a part is (`"member"`, `"page"`, `"file"`), for messages.

        ****read****int
        :   Parts that gave text.

        ****empty****int
        :   Parts that were read and gave no text.

        ****skipped****dict of str to int
        :   Parts not read, by reason (`"unsupported"`, `"hidden"`,
            `"unsafe-path"`, `"error"`, `"symlink"`).

    Parameters:
    :   * ****unit**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****read**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****empty**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****skipped**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]**)

    Notes

    ****User note:**** A reader that fills one exposes it as `reader.coverage`
    after iteration; a new read starts a new record, so reading twice gives
    the same counts. Messages hold counts and reasons only, never text.

    empty: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.ReadCoverage.empty "Link to this definition")

    is\_poor(**warn\_share=0.5**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L202)[#](#scikitplot.corpus.ReadCoverage.is_poor "Link to this definition")
    :   Return whether the read deserves a warning.

        True when parts were seen but none gave text, or when the share of
        parts skipped or empty is above **warn\_share** (`0` < share <= `1`;
        `1` warns only when nothing was read).

        Parameters:
        :   ****warn\_share**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    merge(**other**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L184)[#](#scikitplot.corpus.ReadCoverage.merge "Link to this definition")
    :   Add another record’s counts (a nested archive’s) to this one.

        Parameters:
        :   ****other**** ([**ReadCoverage**](#scikitplot.corpus.ReadCoverage "scikitplot.corpus._base.ReadCoverage"))

        Return type:
        :   None

    read: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 0[#](#scikitplot.corpus.ReadCoverage.read "Link to this definition")

    skip(**reason**, **count=1**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L180)[#](#scikitplot.corpus.ReadCoverage.skip "Link to this definition")
    :   Count **count** parts skipped for **reason**.

        Parameters:
        :   * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****count**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   None

    skipped: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L146)[#](#scikitplot.corpus.ReadCoverage.skipped "Link to this definition")

    summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_base.py#L191)[#](#scikitplot.corpus.ReadCoverage.summary "Link to this definition")
    :   Return `"2 read, 1 empty, 3 skipped (2 unsupported, 1 hidden)"`.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    property total: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.ReadCoverage.total "Link to this definition")
    :   read, empty and skipped.

        Type:
        :   Return every part seen

    unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'part'[#](#scikitplot.corpus.ReadCoverage.unit "Link to this definition")