# Security and readiness[#](#security-and-readiness "Link to this heading")

The module exposes `SecurityPolicy` and policy context helpers. Treat
policy configuration as intent and verify the operation path that actually
enforces it.

> **Warning**
> The repository maintenance review currently records that the exported
`SecurityPolicy` is not fully connected to session/server operations even
though its documentation describes that role. Until that runtime finding is
closed, do not rely on the policy object alone as a security boundary for
bind/URI/server decisions.

Readiness has several layers: MLflow package installed, CLI flags compatible,
store paths usable, server process started, and tracking endpoint ready. Report
those separately instead of one undifferentiated “available” flag.