# \_sphinx\_ai\_assistant[#](#sphinx-ai-assistant "Link to this heading")

## Sphinx AI Assistant Extension[#](#sphinx-ai-assistant-extension "Link to this heading")

A Sphinx extension that adds AI-assistant features to documentation pages,
including one-click Markdown export, AI chat deep-links, MCP tool
integration, and automated `llms.txt` generation.

The module has ****two distinct layers****:

Core layer (Sphinx-free)
:   Importable without Sphinx, BeautifulSoup, or markdownify. All
    security helpers, the HTML→Markdown converter, the multi-process
    HTML walker, the standalone directory processor.

Sphinx layer
:   `setup()`, `generate_markdown_files()`, `generate_llms_txt()`,
    and `add_ai_assistant_context()` are Sphinx build-event hooks wired
    by `setup`. They delegate to the core layer internally.

All heavy optional dependencies (`sphinx`, `bs4`, `markdownify`,
`IPython`) are imported ****lazily**** — only when a feature is actually
invoked. Importing this module at the top level is always safe and has
zero side effects.

### Public API (standalone / non-Sphinx)[#](#public-api-standalone-non-sphinx "Link to this heading")

process\_html\_directorycallable
:   Walk any HTML directory tree, convert pages to Markdown, optionally
    produce `llms.txt`. Works with Sphinx, MkDocs, Jekyll, plain HTML,
    or any other static-site generator.

generate\_llms\_txt\_standalonecallable
:   Write `llms.txt` from an existing set of `.md` files without
    requiring a Sphinx build.

html\_to\_markdowncallable
:   Convert an HTML string to Markdown.

### Public API (Sphinx extension)[#](#public-api-sphinx-extension "Link to this heading")

setupcallable
:   Sphinx extension entry point.

Notes

****Developer note**** — import discipline:

Every import of `sphinx.*`, `bs4`, `markdownify`
lives **inside** the function or class body that needs it, guarded by a
try/except where appropriate. Nothing is imported at module scope except
the standard library. This keeps `import time` cost near zero and
avoids `ImportError` at load time when optional packages are absent.

****Security notes****:

* `_safe_json_for_script` escapes `</script>` sequences to prevent
  script-injection attacks when config is serialised into an HTML page.
* `_is_path_within` prevents path-traversal attacks in the
  multi-process HTML walker.
* `_validate_base_url` rejects non-HTTP(S) schemes in the base URL
  configuration value.
* `_validate_position` rejects unknown widget-position strings.
* `_validate_provider_url_template` rejects non-HTTP(S) schemes in
  AI-provider URL templates (`javascript:`, `data:`, `ftp:`, …).
* `_validate_css_selector` rejects selectors containing HTML-injection
  characters (`<` or `>`).
* `_validate_provider` checks every required field of a provider dict
  before it is serialised into a page or widget.
* Ollama `api_base_url` is validated to allow only `http://localhost`
  or `http://127.0.0.1` origins, preventing exfiltration to remote hosts.

References

[1]

<https://github.com/mlazag/sphinx-ai-assistant>

[2]

<https://llmstxt.org/>

[3]

<https://ollama.com/>

Examples

Sphinx Register in `conf.py`:

```
extensions = [
    "scikitplot._externals._sphinx_ext._sphinx_ai_assistant",
]
html_theme = "pydata_sphinx_theme"  # scikit-learn / NumPy style
ai_assistant_enabled = True
ai_assistant_theme_preset = "pydata_sphinx_theme"  # auto-selects CSS selectors
ai_assistant_generate_markdown = True
ai_assistant_generate_llms_txt = True
html_baseurl = "https://docs.example.com"

```

Standalone (non-Sphinx):

```
from scikitplot._externals._sphinx_ext._sphinx_ai_assistant import (
    process_html_directory,
)

stats = process_html_directory(
    "/path/to/site/_site",
    theme_preset="jekyll",
    generate_llms=True,
    base_url="https://example.com",
)
print(stats)  # {"generated": 42, "skipped": 3, "errors": 0}

```