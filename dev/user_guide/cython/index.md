# Cython User Guide[#](#cython-user-guide "Link to this heading")

## Instant PKG/MOD Generation[#](#instant-pkg-mod-generation "Link to this heading")

The [`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") submodule provides runtime Cython compilation,
artifact caching, template-based examples, controlled loading, and cache
maintenance utilities.

This guide separates the main concepts into reusable diagrams so that each
workflow can be reviewed and maintained independently.

Examples relevant to the [`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") module.

A lightweight runtime Cython development kit with caching, pinning,
garbage collection, and templating support. `"Simple Foundation. Truly Sovereign."`

[`cython`](../../apis/scikitplot.cython.html#module-scikitplot.cython "scikitplot.cython") enables real-time, in-place (in-situ) live, on demand
generation of low-level Cython packages and modules for immediate use and testing, at runtime.

* [Cython: Realtime compile\_and\_load (.pyx)](../../auto_examples/cython/plot_cython_template.html#sphx-glr-auto-examples-cython-plot-cython-template-py): Example usage of
  [`compile_and_load`](../../modules/generated/scikitplot.cython.compile_and_load.html#scikitplot.cython.compile_and_load "scikitplot.cython.compile_and_load") using template.

> **See also**
> * <https://doc.sagemath.org/html/en/reference/misc/sage/misc/cython.html>
* [cython/cython](https://github.com/cython/cython)
* <https://cython.readthedocs.io/en/latest/index.html>

Examples

```
from scikitplot.cython import compile_and_load

m = compile_and_load("def f(int n):\n    return n*n")
m.f(10)

```

## Architecture[#](#architecture "Link to this heading")

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

## Public API flow[#](#public-api-flow "Link to this heading")

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

## Build workflows[#](#build-workflows "Link to this heading")

### Single-module build[#](#single-module-build "Link to this heading")

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

### Package build[#](#package-build "Link to this heading")

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

## Lifecycle and state[#](#lifecycle-and-state "Link to this heading")

### Cache lifecycle[#](#cache-lifecycle "Link to this heading")

stateDiagram-v2
[\*] --> Absent
Absent --> Staging : build starts
Staging --> Published : validated atomic publish
Staging --> Failed : build or validation fails
Failed --> Absent : staging cleanup
Published --> Loaded : artifact imported
Loaded --> Published : import reference released
Published --> Pinned : pin added
Pinned --> Published : pin removed
Published --> Rejected : invalid metadata or artifact
Rejected --> Absent : purge or quarantine cleanup
Published --> Reclaimed : eligible GC removal
Pinned --> Reclaimed : explicit forced purge
Reclaimed --> Absent

### Lock lifecycle[#](#lock-lifecycle "Link to this heading")

stateDiagram-v2
[\*] --> Idle
Idle --> Requested : build, GC, pin, or purge requests lock
Requested --> Acquired : exclusive ownership granted
Requested --> Denied : contention or timeout
Denied --> Idle : caller retries or exits
Acquired --> Active : protected operation runs
Active --> Releasing : operation completes
Active --> Failed : operation raises
Failed --> Releasing : cleanup begins
Releasing --> Idle : ownership released

## Security validation[#](#security-validation "Link to this heading")

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

## Templates[#](#templates "Link to this heading")

flowchart LR
A[User selects template] --> B[Templates API]
B --> C[Resolve template family]
C --> D[Locate package resource]
D --> E[Load template metadata]
E --> F[Validate availability and compatibility]
F --> G[Copy or render template]
G --> H[Pass generated source to builder]
H --> I[Compile and return result]

## Garbage collection and pins[#](#garbage-collection-and-pins "Link to this heading")

flowchart TD
A[Cache maintenance starts] --> B[List cache entries]
B --> C[Acquire entry lock]
C --> D[Read current pin registry]
D --> E[Evaluate age, size, and policy]
E --> F{Entry pinned?}
F -->|Yes| G[Keep entry]
F -->|No| H{Entry active or protected?}
H -->|Yes| I[Skip entry]
H -->|No| J{Eligible for removal?}
J -->|No| G
J -->|Yes| K[Delete cached entry]
K --> L[Record maintenance result]
G --> M[Release entry lock]
I --> M
L --> M
M --> N{More entries?}
N -->|Yes| C
N -->|No| O[Finish GC report]

## Failure and recovery[#](#failure-and-recovery "Link to this heading")

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

## Further reading[#](#further-reading "Link to this heading")

****further reading****

* [Cython Architecture](architecture.html)
  * [Architecture overview](architecture.html#architecture-overview)
  * [Public API path](architecture.html#public-api-path)
  * [Security boundary](architecture.html#security-boundary)
  * [Template resolution](architecture.html#template-resolution)
* [Cython Build Workflows](workflows.html)
  * [Single-module build](workflows.html#single-module-build)
  * [Package build](workflows.html#package-build)
  * [Failure and recovery](workflows.html#failure-and-recovery)
* [Cython Lifecycle and Maintenance](lifecycle.html)
  * [Cache lifecycle](lifecycle.html#cache-lifecycle)
  * [Lock lifecycle](lifecycle.html#lock-lifecycle)
  * [Garbage collection and pins](lifecycle.html#garbage-collection-and-pins)

****cython templates****

* [Cython templates](_templates/templates_index.html)
  * [basic\_cython](_templates/templates_basic_cython.html)
  * [basic\_python](_templates/templates_basic_python.html)
  * [complex\_cython](_templates/templates_complex_cython.html)
  * [complex\_python](_templates/templates_complex_python.html)
  * [devel\_cython](_templates/templates_devel_cython.html)
  * [devel\_numcpp\_cpp\_api\_cython](_templates/templates_devel_numcpp_cpp_api_cython.html)
  * [devel\_numcpp\_cpp\_api\_python](_templates/templates_devel_numcpp_cpp_api_python.html)
  * [devel\_numpy\_c\_api\_cython](_templates/templates_devel_numpy_c_api_cython.html)
  * [devel\_numpy\_c\_api\_python](_templates/templates_devel_numpy_c_api_python.html)
  * [devel\_python](_templates/templates_devel_python.html)
  * [easy\_cython](_templates/templates_easy_cython.html)
  * [easy\_python](_templates/templates_easy_python.html)
  * [hard\_cython](_templates/templates_hard_cython.html)
  * [hard\_python](_templates/templates_hard_python.html)
  * [medium\_cython](_templates/templates_medium_cython.html)
  * [medium\_python](_templates/templates_medium_python.html)
  * [mixed](_templates/templates_mixed.html)
  * [module\_cython](_templates/templates_module_cython.html)
  * [module\_python](_templates/templates_module_python.html)