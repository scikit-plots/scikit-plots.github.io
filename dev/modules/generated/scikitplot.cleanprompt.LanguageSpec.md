# LanguageSpec[#](#languagespec "Link to this heading")

class scikitplot.cleanprompt.LanguageSpec(**code**, **name**, **genre**, **sizes**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_languages.py#L70)[#](#scikitplot.cleanprompt.LanguageSpec "Link to this definition")
:   One language spaCy publishes models for.

    Parameters:
    :   ****code****str
        :   ISO 639-1 code.

        ****name****str
        :   English name of the language, for help text and reports.

        ****genre****str
        :   `"web"` or `"news"`; part of the model name.

        ****sizes****tuple of str
        :   Sizes actually published for this language.

    Parameters:
    :   * ****code**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****genre**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****sizes**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    code: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_languages.py#L70)[#](#scikitplot.cleanprompt.LanguageSpec.code "Link to this definition")

    genre: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_languages.py#L70)[#](#scikitplot.cleanprompt.LanguageSpec.genre "Link to this definition")

    model\_for(**size**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_languages.py#L92)[#](#scikitplot.cleanprompt.LanguageSpec.model_for "Link to this definition")
    :   Return the model name for `size`, falling back to the nearest.

        Parameters:
        :   ****size****str
            :   Preferred size.

        Returns:
        :   str
            :   A model name this language actually publishes.

        Parameters:
        :   ****size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

        Notes

        ****Developer notes.**** Falls back **downwards** to the largest available
        size no bigger than the request, and only upwards when nothing smaller
        exists. Asking for `lg` on a language that publishes only `sm`
        should get `sm`, not a name that does not resolve.

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_languages.py#L70)[#](#scikitplot.cleanprompt.LanguageSpec.name "Link to this definition")

    sizes: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/0ec25c01/scikitplot/cleanprompt/_languages.py#L70)[#](#scikitplot.cleanprompt.LanguageSpec.sizes "Link to this definition")