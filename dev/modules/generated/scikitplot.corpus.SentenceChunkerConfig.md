# SentenceChunkerConfig[#](#sentencechunkerconfig "Link to this heading")

class scikitplot.corpus.SentenceChunkerConfig(**backend=SentenceBackend.REGEX**, **min\_length=1**, **overlap=0**, **spacy\_model=None**, **nltk\_language='english'**, **strip\_whitespace=True**, **include\_offsets=True**, **custom\_splitter=None**, **script\_hint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/corpus/_chunkers/_sentence.py#L192)[#](#scikitplot.corpus.SentenceChunkerConfig "Link to this definition")
:   Configuration for [`SentenceChunker`](scikitplot.corpus.SentenceChunker.html#scikitplot.corpus.SentenceChunker "scikitplot.corpus.SentenceChunker").

    Parameters:
    :   ****backend****SentenceBackend
        :   Splitting strategy. `REGEX` has no extra dependencies.
            `NLTK` requires the **punkt** model.
            `SPACY` requires a loaded model name via **spacy\_model**.

        ****min\_length****int
        :   Minimum character length for a sentence to be kept.

        ****overlap****int
        :   Number of preceding sentences to prepend as context.

        ****spacy\_model****str or None
        :   Spacy model name, e.g. `"en_core_web_sm"`.
            Required when **backend** is `SPACY`.

        ****nltk\_language****str or list[str] or None
        :   Language(s) forwarded to `nltk.tokenize.sent_tokenize`.
            Accepts ISO 639-1 codes, NLTK names, lists, or `None`
            (auto-detect from text). See [`nltk_language`](#scikitplot.corpus.SentenceChunkerConfig.nltk_language "scikitplot.corpus.SentenceChunkerConfig.nltk_language") field
            docstring for full details.

        ****strip\_whitespace****bool
        :   Strip leading/trailing whitespace from each sentence.

        ****include\_offsets****bool
        :   Compute character offsets (`start_char`, `end_char`).

    Parameters:
    :   * ****backend**** ([**SentenceBackend**](scikitplot.corpus.SentenceBackend.html#scikitplot.corpus.SentenceBackend "scikitplot.corpus._chunkers._sentence.SentenceBackend"))
        * ****min\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****overlap**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****spacy\_model**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****nltk\_language**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****strip\_whitespace**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****include\_offsets**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****custom\_splitter**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
        * ****script\_hint**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    backend: [SentenceBackend](scikitplot.corpus.SentenceBackend.html#scikitplot.corpus.SentenceBackend "scikitplot.corpus._chunkers._sentence.SentenceBackend") = 'regex'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/corpus/_chunkers/_sentence.py#L)[#](#scikitplot.corpus.SentenceChunkerConfig.backend "Link to this definition")

    custom\_splitter: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = None[#](#scikitplot.corpus.SentenceChunkerConfig.custom_splitter "Link to this definition")
    :   User-supplied splitter for `backend=SentenceBackend.CUSTOM`.

        Accepts any object with a `split(text: str) -> list[str]` method
        ([`SentenceSplitterProtocol`](scikitplot.corpus.SentenceSplitterProtocol.html#scikitplot.corpus.SentenceSplitterProtocol "scikitplot.corpus._chunkers._custom_tokenizer.SentenceSplitterProtocol")) or a plain
        callable, which is auto-wrapped in
        [`FunctionSentenceSplitter`](scikitplot.corpus.FunctionSentenceSplitter.html#scikitplot.corpus.FunctionSentenceSplitter "scikitplot.corpus._chunkers._custom_tokenizer.FunctionSentenceSplitter").

    include\_offsets: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.SentenceChunkerConfig.include_offsets "Link to this definition")

    min\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 1[#](#scikitplot.corpus.SentenceChunkerConfig.min_length "Link to this definition")

    nltk\_language: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") = 'english'[#](#scikitplot.corpus.SentenceChunkerConfig.nltk_language "Link to this definition")
    :   Language(s) for the NLTK Punkt sentence tokenizer.

        Accepts:

        * `"english"` — NLTK language name (backward-compatible default)
        * `"en"` — ISO 639-1 two-letter code, resolved automatically
        * `["en", "de"]` — multi-language: first NLTK-supported language used
        * `None` — auto-detect from text via [`detect_script`](scikitplot.corpus.detect_script.html#scikitplot.corpus.detect_script "scikitplot.corpus.detect_script")

        When a list is provided, the ****first**** NLTK-compatible language in the
        list is used (NLTK’s Punkt tokenizer handles one language per call).
        For documents with mixed languages, prefer `backend=SentenceBackend.REGEX`
        with `script_hint=None` (auto-detect) or `SentenceBackend.CUSTOM`
        with a language-aware splitter.

        Supports 200+ languages via `_language_data`. ISO codes, NLTK
        names, and regional aliases (e.g. `"chilean_spanish"`) all resolve.

    overlap: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.SentenceChunkerConfig.overlap "Link to this definition")

    script\_hint: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SentenceChunkerConfig.script_hint "Link to this definition")
    :   Optional Unicode script hint for the REGEX backend.

        When set to `"multi"` (or any non-`None` value), the REGEX backend
        uses `MULTI_SCRIPT_SENTENCE_RE_PATTERN` which
        covers CJK (`。！？`), Arabic (`؟`), Devanagari (`।`), Ethiopic
        (`።`), and Latin terminators. When `None` (default), the legacy
        Latin-only regex is used.

        Valid values: `None` (Latin), `"multi"` (all scripts), or any
        [`ScriptType`](scikitplot.corpus.ScriptType.html#scikitplot.corpus.ScriptType "scikitplot.corpus._chunkers._custom_tokenizer.ScriptType") value string.

    spacy\_model: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.SentenceChunkerConfig.spacy_model "Link to this definition")

    strip\_whitespace: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.corpus.SentenceChunkerConfig.strip_whitespace "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_a_tale_of_two_cities_mp3_script_thumb.png)

[corpus A Tale of Two Cities .mp3 with examples](../../auto_examples/corpus/plot_corpus_a_tale_of_two_cities_mp3_script.html)

corpus A Tale of Two Cities .mp3 with examples![](../../_images/sphx_glr_plot_corpus_knowledge_script_thumb.png)

[corpus Knowledge and Information local .png with examples](../../auto_examples/corpus/plot_corpus_knowledge_script.html)

corpus Knowledge and Information local .png with examples![](../../_images/sphx_glr_plot_corpus_who_youtube_shorts_script_thumb.png)

[corpus WHO European Region YouTube shorts with examples](../../auto_examples/corpus/plot_corpus_who_youtube_shorts_script.html)

corpus WHO European Region YouTube shorts with examples![](../../_images/sphx_glr_plot_corpus_who_zip_script_thumb.png)

[corpus WHO European Region local .zip with examples](../../auto_examples/corpus/plot_corpus_who_zip_script.html)

corpus WHO European Region local .zip with examples