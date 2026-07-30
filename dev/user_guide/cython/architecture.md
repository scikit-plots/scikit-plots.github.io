# Cython Architecture[#](#cython-architecture "Link to this heading")

The runtime architecture separates public API handling, policy validation,
build orchestration, cache publication, loading, and maintenance.

## Architecture overview[#](#architecture-overview "Link to this heading")

orphan:

flowchart LR
U[User code] --> API[Public API]
API --> PUB[\_public.py / \_api.py]
PUB --> SEC[SecurityPolicy]
PUB --> BUD[Budget and profiles]
PUB --> BLD[Builder]
BLD --> TMP[Templates API]
BLD --> LOCK[Per-key lock]
BLD --> CACHE[Cache]
BLD --> COMP[Compiler backend]
COMP --> ART[Built artifacts]
ART --> META[Metadata and manifest]
META --> LDR[Loader]
CACHE --> LDR
LDR --> RES[Result objects]
CACHE --> GC[GC and purge]
CACHE --> PIN[Pins]

## Public API path[#](#public-api-path "Link to this heading")

orphan:

flowchart TD
A[User calls public API] --> B{Entry point}
B -->|cython\_import\*| C[Resolve source input]
B -->|build\_extension\_module\*| D[Build extension module]
B -->|build\_package\_example\*| E[Build package example]
B -->|template APIs| F[Resolve template]
C --> G[Normalize paths and inputs]
D --> G
E --> G
F --> G
G --> H[Apply SecurityPolicy]
H --> I[Apply budget and profile]
I --> J[Acquire build lock]
J --> K{Cache hit?}
K -->|Yes| L[Validate and load cached artifact]
K -->|No| M[Compile in private staging]
M --> N[Validate outputs]
N --> O[Publish atomically]
O --> L
L --> P[Return ImportResult or BuildResult]

## Security boundary[#](#security-boundary "Link to this heading")

orphan:

flowchart TD
A[Input request] --> B[Normalize paths]
B --> C[Validate roots and containment]
C --> D[Validate include directories]
D --> E[Validate compiler and linker arguments]
E --> F[Validate template or example source]
F --> G[Validate cache keys and destinations]
G --> H[Apply resource budgets]
H --> I{Approved?}
I -->|Yes| J[Proceed to build, cache, or import]
I -->|No| K[Reject with structured error]

## Template resolution[#](#template-resolution "Link to this heading")

orphan:

flowchart LR
A[User selects template] --> B[Templates API]
B --> C[Resolve template family]
C --> D[Locate package resource]
D --> E[Load template metadata]
E --> F[Validate availability and compatibility]
F --> G[Copy or render template]
G --> H[Pass generated source to builder]
H --> I[Compile and return result]