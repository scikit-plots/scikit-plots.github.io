# Cython Lifecycle and Maintenance[#](#cython-lifecycle-and-maintenance "Link to this heading")

## Cache lifecycle[#](#cache-lifecycle "Link to this heading")

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

## Lock lifecycle[#](#lock-lifecycle "Link to this heading")

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