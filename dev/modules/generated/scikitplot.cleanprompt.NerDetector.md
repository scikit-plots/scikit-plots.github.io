# NerDetector[#](#nerdetector "Link to this heading")

class scikitplot.cleanprompt.NerDetector(**model=None**, **labels=frozenset({'EVENT', 'FAC', 'GPE', 'LANGUAGE', 'LAW', 'LOC', 'NORP', 'ORG', 'PERSON', 'PRODUCT', 'WORK\_OF\_ART'})**, **kind\_prefix=''**, **priority=None**, **confidence=None**, **disable=None**, **language='en'**, **size='sm'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_ner.py#L102)[#](#scikitplot.cleanprompt.NerDetector "Link to this definition")
:   Detect named entities with a spaCy pipeline.

    Parameters:
    :   ****model****str, default=’en\_core\_web\_lg’
        :   Name of an installed spaCy model.

        ****labels****iterable of str, optional
        :   Entity labels to redact. `None` redacts every label the model
            reports. Defaults to [`DEFAULT_ENTITY_LABELS`](scikitplot.cleanprompt.DEFAULT_ENTITY_LABELS.html#scikitplot.cleanprompt.DEFAULT_ENTITY_LABELS "scikitplot.cleanprompt.DEFAULT_ENTITY_LABELS").

        ****kind\_prefix****str, default=’’
        :   Prepended to the spaCy label to form the placeholder category, so
            `kind_prefix="NE_"` yields `[NE_PERSON-1]`.

        ****priority****int, default=30
        :   Arbitration weight. Below the structural patterns by default: an email
            address recognised by both should be labelled `EMAIL`, not `ORG`.

        ****confidence****float, default=0.7
        :   Reported confidence. spaCy’s entity recogniser does not expose a
            calibrated per-entity score, so this is a fixed, documented value used
            for filtering and reporting, never presented as a probability.

        ****disable****iterable of str, optional
        :   Pipeline components to disable at load time. Defaults to disabling
            `lemmatizer` and `textcat`, which the entity recogniser does not
            need.

    Raises:
    :   CapabilityError
        :   On first detection, if the `ner` tier is unavailable or the model is
            not installed.

    Parameters:
    :   * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****labels**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****kind\_prefix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)
        * ****disable**** (**Iterable****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****Developer notes.**** `sentencizer`-style components are left alone; only
    components irrelevant to entity recognition are disabled, because disabling
    `tok2vec` or `ner` itself would silently produce zero entities, which in
    a privacy tool reads as “nothing sensitive found”.

    Examples

    Try it in your browser!
    ```
    >>> detector = NerDetector()
    >>> detector.kind
    'NE'

    ```
    Go BackOpen In Tab

    confidence[#](#scikitplot.cleanprompt.NerDetector.confidence "Link to this definition")
    :   !! processed by numpydoc !!

    detect(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_ner.py#L262)[#](#scikitplot.cleanprompt.NerDetector.detect "Link to this definition")
    :   Yield one span per accepted named entity.

        Parameters:
        :   ****text****str
            :   The original text.

            ****policy****RedactionPolicy
            :   Supplies [`Limits.max_input_chars`](scikitplot.cleanprompt.Limits.html#scikitplot.cleanprompt.Limits.max_input_chars "scikitplot.cleanprompt.Limits.max_input_chars"), which is propagated to the
                pipeline’s own document ceiling.

        Yields:
        :   Span
            :   Entities whose label is selected, in ascending start order.

        Raises:
        :   CapabilityError
            :   If the tier or the model is unavailable.

            DetectorError
            :   If the pipeline raises while processing the text.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.15)")[**Span**]

        Notes

        ****Developer notes.**** spaCy’s `max_length` guard exists to stop a very
        long document exhausting memory during parsing. It is aligned with this
        submodule’s own bound so that one limit governs, and a document that the
        base tier accepts is not rejected by the NER tier at a different size.

        Entities reported by spaCy never overlap, so the spans yielded here are
        already disjoint among themselves; they may still overlap structural
        detections, which is what
        `resolve_spans` settles.

    kind[#](#scikitplot.cleanprompt.NerDetector.kind "Link to this definition")
    :   !! processed by numpydoc !!

    kind\_prefix[#](#scikitplot.cleanprompt.NerDetector.kind_prefix "Link to this definition")
    :   !! processed by numpydoc !!

    kinds()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_ner.py#L180)[#](#scikitplot.cleanprompt.NerDetector.kinds "Link to this definition")
    :   Return the placeholder categories this detector can produce.

        Returns:
        :   tuple of str
            :   Sorted category names, or an empty tuple when every label is
                accepted and the set is therefore open.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

        Notes

        ****Developer notes.**** A registry needs this because
        [`Detector.kind`](scikitplot.cleanprompt.Detector.html#scikitplot.cleanprompt.Detector.kind "scikitplot.cleanprompt.Detector.kind") is a single value, whereas this detector produces
        one category per entity label. [`detect`](#scikitplot.cleanprompt.NerDetector.detect "scikitplot.cleanprompt.NerDetector.detect") sets each span’s `kind`
        from the entity label, and the registry selects this detector by its
        declared `kind` of `"NE"`.

    labels: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cleanprompt.NerDetector.labels "Link to this definition")
    :   !! processed by numpydoc !!

    language[#](#scikitplot.cleanprompt.NerDetector.language "Link to this definition")
    :   !! processed by numpydoc !!

    model[#](#scikitplot.cleanprompt.NerDetector.model "Link to this definition")
    :   !! processed by numpydoc !!

    name[#](#scikitplot.cleanprompt.NerDetector.name "Link to this definition")
    :   !! processed by numpydoc !!

    priority[#](#scikitplot.cleanprompt.NerDetector.priority "Link to this definition")
    :   !! processed by numpydoc !!

    reads\_view = False[#](#scikitplot.cleanprompt.NerDetector.reads_view "Link to this definition")
    :   Whether [`detect`](#scikitplot.cleanprompt.NerDetector.detect "scikitplot.cleanprompt.NerDetector.detect") is a pure function of the text it is given, so
        that it may also read the detection view (`CP-098`) and have its spans
        mapped back onto the original. `False` by default: a detector bound to
        one document — offsets computed in advance from the original, such as a
        field or region detector — would have its spans mapped twice and cut
        through a file’s structure (`CP-102`). Opt in only when every offset a
        detector yields indexes the string passed to `detect`.

    resolution[#](#scikitplot.cleanprompt.NerDetector.resolution "Link to this definition")
    :   !! processed by numpydoc !!