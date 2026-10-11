# Getting started[#](#getting-started "Link to this heading")

The public plotting functions are:

* `aucplot`;
* `evalplot`;
* `decileplot`;
* `modelplot`; and
* `print_labels` for decile-column descriptions.

Each plotting function follows a seaborn-like data/x/y/hue style. Prefer
explicit column names in a DataFrame when a plot will be maintained over time;
passing anonymous arrays makes schema mistakes harder to diagnose.