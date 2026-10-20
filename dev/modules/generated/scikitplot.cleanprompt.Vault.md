# Vault[#](#vault "Link to this heading")

class scikitplot.cleanprompt.Vault(**mapping=None**, **grammar\_fingerprint=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L59)[#](#scikitplot.cleanprompt.Vault "Link to this definition")
:   A closed mapping from placeholder label to original secret.

    Parameters:
    :   ****mapping****mapping of str to str, optional
        :   Initial label-to-secret pairs. Copied; the vault does not alias the
            caller’s dictionary.

        ****grammar\_fingerprint****str, optional
        :   Digest of the **placeholder grammar** that issued these labels — the
            `fingerprint`, not the
            whole policy’s. When set, restoration verifies it.

    Raises:
    :   PolicyError
        :   If a label is empty or duplicated with a conflicting value.

    Parameters:
    :   * ****mapping**** (**Mapping****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****grammar\_fingerprint**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****Developer notes.**** The vault is append-only through [`add`](#scikitplot.cleanprompt.Vault.add "scikitplot.cleanprompt.Vault.add") and is not
    thread-safe for concurrent writes. It does not need to be: one vault belongs
    to one redaction pass, which is single-threaded by construction. Sharing one
    vault across documents is the very defect this rewrite retires, so no
    locking is provided that would make it look supported.

    Examples

    Try it in your browser!
    ```
    >>> vault = Vault({"[EMAIL-1]": "a@b.c"})
    >>> vault["[EMAIL-1]"]
    'a@b.c'
    >>> repr(vault)
    'Vault(entries=1, closed=False)'
    >>> vault.clear()
    >>> len(vault)
    0

    ```
    Go BackOpen In Tab

    add(**label**, **secret**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L114)[#](#scikitplot.cleanprompt.Vault.add "Link to this definition")
    :   Record one label-to-secret pair.

        Parameters:
        :   ****label****str
            :   The rendered placeholder, including delimiters.

            ****secret****str
            :   The original text the label stands for.

        Raises:
        :   PolicyError
            :   If `label` is empty, if the vault is closed, or if `label` is
                already present with a different secret.

        Parameters:
        :   * ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****secret**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   None

        Notes

        ****Developer notes.**** Re-adding an identical pair is a no-op rather than
        an error, because the engine assigns one label per distinct value and
        may legitimately confirm an existing pair. A **conflicting** re-add means
        two different secrets were given the same label, which would make
        restoration ambiguous; that is always a bug and always raises.

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L251)[#](#scikitplot.cleanprompt.Vault.clear "Link to this definition")
    :   Drop every secret and close the vault.

        Notes

        ****Developer notes.**** Values are overwritten before deletion so that any
        surviving reference to the dictionary observes no plaintext. This does
        not and cannot guarantee that the interpreter has erased every copy of
        each string from process memory; see the module-level note.

        Return type:
        :   None

    property closed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.cleanprompt.Vault.closed "Link to this definition")
    :   Whether [`clear`](#scikitplot.cleanprompt.Vault.clear "scikitplot.cleanprompt.Vault.clear") has been called.

        Type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    export()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L226)[#](#scikitplot.cleanprompt.Vault.export "Link to this definition")
    :   Return a plain dictionary copy of the mapping, secrets included.

        Returns:
        :   dict of str to str
            :   A copy of the label-to-secret mapping.

        Raises:
        :   PolicyError
            :   If the vault has been cleared.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Notes

        ****User notes.**** This is the deliberate, named way to get the secrets out
        — for instance to persist a session on the machine that owns the data.
        Nothing in this submodule calls it implicitly, and no serializer reaches
        it by accident.

    get(**label**, **default=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L162)[#](#scikitplot.cleanprompt.Vault.get "Link to this definition")
    :   Return the secret for `label`, or `default`.

        Parameters:
        :   ****label****str
            :   The placeholder to look up.

            ****default****str, optional
            :   Returned when `label` is absent.

        Returns:
        :   str or None
            :   The stored secret, or `default`.

        Parameters:
        :   * ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****default**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | None

    property grammar\_fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[#](#scikitplot.cleanprompt.Vault.grammar_fingerprint "Link to this definition")
    :   Digest of the grammar that issued these labels.

        Type:
        :   Str or None

    items()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L207)[#](#scikitplot.cleanprompt.Vault.items "Link to this definition")
    :   Return a live view of label-to-secret pairs.

        Returns:
        :   ItemsView
            :   The mapping’s items.

        Return type:
        :   [**ItemsView**](https://docs.python.org/3/library/typing.html#typing.ItemsView "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Notes

        ****Developer notes.**** This exposes secrets and is named plainly rather
        than hidden, because restoration needs it. Prefer [`labels`](#scikitplot.cleanprompt.Vault.labels "scikitplot.cleanprompt.Vault.labels") in any
        code path that logs, renders or serializes.

    labels()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_vault.py#L196)[#](#scikitplot.cleanprompt.Vault.labels "Link to this definition")
    :   Return every label in insertion order.

        Returns:
        :   tuple of str
            :   The labels. Safe to log: labels are not secrets.

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")