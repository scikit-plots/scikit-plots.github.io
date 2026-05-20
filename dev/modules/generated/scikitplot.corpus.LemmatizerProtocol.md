# LemmatizerProtocol[#](#lemmatizerprotocol "Link to this heading")

class scikitplot.corpus.LemmatizerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L241)[#](#scikitplot.corpus.LemmatizerProtocol "Link to this definition")
:   Structural protocol for word lemmatizers.

    The `pos` parameter is optional context (part-of-speech tag).
    Implementations that do not use `pos` can ignore it.

    Examples

    Try it in your browser!
    ```
    >>> class MyLemma:
    ...     def lemmatize(self, word: str, pos: str = None) -> str:
    ...         return word.lower()
    >>> isinstance(MyLemma(), LemmatizerProtocol)
    True

    ```
    Go BackOpen In Tab

    lemmatize(**word**, **pos=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L257)[#](#scikitplot.corpus.LemmatizerProtocol.lemmatize "Link to this definition")
    :   Return the lemma of **word**.

        Parameters:
        :   ****word****str
            :   Input word.

            ****pos****str, optional
            :   Part-of-speech hint (e.g. `"n"` for noun, `"v"` for verb).

        Returns:
        :   str
            :   Lemma form.

        Parameters:
        :   * ****word**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****pos**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")