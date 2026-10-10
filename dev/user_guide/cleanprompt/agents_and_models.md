# Models, tools and agents[#](#models-tools-and-agents "Link to this heading")

[`Guard`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard") is the one path from your data to any model. It has three
properties worth relying on:

* ****encode, check, then call.**** Text is encoded, then checked independently
  for any value the conversation holds; a leak raises `LeakError`
  **before** your function is called.
* ****no network of its own.**** The guard owns no client, socket or key. You pass
  the function that talks to the model, so it works with every provider.
* ****one vault per guard.**** A value hidden once is hidden everywhere in that
  conversation, however it is written.

## A gate in front of any client[#](#a-gate-in-front-of-any-client "Link to this heading")

```
from scikitplot.cleanprompt import FluentCleanPrompt

guard = FluentCleanPrompt().profile("strict").guard()
reply = guard.ask(
    "Mail ada@example.com",
    call=lambda safe: "Queued " + safe.split()[-1],
)
reply
# 'Queued ada@example.com'

```

`call` receives only the safe text and returns the model’s answer, which the
guard decodes. [`Guard.chat`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.chat "scikitplot.cleanprompt.Guard.chat") does the same for a list of chat messages,
and [`Guard.aask`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.aask "scikitplot.cleanprompt.Guard.aask") / [`Guard.achat`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.achat "scikitplot.cleanprompt.Guard.achat") are the asynchronous forms. For
the lower-level steps, [`Guard.outgoing`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.outgoing "scikitplot.cleanprompt.Guard.outgoing") encodes and checks one text and
[`Guard.incoming`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.incoming "scikitplot.cleanprompt.Guard.incoming") decodes one reply.

### Streamed replies[#](#streamed-replies "Link to this heading")

A placeholder can arrive split across chunks. [`Guard.stream`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.stream "scikitplot.cleanprompt.Guard.stream") returns a
[`StreamDecoder`](../../modules/generated/scikitplot.cleanprompt.StreamDecoder.html#scikitplot.cleanprompt.StreamDecoder "scikitplot.cleanprompt.StreamDecoder") whose output, for every possible chunking, equals
decoding the whole reply at once:

```
decoder = guard.stream()
text = "".join(decoder.feed(chunk) for chunk in model_chunks) + decoder.flush()

```

### Tool calls are an exit[#](#tool-calls-are-an-exit "Link to this heading")

When a model asks to call a tool, its arguments may contain placeholders.
Restoring **every** value into a tool call would hand any tool — or an injected
instruction — every value in the conversation. So arguments are decoded only
through [`Guard.decode_tool_arguments`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.decode_tool_arguments "scikitplot.cleanprompt.Guard.decode_tool_arguments"), with the kinds that tool may
receive:

```
args = guard.decode_tool_arguments(call.arguments, allow=["EMAIL"])

```

A call naming a kind it was not allowed is refused. [`Guard.chat`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.chat "scikitplot.cleanprompt.Guard.chat") returns
tool calls still encoded, so nothing is restored by accident.

### Tool results are documents[#](#tool-results-are-documents "Link to this heading")

A tool’s JSON result is guarded as one document, in the form it will be sent:
keys, numbers and strings, with prose inside JSON strings read as prose.
[`Guard.encode_object`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.encode_object "scikitplot.cleanprompt.Guard.encode_object") does that; [`Guard.decode_object`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard.decode_object "scikitplot.cleanprompt.Guard.decode_object") reverses
it.

## Command-line models[#](#command-line-models "Link to this heading")

For a model you run from a terminal, `ask` performs the same boundary
without a shell and keeps the values in memory:

```
python -m scikitplot.cleanprompt ask \
    --via "ollama run llama3" \
    "Summarize the request from ada@example.com"

```

The command is run directly (never through a shell), receives the safe text
on standard input, and is stopped if CleanPrompt exits early. `--show-sent`
prints what was actually sent; `--timeout` bounds the wait.

## Agents without code: MCP[#](#agents-without-code-mcp "Link to this heading")

For agents that speak the Model Context Protocol, `mcp` serves guarded file
tools over standard input and output, confined to the roots you name:

```
python -m scikitplot.cleanprompt mcp --root ./project

```

Whatever a tool returns, the model reads — so no MCP tool returns a removed
value. There is deliberately no “decode” tool: reading goes through the gate,
and writing restores values on disk, where the model never sees them. Paths
are shown relative to a root.

`skill` prints, or installs with `--write`, instructions that make an AI
coding assistant use the same boundary; `plan` lets a team pin the packs and
rules those integrations are expected to use ([Files, records, packs and plans](files_and_packs.html#cleanprompt-files-and-packs)).

## Logging without leaking[#](#logging-without-leaking "Link to this heading")

Nothing that was removed is ever logged. Log records carry counts, kinds,
labels, offsets, durations and capability decisions — what happened, never
what was found — and a filter on the whole `scikitplot.cleanprompt` logger
namespace scrubs held values as a second line of defence. Nothing is emitted
until you configure logging (`--log-level`, `--log-format`, or
`configure_logging`).

## What a guard does not do[#](#what-a-guard-does-not-do "Link to this heading")

A guard keeps the values it detects out of what the model sees. It does not
make a model’s instructions safe: it is not a defence against prompt
injection, and it does not judge what a model does with the text it is given.
See [What it protects, and what it does not](security_and_limits.html#cleanprompt-security).