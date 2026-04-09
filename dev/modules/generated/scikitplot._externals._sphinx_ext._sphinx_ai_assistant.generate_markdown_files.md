# generate\_markdown\_files[#](#generate-markdown-files "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.generate\_markdown\_files(**app**, **exception**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L941)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files "Link to this definition")
:   Post-build hook: generate `.md` companions for every `.html` file.

    Registered with Sphinx’s `build-finished` event in `setup`.
    Processing is parallelised via [`concurrent.futures.ProcessPoolExecutor`](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ProcessPoolExecutor "(in Python v3.14)").

    Parameters:
    :   ****app****sphinx.application.Sphinx
        :   The active Sphinx application instance.

        ****exception****Exception or None
        :   Any exception raised during the build; when not `None` this hook
            exits immediately without generating files.

    Returns:
    :   None

    Raises:
    :   None
        :   All per-file errors are logged as warnings; the hook never raises.

    Parameters:
    :   * ****app**** (**Sphinx**)
        * ****exception**** (**Optional****[**[**Exception**](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)")**]**)

    Return type:
    :   None

    Notes

    Config values read from **app.config**:

    * `ai_assistant_generate_markdown` — master switch.
    * `ai_assistant_theme_preset` — optional theme name to auto-select
      CSS selectors (e.g. `"pydata_sphinx_theme"`).
    * `ai_assistant_content_selectors` — ordered CSS selectors for main
      content detection. Merged with preset selectors when both are set.
    * `ai_assistant_markdown_exclude_patterns` — list of path substrings
      to skip.
    * `ai_assistant_strip_tags` — HTML tags removed before conversion.
    * `ai_assistant_max_workers` — maximum parallel worker processes
      (`None` → auto-detect, capped at 8).