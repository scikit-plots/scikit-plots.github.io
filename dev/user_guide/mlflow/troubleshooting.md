# Troubleshooting[#](#troubleshooting "Link to this heading")

MLflow is not installed
:   The integration layer can exist without the upstream package. Install a
    compatible MLflow distribution in the runtime environment where tracking is
    required.

CLI flag rejected
:   Inspect `get_mlflow_server_cli_caps` rather than hard-coding flags from a
    different MLflow release.

Server starts but readiness fails
:   Check bind host/port, backend store, artifact root, process stderr and proxy or
    container networking. Process creation alone is not readiness.

Project root is wrong
:   Inspect marker configuration and the `start` path. Keep project discovery
    deterministic rather than depending on the shell’s current directory.

Security policy
:   See [Security and readiness](security_and_readiness.html#mlflow-security-and-readiness) for the current enforcement caveat.