# FusionPolicy[#](#fusionpolicy "Link to this heading")

class scikitplot.corpus.FusionPolicy(**k=60**, **weights=()**, **default\_weight=1.0**, **top\_k=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_fusion.py#L160)[#](#scikitplot.corpus.FusionPolicy "Link to this definition")
:   Weighted reciprocal rank fusion with one tie-break and returned contributions.

    Parameters:
    :   ****k****int, optional
        :   The RRF constant, at least 1. Default 60.

        ****weights****mapping of str to float, or tuple of (str, float) pairs, optional
        :   Weight per leg name. Finite and non-negative; a weight of 0 removes the
            leg. Stored as a tuple of pairs sorted by leg name, so `dict(weights)`
            reads it back and the policy is hashable.

        ****default\_weight****float, optional
        :   Weight of a leg that `weights` does not name. Default 1.0.

        ****top\_k****int or None, optional
        :   Number of items to return, at least 0; `None` returns every item.

    Raises:
    :   TypeError
        :   If `k` or `top_k` is not an int (`bool` included), a weight is not
            a real number, or a leg name is not a `str`.

        ValueError
        :   If `k < 1`, `top_k < 0`, or a weight is negative or not finite.

    Parameters:
    :   * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****weights**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]** **|** [**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****,** **...****]**)
        * ****default\_weight**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> FusionPolicy.from_alpha(0.0).fuse([("lexical", ["a"]), ("dense", ["z"])])[0].key
    'a'
    >>> len(FusionPolicy.from_alpha(0.0).fuse([("lexical", ["a"]), ("dense", ["z"])]))
    1

    ```
    Go BackOpen In Tab

    default\_weight: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.corpus.FusionPolicy.default_weight "Link to this definition")

    classmethod from\_alpha(**alpha**, **\***, **k=60**, **top\_k=None**, **lexical='lexical'**, **dense='dense'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_fusion.py#L230)[#](#scikitplot.corpus.FusionPolicy.from_alpha "Link to this definition")
    :   Return the two-leg policy that `alpha` is shorthand for.

        Parameters:
        :   ****alpha****float
            :   Dense share in `[0, 1]`: `{lexical: 1 - alpha, dense: alpha}`.
                `0` is the lexical leg alone and `1` the dense leg alone.

            ****k****int, optional
            :   The RRF constant. Default 60.

            ****top\_k****int or None, optional
            :   Number of items to return.

            ****lexical, dense****str, optional
            :   The two leg names.

        Returns:
        :   FusionPolicy
            :   Every other leg name gets weight 0.

        Raises:
        :   TypeError
            :   If `alpha` is not a real number.

            ValueError
            :   If `alpha` is outside `[0, 1]` or not finite.

        Parameters:
        :   * ****alpha**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
            * ****k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****top\_k**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
            * ****lexical**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****dense**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FusionPolicy**](#scikitplot.corpus.FusionPolicy "scikitplot.corpus._fusion.FusionPolicy")

    fuse(**legs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_fusion.py#L281)[#](#scikitplot.corpus.FusionPolicy.fuse "Link to this definition")
    :   Fuse ranked legs into one ranking.

        Parameters:
        :   ****legs****iterable of (str, iterable of str)
            :   Each leg’s name and its keys, best first.

        Returns:
        :   list of FusedItem
            :   Descending exact score, ties by ascending key, at most `top_k`.

        Raises:
        :   TypeError
            :   If a leg is not a `(name, keys)` pair, a name is not a `str`, or
                a key is not a `str`.

            ValueError
            :   If a key is the empty string.

        Parameters:
        :   ****legs**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]****]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**FusedItem**](scikitplot.corpus.FusedItem.html#scikitplot.corpus.FusedItem "scikitplot.corpus._fusion.FusedItem")]

    k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 60[#](#scikitplot.corpus.FusionPolicy.k "Link to this definition")

    top\_k: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.FusionPolicy.top_k "Link to this definition")

    weight(**leg**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_fusion.py#L277)[#](#scikitplot.corpus.FusionPolicy.weight "Link to this definition")
    :   Return the weight of the leg named `leg`.

        Parameters:
        :   ****leg**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")

    weights: [Mapping](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")] | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")], ...] = ()[#](#scikitplot.corpus.FusionPolicy.weights "Link to this definition")