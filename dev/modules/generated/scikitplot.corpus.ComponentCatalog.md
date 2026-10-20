# ComponentCatalog[#](#componentcatalog "Link to this heading")

class scikitplot.corpus.ComponentCatalog(**specs=()**, **\***, **outcomes=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L173)[#](#scikitplot.corpus.ComponentCatalog "Link to this definition")
:   An immutable snapshot of every registered component.

    Parameters:
    :   ****specs****iterable of ComponentSpec
        :   The collected specs.

    Parameters:
    :   * ****specs**** (**Any**)
        * ****outcomes**** (**Any**)

    Notes

    A snapshot, not a live proxy: building it walks the registries once. Call
    [`component_catalog`](scikitplot.corpus.component_catalog.html#scikitplot.corpus.component_catalog "scikitplot.corpus.component_catalog") again after registering something new.

    available(**category=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L239)[#](#scikitplot.corpus.ComponentCatalog.available "Link to this definition")
    :   Return only components that are usable now.

        Parameters:
        :   ****category**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ComponentSpec**](scikitplot.corpus.ComponentSpec.html#scikitplot.corpus.ComponentSpec "scikitplot.corpus._catalog.ComponentSpec")]

    categories()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L217)[#](#scikitplot.corpus.ComponentCatalog.categories "Link to this definition")
    :   Return the sorted category names present.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    discovery\_failures()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L196)[#](#scikitplot.corpus.ComponentCatalog.discovery_failures "Link to this definition")
    :   Sources that could not be consulted.

        Returns:
        :   list of DiscoveryOutcome
            :   Empty when every source answered. A non-empty result means the
                catalog is incomplete for a reason worth acting on, which an empty
                category alone could never tell you.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**DiscoveryOutcome**](scikitplot.corpus.DiscoveryOutcome.html#scikitplot.corpus.DiscoveryOutcome "scikitplot.corpus._catalog.DiscoveryOutcome")]

    get(**category**, **name**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L230)[#](#scikitplot.corpus.ComponentCatalog.get "Link to this definition")
    :   Return one spec, or `None` if it is not registered.

        Parameters:
        :   * ****category**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**ComponentSpec**](scikitplot.corpus.ComponentSpec.html#scikitplot.corpus.ComponentSpec "scikitplot.corpus._catalog.ComponentSpec") | None

    list(**category=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L221)[#](#scikitplot.corpus.ComponentCatalog.list "Link to this definition")
    :   Return specs, optionally filtered to one category.

        Parameters:
        :   ****category**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ComponentSpec**](scikitplot.corpus.ComponentSpec.html#scikitplot.corpus.ComponentSpec "scikitplot.corpus._catalog.ComponentSpec")]

    property outcomes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[DiscoveryOutcome](scikitplot.corpus.DiscoveryOutcome.html#scikitplot.corpus.DiscoveryOutcome "scikitplot.corpus._catalog.DiscoveryOutcome"), ...][#](#scikitplot.corpus.ComponentCatalog.outcomes "Link to this definition")
    :   What happened when each source was consulted.

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_catalog.py#L243)[#](#scikitplot.corpus.ComponentCatalog.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping grouped by category.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]