# scikitplot.mcp[#](#module-scikitplot.mcp "Link to this heading")

Composable documentation retrieval for Model Context Protocol servers.

The default import surface is ****independent of the MCP SDK, pydantic, and the
optional corpus/vector dependencies****. Importing [`scikitplot.mcp`](#module-scikitplot.mcp "scikitplot.mcp") pulls only
the SDK-free retrieval core (contracts, fusion, the in-memory demo retriever) and
the pydantic-free capability/runtime-status helpers, so it works on the Legacy
Retrieval tier (Python 3.8+) with a base install.

The server layer (`SearchService`, `create_server`, and the pydantic output
models `SearchDocsOutput` / `CitationOutput`) is imported ****lazily**** on first
access. It requires the `[mcp]` extra (`pydantic` always; `mcp>=2.0.0,<3` on
Python >= 3.10). No models, indexes, files, or network connections are opened at
import time.

> **See also**
> * [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk)
* [semantica-agi/semantica](https://github.com/semantica-agi/semantica)

****User guide.**** See the [Model Context Protocol (MCP)](../user_guide/mcp/index.html#mcp-index) section for further details.

## MCP: Model Context Protocol[#](#mcp-model-context-protocol "Link to this heading")

****User guide.**** See the [Model Context Protocol (MCP)](../user_guide/mcp/index.html#mcp-index) section for further details.

Class inheritance

![Inheritance diagram of DocsRetriever, RetrievedChunk, InMemoryBm25Retriever, Bm25Retriever, CorpusAnnoyRetriever, HybridRetriever](../_images/inheritance-97a301e52bf7ed4b99458b44c9c71d4a5cfbb75b.png)




|  |  |
| --- | --- |
| `DocsRetriever` | Structural contract every retrieval backend must satisfy. |
| `RetrievedChunk` | One retrieved passage with the metadata needed to cite it. |
| `InMemoryBm25Retriever` | A compact BM25 implementation suitable for demos and small corpora. |
| `Bm25Retriever` | Lexical retriever (FTS/BM25) leg backed by a full-text search seam. |
| `CorpusAnnoyRetriever` | Docs dense retriever backed by an embedder + a vector index + a document lookup. |
| `HybridRetriever` | Fuse several retrievers into one via Reciprocal Rank Fusion. |
| `build_search_docs_result` | Format retrieval results as an MCP `tools/call` response with citations. |
| `builtin_demo_retriever` | Return a tiny corpus that explains the sample's own mechanism. |
| `create_server` | Create an official MCP Python SDK v2 `MCPServer` instance. |
| `reciprocal_rank_fusion` | Fuse weighted ranked lists into a single `key -> score` map. |