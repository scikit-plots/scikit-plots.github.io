# 🌍 Internationalization (i18n) Guide[#](#internationalization-i18n-guide "Link to this heading")

> ****Status:**** Recommended Architecture

This document describes a recommended internationalization workflow for
****scikit-plots**** using ****Sphinx****, ****PyData Sphinx Theme****, and
****sphinx-intl****.

## Goals[#](#goals "Link to this heading")

* Single source of truth
* Easy for contributors
* Git-friendly
* CI/CD friendly
* Idempotent
* Scalable
* Future-proof

## High-Level Architecture[#](#high-level-architecture "Link to this heading")

```
                        Git Repository

docs/
├── index.rst
├── api/
├── tutorials/
├── examples/
├── glossary/
├── conf.py
├── Makefile
└── locale/
    ├── tr/
    ├── fr/
    ├── ja/
    └── zh_CN/

```

## Documentation Lifecycle[#](#documentation-lifecycle "Link to this heading")

```
English Docs
      │
      ▼
make gettext
      │
      ▼
POT Templates
      │
      ▼
sphinx-intl update
      │
      ▼
PO Files
      │
      ▼
Translators
      │
      ▼
Compile Catalogs
      │
      ▼
Localized HTML

```

## Translation Workflow[#](#translation-workflow "Link to this heading")

```
English Sources
      │
      ▼
gettext
      │
      ▼
*.pot
      │
      ▼
sphinx-intl update
      │
      ▼
locale/<lang>/LC_MESSAGES/*.po
      │
      ▼
Translation
      │
      ▼
HTML

```

## Recommended Repository Layout[#](#recommended-repository-layout "Link to this heading")

```
docs/
├── api/
├── examples/
├── glossary/
├── tutorials/
├── user_guide/
├── conf.py
├── Makefile
└── locale/
    ├── tr/
    ├── fr/
    ├── ja/
    └── zh_CN/

```

## CI/CD[#](#ci-cd "Link to this heading")

```
PR
 │
 ▼
Lint
 │
 ▼
gettext
 │
 ▼
Update catalogs
 │
 ▼
Compile catalogs
 │
 ▼
Build all languages
 │
 ▼
Deploy

```

## GitHub Pages[#](#github-pages "Link to this heading")

```
/
├── en/
├── tr/
├── fr/
├── ja/
└── zh_CN/

```

## Suggested Make Targets[#](#suggested-make-targets "Link to this heading")

```
make gettext
make update-po
make compile-po
make html
make html-en
make html-tr
make html-fr
make html-ja
make html-zh
make html-all

```

## Best Practices[#](#best-practices "Link to this heading")

### Do[#](#do "Link to this heading")

* Keep English as the canonical source.
* Automate translation updates.
* Validate every language in CI.
* Keep one shared documentation tree.

### Don’t[#](#don-t "Link to this heading")

* Duplicate documentation.
* Edit POT files manually.
* Maintain language branches.
* Translate API identifiers.

## Recommended Language Roadmap[#](#recommended-language-roadmap "Link to this heading")

### Recommended Language Set[#](#recommended-language-set "Link to this heading")

```
Phase Language              Locale    Primary Coverage

```

---

```
    1 English               `en`      Global (canonical source)
    1 Simplified Chinese    `zh_CN`   China, Singapore
    1 Spanish               `es`      Spain & Latin America
    1 French                `fr`      Europe, Africa, Canada
    2 Portuguese (Brazil)   `pt_BR`   Brazil
    2 Japanese              `ja`      Japan
    2 Turkish               `tr`      Türkiye
    3 Arabic                `ar`      Middle East & North Africa
    3 Indonesian            `id`      Indonesia
    3 Russian               `ru`      Eastern Europe & Central Asia
    3 Hindi                 `hi`      India

```

### Locale Directory[#](#locale-directory "Link to this heading")

```
docs/
└── locale/
    ├── en/
    ├── zh_CN/
    ├── es/
    ├── fr/
    ├── pt_BR/
    ├── ja/
    ├── tr/
    ├── ar/
    ├── id/
    ├── ru/
    └── hi/

```

### Rollout Strategy[#](#rollout-strategy "Link to this heading")

* ****Phase 1:**** `en`, `zh_CN`, `es`, `fr`
* ****Phase 2:**** `pt_BR`, `ja`, `tr`
* ****Phase 3:**** `ar`, `id`, `ru`, `hi`

****Why this order?****

* Maximizes global documentation coverage.
* Prioritizes large Python, AI, and scientific computing communities.
* Keeps maintenance manageable.
* Encourages community-driven translations.

## Future Enhancements[#](#future-enhancements "Link to this heading")

* Weblate integration
* Translation dashboards
* Machine translation suggestions
* Versioned multilingual docs
* Theme language switcher
* Continuous localization

## Summary[#](#summary "Link to this heading")

```
English
  │
  ▼
gettext
  │
  ▼
POT
  │
  ▼
PO
  │
  ▼
Translations
  │
  ▼
Localized HTML
  │
  ▼
GitHub Pages / Read the Docs

```

---

# 🌍 Internationalization (i18n) Guide[#](#id1 "Link to this heading")

This guide follows the official Sphinx internationalization workflow.

## References Used Throughout[#](#references-used-throughout "Link to this heading")

* Sphinx Internationalization:
  https://www.sphinx-doc.org/en/master/usage/advanced/intl.html
* sphinx-intl Quickstart:
  https://sphinx-intl.readthedocs.io/en/master/quickstart.html
* PyData Sphinx Theme: https://pydata-sphinx-theme.readthedocs.io/
* GNU gettext: https://www.gnu.org/software/gettext/manual/

---

## Step 1 — Configure Sphinx[#](#step-1-configure-sphinx "Link to this heading")

Configure `locale_dirs`, `gettext_compact`, and language settings in
`conf.py`.

****Verification****

* Official Sphinx i18n documentation:
  https://www.sphinx-doc.org/en/master/usage/advanced/intl.html

---

## Step 2 — Extract Messages[#](#step-2-extract-messages "Link to this heading")

Run `make gettext` to generate POT templates.

****Verification****

* https://www.sphinx-doc.org/en/master/usage/advanced/intl.html#gettext

---

## Step 3 — Create Translation Catalogs[#](#step-3-create-translation-catalogs "Link to this heading")

Use `sphinx-intl update`.

****Verification****

* https://sphinx-intl.readthedocs.io/en/master/quickstart.html

---

## Step 4 — Translate[#](#step-4-translate "Link to this heading")

Edit `.po` files using PO editors or translation platforms.

****Verification****

* https://www.gnu.org/software/gettext/manual/

---

## Step 5 — Build Localized Documentation[#](#step-5-build-localized-documentation "Link to this heading")

Build each language independently.

****Verification****

* https://www.sphinx-doc.org/en/master/usage/advanced/intl.html

---

## Step 6 — CI/CD[#](#step-6-ci-cd "Link to this heading")

Automate gettext extraction, catalog validation, compilation, and
language builds.

****Verification****

* https://www.sphinx-doc.org/en/master/usage/builders/index.html

---

## Step 7 — Deploy[#](#step-7-deploy "Link to this heading")

Publish `/en`, `/tr`, `/fr`, etc. on GitHub Pages or Read the Docs.

****Verification****

* https://docs.readthedocs.io/

---

# Further Reading[#](#further-reading "Link to this heading")

## Official Documentation[#](#official-documentation "Link to this heading")

* Sphinx User Guide https://www.sphinx-doc.org/
* Sphinx Internationalization
  https://www.sphinx-doc.org/en/master/usage/advanced/intl.html
* sphinx-intl https://sphinx-intl.readthedocs.io/
* PyData Sphinx Theme https://pydata-sphinx-theme.readthedocs.io/
* GNU gettext https://www.gnu.org/software/gettext/manual/

## Related Topics[#](#related-topics "Link to this heading")

* Documentation Architecture
* Continuous Localization
* GitHub Actions
* Read the Docs
* GitHub Pages
* Weblate
* Transifex
* Crowdin
* Babel
* reStructuredText
* MyST Markdown
* sphinx-design
* sphinx-copybutton
* sphinxcontrib-mermaid
* sphinx-gallery
* autodoc
* autosummary
* intersphinx
* napoleon
* linkcheck
* spelling
* versioned documentation
* documentation governance
* contributor workflows
* translation QA
* accessibility
* search indexing
* localization testing

---

---

# Review Recommendations[#](#review-recommendations "Link to this heading")

## Executive Summary[#](#executive-summary "Link to this heading")

Adopt English as the canonical documentation source and use Sphinx
gettext, sphinx-intl, and translation catalogs for all localized builds.

## Suggested New Sections[#](#suggested-new-sections "Link to this heading")

1. Architecture Decision Record (ADR)
2. Translation Governance
3. Contributor Guide
4. Translation Style Guide
5. Terminology Glossary
6. CI/CD Workflow
7. GitHub Pages Deployment
8. Read the Docs Deployment
9. Weblate Integration
10. Security Considerations
11. Performance & Scalability
12. Versioning Strategy
13. Troubleshooting
14. FAQ
15. Best Practices
16. Common Pitfalls
17. Migration Guide
18. Future Roadmap
19. Command Cheat Sheet
20. Complete Reference Index

## Documentation Quality Checklist[#](#documentation-quality-checklist "Link to this heading")

* [ ] English is the single source of truth.
* [ ] No duplicated documentation trees.
* [ ] Every section cites official documentation.
* [ ] CI validates every language.
* [ ] API documentation remains untranslated.
* [ ] Links are checked.
* [ ] Search indexes are generated.
* [ ] Translation coverage is monitored.

## Recommended Official References[#](#recommended-official-references "Link to this heading")

### Core[#](#core "Link to this heading")

* https://www.sphinx-doc.org/
* https://www.sphinx-doc.org/en/master/usage/advanced/intl.html
* https://sphinx-intl.readthedocs.io/
* https://pydata-sphinx-theme.readthedocs.io/
* https://www.gnu.org/software/gettext/manual/

### Deployment[#](#deployment "Link to this heading")

* https://docs.readthedocs.io/
* https://pages.github.com/

### Localization Platforms[#](#localization-platforms "Link to this heading")

* https://weblate.org/
* https://www.transifex.com/
* https://crowdin.com/

### Sphinx Extensions[#](#sphinx-extensions "Link to this heading")

* MyST Parser
* sphinx-design
* sphinx-copybutton
* sphinx-gallery
* sphinxcontrib-mermaid
* autodoc
* autosummary
* intersphinx
* napoleon

### Community[#](#community "Link to this heading")

* Write the Docs
* Diátaxis documentation framework