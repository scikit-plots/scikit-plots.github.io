# Mcp[#](#mcp "Link to this heading")

Examples for [`mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp") focus on exposing local scikit-plots
evidence through a small, read-only Model Context Protocol (MCP) surface.

The current showcase connects three public submodules:

`scikitplot.corpus`
:   builds deterministic local evidence with
    `HAMLET_TEXT` and
    `HashEmbedder`.

`scikitplot.annoy`
:   provides the optional native approximate-nearest-neighbor backend.

`scikitplot.mcp`
:   serves the indexed evidence through `search_docs` and
    `docs://chunk/{doc_id}`.

```
# MCP server/client dependencies
pip install scikit-plots[mcp]

# Verify the centralized CLI
scikitplot mcp --help

```

## Start here[#](#start-here "Link to this heading")

****Serve a real Hamlet corpus over MCP with Annoy****

The showcase follows one complete local workflow:

```
HAMLET_TEXT
    ↓
local corpus directory
    ↓
HashEmbedder
    ↓
Annoy
    ↓
CorpusAnnoyRetriever
    ↓
scikitplot mcp --self-test
    ↓
scikitplot mcp --docker
    ↓
MCP client context
    ↓
search_docs(...)
    ↓
citations + docs://chunk/{doc_id}

```

It is intentionally built from local data so the retrieval result does not
depend on a model download or an external document service.

## Execution layers[#](#execution-layers "Link to this heading")

The example separates increasingly optional capabilities instead of requiring
the full server stack for every documentation build.

| Layer | Requires | Normal purpose | If unavailable |
| --- | --- | --- | --- |
| Hamlet corpus | Corpus core | create local evidence | runs normally |
| Hash embedding | NumPy / Corpus core | deterministic document/query vectors | runs normally |
| Corpus + Annoy retrieval | native `scikitplot.annoy` | real ANN search | specific `SKIP` |
| CLI `--self-test` | Corpus + Annoy | verify backend without opening a server | specific `SKIP` when Annoy is absent |
| MCP HTTP server | MCP server dependencies | expose tools/resources | specific `SKIP` |
| MCP client round trip | MCP SDK + local server | verify the real protocol boundary | run only in provisioned CI/manual environments |

## CLI self-test first[#](#cli-self-test-first "Link to this heading")

Before opening a listening server, validate the exact Corpus + Annoy
configuration with the bounded CLI self-test:

```
scikitplot mcp \
    --corpus-annoy /tmp/scikitplot-mcp-hamlet \
    --hash-dimension 256 \
    --annoy-n-trees 10 \
    --self-test \
    --self-test-query "sleep dream death" \
    --self-test-require-match

```

This is the preferred first CI gate because it verifies corpus loading,
embedding, index construction, querying, and the MCP result contract without
requiring an HTTP client/server round trip.

## Two-terminal server workflow[#](#two-terminal-server-workflow "Link to this heading")

****Terminal 1 — server****

```
scikitplot mcp --docker \
    --host 127.0.0.1 \
    --corpus-annoy /tmp/scikitplot-mcp-hamlet \
    --hash-dimension 256 \
    --annoy-n-trees 10

```

****Terminal 2 — client****

```
from mcp import Client

async with Client("http://127.0.0.1:8000/mcp") as client:
    result = await client.call_tool(
        "search_docs",
        {
            "query": "sleep dream death",
            "k": 3,
        },
    )

print(result.structured_content)

```

The showcase also polls `/healthz` before creating the client and always
terminates the server subprocess during cleanup.

## CI / documentation mode[#](#ci-documentation-mode "Link to this heading")

For an ordinary documentation build, keep the live HTTP round trip disabled:

```
export SCIKITPLOT_GALLERY_RUN_MCP_DOCKER=0

```

To execute the full local server/client round trip in a provisioned CI
container:

```
export SCIKITPLOT_GALLERY_RUN_MCP_DOCKER=1
python galleries/examples/mcp/plot_mcp_corpus_annoy_hamlet_script.py

```

The CI subprocess explicitly binds to `127.0.0.1`. This keeps the
unauthenticated showcase server on loopback rather than exposing it beyond the
container/host merely to test the protocol path.

## What `--docker` means here[#](#what-docker-means-here "Link to this heading")

The example invokes:

```
scikitplot mcp --docker ...

```

through Python’s `subprocess` module.

It is the scikit-plots MCP server’s Docker-oriented runtime profile; the Python
gallery itself is not a replacement for `docker run` or container
orchestration. The same command can be launched inside your normal CI/Docker
environment.

## Gallery reliability rule[#](#gallery-reliability-rule "Link to this heading")

The MCP examples use the same reliability distinction as the Corpus gallery:

`missing optional native Annoy / MCP SDK / intentionally disabled live server`
:   Report a visible, specific `SKIP` when the remaining example can stay
    truthful.

`invalid public API / broken installed backend / malformed MCP result / server crash`
:   Fail visibly. Do not convert a real integration regression into a skip.

The local deterministic path must never fabricate Annoy or MCP success when
those capabilities were not actually exercised.

## Security and lifecycle[#](#security-and-lifecycle "Link to this heading")

The showcase is read-only and uses bounded result previews.

For automated server execution it also:

* chooses a free loopback port,
* waits for `/healthz` before connecting,
* binds explicitly to `127.0.0.1`,
* terminates the child process in a `finally`/context cleanup path,
* escalates to `kill()` only if graceful termination exceeds the timeout.

Treat wider network exposure, authentication, reverse proxies, TLS, and
production process supervision as deployment concerns rather than gallery
defaults.

## Browser / WASM note[#](#browser-wasm-note "Link to this heading")

The deterministic Corpus and hashing pieces are portable Python/NumPy
candidates. Native Annoy, subprocess management, listening sockets, and a real
MCP HTTP server should not be assumed available in JupyterLite or other
browser/WASM runtimes.

Use the gallery there as architecture/reference material unless those runtime
capabilities have been explicitly verified.

![](../../_images/sphx_glr_plot_mcp_corpus_annoy_hamlet_script_thumb.png)

[Serve a Real Hamlet Corpus over MCP with Annoy](plot_mcp_corpus_annoy_hamlet_script.html)

Serve a Real Hamlet Corpus over MCP with Annoy