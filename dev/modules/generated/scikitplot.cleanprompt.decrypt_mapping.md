# decrypt\_mapping[#](#decrypt-mapping "Link to this heading")

scikitplot.cleanprompt.decrypt\_mapping(**mapping**, **key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_crypto.py#L151)[#](#scikitplot.cleanprompt.decrypt_mapping "Link to this definition")
:   Decrypt a mapping produced by [`encrypt_mapping`](scikitplot.cleanprompt.encrypt_mapping.html#scikitplot.cleanprompt.encrypt_mapping "scikitplot.cleanprompt.encrypt_mapping").

    Parameters:
    :   ****mapping****object
        :   The stored mapping. Validated rather than trusted.

        ****key****bytes
        :   The Fernet key used to encrypt it.

    Returns:
    :   dict of str to str
        :   Label-to-secret pairs.

    Raises:
    :   CapabilityError
        :   If the `crypto` tier is unavailable.

        CleanPromptError
        :   If the document is malformed, or a value fails authentication.

    Parameters:
    :   * ****mapping**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****key**** ([**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Notes

    ****Developer notes.**** A failed decryption names the label, not the value, and
    says the ciphertext failed authentication rather than guessing why. The two
    causes — wrong key, tampered file — are indistinguishable from here by
    design, and claiming to know which would be a guess presented as a fact.