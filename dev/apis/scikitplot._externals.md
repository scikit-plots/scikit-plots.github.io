# scikitplot.\_externals[#](#module-scikitplot._externals "Link to this heading")

****User guide.**** See the [Externals (experimental)](../user_guide/_externals/index.html#externals-index) section for further details.

## Sphinx extensions.[#](#module-scikitplot._externals._sphinx_ext "Link to this heading")

### scikitplot.\_externals.\_sphinx\_ext[#](#scikitplot-externals-sphinx-ext "Link to this heading")

Private namespace for vendored Sphinx extensions.

All child submodules are loaded ****lazily****: importing this package does not
pull in Sphinx, BeautifulSoup, markdownify, or any other heavy dependency.

#### Submodules[#](#submodules "Link to this heading")

\_sphinx\_ai\_assistant
:   AI-assistant Sphinx extension (markdown export, llms.txt, AI chat links).
    Copied and adapted from `mlazag/sphinx-ai-assistant` (MIT licence).
    Requires Sphinx ≥ 5 at **call time**, not at import time.

Notes

To register the AI-assistant extension in a Sphinx project, add the full
dotted path to `extensions` in `conf.py`:

```
extensions = [
    "scikitplot._externals._sphinx_ext._sphinx_ai_assistant",
]

```

Examples

```
>>> # Safe: no Sphinx needed yet
>>> from scikitplot._externals import _sphinx_ext
>>> # Sphinx imported here, on demand:
>>> ai = _sphinx_ext._sphinx_ai_assistant

```

****User guide.**** See the [Sphinx Ext (experimental)](../user_guide/_externals/_sphinx_ext/index.html#externals-sphinx-ext-index) section for further details.

|  |  |
| --- | --- |
| [`_sphinx_ext._sphinx_ai_assistant`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html#module-scikitplot._externals._sphinx_ext._sphinx_ai_assistant "scikitplot._externals._sphinx_ext._sphinx_ai_assistant") | Sphinx AI Assistant Extension |

## Sphinx extensions.[#](#id1 "Link to this heading")

### Sphinx AI Assistant Extension[#](#sphinx-ai-assistant-extension "Link to this heading")

A Sphinx extension that adds AI-assistant features to documentation pages,
including one-click Markdown export, AI chat deep-links, MCP tool
integration, and automated `llms.txt` generation.

All heavy optional dependencies (`sphinx`, `bs4`, `markdownify`) are
imported ****lazily**** — only when a feature is actually invoked. Importing
this module at the top level is always safe and has no side effects.

#### Public API[#](#public-api "Link to this heading")

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

****User guide.**** See the [Sphinx AI Extensions (experimental)](../user_guide/_externals/_sphinx_ext/_sphinx_ai_assistant/index.html#externals-sphinx-ext-sphinx-ai-assistant-index) section for further details.

|  |  |
| --- | --- |
| [`_sphinx_ai_assistant.add_ai_assistant_context`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context") | Inject AI-assistant configuration into each HTML page's template context. |
| [`_sphinx_ai_assistant.generate_llms_txt`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt") | Post-build hook: write `llms.txt` listing all generated `.md` URLs. |
| [`_sphinx_ai_assistant.generate_markdown_files`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files") | Post-build hook: generate `.md` companions for every `.html` file. |
| [`_sphinx_ai_assistant.html_to_markdown`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown") | Convert an HTML string to Markdown using the Sphinx-tuned converter. |