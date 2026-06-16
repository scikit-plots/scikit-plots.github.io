# ScriptType[#](#scripttype "Link to this heading")

class scikitplot.corpus.ScriptType(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L837)[#](#scikitplot.corpus.ScriptType "Link to this definition")
:   Dominant Unicode script detected in a text sample.

    Attributes:
    :   ****LATIN****
        :   Latin script (English, French, German, Spanish, Portuguese,
            Romanian, Turkish, Vietnamese, etc.) — left-to-right.

        ****CJK****
        :   Chinese / Japanese / Korean ideographs and kana — traditionally
            top-to-bottom, rendered left-to-right in digital contexts.

        ****ARABIC****
        :   Arabic, Persian (Farsi), Ottoman Turkish, Urdu — right-to-left.

        ****HEBREW****
        :   Hebrew, Yiddish — right-to-left.

        ****DEVANAGARI****
        :   Hindi, Sanskrit, Marathi, Nepali — left-to-right.

        ****GREEK****
        :   Modern and ancient Greek — left-to-right.

        ****CYRILLIC****
        :   Russian, Bulgarian, Serbian, Ukrainian, etc. — left-to-right.

        ****ETHIOPIC****
        :   Amharic, Tigrinya — left-to-right.

        ****GEORGIAN****
        :   Georgian — left-to-right.

        ****EGYPTIAN****
        :   Coptic (no Unicode block for hieroglyphs with full coverage yet;
            Coptic block used as proxy for Coptic-script ancient Egyptian).

        ****THAI****
        :   Thai — left-to-right.

        ****SOUTHEAST\_ASIAN****
        :   Lao, Khmer, Myanmar, Burmese — covers mainland Southeast Asian
            scripts that are not Thai.

        ****SOUTH\_ASIAN****
        :   Dravidian scripts: Tamil, Telugu, Kannada, Malayalam, Sinhala.
            Distinct from Devanagari which covers North Indian languages.

        ****ARMENIAN****
        :   Armenian — left-to-right.

        ****TIBETAN****
        :   Tibetan — left-to-right.

        ****MIXED****
        :   Multiple scripts present in roughly equal proportions.

        ****UNKNOWN****
        :   No script characters detected (empty, purely numeric, symbols).

    ARABIC = 'arabic'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.ARABIC "Link to this definition")

    ARMENIAN = 'armenian'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.ARMENIAN "Link to this definition")

    CJK = 'cjk'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.CJK "Link to this definition")

    CYRILLIC = 'cyrillic'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.CYRILLIC "Link to this definition")

    DEVANAGARI = 'devanagari'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.DEVANAGARI "Link to this definition")

    EGYPTIAN = 'egyptian'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.EGYPTIAN "Link to this definition")

    EGYPTIAN\_HIEROGLYPHS = 'egyptian\_hieroglyphs'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.EGYPTIAN_HIEROGLYPHS "Link to this definition")

    EMOJI = 'emoji'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.EMOJI "Link to this definition")

    ETHIOPIC = 'ethiopic'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.ETHIOPIC "Link to this definition")

    GEORGIAN = 'georgian'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.GEORGIAN "Link to this definition")

    GREEK = 'greek'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.GREEK "Link to this definition")

    HAN = 'han'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.HAN "Link to this definition")

    HANGUL = 'hangul'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.HANGUL "Link to this definition")

    HEBREW = 'hebrew'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.HEBREW "Link to this definition")

    HIRAGANA = 'hiragana'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.HIRAGANA "Link to this definition")

    KATAKANA = 'katakana'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.KATAKANA "Link to this definition")

    KHMER = 'khmer'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.KHMER "Link to this definition")

    LATIN = 'latin'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.LATIN "Link to this definition")

    MIXED = 'mixed'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.MIXED "Link to this definition")

    MONGOLIAN = 'mongolian'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.MONGOLIAN "Link to this definition")

    MYANMAR = 'myanmar'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.MYANMAR "Link to this definition")

    SOUTHEAST\_ASIAN = 'southeast\_asian'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.SOUTHEAST_ASIAN "Link to this definition")

    SOUTH\_ASIAN = 'south\_asian'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.SOUTH_ASIAN "Link to this definition")

    SYMBOLIC = 'symbolic'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.SYMBOLIC "Link to this definition")

    THAI = 'thai'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.THAI "Link to this definition")

    TIBETAN = 'tibetan'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.TIBETAN "Link to this definition")

    UNKNOWN = 'unknown'[[source]](https://github.com/scikit-plots/scikit-plots/blob/2eeb508/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L)[#](#scikitplot.corpus.ScriptType.UNKNOWN "Link to this definition")

    capitalize(**/**)[#](#scikitplot.corpus.ScriptType.capitalize "Link to this definition")
    :   Return a capitalized version of the string.

        More specifically, make the first character have upper case and the rest lower
        case.

    casefold(**/**)[#](#scikitplot.corpus.ScriptType.casefold "Link to this definition")
    :   Return a version of the string suitable for caseless comparisons.

    center(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.ScriptType.center "Link to this definition")
    :   Return a centered string of length width.

        Padding is done using the specified fill character (default is a space).

    count(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.count "Link to this definition")
    :   Return the number of non-overlapping occurrences of substring sub in
        string S[start:end]. Optional arguments start and end are
        interpreted as in slice notation.

    encode(**/**, **encoding='utf-8'**, **errors='strict'**)[#](#scikitplot.corpus.ScriptType.encode "Link to this definition")
    :   Encode the string using the codec registered for encoding.

        encoding
        :   The encoding in which to encode the string.

        errors
        :   The error handling scheme to use for encoding errors.
            The default is ‘strict’ meaning that encoding errors raise a
            UnicodeEncodeError. Other possible values are ‘ignore’, ‘replace’ and
            ‘xmlcharrefreplace’ as well as any other name registered with
            codecs.register\_error that can handle UnicodeEncodeErrors.

    endswith(**suffix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.endswith "Link to this definition")
    :   Return True if S ends with the specified suffix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        suffix can also be a tuple of strings to try.

    expandtabs(**/**, **tabsize=8**)[#](#scikitplot.corpus.ScriptType.expandtabs "Link to this definition")
    :   Return a copy where all tab characters are expanded using spaces.

        If tabsize is not given, a tab size of 8 characters is assumed.

    find(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.find "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    format(**\*args**, **\*\*kwargs**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.format "Link to this definition")
    :   Return a formatted version of S, using substitutions from args and kwargs.
        The substitutions are identified by braces (‘{’ and ‘}’).

    format\_map(**mapping**) → [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.format_map "Link to this definition")
    :   Return a formatted version of S, using substitutions from mapping.
        The substitutions are identified by braces (‘{’ and ‘}’).

    index(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.index "Link to this definition")
    :   Return the lowest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    isalnum(**/**)[#](#scikitplot.corpus.ScriptType.isalnum "Link to this definition")
    :   Return True if the string is an alpha-numeric string, False otherwise.

        A string is alpha-numeric if all characters in the string are alpha-numeric and
        there is at least one character in the string.

    isalpha(**/**)[#](#scikitplot.corpus.ScriptType.isalpha "Link to this definition")
    :   Return True if the string is an alphabetic string, False otherwise.

        A string is alphabetic if all characters in the string are alphabetic and there
        is at least one character in the string.

    isascii(**/**)[#](#scikitplot.corpus.ScriptType.isascii "Link to this definition")
    :   Return True if all characters in the string are ASCII, False otherwise.

        ASCII characters have code points in the range U+0000-U+007F.
        Empty string is ASCII too.

    isdecimal(**/**)[#](#scikitplot.corpus.ScriptType.isdecimal "Link to this definition")
    :   Return True if the string is a decimal string, False otherwise.

        A string is a decimal string if all characters in the string are decimal and
        there is at least one character in the string.

    isdigit(**/**)[#](#scikitplot.corpus.ScriptType.isdigit "Link to this definition")
    :   Return True if the string is a digit string, False otherwise.

        A string is a digit string if all characters in the string are digits and there
        is at least one character in the string.

    isidentifier(**/**)[#](#scikitplot.corpus.ScriptType.isidentifier "Link to this definition")
    :   Return True if the string is a valid Python identifier, False otherwise.

        Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
        such as “def” or “class”.

    islower(**/**)[#](#scikitplot.corpus.ScriptType.islower "Link to this definition")
    :   Return True if the string is a lowercase string, False otherwise.

        A string is lowercase if all cased characters in the string are lowercase and
        there is at least one cased character in the string.

    isnumeric(**/**)[#](#scikitplot.corpus.ScriptType.isnumeric "Link to this definition")
    :   Return True if the string is a numeric string, False otherwise.

        A string is numeric if all characters in the string are numeric and there is at
        least one character in the string.

    isprintable(**/**)[#](#scikitplot.corpus.ScriptType.isprintable "Link to this definition")
    :   Return True if the string is printable, False otherwise.

        A string is printable if all of its characters are considered printable in
        repr() or if it is empty.

    isspace(**/**)[#](#scikitplot.corpus.ScriptType.isspace "Link to this definition")
    :   Return True if the string is a whitespace string, False otherwise.

        A string is whitespace if all characters in the string are whitespace and there
        is at least one character in the string.

    istitle(**/**)[#](#scikitplot.corpus.ScriptType.istitle "Link to this definition")
    :   Return True if the string is a title-cased string, False otherwise.

        In a title-cased string, upper- and title-case characters may only
        follow uncased characters and lowercase characters only cased ones.

    isupper(**/**)[#](#scikitplot.corpus.ScriptType.isupper "Link to this definition")
    :   Return True if the string is an uppercase string, False otherwise.

        A string is uppercase if all cased characters in the string are uppercase and
        there is at least one cased character in the string.

    join(**iterable**, **/**)[#](#scikitplot.corpus.ScriptType.join "Link to this definition")
    :   Concatenate any number of strings.

        The string whose method is called is inserted in between each given string.
        The result is returned as a new string.

        Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

    ljust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.ScriptType.ljust "Link to this definition")
    :   Return a left-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    lower(**/**)[#](#scikitplot.corpus.ScriptType.lower "Link to this definition")
    :   Return a copy of the string converted to lowercase.

    lstrip(**chars=None**, **/**)[#](#scikitplot.corpus.ScriptType.lstrip "Link to this definition")
    :   Return a copy of the string with leading whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    partition(**sep**, **/**)[#](#scikitplot.corpus.ScriptType.partition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string. If the separator is found,
        returns a 3-tuple containing the part before the separator, the separator
        itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing the original string
        and two empty strings.

    removeprefix(**prefix**, **/**)[#](#scikitplot.corpus.ScriptType.removeprefix "Link to this definition")
    :   Return a str with the given prefix string removed if present.

        If the string starts with the prefix string, return string[len(prefix):].
        Otherwise, return a copy of the original string.

    removesuffix(**suffix**, **/**)[#](#scikitplot.corpus.ScriptType.removesuffix "Link to this definition")
    :   Return a str with the given suffix string removed if present.

        If the string ends with the suffix string and that suffix is not empty,
        return string[:-len(suffix)]. Otherwise, return a copy of the original
        string.

    replace(**old**, **new**, **count=-1**, **/**)[#](#scikitplot.corpus.ScriptType.replace "Link to this definition")
    :   Return a copy with all occurrences of substring old replaced by new.

        > count
        > :   Maximum number of occurrences to replace.
        >     -1 (the default value) means replace all occurrences.

        If the optional argument count is given, only the first count occurrences are
        replaced.

    rfind(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.rfind "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Return -1 on failure.

    rindex(**sub**[, **start**[, **end**]]) → [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.rindex "Link to this definition")
    :   Return the highest index in S where substring sub is found,
        such that sub is contained within S[start:end]. Optional
        arguments start and end are interpreted as in slice notation.

        Raises ValueError when the substring is not found.

    rjust(**width**, **fillchar=' '**, **/**)[#](#scikitplot.corpus.ScriptType.rjust "Link to this definition")
    :   Return a right-justified string of length width.

        Padding is done using the specified fill character (default is a space).

    rpartition(**sep**, **/**)[#](#scikitplot.corpus.ScriptType.rpartition "Link to this definition")
    :   Partition the string into three parts using the given separator.

        This will search for the separator in the string, starting at the end. If
        the separator is found, returns a 3-tuple containing the part before the
        separator, the separator itself, and the part after it.

        If the separator is not found, returns a 3-tuple containing two empty strings
        and the original string.

    rsplit(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.ScriptType.rsplit "Link to this definition")
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

    rstrip(**chars=None**, **/**)[#](#scikitplot.corpus.ScriptType.rstrip "Link to this definition")
    :   Return a copy of the string with trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    split(**/**, **sep=None**, **maxsplit=-1**)[#](#scikitplot.corpus.ScriptType.split "Link to this definition")
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

    splitlines(**/**, **keepends=False**)[#](#scikitplot.corpus.ScriptType.splitlines "Link to this definition")
    :   Return a list of the lines in the string, breaking at line boundaries.

        Line breaks are not included in the resulting list unless keepends is given and
        true.

    startswith(**prefix**[, **start**[, **end**]]) → [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)")[#](#scikitplot.corpus.ScriptType.startswith "Link to this definition")
    :   Return True if S starts with the specified prefix, False otherwise.
        With optional start, test S beginning at that position.
        With optional end, stop comparing S at that position.
        prefix can also be a tuple of strings to try.

    strip(**chars=None**, **/**)[#](#scikitplot.corpus.ScriptType.strip "Link to this definition")
    :   Return a copy of the string with leading and trailing whitespace removed.

        If chars is given and not None, remove characters in chars instead.

    swapcase(**/**)[#](#scikitplot.corpus.ScriptType.swapcase "Link to this definition")
    :   Convert uppercase characters to lowercase and lowercase characters to uppercase.

    title(**/**)[#](#scikitplot.corpus.ScriptType.title "Link to this definition")
    :   Return a version of the string where each word is titlecased.

        More specifically, words start with uppercased characters and all remaining
        cased characters have lower case.

    translate(**table**, **/**)[#](#scikitplot.corpus.ScriptType.translate "Link to this definition")
    :   Replace each character in the string using the given translation table.

        > table
        > :   Translation table, which must be a mapping of Unicode ordinals to
        >     Unicode ordinals, strings, or None.

        The table must implement lookup/indexing via \_\_getitem\_\_, for instance a
        dictionary or list. If this operation raises LookupError, the character is
        left untouched. Characters mapped to None are deleted.

    upper(**/**)[#](#scikitplot.corpus.ScriptType.upper "Link to this definition")
    :   Return a copy of the string converted to uppercase.

    zfill(**width**, **/**)[#](#scikitplot.corpus.ScriptType.zfill "Link to this definition")
    :   Pad a numeric string with zeros on the left, to fill a field of the given width.

        The string is never truncated.