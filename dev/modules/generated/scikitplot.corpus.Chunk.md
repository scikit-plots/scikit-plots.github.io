# Chunk[#](#chunk "Link to this heading")

class scikitplot.corpus.Chunk(**text**, **start\_char**, **end\_char**, **metadata=<factory>**, **context\_start=None**, **context\_end=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L276)[#](#scikitplot.corpus.Chunk "Link to this definition")
:   A single unit of text produced by a chunker.

    Parameters:
    :   ****text****str
        :   The chunk’s text content (possibly including overlap context).

        ****start\_char****int
        :   Zero-based character offset of the chunk’s **anchor** in the source:
            the region the chunk stands for (a sentence, without the sentences
            repeated before it as overlap). Set to `0` when offsets are
            disabled.

        ****end\_char****int
        :   Zero-based exclusive end of the anchor. Set to `0` when offsets are
            disabled.

        ****metadata****MetadataDict
        :   Arbitrary per-chunk key/value pairs (e.g. `chunk_index`,
            `doc_id`, `backend`, `tokens`). Always a dict — never
            `None`.

        ****context\_start****int or None, optional
        :   Start of the **context** span: the source region `text` is taken
            from, which covers the anchor (overlap context included). `None`
            means the anchor start.

        ****context\_end****int or None, optional
        :   Exclusive end of the context span; `None` means the anchor end.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****start\_char**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****end\_char**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****metadata**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****context\_start**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****context\_end**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

    Notes

    * ****Span invariant (R3-3).**** For every built-in chunker whose
      `text_is_source_slice` is `True` (all but `WordChunker`, whose
      text is a token transformation), `text == source[context_start:
      context_end]` when offsets are enabled, and the context span covers
      the anchor: `context_start <= start_char <= end_char <= context_end`.
    * `text` must be a non-empty string. Validation is the chunker’s
      responsibility; [`Chunk`](#scikitplot.corpus.Chunk "scikitplot.corpus.Chunk") itself does not re-validate to keep
      it a pure value object.
    * `metadata` is stored as-is. Callers must not mutate the dict
      after construction (frozen dataclass contract).

    property anchor\_span: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][#](#scikitplot.corpus.Chunk.anchor_span "Link to this definition")
    :   the region this chunk stands for.

        Type:
        :   `(start_char, end_char)`

    char\_length()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L366)[#](#scikitplot.corpus.Chunk.char_length "Link to this definition")
    :   Return the character span length of this chunk.

        Returns:
        :   int
            :   `end_char - start_char`. Returns `0` when offsets are
                disabled (both fields are `0`).

        Return type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

    content\_hash()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L377)[#](#scikitplot.corpus.Chunk.content_hash "Link to this definition")
    :   Return a stable SHA-256 hex digest of `text`.

        Useful as a deduplication key in storage backends.

        Returns:
        :   str
            :   64-character lowercase hex string.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    context\_end: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.Chunk.context_end "Link to this definition")

    property context\_span: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"), [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")][#](#scikitplot.corpus.Chunk.context_span "Link to this definition")
    :   The source region `text` is taken from (covers the anchor).

    context\_start: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.Chunk.context_start "Link to this definition")

    end\_char: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L276)[#](#scikitplot.corpus.Chunk.end_char "Link to this definition")

    metadata: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")][[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L276)[#](#scikitplot.corpus.Chunk.metadata "Link to this definition")

    start\_char: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L276)[#](#scikitplot.corpus.Chunk.start_char "Link to this definition")

    text: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L276)[#](#scikitplot.corpus.Chunk.text "Link to this definition")

    with\_metadata(**\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_types.py#L391)[#](#scikitplot.corpus.Chunk.with_metadata "Link to this definition")
    :   Return a new [`Chunk`](#scikitplot.corpus.Chunk "scikitplot.corpus.Chunk") with additional metadata keys.

        Parameters:
        :   ****\*\*kwargs****
            :   Key/value pairs to merge into a copy of `metadata`.

        Returns:
        :   Chunk
            :   New frozen instance with merged metadata.

        Parameters:
        :   ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Chunk**](#scikitplot.corpus.Chunk "scikitplot.corpus._types.Chunk")

        Notes

        Uses `dataclasses.replace` so any new fields added to
        [`Chunk`](#scikitplot.corpus.Chunk "scikitplot.corpus.Chunk") are automatically preserved without editing this
        method (CRITICAL-04 / LOW-02 fix).