# Getting started[#](#getting-started "Link to this heading")

## Stable standard surface[#](#stable-standard-surface "Link to this heading")

```
from scikitplot.impute import SimpleImputer

imputer = SimpleImputer(strategy="median")
X_filled = imputer.fit_transform(X)

```

## Experimental ANN surface[#](#experimental-ann-surface "Link to this heading")

```
from scikitplot.experimental import enable_ann_imputer  # noqa: F401
from scikitplot.impute import ANNImputer

imputer = ANNImputer(n_neighbors=5, backend="annoy")
X_filled = imputer.fit_transform(X)

```

The enable import is deliberate: it makes use of an API that may change without
the normal deprecation cycle explicit at the call site.