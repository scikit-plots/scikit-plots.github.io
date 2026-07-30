# registry[#](#registry "Link to this heading")

scikitplot.corpus.registry = ComponentRegistry(chunkers=0, filters=0, readers=0, normalizers=0)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d0ea3951/scikitplot/corpus/_registry/_registry.py#L)[#](#scikitplot.corpus.registry "Link to this definition")
:   Central look-up table for corpus pipeline components.

    Stores class references (not instances) for four component types:
    chunkers, filters, readers, and normalizers. Callers retrieve a class
    and instantiate it with their own parameters.

    Notes

    The module-level `registry` singleton is pre-populated with all
    built-in components via `register_builtins`. Third-party
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