# DEFAULT\_SECURITY\_POLICY[#](#default-security-policy "Link to this heading")

scikitplot.mlflow.DEFAULT\_SECURITY\_POLICY = SecurityPolicy(allowed\_tracking\_uri\_schemes=frozenset({'https', 'sqlite', 'file', 'http'}), block\_cloud\_metadata\_hosts=True, allow\_spawn\_server=True, allow\_dev\_mode=False, allow\_disable\_security\_middleware=False, allow\_cors\_wildcard=False, blocked\_env\_key\_prefixes=frozenset({'LD\_'}), max\_env\_value\_length=65536, max\_env\_pairs=256, block\_path\_traversal=True, block\_shell\_metacharacters\_in\_args=True, block\_header\_injection=True)[[source]](https://github.com/scikit-plots/scikit-plots/blob/4094af5/scikitplot/mlflow/_security.py#L)[#](#scikitplot.mlflow.DEFAULT_SECURITY_POLICY "Link to this definition")
:   Declarative security policy for [`scikitplot.mlflow`](../../apis/scikitplot.mlflow.html#module-scikitplot.mlflow "scikitplot.mlflow") operations.

    Parameters:
    :   ****allowed\_tracking\_uri\_schemes****frozenset[str]
        :   URI schemes accepted for tracking / registry URIs.
            Empty frozenset disables scheme enforcement.
            Default: `{"http", "https", "file", "sqlite"}`.

        ****block\_cloud\_metadata\_hosts****bool, default=True
        :   Reject HTTP(S) URIs whose hostname resolves to a cloud metadata endpoint
            (e.g., `169.254.169.254`). Prevents SSRF attacks.

        ****allow\_spawn\_server****bool, default=True
        :   Allow spawning a managed MLflow server subprocess.
            Set False in environments where process spawning is prohibited.

        ****allow\_dev\_mode****bool, default=False
        :   Allow `ServerConfig(dev=True)`.
            Dev mode disables production hardening and must not be used in shared
            environments.

        ****allow\_disable\_security\_middleware****bool, default=False
        :   Allow `ServerConfig(disable_security_middleware=True)`.

        ****allow\_cors\_wildcard****bool, default=False
        :   Allow `ServerConfig(cors_allowed_origins="*")`.
            Wildcard CORS grants any origin access to the server.

        ****blocked\_env\_key\_prefixes****frozenset[str]
        :   Env key prefixes unconditionally rejected in `extra_env`.
            Default: `{"LD_"}` blocks `LD_PRELOAD`, `LD_LIBRARY_PATH`, etc.

        ****max\_env\_value\_length****int, default=65536
        :   Maximum byte-length of any single env value (64 KiB).

        ****max\_env\_pairs****int, default=256
        :   Maximum key-value pairs in `extra_env`.

        ****block\_path\_traversal****bool, default=True
        :   Reject paths containing `..` traversal components.

        ****block\_shell\_metacharacters\_in\_args****bool, default=True
        :   Reject CLI option values containing shell metacharacters.

        ****block\_header\_injection****bool, default=True
        :   Reject header-like values containing CR or LF.

    Raises:
    :   ValueError
        :   If `max_env_value_length` or `max_env_pairs` is not positive.

        TypeError
        :   If `blocked_env_key_prefixes` contains non-string elements.

    > **See also**
    > [`DEFAULT_SECURITY_POLICY`](#scikitplot.mlflow.DEFAULT_SECURITY_POLICY "scikitplot.mlflow.DEFAULT_SECURITY_POLICY")
    :   Conservative production-grade preset.

    [`RELAXED_SECURITY_POLICY`](scikitplot.mlflow.RELAXED_SECURITY_POLICY.html#scikitplot.mlflow.RELAXED_SECURITY_POLICY "scikitplot.mlflow.RELAXED_SECURITY_POLICY")
    :   Permissive preset for trusted local development.

    [`set_security_policy`](scikitplot.mlflow.set_security_policy.html#scikitplot.mlflow.set_security_policy "scikitplot.mlflow.set_security_policy")
    :   Activate a policy globally.

    [`security_policy`](scikitplot.mlflow.security_policy.html#scikitplot.mlflow.security_policy "scikitplot.mlflow.security_policy")
    :   Activate a policy for a context block.