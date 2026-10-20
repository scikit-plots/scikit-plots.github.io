# DetectorRegistry[#](#detectorregistry "Link to this heading")

class scikitplot.cleanprompt.DetectorRegistry(**detectors=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L472)[#](#scikitplot.cleanprompt.DetectorRegistry "Link to this definition")
:   An ordered, immutable-by-convention collection of detectors.

    Parameters:
    :   ****detectors****iterable of Detector, optional
        :   Initial detectors.

    Raises:
    :   PolicyError
        :   If two detectors share a name.

    Parameters:
    :   ****detectors**** (**Iterable****[**[**Detector**](scikitplot.cleanprompt.Detector.html#scikitplot.cleanprompt.Detector "scikitplot.cleanprompt.Detector")**]** **|** **None**)

    Notes

    ****Developer notes.**** `add` returns `self` for chaining but mutates, so a
    registry is a builder, not a value. The engine never mutates one; it reads
    the registry once per pass. Names must be unique because arbitration uses
    the detector name as its final, deterministic tie-break — two detectors
    sharing a name would make the outcome depend on insertion order.

    add(**detector**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L502)[#](#scikitplot.cleanprompt.DetectorRegistry.add "Link to this definition")
    :   Append a detector.

        Parameters:
        :   ****detector****Detector
            :   The detector to add.

        Returns:
        :   DetectorRegistry
            :   This registry, for chaining.

        Raises:
        :   PolicyError
            :   If a detector of the same name is already registered.

        Parameters:
        :   ****detector**** ([**Detector**](scikitplot.cleanprompt.Detector.html#scikitplot.cleanprompt.Detector "scikitplot.cleanprompt._detectors.Detector"))

        Return type:
        :   [**DetectorRegistry**](#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt._detectors.DetectorRegistry")

    detect\_all(**text**, **policy**, **detectors=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L556)[#](#scikitplot.cleanprompt.DetectorRegistry.detect_all "Link to this definition")
    :   Run detectors and collect every span.

        Parameters:
        :   ****text****str
            :   The original text.

            ****policy****RedactionPolicy
            :   The active policy; supplies [`Limits.max_spans`](scikitplot.cleanprompt.Limits.html#scikitplot.cleanprompt.Limits.max_spans "scikitplot.cleanprompt.Limits.max_spans") and
                [`RedactionPolicy.min_confidence`](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy.min_confidence "scikitplot.cleanprompt.RedactionPolicy.min_confidence").

            ****detectors****sequence of Detector, optional
            :   Override the registry’s own detectors.

        Returns:
        :   list of Span
            :   Unresolved spans, which may overlap.

        Raises:
        :   DetectorError
            :   If a detector raises. The detector name is carried on the error.

            LimitExceededError
            :   If more than [`Limits.max_spans`](scikitplot.cleanprompt.Limits.html#scikitplot.cleanprompt.Limits.max_spans "scikitplot.cleanprompt.Limits.max_spans") spans are produced.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))
            * ****detectors**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Detector**](scikitplot.cleanprompt.Detector.html#scikitplot.cleanprompt.Detector "scikitplot.cleanprompt._detectors.Detector")**]** **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[**Span**]

        Notes

        ****Developer notes.**** The span cap is checked while collecting, not
        afterwards, so a pathological detector cannot exhaust memory before the
        bound is noticed.

    kinds()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L528)[#](#scikitplot.cleanprompt.DetectorRegistry.kinds "Link to this definition")
    :   Return every kind this registry can produce.

        Returns:
        :   tuple of str
            :   Sorted, deduplicated kinds.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    select(**kinds**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_detectors.py#L539)[#](#scikitplot.cleanprompt.DetectorRegistry.select "Link to this definition")
    :   Return the detectors whose kind is in `kinds`.

        Parameters:
        :   ****kinds****iterable of str
            :   Kinds to keep.

        Returns:
        :   tuple of Detector
            :   In registration order.

        Parameters:
        :   ****kinds**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**Detector**](scikitplot.cleanprompt.Detector.html#scikitplot.cleanprompt.Detector "scikitplot.cleanprompt._detectors.Detector"), …]