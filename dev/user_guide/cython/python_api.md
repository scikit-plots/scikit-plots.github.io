# Python API[#](#python-api "Link to this heading")

The public surface is intentionally large, so use the stability registry rather
than assuming every exported helper has the same compatibility promise.

```
from scikitplot.cython import list_api

stable = list_api("stable")
advanced = list_api("advanced")
experimental = list_api("experimental")

```

Normal application entry points include `compile_and_load` and its structured
result form, package build helpers, cache inspection, pins, profiles/toolchain
inspection, `SecurityPolicy`, `BuildBudget`, and template helpers.

Result objects such as `BuildResult`, `PackageBuildResult`,
`CacheStats` and batch result/failure types are preferred over parsing
human-readable exception text in automation.