# Data Analytics — course guide[#](#data-analytics-course-guide "Link to this heading")

This folder builds the ****Data Analytics**** hub of the scikit-plots `learn/`
documentation: a 216-lesson, career-oriented course taking a learner from the case
for data through preparation, cleaning, analysis (spreadsheets + SQL), visualization,
Python (NumPy + pandas), and the analyst job search — rewritten in original words and
cross-linked into a browsable Sphinx site. It is the sixth subfolder, and it follows
the same self-contained generator pattern as `terminology/`, `time_series/`,
`deep_learning/`, `data_preparation_and_analysis/`, and `bayesian_data_analysis/` —
****with one structural difference: it is nested two levels deep**** (a top hub plus eight
per-section browsers), where the other five are flat.

The course renders at
`https://scikit-plots.github.io/dev/learn/data_analytics/`.

---

## What is in this folder[#](#what-is-in-this-folder "Link to this heading")

| File | Role |
| --- | --- |
| `DATA_ANALYTICS.md` | This guide. |
| `build_data_analytics.py` | The generator. Reads the inventory + content, writes the hub `index.rst`, eight section `index.rst` browsers, and the 216 lesson pages. Deterministic and idempotent. |
| `da_content.py` | The corpus: `CONTENT` (full lesson bodies), `MINDMAP` (4 cross-links per lesson), and `GLOSS` (one-line gloss per lesson, used by the filter box), all keyed by exact lesson title. |
| `da_inventory.tsv` | ****Frozen.**** Header + 216 rows (`title⇥url⇥section⇥stage`) in curriculum order, stored ****stage-contiguous within each section****. The single source of truth for titles, ordering, section, and stage assignment. |
| `index.rst` | Generated. The top hub browser (all 216 lessons grouped by section). |
| `<n>_<slug>/index.rst` | Generated. One per section — the section browser (that section’s lessons grouped by stage). |
| `<n>_<slug>/NNN-*.rst` | Generated. One page per lesson, 3-digit zero-padded id ****restarting at `001` in each section folder****. |

Everything the generator needs lives in this folder. Nothing outside it is read or
written except the Sphinx build itself.

> ****Note.**** The repository helper `/home/claude/_buildcheck.py` is ****flat-folder only****
> and is ****not**** used for this course. Data Analytics validates with the inline nested
> validator described below, because its `:doc:` targets are relative to each file’s
> own directory across two levels.

---

## Curriculum: 8 sections, 31 stages, 216 lessons[#](#curriculum-8-sections-31-stages-216-lessons "Link to this heading")

The course is organised into 8 ****sections****, each spanning three or four ****stages****;
every lesson belongs to exactly one `(section, stage)`. Sections 1–2 are beginner,
3–6 intermediate, 7 (Python) intermediate→advanced, 8 (job search) applied.

| # | Section (`key`, folder) | 🔣 | Stage (`key`) | 🔣 | Lessons |
| --- | --- | --- | --- | --- | --- |
| ****1**** | ****Foundations**** (`foundations`, `1_foundations`) | 🌱 | `why` | 🌟 | 4 |
|  |  |  | `process` | 🔄 | 8 |
|  |  |  | `thinking` | 🧠 | 7 |
|  |  |  | `tools` | 🧰 | 8 |
| ****2**** | ****Data-Driven Decisions**** (`ddd`, `2_data_driven_decisions`) | 🎯 | `framing` | 🧭 | 7 |
|  |  |  | `metrics` | 📐 | 3 |
|  |  |  | `spreadsheets` | 📗 | 6 |
|  |  |  | `execution` | 🗣 | 11 |
| ****3**** | ****Data Preparation**** (`prep`, `3_data_preparation`) | 📦 | `types` | 🧬 | 7 |
|  |  |  | `bias_ethics` | ⚖️ | 8 |
|  |  |  | `sources` | 🗄️ | 4 |
|  |  |  | `spreadsheets_sql` | 🔢 | 6 |
| ****4**** | ****Data Cleaning & Preparation**** (`cleaning`, `4_data_cleaning_preparation`) | 🧽 | `integrity` | 🧱 | 8 |
|  |  |  | `dirty` | 🧹 | 9 |
|  |  |  | `sql` | 🐬 | 7 |
|  |  |  | `verify` | ✅ | 8 |
| ****5**** | ****Analyze Data**** (`analyze`, `5_analyze_data`) | 📊 | `organize` | 🗂️ | 10 |
|  |  |  | `combine` | 🔗 | 9 |
|  |  |  | `calc` | 🧮 | 8 |
|  |  |  | `advanced` | 🚀 | 3 |
| ****6**** | ****Data Visualization**** (`viz`, `6_data_visualization`) | 🎨 | `principles` | 🎨 | 8 |
|  |  |  | `tableau` | 📊 | 6 |
|  |  |  | `story` | 📖 | 4 |
|  |  |  | `present` | 🎤 | 9 |
| ****7**** | ****Data Analysis Using Python**** (`python`, `7_data_analysis_python`) | 🐍 | `basics` | 🐍 | 10 |
|  |  |  | `control` | 🔀 | 5 |
|  |  |  | `structures` | 📚 | 10 |
|  |  |  | `libraries` | 🐼 | 8 |
| ****8**** | ****Job Search**** (`jobsearch`, `8_job_search`) | 💼 | `identity` | 🧭 | 4 |
|  |  |  | `apply` | 📄 | 6 |
|  |  |  | `interview` | 🎯 | 5 |

Section totals: 27 · 27 · 25 · 32 · 30 · 27 · 33 · 15 = ****216****.

Two registries in `build_data_analytics.py` hold this:

* `SECTIONS[key] = (order, emoji, title, blurb, folder)`; `SECTION_ORDER` fixes the
  section sequence; `SECTION_TOTALS[key]` is the per-section lesson count.
* `STAGES[(section, stage)] = (emoji, title, blurb)`; `STAGE_ORDER[section]` fixes the
  within-section stage sequence.

---

## How the generator works[#](#how-the-generator-works "Link to this heading")

`build_data_analytics.py` is a pure function of its three inputs
(`ANCHOR_PREFIX = "da"`, `N_LESSONS_TOTAL = 216`). One run:

1. `HERE = Path(__file__).resolve().parent`; `sys.path.insert(0, str(HERE))` so
   `da_content` imports regardless of the working directory.
2. Load `da_inventory.tsv` (216 rows) and `da_content.py` (`CONTENT`, `MINDMAP`,
   `GLOSS`).
3. ****Fail-fast validation**** (aborts with exit 1, writing nothing, on any of):

   * inventory row count ≠ `N_LESSONS_TOTAL`;
   * any inventory title without a `CONTENT` entry, or any `CONTENT`/`MINDMAP`/`GLOSS`
     key that is not an ****exact**** inventory title;
   * any `MINDMAP` neighbour not an exact inventory title;
   * any `(section, stage)` not in `STAGES`, or any section not in `SECTIONS`;
   * duplicate titles.
4. Clear only files matching `[0-9]+-*.rst` in each section folder (never touches this
   guide or the hand files).
5. Emit, per section, one `NNN-*.rst` per lesson and the section `index.rst`; then the
   top hub `index.rst`.

Determinism: everything is sorted, no RNG, no timestamps — so two runs are
****byte-identical****. This is verified every build via sha256 and proven at seal time by
a clean-room rebuild.

### Per-section numbering[#](#per-section-numbering "Link to this heading")

Lesson ids restart at `001` in each section folder and run to that section’s total
(e.g. `1_foundations/001`–`027`, `7_data_analysis_python/001`–`033`). The id is the
lesson’s ****position within its section**** in the inventory; because the inventory is
stored stage-contiguous, positions are also stage-contiguous. Filenames are derived
from the ****title**** by `slugify()` (lowercase; `&`→`and`; strip characters that are not
alphanumeric, space, or hyphen; spaces→hyphens), which reduces em-dash, subscript,
parentheses, and ampersand to clean ASCII slugs.

### Each lesson page[#](#each-lesson-page "Link to this heading")

Anchor(s) → auto H1 (`title_bar = ch * max(72, len(title) + 2)`) → section/stage badge
→ ◀ Prev / Next ▶ nav (within the section) plus ↑ Section and ↑ Hub links → body
(`CONTENT`) → `.. seealso::` block (the 4 `MINDMAP` links) → source link. Every full
lesson is: intuition → key idea → a real worked example (a `.. code-block:: python`
or `.. code-block:: sql` where the topic is technical) → an honest “The caveat”
section. Section-closer lessons end with a paragraph handing off to the next section.

### Cross-link resolution[#](#cross-link-resolution "Link to this heading")

`:doc:` targets are ****relative to each file’s directory****: a same-section link is the
bare stem (`NNN-slug`); a cross-section link is `../<folder>/<stem>`. The `MINDMAP`
neighbours may point across sections, so both forms occur. The nested validator
resolves every target against the full doc-set (see below).

---

## Anchors and the `da-` prefix[#](#anchors-and-the-da-prefix "Link to this heading")

Five anchor families, all globally unique:

| Anchor | Emitted on | Example |
| --- | --- | --- |
| `da-<sec>-NNN` | each lesson page | `da-foundations-001` |
| `da-<sec>-index` | each section browser | `da-python-index` |
| `da-<sec>-stage-<stage>` | section browser (per stage) | `da-viz-stage-tableau` |
| `da-section-<sec>` | hub browser (per section) | `da-section-jobsearch` |
| `data-analytics-index` | the hub page | `data-analytics-index` |

`<sec>` is the section ****key**** (`foundations`, `ddd`, `prep`, `cleaning`, `analyze`,
`viz`, `python`, `jobsearch`), not the folder name.

---

## The two-level filterable browser[#](#the-two-level-filterable-browser "Link to this heading")

Both browser levels are produced by ****one shared `render_browser()`**** — identical v2
mechanism, differing only in the grouping key and link targets:

* ****Top hub**** (`index.rst`): groups all 216 lessons by the ****8 sections****; each
  section is a collapsed `.. dropdown::` whose rows link to lesson pages under
  `<folder>/`.
* ****Section browser**** (`<folder>/index.rst`): groups that section’s lessons by its
  ****stages****; each stage is a collapsed dropdown of that stage’s lessons.

Each browser carries:

* a dependency-free JS ****filter box**** (`id="term-filter"`) matching lesson title OR
  `GLOSS` keyword, auto-opening matching dropdowns, showing a live match count, and
  degrading to a plain list when JS is off;
* collapsed `.. dropdown::` groups (class `details.sd-dropdown`) with a blurb and rows
  `NN · Title — gloss`;
* an A–Z master dropdown (class `term-az`).

---

## Legacy anchor compatibility (`COMPAT_ANCHORS`)[#](#legacy-anchor-compatibility-compat-anchors "Link to this heading")

The pre-existing hand-written hub used 9 anchors. To avoid breaking inbound links,
****every lesson page**** emits these as compatibility anchors (after its own page anchor),
formatted per page as `_<anchor>-<sec>-NNN:` so they remain globally unique while
resolving to the lesson:

```
data-analytics   da-foundations  da-decisions  da-prep
da-cleaning      da-analyze      da-viz        da-python
da-jobsearch

```

---

## Landmines (exact titles — copy verbatim, never retype)[#](#landmines-exact-titles-copy-verbatim-never-retype "Link to this heading")

The inventory preserves several source-title oddities. Their `CONTENT` / `MINDMAP` /
`GLOSS` keys ****must**** match the frozen title exactly; retyping with ASCII look-alikes,
“correcting” a typo, or normalising a special character will trip the fail-fast guard.
Lesson ids below are ****per-section**** (the number within that section’s folder).

### 1 · Untitled numeric-slug posts ×2 (prep)[#](#untitled-numeric-slug-posts-2-prep "Link to this heading")

Two source posts had numeric-only slugs; the inventory carries descriptive titles for
them. Nothing special in the key — listed so they are not mistaken for errors.

| Lesson | Source slug | Title |
| --- | --- | --- |
| prep 023 | `…/15229` | Querying Data with SQL |
| prep 025 | `…/15236` | Data Security in Spreadsheets |

### 2 · Intra-course duplicate (cleaning)[#](#intra-course-duplicate-cleaning "Link to this heading")

Two near-identical titles, kept distinct by the `(revisited)` suffix, with distinct
filenames, distinct H1s, distinct bodies, and cross-links to each other:

| Lesson | Title | Body angle |
| --- | --- | --- |
| cleaning 001 | The Importance of Clean Data | the general case |
| cleaning 010 | The Importance of Clean Data (revisited) | the business-cost angle |

Do ****not**** collapse them; both keys are in the frozen inventory.

### 3 · Special characters in titles[#](#special-characters-in-titles "Link to this heading")

Written ****literally**** into the quoted-heredoc `r"""…"""` body (this is safe — see the
triple-quote note). The H1 bar is sized by Python `len()`, which counts each as one
column.

| Lesson | Char | Title |
| --- | --- | --- |
| analyze 030 | em-dash `\u2014` | Creating Temporary Tables in SQL ****—**** Methods, Trade-offs, and Best Practices |
| viz 011 | subscript-2 `\u2082` | Creating a CO****₂**** Emissions Visualization in Tableau Public |

### 4 · Preserved source typo[#](#preserved-source-typo "Link to this heading")

| Lesson | Title (typo kept verbatim) |
| --- | --- |
| python 013 | While Loops and Iteration in ****Python**** |

The missing final “n” is preserved in ****both**** the title/H1 and the slug
(`013-while-loops-and-iteration-in-pytho.rst`). A clean-room rebuild must reproduce the
source byte-for-byte, so do ****not**** “correct” it to **Python**.

### 5 · Triple-quote collision (the `r'''` rule)[#](#triple-quote-collision-the-r-rule "Link to this heading")

| Lesson | Title | Delimiter |
| --- | --- | --- |
| python 010 | Comments, Algorithms, and Docstrings in Python | ****`r'''…'''`**** |

This lesson’s code block shows a NumPyDoc `"""…"""` docstring. Placed inside an
`r"""…"""` `CONTENT` value, the inner `"""` ****terminates the string early**** and the
build fails loudly with a `SyntaxError` (it does not silently ship). The fix: this one
entry uses ****`r'''…'''`**** delimiters so the inner `"""` is inert. No other `CONTENT`
value uses `'''` as a delimiter (the only other `'''` in the file is inside the
explanatory comment above that entry), and the docstrings body itself contains no
`'''`, so the swap is safe.

> ****Rule for any future lesson:**** if a code block shows a `"""` docstring, that
> `CONTENT` entry ****must**** use the `r'''…'''` delimiter. Writing literal Unicode
> (em-dash, subscript, etc.) into an `r"""…"""` body is fine; only triple-quote
> ****sequences**** in code blocks force the `r'''` delimiter.

---

## RST & validation conventions[#](#rst-validation-conventions "Link to this heading")

* ****Section underlines**** must be ≥ header length. Unicode (—, ₂, &, parentheses)
  counts as ****one column**** via Python `len()`. Short “Why … matters”-style headings are
  the usual offenders — count the dashes deliberately (e.g. `Why masking matters` is 19
  chars → needs ≥ 19 dashes). The generator sizes the H1 bar automatically; only the
  in-body sub-headings written by hand in `CONTENT` need manual care.
* ****`.. code-block:: python` / `sql`**** bodies are indented 3 spaces. The underline
  validator ****skips**** any line starting with 3 spaces, so code content never
  false-positives.
* Each technical lesson’s code imports what it uses (`import numpy as np`,
  `import pandas as pd`) so import statements stay copy-runnable.

### The inline nested validator (run every build)[#](#the-inline-nested-validator-run-every-build "Link to this heading")

A short Python block (not `_buildcheck.py`) that, over all `**/*.rst`:

1. builds the doc-set (every `.rst` stem) and anchor-set (every `.. _name:`);
2. resolves each `:doc:` target ****relative to its file’s directory**** (posix normpath;
   a leading `/` means “from the docs root”) and flags any miss;
3. checks each `:ref:` target against the anchor-set;
4. checks every non-indented heading’s underline ≥ heading length;
5. recomputes the sha256 over all pages, rebuilds once, and compares (idempotency);
6. confirms `CONTENT` / `MINDMAP` / `GLOSS` keys ⊆ inventory titles;
7. runs a per-section census of full vs stub pages.

### Validator report[#](#validator-report "Link to this heading")

`build → validate → idempotency` prints, each run:

```
validate: doc 0 | ref 0 | underline 0
idempotent: True | sha: <sha16>

```

with `full lessons: 216/216` and every section `<n>/<total>` at its target. The
defined-anchor set includes the six project hub anchors — `terminology-index`,
`time-series-index`, `deep-learning-index`, `data-preparation-and-analysis-index`,
`bayesian-data-analysis-index`, and `data-analytics-index` — alongside the pre-existing
non-project `cheatsheet-index`, `glossary-index`, and `resources-index`.

### Ship census[#](#ship-census "Link to this heading")

The zip should carry, for this course, ****225 `data_analytics/*.rst`**** files
(216 lessons + 8 section indexes + 1 hub) and ****0**** `.pyc` / `__pycache__` entries.

---

## Rebuilding[#](#rebuilding "Link to this heading")

From this folder:

```
python3 build_data_analytics.py

```

Writes the hub `index.rst`, eight section `index.rst` browsers, and 216 pages. Then run
the inline nested validator block, and sync + rezip the whole `learn/` tree
defensively:

```
SRC=/home/claude/learn/data_analytics
OUT=/mnt/user-data/outputs/learn/data_analytics
find "$OUT" -type f -exec rm -f {} \; ; sync; rm -rf "$OUT"; mkdir -p "$OUT"
cp -r "$SRC"/. "$OUT"/; rm -rf "$OUT"/__pycache__ "$OUT"/*/__pycache__
cd /mnt/user-data/outputs && zip -rq scikit-plots-learn.zip learn \
  -x '*__pycache__*' -x '*.pyc'

```

### Environment notes[#](#environment-notes "Link to this heading")

* `bash` here is `/bin/sh` (dash): no `${var:0:N}` slicing, and `$'\uXXXX'` escapes do
  ****not**** expand — append any Unicode inventory rows via Python, never a heredoc.
  (The inventory is frozen, so this only matters if re-harvesting. Writing literal
  Unicode into a quoted-heredoc `r"""…"""` body is safe.)
* The output mount can throw transient I/O errors mid-sync; delete file-by-file,
  `sync`, then remove and recreate the directory to recover.
* The working tree resets between sessions; the source of truth persists under
  `/mnt/user-data/outputs/learn/data_analytics/`. Restore by copying it back (plus the
  five sealed sibling folders) before rebuilding.

---

## Provenance[#](#provenance "Link to this heading")

Content is an original rewrite of a data-analytics curriculum, written in original
words to respect copyright, cross-linked into the mind-map, and mapped where relevant
to the earlier tools the course teaches (spreadsheets, SQL, NumPy, pandas). Most
lessons are canonical fundamentals written from established knowledge; a handful were
grounded per batch against authoritative sources where they name specific tools or
frameworks — the ****McCandless Method**** for data storytelling, and the AI job-search
tools ****Career Dreamer**** (Grow with Google), ****NotebookLM**** (Google’s source-grounded
research assistant), and ****Gemini Live**** (Google’s real-time voice mode) — each
described from its documented behaviour rather than assumption. Every lesson ends with
an honest caveat, and the job-search section keeps the course’s throughline: reason
from evidence, respect data integrity, communicate honestly, and present real ability
rather than fabricated claims.