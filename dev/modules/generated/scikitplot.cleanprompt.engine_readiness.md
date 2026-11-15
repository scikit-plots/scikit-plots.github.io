# engine\_readiness[#](#engine-readiness "Link to this heading")

scikitplot.cleanprompt.engine\_readiness(**name**, **language='en'**, **model=None**, **size='sm'**, **check\_assets=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_engines.py#L535)[#](#scikitplot.cleanprompt.engine_readiness "Link to this definition")
:   Decide whether one engine can run for a language, and how to fix it if not.

    Parameters:
    :   ****name****str
        :   `"spacy"` or `"nltk"`.

        ****language****str, default=’en’
        :   Language code.

        ****model****str, optional
        :   Explicit spaCy model, overriding `language` and `size`.

        ****size****str, default=’sm’
        :   Preferred spaCy model size.

        ****check\_assets****bool, default=False
        :   Also check NLTK’s data packages, which imports NLTK. spaCy’s model is
            always checked, because that check imports nothing.

    Returns:
    :   EngineReadiness
        :   The decision, its reason and its remedy.

    Raises:
    :   PolicyError
        :   If `name` is not a known engine, or `size` is not a known size.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****check\_assets**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Return type:
    :   [**EngineReadiness**](scikitplot.cleanprompt.EngineReadiness.html#scikitplot.cleanprompt.EngineReadiness "scikitplot.cleanprompt._engines.EngineReadiness")

    Notes

    ****Developer notes — the order of the checks is the order of the remedies.****
    Language first, because no installation fixes an engine that cannot read
    the language. Then the package, because a model cannot be downloaded into
    a library that is not there. Then the data. The first failure decides the
    status and the remedy, so a user is told the next step rather than all of
    them at once.

    This is `CP-093`. `doctor --ner` reported entity detection as active
    on a machine with spaCy installed and no model, and the next `inspect
    --ner` failed on the missing model; the same for NLTK without its data.
    Both decisions read the package and never the data. A diagnosis that
    disagrees with the run it describes is worse than none, because the run is
    where the user finds out — after deciding the text was safe to send.

    Examples

    Try it in your browser!
    ```
    >>> engine_readiness("nltk", "de").reason
    "nltk does not support language 'de'; it handles en"

    ```
    Go BackOpen In Tab