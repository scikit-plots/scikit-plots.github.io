# Detector[#](#detector "Link to this heading")

class scikitplot.cleanprompt.Detector(**name**, **kind**, **priority=50**, **confidence=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_detectors.py#L56)[#](#scikitplot.cleanprompt.Detector "Link to this definition")
:   Base class for detectors.

    Subclasses implement [`detect`](#scikitplot.cleanprompt.Detector.detect "scikitplot.cleanprompt.Detector.detect"). The base class supplies the identity
    attributes and the error wrapping used by
    [`DetectorRegistry.detect_all`](scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry.detect_all "scikitplot.cleanprompt.DetectorRegistry.detect_all").

    Parameters:
    :   ****name****str
        :   Unique, stable identifier. Used in arbitration tie-breaks, so it must
            not change between runs.

        ****kind****str
        :   Category assigned to every span this detector produces.

        ****priority****int, default=50
        :   Arbitration weight.

        ****confidence****float, default=1.0
        :   Confidence reported for every span.

    Raises:
    :   PolicyError
        :   If `name` or `kind` is empty, or `confidence` is out of range.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****priority**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****confidence**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    confidence[#](#scikitplot.cleanprompt.Detector.confidence "Link to this definition")
    :   !! processed by numpydoc !!

    detect(**text**, **policy**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_detectors.py#L113)[#](#scikitplot.cleanprompt.Detector.detect "Link to this definition")
    :   Yield spans over `text`.

        Parameters:
        :   ****text****str
            :   The original text. Never a rewritten one.

            ****policy****RedactionPolicy
            :   The active policy.

        Yields:
        :   Span
            :   One per match, in ascending start order.

        Raises:
        :   NotImplementedError
            :   Always, on the base class.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))

        Return type:
        :   [**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")[**Span**]

    kind[#](#scikitplot.cleanprompt.Detector.kind "Link to this definition")
    :   !! processed by numpydoc !!

    name[#](#scikitplot.cleanprompt.Detector.name "Link to this definition")
    :   !! processed by numpydoc !!

    priority[#](#scikitplot.cleanprompt.Detector.priority "Link to this definition")
    :   !! processed by numpydoc !!

    reads\_view = False[#](#scikitplot.cleanprompt.Detector.reads_view "Link to this definition")
    :   Whether [`detect`](#scikitplot.cleanprompt.Detector.detect "scikitplot.cleanprompt.Detector.detect") is a pure function of the text it is given, so
        that it may also read the detection view (`CP-098`) and have its spans
        mapped back onto the original. `False` by default: a detector bound to
        one document — offsets computed in advance from the original, such as a
        field or region detector — would have its spans mapped twice and cut
        through a file’s structure (`CP-102`). Opt in only when every offset a
        detector yields indexes the string passed to `detect`.