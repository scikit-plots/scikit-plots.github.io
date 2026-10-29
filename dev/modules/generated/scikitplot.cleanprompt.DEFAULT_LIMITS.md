# DEFAULT\_LIMITS[#](#default-limits "Link to this heading")

scikitplot.cleanprompt.DEFAULT\_LIMITS = Limits(max\_input\_chars=1000000, max\_spans=100000, max\_entries=50000, max\_literal\_terms=10000, max\_literal\_length=4096)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_policy.py#L)[#](#scikitplot.cleanprompt.DEFAULT_LIMITS "Link to this definition")
:   Hard bounds on one redaction pass.

    Parameters:
    :   ****max\_input\_chars****int, default=1\_000\_000
        :   Longest text accepted. Exceeding it raises
            `LimitExceededError`.

        ****max\_spans****int, default=100\_000
        :   Most detections accepted before overlap resolution.

        ****max\_entries****int, default=50\_000
        :   Most distinct values newly detected in one text. Values carried in
            from earlier turns or pieces (a `seed`) do not count.

        ****max\_literal\_terms****int, default=10\_000
        :   Most user-supplied literal terms accepted.

        ****max\_literal\_length****int, default=4\_096
        :   Longest single literal term accepted.

    Raises:
    :   PolicyError
        :   If any bound is not a positive integer.

    Notes

    ****Developer notes.**** Bounds exist so that adversarial input fails loudly and
    early rather than consuming the process. They are policy, not constants, so
    a caller who genuinely needs a larger document can raise them explicitly and
    own that decision. Nothing in this submodule silently truncates: the
    `truncated` field on
    `RedactionResult` is always `False`
    and exists so a caller can assert that.

    The default `max_input_chars` matches the default document ceiling of the
    optional spaCy tier, so the base tier and the NER tier fail at the same
    size rather than at two different, surprising ones.