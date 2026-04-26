# CustomTokenizerRegistry[#](#customtokenizerregistry "Link to this heading")

class scikitplot.corpus.CustomTokenizerRegistry(**kind**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L520)[#](#scikitplot.corpus.CustomTokenizerRegistry "Link to this definition")
:   Thread-safe(ish) module-level registry for named custom components.

    Each registry holds a `dict[str, Protocol]` accessible via module-level
    helpers ([`register_tokenizer`](scikitplot.corpus.register_tokenizer.html#scikitplot.corpus.register_tokenizer "scikitplot.corpus.register_tokenizer"), [`get_tokenizer`](scikitplot.corpus.get_tokenizer.html#scikitplot.corpus.get_tokenizer "scikitplot.corpus.get_tokenizer"), etc.).

    Raises:
    :   KeyError
        :   [`get`](#scikitplot.corpus.CustomTokenizerRegistry.get "scikitplot.corpus.CustomTokenizerRegistry.get") raises `KeyError` when the name is not registered.

    Parameters:
    :   ****kind**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Notes

    ****Developer note:**** The registry is intentionally not thread-locked.
    Registration happens at import/startup time; concurrent reads during
    inference are safe because dict lookups in CPython are atomic under the
    GIL. If you register from a worker thread, synchronize externally.

    get(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L583)[#](#scikitplot.corpus.CustomTokenizerRegistry.get "Link to this definition")
    :   Retrieve the component registered under **name**.

        Parameters:
        :   ****name****str
            :   Registry key.

        Returns:
        :   object
            :   The registered component.

        Raises:
        :   KeyError
            :   If **name** has not been registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    names()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L609)[#](#scikitplot.corpus.CustomTokenizerRegistry.names "Link to this definition")
    :   Return all registered names.

        Returns:
        :   list[str]
            :   Sorted list of registered keys.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    register(**name**, **instance**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ee15ed/scikitplot/corpus/_chunkers/_custom_tokenizer.py#L543)[#](#scikitplot.corpus.CustomTokenizerRegistry.register "Link to this definition")
    :   Register **instance** under **name**.

        Parameters:
        :   ****name****str
            :   Registry key. Must be a non-empty string.

            ****instance****object
            :   The component instance to register.

        Raises:
        :   TypeError
            :   If **name** is not a str.

            ValueError
            :   If **name** is empty.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****instance**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   None