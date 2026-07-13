# ComponentRegistry[#](#componentregistry "Link to this heading")

class scikitplot.corpus.ComponentRegistry[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L95)[#](#scikitplot.corpus.ComponentRegistry "Link to this definition")
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
    >>> cls = registry.get_chunker("paragraph")
    >>> chunker = cls(min_chars=20)

    ```
    Go BackOpen In Tab

    build\_chunker(**name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L427)[#](#scikitplot.corpus.ComponentRegistry.build_chunker "Link to this definition")
    :   Instantiate the chunker registered under `name`.

        Parameters:
        :   ****name****str
            :   Registry key.

            ****\*\*kwargs****
            :   Constructor keyword arguments.

        Returns:
        :   ChunkerBase instance

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

        Examples

        Try it in your browser!
        ```
        >>> chunker = registry.build_chunker("paragraph", min_chars=20)

        ```
        Go BackOpen In Tab

    build\_filter(**name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L453)[#](#scikitplot.corpus.ComponentRegistry.build_filter "Link to this definition")
    :   Instantiate the filter registered under `name`.

        Parameters:
        :   ****name****str


            ****\*\*kwargs****

        Returns:
        :   FilterBase instance

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    build\_normalizer(**name**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L468)[#](#scikitplot.corpus.ComponentRegistry.build_normalizer "Link to this definition")
    :   Instantiate the normalizer registered under `name`.

        Parameters:
        :   ****name****str


            ****\*\*kwargs****

        Returns:
        :   NormalizerBase instance

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****kwargs**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    get\_chunker(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L246)[#](#scikitplot.corpus.ComponentRegistry.get_chunker "Link to this definition")
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
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")

    get\_filter(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L296)[#](#scikitplot.corpus.ComponentRegistry.get_filter "Link to this definition")
    :   Return the filter class registered under `name`.

        Parameters:
        :   ****name****str

        Returns:
        :   type

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")

    get\_normalizer(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L394)[#](#scikitplot.corpus.ComponentRegistry.get_normalizer "Link to this definition")
    :   Return the normalizer class registered under `name`.

        Parameters:
        :   ****name****str

        Returns:
        :   type

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")

    get\_reader(**name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L346)[#](#scikitplot.corpus.ComponentRegistry.get_reader "Link to this definition")
    :   Return the reader class registered under `name`.

        Parameters:
        :   ****name****str

        Returns:
        :   type

        Raises:
        :   KeyError
            :   If `name` is not registered.

        Parameters:
        :   ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   [type](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)")

    list\_chunkers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L273)[#](#scikitplot.corpus.ComponentRegistry.list_chunkers "Link to this definition")
    :   Return sorted list of registered chunker names.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    list\_filters()[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L321)[#](#scikitplot.corpus.ComponentRegistry.list_filters "Link to this definition")
    :   Return sorted list of registered filter names.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    list\_normalizers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L419)[#](#scikitplot.corpus.ComponentRegistry.list_normalizers "Link to this definition")
    :   Return sorted list of registered normalizer names.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    list\_readers()[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L371)[#](#scikitplot.corpus.ComponentRegistry.list_readers "Link to this definition")
    :   Return sorted list of registered reader names / extensions.

        Return type:
        :   [list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]

    classmethod load\_from\_snapshot(**snapshot**, **\***, **allowed\_module\_prefixes='scikitplot.'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L508)[#](#scikitplot.corpus.ComponentRegistry.load_from_snapshot "Link to this definition")
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
        :   * ****snapshot**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]****]**)
            * ****allowed\_module\_prefixes**** ([**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)

        Return type:
        :   [**ComponentRegistry**](#scikitplot.corpus.ComponentRegistry "scikitplot.corpus._registry._registry.ComponentRegistry")

    register\_builtins()[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L129)[#](#scikitplot.corpus.ComponentRegistry.register_builtins "Link to this definition")
    :   Register all built-in corpus pipeline components.

        Safe to call multiple times — subsequent calls are no-ops.
        Triggers the necessary imports to populate the
        [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader") registry as well.

        Notes

        Importing `scikitplot.corpus._readers` as a side effect here
        is intentional: it populates the `DocumentReader._registry`
        extension map used by `create`.

        Return type:
        :   None

    register\_chunker(**name**, **cls**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L215)[#](#scikitplot.corpus.ComponentRegistry.register_chunker "Link to this definition")
    :   Register a chunker class under `name`.

        Parameters:
        :   ****name****str
            :   Registry key (lowercase, underscore-separated). Must be
                non-empty.

            ****cls****type
            :   Concrete class inheriting from
                [`ChunkerBase`](scikitplot.corpus.ChunkerBase.html#scikitplot.corpus.ChunkerBase "scikitplot.corpus._base.ChunkerBase").

        Raises:
        :   ValueError
            :   If `name` is empty.

            TypeError
            :   If `cls` is not a type.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****cls**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)"))

        Return type:
        :   None

    register\_filter(**name**, **cls**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L281)[#](#scikitplot.corpus.ComponentRegistry.register_filter "Link to this definition")
    :   Register a filter class under `name`.

        Parameters:
        :   ****name****str


            ****cls****type
            :   Concrete class inheriting from
                [`FilterBase`](scikitplot.corpus.FilterBase.html#scikitplot.corpus.FilterBase "scikitplot.corpus._base.FilterBase").

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****cls**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)"))

        Return type:
        :   None

    register\_normalizer(**name**, **cls**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L379)[#](#scikitplot.corpus.ComponentRegistry.register_normalizer "Link to this definition")
    :   Register a normalizer class under `name`.

        Parameters:
        :   ****name****str


            ****cls****type
            :   Concrete class inheriting from
                `NormalizerBase`.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****cls**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)"))

        Return type:
        :   None

    register\_reader(**name**, **cls**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L329)[#](#scikitplot.corpus.ComponentRegistry.register_reader "Link to this definition")
    :   Register a reader class under `name` (typically a file extension).

        Parameters:
        :   ****name****str
            :   File extension (e.g. `\".txt\"`) or URL scheme key
                (e.g. `\":url\"`).

            ****cls****type
            :   Concrete class inheriting from
                [`DocumentReader`](scikitplot.corpus.DocumentReader.html#scikitplot.corpus.DocumentReader "scikitplot.corpus._base.DocumentReader").

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****cls**** ([**type**](https://docs.python.org/3/library/functions.html#type "(in Python v3.14)"))

        Return type:
        :   None

    snapshot()[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/corpus/_registry/_registry.py#L487)[#](#scikitplot.corpus.ComponentRegistry.snapshot "Link to this definition")
    :   Return a JSON-safe snapshot of all registered components.

        Returns:
        :   dict[str, dict[str, str]]
            :   Keys: `"chunkers"`, `"filters"`, `"readers"`,
                `"normalizers"`. Values: dicts mapping name → class qualname.

        Return type:
        :   [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")]]