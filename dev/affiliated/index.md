# [Scikit-Plots Partial Distributions](#id1)[#](#scikit-plots-partial-distributions "Link to this heading")

Scikit-Plots can be installed as the full `scikit-plots` distribution, but
selected parts of the same `scikitplot` import package are also built as
smaller distributions from the repository’s `libs/` directory. These are
****project-maintained partial distributions****: they share the Scikit-Plots source
tree, release policy, maintainers, and compatibility contract.

This is deliberately different from the Astropy meaning of an **affiliated
package**, where an independently managed project joins a broader ecosystem.
The `affiliated` documentation area is retained as the umbrella for related
packages, but the registry below currently contains only Scikit-Plots-owned
partial distributions. It does not imply independent governance or third-party
endorsement.

## [Why partial distributions exist](#id2)[#](#why-partial-distributions-exist "Link to this heading")

The full project covers plotting, retrieval, documentation tooling, compiled
extensions, model/agent helpers, and development utilities. A user or service
may need only one of those capabilities. Partial distributions make those
focused installations possible without maintaining a second copy of the source.

The packaging model has three important properties:

* ****One source tree.**** The implementation remains under `scikitplot/`. A
  `libs/<name>` build stages only the files owned by that distribution.
* ****One owner per file.**** `scikitplot/_distributions.py` defines ownership so
  two partial distributions do not claim the same source path.
* ****One compatibility contract.**** The core API number in
  `scikitplot/_distributions.py` lets `scikitplot doctor` judge whether
  installed partial distributions are expected to work together instead of
  treating every version difference as an error.

The package metadata in each `libs/<name>` directory is generated. Durable
changes belong in `scikitplot/_distributions.py`, `libs/_tools/registry.py`,
or the root `pyproject.toml` rather than in generated `libs/` files.

## [Choosing an installation](#id3)[#](#choosing-an-installation "Link to this heading")

Use the full `scikit-plots` distribution when you want the normal complete
library. Use a partial distribution when you deliberately want a smaller
runtime, a focused deployment, or one Scikit-Plots capability in isolation.

Partial distributions share the `scikitplot` namespace. They are not forks
and they do not expose a replacement import name. For example,
`scikit-plots-cleanprompt` still provides `scikitplot.cleanprompt`.

Before combining independently installed parts, run:

```
scikitplot doctor

```

That command reports the installed parts and checks their declared core API
compatibility. For reproducible deployments, pin the distributions you choose
rather than assuming unrelated releases are interchangeable.

### Partial-distribution registry[#](#partial-distribution-registry "Link to this heading")

Current project-owned partial distributions: ****9****.

The registry below is generated from the same ownership and packaging
metadata used to build the distributions. A new `libs/` distribution
therefore cannot be silently omitted from this page.

| Distribution | Import surface | Python | Build | Purpose |
| --- | --- | --- | --- | --- |
| `scikit-plots-skinny` | `scikitplot`, `scikitplot._cli`, `scikitplot.logging` | same as scikit-plots core | pure Python | Dependency-free core of scikit-plots: the root package, logging and the scikitplot command line. |
| `scikit-plots-rank-bm25` | `scikitplot.rank_bm25` | same as scikit-plots core | pure Python | BM25 ranking algorithms (Okapi BM25, BM25L, BM25+) from scikit-plots. |
| `scikit-plots-corpus` | `scikitplot.corpus` | >=3.9 | pure Python | Document ingestion, chunking, embedding and retrieval pipeline from scikit-plots. |
| `scikit-plots-annoy` | `scikitplot.annoy`, `scikitplot.cexternals._annoy` | >=3.10 | compiled | Approximate nearest-neighbour index (Annoy) with the scikit-plots high-level wrapper; the one partial distribution that is compiled. |
| `scikit-plots-sphinx-ext` | `scikitplot._externals._sphinx_ext` | same as scikit-plots core | pure Python | The Sphinx extensions of the scikit-plots documentation, installable on their own for any Sphinx project. |
| `scikit-plots-mcp` | `scikitplot.mcp` | same as scikit-plots core | pure Python | Documentation retrieval for Model Context Protocol servers from scikit-plots. |
| `scikit-plots-cleanprompt` | `scikitplot.cleanprompt` | same as scikit-plots core | pure Python | Redact sensitive values from a prompt before it is sent to an LLM, from scikit-plots. |
| `scikit-plots-cython` | `scikitplot.cython` | >=3.10 | pure Python | Runtime Cython and pybind11 build helpers from scikit-plots. |
| `scikit-plots-mlflow` | `scikitplot.mlflow` | >=3.11 | pure Python | Project-level MLflow configuration and workflow helpers from scikit-plots. |

### Install from a checkout[#](#install-from-a-checkout "Link to this heading")

Each entry under `libs/` is a buildable distribution. From a repository
checkout, install only the part you need with:

```
python -m pip install ./libs/<directory>

```

The current directory mapping is:

| Distribution | Repository directory |
| --- | --- |
| `scikit-plots-skinny` | `libs/skinny/` |
| `scikit-plots-rank-bm25` | `libs/rank-bm25/` |
| `scikit-plots-corpus` | `libs/corpus/` |
| `scikit-plots-annoy` | `libs/annoy/` |
| `scikit-plots-sphinx-ext` | `libs/sphinx-ext/` |
| `scikit-plots-mcp` | `libs/mcp/` |
| `scikit-plots-cleanprompt` | `libs/cleanprompt/` |
| `scikit-plots-cython` | `libs/cython/` |
| `scikit-plots-mlflow` | `libs/mlflow/` |

### Packaging infrastructure[#](#packaging-infrastructure "Link to this heading")

`libs/_tools` is not an installable partial distribution. It is the
repository tooling that validates ownership, generates package metadata,
builds the partial distributions, and verifies them in installed-wheel
environments. Maintainers can inspect the canonical registry with:

```
python -m libs._tools list

```

and validate generated packaging files with:

```
python -m libs._tools check

```

## [Where to learn the capabilities](#id4)[#](#where-to-learn-the-capabilities "Link to this heading")

The partial-distribution registry describes packaging boundaries; the user
guides describe behavior. Start with the corresponding guide when one exists:

* [Corpus](../user_guide/corpus/index.html) – ingestion, chunking, embedding,
  and retrieval workflows.
* [Annoy](../user_guide/annoy/index.html) – approximate-nearest-neighbour
  indexes and the high-level wrapper.
* [Sphinx extensions](../user_guide/_externals/_sphinx_ext/index.html) – the
  documentation extensions shipped by `scikit-plots-sphinx-ext`.
* [MCP](../user_guide/mcp/index.html) – documentation retrieval and MCP
  server workflows.
* [CleanPrompt](../user_guide/cleanprompt/index.html) – prompt redaction,
  policy, vault, CLI, and agent workflows.
* [Cython helpers](../user_guide/cython/index.html) – runtime Cython and
  pybind11 build workflows.
* [MLflow helpers](../user_guide/mlflow/index.html) – project-level MLflow
  configuration and runtime helpers.
* [Logging](../user_guide/logging/index.html) – logging behavior provided by
  the dependency-light core distribution.
* [Rank-BM25](../user_guide/rank_bm25/index.html) – lexical document ranking
  with Okapi BM25, BM25L, BM25+, stable result identities, and persistence.

## [For maintainers](#id5)[#](#for-maintainers "Link to this heading")

Treat `libs/` as generated packaging output plus verification tooling, not as
another source tree. The normal maintenance cycle from the repository root is:

```
python -m libs._tools list
python -m libs._tools check
python -m libs._tools generate
python -m libs._tools verify

```

`list` shows the current ownership boundaries. `check` detects stale
generated package files. `generate` rewrites those files from canonical
metadata. `verify` builds and exercises the distributions as installed
artifacts rather than relying only on source-checkout imports.

This page is generated from those same canonical registries. After changing a
partial-distribution boundary or package declaration, validate it with:

```
python tools/maint_tools/generate_affiliated_index.py check

```

Preview a documentation synchronization with:

```
python tools/maint_tools/generate_affiliated_index.py sync

```

and write the reviewed result explicitly with:

```
python tools/maint_tools/generate_affiliated_index.py sync --apply

```

## [Design boundary](#id6)[#](#design-boundary "Link to this heading")

This registry is intentionally about packages owned by the Scikit-Plots
repository. If Scikit-Plots later introduces an Astropy-style program for
independently maintained affiliated projects, that should have a separate
review policy and registry instead of silently mixing external governance with
these project-owned partial distributions.