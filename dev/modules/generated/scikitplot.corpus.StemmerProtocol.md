# StemmerProtocol[#](#stemmerprotocol "Link to this heading")

class scikitplot.corpus.StemmerProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L277)[#](#scikitplot.corpus.StemmerProtocol "Link to this definition")
:   Structural protocol for word stemmers.

    Examples

    Try it in your browser!
    ```
    >>> class MyStemmer:
    ...     def stem(self, word: str) -> str:
    ...         return word.rstrip("ing")
    >>> isinstance(MyStemmer(), StemmerProtocol)
    True

    ```
    Go BackOpen In Tab

    stem(**word**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L290)[#](#scikitplot.corpus.StemmerProtocol.stem "Link to this definition")
    :   Return the stem of **word**.

        Parameters:
        :   ****word****str
            :   Input word.

        Returns:
        :   str
            :   Stemmed form.

        Parameters:
        :   ****word**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")