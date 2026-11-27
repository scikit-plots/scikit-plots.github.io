# new\_key[#](#new-key "Link to this heading")

scikitplot.cleanprompt.new\_key()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/cleanprompt/_crypto.py#L88)[#](#scikitplot.cleanprompt.new_key "Link to this definition")
:   Generate a fresh vault key.

    Returns:
    :   str
        :   A URL-safe base64 Fernet key, suitable for `CLEANPROMPT_VAULT_KEY`.

    Raises:
    :   CapabilityError
        :   If the `crypto` tier is unavailable.

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****User notes.**** Store this in your secret manager, not in the repository
    and not beside the vault. Anyone holding it can read any vault it encrypted.