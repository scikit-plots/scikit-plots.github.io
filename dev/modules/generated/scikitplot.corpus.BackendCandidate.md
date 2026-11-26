# BackendCandidate[#](#backendcandidate "Link to this heading")

class scikitplot.corpus.BackendCandidate(**name**, **run**, **accept=<function \_accept\_any>**, **fallback\_exceptions=(<class 'Exception'>**, **)**, **failure\_level=30**, **miss\_level=10**, **degrades\_on\_failure=True**, **capability=None**, **requires\_network=False**, **may\_download=False**, **offline\_capable=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_backends.py#L318)[#](#scikitplot.corpus.BackendCandidate "Link to this definition")
:   One lazy backend attempt.

    Parameters:
    :   ****name****str
        :   Stable backend identifier used in logs and diagnostics.

        ****run****callable
        :   Zero-argument callable that performs the backend work. Third-party
            imports should remain inside this callable.

        ****accept****callable, optional
        :   Predicate deciding whether a returned value is usable. Returning
            `False` is a **miss**, not a failure, and advances to the next backend.
            The default accepts every returned value, including `None` and empty
            containers.

        ****fallback\_exceptions****tuple of exception classes, optional
        :   Exceptions that mean “this backend could not serve the request; try the
            next one”. Exceptions outside this tuple propagate immediately.
            Defaults to ordinary [`Exception`](https://docs.python.org/3/builtins/exceptions.html#Exception "(in Python v3.15)"), intentionally excluding
            `KeyboardInterrupt` and `SystemExit`.

        ****failure\_level****int, optional
        :   Logging level for backend exceptions. Default: `logging.WARNING`.

        ****miss\_level****int, optional
        :   Logging level when `accept` rejects a normal return value. Default:
            `logging.DEBUG`.

        ****degrades\_on\_failure****bool, optional
        :   Whether failure of this preferred backend makes a later successful
            fallback `DEGRADED`. Set `False` when absence/failure is an
            expected capability probe and the fallback is semantically equivalent.

        ****capability****str or None, optional
        :   Capability-registry key used for readiness preflight and provenance.

        ****requires\_network****bool, optional
        :   Whether normal execution requires network access.

        ****may\_download****bool, optional
        :   Whether first use may need to download assets. This is a risk/property
            flag, not proof that a download is needed for the current request.

        ****offline\_capable****bool, optional
        :   Whether the candidate can **enforce** local-only execution when policy
            forbids downloads/network. Such a candidate may be attempted when
            asset readiness is `UNKNOWN`; its runner must then select a local-only
            mode rather than silently contacting the network.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****run**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****]****,** **\_T****]**)
        * ****accept**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[****\_T****]****,** [**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")**]**)
        * ****fallback\_exceptions**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")**[**[**BaseException**](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)")**]****,** **...****]**)
        * ****failure\_level**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****miss\_level**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****degrades\_on\_failure**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****capability**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****requires\_network**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****may\_download**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****offline\_capable**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    accept()[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_backends.py#L59)[#](#scikitplot.corpus.BackendCandidate.accept "Link to this definition")
    :   Parameters:
        :   ****\_value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    capability: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.BackendCandidate.capability "Link to this definition")

    degrades\_on\_failure: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.BackendCandidate.degrades_on_failure "Link to this definition")

    failure\_level: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 30[#](#scikitplot.corpus.BackendCandidate.failure_level "Link to this definition")

    fallback\_exceptions: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")[[BaseException](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)")], ...] = (<class 'Exception'>,)[#](#scikitplot.corpus.BackendCandidate.fallback_exceptions "Link to this definition")

    may\_download: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BackendCandidate.may_download "Link to this definition")

    miss\_level: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 10[#](#scikitplot.corpus.BackendCandidate.miss_level "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_backends.py#L318)[#](#scikitplot.corpus.BackendCandidate.name "Link to this definition")

    offline\_capable: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BackendCandidate.offline_capable "Link to this definition")

    requires\_network: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.BackendCandidate.requires_network "Link to this definition")

    run: [Callable](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")[[], \_T][[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/corpus/_backends.py#L318)[#](#scikitplot.corpus.BackendCandidate.run "Link to this definition")