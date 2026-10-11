# Levels and loggers[#](#levels-and-loggers "Link to this heading")

The module exposes familiar level constants (`DEBUG`, `INFO`, `WARNING`,
`ERROR`, `CRITICAL`) plus `get_logger`, `getEffectiveLevel`, `setLevel`
and verbosity helpers.

Choose levels by operational meaning:

* DEBUG: detailed diagnostic state;
* INFO: expected lifecycle events;
* WARNING: degraded or surprising but recoverable behavior;
* ERROR: an operation failed; and
* CRITICAL: the process/subsystem may not be able to continue.

Do not log secrets or full sensitive payloads merely because the message is at
DEBUG level. `sanitize_log_message` is a helper, not a substitute for
designing log records that omit sensitive values in the first place.