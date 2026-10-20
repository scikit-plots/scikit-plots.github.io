# scikitplot.agent[#](#module-scikitplot.agent "Link to this heading")

Bounded, audited tool use: a planner proposes, the runtime disposes.

[`Agent`](../modules/generated/scikitplot.agent.Agent.html#scikitplot.agent.Agent "scikitplot.agent.Agent") runs a goal with a caller-supplied planner (a model adapter or
a rule) and a [`Toolset`](../modules/generated/scikitplot.agent.Toolset.html#scikitplot.agent.Toolset "scikitplot.agent.Toolset"). The planner reads the run’s state and returns
a [`Decision`](../modules/generated/scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent.Decision"); the runtime alone decides whether it runs. Every action
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
| [`Agent`](../modules/generated/scikitplot.agent.Agent.html#scikitplot.agent.Agent "scikitplot.agent.Agent") | Run a goal with a planner and tools, within a policy and limits. |
| [`Decision`](../modules/generated/scikitplot.agent.Decision.html#scikitplot.agent.Decision "scikitplot.agent.Decision") | What the planner decided: call a tool, or finish with an answer. |
| [`Action`](../modules/generated/scikitplot.agent.Action.html#scikitplot.agent.Action "scikitplot.agent.Action") | A call the planner proposes: a tool name and its arguments. |
| [`Usage`](../modules/generated/scikitplot.agent.Usage.html#scikitplot.agent.Usage "scikitplot.agent.Usage") | What producing one decision cost, as the planner reports it. |

## Tools, policy and limits[#](#tools-policy-and-limits "Link to this heading")

|  |  |
| --- | --- |
| [`Tool`](../modules/generated/scikitplot.agent.Tool.html#scikitplot.agent.Tool "scikitplot.agent.Tool") | One callable tool and the facts the gate chain decides on. |
| [`ToolEffect`](../modules/generated/scikitplot.agent.ToolEffect.html#scikitplot.agent.ToolEffect "scikitplot.agent.ToolEffect") | The kind of effect a tool has, which the policy permits or not. |
| [`Toolset`](../modules/generated/scikitplot.agent.Toolset.html#scikitplot.agent.Toolset "scikitplot.agent.Toolset") | The tools one agent may call, by name. |
| [`Policy`](../modules/generated/scikitplot.agent.Policy.html#scikitplot.agent.Policy "scikitplot.agent.Policy") | What an agent may do: least privilege unless stated otherwise. |
| [`Limits`](../modules/generated/scikitplot.agent.Limits.html#scikitplot.agent.Limits "scikitplot.agent.Limits") | Stopping conditions: when a run stops, whatever the planner proposes. |
| [`GateKind`](../modules/generated/scikitplot.agent.GateKind.html#scikitplot.agent.GateKind "scikitplot.agent.GateKind") | The five gates, in the order an action passes them. |
| [`GateResult`](../modules/generated/scikitplot.agent.GateResult.html#scikitplot.agent.GateResult "scikitplot.agent.GateResult") | One gate's answer for one action. |

## Run state and approval[#](#run-state-and-approval "Link to this heading")

|  |  |
| --- | --- |
| [`RunState`](../modules/generated/scikitplot.agent.RunState.html#scikitplot.agent.RunState "scikitplot.agent.RunState") | The whole of one run, saved after every step. |
| [`RunStatus`](../modules/generated/scikitplot.agent.RunStatus.html#scikitplot.agent.RunStatus "scikitplot.agent.RunStatus") | Where a run is. |
| [`StopReason`](../modules/generated/scikitplot.agent.StopReason.html#scikitplot.agent.StopReason "scikitplot.agent.StopReason") | Why a run is no longer running. |
| [`Step`](../modules/generated/scikitplot.agent.Step.html#scikitplot.agent.Step "scikitplot.agent.Step") | One completed step: a decision and what came of it. |
| [`StepOutcome`](../modules/generated/scikitplot.agent.StepOutcome.html#scikitplot.agent.StepOutcome "scikitplot.agent.StepOutcome") | What one step came to. |
| [`Spent`](../modules/generated/scikitplot.agent.Spent.html#scikitplot.agent.Spent "scikitplot.agent.Spent") | What a run has used so far, against its [`Limits`](../modules/generated/scikitplot.agent.Limits.html#scikitplot.agent.Limits "scikitplot.agent.Limits"). |
| [`ApprovalRequest`](../modules/generated/scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent.ApprovalRequest") | An action waiting at the Approval gate. |
| [`Approval`](../modules/generated/scikitplot.agent.Approval.html#scikitplot.agent.Approval "scikitplot.agent.Approval") | A person's answer to an [`ApprovalRequest`](../modules/generated/scikitplot.agent.ApprovalRequest.html#scikitplot.agent.ApprovalRequest "scikitplot.agent.ApprovalRequest"). |
| [`StateStore`](../modules/generated/scikitplot.agent.StateStore.html#scikitplot.agent.StateStore "scikitplot.agent.StateStore") | Saves and loads run states. |
| [`MemoryStore`](../modules/generated/scikitplot.agent.MemoryStore.html#scikitplot.agent.MemoryStore "scikitplot.agent.MemoryStore") | Keep states in memory, as their JSON text (so a load is a real round trip). |
| [`JsonFileStore`](../modules/generated/scikitplot.agent.JsonFileStore.html#scikitplot.agent.JsonFileStore "scikitplot.agent.JsonFileStore") | Keep each run's state in `<directory>/<run_id>.json`. |

## Audit trail[#](#audit-trail "Link to this heading")

|  |  |
| --- | --- |
| [`AuditSink`](../modules/generated/scikitplot.agent.AuditSink.html#scikitplot.agent.AuditSink "scikitplot.agent.AuditSink") | Where audit records go. |
| [`MemoryAuditSink`](../modules/generated/scikitplot.agent.MemoryAuditSink.html#scikitplot.agent.MemoryAuditSink "scikitplot.agent.MemoryAuditSink") | Keep records in a list, `records`. |
| [`JsonlAuditSink`](../modules/generated/scikitplot.agent.JsonlAuditSink.html#scikitplot.agent.JsonlAuditSink "scikitplot.agent.JsonlAuditSink") | Append records to a JSON Lines file, one canonical line each. |
| [`read_audit`](../modules/generated/scikitplot.agent.read_audit.html#scikitplot.agent.read_audit "scikitplot.agent.read_audit") | Read a JSON Lines audit file. |
| [`verify_audit`](../modules/generated/scikitplot.agent.verify_audit.html#scikitplot.agent.verify_audit "scikitplot.agent.verify_audit") | Check every run's hash chain in `records`. |

## Errors[#](#errors "Link to this heading")

|  |  |
| --- | --- |
| [`AgentError`](../modules/generated/scikitplot.agent.AgentError.html#scikitplot.agent.AgentError "scikitplot.agent.AgentError") | One error, as recorded in a run's state and audit trail. |
| [`ErrorCode`](../modules/generated/scikitplot.agent.ErrorCode.html#scikitplot.agent.ErrorCode "scikitplot.agent.ErrorCode") | What went wrong, as a stable code a caller may branch on. |
| [`SchemaError`](../modules/generated/scikitplot.agent.SchemaError.html#scikitplot.agent.SchemaError "scikitplot.agent.SchemaError") | A tool's parameter schema uses something outside the supported subset. |
| [`StateError`](../modules/generated/scikitplot.agent.StateError.html#scikitplot.agent.StateError "scikitplot.agent.StateError") | A saved run state is malformed, or of a schema version not supported. |