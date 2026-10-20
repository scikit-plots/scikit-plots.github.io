# DEFAULT\_TAG\_STYLE[#](#default-tag-style "Link to this heading")

scikitplot.cleanprompt.DEFAULT\_TAG\_STYLE = TagStyle(prefix='[', suffix=']', separator='-', uppercase\_kind=True, style='placeholder', surrogates=None)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_policy.py#L)[#](#scikitplot.cleanprompt.DEFAULT_TAG_STYLE "Link to this definition")
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