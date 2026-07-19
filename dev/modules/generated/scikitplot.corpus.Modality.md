# Modality[#](#modality "Link to this heading")

class scikitplot.corpus.Modality(**\*values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_schema.py#L132)[#](#scikitplot.corpus.Modality "Link to this definition")
:   Primary content modality of a [`CorpusDocument`](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus.CorpusDocument").

    Notes

    ****TEXT**** — document carries non-empty `text`; `raw_tensor` is
    `None` (the common, existing case).

    ****IMAGE / AUDIO / VIDEO**** — document carries `raw_tensor` and/or
    `raw_bytes`; `text` may be `None` (raw-only) or non-None (e.g.
    OCR transcript alongside pixel array).

    ****MULTIMODAL**** — document carries both `text` and a `raw_tensor`
    (e.g. an image with its OCR transcript).

    Reader-to-modality mapping:

    * `TextReader / PDFReader / XMLReader / WebReader / YouTubeReader`
      → `TEXT`
    * `ImageReader(yield_raw=False)` → `TEXT`
    * `ImageReader(yield_raw=True)` → `IMAGE` or `MULTIMODAL`
    * `AudioReader(yield_waveform=False)` → `TEXT`
    * `AudioReader(yield_waveform=True)` → `AUDIO`
    * `VideoReader(yield_frames=False)` → `TEXT`
    * `VideoReader(yield_frames=True)` → `VIDEO` or `MULTIMODAL`

    Examples

    Try it in your browser!
    ```
    >>> Modality.TEXT == "text"
    True
    >>> Modality("image")
    <Modality.IMAGE: 'image'>

    ```
    Go BackOpen In Tab

    AUDIO = 'audio'[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.Modality.AUDIO "Link to this definition")
    :   Audio waveform — `raw_tensor` shape is `(samples,)` float32.

    IMAGE = 'image'[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.Modality.IMAGE "Link to this definition")
    :   Raster image tensor — `raw_tensor` shape is `(H, W, C)` uint8.

    MULTIMODAL = 'multimodal'[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.Modality.MULTIMODAL "Link to this definition")
    :   Both `text` and `raw_tensor` are present (e.g. image + OCR).

    TEXT = 'text'[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.Modality.TEXT "Link to this definition")
    :   Plain text content — `raw_tensor` is `None`.

    VIDEO = 'video'[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.Modality.VIDEO "Link to this definition")
    :   Video frame tensor — `raw_tensor` shape is `(T, H, W, C)` uint8.

    capitalize(**/**)[#](#scikitplot.corpus.Modality.capitalize "Link to this definition")
    :   Return a capitalized version of the string.

        More specifically, make the first character have upper case and the rest lower
        case.

    casefold(**/**)[#](#scikitplot.corpus.Modality.casefold "Link to this definition")
    :   Return a version of the string suitable for caseless comparisons.

    center(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.Modality.center "Link to this definition")
    :   Return a centered string of length width.

        Padding is done using the specified fill character (default is a space).

    count(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.Modality.count "Link to this definition")
    :   Return the number of non-overlapping occurrences of substring sub in
        string S[start:end]. Optional arguments start and end are
        interpreted as in slice notation.

    encode(**/**, **encoding='utf-8'**, **errors='strict'**)[#](#scikitplot.corpus.Modality.encode "Link to this definition")
    :   Encode the string using the codec registered for encoding.

        encoding
        :   The encoding in which to encode the string.

        errors
        :   The error handling scheme to use for encoding errors.
            The default is ‘strict’ meaning that encoding errors raise a
            UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
            ‘xmlcharrefreplace’ as well as any other name registered with
            codecs.register\_error that can handle UnicodeEncodeErrors.

    endswith(**suffix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.Modality.endswith "Link to this definition")
    :   Return True if S ends with the specified suffix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        suffix can also be a tuple of strings to try.

    expandtabs(**/**, **tabsize=8**)[#](#scikitplot.corpus.Modality.expandtabs "Link to this definition")
    :   Return a copy where all tab characters are expanded using spaces.

        If tabsize is not given, a tab size of 8 characters is assumed.

    find(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.Modality.find "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    format(**\*args**, **\*\*kwargs**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.Modality.format "Link to this definition")
    :   Return a formatted version of S, using substitutions from args and kwargs.
        The substitutions are identified by braces (‘{’ and ‘}’).

    format\_map(**mapping**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.Modality.format_map "Link to this definition")
    :   Return a formatted version of S, using substitutions from mapping.
        The substitutions are identified by braces (‘{’ and ‘}’).

    index(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.Modality.index "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    isalnum(**/**)[#](#scikitplot.corpus.Modality.isalnum "Link to this definition")
    :   Return True if the string is an alpha-numeric string, False otherwise.

        A string is alpha-numeric if all characters in the string are alpha-numeric and
        there is at least one character in the string.

    isalpha(**/**)[#](#scikitplot.corpus.Modality.isalpha "Link to this definition")
    :   Return True if the string is an alphabetic string, False otherwise.

        A string is alphabetic if all characters in the string are alphabetic and there
        is at least one character in the string.

    isascii(**/**)[#](#scikitplot.corpus.Modality.isascii "Link to this definition")
    :   Return True if all characters in the string are ASCII, False otherwise.

        ASCII characters have code points in the range U+0000-U+007F.
        Empty string is ASCII too.

    isdecimal(**/**)[#](#scikitplot.corpus.Modality.isdecimal "Link to this definition")
    :   Return True if the string is a decimal string, False otherwise.

        A string is a decimal string if all characters in the string are decimal and
        there is at least one character in the string.

    isdigit(**/**)[#](#scikitplot.corpus.Modality.isdigit "Link to this definition")
    :   Return True if the string is a digit string, False otherwise.

        A string is a digit string if all characters in the string are digits and there
        is at least one character in the string.

    isidentifier(**/**)[#](#scikitplot.corpus.Modality.isidentifier "Link to this definition")
    :   Return True if the string is a valid Python identifier, False otherwise.

        Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
        such as “def” or “class”.

    islower(**/**)[#](#scikitplot.corpus.Modality.islower "Link to this definition")
    :   Return True if the string is a lowercase string, False otherwise.

        A string is lowercase if all cased characters in the string are lowercase and
        there is at least one cased character in the string.

    isnumeric(**/**)[#](#scikitplot.corpus.Modality.isnumeric "Link to this definition")
    :   Return True if the string is a numeric string, False otherwise.

        A string is numeric if all characters in the string are numeric and there is at
        least one character in the string.

    isprintable(**/**)[#](#scikitplot.corpus.Modality.isprintable "Link to this definition")
    :   Return True if all characters in the string are printable, False otherwise.

        A character is printable if repr() may use it in its output.

    isspace(**/**)[#](#scikitplot.corpus.Modality.isspace "Link to this definition")
    :   Return True if the string is a whitespace string, False otherwise.

        A string is whitespace if all characters in the string are whitespace and there
        is at least one character in the string.

    istitle(**/**)[#](#scikitplot.corpus.Modality.istitle "Link to this definition")
    :   Return True if the string is a title-cased string, False otherwise.

        In a title-cased string, upper- and title-case characters may only
        follow uncased characters and lowercase characters only cased ones.

    isupper(**/**)[#](#scikitplot.corpus.Modality.isupper "Link to this definition")
    :   Return True if the string is an uppercase string, False otherwise.

        A string is uppercase if all cased characters in the string are uppercase and
        there is at least one cased character in the string.

    join(**iterable**, **/**)[#](#scikitplot.corpus.Modality.join "Link to this definition")
    :   Concatenate any number of strings.

        The string whose method is called is inserted in between each given string.
        The result is returned as a new string.

        Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

    ljust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.Modality.ljust "Link to this definition")
    :   Return a left-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    lower(**/**)[#](#scikitplot.corpus.Modality.lower "Link to this definition")
    :   Return a copy of the string converted to lowercase.

    lstrip(**chars=None**, **/**)[#](#scikitplot.corpus.Modality.lstrip "Link to this definition")
    :   Return a copy of the string with leading whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    partition(**sep**, **/**)[#](#scikitplot.corpus.Modality.partition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string. If the separator is found,
        returns a 3-tuple containing the part before the separator, the separator
        itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing the original string
        and two empty strings.

    removeprefix(**prefix**, **/**)[#](#scikitplot.corpus.Modality.removeprefix "Link to this definition")
    :   Return a str with the given prefix string removed if present.

        If the string starts with the prefix string, return string[len(prefix):].
        Otherwise, return a copy of the original string.

    removesuffix(**suffix**, **/**)[#](#scikitplot.corpus.Modality.removesuffix "Link to this definition")
    :   Return a str with the given suffix string removed if present.

        If the string ends with the suffix string and that suffix is not empty,
        return string[:-len(suffix)]. Otherwise, return a copy of the original
        string.

    replace(**old**, **new**, **count=-1**, **/**)[#](#scikitplot.corpus.Modality.replace "Link to this definition")
    :   Return a copy with all occurrences of substring old replaced by new.

        > count
        > :   Maximum number of occurrences to replace.
        >     -1 (the default value) means replace all occurrences.

        If the optional argument count is given, only the first count occurrences are
        replaced.

    rfind(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.Modality.rfind "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    rindex(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.Modality.rindex "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    rjust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.Modality.rjust "Link to this definition")
    :   Return a right-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    rpartition(**sep**, **/**)[#](#scikitplot.corpus.Modality.rpartition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string, starting at the end. If
        the separator is found, returns a 3-tuple containing the part before the
        separator, the separator itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing two empty strings
        and the original string.

    rsplit(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.Modality.rsplit "Link to this definition")
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

    rstrip(**chars=None**, **/**)[#](#scikitplot.corpus.Modality.rstrip "Link to this definition")
    :   Return a copy of the string with trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    split(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.Modality.split "Link to this definition")
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

    splitlines(**/**, **keepends=False**)[#](#scikitplot.corpus.Modality.splitlines "Link to this definition")
    :   Return a list of the lines in the string, breaking at line boundaries.

        Line breaks are not included in the resulting list unless keepends is given and
        true.

    startswith(**prefix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.Modality.startswith "Link to this definition")
    :   Return True if S starts with the specified prefix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        prefix can also be a tuple of strings to try.

    strip(**chars=None**, **/**)[#](#scikitplot.corpus.Modality.strip "Link to this definition")
    :   Return a copy of the string with leading and trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    swapcase(**/**)[#](#scikitplot.corpus.Modality.swapcase "Link to this definition")
    :   Convert uppercase characters to lowercase and lowercase characters to uppercase.

    title(**/**)[#](#scikitplot.corpus.Modality.title "Link to this definition")
    :   Return a version of the string where each word is titlecased.

        More specifically, words start with uppercased characters and all remaining
        cased characters have lower case.

    translate(**table**, **/**)[#](#scikitplot.corpus.Modality.translate "Link to this definition")
    :   Replace each character in the string using the given translation table.

        > table
        > :   Translation table, which must be a mapping of Unicode ordinals to
        >     Unicode ordinals, strings, or None.

        The table must implement lookup/indexing via \_\_getitem\_\_, for instance a
        dictionary or list. If this operation raises LookupError, the character is
        left untouched. Characters mapped to None are deleted.

    upper(**/**)[#](#scikitplot.corpus.Modality.upper "Link to this definition")
    :   Return a copy of the string converted to uppercase.

    zfill(**width**, **/**)[#](#scikitplot.corpus.Modality.zfill "Link to this definition")
    :   Pad a numeric string with zeros on the left, to fill a field of the given width.

        The string is never truncated.