flowchart TB
A[run, run\_url, or run\_batch]
D[Dispatch one source]
Q{URL source?}
RF[DocumentReader.create or from\_url]
RD[Read, chunk, and filter]
N[Optional normalization]
E[Optional NLP enrichment]
V[Optional embedding]
X[Optional export]
P[PipelineResult]
A --> D
D --> Q
Q -->|Local path| RF
Q -->|HTTP or HTTPS| RF
RF --> RD
RD --> N
N --> E
E --> V
V --> X
X --> P