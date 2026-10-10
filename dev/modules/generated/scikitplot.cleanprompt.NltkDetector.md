# NltkDetector[#](#nltkdetector "Link to this heading")

class scikitplot.cleanprompt.NltkDetector(**labels=frozenset({'EVENT', 'FAC', 'GPE', 'LANGUAGE', 'LAW', 'LOC', 'NORP', 'ORG', 'PERSON', 'PRODUCT', 'WORK\_OF\_ART'})**, **language='en'**, **kind\_prefix=''**, **priority=None**, **confidence=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_nltk.py#L131)[#](#scikitplot.cleanprompt.NltkDetector "Link to this definition")
:   Detect named entities with NLTK’s maximum-entropy chunker.

    Parameters:
    :   ****labels****iterable of str, optional
        :   Canonical labels to keep. `None` keeps every label reported.
            Defaults to
            `DEFAULT_ENTITY_LABELS`.

        ****language****str, default=’en’
        :   Language code. Anything but `"en"` raises, because the chunker is
            trained on English only.

        ****kind\_prefix****str, default=’’
        :   Prepended to the canonical label to form the placeholder category.

        ****priority****int, optional
        :   Arbitration weight. Defaults to the engine’s declared priority, which
            is below the structural patterns so an address recognised by both is
            labelled `EMAIL` rather than `ORG`.

        ****confidence****float, optional
        :   Reported confidence. Defaults to the engine’s declared value, which is
            lower than spaCy’s — a documented judgement about relative quality, not
            a calibrated probability.

    Raises:
    :   CapabilityError
        :   On first detection, if the tier or its corpora are unavailable, or if
            a language other than English was requested.

    Parameters:
    :   * ****labels**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind\_prefix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> detector = NltkDetector()
    >>> detector.name
    'nltk'

    ```
    Go BackOpen In Tab

    confidence[#](#scikitplot.cleanprompt.NltkDetector.confidence "Link to this definition")
    :   !! processed by numpydoc !!

    detect(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_nltk.py#L271)[#](#scikitplot.cleanprompt.NltkDetector.detect "Link to this definition")
    :   Yield one span per accepted named entity.

        Parameters:
        :   ****text****str
            :   The original text.

            ****policy****RedactionPolicy
            :   The active policy. Unused; present for protocol conformance.

        Yields:
        :   Span
            :   Entities whose canonical label is selected, in ascending start
                order. Every span’s `text` equals `text[start:end]`.

        Raises:
        :   CapabilityError
            :   If the tier, language or corpora are unavailable.

            DetectorError
            :   If NLTK raises while processing the text.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.15)")[**Span**]

    kind[#](#scikitplot.cleanprompt.NltkDetector.kind "Link to this definition")
    :   !! processed by numpydoc !!

    kind\_prefix[#](#scikitplot.cleanprompt.NltkDetector.kind_prefix "Link to this definition")
    :   !! processed by numpydoc !!

    kinds()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_nltk.py#L191)[#](#scikitplot.cleanprompt.NltkDetector.kinds "Link to this definition")
    :   Return the placeholder categories this detector can produce.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    labels: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cleanprompt.NltkDetector.labels "Link to this definition")
    :   !! processed by numpydoc !!

    language[#](#scikitplot.cleanprompt.NltkDetector.language "Link to this definition")
    :   !! processed by numpydoc !!

    name[#](#scikitplot.cleanprompt.NltkDetector.name "Link to this definition")
    :   !! processed by numpydoc !!

    priority[#](#scikitplot.cleanprompt.NltkDetector.priority "Link to this definition")
    :   !! processed by numpydoc !!

    reads\_view = False[#](#scikitplot.cleanprompt.NltkDetector.reads_view "Link to this definition")
    :   Whether [`detect`](#scikitplot.cleanprompt.NltkDetector.detect "scikitplot.cleanprompt.NltkDetector.detect") is a pure function of the text it is given, so
        that it may also read the detection view (`CP-098`) and have its spans
        mapped back onto the original. `False` by default: a detector bound to
        one document — offsets computed in advance from the original, such as a
        field or region detector — would have its spans mapped twice and cut
        through a file’s structure (`CP-102`). Opt in only when every offset a
        detector yields indexes the string passed to `detect`.