flowchart TB
I[import scikitplot.corpus]
F[Package facade \_\_init\_\_]
M[Import public submodules]
R[Reader registration side effect]
E[Aggregate module \_\_all\_\_ lists]
P[Top-level public names]
I --> F
F --> M
M --> R
M --> E
E --> P
P --> B[CorpusBuilder]
P --> L[CorpusPipeline]
P --> DR[DocumentReader]
P --> C[Components and data contracts]