# Python API[#](#python-api "Link to this heading")

The base `BM25` owns corpus statistics, validation, sparse candidate
state, persistence and identity. Instantiate a concrete scorer for normal use.

The implementation contains analyzer/recipe identity machinery, but analyzer
declarations are not currently exported as the stable top-level public API.
Do not build application code against private import paths merely to persist a
custom tokenizer.