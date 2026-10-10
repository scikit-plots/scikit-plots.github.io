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

**ansi-sanitizer**

* [ANSI Sanitizer](_ansi_sanitizer/index.html)
  * [Enable it](_ansi_sanitizer/index.html#enable-it)
  * [Plain-string use](_ansi_sanitizer/index.html#plain-string-use)
  * [Why this is narrower than a generic regex](_ansi_sanitizer/index.html#why-this-is-narrower-than-a-generic-regex)
  * [When not to use it](_ansi_sanitizer/index.html#when-not-to-use-it)
**pydata-component-list**

* [PyData Component List](_pydata_component_list/index.html)
  * [Enable it](_pydata_component_list/index.html#enable-it)
  * [What the directive reads](_pydata_component_list/index.html#what-the-directive-reads)
  * [Failure behavior](_pydata_component_list/index.html#failure-behavior)
**sphinx-ai-assistant**

* [Sphinx AI Assistant](_sphinx_ai_assistant/index.html)
  * [Start with the smallest deployment](_sphinx_ai_assistant/index.html#start-with-the-smallest-deployment)
  * [Deployment levels](_sphinx_ai_assistant/index.html#deployment-levels)
  * [Core configuration](_sphinx_ai_assistant/index.html#core-configuration)
  * [Canonical Markdown versus browser copy](_sphinx_ai_assistant/index.html#canonical-markdown-versus-browser-copy)
  * [Live model requests: keep authority server-side](_sphinx_ai_assistant/index.html#live-model-requests-keep-authority-server-side)
  * [Conversation persistence](_sphinx_ai_assistant/index.html#conversation-persistence)
  * [Feedback ownership](_sphinx_ai_assistant/index.html#feedback-ownership)
  * [Troubleshooting](_sphinx_ai_assistant/index.html#troubleshooting)
**sphinx-ai-learn**

* [Sphinx AI Learn](_sphinx_ai_learn/index.html)
  * [Enable it](_sphinx_ai_learn/index.html#enable-it)
  * [Build-time guarantees](_sphinx_ai_learn/index.html#build-time-guarantees)
  * [Important configuration](_sphinx_ai_learn/index.html#important-configuration)
  * [Canonical content contracts](_sphinx_ai_learn/index.html#canonical-content-contracts)
  * [Generated directives](_sphinx_ai_learn/index.html#generated-directives)
  * [Include versus toctree composition](_sphinx_ai_learn/index.html#include-versus-toctree-composition)
  * [Validation failures](_sphinx_ai_learn/index.html#validation-failures)
**sphinx-collection**

* [Sphinx Collection](_sphinx_collection/index.html)
  * [Why it exists](_sphinx_collection/index.html#why-it-exists)
  * [Programmatic use](_sphinx_collection/index.html#programmatic-use)
  * [Bounded YAML contract](_sphinx_collection/index.html#bounded-yaml-contract)
  * [Generated browser assets](_sphinx_collection/index.html#generated-browser-assets)
  * [Progressive enhancement](_sphinx_collection/index.html#progressive-enhancement)
**sphinx-feedback**

* [Sphinx Feedback](_sphinx_feedback/index.html)
  * [Enable page feedback](_sphinx_feedback/index.html#enable-page-feedback)
  * [Automatic placement and explicit mounts](_sphinx_feedback/index.html#automatic-placement-and-explicit-mounts)
  * [Core configuration](_sphinx_feedback/index.html#core-configuration)
  * [Privacy and authority boundary](_sphinx_feedback/index.html#privacy-and-authority-boundary)
  * [Standalone service](_sphinx_feedback/index.html#standalone-service)
  * [Relationship to AI Assistant feedback](_sphinx_feedback/index.html#relationship-to-ai-assistant-feedback)
**sphinx-gallery-grid**

* [Sphinx Gallery Grid](_sphinx_gallery_grid/index.html)
  * [Enable it](_sphinx_gallery_grid/index.html#enable-it)
  * [Minimal gallery](_sphinx_gallery_grid/index.html#minimal-gallery)
  * [File-backed gallery](_sphinx_gallery_grid/index.html#file-backed-gallery)
  * [Build-time selection](_sphinx_gallery_grid/index.html#build-time-selection)
  * [Interactive reader controls](_sphinx_gallery_grid/index.html#interactive-reader-controls)
  * [Presentation customization](_sphinx_gallery_grid/index.html#presentation-customization)
  * [Input safety](_sphinx_gallery_grid/index.html#input-safety)
  * [MyST documents](_sphinx_gallery_grid/index.html#myst-documents)
**sphinx-jupyterlite**

* [Sphinx-Gallery JupyterLite](_sphinx_gallery_jupyterlite/index.html)
  * [Enable the release-version hook](_sphinx_gallery_jupyterlite/index.html#enable-the-release-version-hook)
  * [Connect it to Sphinx-Gallery](_sphinx_gallery_jupyterlite/index.html#connect-it-to-sphinx-gallery)
  * [`notebook_modification_function`](_sphinx_gallery_jupyterlite/index.html#notebook-modification-function)
  * [`reset_others`](_sphinx_gallery_jupyterlite/index.html#reset-others)
  * [Customization boundary](_sphinx_gallery_jupyterlite/index.html#customization-boundary)
**sphinx-jinja**

* [Sphinx Jinja Render](_sphinx_jinja_render/index.html)
  * [Enable it](_sphinx_jinja_render/index.html#enable-it)
  * [RST templates](_sphinx_jinja_render/index.html#rst-templates)
  * [REPL URL](_sphinx_jinja_render/index.html#repl-url)
  * [Reliability note](_sphinx_jinja_render/index.html#reliability-note)
**sphinx-llm**

* [Sphinx LLM](_sphinx_llm/index.html)
  * [Intended output model](_sphinx_llm/index.html#intended-output-model)
  * [Basic registration](_sphinx_llm/index.html#basic-registration)
  * [Semantic directives](_sphinx_llm/index.html#semantic-directives)
  * [Configuration groups](_sphinx_llm/index.html#configuration-groups)
  * [Coexistence with AI Assistant](_sphinx_llm/index.html#coexistence-with-ai-assistant)
**youtu.be-core**

* [Sphinx YouTube Core](_sphinx_youtube_core/index.html)
  * [Reference parsing](_sphinx_youtube_core/index.html#reference-parsing)
  * [Player option contract](_sphinx_youtube_core/index.html#player-option-contract)
  * [What this layer deliberately does not own](_sphinx_youtube_core/index.html#what-this-layer-deliberately-does-not-own)
**youtu.be-gallery**

* [Sphinx YouTube Gallery](_sphinx_youtube_gallery/index.html)
  * [Enable it](_sphinx_youtube_gallery/index.html#enable-it)
  * [Inline video catalog](_sphinx_youtube_gallery/index.html#inline-video-catalog)
  * [File-backed catalog](_sphinx_youtube_gallery/index.html#file-backed-catalog)
  * [Channel views](_sphinx_youtube_gallery/index.html#channel-views)
  * [Build-time query versus browser controls](_sphinx_youtube_gallery/index.html#build-time-query-versus-browser-controls)
  * [Player customization](_sphinx_youtube_gallery/index.html#player-customization)
  * [Network boundary](_sphinx_youtube_gallery/index.html#network-boundary)
**youtu.be**

* [Sphinx Video Directives](_sphinxcontrib_youtube/index.html)
  * [Enable it](_sphinxcontrib_youtube/index.html#enable-it)
  * [YouTube example](_sphinxcontrib_youtube/index.html#youtube-example)
  * [Shared player options](_sphinxcontrib_youtube/index.html#shared-player-options)
  * [Thumbnail downloads are opt-in](_sphinxcontrib_youtube/index.html#thumbnail-downloads-are-opt-in)
  * [Other builders](_sphinxcontrib_youtube/index.html#other-builders)

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