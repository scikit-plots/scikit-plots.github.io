[``](#id1)[`](#id3)mermaid

stateDiagram-v2
:   direction TB

    [\*] –> Configured
    Configured –> Dispatching: run / run\_url / run\_batch
    Dispatching –> Reading: reader selected
    Reading –> Transforming: documents collected
    Transforming –> Embedding: engine configured
    Transforming –> Exporting: embedding skipped
    Embedding –> Exporting
    Exporting –> Completed
    Completed –> Configured: next independent run

    Reading –> Failed: source or reader error
    Exporting –> Failed: export error
    Transforming –> TransformWarning: optional stage error
    TransformWarning –> Exporting: continue with unchanged documents
    Failed –> Configured: caller handles exception

[``](#id5)[`](#id7)