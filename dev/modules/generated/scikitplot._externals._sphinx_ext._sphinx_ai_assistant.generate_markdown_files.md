# generate\_markdown\_files[#](#generate-markdown-files "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.generate\_markdown\_files(**app**, **exception**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c2567fd/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L2584)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files "Link to this definition")
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
        * ****exception**** ([**Exception**](https://docs.python.org/3/library/exceptions.html#Exception "(in Python v3.14)") **|** **None**)

    Return type:
    :   None