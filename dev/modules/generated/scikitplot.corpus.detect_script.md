# detect\_script[#](#detect-script "Link to this heading")

scikitplot.corpus.detect\_script(**text**, **\***, **sample\_size=500**, **majority\_threshold=0.55**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L943)[#](#scikitplot.corpus.detect_script "Link to this definition")
:   Detect the dominant Unicode script in **text**.

    Samples up to **sample\_size** characters for efficiency on long documents.
    Returns [`ScriptType.MIXED`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType.MIXED "scikitplot.corpus.ScriptType.MIXED") when no single script exceeds
    **majority\_threshold** of all script characters found.

    Parameters:
    :   ****text****str
        :   Input text to analyse. Any length — only the first **sample\_size**
            characters are examined.

        ****sample\_size****int, optional
        :   Maximum number of characters to inspect. Default 500.

        ****majority\_threshold****float, optional
        :   Fraction of script chars a single script must reach to be declared
            dominant. Default 0.55 (55 %).

    Returns:
    :   ScriptType
        :   Detected dominant script.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****sample\_size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****majority\_threshold**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [**ScriptType**](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType")

    Notes

    ****User note:**** The detection is based on Unicode code-point ranges and
    is heuristic — it does not use a language model. For ambiguous texts
    (transliterated Arabic in Latin script, mixed-script social media posts)
    the result may be [`ScriptType.MIXED`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType.MIXED "scikitplot.corpus.ScriptType.MIXED"). Pass an explicit
    `script_hint` to [`SentenceChunkerConfig`](scikitplot.corpus.SentenceChunkerConfig.html#scikitplot.corpus.SentenceChunkerConfig "scikitplot.corpus._chunkers._sentence.SentenceChunkerConfig") to
    override detection.

    Supported script families: Latin, CJK (Chinese/Japanese/Korean/Hangul),
    Arabic (including Persian/Ottoman/Urdu), Hebrew, Devanagari
    (Hindi/Sanskrit/Nepali), Greek, Cyrillic, Ethiopic, Georgian, Coptic
    (Egyptian proxy), Thai, Southeast Asian (Lao/Myanmar/Khmer), South Asian
    Dravidian (Tamil/Telugu/Kannada/Malayalam/Sinhala), Armenian, Tibetan.

    ****Developer note:**** Unicode categories `unicodedata.category(c)`
    are **not** used here because they do not map cleanly to script families.
    Code-point ranges from the Unicode Standard are used instead.

    Examples

    Try it in your browser!
    ```
    >>> detect_script("Hello world")
    <ScriptType.LATIN: 'latin'>
    >>> detect_script("مرحبا بالعالم")
    <ScriptType.ARABIC: 'arabic'>
    >>> detect_script("こんにちは世界")
    <ScriptType.HIRAGANA: 'hiragana'>
    >>> detect_script("Ἡ γλῶσσα")
    <ScriptType.GREEK: 'greek'>
    >>> detect_script("12345 !@#$%")
    <ScriptType.UNKNOWN: 'unknown'>
    >>> detect_script("😀🎉")
    <ScriptType.EMOJI: 'emoji'>
    >>> detect_script("你好世界")
    <ScriptType.HAN: 'han'>
    >>> detect_script("안녕하세요")
    <ScriptType.HANGUL: 'hangul'>

    ```
    Go BackOpen In Tab