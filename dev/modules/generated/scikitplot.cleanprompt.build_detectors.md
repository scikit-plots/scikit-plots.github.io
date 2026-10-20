# build\_detectors[#](#build-detectors "Link to this heading")

scikitplot.cleanprompt.build\_detectors(**mode='auto'**, **language='en'**, **model=None**, **labels=frozenset({'EVENT', 'FAC', 'GPE', 'LANGUAGE', 'LAW', 'LOC', 'NORP', 'ORG', 'PERSON', 'PRODUCT', 'WORK\_OF\_ART'})**, **size='sm'**, **required=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/cleanprompt/_engines.py#L920)[#](#scikitplot.cleanprompt.build_detectors "Link to this definition")
:   Construct the detectors for an engine mode.

    Parameters:
    :   ****mode****str, default=’auto’
        :   One of [`ENGINE_MODES`](scikitplot.cleanprompt.ENGINE_MODES.html#scikitplot.cleanprompt.ENGINE_MODES "scikitplot.cleanprompt.ENGINE_MODES").

        ****language****str, default=’en’
        :   Language code.

        ****model****str, optional
        :   Explicit spaCy model name, overriding language-based resolution.

        ****labels****frozenset of str, optional
        :   Canonical labels to redact. `None` redacts every label reported.

        ****size****str, default=’sm’
        :   Preferred spaCy model size.

        ****required****bool, default=False
        :   Whether the caller explicitly asked for entity detection. When true,
            every engine that will run must be ready, data included, or this
            raises. See the notes.

    Returns:
    :   list of Detector
        :   Constructed detectors, in engine priority order. Construction loads no
            model: each detector loads its engine on first use.

    Raises:
    :   PolicyError
        :   If `mode` is unknown.

        CapabilityError
        :   If `required` is true and the request cannot be met: `auto` found
            no ready engine, or a named engine (or either of `both`) is not
            ready. `mode="none"` is exempt: it is an explicit instruction to run
            no engine.

    Parameters:
    :   * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****labels**** ([**frozenset**](https://docs.python.org/3/builtins/stdtypes.html#frozenset "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****required**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[Detector](scikitplot.cleanprompt.Detector.html#scikitplot.cleanprompt.Detector "scikitplot.cleanprompt.Detector")]

    Notes

    ****Developer notes.**** Without `required` nothing here imports spaCy or
    NLTK, which is what keeps `--help` free of a multi-second load. With
    `required` NLTK may be imported to check its data — only when NLTK is
    about to run, so the import is paid once and early rather than once and
    late.

    ****Why ``required`` exists.**** `auto` degrades by design: it is the default,
    and a default that refused to run on a base installation would make the
    base tier unusable. But `--ner` is not a default, it is a request. With
    `auto` resolving to nothing, honouring that request by adding no detector
    and exiting successfully tells a user their text was scanned for names when
    nothing looked (`CP-024`). And a request for an engine that is installed
    but has no data must fail **here**, with the remedy, not at the first
    sentence — otherwise `doctor`, which builds through this function too,
    calls the configuration healthy (`CP-093`).

    This lives here rather than in each caller because there are four callers
    (the command line, [`encode`](scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode"), the file
    runtime and the web app) and a fifth would make the same omission. The web
    app built its own spaCy detector until `CP-094` and ignored the engine,
    language and model size it was given.

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle