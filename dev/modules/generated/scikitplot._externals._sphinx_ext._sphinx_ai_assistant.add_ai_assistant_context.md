# add\_ai\_assistant\_context[#](#add-ai-assistant-context "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.add\_ai\_assistant\_context(**app**, **pagename**, **templatename**, **context**, **doctree**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/3bacd52/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L4319)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context "Link to this definition")
:   Inject AI-assistant configuration into each HTML page’s template context.

    Registered with Sphinx’s `html-page-context` event in `setup`.

    Parameters:
    :   ****app****sphinx.application.Sphinx
        :   The active Sphinx application instance.

        ****pagename****str
        :   The logical page name (e.g. `"index"`).

        ****templatename****str
        :   The Jinja2 template name (e.g. `"page.html"`).

        ****context****dict
        :   The template rendering context; modified in place.

        ****doctree****docutils.nodes.document or None
        :   The parsed document tree for the page.

    Returns:
    :   None

    Parameters:
    :   * ****app**** (**Sphinx**)
        * ****pagename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****templatename**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****context**** ([**dict**](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****doctree**** (**Any**)

    Return type:
    :   None

    Notes

    ****Security****: Serialised via `_safe_json_for_script` (XSS guard).
    Invalid position → fallback to `"sidebar"` with a logged warning.
    Providers with dangerous `url_template` schemes are filtered out.