# profile\_code[#](#profile-code "Link to this heading")

scikitplot.\_ipymagic.profile\_code(**code**, **namespace**, **local\_namespace=None**, **\***, **sort='cumulative'**, **limit=25**, **stats\_file=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_profiling.py#L128)[#](#scikitplot._ipymagic.profile_code "Link to this definition")
:   Run `code` under `cProfile` and summarise the profile.

    Parameters:
    :   ****code****code object or str
        :   What to run (`exec`).

        ****namespace****mapping
        :   Global namespace (the notebook’s).

        ****local\_namespace****mapping or None, default=None
        :   Local namespace; `namespace` when None.

        ****sort****{“cumulative”, “tottime”, “ncalls”}, default=”cumulative”
        :   Sort key of the table.

        ****limit****int, default=25
        :   Rows of the table.

        ****stats\_file****str or None, default=None
        :   Write the [`pstats`](https://docs.python.org/3/library/pstats.html#module-pstats "(in Python v3.15)") data there (readable by `pstats`,
            snakeviz, `python -m pstats`).

    Returns:
    :   ProfileResult
        :   The profile (also of a run that raised, up to the error).

        BaseException or None
        :   What the code raised, for the caller to re-raise after showing the
            profile; else an `IpyMagicError` (code `"stats_file"`) when the
            stats could not be written; None when all went well.

    Raises:
    :   ProfilerBusyError
        :   When another profiler is active (nothing is run).

        MagicUsageError
        :   For a bad `sort`, `limit` or `stats_file` (nothing is run).

    Parameters:
    :   * ****code**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****namespace**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****local\_namespace**** ([**Mapping**](https://docs.python.org/3/library/typing.html#typing.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)
        * ****sort**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****limit**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****stats\_file**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Return type:
    :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[**ProfileResult**](scikitplot._ipymagic.ProfileResult.html#scikitplot._ipymagic.ProfileResult "scikitplot._ipymagic._results.ProfileResult"), [BaseException](https://docs.python.org/3/builtins/exceptions.html#BaseException "(in Python v3.15)") | None]

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot._ipymagic import profile_code
    >>> result, error = profile_code("sum(range(10))", {})
    >>> error is None and result.total_calls >= 1
    True

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_profiler_thumb.png)

[Profile a Notebook Cell with %%scikitplot\_profile](../../auto_examples/ipymagic/plot_ipymagic_scikit-plots_profiler.html)

Profile a Notebook Cell with %%scikitplot\_profile