# Cython Build Workflows[#](#cython-build-workflows "Link to this heading")

## Single-module build[#](#single-module-build "Link to this heading")

orphan:

flowchart TD
A[Request single-module build] --> B[Normalize source path]
B --> C[Resolve compiler options]
C --> D[Validate includes, arguments, and roots]
D --> E[Compute cache key]
E --> F[Acquire per-key lock]
F --> G{Valid cached build available?}
G -->|Yes| H[Read and validate metadata]
H --> I[Verify artifact containment and integrity]
I --> J[Load compiled extension]
J --> K[Return result]
G -->|No| L[Create private staging directory]
L --> M[Compile extension]
M --> N{Compilation succeeded?}
N -->|No| O[Capture diagnostics and clean staging]
N -->|Yes| P[Validate produced artifacts]
P --> Q[Write metadata and manifest]
Q --> R[Publish build atomically]
R --> S[Load extension]
S --> K

## Package build[#](#package-build "Link to this heading")

orphan:

flowchart TD
A[Request package build] --> B[Resolve example or package source]
B --> C[Validate package root and containment]
C --> D[Collect package files and dependencies]
D --> E[Apply SecurityPolicy]
E --> F[Compute package cache key]
F --> G[Acquire package lock]
G --> H{Valid cached package available?}
H -->|Yes| I[Validate cached package manifest]
I --> J[Import package or module]
J --> K[Return package build result]
H -->|No| L[Create private staging area]
L --> M[Copy or render sources]
M --> N[Compile package extensions]
N --> O{Build succeeded?}
O -->|No| P[Abort and remove staging]
O -->|Yes| Q[Validate all package outputs]
Q --> R[Write metadata and manifest]
R --> S[Publish package cache atomically]
S --> T[Import built package]
T --> K

## Failure and recovery[#](#failure-and-recovery "Link to this heading")

orphan:

stateDiagram-v2
[\*] --> Ready
Ready --> Validating : request received
Validating --> Rejected : policy or input failure
Validating --> Building : validation succeeds
Building --> Publishing : build succeeds
Building --> Failed : compiler, timeout, or resource failure
Publishing --> Available : manifest and artifact verified
Publishing --> Failed : publication or integrity failure
Available --> Loading : import requested
Loading --> Active : import succeeds
Loading --> Quarantined : metadata or artifact rejected
Failed --> Cleaning : rollback and diagnostics
Rejected --> Ready : caller corrects request
Quarantined --> Cleaning : purge invalid entry
Cleaning --> Ready : staging and locks released
Active --> Available : runtime reference released