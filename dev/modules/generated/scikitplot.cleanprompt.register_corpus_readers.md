# register\_corpus\_readers[#](#register-corpus-readers "Link to this heading")

scikitplot.cleanprompt.register\_corpus\_readers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_corpus.py#L355)[#](#scikitplot.cleanprompt.register_corpus_readers "Link to this definition")
:   Let corpus read `.docx`, `.xlsx` and `.pptx` with cleanprompt’s reader.

    Returns:
    :   tuple of str
        :   The extensions registered. An extension corpus already has a reader
            for is left alone and not listed.

    Raises:
    :   CapabilityError
        :   If corpus is not installed.

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    Notes

    ****User notes.**** Call it once, before `DocumentReader.create`. It changes
    corpus’s global reader registry, which is why it is never done on import.

    ****Developer notes.**** The reader is the standard-library one in
    `_office.py`, with the same size limits and DTD refusal, so corpus gains
    Office support without a new dependency. A corpus that reads these
    extensions itself keeps its own reader, and nothing is registered.