# generate\_llms\_txt[#](#generate-llms-txt "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.generate\_llms\_txt(**app**, **exception**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dff5f00/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L2661)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt "Link to this definition")
:   Post-build hook: write `llms.txt` listing all generated `.md` URLs.

    Registered with Sphinx’s `build-finished` event in `setup`.

    Parameters:
    :   ****app****sphinx.application.Sphinx
        :   The active Sphinx application instance.

        ****exception****Exception or None
        :   When not `None`, the hook exits immediately.

    Returns:
    :   None

    Parameters:
    :   * ****app**** (**Sphinx**)
        * ****exception**** ([**Exception**](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)") **|** **None**)

    Return type:
    :   None

    References

    [1]

    <https://llmstxt.org/>