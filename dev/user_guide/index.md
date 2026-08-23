📚 Scikit-plots Documentation
  
 0.5.dev0+git.20260823.71eae2e - August 23, 2026 18:39 UTC

# User Guide[#](#user-guide "Link to this heading")

**nearest neighbor**

* [ANNoy](annoy/index.html)
  * [Vector Similarity Search](annoy/annoy_index_vector_database.html)
    * [Vector similarity search](annoy/annoy_index_vector_database.html#vector-similarity-search)
    * [Vector database vs “vector index library”](annoy/annoy_index_vector_database.html#vector-database-vs-vector-index-library)
    * [Pros and cons of vector search](annoy/annoy_index_vector_database.html#pros-and-cons-of-vector-search)
    * [5 practical tips](annoy/annoy_index_vector_database.html#practical-tips)
    * [Open source options](annoy/annoy_index_vector_database.html#open-source-options)
    * [How to choose (simple rules)](annoy/annoy_index_vector_database.html#how-to-choose-simple-rules)
  * [Index Inheritance](annoy/annoy_index_inheritance_diagrams.html)
    * [Index + mixins](annoy/annoy_index_inheritance_diagrams.html#index-mixins)
    * [Mixins only (independence + MRO scan)](annoy/annoy_index_inheritance_diagrams.html#mixins-only-independence-mro-scan)
    * [Notes and Limitations](annoy/annoy_index_inheritance_diagrams.html#notes-and-limitations)
  * [ANNoy Cython](annoy/_annoy.html)
  * [Public Python API](annoy/index.html#public-python-api)
  * [Workflow](annoy/index.html#workflow)
  * [Quick start](annoy/index.html#quick-start)
  * [Notes](annoy/index.html#notes)
  * [High-level wrapper: `Index`](annoy/index.html#high-level-wrapper-index)
  * [Mixins used by the high-level wrapper](annoy/index.html#mixins-used-by-the-high-level-wrapper)
  * [Further reading](annoy/index.html#further-reading)
  * [References](annoy/index.html#references)
**metric analysis**

* [Metric Performance](api/index.html)
  * [Decomposition](api/decomposition.html)
    * [Principal Component Analysis (PCA)](api/decomposition.html#principal-component-analysis-pca)
  * [Estimators](api/estimators.html)
    * [Regressor Model](api/estimators.html#regressor-model)
    * [Classifier Model](api/estimators.html#classifier-model)
    * [Cluster Model](api/estimators.html#cluster-model)
  * [Metrics](api/metrics.html)
    * [Regression metrics](api/metrics.html#regression-metrics)
    * [Classification metrics](api/metrics.html#classification-metrics)
    * [Clustering metrics](api/metrics.html#clustering-metrics)
**remarks citation generation**

* [Corpus](corpus/index.html)
  * [Corpus (Remarks Citation) Generation](corpus/index.html#corpus-remarks-citation-generation)
  * [Quick start](corpus/index.html#quick-start)
**live, on demand generation**

* [Cython](cython/index.html)
  * [Instant PKG/MOD Generation](cython/index.html#instant-pkg-mod-generation)
    * [Cython templates](cython/_templates/templates_index.html)
**decile-wise analysis**

* [Decile-Wise Performance](decile/index.html)
  * [KeyToDataScience](decile/kds.html)
    * [kds Plots](decile/kds.html#kds-plots)
  * [ModelPlotPy](decile/modelplotpy.html)
    * [ModelPlotPy Plots](decile/modelplotpy.html#modelplotpy-plots)
    * [modelplotpy financial](decile/modelplotpy.html#modelplotpy-financial)
**data imputation**

* [Impute](impute/index.html)
  * [ANNImputer](impute/index.html#annimputer)
  * [TL;DR](impute/index.html#tl-dr)
  * [Overview](impute/index.html#overview)
  * [Motivation](impute/index.html#motivation)
  * [Mechanism](impute/index.html#mechanism)
  * [Notes](impute/index.html#notes)
  * [Comparison](impute/index.html#comparison)
**logging system**

* [Logging](logging/index.html)
  * [Configuring the logging system](logging/index.html#configuring-the-logging-system)
**memory mapping**

* [MemMap](memmap/index.html)
  * [Conceptual overview](memmap/index.html#conceptual-overview)
  * [What this module is](memmap/index.html#what-this-module-is)
  * [What this module is NOT](memmap/index.html#what-this-module-is-not)
  * [Typical use cases](memmap/index.html#typical-use-cases)
  * [Design principles](memmap/index.html#design-principles)
  * [Relationship to other APIs](memmap/index.html#relationship-to-other-apis)
  * [Platform notes](memmap/index.html#platform-notes)
  * [Notes for developers](memmap/index.html#notes-for-developers)
**mcp**

* [MCP](mcp/index.html)
  * [Scientific grounding: evidence, not absolute truth](mcp/index.html#scientific-grounding-evidence-not-absolute-truth)
  * [How the pieces fit](mcp/index.html#how-the-pieces-fit)
  * [At a glance](mcp/index.html#at-a-glance)
  * [Choose your scenario](mcp/index.html#choose-your-scenario)
  * [Quick start](mcp/index.html#quick-start)
  * [Scenario 1: connect a local assistant](mcp/index.html#scenario-1-connect-a-local-assistant)
  * [Scenario 2: test before connecting anything](mcp/index.html#scenario-2-test-before-connecting-anything)
  * [Scenario 3: search your own documentation](mcp/index.html#scenario-3-search-your-own-documentation)
  * [Scenario 4: build a curated corpus](mcp/index.html#scenario-4-build-a-curated-corpus)
  * [Scenario 5: add semantic retrieval with Annoy](mcp/index.html#scenario-5-add-semantic-retrieval-with-annoy)
  * [Scenario 6: combine lexical and semantic evidence](mcp/index.html#scenario-6-combine-lexical-and-semantic-evidence)
  * [Scenario 7: make CI detect the wrong corpus](mcp/index.html#scenario-7-make-ci-detect-the-wrong-corpus)
  * [Scenario 8: run a local HTTP endpoint](mcp/index.html#scenario-8-run-a-local-http-endpoint)
  * [Scenario 9: run in Docker](mcp/index.html#scenario-9-run-in-docker)
  * [Scenario 10: serve remote or team clients safely](mcp/index.html#scenario-10-serve-remote-or-team-clients-safely)
  * [How a documentation search works](mcp/index.html#how-a-documentation-search-works)
  * [Read retrieval results scientifically](mcp/index.html#read-retrieval-results-scientifically)
  * [Security by design](mcp/index.html#security-by-design)
  * [Reliable operation](mcp/index.html#reliable-operation)
  * [Useful runtime controls](mcp/index.html#useful-runtime-controls)
  * [Common problems](mcp/index.html#common-problems)
    * [The command appears to hang](mcp/index.html#the-command-appears-to-hang)
    * [The health check passes but search is wrong](mcp/index.html#the-health-check-passes-but-search-is-wrong)
    * [My JSONL file is rejected](mcp/index.html#my-jsonl-file-is-rejected)
    * [No documentation matches](mcp/index.html#no-documentation-matches)
    * [The top result is relevant but the claim is still wrong](mcp/index.html#the-top-result-is-relevant-but-the-claim-is-still-wrong)
    * [A non-local HTTP bind is refused](mcp/index.html#a-non-local-http-bind-is-refused)
    * [A production container rebuilds on import](mcp/index.html#a-production-container-rebuilds-on-import)
  * [Designed to grow without changing the basic workflow](mcp/index.html#designed-to-grow-without-changing-the-basic-workflow)
  * [Keep the user guide simple](mcp/index.html#keep-the-user-guide-simple)
  * [Where to go next](mcp/index.html#where-to-go-next)
**workflow automation**

* [MLflow](mlflow/index.html)
**lightweight high-performance**

* [Nc](nc/index.html)
**data preprocessing**

* [Preprocessing](preprocessing/index.html)
  * [DummyCodeEncoder](preprocessing/index.html#dummycodeencoder)
  * [GetDummies](preprocessing/index.html#getdummies)
**random generator**

* [Random](random/index.html)
**seaborn based**

* [Seaborn](seaborn/index.html)
  * [AUC Plot (experimental)](seaborn/index.html#auc-plot-experimental)
  * [Eval Plot (experimental)](seaborn/index.html#eval-plot-experimental)
  * [Decile Plot (experimental)](seaborn/index.html#decile-plot-experimental)
**extended by astropy**

* [Stats](stats/index.html)
  * [Astrostatistics Tools (experimental)](stats/index.html#astrostatistics-tools-experimental)
  * [Tweedie Distribution (generalized family)](stats/index.html#tweedie-distribution-generalized-family)
    * [Common Applications](stats/index.html#common-applications)
**tensorflow keras**

* [Visualkeras](visualkeras/index.html)
  * [Visualkeras Visualization](visualkeras/index.html#visualkeras-visualization)
  * [Graphical Visualization](visualkeras/index.html#graphical-visualization)
  * [Layered Visualization](visualkeras/index.html#layered-visualization)
  * [Visualization Helper](visualkeras/index.html#visualization-helper)
**array api dispatching**

* [Array API support](_lib/index.html)
  * [Example usage](_lib/index.html#example-usage)
  * [Support for `Array API`-compatible inputs](_lib/index.html#support-for-array-api-compatible-inputs)
  * [Common estimator checks](_lib/index.html#common-estimator-checks)
**branding**

* [Brand](_brand/index.html)
  * [CLI Banner](_brand/_banner.html)
  * [Logo](_brand/_logo.html)

## Under Development[#](#under-development "Link to this heading")

development

* [C-Experimental (experimental)](cexperimental/index.html)
* [C-Externals (experimental)](cexternals/index.html)
* [Experimental (experimental)](experimental/index.html)
* [Externals (experimental)](externals/index.html)
* [Externals (experimental)](_externals/index.html)