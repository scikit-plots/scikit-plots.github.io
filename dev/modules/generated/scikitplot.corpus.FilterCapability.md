# FilterCapability[#](#filtercapability "Link to this heading")

class scikitplot.corpus.FilterCapability(**supported=frozenset({})**, **emulated=frozenset({})**, **rejected=frozenset({})**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L331)[#](#scikitplot.corpus.FilterCapability "Link to this definition")
:   A backend’s declared answer for the operators in one expression.

    Parameters:
    :   ****supported****frozenset of str
        :   Executed natively.

        ****emulated****frozenset of str
        :   Executed by a fallback path with equivalent semantics.

        ****rejected****frozenset of str
        :   Refused; the query does not run.

    Parameters:
    :   * ****supported**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****emulated**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
        * ****rejected**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

    Notes

    ****Developer.**** Every operator in an expression must appear in exactly one
    set. [`for_expression`](#scikitplot.corpus.FilterCapability.for_expression "scikitplot.corpus.FilterCapability.for_expression") enforces that, so “silently ignored” is not a
    reachable state rather than merely a discouraged one.

    emulated: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.corpus.FilterCapability.emulated "Link to this definition")

    classmethod for\_expression(**expression**, **\***, **native=()**, **emulated=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L355)[#](#scikitplot.corpus.FilterCapability.for_expression "Link to this definition")
    :   Classify every operator in `expression`.

        Parameters:
        :   ****expression****Filter
            :   Filter

            ****native****iterable of str, optional
            :   Operators this backend executes natively.

            ****emulated****iterable of str, optional
            :   Operators it answers by a fallback path.

        Returns:
        :   FilterCapability
            :   Anything neither native nor emulated is `rejected` – the default
                is refusal, never silent omission.

        Parameters:
        :   * ****expression**** ([**Filter**](scikitplot.corpus.Filter.html#scikitplot.corpus.Filter "scikitplot.corpus._filters.Filter"))
            * ****native**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****emulated**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [**FilterCapability**](#scikitplot.corpus.FilterCapability "scikitplot.corpus._filters.FilterCapability")

    property ok: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot.corpus.FilterCapability.ok "Link to this definition")
    :   Whether every operator can be answered.

    raise\_if\_rejected()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L394)[#](#scikitplot.corpus.FilterCapability.raise_if_rejected "Link to this definition")
    :   Raise if any operator was refused.

        Raises:
        :   UnsupportedOperatorError
            :   Naming the refused operators.

        Return type:
        :   None

    rejected: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.corpus.FilterCapability.rejected "Link to this definition")

    supported: [frozenset](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")] = frozenset({})[#](#scikitplot.corpus.FilterCapability.supported "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/corpus/_filters.py#L410)[#](#scikitplot.corpus.FilterCapability.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]