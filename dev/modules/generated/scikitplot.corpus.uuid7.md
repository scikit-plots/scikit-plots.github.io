# uuid7[#](#uuid7 "Link to this heading")

scikitplot.corpus.uuid7()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_identity.py#L325)[#](#scikitplot.corpus.uuid7 "Link to this definition")
:   Return a new RFC 9562 UUID version 7 from this process’s generator.

    Returns:
    :   uuid.UUID
        :   Time-ordered: greater than every identifier this function returned
            before in this process.

    Raises:
    :   OverflowError
        :   If the system clock is outside the 48-bit millisecond range.

    Return type:
    :   [**UUID**](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)")

    > **See also**
    > [`UUID7Generator`](scikitplot.corpus.UUID7Generator.html#scikitplot.corpus.UUID7Generator "scikitplot.corpus.UUID7Generator")
    :   The generator, with an injectable clock and random source.

    [`uuid7_unix_ms`](scikitplot.corpus.uuid7_unix_ms.html#scikitplot.corpus.uuid7_unix_ms "scikitplot.corpus.uuid7_unix_ms")
    :   The millisecond timestamp an identifier carries.

    Examples

    Try it in your browser!
    ```
    >>> a, b = uuid7(), uuid7()
    >>> a < b and str(a) < str(b) and a.bytes < b.bytes
    True

    ```
    Go BackOpen In Tab