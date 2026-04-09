# generate\_llms\_txt[#](#generate-llms-txt "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.generate\_llms\_txt(**app**, **exception**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L1078)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt "Link to this definition")
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
        * ****exception**** (**Optional****[**[**Exception**](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)")**]**)

    Return type:
    :   None

    Notes

    The base URL is resolved from, in priority order:

    1. `html_baseurl` (standard Sphinx config).
    2. `ai_assistant_base_url` (extension-specific override).
    3. Empty string — relative paths are used.

    Config values read from **app.config**:

    * `ai_assistant_generate_llms_txt` — master switch.
    * `ai_assistant_llms_txt_max_entries` — cap the number of entries
      written (`None` → unlimited).
    * `ai_assistant_llms_txt_full_content` — when `True`, embed the
      full Markdown content of each page inline in `llms.txt`
      (`llms-full.txt` convention).

    References

    [1]

    <https://llmstxt.org/>