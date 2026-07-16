# SectionType[#](#sectiontype "Link to this heading")

class scikitplot.corpus.SectionType(**\*values**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L219)[#](#scikitplot.corpus.SectionType "Link to this definition")
:   Semantic label for the role of a text chunk within its source document.

    Notes

    The `UNKNOWN` value is the safe default for readers that cannot determine
    section type. Downstream consumers (filters, exporters) should treat
    `UNKNOWN` as `TEXT` unless they have specific logic for it.

    Every value is a plain lowercase string so that it round-trips safely
    through CSV, JSON, and database storage without loss.

    Literary and dramatic values (`VERSE`, `DIALOGUE`,
    `STAGE_DIRECTION`) allow corpus consumers to exclude non-content sections
    from semantic matching without reprocessing the source.

    Research-paper values (`ABSTRACT`, `REFERENCES`,
    `ACKNOWLEDGEMENTS`) allow consumers to restrict or exclude specific paper
    sections from citation-matching pipelines.

    Examples

    Try it in your browser!
    ```
    >>> SectionType.TEXT == "text"
    True
    >>> SectionType("footnote") is SectionType.FOOTNOTE
    True
    >>> SectionType("abstract") is SectionType.ABSTRACT
    True

    ```
    Go BackOpen In Tab

    ABSTRACT = 'abstract'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.ABSTRACT "Link to this definition")
    :   Research-paper abstract — distinguishable from body for citation matching.

    ACKNOWLEDGEMENTS = 'acknowledgements'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.ACKNOWLEDGEMENTS "Link to this definition")
    :   Acknowledgements section — typically excluded from content matching.

    CAPTION = 'caption'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.CAPTION "Link to this definition")
    :   Caption attached to a non-figure element (table caption, etc.).

    CODE = 'code'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.CODE "Link to this definition")
    :   Source-code or pre-formatted block.

    DIALOGUE = 'dialogue'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.DIALOGUE "Link to this definition")
    :   Speaker turn in a dramatic or screenplay source.

    FIGURE = 'figure'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.FIGURE "Link to this definition")
    :   Figure caption or alt-text associated with an image.

    FOOTNOTE = 'footnote'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.FOOTNOTE "Link to this definition")
    :   Footnote content extracted below the main body.

    HEADER = 'header'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.HEADER "Link to this definition")
    :   Page or section header (running head, masthead, etc.).

    LIST\_ITEM = 'list\_item'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.LIST_ITEM "Link to this definition")
    :   Bullet-list or numbered-list item — distinct from paragraph prose.

    LYRICS = 'lyrics'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.LYRICS "Link to this definition")
    :   Song lyrics line from an LRC or lyrics file — distinct from prose.

    METADATA = 'metadata'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.METADATA "Link to this definition")
    :   Document-level metadata (author, date, abstract, etc.).

    REFERENCES = 'references'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.REFERENCES "Link to this definition")
    :   Reference list — should typically be excluded from semantic matching.

    SIDEBAR = 'sidebar'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.SIDEBAR "Link to this definition")
    :   Editorial pull-quote, sidebar, or callout box.

    STAGE\_DIRECTION = 'stage\_direction'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.STAGE_DIRECTION "Link to this definition")
    :   Dramatic stage direction, e.g. `[Enter Hamlet]` — not narrative content.

    TABLE = 'table'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.TABLE "Link to this definition")
    :   Tabular data rendered as a text chunk.

    TEXT = 'text'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.TEXT "Link to this definition")
    :   Body text — the primary content of the document.

    TITLE = 'title'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.TITLE "Link to this definition")
    :   Document or section title / heading.

    TRANSCRIPT = 'transcript'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.TRANSCRIPT "Link to this definition")
    :   Machine-generated ASR transcription (Whisper, etc.) — not human-written.

    UNKNOWN = 'unknown'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.UNKNOWN "Link to this definition")
    :   Section type could not be determined.

    VERSE = 'verse'[[source]](https://github.com/scikit-plots/scikit-plots/blob/f800619/scikitplot/corpus/_schema.py#L)[#](#scikitplot.corpus.SectionType.VERSE "Link to this definition")
    :   Poetic line or stanza — metric/phonetic matching differs from prose.

    capitalize(**/**)[#](#scikitplot.corpus.SectionType.capitalize "Link to this definition")
    :   Return a capitalized version of the string.

        More specifically, make the first character have upper case and the rest lower
        case.

    casefold(**/**)[#](#scikitplot.corpus.SectionType.casefold "Link to this definition")
    :   Return a version of the string suitable for caseless comparisons.

    center(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.SectionType.center "Link to this definition")
    :   Return a centered string of length width.

        Padding is done using the specified fill character (default is a space).

    count(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.count "Link to this definition")
    :   Return the number of non-overlapping occurrences of substring sub in
        string S[start:end]. Optional arguments start and end are
        interpreted as in slice notation.

    encode(**/**, **encoding='utf-8'**, **errors='strict'**)[#](#scikitplot.corpus.SectionType.encode "Link to this definition")
    :   Encode the string using the codec registered for encoding.

        encoding
        :   The encoding in which to encode the string.

        errors
        :   The error handling scheme to use for encoding errors.
            The default is ‘strict’ meaning that encoding errors raise a
            UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
            ‘xmlcharrefreplace’ as well as any other name registered with
            codecs.register\_error that can handle UnicodeEncodeErrors.

    endswith(**suffix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.endswith "Link to this definition")
    :   Return True if S ends with the specified suffix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        suffix can also be a tuple of strings to try.

    expandtabs(**/**, **tabsize=8**)[#](#scikitplot.corpus.SectionType.expandtabs "Link to this definition")
    :   Return a copy where all tab characters are expanded using spaces.

        If tabsize is not given, a tab size of 8 characters is assumed.

    find(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.find "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    format(**\*args**, **\*\*kwargs**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.format "Link to this definition")
    :   Return a formatted version of S, using substitutions from args and kwargs.
        The substitutions are identified by braces (‘{’ and ‘}’).

    format\_map(**mapping**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.format_map "Link to this definition")
    :   Return a formatted version of S, using substitutions from mapping.
        The substitutions are identified by braces (‘{’ and ‘}’).

    index(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.index "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    isalnum(**/**)[#](#scikitplot.corpus.SectionType.isalnum "Link to this definition")
    :   Return True if the string is an alpha-numeric string, False otherwise.

        A string is alpha-numeric if all characters in the string are alpha-numeric and
        there is at least one character in the string.

    isalpha(**/**)[#](#scikitplot.corpus.SectionType.isalpha "Link to this definition")
    :   Return True if the string is an alphabetic string, False otherwise.

        A string is alphabetic if all characters in the string are alphabetic and there
        is at least one character in the string.

    isascii(**/**)[#](#scikitplot.corpus.SectionType.isascii "Link to this definition")
    :   Return True if all characters in the string are ASCII, False otherwise.

        ASCII characters have code points in the range U+0000-U+007F.
        Empty string is ASCII too.

    isdecimal(**/**)[#](#scikitplot.corpus.SectionType.isdecimal "Link to this definition")
    :   Return True if the string is a decimal string, False otherwise.

        A string is a decimal string if all characters in the string are decimal and
        there is at least one character in the string.

    isdigit(**/**)[#](#scikitplot.corpus.SectionType.isdigit "Link to this definition")
    :   Return True if the string is a digit string, False otherwise.

        A string is a digit string if all characters in the string are digits and there
        is at least one character in the string.

    isidentifier(**/**)[#](#scikitplot.corpus.SectionType.isidentifier "Link to this definition")
    :   Return True if the string is a valid Python identifier, False otherwise.

        Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
        such as “def” or “class”.

    islower(**/**)[#](#scikitplot.corpus.SectionType.islower "Link to this definition")
    :   Return True if the string is a lowercase string, False otherwise.

        A string is lowercase if all cased characters in the string are lowercase and
        there is at least one cased character in the string.

    isnumeric(**/**)[#](#scikitplot.corpus.SectionType.isnumeric "Link to this definition")
    :   Return True if the string is a numeric string, False otherwise.

        A string is numeric if all characters in the string are numeric and there is at
        least one character in the string.

    isprintable(**/**)[#](#scikitplot.corpus.SectionType.isprintable "Link to this definition")
    :   Return True if all characters in the string are printable, False otherwise.

        A character is printable if repr() may use it in its output.

    isspace(**/**)[#](#scikitplot.corpus.SectionType.isspace "Link to this definition")
    :   Return True if the string is a whitespace string, False otherwise.

        A string is whitespace if all characters in the string are whitespace and there
        is at least one character in the string.

    istitle(**/**)[#](#scikitplot.corpus.SectionType.istitle "Link to this definition")
    :   Return True if the string is a title-cased string, False otherwise.

        In a title-cased string, upper- and title-case characters may only
        follow uncased characters and lowercase characters only cased ones.

    isupper(**/**)[#](#scikitplot.corpus.SectionType.isupper "Link to this definition")
    :   Return True if the string is an uppercase string, False otherwise.

        A string is uppercase if all cased characters in the string are uppercase and
        there is at least one cased character in the string.

    join(**iterable**, **/**)[#](#scikitplot.corpus.SectionType.join "Link to this definition")
    :   Concatenate any number of strings.

        The string whose method is called is inserted in between each given string.
        The result is returned as a new string.

        Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

    ljust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.SectionType.ljust "Link to this definition")
    :   Return a left-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    lower(**/**)[#](#scikitplot.corpus.SectionType.lower "Link to this definition")
    :   Return a copy of the string converted to lowercase.

    lstrip(**chars=None**, **/**)[#](#scikitplot.corpus.SectionType.lstrip "Link to this definition")
    :   Return a copy of the string with leading whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    partition(**sep**, **/**)[#](#scikitplot.corpus.SectionType.partition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string. If the separator is found,
        returns a 3-tuple containing the part before the separator, the separator
        itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing the original string
        and two empty strings.

    removeprefix(**prefix**, **/**)[#](#scikitplot.corpus.SectionType.removeprefix "Link to this definition")
    :   Return a str with the given prefix string removed if present.

        If the string starts with the prefix string, return string[len(prefix):].
        Otherwise, return a copy of the original string.

    removesuffix(**suffix**, **/**)[#](#scikitplot.corpus.SectionType.removesuffix "Link to this definition")
    :   Return a str with the given suffix string removed if present.

        If the string ends with the suffix string and that suffix is not empty,
        return string[:-len(suffix)]. Otherwise, return a copy of the original
        string.

    replace(**old**, **new**, **count=-1**, **/**)[#](#scikitplot.corpus.SectionType.replace "Link to this definition")
    :   Return a copy with all occurrences of substring old replaced by new.

        > count
        > :   Maximum number of occurrences to replace.
        >     -1 (the default value) means replace all occurrences.

        If the optional argument count is given, only the first count occurrences are
        replaced.

    rfind(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.rfind "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    rindex(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.rindex "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    rjust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.SectionType.rjust "Link to this definition")
    :   Return a right-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    rpartition(**sep**, **/**)[#](#scikitplot.corpus.SectionType.rpartition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string, starting at the end. If
        the separator is found, returns a 3-tuple containing the part before the
        separator, the separator itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing two empty strings
        and the original string.

    rsplit(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.SectionType.rsplit "Link to this definition")
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

    rstrip(**chars=None**, **/**)[#](#scikitplot.corpus.SectionType.rstrip "Link to this definition")
    :   Return a copy of the string with trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    split(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.SectionType.split "Link to this definition")
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

    splitlines(**/**, **keepends=False**)[#](#scikitplot.corpus.SectionType.splitlines "Link to this definition")
    :   Return a list of the lines in the string, breaking at line boundaries.

        Line breaks are not included in the resulting list unless keepends is given and
        true.

    startswith(**prefix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.SectionType.startswith "Link to this definition")
    :   Return True if S starts with the specified prefix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        prefix can also be a tuple of strings to try.

    strip(**chars=None**, **/**)[#](#scikitplot.corpus.SectionType.strip "Link to this definition")
    :   Return a copy of the string with leading and trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    swapcase(**/**)[#](#scikitplot.corpus.SectionType.swapcase "Link to this definition")
    :   Convert uppercase characters to lowercase and lowercase characters to uppercase.

    title(**/**)[#](#scikitplot.corpus.SectionType.title "Link to this definition")
    :   Return a version of the string where each word is titlecased.

        More specifically, words start with uppercased characters and all remaining
        cased characters have lower case.

    translate(**table**, **/**)[#](#scikitplot.corpus.SectionType.translate "Link to this definition")
    :   Replace each character in the string using the given translation table.

        > table
        > :   Translation table, which must be a mapping of Unicode ordinals to
        >     Unicode ordinals, strings, or None.

        The table must implement lookup/indexing via \_\_getitem\_\_, for instance a
        dictionary or list. If this operation raises LookupError, the character is
        left untouched. Characters mapped to None are deleted.

    upper(**/**)[#](#scikitplot.corpus.SectionType.upper "Link to this definition")
    :   Return a copy of the string converted to uppercase.

    zfill(**width**, **/**)[#](#scikitplot.corpus.SectionType.zfill "Link to this definition")
    :   Pad a numeric string with zeros on the left, to fill a field of the given width.

        The string is never truncated.