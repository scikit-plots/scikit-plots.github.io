# ComponentRegistry[#](#componentregistry "Link to this heading")

class scikitplot.corpus.ComponentRegistry[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L105)[#](#scikitplot.corpus.ComponentRegistry "Link to this definition")
:   Central look-up table for corpus pipeline components.

    Stores class references (not instances) for four component types:
    chunkers, filters, readers, and normalizers. Callers retrieve a class
    and instantiate it with their own parameters.

    Notes

    The module-level `registry` singleton is pre-populated with all
    built-in components via [`register_builtins`](#scikitplot.corpus.ComponentRegistry.register_builtins "scikitplot.corpus.ComponentRegistry.register_builtins"). Third-party
    packages can register additional components after import.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._registry import registry
    >>> registry.register_builtins()
    >>> chunker = registry.build_chunker("paragraph", min_length=20)
    >>> type(chunker).__name__, chunker.config.min_length
    ('ParagraphChunker', 20)

    ```
    Go BackOpen In Tab

    build\_chunker(**name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L603)[#](#scikitplot.corpus.ComponentRegistry.build_chunker "Link to this definition")
    :   Instantiate the chunker registered under `name`.

        Parameters:
        :   ****name****str
            :   Registry key.

            ****\*\*kwargs****
            :   For a chunker registered with a config class: the config’s fields,
                plus any other keyword option the chunker’s constructor takes
                (`gensim_dictionary` for `word`, `adapter` for
                `semantic`); a name that is both goes to the config. Or
                `config=` (a ready config, `None` for the default) with only
                constructor options beside it. Without a config class: the
                constructor’s keyword arguments.

        Returns:
        :   object
            :   The chunker instance.

        Raises:
        :   KeyError
            :   If `name` is not registered.

            TypeError
            :   If a keyword is neither a config field nor a constructor option
                (the message lists both), a field is given beside `config=`, or
                `config=` is not that config type.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

        Notes

        ****Developer.**** Raw keyword arguments used to reach chunkers whose
        constructor takes only `config=`, so every named chunker raised
        `TypeError` for any option (R3-1).

        Examples

        Try it in your browser!
        ```
        >>> chunker = registry.build_chunker(
        ...     "fixed_window", window_size=50, step_size=25
        ... )
        >>> chunker.config.window_size, chunker.config.step_size
        (50, 25)

        ```
        Go BackOpen In Tab

    build\_filter(**name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L693)[#](#scikitplot.corpus.ComponentRegistry.build_filter "Link to this definition")
    :   Instantiate the filter registered under `name`.

        Parameters:
        :   ****name****str


            ****\*\*kwargs****

        Returns:
        :   FilterBase instance

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    build\_normalizer(**name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L708)[#](#scikitplot.corpus.ComponentRegistry.build_normalizer "Link to this definition")
    :   Instantiate the normalizer registered under `name`.

        Parameters:
        :   ****name****str


            ****\*\*kwargs****

        Returns:
        :   NormalizerBase instance

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    get\_chunker(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L388)[#](#scikitplot.corpus.ComponentRegistry.get_chunker "Link to this definition")
    :   Return the chunker class registered under `name`.

        Parameters:
        :   ****name****str
            :   Registry key.

        Returns:
        :   type
            :   The registered chunker class.

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")

    get\_chunker\_config(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L365)[#](#scikitplot.corpus.ComponentRegistry.get_chunker_config "Link to this definition")
    :   Return the configuration dataclass registered for chunker `name`.

        Parameters:
        :   ****name****str
            :   Registry key.

        Returns:
        :   type or None
            :   The config class, or `None` when the chunker takes keyword
                arguments directly.

        Raises:
        :   KeyError
            :   If no chunker is registered under `name`.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)") | None

    get\_filter(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L445)[#](#scikitplot.corpus.ComponentRegistry.get_filter "Link to this definition")
    :   Return the filter class registered under `name`.

        Parameters:
        :   ****name****str

        Returns:
        :   type

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")

    get\_normalizer(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L570)[#](#scikitplot.corpus.ComponentRegistry.get_normalizer "Link to this definition")
    :   Return the normalizer class registered under `name`.

        Parameters:
        :   ****name****str

        Returns:
        :   type

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")

    get\_reader(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L504)[#](#scikitplot.corpus.ComponentRegistry.get_reader "Link to this definition")
    :   Return the reader class registered under `name`.

        Parameters:
        :   ****name****str

        Returns:
        :   type

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")

    list\_chunkers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L415)[#](#scikitplot.corpus.ComponentRegistry.list_chunkers "Link to this definition")
    :   Return sorted list of registered chunker names.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    list\_filters()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L470)[#](#scikitplot.corpus.ComponentRegistry.list_filters "Link to this definition")
    :   Return sorted list of registered filter names.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    list\_normalizers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L595)[#](#scikitplot.corpus.ComponentRegistry.list_normalizers "Link to this definition")
    :   Return sorted list of registered normalizer names.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    list\_readers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L529)[#](#scikitplot.corpus.ComponentRegistry.list_readers "Link to this definition")
    :   Return sorted list of registered reader names / extensions.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    classmethod load\_from\_snapshot(**snapshot**, **\***, **allowed\_module\_prefixes='scikitplot.'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L752)[#](#scikitplot.corpus.ComponentRegistry.load_from_snapshot "Link to this definition")
    :   Reconstruct a registry from a snapshot.

        Parameters:
        :   ****snapshot****dict
            :   Snapshot created by `snapshot()`.

            ****allowed\_module\_prefixes****str | list[str] | None, default=”scikitplot.”
            :   If provided, only classes whose module starts with one of these
                prefixes are allowed. Recommended for security.

                > **Caution**
                > * ⚠: Loading arbitrary FQCN from untrusted JSON is remote code
                  execution risk.

        Returns:
        :   ComponentRegistry
            :   New registry populated from snapshot.

        Raises:
        :   ValueError
            :   If snapshot structure is invalid.

            TypeError
            :   If resolved class does not match expected base type.

        Parameters:
        :   * ****snapshot**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]**)
            * ****allowed\_module\_prefixes**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   [**ComponentRegistry**](#scikitplot.corpus.ComponentRegistry "scikitplot.corpus._registry._registry.ComponentRegistry")

    register\_builtins()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L151)[#](#scikitplot.corpus.ComponentRegistry.register_builtins "Link to this definition")
    :   Register all built-in corpus pipeline components.

        Safe to call multiple times — subsequent calls are no-ops.
        Triggers the necessary imports to populate the
        [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader") registry as well.

        Notes

        Importing `scikitplot.corpus._readers` as a side effect here
        is intentional: it populates the `DocumentReader._registry`
        extension map used by `create`.

        A name already registered is kept: a component you registered before
        this call is never replaced by the built-in of the same name (the
        builder calls this on the shared registry when a build starts).

        Return type:
        :   None

    register\_chunker(**name**, **cls**, **\***, **config=None**, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L291)[#](#scikitplot.corpus.ComponentRegistry.register_chunker "Link to this definition")
    :   Register a chunker class under `name`.

        Parameters:
        :   ****name****str
            :   Registry key (lowercase, underscore-separated). Must be
                non-empty.

            ****cls****type
            :   A class satisfying `ChunkerProtocol` (`chunk` and
                `chunk_batch`).

            ****config****type or None, optional
            :   The chunker’s configuration dataclass. When given (or declared by
                the class as `config_class`, as every built-in does),
                [`build_chunker`](#scikitplot.corpus.ComponentRegistry.build_chunker "scikitplot.corpus.ComponentRegistry.build_chunker") (and `BuilderConfig.chunker_kwargs`)
                build this config from keyword arguments and pass it as
                `cls(config=...)`; unknown keys raise. When neither, keyword
                arguments go to `cls` directly. A class declaring
                `config_class` accepts only that class or a subclass.

            ****replace****bool, optional
            :   Replace an existing registration deliberately. Default `False`.

        Raises:
        :   ValueError
            :   If `name` is empty, or already registered and `replace` is
                `False`.

            TypeError
            :   If `cls` is not a conforming class, its `chunk` cannot take
                `extra_metadata`, or `config` is not a dataclass type (or not
                the class’s declared `config_class`).

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****cls**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)"))
            * ****config**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)") **|** **None**)
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

    register\_filter(**name**, **cls**, **\***, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L423)[#](#scikitplot.corpus.ComponentRegistry.register_filter "Link to this definition")
    :   Register a filter class under `name`.

        Parameters:
        :   ****name****str


            ****cls****type
            :   Concrete class inheriting from
                [`FilterBase`](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase").

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****cls**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)"))
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

    register\_normalizer(**name**, **cls**, **\***, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L537)[#](#scikitplot.corpus.ComponentRegistry.register_normalizer "Link to this definition")
    :   Register a normalizer class under `name`.

        Parameters:
        :   ****name****str
            :   a normalizer class.

            ****cls****type
            :   Concrete class inheriting from
                `NormalizerBase`.

            ****replace****bool
            :   False

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****cls**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)"))
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

        Notes

        ****Developer.**** Checked against `NormalizerBase`, the type
        `NormalizationPipeline` accepts. `NormalizerProtocol`
        (`normalize(text)`) describes a text-level interface no built-in
        normalizer has, so the old check refused every built-in, and with it
        every snapshot round trip (R3-1).

    register\_reader(**name**, **cls**, **\***, **replace=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L478)[#](#scikitplot.corpus.ComponentRegistry.register_reader "Link to this definition")
    :   Register a reader class under `name` (typically a file extension).

        Parameters:
        :   ****name****str
            :   File extension (e.g. `\".txt\"`) or URL scheme key
                (e.g. `\":url\"`).

            ****cls****type
            :   Concrete class inheriting from
                [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

            ****replace****bool
            :   False

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****cls**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)"))
            * ****replace**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   None

    snapshot()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_registry/_registry.py#L727)[#](#scikitplot.corpus.ComponentRegistry.snapshot "Link to this definition")
    :   Return a JSON-safe snapshot of all registered components.

        Returns:
        :   dict[str, dict[str, str]]
            :   Keys: `"chunkers"`, `"chunker_configs"`, `"filters"`,
                `"readers"`, `"normalizers"`. Values: dicts mapping name to
                the fully qualified class name.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]]