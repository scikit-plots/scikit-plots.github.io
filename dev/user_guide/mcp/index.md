# Model Context Protocol (MCP)[#](#model-context-protocol-mcp "Link to this heading")

Use `scikitplot.mcp` to make documentation searchable from an
MCP-compatible assistant, developer tool, local process, container, or service.

The normal user workflow is intentionally small:

1. choose how the MCP server should run;
2. verify it before connecting a client;
3. optionally point it at your own documentation; and
4. let the client call the read-only `search_docs` tool.

You do not need to understand the retrieval internals to get started.

## [At a glance](#id5)[#](#at-a-glance "Link to this heading")

* ****Main tool:**** `search_docs`
* ****Default transport:**** local `stdio`
* ****HTTP transport:**** Streamable HTTP
* ****Default HTTP endpoint:**** `http://127.0.0.1:8000/mcp`
* ****Default health endpoint:**** `http://127.0.0.1:8000/healthz`
* ****Your docs:**** optional UTF-8 JSONL corpus via `--docs-jsonl`
* ****Default HTTP behavior:**** stateless
* ****Safety model:**** returned document text is explicitly untrusted reference data

## [Choose your scenario](#id6)[#](#choose-your-scenario "Link to this heading")

Find the shortest path[#](#id1 "Link to this table")





| I want to… | Start with… | Best fit |
| --- | --- | --- |
| See whether MCP works | `--self-test` | No client and no network required. |
| Connect a local assistant | default `stdio` | The MCP client starts the Python process. |
| Search a small set of my own docs | `--docs-jsonl` | Simple local or CI use. |
| Connect through localhost HTTP | `--transport streamable-http` | Local services and HTTP-capable clients. |
| Run in Docker | `--docker` | Container-friendly HTTP defaults. |
| Add a CI/readiness check | `--self-test` + expected document ID | Detect missing, stale, or wrong documentation indexes. |
| Serve a team or remote client | HTTP behind production controls | Authentication, TLS, network policy, and quotas are required. |
| Search a larger or richer corpus | [`scikitplot.mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp") retrieval API | BM25, vector, or hybrid retrieval without changing the MCP tool contract. |

## [Quick start](#id7)[#](#quick-start "Link to this heading")

Install the optional MCP server dependency in the environment containing
scikit-plots:

```
python -m pip install "mcp>=2,<3"

```

First verify the backend without opening a port:

```
python -m scikitplot.mcp --self-test --self-test-query transport

```

Then start the default local server:

```
python -m scikitplot.mcp

```
> **Note**
> The default command uses `stdio`. It normally waits for an MCP client.
It does ****not**** open a browser page, and waiting for the client is expected.

## [Scenario 1: connect a local assistant](#id8)[#](#scenario-1-connect-a-local-assistant "Link to this heading")

Use `stdio` when your MCP client can start a local command for its tools.
This is the simplest mode and does not expose a network listener.

Use these values in the client’s MCP server configuration:

```
command: python
arguments: -m scikitplot.mcp

```

The client starts the process and communicates with it over standard input and
output.

> **Tip**
> Run `--self-test` from the same Python environment first. This catches an
import, dependency, or documentation-loading problem before the MCP client is
involved.

## [Scenario 2: test before connecting anything](#id9)[#](#scenario-2-test-before-connecting-anything "Link to this heading")

The self-test loads the selected retrieval backend, performs one read-only
search, validates the output contract, prints JSON, and exits.

```
python -m scikitplot.mcp \
    --self-test \
    --self-test-query transport

```

Require the query to return at least one result:

```
python -m scikitplot.mcp \
    --self-test \
    --self-test-query transport \
    --self-test-require-match

```

This is useful for local troubleshooting, Docker image validation, CI, and
readiness gates.

## [Scenario 3: search your own documentation](#id10)[#](#scenario-3-search-your-own-documentation "Link to this heading")

For a small local corpus, create a UTF-8 JSON Lines file with one document per
line. `doc_id` and `text` are required. `title`, `source_uri`, and
`anchor` are optional but recommended because they improve citations.

```
{"doc_id":"install","title":"Installation","source_uri":"/install.html","anchor":"install","text":"Install scikit-plots with pip or conda."}
{"doc_id":"plots","title":"Plotting","source_uri":"/plots.html","anchor":"examples","text":"Use plotting helpers to visualize model results."}

```

Validate the corpus before serving it:

```
python -m scikitplot.mcp \
    --docs-jsonl docs.jsonl \
    --self-test \
    --self-test-query plotting \
    --self-test-require-match

```

Then start the normal local `stdio` server with the same corpus:

```
python -m scikitplot.mcp --docs-jsonl docs.jsonl

```

Good document IDs are stable and simple, for example:
`getting-started`, `api.metrics.roc`, or `guide:deployment`.

> **Important**
> JSONL mode is intentionally bounded and best suited to small and moderate
local corpora. For larger documentation collections, use a production
retrieval backend through [`scikitplot.mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp") rather than continually
growing one in-memory file.

## [Scenario 4: make CI detect the wrong corpus](#id11)[#](#scenario-4-make-ci-detect-the-wrong-corpus "Link to this heading")

A health endpoint can tell you that a process is alive. It cannot prove that
the expected documentation was loaded.

Add a unique canary document to the corpus, then require that exact document in
a self-test:

```
python -m scikitplot.mcp \
    --docs-jsonl docs.jsonl \
    --self-test \
    --self-test-query MCP_CANARY_7F3A91C2 \
    --self-test-require-match \
    --self-test-expected-doc-id scikitplot-canary-001

```

This helps detect:

* a stale image;
* the wrong mounted corpus;
* an incomplete build;
* a broken index; or
* a deployment that is healthy at HTTP level but functionally wrong.

For an immutable corpus and deterministic backend, repeated self-tests with the
same input should also produce stable results.

## [Scenario 5: run a local HTTP endpoint](#id12)[#](#scenario-5-run-a-local-http-endpoint "Link to this heading")

Use Streamable HTTP when a local service or client connects over HTTP:

```
python -m scikitplot.mcp --transport streamable-http

```

Default local endpoints:

* MCP: `http://127.0.0.1:8000/mcp`
* Health: `http://127.0.0.1:8000/healthz`

Probe the running health endpoint:

```
python -m scikitplot.mcp \
    --transport streamable-http \
    --probe

```

The health check confirms that the HTTP service is reachable and returns the
expected minimal health response. Use `--self-test` when you also need to
check corpus loading and search behavior.

## [Scenario 6: run in Docker](#id13)[#](#scenario-6-run-in-docker "Link to this heading")

Use the explicit Docker profile:

```
python -m scikitplot.mcp --docker

```

It selects container-friendly defaults, including Streamable HTTP, a container
network bind, and the health route.

For local development, publish the container port only on the host loopback
interface when possible:

```
docker run --rm \
    -p 127.0.0.1:8000:8000 \
    scikitplot-mcp:latest

```

Then use:

```
MCP:    http://127.0.0.1:8000/mcp
Health: http://127.0.0.1:8000/healthz

```
> **Important**
> `--docker` changes deployment defaults. It does ****not**** add identity,
authentication, authorization, TLS, firewall rules, or per-user quotas.

For production containers, install a built wheel in a clean runtime image
instead of using an editable `-e` installation. This avoids build-system work
on import and gives more deterministic startup and rollback behavior.

## [Scenario 7: serve remote or team clients safely](#id14)[#](#scenario-7-serve-remote-or-team-clients-safely "Link to this heading")

Treat remote MCP deployment like any other network service.

A safer production shape is:

```
MCP client
   |
   v
authenticated TLS proxy / gateway
   |
   v
private scikitplot.mcp HTTP service
   |
   v
read-only documentation retriever

```

Use deployment controls appropriate to your environment, including:

* authenticated client identity;
* authorization for the intended users or service accounts;
* TLS at the trusted network boundary;
* firewall or private-network restrictions;
* request and concurrency limits;
* logging and monitoring without leaking secrets; and
* an explicit update and rollback process for the corpus and runtime image.

The CLI refuses an ordinary unauthenticated non-local HTTP bind unless you make
that choice explicit. Do not use `--allow-unauthenticated-remote` as a
shortcut for a production security layer.

## [How a documentation search works](#id15)[#](#how-a-documentation-search-works "Link to this heading")

A client discovers `search_docs` and calls it with:

`query`
:   The documentation question or search text.

`k`
:   The maximum number of passages to return. The default tool value is `5`.

The server then:

1. validates the tool arguments;
2. bounds the request;
3. asks the configured read-only retriever for matching documentation;
4. cleans and bounds returned text;
5. validates citation links;
6. returns passages and machine-readable citations; and
7. marks retrieved material as untrusted reference data.

A normal result therefore carries both useful text and provenance instead of
returning an uncited block of generated prose.

When nothing matches, the result is a normal empty search result with a clear
message rather than a fabricated documentation passage.

## [Security by design](#id16)[#](#security-by-design "Link to this heading")

The user-facing tool is intentionally narrow: search documentation and return
references. The server does not need write access to perform this workflow.

Built-in safety boundaries[#](#id2 "Link to this table")




| Protection | What it means for you |
| --- | --- |
| Read-only, idempotent search tool | Repeating a documentation search should not modify your project or corpus. |
| Untrusted-content label | Retrieved pages are context, not commands for the model to obey. |
| Bounded query and result sizes | One request cannot ask the tool to emit an unbounded amount of documentation. |
| Bounded passage text | Large source chunks are truncated before they enter the MCP result. |
| Closed tool arguments | Unknown or misspelled `search_docs` arguments are rejected instead of silently ignored. |
| Citation URL validation | Unsafe URL forms such as script/data schemes and credential-bearing links are not emitted as trusted citations. |
| Bounded concurrency | The search service limits simultaneous retrieval work and can report that it is busy. |
| HTTP request-size limit | Streamable HTTP accepts bounded request bodies rather than unlimited input. |
| Remote-bind guard | Accidental unauthenticated non-local HTTP exposure is rejected by default. |
| Minimal health response | The public health route does not need to reveal paths, indexes, environment values, or secrets. |

> **Important**
> These controls reduce risk but do not make arbitrary retrieved text
trustworthy. A malicious or compromised documentation page can still contain
semantic prompt-injection text. The client/model must continue treating
retrieved passages only as reference material.

## [Reliable operation](#id17)[#](#reliable-operation "Link to this heading")

Use three different checks for three different questions:

Which check should I use?[#](#id3 "Link to this table")





| Check | Answers | Use it for |
| --- | --- | --- |
| `--print-effective-config` | “What configuration will actually run?” | CLI/environment debugging before startup. |
| `--self-test` | “Can this corpus load and answer a valid search?” | Builds, CI, deployments, and functional readiness. |
| `--probe` | “Is the running HTTP service alive?” | Runtime/container health checks. |

Inspect configuration without starting the server:

```
python -m scikitplot.mcp --print-effective-config

```

For Docker-resolved settings:

```
python -m scikitplot.mcp --docker --print-effective-config

```

This is especially useful when CLI options and `SCIKITPLOT_MCP_*` environment
variables are mixed.

## [Useful runtime controls](#id18)[#](#useful-runtime-controls "Link to this heading")

Most users can keep the defaults. These controls are available when deployment
requirements change:

Common controls[#](#id4 "Link to this table")





| Option | Default | Purpose |
| --- | --- | --- |
| `--host` | `127.0.0.1` outside Docker | HTTP bind address. |
| `--port` | `8000` | HTTP port. |
| `--path` | `/mcp` | MCP HTTP endpoint. |
| `--health-path` | `/healthz` | Lightweight HTTP health route. |
| `--max-concurrency` | `4` | Bound simultaneous searches. |
| `--max-request-body` | `1 MiB` | Bound HTTP request-body size. |
| `--stateful-http` | off | Keep HTTP sessions only when the client/deployment requires them. |
| `--log-level` | `INFO` | Control operational logging detail. |

For automated deployments, the same settings can be supplied with
`SCIKITPLOT_MCP_*` environment variables.

## [Common problems](#id19)[#](#common-problems "Link to this heading")

### [The command appears to hang](#id20)[#](#the-command-appears-to-hang "Link to this heading")

If you ran:

```
python -m scikitplot.mcp

```

this is usually normal. `stdio` mode is waiting for an MCP client. Run
`--self-test` if you only want to check that the server works.

### [The health check passes but search is wrong](#id21)[#](#the-health-check-passes-but-search-is-wrong "Link to this heading")

`/healthz` is intentionally a lightweight process/HTTP check. Run a
`--self-test` against the real corpus, preferably with a canary and
`--self-test-expected-doc-id`.

### [My JSONL file is rejected](#id22)[#](#my-jsonl-file-is-rejected "Link to this heading")

Check that:

* the file is UTF-8 JSON Lines, not one large JSON array;
* every non-empty line is a JSON object;
* every document has a non-empty `doc_id` and `text`;
* document IDs are unique; and
* the corpus stays within the bounded JSONL limits.

### [No documentation matches](#id23)[#](#no-documentation-matches "Link to this heading")

An empty result is not automatically a server failure. Try a shorter or more
specific term, verify the intended corpus with `--self-test`, and confirm the
expected document is actually present.

### [A non-local HTTP bind is refused](#id24)[#](#a-non-local-http-bind-is-refused "Link to this heading")

This is a safety guard. Prefer localhost, an isolated container/private
network, or a properly authenticated production gateway. Make remote exposure
an intentional deployment decision rather than disabling the guard by default.

### [A production container rebuilds on import](#id25)[#](#a-production-container-rebuilds-on-import "Link to this heading")

Do not ship a Meson editable installation in the runtime image. Build a wheel
in a builder stage and install that wheel into a clean runtime stage.

## [Designed to grow without changing the basic workflow](#id26)[#](#designed-to-grow-without-changing-the-basic-workflow "Link to this heading")

The simple user contract stays the same even when the retrieval system becomes
more capable:

```
user question
    -> search_docs
    -> DocsRetriever
    -> cited, bounded, untrusted passages

```

The retriever behind that contract can evolve independently.

Small local corpus
:   `InMemoryBm25Retriever` provides a deterministic, dependency-light path
    for examples, tests, and bounded JSONL documentation.

Keyword-focused production search
:   `Bm25Retriever` can adapt a full-text/BM25 backend for exact API names,
    flags, identifiers, and error messages.

Semantic search
:   `CorpusAnnoyRetriever` can connect corpus embeddings and an ANN index for
    concept and paraphrase matching.

Hybrid search
:   `HybridRetriever` can combine multiple retrieval legs with Reciprocal Rank
    Fusion. A non-strict hybrid configuration can continue using healthy legs if
    one retrieval backend fails.

This separation is useful for future changes: transport, indexing strategy,
embedding model, storage engine, or ranking can evolve without requiring every
MCP client to learn a new documentation tool.

## [Keep the user guide simple](#id27)[#](#keep-the-user-guide-simple "Link to this heading")

For normal use, remember this sequence:

```
1. Self-test
2. Choose stdio or HTTP
3. Connect the client
4. Search documentation
5. Check citations

```

Everything after that is an optimization or deployment concern.

## [Where to go next](#id28)[#](#where-to-go-next "Link to this heading")

Most users can stop here.

For custom retrieval or programmatic integrations, see [`scikitplot.mcp`](../../apis/scikitplot.mcp.html#module-scikitplot.mcp "scikitplot.mcp").
The public API includes `DocsRetriever`, `RetrievedChunk`,
`InMemoryBm25Retriever`, `Bm25Retriever`, `CorpusAnnoyRetriever`,
`HybridRetriever`, and `create_server`.

For CLI options available in your installed version, use:

```
python -m scikitplot.mcp --help

```