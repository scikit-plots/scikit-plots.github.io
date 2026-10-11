# Model Context Protocol Retrieval[#](#model-context-protocol-retrieval "Link to this heading")

`scikitplot.mcp` is a documentation-retrieval and MCP adapter layer. The base import remains independent of the MCP SDK and pydantic; retrieval can be built and tested first, then exposed through the official MCP server layer when that optional tier is installed.

> **Important**
> MCP owns wire/adapter semantics, not evidence truth. Corpus owns ingestion and retrieval data semantics, Annoy owns vector mechanics, and the official MCP SDK owns the protocol implementation. Keep those boundaries explicit.
Getting started

Use the dependency-light retrieval core before adding an MCP server.

[Getting started](getting_started.html#mcp-getting-started)Architecture

Separate retrieval semantics, MCP wire/server semantics, Corpus, and vector index ownership.

[Architecture](architecture.html#mcp-architecture)Retrieval and fusion

BM25/demo retrieval, hybrid retrieval, reciprocal-rank fusion, statuses, and deterministic truncation.

[Retrieval and fusion](retrieval_and_fusion.html#mcp-retrieval-and-fusion)Corpus and Annoy

Compose Corpus evidence and vector search without moving ownership into MCP.

[Corpus and Annoy](corpus_and_annoy.html#mcp-corpus-and-annoy)Capabilities and runtime

Inspect advertised/effective server capabilities and runtime status.

[Capabilities and runtime](capabilities_and_runtime.html#mcp-capabilities-and-runtime)Server, CLI, and security

Lazy SDK/pydantic server layer, stdio/network transport, validation, limits, and remote-bind grants.

[Server, CLI, and security](server_cli_security.html#mcp-server-cli-security)Deployment and operations

Local stdio/HTTP, Docker, remote gateways, health checks, and runtime controls.

[Deployment and operations](deployment_and_operations.html#mcp-deployment-and-operations)Python API

Core contracts, retrievers, outcomes, server exports, and validation helpers.

[Python API](python_api.html#mcp-python-api)Troubleshooting

Optional SDKs, capability mismatches, degraded retrieval legs, and server startup.

[Troubleshooting](troubleshooting.html#mcp-troubleshooting)Usage Scenarios

Use the dependency-light retrieval core before adding an MCP server.

[Model Context Protocol (MCP)](usage_scenarios.html#mcp-usage-scenarios-index)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [Mcp](../../auto_examples/mcp/index.html#mcp-examples) for executable examples that accompany this guide.

## See also[#](#see-also "Link to this heading")

* [Corpus User Guide](../corpus/index.html#corpus-index)
* [Annoy vector search](../annoy/index.html#annoy-index)
* [BM25 lexical ranking](../rank_bm25/index.html#rank-bm25-index)

## Further reading[#](#further-reading "Link to this heading")

> **See also**
> * [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk)
* [semantica-agi/semantica](https://github.com/semantica-agi/semantica)