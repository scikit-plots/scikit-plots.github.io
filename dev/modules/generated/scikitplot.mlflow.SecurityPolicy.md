# SecurityPolicy[#](#securitypolicy "Link to this heading")

class scikitplot.mlflow.SecurityPolicy(**allowed\_tracking\_uri\_schemes=frozenset({'file', 'http', 'https', 'sqlite'})**, **block\_cloud\_metadata\_hosts=True**, **allow\_spawn\_server=True**, **allow\_dev\_mode=False**, **allow\_disable\_security\_middleware=False**, **allow\_cors\_wildcard=False**, **blocked\_env\_key\_prefixes=frozenset({'LD\_'})**, **max\_env\_value\_length=65536**, **max\_env\_pairs=256**, **block\_path\_traversal=True**, **block\_shell\_metacharacters\_in\_args=True**, **block\_header\_injection=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L170)[#](#scikitplot.mlflow.SecurityPolicy "Link to this definition")
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

    Parameters:
    :   * ****allowed\_tracking\_uri\_schemes**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****block\_cloud\_metadata\_hosts**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_spawn\_server**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_dev\_mode**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_disable\_security\_middleware**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****allow\_cors\_wildcard**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****blocked\_env\_key\_prefixes**** ([**frozenset**](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
        * ****max\_env\_value\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****max\_env\_pairs**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****block\_path\_traversal**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_shell\_metacharacters\_in\_args**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
        * ****block\_header\_injection**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

    > **See also**
    > [`DEFAULT_SECURITY_POLICY`](scikitplot.mlflow.DEFAULT_SECURITY_POLICY.html#scikitplot.mlflow.DEFAULT_SECURITY_POLICY "scikitplot.mlflow.DEFAULT_SECURITY_POLICY")
    :   Conservative production-grade preset.

    [`RELAXED_SECURITY_POLICY`](scikitplot.mlflow.RELAXED_SECURITY_POLICY.html#scikitplot.mlflow.RELAXED_SECURITY_POLICY "scikitplot.mlflow.RELAXED_SECURITY_POLICY")
    :   Permissive preset for trusted local development.

    [`set_security_policy`](scikitplot.mlflow.set_security_policy.html#scikitplot.mlflow.set_security_policy "scikitplot.mlflow.set_security_policy")
    :   Activate a policy globally.

    [`security_policy`](scikitplot.mlflow.security_policy.html#scikitplot.mlflow.security_policy "scikitplot.mlflow.security_policy")
    :   Activate a policy for a context block.

    allow\_cors\_wildcard: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.SecurityPolicy.allow_cors_wildcard "Link to this definition")

    allow\_dev\_mode: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.SecurityPolicy.allow_dev_mode "Link to this definition")

    allow\_disable\_security\_middleware: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = False[#](#scikitplot.mlflow.SecurityPolicy.allow_disable_security_middleware "Link to this definition")

    allow\_spawn\_server: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.SecurityPolicy.allow_spawn_server "Link to this definition")

    allowed\_tracking\_uri\_schemes: [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] = frozenset({'file', 'http', 'https', 'sqlite'})[#](#scikitplot.mlflow.SecurityPolicy.allowed_tracking_uri_schemes "Link to this definition")

    block\_cloud\_metadata\_hosts: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.SecurityPolicy.block_cloud_metadata_hosts "Link to this definition")

    block\_header\_injection: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.SecurityPolicy.block_header_injection "Link to this definition")

    block\_path\_traversal: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.SecurityPolicy.block_path_traversal "Link to this definition")

    block\_shell\_metacharacters\_in\_args: [bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)") = True[#](#scikitplot.mlflow.SecurityPolicy.block_shell_metacharacters_in_args "Link to this definition")

    blocked\_env\_key\_prefixes: [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")] = frozenset({'LD\_'})[#](#scikitplot.mlflow.SecurityPolicy.blocked_env_key_prefixes "Link to this definition")

    max\_env\_pairs: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 256[#](#scikitplot.mlflow.SecurityPolicy.max_env_pairs "Link to this definition")

    max\_env\_value\_length: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 65536[#](#scikitplot.mlflow.SecurityPolicy.max_env_value_length "Link to this definition")

    validate\_cli\_arg\_value(**value**, **\***, **context='cli arg'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L569)[#](#scikitplot.mlflow.SecurityPolicy.validate_cli_arg_value "Link to this definition")
    :   Validate a CLI argument value against shell metacharacter injection.

        Parameters:
        :   ****value****str
            :   CLI argument value to validate.

            ****context****str, default=”cli arg”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If `block_shell_metacharacters_in_args=True` and **value** contains
                shell metacharacters, or `block_header_injection=True` and **value**
                contains CR/LF.

        Parameters:
        :   * ****value**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None

    validate\_env\_item(**key**, **value**, **\***, **context='extra\_env'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L451)[#](#scikitplot.mlflow.SecurityPolicy.validate_env_item "Link to this definition")
    :   Validate a single environment variable key-value pair.

        Parameters:
        :   ****key****str
            :   Environment variable name.

            ****value****str
            :   Environment variable value.

            ****context****str, default=”extra\_env”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If the key matches a blocked prefix, the value exceeds
                `max_env_value_length`, or the value contains CR/LF.

        Parameters:
        :   * ****key**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****value**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None

    validate\_env\_mapping(**env**, **\***, **context='extra\_env'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L500)[#](#scikitplot.mlflow.SecurityPolicy.validate_env_mapping "Link to this definition")
    :   Validate an entire environment variable mapping.

        Parameters:
        :   ****env****Mapping[str, str]
            :   Environment variable mapping to validate.

            ****context****str, default=”extra\_env”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If the mapping exceeds `max_env_pairs` or any item fails
                [`validate_env_item`](#scikitplot.mlflow.SecurityPolicy.validate_env_item "scikitplot.mlflow.SecurityPolicy.validate_env_item").

        Parameters:
        :   * ****env**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.14)")**[**[**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]**)
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None

    validate\_path(**path**, **\***, **context='path'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L535)[#](#scikitplot.mlflow.SecurityPolicy.validate_path "Link to this definition")
    :   Validate a filesystem path against path traversal.

        Parameters:
        :   ****path****str
            :   Filesystem path to validate.

            ****context****str, default=”path”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If `block_path_traversal=True` and **path** contains `..`.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None

    validate\_server\_config(**cfg**, **\***, **context='server config'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L326)[#](#scikitplot.mlflow.SecurityPolicy.validate_server_config "Link to this definition")
    :   Validate a [`ServerConfig`](scikitplot.mlflow.ServerConfig.html#scikitplot.mlflow.ServerConfig "scikitplot.mlflow.ServerConfig") under this policy.

        Parameters:
        :   ****cfg****ServerConfig
            :   Server configuration to validate.

            ****context****str, default=”server config”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If any field violates the policy.

        Parameters:
        :   * ****cfg**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None

        Notes

        Validated fields: `dev`, `disable_security_middleware`,
        `cors_allowed_origins`, `allowed_hosts`, `x_frame_options`,
        `gunicorn_opts`, `uvicorn_opts`, `waitress_opts`, `extra_args`.

    validate\_session\_config(**cfg**, **\***, **context='session config'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L405)[#](#scikitplot.mlflow.SecurityPolicy.validate_session_config "Link to this definition")
    :   Validate a [`SessionConfig`](scikitplot.mlflow.SessionConfig.html#scikitplot.mlflow.SessionConfig "scikitplot.mlflow.SessionConfig") under this policy.

        Parameters:
        :   ****cfg****SessionConfig
            :   Session configuration to validate.

            ****context****str, default=”session config”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If any field violates the policy.

        Parameters:
        :   * ****cfg**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"))
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None

        Notes

        Validated fields: `tracking_uri`, `registry_uri`, `env_file`,
        `extra_env`.

    validate\_tracking\_uri(**uri**, **\***, **context='tracking\_uri'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/33a338a/scikitplot/mlflow/_security.py#L264)[#](#scikitplot.mlflow.SecurityPolicy.validate_tracking_uri "Link to this definition")
    :   Validate a tracking or registry URI under this policy.

        Parameters:
        :   ****uri****str
            :   URI to validate.

            ****context****str, default=”tracking\_uri”
            :   Label for error messages.

        Returns:
        :   None

        Raises:
        :   SecurityPolicyViolationError
            :   If the URI scheme is not allowed, the host is a cloud metadata
                endpoint, or the URI path contains a traversal sequence.

        Parameters:
        :   * ****uri**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****context**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

        Return type:
        :   None