# encrypt\_mapping[#](#encrypt-mapping "Link to this heading")

scikitplot.cleanprompt.encrypt\_mapping(**mapping**, **key**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cleanprompt/_crypto.py#L114)[#](#scikitplot.cleanprompt.encrypt_mapping "Link to this definition")
:   Encrypt every value of `mapping`, leaving the labels in the clear.

    Parameters:
    :   ****mapping****mapping of str to str
        :   Label-to-secret pairs.

        ****key****bytes
        :   A Fernet key.

    Returns:
    :   dict of str to str
        :   The same labels, mapped to base64 ciphertext.

    Raises:
    :   CapabilityError
        :   If the `crypto` tier is unavailable.

        CleanPromptError
        :   If the key is malformed.

    Parameters:
    :   * ****mapping**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****key**** ([**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)"))

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> key = new_key().encode()
    >>> box = encrypt_mapping({"[EMAIL-1]": "a@b.co"}, key)
    >>> decrypt_mapping(box, key)
    {'[EMAIL-1]': 'a@b.co'}

    ```
    Go BackOpen In Tab