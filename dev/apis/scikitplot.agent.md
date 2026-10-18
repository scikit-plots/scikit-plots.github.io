# scikitplot.agent[#](#module-scikitplot.agent "Link to this heading")

Bounded, audited tool use: a planner proposes, the runtime disposes.

`Agent` runs a goal with a caller-supplied planner (a model adapter or
a rule) and a `Toolset`. The planner reads the run’s state and returns
a `Decision`; the runtime alone decides whether it runs. Every action
passes five gates, in order – Validation, Permissions, Scope, Budget,
Approval – and every decision, denial, approval and tool call is written to
a hash-chained audit trail. The state is saved after every step, so a run
paused for a person’s approval, or stopped by a crash, resumes where it was.

```
from scikitplot.agent import Agent, Limits, Policy, Tool, verify_audit

search = Tool(
    "search",
    lambda query: [h.doc_id for h in index.search(query)],
    parameters={
        "type": "object",
        "properties": {"query": {"type": "string", "minLength": 1}},
        "required": ["query"],
        "additionalProperties": False,
    },
    scopes={"corpus:read"},
)
agent = Agent(
    [search],
    my_planner,
    policy=Policy(granted_scopes={"corpus:read"}),
    limits=Limits(max_steps=8, max_tool_calls=4),
)
state = agent.run("which chunker keeps spans?")
state.status, state.stop_reason, state.answer
verify_audit(agent.audit.records)  # [] when the trail is whole

```

Notes

****User.**** Least privilege is the default: `Policy()` lets `read` tools that
need no scope run, and nothing else; `write` and `external` tools need a
policy that allows them, and then a person’s approval of each call. A denied
action is not an error: it is the step’s outcome, and the planner reads it at
its next decision.

****Developer.**** Standard library only, and no other `scikitplot` submodule is
imported (invariant I9): retrieval, MCP and redaction are tools a caller
passes in. Every limit is checked before the call it bounds (Rule 127); a
limit that cannot be enforced is refused rather than ignored. The invariants
I1-I9 are listed in `maintenances/agent/todo/todo.md`.

****User guide.**** See the [Agents: bounded, audited tool use](../user_guide/agent/index.html#agent-index) section for further details.

## Agent loop[#](#agent-loop "Link to this heading")

|  |  |
| --- | --- |
| `Agent` | Run a goal with a planner and tools, within a policy and limits. |
| `Decision` | What the planner decided: call a tool, or finish with an answer. |
| `Action` | A call the planner proposes: a tool name and its arguments. |
| `Usage` | What producing one decision cost, as the planner reports it. |

## Tools, policy and limits[#](#tools-policy-and-limits "Link to this heading")

|  |  |
| --- | --- |
| `Tool` | One callable tool and the facts the gate chain decides on. |
| `ToolEffect` | The kind of effect a tool has, which the policy permits or not. |
| `Toolset` | The tools one agent may call, by name. |
| `Policy` | What an agent may do: least privilege unless stated otherwise. |
| `Limits` | Stopping conditions: when a run stops, whatever the planner proposes. |
| `GateKind` | The five gates, in the order an action passes them. |
| `GateResult` | One gate's answer for one action. |

## Run state and approval[#](#run-state-and-approval "Link to this heading")

|  |  |
| --- | --- |
| `RunState` | The whole of one run, saved after every step. |
| `RunStatus` | Where a run is. |
| `StopReason` | Why a run is no longer running. |
| `Step` | One completed step: a decision and what came of it. |
| `StepOutcome` | What one step came to. |
| `Spent` | What a run has used so far, against its `Limits`. |
| `ApprovalRequest` | An action waiting at the Approval gate. |
| `Approval` | A person's answer to an `ApprovalRequest`. |
| `StateStore` | Saves and loads run states. |
| `MemoryStore` | Keep states in memory, as their JSON text (so a load is a real round trip). |
| `JsonFileStore` | Keep each run's state in `<directory>/<run_id>.json`. |

## Audit trail[#](#audit-trail "Link to this heading")

|  |  |
| --- | --- |
| `AuditSink` | Where audit records go. |
| `MemoryAuditSink` | Keep records in a list, `records`. |
| `JsonlAuditSink` | Append records to a JSON Lines file, one canonical line each. |
| `read_audit` | Read a JSON Lines audit file. |
| `verify_audit` | Check every run's hash chain in `records`. |

## Errors[#](#errors "Link to this heading")

|  |  |
| --- | --- |
| `AgentError` | One error, as recorded in a run's state and audit trail. |
| `ErrorCode` | What went wrong, as a stable code a caller may branch on. |
| `SchemaError` | A tool's parameter schema uses something outside the supported subset. |
| `StateError` | A saved run state is malformed, or of a schema version not supported. |