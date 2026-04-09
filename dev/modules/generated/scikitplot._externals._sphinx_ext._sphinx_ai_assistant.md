# \_sphinx\_ai\_assistant[#](#sphinx-ai-assistant "Link to this heading")

## Sphinx AI Assistant Extension[#](#sphinx-ai-assistant-extension "Link to this heading")

A Sphinx extension that adds AI-assistant features to documentation pages,
including one-click Markdown export, AI chat deep-links, MCP tool
integration, and automated `llms.txt` generation.

All heavy optional dependencies (`sphinx`, `bs4`, `markdownify`) are
imported ****lazily**** — only when a feature is actually invoked. Importing
this module at the top level is always safe and has no side effects.

### Public API[#](#public-api "Link to this heading")

setupcallable
:   Sphinx extension entry point. Called automatically by Sphinx when this
    module is listed in `conf.py extensions`.

Notes

****Developer note**** — import discipline:

Every import of `sphinx.*`, `bs4`, and `markdownify` lives **inside**
the function that needs it, guarded by a try/except where appropriate.
Nothing is imported at module scope except stdlib modules. This keeps
`import time` cost near zero and avoids `ImportError` at load time when
optional packages are absent.

****Security note****:

* `_safe_json_for_script` escapes `</script>` sequences to prevent
  script-injection attacks when config is serialised into an HTML page.
* `_is_path_within` prevents path-traversal attacks in the
  multi-process HTML walker.
* `_validate_base_url` rejects non-HTTP(S) schemes in the base URL
  configuration value.
* `_validate_position` rejects unknown widget-position strings.
* `_validate_provider_url_template` rejects non-HTTP(S) schemes in
  AI-provider URL templates, blocking `javascript:` and `data:` vectors.
* `_validate_css_selector` rejects selectors containing HTML-injection
  characters (`<` or `>`).
* `ai_assistant_providers` URL templates are validated before use, and
  unsafe entries are silently dropped from the serialised page config.

References

[1]

<https://github.com/mlazag/sphinx-ai-assistant>

[2]

<https://llmstxt.org/>

Examples

Register in `conf.py`:

```
extensions = [
    "scikitplot._externals._sphinx_ext._sphinx_ai_assistant",
]
html_theme = "pydata_sphinx_theme"   # scikit-learn / NumPy style
ai_assistant_enabled = True
ai_assistant_theme_preset = "pydata_sphinx_theme"  # auto-selects CSS selectors
ai_assistant_generate_markdown = True
ai_assistant_generate_llms_txt = True
html_baseurl = "https://docs.example.com"

```