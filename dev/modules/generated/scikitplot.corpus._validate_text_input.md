# \_validate\_text\_input[#](#validate-text-input "Link to this heading")

scikitplot.corpus.\_validate\_text\_input(**text**, **caller**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_chunkers/_sentence.py#L175)[#](#scikitplot.corpus._validate_text_input "Link to this definition")
:   Validate chunker text input for NUL bytes and lone surrogates.

    Parameters:
    :   ****text****str
        :   Input text to validate.

        ****caller****str
        :   Calling context name used in error messages
            (e.g. `"SentenceChunker.chunk"`).

    Raises:
    :   ValueError
        :   If **text** contains a NUL byte (`\x00`). NUL bytes corrupt
            spaCy (C-level string truncation), SQLite FTS5 (zero-terminated
            string truncation), and JSONL export (line-terminator confusion).
            Fix with `text.replace('\x00', '')` before calling.

        ValueError
        :   If **text** contains a lone Unicode surrogate (U+D800-U+DFFF).
            These are valid Python `str` values but invalid Unicode scalars.
            Fix with `text.encode('utf-8', errors='replace').decode('utf-8')`
            or re-decode the source bytes with `errors='surrogatepass'`.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****caller**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   None

    Notes

    ****Developer note:**** This is a shared module-level guard called as the
    very first line of `SentenceChunker.chunk()` and
    `WordChunker.chunk()`. The guard must NOT be bypassed by any
    internal caller — only raw external input is validated here.

    The internal sentinel `_ABBREV_PLACEHOLDER = "\uE000ABR\uE000"`
    uses Unicode Private Use Area codepoints that never appear in natural
    language. This guard correctly ignores PUA codepoints because it only
    tests for NUL (`\x00`) and surrogates (U+D800-U+DFFF).

    Examples

    Try it in your browser!
    ```
    >>> _validate_text_input("Hello world", "SentenceChunker.chunk")
    >>> _validate_text_input("\x00bad", "SentenceChunker.chunk")
    Traceback (most recent call last):
        ...
    ValueError: SentenceChunker.chunk: text must not contain NUL bytes ...

    ```
    Go BackOpen In Tab