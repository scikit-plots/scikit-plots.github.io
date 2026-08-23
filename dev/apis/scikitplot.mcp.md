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

****User guide.**** See the [Model Context Protocol (MCP)](../user_guide/mcp/index.html#mcp-index) section for further details.

## MCP: Model Context Protocol[#](#mcp-model-context-protocol "Link to this heading")

****User guide.**** See the [Model Context Protocol (MCP)](../user_guide/mcp/index.html#mcp-index) section for further details.

Class inheritance

![Inheritance diagram of DocsRetriever, RetrievedChunk, InMemoryBm25Retriever, Bm25Retriever, CorpusAnnoyRetriever, HybridRetriever](../_images/inheritance-9476d7619aa5752cbf6db3c503851052f51ff6a0.png)










|  |  |
| --- | --- |
| [`DocsRetriever`](../modules/generated/scikitplot.mcp.DocsRetriever.html#scikitplot.mcp.DocsRetriever "scikitplot.mcp.DocsRetriever") | Structural contract every retrieval backend must satisfy. |
| [`RetrievedChunk`](../modules/generated/scikitplot.mcp.RetrievedChunk.html#scikitplot.mcp.RetrievedChunk "scikitplot.mcp.RetrievedChunk") | One retrieved passage with the metadata needed to cite it. |
| [`InMemoryBm25Retriever`](../modules/generated/scikitplot.mcp.InMemoryBm25Retriever.html#scikitplot.mcp.InMemoryBm25Retriever "scikitplot.mcp.InMemoryBm25Retriever") | A compact BM25 implementation suitable for demos and small corpora. |
| [`Bm25Retriever`](../modules/generated/scikitplot.mcp.Bm25Retriever.html#scikitplot.mcp.Bm25Retriever "scikitplot.mcp.Bm25Retriever") | Lexical retriever (FTS/BM25) leg backed by a full-text search seam. |
| [`CorpusAnnoyRetriever`](../modules/generated/scikitplot.mcp.CorpusAnnoyRetriever.html#scikitplot.mcp.CorpusAnnoyRetriever "scikitplot.mcp.CorpusAnnoyRetriever") | Docs dense retriever backed by an embedder + a vector index + a document lookup. |
| [`HybridRetriever`](../modules/generated/scikitplot.mcp.HybridRetriever.html#scikitplot.mcp.HybridRetriever "scikitplot.mcp.HybridRetriever") | Fuse several retrievers into one via Reciprocal Rank Fusion. |
| [`build_search_docs_result`](../modules/generated/scikitplot.mcp.build_search_docs_result.html#scikitplot.mcp.build_search_docs_result "scikitplot.mcp.build_search_docs_result") | Format retrieval results as an MCP `tools/call` response with citations. |
| [`builtin_demo_retriever`](../modules/generated/scikitplot.mcp.builtin_demo_retriever.html#scikitplot.mcp.builtin_demo_retriever "scikitplot.mcp.builtin_demo_retriever") | Return a tiny corpus that explains the sample's own mechanism. |
| [`create_server`](../modules/generated/scikitplot.mcp.create_server.html#scikitplot.mcp.create_server "scikitplot.mcp.create_server") | Create an official MCP Python SDK v2 `MCPServer` instance. |
| [`reciprocal_rank_fusion`](../modules/generated/scikitplot.mcp.reciprocal_rank_fusion.html#scikitplot.mcp.reciprocal_rank_fusion "scikitplot.mcp.reciprocal_rank_fusion") | Fuse weighted ranked lists into a single `key -> score` map. |