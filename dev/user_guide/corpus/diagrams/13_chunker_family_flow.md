[``](#id1)[`](#id3)mermaid

flowchart TB
:   T[Input text]
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

    T –> B
    B –> C
    C –> W
    C –> S
    C –> P
    C –> F
    C –> M
    W –> L
    S –> L
    P –> L
    F –> L
    M –> L
    L –> R
    R –> D

[``](#id5)[`](#id7)