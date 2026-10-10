# resolve\_engine[#](#resolve-engine "Link to this heading")

scikitplot.cleanprompt.resolve\_engine(**mode='auto'**, **language='en'**, **model=None**, **size='sm'**, **check\_assets=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_engines.py#L712)[#](#scikitplot.cleanprompt.resolve_engine "Link to this definition")
:   Resolve an engine mode into the engines that will actually run.

    Parameters:
    :   ****mode****str, default=’auto’
        :   One of [`ENGINE_MODES`](scikitplot.cleanprompt.ENGINE_MODES.html#scikitplot.cleanprompt.ENGINE_MODES "scikitplot.cleanprompt.ENGINE_MODES").

        ****language****str, default=’en’
        :   Language code, used to rule out engines that cannot handle it.

        ****model****str, optional
        :   Explicit spaCy model, used when judging whether spaCy is ready.

        ****size****str, default=’sm’
        :   Preferred spaCy model size, used the same way.

        ****check\_assets****bool, default=False
        :   Also check NLTK’s data packages when `auto` considers NLTK. See
            `engine_readiness`.

    Returns:
    :   tuple of str
        :   Engine names to run, possibly empty.

    Raises:
    :   PolicyError
        :   If `mode` is not a known mode.

    Parameters:
    :   * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****check\_assets**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    Notes

    ****Developer notes.**** `auto` resolves by **readiness**, not by presence:
    an engine whose package is absent, broken, unable to read the language or
    missing its data is skipped, because it would detect nothing either way.
    Before `CP-093` it resolved by package presence alone, so a machine with
    spaCy installed and no model chose spaCy over a working NLTK and then
    failed on the first sentence.

    An explicitly named engine is ****not**** silently dropped when it is not
    ready — the caller asked for it by name, and quietly running without it
    would be the silent degradation this submodule exists to prevent. It is
    returned; [`build_detectors`](scikitplot.cleanprompt.build_detectors.html#scikitplot.cleanprompt.build_detectors "scikitplot.cleanprompt.build_detectors") with `required=True` refuses it with
    its own remedy, and without `required` the detector raises on first use.

    Examples

    Try it in your browser!
    ```
    >>> resolve_engine("none")
    ()
    >>> resolve_engine("nltk", "en")
    ('nltk',)
    >>> resolve_engine("nltk", "de")
    ('nltk',)

    ```
    Go BackOpen In Tab