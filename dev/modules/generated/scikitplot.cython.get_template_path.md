# get\_template\_path[#](#get-template-path "Link to this heading")

scikitplot.cython.get\_template\_path(**template\_id**, **\***, **kind=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/6d916ad/scikitplot/cython/_templates_api.py#L342)[#](#scikitplot.cython.get_template_path "Link to this definition")
:   Resolve a template ID to an on-disk path.

    Parameters:
    :   ****template\_id****str
        :   Template ID. Supported forms:
            - `"category/name"` (no extension)
            - `"category/name.pyx"` or `"category/name.py"`
            - `"name"` (no category): allowed **only** if it resolves uniquely.

        ****kind****{‘cython’, ‘python’} or None, default=None
        :   If provided, constrains resolution to that kind. If None, kind is inferred
            from an explicit extension or by strict unique matching.

    Returns:
    :   pathlib.Path
        :   Template file path.

    Raises:
    :   FileNotFoundError
        :   If no template matches.

        ValueError
        :   If resolution is ambiguous or kind is invalid.

    Parameters:
    :   * ****template\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****kind**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

    Return type:
    :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](../../auto_examples/cython/plot_01_browse_and_compile_templates.html)

Browse and compile templates![](../../_images/sphx_glr_plot_cython_template_thumb.png)

[Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html)

Cython: Realtime compile\_and\_load (.pyx)