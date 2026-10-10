# FluentCleanPrompt[#](#fluentcleanprompt "Link to this heading")

class scikitplot.cleanprompt.FluentCleanPrompt(**plan=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L479)[#](#scikitplot.cleanprompt.FluentCleanPrompt "Link to this definition")
:   Build a [`CleanPlan`](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt.CleanPlan") one decision at a time.

    Parameters:
    :   ****plan****CleanPlan, optional
        :   Start from an existing plan. Defaults to `packs('auto')` over every
            format, placeholders, core patterns on, no entity engine.

    Parameters:
    :   ****plan**** ([**CleanPlan**](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt.CleanPlan") **|** **None**)

    Notes

    ****User notes.**** Every method returns a **new** builder. Each domain may be set
    once; set it again with `conflict='replace'` to overwrite or
    `conflict='extend'` to add to it.

    Examples

    Try it in your browser!
    ```
    >>> plan = FluentCleanPrompt().packs("patient").formats("csv").plan()
    >>> plan.packs, plan.formats
    (('patient',), ('csv',))
    >>> FluentCleanPrompt().packs("patient").packs("finance")
    Traceback (most recent call last):
    ...
    scikitplot.cleanprompt._exceptions.CleanPromptError: packs is already set to ('patient',); pass conflict='replace' or conflict='extend'
    >>> sorted(
    ...     FluentCleanPrompt()
    ...     .packs("patient")
    ...     .packs("finance", conflict="extend")
    ...     .plan()
    ...     .packs
    ... )
    ['finance', 'patient']

    ```
    Go BackOpen In Tab

    allow(**\*terms**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L665)[#](#scikitplot.cleanprompt.FluentCleanPrompt.allow "Link to this definition")
    :   Never hide these exact strings.

        Parameters:
        :   * ****terms**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    build()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L694)[#](#scikitplot.cleanprompt.FluentCleanPrompt.build "Link to this definition")
    :   Return the plan, or raise listing every problem with it.

        Returns:
        :   CleanPlan
            :   Validated.

        Raises:
        :   CleanPromptError
            :   With one line per problem.

        Return type:
        :   [**CleanPlan**](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt._plan.CleanPlan")

    core(**enabled=True**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L624)[#](#scikitplot.cleanprompt.FluentCleanPrompt.core "Link to this definition")
    :   Turn the built-in structural patterns on or off.

        Parameters:
        :   * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    custom(**\*paths**, **conflict='error'**, **replace\_builtins=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L591)[#](#scikitplot.cleanprompt.FluentCleanPrompt.custom "Link to this definition")
    :   Add custom pack or format definitions from YAML or JSON files.

        Parameters:
        :   ****\*paths****str
            :   Definition files.

            ****conflict****{‘error’, ‘replace’, ‘extend’}, default=’error’
            :   What to do if custom files were already given.

            ****replace\_builtins****bool, default=False
            :   Let a custom definition replace a built-in of the same name.

        Returns:
        :   FluentCleanPrompt
            :   A new builder.

        Parameters:
        :   * ****paths**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****replace\_builtins**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    formats(**\*names**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L571)[#](#scikitplot.cleanprompt.FluentCleanPrompt.formats "Link to this definition")
    :   Choose which formats are read: names, extensions, or `'all'`.

        Parameters:
        :   ****\*names****str
            :   Format names (`'csv'`), extensions (`'.env'`) or `'all'`.

            ****conflict****{‘error’, ‘replace’, ‘extend’}, default=’error’
            :   What to do if formats were already chosen.

        Returns:
        :   FluentCleanPrompt
            :   A new builder.

        Parameters:
        :   * ****names**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    guard(**format='text'**, **verify=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L733)[#](#scikitplot.cleanprompt.FluentCleanPrompt.guard "Link to this definition")
    :   Return a [`Guard`](scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt._guard.Guard") for this plan.

        Parameters:
        :   ****format****str, default=’text’
            :   How prompts are read.

            ****verify****bool, default=True
            :   Refuse to send when the independent leak check finds a value.

        Returns:
        :   Guard
            :   Ready to put in front of any model client.

        Parameters:
        :   * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****verify**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    hide(**\*terms**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L661)[#](#scikitplot.cleanprompt.FluentCleanPrompt.hide "Link to this definition")
    :   Hide these exact strings wherever they appear.

        Parameters:
        :   * ****terms**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    infer\_roles(**enabled=True**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L647)[#](#scikitplot.cleanprompt.FluentCleanPrompt.infer_roles "Link to this definition")
    :   Guess column roles from their names; reported as inferred.

        Parameters:
        :   * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    keep(**\*parts**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L632)[#](#scikitplot.cleanprompt.FluentCleanPrompt.keep "Link to this definition")
    :   Send artefact parts removed by default: `outputs`, `figures`, `paths`.

        Parameters:
        :   * ****parts**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    materialize()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L714)[#](#scikitplot.cleanprompt.FluentCleanPrompt.materialize "Link to this definition")
    :   Return a [`Cleaner`](scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt._runtime.Cleaner") for this plan.

        Returns:
        :   Cleaner
            :   Ready to encode text, files, directories and archives.

        Raises:
        :   CleanPromptError
            :   If the plan does not validate, or an entity engine it asks for is
                not usable.

    ner(**engine='auto'**, **language='en'**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L653)[#](#scikitplot.cleanprompt.FluentCleanPrompt.ner "Link to this definition")
    :   Turn on entity detection with `auto`, `spacy`, `nltk` or `both`.

        Parameters:
        :   * ****engine**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    packs(**\*names**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L551)[#](#scikitplot.cleanprompt.FluentCleanPrompt.packs "Link to this definition")
    :   Choose packs: names, or `'all'`, `'auto'` or `'none'`.

        Parameters:
        :   ****\*names****str
            :   One or more pack names, or a single mode keyword.

            ****conflict****{‘error’, ‘replace’, ‘extend’}, default=’error’
            :   What to do if packs were already chosen.

        Returns:
        :   FluentCleanPrompt
            :   A new builder.

        Parameters:
        :   * ****names**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    plan()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L686)[#](#scikitplot.cleanprompt.FluentCleanPrompt.plan "Link to this definition")
    :   Return the plan as it stands, without validating it.

        Return type:
        :   [**CleanPlan**](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt._plan.CleanPlan")

    profile(**name**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L620)[#](#scikitplot.cleanprompt.FluentCleanPrompt.profile "Link to this definition")
    :   Choose the core-pattern profile: `minimal`, `balanced` or `strict`.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    remember(**enabled=True**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L669)[#](#scikitplot.cleanprompt.FluentCleanPrompt.remember "Link to this definition")
    :   Hide a value everywhere once it has been hidden anywhere (default on).

        Notes

        ****User notes.**** A patient’s name found in the `name` column of a CSV
        is then also hidden in the free-text note encoded after it, where no
        field rule could see it. Turn it off only when you need each file’s
        output to be independent of what was encoded before.

        Parameters:
        :   * ****enabled**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    roles(**mapping=None**, **conflict='error'**, **\*\*named**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L636)[#](#scikitplot.cleanprompt.FluentCleanPrompt.roles "Link to this definition")
    :   Declare column roles, e.g. `roles(churned="target")`.

        Parameters:
        :   * ****mapping**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****named**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    style(**name**, **conflict='error'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L628)[#](#scikitplot.cleanprompt.FluentCleanPrompt.style "Link to this definition")
    :   Choose `placeholder` (`[EMAIL-1]`) or `surrogate` stand-ins.

        Parameters:
        :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****conflict**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**FluentCleanPrompt**](#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt._plan.FluentCleanPrompt")

    validate()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_plan.py#L690)[#](#scikitplot.cleanprompt.FluentCleanPrompt.validate "Link to this definition")
    :   Return every problem with the plan; empty when it can run.

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_guard_agents_script_thumb.png)

[Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves](../../auto_examples/cleanprompt/plot_cleanprompt_guard_agents_script.html)

Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders