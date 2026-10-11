# SessionStore[#](#sessionstore "Link to this heading")

class scikitplot.cleanprompt.SessionStore(**ttl\_seconds=3600**, **max\_sessions=256**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_app.py#L79)[#](#scikitplot.cleanprompt.SessionStore "Link to this definition")
:   Bounded, expiring, server-side store of vaults.

    Parameters:
    :   ****ttl\_seconds****int, default=3600
        :   How long a vault is retained after its last use.

        ****max\_sessions****int, default=256
        :   Most sessions retained. When full, the least recently used session is
            evicted and its vault cleared.

    Raises:
    :   PolicyError
        :   If a bound is not a positive integer.

    Parameters:
    :   * ****ttl\_seconds**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****max\_sessions**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

    Notes

    ****Developer notes.**** Both bounds exist because this store holds personal
    data indefinitely otherwise: a long-running local app would accumulate every
    vault every visitor ever created. Eviction calls
    `clear`, so an evicted vault stops
    referencing its secrets rather than merely becoming unreachable.

    A [`threading.Lock`](https://docs.python.org/3/library/threading.html#threading.Lock "(in Python v3.15)") guards the mapping because a Flask development
    server is threaded by default. The lock is held only for dictionary
    operations, never across a redaction.

    Tokens come from [`secrets.token_urlsafe`](https://docs.python.org/3/library/secrets.html#secrets.token_urlsafe "(in Python v3.15)"), so they are unguessable;
    a session identifier is the only thing standing between one browser tab and
    another’s vault.

    Examples

    Try it in your browser!
    ```
    >>> store = SessionStore(ttl_seconds=60, max_sessions=4)
    >>> token = store.put(Vault({"[EMAIL-1]": "a@b.co"}))
    >>> store.get(token)["[EMAIL-1]"]
    'a@b.co'

    ```
    Go BackOpen In Tab

    drop(**token**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_app.py#L193)[#](#scikitplot.cleanprompt.SessionStore.drop "Link to this definition")
    :   Remove and clear the vault for `token`, if present.

        Parameters:
        :   ****token**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   None

    get(**token**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_app.py#L169)[#](#scikitplot.cleanprompt.SessionStore.get "Link to this definition")
    :   Return the vault for `token`, refreshing its expiry.

        Parameters:
        :   ****token****str or None
            :   The token from the session cookie.

        Returns:
        :   Vault or None
            :   The vault, or `None` when the token is unknown or expired.

        Parameters:
        :   ****token**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Vault**](scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt._vault.Vault") | None

    put(**vault**, **token=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_app.py#L140)[#](#scikitplot.cleanprompt.SessionStore.put "Link to this definition")
    :   Store `vault` and return its token.

        Parameters:
        :   ****vault****Vault
            :   The vault to retain.

            ****token****str, optional
            :   Reuse an existing token, replacing its vault. A replaced vault is
                cleared.

        Returns:
        :   str
            :   The token identifying this vault.

        Parameters:
        :   * ****vault**** ([**Vault**](scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt._vault.Vault"))
            * ****token**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")