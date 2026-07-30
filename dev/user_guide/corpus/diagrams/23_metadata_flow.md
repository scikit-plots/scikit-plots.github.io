[``](#id1)[`](#id3)mermaid

flowchart TB
:   F[Source filename and path]
    P[provenance\_from\_filename]
    D[CorpusDocument collection]
    S[compute\_stats]
    M[CollectionManifest]
    C[CorpusStats]
    O[Document provenance and collection metadata]

    F –> P
    P –> O
    D –> S
    S –> C
    D –> M
    M –> O
    C –> O

[``](#id5)[`](#id7)