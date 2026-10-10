# nltk\_detector[#](#nltk-detector "Link to this heading")

scikitplot.cleanprompt.nltk\_detector(**labels=frozenset({'EVENT', 'FAC', 'GPE', 'LANGUAGE', 'LAW', 'LOC', 'NORP', 'ORG', 'PERSON', 'PRODUCT', 'WORK\_OF\_ART'})**, **language='en'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_nltk.py#L615)[#](#scikitplot.cleanprompt.nltk_detector "Link to this definition")
:   Build an [`NltkDetector`](scikitplot.cleanprompt.NltkDetector.html#scikitplot.cleanprompt.NltkDetector "scikitplot.cleanprompt.NltkDetector").

    Parameters:
    :   ****labels****iterable of str, optional
        :   Canonical labels to keep.

        ****language****str, default=’en’
        :   Language code.

        ****\*\*kwargs****
        :   Forwarded to [`NltkDetector`](scikitplot.cleanprompt.NltkDetector.html#scikitplot.cleanprompt.NltkDetector "scikitplot.cleanprompt.NltkDetector").

    Returns:
    :   NltkDetector
        :   The detector. Construction imports nothing; NLTK loads on first use.

    Parameters:
    :   * ****labels**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**NltkDetector**](scikitplot.cleanprompt.NltkDetector.html#scikitplot.cleanprompt.NltkDetector "scikitplot.cleanprompt._nltk.NltkDetector")

    Examples

    Try it in your browser!
    ```
    >>> nltk_detector().kind
    'NE'

    ```
    Go BackOpen In Tab