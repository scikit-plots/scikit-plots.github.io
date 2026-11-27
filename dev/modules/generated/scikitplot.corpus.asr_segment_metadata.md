# asr\_segment\_metadata[#](#asr-segment-metadata "Link to this heading")

scikitplot.corpus.asr\_segment\_metadata(**segment**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/corpus/_readers/_whisper.py#L256)[#](#scikitplot.corpus.asr_segment_metadata "Link to this definition")
:   Return user/backend metadata without allowing core-field shadowing.

    Custom ASR backends may attach provider-specific information to a segment.
    The reader stores those values under `asr_metadata` rather than merging
    arbitrary keys into the raw-chunk namespace, where names such as
    `source_type` or `section_type` could otherwise override reader-owned
    provenance.

    Parameters:
    :   ****segment**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]