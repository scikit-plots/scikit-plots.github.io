# spacy\_detector[#](#spacy-detector "Link to this heading")

scikitplot.cleanprompt.spacy\_detector(**model=None**, **labels=frozenset({'EVENT', 'FAC', 'GPE', 'LANGUAGE', 'LAW', 'LOC', 'NORP', 'ORG', 'PERSON', 'PRODUCT', 'WORK\_OF\_ART'})**, **language='en'**, **size='sm'**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_ner.py#L329)[#](#scikitplot.cleanprompt.spacy_detector "Link to this definition")
:   Build a [`NerDetector`](scikitplot.cleanprompt.NerDetector.html#scikitplot.cleanprompt.NerDetector "scikitplot.cleanprompt.NerDetector").

    Parameters:
    :   ****model****str, default=’en\_core\_web\_lg’
        :   Name of an installed spaCy model.

        ****labels****iterable of str, optional
        :   Entity labels to redact.

        ****\*\*kwargs****
        :   Forwarded to [`NerDetector`](scikitplot.cleanprompt.NerDetector.html#scikitplot.cleanprompt.NerDetector "scikitplot.cleanprompt.NerDetector").

    Returns:
    :   NerDetector
        :   The detector. Construction does not import spaCy or load the model;
            both happen on the first [`NerDetector.detect`](scikitplot.cleanprompt.NerDetector.html#scikitplot.cleanprompt.NerDetector.detect "scikitplot.cleanprompt.NerDetector.detect") call.

    Parameters:
    :   * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****labels**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Return type:
    :   [**NerDetector**](scikitplot.cleanprompt.NerDetector.html#scikitplot.cleanprompt.NerDetector "scikitplot.cleanprompt._ner.NerDetector")

    Examples

    Try it in your browser!
    ```
    >>> detector = spacy_detector()
    >>> detector.name
    'ner:en_core_web_lg'

    ```
    Go BackOpen In Tab