# CleanPlan[#](#cleanplan "Link to this heading")

class scikitplot.cleanprompt.CleanPlan(**packs=('auto',)**, **formats=('all',)**, **custom=()**, **conflict='error'**, **profile=None**, **core=True**, **style='placeholder'**, **keep=()**, **roles=()**, **infer\_roles=False**, **ner='none'**, **language='en'**, **hide=()**, **allow=()**, **remember=True**, **pattern\_risk=None**, **surrogates=None**, **configured=()**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L96)[#](#scikitplot.cleanprompt.CleanPlan "Link to this definition")
:   Everything a cleaner needs to know, and nothing it discovers.

    Parameters:
    :   ****packs****tuple of str
        :   Pack names, or one of `('all',)`, `('auto',)`, `('none',)`.

        ****formats****tuple of str
        :   Format names or extensions, or `('all',)`.

        ****custom****tuple of str
        :   Paths of custom definition files.

        ****conflict****{‘error’, ‘replace’}
        :   How custom definitions treat a built-in of the same name.

        ****profile****str or None
        :   A core-pattern profile: `'minimal'`, `'balanced'` or `'strict'`.

        ****core****bool
        :   Whether the built-in structural patterns run at all.

        ****style****str
        :   `'placeholder'` or `'surrogate'`.

        ****keep****tuple of str
        :   Artefact parts to send rather than remove.

        ****roles****tuple of (str, str)
        :   Declared column roles.

        ****infer\_roles****bool
        :   Whether to guess column roles from names.

        ****ner****str
        :   Entity engine mode; `'none'` for no entity detection.

        ****language****str
        :   Language for entity detection.

        ****hide****tuple of str
        :   Literal terms to hide.

        ****allow****tuple of str
        :   Literal terms never to hide.

        ****remember****bool
        :   Once a value is hidden, hide it wherever it appears later — in prose,
            in another file, in the next turn — not only where a pattern or field
            rule finds it again.

        ****pattern\_risk****{‘warn’, ‘ignore’, ‘refuse’} or None
        :   What a custom pattern with a catastrophic-backtracking shape does.
            `None` (default) defers to `CLEANPROMPT_PATTERN_RISK`, else
            `'warn'`. Pin `'refuse'` in a team plan file to make the check a
            gate.

        ****surrogates****str or None
        :   Path of a custom surrogate set
            (`_surrogate_sets`) whose names replace
            the built-in ones. Requires `style='surrogate'`. The set’s identity
            joins the fingerprint, so editing the set file makes a saved plan
            stale.

    Parameters:
    :   * ****packs**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****formats**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****custom**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****profile**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****core**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****style**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****keep**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****roles**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** **...****]**)
        * ****infer\_roles**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****ner**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****hide**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****allow**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****remember**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****pattern\_risk**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****surrogates**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****configured**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)

    Notes

    ****Developer notes.**** Tuples, never lists or sets, so a plan is hashable and
    its canonical form does not depend on iteration order: every collection is
    sorted when it enters, by [`FluentCleanPrompt`](scikitplot.cleanprompt.FluentCleanPrompt.html#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt.FluentCleanPrompt").

    `pattern_risk` and `surrogates` are left out of [`as_dict`](#scikitplot.cleanprompt.CleanPlan.as_dict "scikitplot.cleanprompt.CleanPlan.as_dict") while
    they are `None`, so every plan saved before the fields existed keeps its
    fingerprint (`I12`): adding a setting must not invalidate approved plan
    files.

    allow: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.CleanPlan.allow "Link to this definition")

    as\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L178)[#](#scikitplot.cleanprompt.CleanPlan.as_dict "Link to this definition")
    :   Return the plan as plain data.

        Returns:
        :   dict
            :   JSON-safe. `configured` is left out: it records how the plan was
                built, not what it means. `pattern_risk` and `surrogates` are
                left out while they are `None`.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    catalog()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L219)[#](#scikitplot.cleanprompt.CleanPlan.catalog "Link to this definition")
    :   Return the catalog this plan resolves against.

        Returns:
        :   Catalog
            :   The built-ins, with the plan’s custom definitions merged in.

        Return type:
        :   **Catalog**

    configured: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.CleanPlan.configured "Link to this definition")

    conflict: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'error'[#](#scikitplot.cleanprompt.CleanPlan.conflict "Link to this definition")

    core: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cleanprompt.CleanPlan.core "Link to this definition")

    custom: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.CleanPlan.custom "Link to this definition")

    fingerprint()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L369)[#](#scikitplot.cleanprompt.CleanPlan.fingerprint "Link to this definition")
    :   Return a digest of the selection and the definitions it resolves to.

        Returns:
        :   str
            :   Hex SHA-256.

        Raises:
        :   CleanPromptError
            :   If the plan does not validate.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    formats: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ('all',)[#](#scikitplot.cleanprompt.CleanPlan.formats "Link to this definition")

    formats\_selection()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L211)[#](#scikitplot.cleanprompt.CleanPlan.formats_selection "Link to this definition")
    :   Return `formats` in the form `Catalog.resolve_formats` takes.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    hide: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.CleanPlan.hide "Link to this definition")

    infer\_roles: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.cleanprompt.CleanPlan.infer_roles "Link to this definition")

    keep: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ()[#](#scikitplot.cleanprompt.CleanPlan.keep "Link to this definition")

    language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'en'[#](#scikitplot.cleanprompt.CleanPlan.language "Link to this definition")

    ner: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'none'[#](#scikitplot.cleanprompt.CleanPlan.ner "Link to this definition")

    packs: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...] = ('auto',)[#](#scikitplot.cleanprompt.CleanPlan.packs "Link to this definition")

    packs\_selection()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L203)[#](#scikitplot.cleanprompt.CleanPlan.packs_selection "Link to this definition")
    :   Return `packs` in the form `Catalog.resolve_packs` takes.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

    pattern\_findings()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L261)[#](#scikitplot.cleanprompt.CleanPlan.pattern_findings "Link to this definition")
    :   Return every pattern-risk finding in this plan’s custom packs.

        Returns:
        :   list of PackFinding
            :   Accepted findings included (`accepted` set), so a review can
                list what was waived. Built-in packs are proven clean by the test
                suite and are not analysed.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")

    pattern\_risk: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.CleanPlan.pattern_risk "Link to this definition")

    pattern\_risk\_mode()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L276)[#](#scikitplot.cleanprompt.CleanPlan.pattern_risk_mode "Link to this definition")
    :   Return the pattern-risk mode in force for this plan.

        Returns:
        :   str
            :   `pattern_risk` when set, else `CLEANPROMPT_PATTERN_RISK`, else
                `'warn'`.

        Raises:
        :   ValueError
            :   If the mode, set or from the environment, is not a known one.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    profile: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.CleanPlan.profile "Link to this definition")

    remember: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.cleanprompt.CleanPlan.remember "Link to this definition")

    roles: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")], ...] = ()[#](#scikitplot.cleanprompt.CleanPlan.roles "Link to this definition")

    style: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'placeholder'[#](#scikitplot.cleanprompt.CleanPlan.style "Link to this definition")

    surrogate\_set()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L237)[#](#scikitplot.cleanprompt.CleanPlan.surrogate_set "Link to this definition")
    :   Return the plan’s custom surrogate set, loaded and validated, or None.

        Returns:
        :   SurrogateSet or None
            :   `None` when the plan names no set.

        Raises:
        :   PackError
            :   If the set document is invalid.

            CleanPromptError
            :   If the file is missing, too large, or of an unknown type.

    surrogates: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.cleanprompt.CleanPlan.surrogates "Link to this definition")

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_plan.py#L293)[#](#scikitplot.cleanprompt.CleanPlan.validate "Link to this definition")
    :   Return every problem with this plan, without raising.

        Returns:
        :   list of str
            :   Empty when the plan can be materialized.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]