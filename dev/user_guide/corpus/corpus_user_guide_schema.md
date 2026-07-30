# Corpus User Guide Diagram Schema[#](#corpus-user-guide-diagram-schema "Link to this heading")

This file is an integration template. Copy the relevant sections into the
actual `scikitplot.corpus` user-guide pages and adjust relative paths if the
diagram directory is placed elsewhere.

## At a glance[#](#at-a-glance "Link to this heading")

Use the logical view first. It answers what happens to user data without
exposing package internals.

orphan:

flowchart TB
U[User or application]
A[CorpusBuilder or CorpusPipeline]
S[Source resolution]
R[Format-specific reader]
C[Chunking and filtering]
T[Normalize and enrich]
E[Optional embedding]
D[CorpusDocument collection]
O[Search, storage, export, adapters]
U --> A
A --> S
S --> R
R --> C
C --> T
T --> E
E --> D
D --> O

## Architecture for maintainers[#](#architecture-for-maintainers "Link to this heading")

Keep the physical package layout separate from the user journey.

orphan:

flowchart TB
F[Public facade<br/>scikitplot.corpus]
subgraph ORCH[Orchestration]
B[\_corpus\_builder]
P[\_pipeline]
H[\_custom\_hooks]
end
subgraph INPUT[Input and dispatch]
S[\_sources]
U[\_url\_handler]
D[\_downloader]
A[\_archive\_handler]
R[\_readers and \_base]
end
subgraph PROCESS[Processing]
C[\_chunkers]
N[\_normalizers]
E[\_enrichers]
M[\_embeddings]
end
subgraph DATA[Contracts and outputs]
SC[\_schema and \_types]
X[\_similarity]
ST[\_storage]
EX[\_export]
AD[\_adapters]
MD[\_metadata]
RG[\_registry]
end
F --> B
F --> P
F --> H
B --> S
P --> S
H --> P
S --> U
U --> D
D --> A
A --> R
R --> C
C --> N
N --> E
E --> M
M --> SC
SC --> X
SC --> ST
SC --> EX
SC --> AD
SC --> MD
RG -. component lookup .-> B
RG -. component lookup .-> P

## Public API[#](#public-api "Link to this heading")

orphan:

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

## CorpusPipeline[#](#corpuspipeline "Link to this heading")

orphan:

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

orphan:

stateDiagram-v2
direction TB
[\*] --> Configured
Configured --> Dispatching: run / run\_url / run\_batch
Dispatching --> Reading: reader selected
Reading --> Transforming: documents collected
Transforming --> Embedding: engine configured
Transforming --> Exporting: embedding skipped
Embedding --> Exporting
Exporting --> Completed
Completed --> Configured: next independent run
Reading --> Failed: source or reader error
Exporting --> Failed: export error
Transforming --> TransformWarning: optional stage error
TransformWarning --> Exporting: continue with unchanged documents
Failed --> Configured: caller handles exception

## CorpusBuilder[#](#corpusbuilder "Link to this heading")

orphan:

flowchart TB
B[CorpusBuilder.build]
X[Expand files, directories, URLs, and archives]
I[Ingest sources serially or with workers]
R[Reader, chunker, and filter]
N[Optional normalization]
E[Optional enrichment]
V[Optional embedding]
S[Optional similarity index]
O[BuildResult]
A[Search, export, or adapt]
B --> X
X --> I
I --> R
R --> N
N --> E
E --> V
V --> S
S --> O
O --> A

orphan:

stateDiagram-v2
direction TB
[\*] --> Created
Created --> Ready: configuration accepted
Ready --> Building: build
Building --> Built: BuildResult stored
Building --> BuiltWithErrors: some sources fail
BuiltWithErrors --> Searchable: index available
Built --> Searchable: index available
Built --> Exportable
Searchable --> Exportable
Built --> Building: add or rebuild
BuiltWithErrors --> Building: add or rebuild
Exportable --> Building: add or rebuild
Ready --> Closed: close
Built --> Closed: close
BuiltWithErrors --> Closed: close
Exportable --> Closed: close
Closed --> [\*]

## Sources, URLs, and downloads[#](#sources-urls-and-downloads "Link to this heading")

orphan:

flowchart TB
C[CorpusSource constructor]
K{Source kind}
F[Single file]
D[Directory or glob]
U[URL list]
M[Manifest]
V[Validate source configuration]
I[iter\_entries generator]
E[SourceEntry with provenance]
R[Reader or builder ingestion]
C --> K
K --> F
K --> D
K --> U
K --> M
F --> V
D --> V
U --> V
M --> V
V --> I
I --> E
E --> R

orphan:

flowchart TB
U[Input URL]
C[classify\_url]
Q{Extensionless web URL?}
P[Optional Content-Type probe]
K{Resolved URL kind}
Y[YouTube reader]
W[Web reader]
R[Provider-specific resolve\_url]
D[Bounded download]
I[Infer safe local extension]
L[Local path for reader dispatch]
U --> C
C --> Q
Q -->|Yes and enabled| P
Q -->|No| K
P --> K
K -->|YouTube| Y
K -->|HTML page| W
K -->|Downloadable, Drive, GitHub| R
R --> D
D --> I
I --> L

orphan:

flowchart TB
A[AnyDownloader]
C[Classify each URL]
B[Broadcast or align per-URL parameters]
K{Provider}
G[GoogleDriveDownloader]
H[GitHubDownloader]
Y[YouTubeDownloader]
W[WebDownloader]
P[BaseDownloader policy and limits]
S[Stream to destination]
R[DownloadResult]
A --> C
C --> B
B --> K
K --> G
K --> H
K --> Y
K --> W
G --> P
H --> P
Y --> P
W --> P
P --> S
S --> R

## Readers and archives[#](#readers-and-archives "Link to this heading")

orphan:

flowchart TB
I[Path, URL, sequence, or manifest]
C[DocumentReader.create]
Q{Input shape}
U[from\_url]
M[from\_manifest]
S[\_MultiSourceReader]
L[Local path validation]
X[Extension lookup in reader registry]
R[Concrete DocumentReader]
D[get\_documents]
I --> C
C --> Q
Q -->|URL| U
Q -->|Manifest| M
Q -->|Sequence| S
Q -->|Local path| L
U --> R
M --> S
S --> D
L --> X
X --> R
R --> D

orphan:

flowchart TB
B[DocumentReader contract]
B --> T[Text family<br/>TXT, Markdown, ReST]
B --> X[Structured family<br/>PDF, XML, TEI, ALTO]
B --> M[Media family<br/>Image, audio, video]
B --> N[Network family<br/>Web and YouTube]
B --> A[Archive and custom<br/>ZIP and CustomReader]
T --> R[Raw chunk dictionaries]
X --> R
M --> R
N --> R
A --> R
R --> C[Optional chunker]
C --> F[Filter]
F --> D[CorpusDocument stream]

orphan:

flowchart TB
A[Archive path]
D[Detect supported archive]
L[Apply member and byte limits]
T[Create extraction destination]
M[Inspect each member]
S{Safe path and supported type?}
X[Extract accepted member]
R[Dispatch member to reader]
C[Collect CorpusDocument objects]
J[Reject or skip member]
A --> D
D --> L
L --> T
T --> M
M --> S
S -->|Yes| X
X --> R
R --> C
S -->|No| J

## Chunking[#](#chunking "Link to this heading")

orphan:

flowchart TB
T[Input text]
B[bridge\_chunker when required]
C{Configured strategy}
W[WordChunker]
S[SentenceChunker]
P[ParagraphChunker]
F[FixedWindowChunker]
M[SemanticChunker]
L[Multilang preprocessing]
R[ChunkResult and Chunk records]
D[Document fragments]
T --> B
B --> C
C --> W
C --> S
C --> P
C --> F
C --> M
W --> L
S --> L
P --> L
F --> L
M --> L
L --> R
R --> D

orphan:

flowchart TB
T[Raw multilingual text]
G[Grapheme-safe normalization]
S[ScriptSegmenter]
P[ScriptSpan sequence]
W[WritingSystemAdapter]
R[Script-specific segmentation strategy]
M[SemanticChunker boundary decisions]
C[Chunks with language and script metadata]
T --> G
G --> S
S --> P
P --> W
W --> R
R --> M
M --> C
L[Language data and stopwords] -. assists .-> R
X[Custom tokenizer registry] -. extends .-> R

## Text transformation[#](#text-transformation "Link to this heading")

orphan:

flowchart TB
D[CorpusDocument collection]
T[TextNormalizer or NormalizationPipeline]
O[Select original text]
S[Apply configured steps in order]
U[Unicode normalization]
W[Whitespace cleanup]
H[HTML stripping]
L[Lowercasing]
R[Duplicate-line removal]
N[New document with normalized\_text]
D --> T
T --> O
O --> S
S --> U
U --> W
W --> H
H --> L
L --> R
R --> N

orphan:

flowchart TB
D[Normalized or original documents]
C[EnricherConfig]
T[Tokenize]
F[Filter stopwords and punctuation]
L[Optional lemmatization]
S[Optional stemming]
K[Keyword and score extraction]
M[Counts, POS, NER, and metadata]
O[Enriched CorpusDocument objects]
D --> C
C --> T
T --> F
F --> L
L --> S
S --> K
K --> M
M --> O

## Embeddings and search[#](#embeddings-and-search "Link to this heading")

orphan:

flowchart TB
D[CorpusDocument collection]
M{Primary modality}
T[Text embedding backend]
I[Image embedding backend]
A[Audio or video backend]
K[Build model and configuration cache key]
H{Valid cache hit?}
L[Load cached vectors]
C[Compute vectors]
V[Validate shape and numeric values]
S[Publish cache entry]
O[Attach embeddings to documents]
D --> M
M --> T
M --> I
M --> A
T --> K
I --> K
A --> K
K --> H
H -->|Yes| L
H -->|No| C
C --> V
V --> S
L --> O
S --> O

orphan:

flowchart TB
D[CorpusDocument collection]
B[SimilarityIndex.build]
M{Search mode}
S[Strict text matching]
K[Keyword or BM25]
V[Semantic vector search]
H[Hybrid rank fusion]
Q[Search query]
C[Candidate scoring]
R[Sort, threshold, and limit]
O[SearchResult list]
D --> B
B --> M
M --> S
M --> K
M --> V
M --> H
Q --> C
S --> C
K --> C
V --> C
H --> C
C --> R
R --> O

## Persistence and export[#](#persistence-and-export "Link to this heading")

orphan:

flowchart TB
D[CorpusDocument objects]
B[StorageBase contract]
M[InMemoryStorage]
J[JSONLStorage]
S[SQLiteStorage with FTS5]
W[save or save\_batch]
G[get by document ID]
Q[query and pagination]
C[count]
R[QueryResult or CorpusDocument]
D --> B
B --> M
B --> J
B --> S
M --> W
J --> W
S --> W
M --> G
J --> G
S --> G
M --> Q
J --> Q
S --> Q
Q --> R
G --> R
W --> C

orphan:

stateDiagram-v2
direction TB
[\*] --> Uninitialized
Uninitialized --> Connected: construct SQLiteStorage
Connected --> SchemaReady: initialize schema and FTS
SchemaReady --> Reading: get / query / count
SchemaReady --> Writing: save / save\_batch
Reading --> SchemaReady
Writing --> SchemaReady: commit succeeds
Writing --> Rollback: operation fails
Rollback --> SchemaReady
SchemaReady --> Closed: close
Reading --> Closed: close after operation
Closed --> [\*]

orphan:

flowchart TB
D[CorpusDocument collection]
F[ExportFormat]
X[export\_documents dispatcher]
S[Safe interchange formats<br/>CSV, JSON, JSONL, NumPy, Parquet]
T[Trusted-only formats<br/>pickle and joblib]
I[Integration formats<br/>Pandas, Polars, HuggingFace, MLflow]
W[Write staging content]
P[Atomic publish where supported]
O[Output artifact]
D --> F
F --> X
X --> S
X --> T
X --> I
S --> W
T --> W
I --> W
W --> P
P --> O

## Integrations and metadata[#](#integrations-and-metadata "Link to this heading")

orphan:

flowchart TB
D[CorpusDocument or SearchResult objects]
A[Adapter functions]
L[LangChain documents or retriever]
G[LangGraph state]
M[MCP resources, tool results, or server]
H[HuggingFace Dataset]
R[RAG tuples]
J[JSONL iterator]
N[NumPy arrays]
T[TensorFlow or Torch datasets]
D --> A
A --> L
A --> G
A --> M
A --> H
A --> R
A --> J
A --> N
A --> T

orphan:

flowchart TB
F[Source filename and path]
P[provenance\_from\_filename]
D[CorpusDocument collection]
S[compute\_stats]
M[CollectionManifest]
C[CorpusStats]
O[Document provenance and collection metadata]
F --> P
P --> O
D --> S
S --> C
D --> M
M --> O
C --> O

## Extensibility[#](#extensibility "Link to this heading")

orphan:

flowchart TB
I[Import built-in components]
R[ComponentRegistry]
C[Chunker registrations]
F[Filter registrations]
D[Reader registrations]
N[Normalizer registrations]
L[Lookup by stable name]
B[Build configured component]
S[Snapshot registry]
O[Restore or extend registry]
I --> R
R --> C
R --> F
R --> D
R --> N
C --> L
F --> L
D --> L
N --> L
L --> B
R --> S
S --> O

orphan:

flowchart TB
U[User callables and factories]
W[Contract wrappers]
C[CustomChunker, Filter, Normalizer, Enricher]
H[HookableCorpusPipeline]
P[PipelineHooks before, after, and error callbacks]
B[FactoryCorpusBuilder]
S[CustomSimilarityIndex]
K[Core corpus contracts]
R[Pipeline or build result]
U --> W
W --> C
W --> H
W --> B
W --> S
H --> P
C --> K
P --> K
B --> K
S --> K
K --> R

## Reliability and contracts[#](#reliability-and-contracts "Link to this heading")

orphan:

stateDiagram-v2
direction TB
[\*] --> Created
Created --> CheckpointLoaded: checkpoint configured
Created --> Iterating: no checkpoint
CheckpointLoaded --> Iterating
Iterating --> DedupCheck: document received
DedupCheck --> Iterating: duplicate or already checkpointed
DedupCheck --> Yielded: accepted
Yielded --> CheckpointAppend: checkpoint interval reached
CheckpointAppend --> Iterating
Yielded --> Iterating: no checkpoint write
Iterating --> ErrorPolicy: source raises
ErrorPolicy --> Iterating: skip or log
ErrorPolicy --> Retrying: retry policy
Retrying --> Iterating: retry succeeds
Retrying --> Iterating: retries exhausted and skipped
ErrorPolicy --> Failed: raise policy
Iterating --> Closed: close or context exit
Failed --> Closed
Closed --> [\*]

orphan:

flowchart TB
R[Reader raw chunks]
C[Chunk and ChunkResult records]
D[Canonical CorpusDocument]
E[Canonical enums<br/>source, section, modality, export, match, error]
P[PipelineResult and BuildResult]
S[StorageQuery and SearchResult]
O[Export and adapter schemas]
L[Legacy compatibility records in \_types]
R --> C
C --> D
E --> D
D --> P
D --> S
D --> O
L -. compatibility boundary .-> D

orphan:

flowchart TB
I[Input or environment failure]
R[Reader and parser boundary]
T[Transform stage boundary]
E[Embedding or model boundary]
S[Storage or export boundary]
P{Configured handling}
X[Raise typed exception]
G[Record source error in BuildResult]
W[Log optional-stage warning and continue]
K[PipelineGuard skip, log, or retry]
C[Cleanup and close resources]
I --> R
R --> T
T --> E
E --> S
R --> P
T --> P
E --> P
S --> P
P --> X
P --> G
P --> W
P --> K
X --> C
G --> C
W --> C
K --> C

## Security and platform evolution[#](#security-and-platform-evolution "Link to this heading")

The security-policy diagram is explicitly a target architecture. Label it as
proposed or planned until the corresponding components exist in source.

orphan:

flowchart TB
U[Untrusted file, URL, archive, media, or plugin]
C[Recommended CorpusSession context]
P[Central PolicyEngine]
B[Hierarchical ResourceBudget]
N[Network and redirect policy]
A[Archive and path policy]
R[Parser and sandbox policy]
X[Plugin and serialization policy]
Q[Validated bounded processing]
D[Diagnostics and provenance]
O[Trusted output sinks]
U --> C
C --> P
C --> B
P --> N
P --> A
P --> R
P --> X
B --> N
B --> A
B --> R
B --> X
N --> Q
A --> Q
R --> Q
X --> Q
Q --> D
D --> O

orphan:

flowchart TB
A[Application request]
C[Capability preflight]
P{Runtime profile}
F[Full CPython environment]
M[Minimal CPython environment]
W[Pyodide, Emscripten, or JupyterLite]
O[Optional native, model, and subprocess backends]
S[Pure-Python and browser-safe stages]
D[Actionable unavailable-capability diagnostic]
R[Resolved execution plan]
A --> C
C --> P
P --> F
P --> M
P --> W
F --> O
F --> S
M --> S
M --> D
W --> S
W --> D
O --> R
S --> R
D --> R

orphan:

flowchart TB
:   P[Supported Python versions]
    C[\_compat compatibility shims]
    E[\_StrEnumBase and version helpers]
    S[\_schema canonical contracts]
    B[\_base component contracts]
    T[\_types compatibility records]
    A[Consistent public behavior]

    P –> C
    C –> E
    E –> S
    E –> B
    S –> A
    B –> A
    T -. legacy compatibility .-> A