# SourceType[#](#sourcetype "Link to this heading")

class scikitplot.corpus.SourceType(**\*values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L412)[#](#scikitplot.corpus.SourceType "Link to this definition")
:   Semantic label for the kind of source from which a document was read.

    Notes

    Used as a first-class typed column so that pre-filters on large corpora
    (e.g. 50 million documents) can use predicate pushdown rather than an O(n)
    scan of a `metadata` dict.

    Every value is a plain lowercase string that round-trips through CSV,
    JSON, Parquet, and database storage without loss.

    Reader affinity, Each value maps to the reader most likely to handle it:

    | SourceType value | Default reader | Typical file extension |
    | --- | --- | --- |
    | `BOOK / ARTICLE / ...` | `TextReader` | `.txt .md .rst` |
    | `RESEARCH` | `PDFReader` | `.pdf` |
    | `IMAGE` | `ImageReader` | `.png .jpg .tiff …` |
    | `AUDIO / PODCAST / ...` | `AudioReader` | `.mp3 .wav .flac …` |
    | `VIDEO / MOVIE / ...` | `VideoReader` | `.mp4 .mkv …` |
    | `WEB / WIKI / BLOG` | `WebReader` | `http(s)://` |
    | `VIDEO` (YouTube) | `YouTubeReader` | `youtu.be / youtube.com` |
    | `UNKNOWN` | inferred from extension | any |

    Examples

    Try it in your browser!
    ```
    >>> SourceType.BOOK == "book"
    True
    >>> SourceType("wiki") is SourceType.WIKI
    True
    >>> SourceType.UNKNOWN == "unknown"
    True

    ```
    Go BackOpen In Tab

    ARTICLE = 'article'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.ARTICLE "Link to this definition")
    :   Magazine or journal article (non-peer-reviewed).

    AUDIO = 'audio'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.AUDIO "Link to this definition")
    :   Generic audio source (transcript extracted via ASR / Whisper).

    BIOGRAPHY = 'biography'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.BIOGRAPHY "Link to this definition")
    :   Biography or autobiography.

    BLOG = 'blog'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.BLOG "Link to this definition")
    :   Personal or corporate blog post.

    BOOK = 'book'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.BOOK "Link to this definition")
    :   Printed or digital book (novel, monograph, anthology, etc.).

    CHAT = 'chat'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.CHAT "Link to this definition")
    :   Chat or messaging log (Slack, Teams, WhatsApp, IRC export).

    CODE = 'code'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.CODE "Link to this definition")
    :   Source-code file or repository.

    DATASET = 'dataset'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.DATASET "Link to this definition")
    :   Structured dataset (JSON, JSONL, Parquet, database export).

    DOCUMENTATION = 'documentation'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.DOCUMENTATION "Link to this definition")
    :   Technical or product documentation (API docs, user manuals, etc.).

    EMAIL = 'email'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.EMAIL "Link to this definition")
    :   Email message or mailing-list post.

    FAQ = 'faq'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.FAQ "Link to this definition")
    :   Frequently-asked-questions page or document.

    FORUM = 'forum'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.FORUM "Link to this definition")
    :   Online forum post, thread, or discussion (Reddit, Stack Overflow, etc.).

    IMAGE = 'image'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.IMAGE "Link to this definition")
    :   Image source (OCR’d text from a raster image file).

    INTERVIEW = 'interview'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.INTERVIEW "Link to this definition")
    :   Interview recording or transcript (audio, video, or text).

    LECTURE = 'lecture'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.LECTURE "Link to this definition")
    :   Academic or conference lecture (audio or video recording).

    LEGAL = 'legal'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.LEGAL "Link to this definition")
    :   Legal document (contract, court ruling, legislation, terms of service).

    MANUAL = 'manual'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.MANUAL "Link to this definition")
    :   Instruction manual, operator guide, or maintenance handbook.

    MEDICAL = 'medical'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.MEDICAL "Link to this definition")
    :   Medical or clinical document (case study, clinical trial, drug insert).

    MOVIE = 'movie'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.MOVIE "Link to this definition")
    :   Feature film or short film source (subtitle file or OCR transcript).

    NEWS = 'news'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.NEWS "Link to this definition")
    :   News article from a news outlet or wire service.

    NEWSLETTER = 'newsletter'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.NEWSLETTER "Link to this definition")
    :   Email or web newsletter (Substack, Revue, Mailchimp, etc.).

    PATENT = 'patent'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.PATENT "Link to this definition")
    :   Patent application or granted patent document.

    PLAY = 'play'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.PLAY "Link to this definition")
    :   Dramatic play text (Shakespeare, modern theatre, screenplays).

    PODCAST = 'podcast'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.PODCAST "Link to this definition")
    :   Podcast episode — audio file with associated RSS/feed metadata.

    POEM = 'poem'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.POEM "Link to this definition")
    :   Poem or collection of poems.

    PRESS\_RELEASE = 'press\_release'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.PRESS_RELEASE "Link to this definition")
    :   Official press release or public statement.

    REPORT = 'report'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.REPORT "Link to this definition")
    :   Formal report (annual report, white paper, government report, etc.).

    RESEARCH = 'research'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.RESEARCH "Link to this definition")
    :   Peer-reviewed research paper (arXiv, ResearchGate, DOI-bearing PDF).

    SOCIAL\_MEDIA = 'social\_media'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.SOCIAL_MEDIA "Link to this definition")
    :   Post, thread, or profile from a social media platform.

    SPREADSHEET = 'spreadsheet'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.SPREADSHEET "Link to this definition")
    :   Spreadsheet source (.xlsx, .csv, .ods).

    SUBTITLE = 'subtitle'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.SUBTITLE "Link to this definition")
    :   Subtitle / caption file (.srt, .vtt, .sbv, .sub).

    TUTORIAL = 'tutorial'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.TUTORIAL "Link to this definition")
    :   Step-by-step guide or how-to article.

    UNKNOWN = 'unknown'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.UNKNOWN "Link to this definition")
    :   Source type could not be determined.

    VIDEO = 'video'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.VIDEO "Link to this definition")
    :   Generic video source (transcript extracted from video file or stream).

    WEB = 'web'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.WEB "Link to this definition")
    :   General web page (HTML scraped from an http/https URL).

    WIKI = 'wiki'[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SourceType.WIKI "Link to this definition")
    :   Wikipedia or MediaWiki article.

    capitalize(**/**)[#](#scikitplot.corpus.SourceType.capitalize "Link to this definition")
    :   Return a capitalized version of the string.

        More specifically, make the first character have upper case and the rest lower
        case.

    casefold(**/**)[#](#scikitplot.corpus.SourceType.casefold "Link to this definition")
    :   Return a version of the string suitable for caseless comparisons.

    center(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.SourceType.center "Link to this definition")
    :   Return a centered string of length width.

        Padding is done using the specified fill character (default is a space).

    count(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.count "Link to this definition")
    :   Return the number of non-overlapping occurrences of substring sub in
        string S[start:end]. Optional arguments start and end are
        interpreted as in slice notation.

    encode(**/**, **encoding='utf-8'**, **errors='strict'**)[#](#scikitplot.corpus.SourceType.encode "Link to this definition")
    :   Encode the string using the codec registered for encoding.

        encoding
        :   The encoding in which to encode the string.

        errors
        :   The error handling scheme to use for encoding errors.
            The default is ‘strict’ meaning that encoding errors raise a
            UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
            ‘xmlcharrefreplace’ as well as any other name registered with
            codecs.register\_error that can handle UnicodeEncodeErrors.

    endswith(**suffix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.endswith "Link to this definition")
    :   Return True if S ends with the specified suffix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        suffix can also be a tuple of strings to try.

    expandtabs(**/**, **tabsize=8**)[#](#scikitplot.corpus.SourceType.expandtabs "Link to this definition")
    :   Return a copy where all tab characters are expanded using spaces.

        If tabsize is not given, a tab size of 8 characters is assumed.

    find(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.find "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    format(**\*args**, **\*\*kwargs**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.format "Link to this definition")
    :   Return a formatted version of S, using substitutions from args and kwargs.
        The substitutions are identified by braces (‘{’ and ‘}’).

    format\_map(**mapping**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.format_map "Link to this definition")
    :   Return a formatted version of S, using substitutions from mapping.
        The substitutions are identified by braces (‘{’ and ‘}’).

    index(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.index "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    classmethod infer(**input\_path=None**, **\***, **mime\_type=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ec7d6d7/scikitplot/corpus/_schema.py#L610)[#](#scikitplot.corpus.SourceType.infer "Link to this definition")
    :   Infer the most likely [`SourceType`](#scikitplot.corpus.SourceType "scikitplot.corpus.SourceType") from a file path or MIME type.

        Parameters:
        :   ****input\_path****str, pathlib.Path, or None, optional
            :   File path or URL string. The extension (lower-case) is
                extracted and looked up in the internal extension map.
                `None` falls through to **mime\_type** lookup. Default: `None`.

            ****mime\_type****str or None, optional
            :   MIME type string (e.g. `"application/pdf"`). Used when
                **input\_path** has no recognisable extension (e.g. extensionless
                API URLs). Default: `None`.

        Returns:
        :   SourceType
            :   Inferred type, or [`SourceType.UNKNOWN`](#scikitplot.corpus.SourceType.UNKNOWN "scikitplot.corpus.SourceType.UNKNOWN") when neither
                **input\_path** nor **mime\_type** yields a match.

        Parameters:
        :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** [**pathlib.Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** **None**)
            * ****mime\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   Self

        Notes

        ****Priority:**** extension (from **input\_path**) wins over **mime\_type**.

        ****Use case — ZipReader:**** Each member is passed to
        [`infer`](#scikitplot.corpus.SourceType.infer "scikitplot.corpus.SourceType.infer") so that `source_type` is never `UNKNOWN`
        unless truly ambiguous:

        ```
        st = SourceType.infer(member_path)
        # → SourceType.RESEARCH for .pdf, SourceType.IMAGE for .jpg …

        ```

        ****Use case — from\_url probe:**** After downloading an extensionless
        URL, the server’s `Content-Type` header is passed as **mime\_type**:

        ```
        st = SourceType.infer(mime_type="audio/mpeg")
        # → SourceType.AUDIO

        ```

        Examples

        Try it in your browser!
        ```
        >>> SourceType.infer("report.pdf")
        <SourceType.RESEARCH: 'research'>
        >>> SourceType.infer("podcast.mp3")
        <SourceType.AUDIO: 'audio'>
        >>> SourceType.infer(mime_type="image/jpeg")
        <SourceType.IMAGE: 'image'>
        >>> SourceType.infer("mystery.bin")
        <SourceType.UNKNOWN: 'unknown'>

        ```
        Go BackOpen In Tab

    isalnum(**/**)[#](#scikitplot.corpus.SourceType.isalnum "Link to this definition")
    :   Return True if the string is an alpha-numeric string, False otherwise.

        A string is alpha-numeric if all characters in the string are alpha-numeric and
        there is at least one character in the string.

    isalpha(**/**)[#](#scikitplot.corpus.SourceType.isalpha "Link to this definition")
    :   Return True if the string is an alphabetic string, False otherwise.

        A string is alphabetic if all characters in the string are alphabetic and there
        is at least one character in the string.

    isascii(**/**)[#](#scikitplot.corpus.SourceType.isascii "Link to this definition")
    :   Return True if all characters in the string are ASCII, False otherwise.

        ASCII characters have code points in the range U+0000-U+007F.
        Empty string is ASCII too.

    isdecimal(**/**)[#](#scikitplot.corpus.SourceType.isdecimal "Link to this definition")
    :   Return True if the string is a decimal string, False otherwise.

        A string is a decimal string if all characters in the string are decimal and
        there is at least one character in the string.

    isdigit(**/**)[#](#scikitplot.corpus.SourceType.isdigit "Link to this definition")
    :   Return True if the string is a digit string, False otherwise.

        A string is a digit string if all characters in the string are digits and there
        is at least one character in the string.

    isidentifier(**/**)[#](#scikitplot.corpus.SourceType.isidentifier "Link to this definition")
    :   Return True if the string is a valid Python identifier, False otherwise.

        Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
        such as “def” or “class”.

    islower(**/**)[#](#scikitplot.corpus.SourceType.islower "Link to this definition")
    :   Return True if the string is a lowercase string, False otherwise.

        A string is lowercase if all cased characters in the string are lowercase and
        there is at least one cased character in the string.

    isnumeric(**/**)[#](#scikitplot.corpus.SourceType.isnumeric "Link to this definition")
    :   Return True if the string is a numeric string, False otherwise.

        A string is numeric if all characters in the string are numeric and there is at
        least one character in the string.

    isprintable(**/**)[#](#scikitplot.corpus.SourceType.isprintable "Link to this definition")
    :   Return True if all characters in the string are printable, False otherwise.

        A character is printable if repr() may use it in its output.

    isspace(**/**)[#](#scikitplot.corpus.SourceType.isspace "Link to this definition")
    :   Return True if the string is a whitespace string, False otherwise.

        A string is whitespace if all characters in the string are whitespace and there
        is at least one character in the string.

    istitle(**/**)[#](#scikitplot.corpus.SourceType.istitle "Link to this definition")
    :   Return True if the string is a title-cased string, False otherwise.

        In a title-cased string, upper- and title-case characters may only
        follow uncased characters and lowercase characters only cased ones.

    isupper(**/**)[#](#scikitplot.corpus.SourceType.isupper "Link to this definition")
    :   Return True if the string is an uppercase string, False otherwise.

        A string is uppercase if all cased characters in the string are uppercase and
        there is at least one cased character in the string.

    join(**iterable**, **/**)[#](#scikitplot.corpus.SourceType.join "Link to this definition")
    :   Concatenate any number of strings.

        The string whose method is called is inserted in between each given string.
        The result is returned as a new string.

        Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

    ljust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.SourceType.ljust "Link to this definition")
    :   Return a left-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    lower(**/**)[#](#scikitplot.corpus.SourceType.lower "Link to this definition")
    :   Return a copy of the string converted to lowercase.

    lstrip(**chars=None**, **/**)[#](#scikitplot.corpus.SourceType.lstrip "Link to this definition")
    :   Return a copy of the string with leading whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    partition(**sep**, **/**)[#](#scikitplot.corpus.SourceType.partition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string. If the separator is found,
        returns a 3-tuple containing the part before the separator, the separator
        itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing the original string
        and two empty strings.

    removeprefix(**prefix**, **/**)[#](#scikitplot.corpus.SourceType.removeprefix "Link to this definition")
    :   Return a str with the given prefix string removed if present.

        If the string starts with the prefix string, return string[len(prefix):].
        Otherwise, return a copy of the original string.

    removesuffix(**suffix**, **/**)[#](#scikitplot.corpus.SourceType.removesuffix "Link to this definition")
    :   Return a str with the given suffix string removed if present.

        If the string ends with the suffix string and that suffix is not empty,
        return string[:-len(suffix)]. Otherwise, return a copy of the original
        string.

    replace(**old**, **new**, **count=-1**, **/**)[#](#scikitplot.corpus.SourceType.replace "Link to this definition")
    :   Return a copy with all occurrences of substring old replaced by new.

        > count
        > :   Maximum number of occurrences to replace.
        >     -1 (the default value) means replace all occurrences.

        If the optional argument count is given, only the first count occurrences are
        replaced.

    rfind(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.rfind "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    rindex(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.rindex "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    rjust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.SourceType.rjust "Link to this definition")
    :   Return a right-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    rpartition(**sep**, **/**)[#](#scikitplot.corpus.SourceType.rpartition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string, starting at the end. If
        the separator is found, returns a 3-tuple containing the part before the
        separator, the separator itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing two empty strings
        and the original string.

    rsplit(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.SourceType.rsplit "Link to this definition")
    :   Return a list of the substrings in the string, using sep as the separator string.

        > sep
        > :   The separator used to split the string.
        >
        >     When set to None (the default value), will split on any whitespace
        >     character (including n r t f and spaces) and will discard
        >     empty strings from the result.
        >
        > maxsplit
        > :   Maximum number of splits.
        >     -1 (the default value) means no limit.

        Splitting starts at the end of the string and works to the front.

    rstrip(**chars=None**, **/**)[#](#scikitplot.corpus.SourceType.rstrip "Link to this definition")
    :   Return a copy of the string with trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    split(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.SourceType.split "Link to this definition")
    :   Return a list of the substrings in the string, using sep as the separator string.

        > sep
        > :   The separator used to split the string.
        >
        >     When set to None (the default value), will split on any whitespace
        >     character (including n r t f and spaces) and will discard
        >     empty strings from the result.
        >
        > maxsplit
        > :   Maximum number of splits.
        >     -1 (the default value) means no limit.

        Splitting starts at the front of the string and works to the end.

        Note, str.split() is mainly useful for data that has been intentionally
        delimited. With natural text that includes punctuation, consider using
        the regular expression module.

    splitlines(**/**, **keepends=False**)[#](#scikitplot.corpus.SourceType.splitlines "Link to this definition")
    :   Return a list of the lines in the string, breaking at line boundaries.

        Line breaks are not included in the resulting list unless keepends is given and
        true.

    startswith(**prefix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.SourceType.startswith "Link to this definition")
    :   Return True if S starts with the specified prefix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        prefix can also be a tuple of strings to try.

    strip(**chars=None**, **/**)[#](#scikitplot.corpus.SourceType.strip "Link to this definition")
    :   Return a copy of the string with leading and trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    swapcase(**/**)[#](#scikitplot.corpus.SourceType.swapcase "Link to this definition")
    :   Convert uppercase characters to lowercase and lowercase characters to uppercase.

    title(**/**)[#](#scikitplot.corpus.SourceType.title "Link to this definition")
    :   Return a version of the string where each word is titlecased.

        More specifically, words start with uppercased characters and all remaining
        cased characters have lower case.

    translate(**table**, **/**)[#](#scikitplot.corpus.SourceType.translate "Link to this definition")
    :   Replace each character in the string using the given translation table.

        > table
        > :   Translation table, which must be a mapping of Unicode ordinals to
        >     Unicode ordinals, strings, or None.

        The table must implement lookup/indexing via \_\_getitem\_\_, for instance a
        dictionary or list. If this operation raises LookupError, the character is
        left untouched. Characters mapped to None are deleted.

    upper(**/**)[#](#scikitplot.corpus.SourceType.upper "Link to this definition")
    :   Return a copy of the string converted to uppercase.

    zfill(**width**, **/**)[#](#scikitplot.corpus.SourceType.zfill "Link to this definition")
    :   Pad a numeric string with zeros on the left, to fill a field of the given width.

        The string is never truncated.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_corpus_who_per_file_script_thumb.png)

[corpus WHO European Region local or url per file with examples](../../auto_examples/corpus/plot_corpus_who_per_file_script.html)

corpus WHO European Region local or url per file with examples