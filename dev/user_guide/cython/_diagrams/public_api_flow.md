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