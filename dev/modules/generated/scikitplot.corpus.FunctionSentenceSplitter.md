# FunctionSentenceSplitter[#](#functionsentencesplitter "Link to this heading")

class scikitplot.corpus.FunctionSentenceSplitter(**fn**, **name='custom'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L436)[#](#scikitplot.corpus.FunctionSentenceSplitter "Link to this definition")
:   Wrap any `Callable[[str], list[str]]` as a [`SentenceSplitterProtocol`](scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus.SentenceSplitterProtocol").

    Parameters:
    :   ****fn****Callable[[str], list[str]]
        :   Sentence-splitting function.

        ****name****str, optional
        :   Human-readable name for logging and `repr`.

    Parameters:
    :   * ****fn**** (**Callable****[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]**)
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Examples

    Try it in your browser!
    ```
    >>> sp = FunctionSentenceSplitter(lambda t: t.split(". "))
    >>> sp.split("Hello. World.")
    ['Hello', 'World.']

    ```
    Go BackOpen In Tab

    split(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L466)[#](#scikitplot.corpus.FunctionSentenceSplitter.split "Link to this definition")
    :   Split **text** into sentences.

        Parameters:
        :   ****text****str
            :   Input document text.

        Returns:
        :   list[str]
            :   Sentence strings.

        Raises:
        :   TypeError
            :   If the wrapped callable does not return a list.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]