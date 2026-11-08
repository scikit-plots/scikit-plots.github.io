# Getting started[#](#getting-started "Link to this heading")

## Installation[#](#installation "Link to this heading")

Rank-BM25 is included in the full `scikit-plots` distribution. It is also
shipped as the project-maintained partial distribution
`scikit-plots-rank-bm25`:

```
python -m pip install "scikit-plots-skinny @ git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/skinny" \
    "scikit-plots-rank-bm25 @ git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/rank-bm25"

```

It is not on PyPI yet: this builds it, with the core it depends on, from the
repository (`git` needed). [Installing A lightweight version scikit-plots-x](../../install/installation.html#installing-a-lightweight-version) also
gives the commands for the project’s staging index.

Do not install the partial distribution alongside the full distribution in the
same environment: both own `scikitplot.rank_bm25` files. See
[Scikit-Plots Partial Distributions](../../affiliated/index.html) for the repository’s partial-distribution model.

```
from scikitplot.rank_bm25 import BM25Okapi

texts = [
    "hello there good man",
    "it is quite windy in london",
    "how is the weather today",
]
corpus = [text.lower().split() for text in texts]
ids = ["greeting", "london-weather", "question"]

index = BM25Okapi(corpus, doc_ids=ids)
hits = index.get_top_ids("windy london".split(), n=2)

```

`get_top_ids` is the preferred retrieval surface when results need stable
identity. An out-of-vocabulary query returns no sparse candidates instead of
inventing an arbitrary zero-score ordering.