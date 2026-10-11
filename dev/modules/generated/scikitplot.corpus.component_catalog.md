# component\_catalog[#](#component-catalog "Link to this heading")

scikitplot.corpus.component\_catalog()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_catalog.py#L360)[#](#scikitplot.corpus.component_catalog "Link to this definition")
:   Build a snapshot of every registered component.

    Returns:
    :   ComponentCatalog

    Return type:
    :   [**ComponentCatalog**](scikitplot.corpus.ComponentCatalog.html#scikitplot.corpus.ComponentCatalog "scikitplot.corpus._catalog.ComponentCatalog")

    Notes

    Never raises. A registry that cannot be imported contributes nothing rather
    than failing the whole catalog, so a partially-installed environment can
    still ask what it has – but it is recorded as broken rather than as empty,
    and [`ComponentCatalog.discovery_failures`](scikitplot.corpus.ComponentCatalog.html#scikitplot.corpus.ComponentCatalog.discovery_failures "scikitplot.corpus.ComponentCatalog.discovery_failures") returns it. A source that
    could not be consulted is not an answer about components.

    Examples

    Try it in your browser!
    ```
    >>> catalog = component_catalog()
    >>> "index" in catalog.categories()
    True

    ```
    Go BackOpen In Tab