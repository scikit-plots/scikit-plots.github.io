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

## Sub-runs and evaluation[#](#sub-runs-and-evaluation "Link to this heading")

|  |  |
| --- | --- |
| [`delegate`](../modules/generated/scikitplot.agent.delegate.html#scikitplot.agent.delegate "scikitplot.agent.delegate") | Return a tool that runs `child` toward the goal it is called with. |
| [`DelegateTool`](../modules/generated/scikitplot.agent.DelegateTool.html#scikitplot.agent.DelegateTool "scikitplot.agent.DelegateTool") | A tool whose call is a bounded run of `child`. |
| [`evaluate_audit`](../modules/generated/scikitplot.agent.evaluate_audit.html#scikitplot.agent.evaluate_audit "scikitplot.agent.evaluate_audit") | Summarise every run in an audit trail. |
| [`AuditEvaluation`](../modules/generated/scikitplot.agent.AuditEvaluation.html#scikitplot.agent.AuditEvaluation "scikitplot.agent.AuditEvaluation") | Per-run summaries and aggregate rates. |
| [`RunSummary`](../modules/generated/scikitplot.agent.RunSummary.html#scikitplot.agent.RunSummary "scikitplot.agent.RunSummary") | What one run did, read from its audit records. |

## Workflow graphs[#](#workflow-graphs "Link to this heading")

|  |  |
| --- | --- |
| [`WorkflowGraph`](../modules/generated/scikitplot.agent.WorkflowGraph.html#scikitplot.agent.WorkflowGraph "scikitplot.agent.WorkflowGraph") | A checked, immutable workflow: nodes, edges and channels. |
| [`Task`](../modules/generated/scikitplot.agent.Task.html#scikitplot.agent.Task "scikitplot.agent.Task") | A node that calls one tool. |
| [`FanOut`](../modules/generated/scikitplot.agent.FanOut.html#scikitplot.agent.FanOut "scikitplot.agent.FanOut") | A node that calls several tools, then joins their results. |
| [`Branch`](../modules/generated/scikitplot.agent.Branch.html#scikitplot.agent.Branch "scikitplot.agent.Branch") | One branch of a [`FanOut`](../modules/generated/scikitplot.agent.FanOut.html#scikitplot.agent.FanOut "scikitplot.agent.FanOut"): a tool and its arguments. |
| [`Finish`](../modules/generated/scikitplot.agent.Finish.html#scikitplot.agent.Finish "scikitplot.agent.Finish") | A node that ends the run with an answer. |
| [`Edge`](../modules/generated/scikitplot.agent.Edge.html#scikitplot.agent.Edge "scikitplot.agent.Edge") | A transition from `source` to `target`, taken when `when` is true. |
| [`WorkflowView`](../modules/generated/scikitplot.agent.WorkflowView.html#scikitplot.agent.WorkflowView "scikitplot.agent.WorkflowView") | Where a run stands in its workflow, rebuilt from the recorded steps. |
| [`StepSummary`](../modules/generated/scikitplot.agent.StepSummary.html#scikitplot.agent.StepSummary "scikitplot.agent.StepSummary") | What one recorded step came to, as a callback sees it. |
| [`REDUCERS`](../modules/generated/scikitplot.agent.REDUCERS.html#scikitplot.agent.REDUCERS "scikitplot.agent.REDUCERS") |  |
| [`WorkflowError`](../modules/generated/scikitplot.agent.WorkflowError.html#scikitplot.agent.WorkflowError "scikitplot.agent.WorkflowError") | A graph that cannot be built, or a run the graph cannot continue. |
| [`WorkflowBranchError`](../modules/generated/scikitplot.agent.WorkflowBranchError.html#scikitplot.agent.WorkflowBranchError "scikitplot.agent.WorkflowBranchError") | A branch of a concurrent fan-out raised; the fan-out step failed. |

## Artifacts[#](#artifacts "Link to this heading")

|  |  |
| --- | --- |
| [`ArtifactStore`](../modules/generated/scikitplot.agent.ArtifactStore.html#scikitplot.agent.ArtifactStore "scikitplot.agent.ArtifactStore") | Keeps JSON values under the digest of their canonical form. |
| [`MemoryArtifactStore`](../modules/generated/scikitplot.agent.MemoryArtifactStore.html#scikitplot.agent.MemoryArtifactStore "scikitplot.agent.MemoryArtifactStore") | Keep artifacts in memory, as their canonical JSON text. |
| [`DirectoryArtifactStore`](../modules/generated/scikitplot.agent.DirectoryArtifactStore.html#scikitplot.agent.DirectoryArtifactStore "scikitplot.agent.DirectoryArtifactStore") | Keep each artifact in `<directory>/<first two digits>/<digest>.json`. |

## Plans[#](#plans "Link to this heading")

|  |  |
| --- | --- |
| [`PlanItem`](../modules/generated/scikitplot.agent.PlanItem.html#scikitplot.agent.PlanItem "scikitplot.agent.PlanItem") | One item of a plan. |
| [`PlanStatus`](../modules/generated/scikitplot.agent.PlanStatus.html#scikitplot.agent.PlanStatus "scikitplot.agent.PlanStatus") | Where one plan item stands. |
| [`MAX_PLAN_ITEMS`](../modules/generated/scikitplot.agent.MAX_PLAN_ITEMS.html#scikitplot.agent.MAX_PLAN_ITEMS "scikitplot.agent.MAX_PLAN_ITEMS") | int([x]) -> integer int(x, base=10) -> integer |
| [`check_plan_change`](../modules/generated/scikitplot.agent.check_plan_change.html#scikitplot.agent.check_plan_change "scikitplot.agent.check_plan_change") | Refuse a plan change that would hide or rewrite progress. |

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

## Schemas and canonical values[#](#schemas-and-canonical-values "Link to this heading")

|  |  |
| --- | --- |
| [`check_schema`](../modules/generated/scikitplot.agent.check_schema.html#scikitplot.agent.check_schema "scikitplot.agent.check_schema") | Check that a tool's argument schema is in the supported subset. |
| [`validate`](../modules/generated/scikitplot.agent.validate.html#scikitplot.agent.validate "scikitplot.agent.validate") | Return the reasons `instance` does not match `schema`. |
| [`canonical_json`](../modules/generated/scikitplot.agent.canonical_json.html#scikitplot.agent.canonical_json "scikitplot.agent.canonical_json") | Return the canonical JSON text of a plain value. |
| [`digest`](../modules/generated/scikitplot.agent.digest.html#scikitplot.agent.digest "scikitplot.agent.digest") | Return the SHA-256 of a plain value's canonical JSON, as 64 hex digits. |
| [`plain`](../modules/generated/scikitplot.agent.plain.html#scikitplot.agent.plain "scikitplot.agent.plain") | Return `value` as a plain JSON value, or raise. |