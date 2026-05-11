# MULTI\_SCRIPT\_SENTENCE\_RE\_PATTERN[#](#multi-script-sentence-re-pattern "Link to this heading")

scikitplot.corpus.MULTI\_SCRIPT\_SENTENCE\_RE\_PATTERN = '(?<=[.!?。！？؟।۔።…‼⁉։។၊။])[\\s\\u200b\\u00a0]\*(?=\\S)'[#](#scikitplot.corpus.MULTI_SCRIPT_SENTENCE_RE_PATTERN "Link to this definition")
:   str(object=’’) -> str
    str(bytes\_or\_buffer[, encoding[, errors]]) -> str

    Create a new string object from the given object. If encoding or
    errors is specified, then the object must expose a data buffer
    that will be decoded using the given encoding and error handler.
    Otherwise, returns the result of object.\_\_str\_\_() (if defined)
    or repr(object).
    encoding defaults to sys.getdefaultencoding().
    errors defaults to ‘strict’.