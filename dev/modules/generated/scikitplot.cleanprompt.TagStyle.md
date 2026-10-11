# TagStyle[#](#tagstyle "Link to this heading")

class scikitplot.cleanprompt.TagStyle(**prefix='['**, **suffix=']'**, **separator='-'**, **uppercase\_kind=True**, **style='placeholder'**, **surrogates=None**, **surrogate\_set=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_policy.py#L91)[#](#scikitplot.cleanprompt.TagStyle "Link to this definition")
:   The placeholder grammar.

    Parameters:
    :   ****prefix****str, default=’[’
        :   Opening delimiter.

        ****suffix****str, default=’]’
        :   Closing delimiter.

        ****separator****str, default=’-’
        :   Separator between the category and the ordinal.

        ****uppercase\_kind****bool, default=True
        :   Whether to upper-case the category in the rendered label.

        ****style****{‘placeholder’, ‘surrogate’}, default=’placeholder’
        :   What a removed value is replaced **with**. `placeholder` renders a
            bracket label; `surrogate` substitutes an invented but ordinary-
            looking value for the kinds that have one, falling back to a label for
            the rest. See `scikitplot.cleanprompt._surrogates`.

            This belongs to the grammar rather than to the wider policy because it
            changes how a stand-in is spelled, and restoration checks the grammar
            digest before reading a vault. A vault written in one style therefore
            cannot be silently read as the other.

        ****surrogates****str, optional
        :   The identity (`name@version#digest16`) of the custom surrogate set
            whose names this grammar issues. Filled in from `surrogate_set`
            when that is given; recorded in a vault, so `decode` needs no set
            file. Requires `style='surrogate'`.

        ****surrogate\_set****SurrogateSet, optional
        :   The set itself (`_surrogate_sets`),
            needed to **issue** stand-ins. Not compared, not serialised: restoring
            reads stand-ins from the vault and needs only `surrogates`.

    Raises:
    :   PolicyError
        :   If any part is empty, or if the suffix could begin inside a label and
            make the grammar ambiguous.

    Parameters:
    :   * ****prefix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****suffix**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****separator**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****uppercase\_kind**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****style**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****surrogates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****surrogate\_set**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

    Notes

    ****Developer notes.**** A non-empty `suffix` is mandatory, and this is
    load-bearing rather than cosmetic. With a closing delimiter, `[EMAIL-1]`
    is not a prefix of `[EMAIL-11]`, so a naive scan cannot confuse the two.
    Remove the suffix and ordinals above nine begin to corrupt each other. The
    upstream project happened to be safe here; making the suffix mandatory turns
    that accident into a guarantee, and
    `test__engine.py::test_ordinal_ten_does_not_collide` keeps it honest.

    Examples

    Try it in your browser!
    ```
    >>> TagStyle().render("email", 3)
    '[EMAIL-3]'
    >>> TagStyle(prefix="<<", suffix=">>", separator="_").render("email", 3)
    '<<EMAIL_3>>'

    ```
    Go BackOpen In Tab

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_policy.py#L410)[#](#scikitplot.cleanprompt.TagStyle.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary of this style.

        Returns:
        :   dict
            :   Field names to values.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.cleanprompt.TagStyle.fingerprint "Link to this definition")
    :   Stable 16-character digest of this **grammar**.

        Notes

        ****Developer notes.**** This is deliberately narrower than
        [`RedactionPolicy.fingerprint`](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy.fingerprint "scikitplot.cleanprompt.RedactionPolicy.fingerprint"), and the two answer different
        questions.

        Restoration cares about exactly one thing: were these labels written in
        the grammar I am about to read them with? It does not care which kinds
        were detected, what the limits were, or how overlaps were arbitrated —
        none of those can change how `[EMAIL-1]` is spelled. Checking the full
        policy digest at restoration time would reject a perfectly valid vault
        merely because the caller had narrowed `kinds`, which is a false
        alarm on the common path.

        The full policy digest remains on
        `RedactionResult`, where it serves
        its own purpose: reproducing a pass exactly.

        Type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    lenient\_pattern()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_policy.py#L276)[#](#scikitplot.cleanprompt.TagStyle.lenient_pattern "Link to this definition")
    :   Return a recogniser that also matches labels a model has rewritten.

        Returns:
        :   re.Pattern
            :   A superset of [`pattern`](#scikitplot.cleanprompt.TagStyle.pattern "scikitplot.cleanprompt.TagStyle.pattern"), with the same `kind` and
                `ordinal` groups.

        Return type:
        :   [**Pattern**](https://docs.python.org/3/library/re.html#re.Pattern "(in Python v3.15)")

        Notes

        ****Developer notes — the channel is not lossless.****

        Every other invariant in this submodule holds across parts it controls.
        Restoration does not: between redaction and restoration the text passes
        through a language model, which rewrites tokens. Measured against real
        replies, a label comes back in these shapes:

        ```
        [EMAIL-1]       as issued
        [email-1]       lower-cased
        [EMAIL_1]       separator changed
        [EMAIL 1]       separator changed to a space
        [EMAIL<U+2011>1]  ASCII hyphen replaced with a Unicode dash
        \[EMAIL-1\]     brackets escaped for Markdown
        [EMAIL\_1]      separator escaped for Markdown
        [EMAIL-<NL>1]     wrapped across a line

        ```

        The table is written literally: every row above is the exact text a
        recogniser has to accept, except for two characters a source file
        cannot show inline – `<U+2011>` is one non-breaking hyphen and
        `<NL>` is one line break. `CP-044` exists because an
        earlier version of this table was written in doubled escapes and was
        therefore easier to check against itself than against the pattern.

        Exact matching restores the first and misses the rest, which is how a
        reply arrives reporting “0 restored” while plainly full of
        placeholders.

        The escaped separator is the composition of two shapes already in that
        list rather than a new one: a model writing `[EMAIL_1]` inside
        Markdown escapes the underscore, because an unescaped one would open
        emphasis. It is admitted for the same reason the escaped brackets are,
        and it was found by `CP-044` — by checking the list above against the
        implementation rather than against itself.

        Admitting it widens the **match** set by exactly the escaped spellings and
        widens the prose match set by nothing, because the surrounding structure
        — delimiter, letter-initial category, digits, delimiter — is untouched.
        That was measured rather than reasoned about.

        This pattern accepts that bounded set — case, the separator family,
        internal whitespace, and backslash escapes — and nothing else. It does
        not accept a missing delimiter or an invented category, because those
        cannot be told apart from ordinary prose. The category must start with a
        letter, so a footnote marker like `[1]` is never a candidate.

        Matching is only half of it. A lenient match is acted on ****only**** when
        the label it normalises to is in the vault, and the caller reports every
        one it acted on; see [`restore`](scikitplot.cleanprompt.restore.html#scikitplot.cleanprompt.restore "scikitplot.cleanprompt.restore").

        Examples

        Try it in your browser!
        ```
        >>> style = TagStyle()
        >>> bool(style.lenient_pattern().search("see [email_1] there"))
        True
        >>> bool(style.lenient_pattern().search(r"see [email\_1] there"))
        True
        >>> bool(style.lenient_pattern().search("see [1] there"))
        False
        >>> style.lenient_pattern().search(r"a\\[EMAIL-1]").group()
        '[EMAIL-1]'

        ```
        Go BackOpen In Tab

    normalize(**candidate**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_policy.py#L373)[#](#scikitplot.cleanprompt.TagStyle.normalize "Link to this definition")
    :   Return the canonical label that a rewritten one was meant to be.

        Parameters:
        :   ****candidate****str
            :   Text matched by [`lenient_pattern`](#scikitplot.cleanprompt.TagStyle.lenient_pattern "scikitplot.cleanprompt.TagStyle.lenient_pattern").

        Returns:
        :   str or None
            :   The label as this grammar renders it, or `None` when the text is
                not a rewritten label at all.

        Parameters:
        :   ****candidate**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

        Notes

        ****Developer notes.**** The canonical label is **rebuilt** from the `kind`
        and `ordinal` groups rather than repaired in place, so whatever a
        model did to the separator and the delimiters cannot reach the result.
        That is why admitting a new rewrite shape to
        [`lenient_pattern`](#scikitplot.cleanprompt.TagStyle.lenient_pattern "scikitplot.cleanprompt.TagStyle.lenient_pattern") needs no change here.

        Examples

        Try it in your browser!
        ```
        >>> TagStyle().normalize("[email_1]")
        '[EMAIL-1]'
        >>> TagStyle().normalize(r"[email\_1]")
        '[EMAIL-1]'
        >>> TagStyle().normalize("not a label") is None
        True

        ```
        Go BackOpen In Tab

    pattern()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_policy.py#L254)[#](#scikitplot.cleanprompt.TagStyle.pattern "Link to this definition")
    :   Return the compiled recogniser for labels of this grammar.

        Returns:
        :   re.Pattern
            :   A pattern with two named groups, `kind` and `ordinal`, matching
                any label this style can render.

        Return type:
        :   [**Pattern**](https://docs.python.org/3/library/re.html#re.Pattern "(in Python v3.15)")

        Notes

        ****Developer notes.**** Restoration scans with this pattern and then does a
        dictionary lookup, instead of replacing each known label in turn. That
        is a single left-to-right pass whose cost is independent of the number
        of entries, and — more importantly — it cannot let one label’s
        replacement text be re-matched as another label.

    prefix: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '['[#](#scikitplot.cleanprompt.TagStyle.prefix "Link to this definition")

    render(**kind**, **ordinal**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_policy.py#L214)[#](#scikitplot.cleanprompt.TagStyle.render "Link to this definition")
    :   Render one placeholder label.

        Parameters:
        :   ****kind****str
            :   Category, for example `"email"`.

            ****ordinal****int
            :   1-based index within the category.

        Returns:
        :   str
            :   The label, including delimiters.

        Raises:
        :   PolicyError
            :   If `kind` is empty, contains a character reserved by the
                placeholder grammar, or `ordinal` is not positive.

        Parameters:
        :   * ****kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****ordinal**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    separator: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = '-'[#](#scikitplot.cleanprompt.TagStyle.separator "Link to this definition")

    style: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'placeholder'[#](#scikitplot.cleanprompt.TagStyle.style "Link to this definition")

    suffix: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ']'[#](#scikitplot.cleanprompt.TagStyle.suffix "Link to this definition")

    surrogate\_set: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.TagStyle.surrogate_set "Link to this definition")

    surrogates: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.TagStyle.surrogates "Link to this definition")

    uppercase\_kind: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cleanprompt.TagStyle.uppercase_kind "Link to this definition")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](../../auto_examples/cleanprompt/plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](../../auto_examples/cleanprompt/plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases