# load\_surrogate\_set[#](#load-surrogate-set "Link to this heading")

scikitplot.cleanprompt.load\_surrogate\_set(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_surrogate_sets.py#L724)[#](#scikitplot.cleanprompt.load_surrogate_set "Link to this definition")
:   Read and validate a surrogate set from a `.yaml`, `.yml` or `.json` file.

    Parameters:
    :   ****path****path-like
        :   The set file. YAML needs PyYAML; JSON needs nothing.

    Returns:
    :   SurrogateSet
        :   Validated.

    Raises:
    :   PackError
        :   If the document is invalid, listing every problem.

        CleanPromptError
        :   If the file is missing, too large, or of an unknown type.

    Parameters:
    :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))

    Return type:
    :   [**SurrogateSet**](scikitplot.cleanprompt.SurrogateSet.html#scikitplot.cleanprompt.SurrogateSet "scikitplot.cleanprompt._surrogate_sets.SurrogateSet")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](../../auto_examples/cleanprompt/plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle