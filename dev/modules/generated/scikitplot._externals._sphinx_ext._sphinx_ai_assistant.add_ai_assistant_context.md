# add\_ai\_assistant\_context[#](#add-ai-assistant-context "Link to this heading")

scikitplot.\_externals.\_sphinx\_ext.\_sphinx\_ai\_assistant.add\_ai\_assistant\_context(**app**, **pagename**, **templatename**, **context**, **doctree**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/dbbf22f/scikitplot/_externals/_sphinx_ext/_sphinx_ai_assistant/__init__.py#L1189)[#](#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context "Link to this definition")
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
        * ****context**** (**Dict****[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** **Any****]**)
        * ****doctree**** (**Any**)

    Return type:
    :   None

    Notes

    ****Security****: The configuration dict is serialised with
    `_safe_json_for_script` which escapes `</script>` sequences,
    preventing script-injection attacks via adversarially crafted config
    values.

    ****Position validation****: `ai_assistant_position` is validated against
    `_ALLOWED_POSITIONS`. Invalid values are replaced with
    `"sidebar"` and a warning is logged.

    ****Provider filtering****: Providers whose `url_template` does not use
    the `http://` or `https://` scheme are silently removed from the
    serialised config to prevent `javascript:` or `data:` injection
    via the browser-side widget.