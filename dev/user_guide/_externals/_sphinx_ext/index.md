# Bundled Sphinx extensions (experimental)[#](#bundled-sphinx-extensions-experimental "Link to this heading")

`scikitplot._externals._sphinx_ext` is Scikit-Plots’ private namespace for
bundled documentation extensions and the small support libraries shared by
those extensions. The namespace is intentionally lazy: importing
`scikitplot._externals._sphinx_ext` does not eagerly import Sphinx or every
optional dependency.

These modules are useful to projects that build the Scikit-Plots documentation
stack, but the leading underscore is significant. Treat them as experimental
integration APIs rather than as the stable plotting API of Scikit-Plots.
Pin Scikit-Plots when a documentation deployment depends on their exact
configuration or generated markup.

## How to enable an extension[#](#how-to-enable-an-extension "Link to this heading")

Use the installed Scikit-Plots namespace in `conf.py`:

```
extensions = [
    "scikitplot._externals._sphinx_ext._sphinx_gallery_grid",
]

```

A source checkout can also expose the same tree as `_sphinx_ext` for
standalone documentation development. Use ****one namespace authority per
Sphinx application****. Do not mix `_sphinx_ext.*` and
`scikitplot._externals._sphinx_ext.*` registrations in the same build.

## Choose the owner by task[#](#choose-the-owner-by-task "Link to this heading")

| Task | Use | Registration |
| --- | --- | --- |
| Remove terminal control sequences from LaTeX output | [ANSI sanitizer](_ansi_sanitizer/index.html) | Direct Sphinx extension |
| List installed PyData Sphinx Theme components | [PyData component list](_pydata_component_list/index.html) | Direct Sphinx extension |
| Markdown export, AI links, assistant panel and related integrations | [Sphinx AI Assistant](_sphinx_ai_assistant/index.html) | Direct Sphinx extension |
| JSON-first Learn content materialization | [Sphinx AI Learn](_sphinx_ai_learn/index.html) | Direct Sphinx extension |
| Page feedback UI and feedback service contract | [Sphinx Feedback](_sphinx_feedback/index.html) | Direct Sphinx extension |
| Structured YAML card galleries | [Gallery Grid](_sphinx_gallery_grid/index.html) | Direct Sphinx extension |
| JupyterLite notebook preparation for Sphinx-Gallery | [Sphinx-Gallery JupyterLite helpers](_sphinx_gallery_jupyterlite/index.html) | Extension plus Sphinx-Gallery callables |
| Render `*.rst.template` files and inject a REPL URL | [Jinja RST renderer](_sphinx_jinja_render/index.html) | Direct Sphinx extension |
| Machine-consumable Markdown and `llms.txt` artifacts | [Sphinx LLM](_sphinx_llm/index.html) | Experimental, maintenance-gated extension |
| Generic filtering, grouping and browser controls | [Collection engine](_sphinx_collection/index.html) | Support library; do not register directly |
| YouTube reference parsing and player-option validation | [YouTube core](_sphinx_youtube_core/index.html) | Support library; do not register directly |
| Catalog-driven YouTube galleries | [YouTube Gallery](_sphinx_youtube_gallery/index.html) | Direct Sphinx extension |
| Individual YouTube, Vimeo and PeerTube players | [Video directives](_sphinxcontrib_youtube/index.html) | Direct Sphinx extension |

## Extension relationships[#](#extension-relationships "Link to this heading")

The collection/video stack deliberately has one owner for each concern:

```
_sphinx_youtube_core       provider grammar and leaf-player options
           |
_sphinxcontrib_youtube     individual video players
           |
_sphinx_youtube_gallery    YouTube catalog/query adapter
           |
_sphinx_gallery_grid       generic cards/layout
           |
_sphinx_collection         filtering/grouping/browser controls and assets

```

`_sphinx_youtube_gallery` loads its required sibling extensions itself.
Projects may still register those dependencies explicitly, but should not
replace one layer with a second implementation of the same behavior.

## Security and reproducibility[#](#security-and-reproducibility "Link to this heading")

Several extensions process documentation-authored YAML, URLs, generated files,
or remote-service configuration. Follow these repository contracts:

* keep credentials and write-capable tokens out of `conf.py` and generated
  HTML;
* keep file-backed gallery data inside the documentation source tree;
* prefer deterministic build-time inputs and explicit opt-in network behavior;
* treat generated RST/Markdown as derived output when the owning extension
  identifies another source as canonical;
* do not infer that a missing aggregate, cache entry, or optional dependency is
  equivalent to a successful zero/empty result.

The child guides call out additional boundaries where they are part of the
implemented contract.