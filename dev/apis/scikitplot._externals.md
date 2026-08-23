# scikitplot.\_externals[#](#module-scikitplot._externals "Link to this heading")

Externals.

****User guide.**** See the [Externals (experimental)](../user_guide/_externals/index.html#externals-index) section for further details.

## Sphinx Extensions[#](#module-scikitplot._externals._sphinx_ext "Link to this heading")

### scikitplot.\_externals.\_sphinx\_ext[#](#scikitplot-externals-sphinx-ext "Link to this heading")

Private namespace for vendored Sphinx extensions.

All child submodules are loaded ****lazily****: importing this package does
not pull in Sphinx, BeautifulSoup, markdownify, or any other heavy
dependency. Only the specific submodule that is accessed at runtime
triggers its own import chain.

#### Submodules[#](#submodules "Link to this heading")

\_sphinx\_ai\_assistant
:   AI-assistant Sphinx extension (markdown export, llms.txt, AI chat
    links). Copied and adapted from `mlazag/sphinx-ai-assistant`
    (MIT licence). Requires Sphinx ≥ 5 at **call time**, not at import
    time.

\_sphinx\_jinja\_render
:   URL helper Sphinx extension. Provides RST template preprocessing
    (Jinja2 `.rst.template` → `.rst`) and JupyterLite REPL URL
    injection into HTML page contexts.

Notes

**Users:** To register an extension in a Sphinx project, add the full
dotted path to `extensions` in `conf.py`:

```
extensions = [
    "scikitplot._externals._sphinx_ext._sphinx_ai_assistant",
    "scikitplot._externals._sphinx_ext._sphinx_jinja_render",
]

```

**Developers:** To add a new private Sphinx extension submodule, append
its name to `_PRIVATE_SUBMODULES`. No other change is required for
lazy loading.

Examples

Try it in your browser!
```
>>> # Safe: no Sphinx needed yet
>>> from scikitplot._externals import _sphinx_ext
>>> # Sphinx imported here, on demand:
>>> ai = _sphinx_ext._sphinx_ai_assistant
>>> jr = _sphinx_ext._sphinx_jinja_render

```
Go BackOpen In Tab

****User guide.**** See the [Sphinx Ext (experimental)](../user_guide/_externals/_sphinx_ext/index.html#externals-sphinx-ext-index) section for further details.

## Sphinx AI Extension[#](#module-scikitplot._externals._sphinx_ext._sphinx_ai_assistant "Link to this heading")

✨ A Sphinx extension that adds AI-Assistant (AI-Powered) features
to documentation pages, including one-click Markdown export,
AI chat deep-links, MCP tool integration, and automated `llms.txt`
generation. [[1]](#r6581310ff70c-1) [[2]](#r6581310ff70c-2) [[3]](#r6581310ff70c-3)

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

Public API (standalone / non-Sphinx):

process\_html\_directorycallable
:   Walk any HTML directory tree, convert pages to Markdown, optionally
    produce `llms.txt`. Works with Sphinx, MkDocs, Jekyll, plain HTML,
    or any other static-site generator.

generate\_llms\_txt\_standalonecallable
:   Write `llms.txt` from an existing set of `.md` files without
    requiring a Sphinx build.

html\_to\_markdowncallable
:   Convert an HTML string to Markdown.

Public API (Sphinx extension):

setupcallable
:   Sphinx extension entry point.

Notes

****Developer note**** — import discipline:

Every import of `sphinx.*`, `bs4`, `markdownify`
lives **inside** the function or class body that needs it, guarded by a
try/except where appropriate. Nothing is imported at module scope except
the standard library. This keeps `import time` cost near zero and
avoids `ImportError` at load time when optional packages are absent.
Representation model
——————–
Every page exists in two Markdown representations, and the difference is the
single most important thing to understand about this extension.

| Representation | How it is produced | Status |
| --- | --- | --- |
| `page.md` | build time, from the final HTML | ****canonical**** |
| clipboard text | run time, from the live DOM | ****convenience**** |

`page.md` is written by [`generate_markdown_files`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files"); the clipboard text is
produced by the Turndown build vendored inside `_static/ai-assistant.js`.

****User note.**** **Canonical** is not a claim that one is better written. It means
one of them is a real file at a real URL, so anything can fetch it — a crawler,
ChatGPT, Claude, Gemini, an MCP client, `curl`. The browser conversion exists
only inside the tab you are looking at. That is the whole distinction, and it is
why **View as Markdown** opens the published file instead of generating one
locally: a `blob:` URL cannot be handed to anyone.

****Developer note.**** Do not blur the two. If a canonical path fails, say so and
name the alternative; never substitute convenience output and report success.
A reader who chose the published file and silently received a browser conversion
has been given the wrong answer confidently, which is worse than an error.

### Surfaces[#](#surfaces "Link to this heading")

```
Control                   Reader gets              Source           Build
                                                                    artifact
----------------------------------------------------------------------------
Copy page  (browser)      clipboard Markdown       live DOM         not needed
Copy page  (static)       clipboard Markdown       fetched page.md  required
View as Markdown          new tab on the file      page.md URL      required
Ask AI                    provider gets the URL    page.md URL      required

```

The Copy control carries a two-state switch, modelled on the PDF method picker
so the interaction is learned once. It defaults to `browser` because that mode
always succeeds: it needs nothing from the build, so Copy keeps working on a
site with `ai_assistant_generate_markdown = False`.

Configure the default and whether readers may change it:

```
ai_assistant_copy_mode = "browser"  # or "static"
ai_assistant_copy_mode_toggle = True  # False pins the mode, hides the switch

```

### Build pipeline[#](#build-pipeline "Link to this heading")

```
Sphinx
    │
all normal extensions           sphinx_design, sphinx_tabs, Sphinx-Gallery,
    │                           IPython, Matplotlib, JupyterLite, the
    ▼                           PyData theme directives, …
final HTML
    │
build-finished                  ← this extension runs here, last
    │
    ├── generate_markdown_files()   final HTML → page.md  (canonical)
    │
    └── generate_llms_txt()         the page.md set → llms.txt

```

****Developer note**** — why the ordering matters more than it looks. Converting
**after** the build means every directive has already been resolved to HTML:

```
RST/MyST → custom directive → Sphinx → theme → FINAL HTML → Markdown

```

so there is no custom docutils node for a Markdown visitor to learn. A
Markdown-builder approach would have to understand every extension in the
stack; this one has to understand HTML. That is the reason this extension needs
no sibling producer, and the reason its dependency surface is: zero module-scope
non-stdlib imports, with `bs4`/`markdownify` optional and `find_spec`-gated.

### Directive fidelity (planned, not yet implemented)[#](#directive-fidelity-planned-not-yet-implemented "Link to this heading")

Conversion is currently generic HTML→Markdown. Better semantic fidelity is
planned for the markup emitted by:

`sphinx_gallery.gen_gallery`, `sphinx_design`, `sphinx_prompt`,
`sphinx_togglebutton`, `sphinx_tabs.tabs`,
`IPython.sphinxext.ipython_directive`,
`matplotlib.sphinxext.plot_directive`, and the in-tree
`_sphinx_jinja_render`, `_pydata_sphinx_theme.gallery_directive`,
`_pydata_sphinx_theme.component_directive`, `_sphinx_gallery_jupyterlite`
and `_sphinxcontrib_youtube` extensions.

Structures to be recognised: `grid`, `row`, `column`, `container`,
`tab`, `dropdown`, `card`, `youtube`, `video`, `iframe`,
`jupyterlite`, `inheritance_diagram`, `thumbnail`.

****Developer note.**** Both conversion paths must gain each rule together. If the
build-time converter learns a directive and the browser Turndown rules do not,
Copy and Ask AI start disagreeing about the same page — a divergence no user can
see and no current test would catch. Treat their equivalence as the acceptance
criterion, not the rules themselves.

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

[[1](#id1)]

[mlazag/sphinx-ai-assistant](https://github.com/mlazag/sphinx-ai-assistant)

[[2](#id2)]

<https://llmstxt.org/>

[[3](#id3)]

<https://ollama.com/>

Examples

Try it in your browser!

Sphinx Register Sphinx AI Assistant Extension in `conf.py`:

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
Go BackOpen In Tab

****User guide.**** See the [Sphinx AI Extensions (experimental) ✨](../user_guide/_externals/_sphinx_ext/_sphinx_ai_assistant/index.html#externals-sphinx-ext-sphinx-ai-assistant-index) section for further details.

|  |  |
| --- | --- |
| [`_sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.add_ai_assistant_context") | Inject AI-assistant configuration into each HTML page's template context. |
| [`_sphinx_ext._sphinx_ai_assistant.generate_llms_txt`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt") | Post-build hook: write `llms.txt` listing all generated `.md` URLs. |
| [`_sphinx_ext._sphinx_ai_assistant.generate_llms_txt_standalone`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt_standalone.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt_standalone "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_llms_txt_standalone") | Write `llms.txt` from an existing set of `.md` files. |
| [`_sphinx_ext._sphinx_ai_assistant.generate_markdown_files`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.generate_markdown_files") | Post-build hook: generate `.md` companions for every `.html` file. |
| [`_sphinx_ext._sphinx_ai_assistant.html_to_markdown`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown") | Convert an HTML string to Markdown using the Sphinx-tuned converter. |
| [`_sphinx_ext._sphinx_ai_assistant.html_to_markdown_converter`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown_converter.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown_converter "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.html_to_markdown_converter") | Convert an HTML string to Markdown using the Sphinx-tuned converter. |
| [`_sphinx_ext._sphinx_ai_assistant.process_html_directory`](../modules/generated/scikitplot._externals._sphinx_ext._sphinx_ai_assistant.process_html_directory.html#scikitplot._externals._sphinx_ext._sphinx_ai_assistant.process_html_directory "scikitplot._externals._sphinx_ext._sphinx_ai_assistant.process_html_directory") | Walk any HTML directory tree and convert pages to Markdown. |