# SurrogateSet[#](#surrogateset "Link to this heading")

class scikitplot.cleanprompt.SurrogateSet(**name**, **version**, **summary**, **pools**, **identity**, **source='<memory>'**, **avoid=frozenset({})**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L319)[#](#scikitplot.cleanprompt.SurrogateSet "Link to this definition")
:   A validated set of invented names.

    Parameters:
    :   ****name****str
        :   Set name: lower case, starts with a letter, at most 32 characters.

        ****version****int
        :   The set’s own version; bump it when entries change meaning.

        ****summary****str
        :   One line saying what the set is for.

        ****pools****tuple of (str, tuple of tuple of str)
        :   Each kind with its lists, in `SETTABLE_KINDS` order.

        ****identity****str
        :   `name@version#digest16` — what a vault and a plan record.

        ****source****str, default=’<memory>’
        :   Where it was loaded from. Not part of equality.

        ****avoid****frozenset of str, default=frozenset()
        :   `word_key` of every word no stand-in may be.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****version**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****summary**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****pools**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]****,** **...****]****]****,** **...****]**)
        * ****identity**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****avoid**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)"))

    Notes

    ****Developer notes.**** Build one with `surrogate_set_from_document` or
    [`load_surrogate_set`](scikitplot.cleanprompt.load_surrogate_set.html#scikitplot.cleanprompt.load_surrogate_set "scikitplot.cleanprompt.load_surrogate_set"); the constructor does not validate, and the
    identity is only meaningful when it was computed from the content.

    avoid: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)") = frozenset({})[#](#scikitplot.cleanprompt.SurrogateSet.avoid "Link to this definition")

    avoids(**candidate**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L356)[#](#scikitplot.cleanprompt.SurrogateSet.avoids "Link to this definition")
    :   Return whether `candidate` is one of the set’s avoided words.

        Parameters:
        :   ****candidate****str
            :   A proposed stand-in, from this set or from the built-in names.

        Returns:
        :   bool
            :   `True` when its `word_key` is listed under `avoid`.

        Parameters:
        :   ****candidate**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

        Notes

        ****Developer notes.**** Called by the core loop
        (`surrogate_for`) on every
        candidate, so the rule holds for two-part names, which are only formed
        at run time, and for the built-in names of kinds the set leaves out.
        A provider without this method avoids nothing.

    candidate(**kind**, **index**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L384)[#](#scikitplot.cleanprompt.SurrogateSet.candidate "Link to this definition")
    :   Propose the `index`-th stand-in for `kind`.

        Parameters:
        :   ****kind****str
            :   The placeholder category.

            ****index****int
            :   Zero-based position in this kind’s sequence.

        Returns:
        :   str or None
            :   A candidate, or `None` when the set does not define `kind`
                (the core then uses its built-in names).

        Parameters:
        :   * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

        Notes

        ****Developer notes.**** Only a proposal: the core decides whether it is
        used (`GENERATOR_DESIGN.md` section 6). Two lists are combined with
        the same offset rule as the built-in names, so consecutive people do
        not share a surname.

    capacity(**kind**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L418)[#](#scikitplot.cleanprompt.SurrogateSet.capacity "Link to this definition")
    :   Return how many distinct stand-ins this set can propose for `kind`.

        Parameters:
        :   ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    identity: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L319)[#](#scikitplot.cleanprompt.SurrogateSet.identity "Link to this definition")

    kinds()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L380)[#](#scikitplot.cleanprompt.SurrogateSet.kinds "Link to this definition")
    :   Return the kinds this set defines.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L319)[#](#scikitplot.cleanprompt.SurrogateSet.name "Link to this definition")

    pools: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...], ...]], ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L319)[#](#scikitplot.cleanprompt.SurrogateSet.pools "Link to this definition")

    source: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '<memory>'[#](#scikitplot.cleanprompt.SurrogateSet.source "Link to this definition")

    summary: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L319)[#](#scikitplot.cleanprompt.SurrogateSet.summary "Link to this definition")

    version: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_surrogate_sets.py#L319)[#](#scikitplot.cleanprompt.SurrogateSet.version "Link to this definition")