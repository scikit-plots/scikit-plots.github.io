# Standard imputers[#](#standard-imputers "Link to this heading")

The public stable namespace exports `SimpleImputer` and
`MissingIndicator` with scikit-learn-compatible estimator behavior.
They are the default choice when a simple per-feature strategy or missingness
indicator is sufficient.

Use standard imputers when approximate neighbor indexing would add operational
complexity without a measured benefit. Keep preprocessing fit strictly on the
training partition to avoid data leakage.