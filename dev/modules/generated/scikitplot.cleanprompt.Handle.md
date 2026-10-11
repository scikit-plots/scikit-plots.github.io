# Handle[#](#handle "Link to this heading")

class scikitplot.cleanprompt.Handle(**vault**, **policy**, **entries=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_api.py#L138)[#](#scikitplot.cleanprompt.Handle "Link to this definition")
:   Everything needed to decode a reply. ****Holds the removed values****.

    Parameters:
    :   ****vault****Vault
        :   Label-to-value mapping.

        ****policy****RedactionPolicy
        :   The policy that produced the labels; supplies the placeholder grammar.

        ****entries****tuple of Entry
        :   Ordered record of what was replaced, used to seed a following turn.

    Parameters:
    :   * ****vault**** ([**Vault**](scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt._vault.Vault"))
        * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))
        * ****entries**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[****Entry****,** **...****]**)

    Notes

    ****User notes.**** Treat a handle like a password: keep it on the machine that
    created it and let it go out of scope when you are done. Printing or
    logging it discloses nothing — its representation reports counts, not
    values.

    ****Developer notes.**** Deliberately **not** a plain tuple with the safe text.
    Keeping the safe half and the unsafe half in different objects means a
    caller who serializes “the result” cannot accidentally serialize the
    secrets, which is the mistake the upstream web tier made by putting the
    mapping in a cookie.

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_api.py#L253)[#](#scikitplot.cleanprompt.Handle.clear "Link to this definition")
    :   Drop every value this handle holds.

        Return type:
        :   None

    entries: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[Entry, ...] = ()[#](#scikitplot.cleanprompt.Handle.entries "Link to this definition")

    export()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_api.py#L181)[#](#scikitplot.cleanprompt.Handle.export "Link to this definition")
    :   Return a JSON-safe document containing the values.

        Returns:
        :   dict
            :   `{"grammar": ..., "policy": ..., "entries": {label: value}}`.

        Raises:
        :   PolicyError
            :   If the vault has been cleared.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

        Notes

        ****User notes.**** This is the deliberate, named way to move a handle
        across a process boundary — a web request, a queue, a subprocess. It
        contains the removed values in clear text. Nothing in this submodule
        calls it implicitly.

    property labels: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.cleanprompt.Handle.labels "Link to this definition")
    :   Every placeholder issued. Labels are not secrets.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    classmethod load(**document**, **policy=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_api.py#L208)[#](#scikitplot.cleanprompt.Handle.load "Link to this definition")
    :   Rebuild a handle from [`export`](#scikitplot.cleanprompt.Handle.export "scikitplot.cleanprompt.Handle.export") output.

        Parameters:
        :   ****document****mapping
            :   The exported document.

            ****policy****RedactionPolicy, optional
            :   Policy to decode under. Defaults to
                `DEFAULT_POLICY`.

        Returns:
        :   Handle
            :   A handle with no entry history, which is enough to decode but not
                to seed a following turn.

        Raises:
        :   PolicyError
            :   If the document is malformed, or its grammar does not match
                `policy`.

        Parameters:
        :   * ****document**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy") **|** **None**)

        Return type:
        :   [**Handle**](#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt._api.Handle")

    policy: [RedactionPolicy](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_api.py#L138)[#](#scikitplot.cleanprompt.Handle.policy "Link to this definition")

    vault: [Vault](scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt._vault.Vault")[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/cleanprompt/_api.py#L138)[#](#scikitplot.cleanprompt.Handle.vault "Link to this definition")