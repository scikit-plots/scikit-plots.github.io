# EngineReadiness[#](#enginereadiness "Link to this heading")

class scikitplot.cleanprompt.EngineReadiness(**name**, **installed**, **language\_supported**, **assets\_checked**, **assets\_ready**, **ready**, **status**, **reason**, **remedy**, **model=None**, **missing=()**, **version=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness "Link to this definition")
:   Whether one engine can run here, now, and if not, the one step that fixes it.

    Parameters:
    :   ****name****str
        :   Engine name, as used by `--ner-engine`.

        ****installed****bool
        :   Whether the engine’s capability tier reports `AVAILABLE`: the
            package is installed, inside the declared range, and importable
            according to its metadata.

        ****language\_supported****bool
        :   Whether the engine handles the language asked for.

        ****assets\_checked****bool
        :   Whether the engine’s data was looked at. `False` only for NLTK when
            the caller chose not to import it (see the notes).

        ****assets\_ready****bool or None
        :   Whether the model or data packages are present; `None` when they
            were not checked.

        ****ready****bool
        :   `installed and language_supported and assets_ready is not False` —
            nothing known stands in the way of running.

        ****status****str
        :   A [`CapabilityStatus`](scikitplot.cleanprompt.CapabilityStatus.html#scikitplot.cleanprompt.CapabilityStatus "scikitplot.cleanprompt.CapabilityStatus") value describing
            the first obstacle, or `"AVAILABLE"`.

        ****reason****str
        :   One sentence saying what was found.

        ****remedy****str
        :   The command or flag that removes the first obstacle; empty when ready.

        ****model****str or None
        :   For spaCy, the model this configuration loads; otherwise `None`.

        ****missing****tuple of str
        :   For NLTK, the data packages that were not found.

        ****version****str or None
        :   The installed distribution version, when known.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****installed**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****language\_supported**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****assets\_checked**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****assets\_ready**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****ready**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****status**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****reason**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****remedy**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****missing**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Notes

    ****User notes.**** Read `ready` to decide, and `remedy` to act. `reason`
    is for a person: it says which of the three conditions failed.

    ****Developer notes — why NLTK’s data may be unchecked.**** spaCy models are
    ordinary installed distributions, so their presence is read from metadata
    without importing anything. NLTK’s data packages live in directories that
    only `nltk.data.find` can resolve — the search path depends on
    environment variables, the interpreter prefix and the platform, and
    copying that logic here would be a guess about NLTK’s internals. So the
    check imports NLTK, and it runs only where the caller is about to load
    NLTK anyway: an explicit request, `doctor`, or the web app with entity
    detection switched on. Everywhere else the field says `None` rather than
    pretending to know.

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L450)[#](#scikitplot.cleanprompt.EngineReadiness.as_dict "Link to this definition")
    :   Return a JSON-safe dictionary.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    assets\_checked: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.assets_checked "Link to this definition")

    assets\_ready: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.assets_ready "Link to this definition")

    installed: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.installed "Link to this definition")

    language\_supported: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.language_supported "Link to this definition")

    missing: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.EngineReadiness.missing "Link to this definition")

    model: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.EngineReadiness.model "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.name "Link to this definition")

    ready: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.ready "Link to this definition")

    reason: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.reason "Link to this definition")

    remedy: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.remedy "Link to this definition")

    status: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/cleanprompt/_engines.py#L382)[#](#scikitplot.cleanprompt.EngineReadiness.status "Link to this definition")

    version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.EngineReadiness.version "Link to this definition")