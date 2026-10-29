# Commands in a notebook[#](#commands-in-a-notebook "Link to this heading")

`%scikitplot` is the command line in a cell: the same commands, options,
output and exit status as `scikitplot` in a terminal.

```
%load_ext scikitplot
%scikitplot --version
%scikitplot env plan -n analysis --target pyodide --package six

```

It returns a `CommandResult`; assign it to keep it. With `--format json`
the output is parsed into `.data`:

```
r = %scikitplot info --format json
assert r.ok and r.exit_code == 0
r.data["python"]["version"]

```

`{name}` and `$name` insert Python values, as in every IPython magic;
quote them when they may contain spaces (`"{path}"`).

## Cell input[#](#cell-input "Link to this heading")

With two percent signs the cell is the command’s standard input, for
commands that read it, such as `cleanprompt`:

```
%%scikitplot cleanprompt redact
Please email alice@example.com about the invoice.

```

## Where a command runs[#](#where-a-command-runs "Link to this heading")

| Command | Runs |
| --- | --- |
| native: `info`, `doctor`, `show-versions`, `show-config` … | in the kernel; its output is captured and the kernel’s logging is left as it was; the interrupt button stops the cell |
| delegated: `env`, `mcp`, `cleanprompt`; any command with cell input | in a subprocess of the kernel’s Python: output is shown as it comes; the interrupt button and the `timeout` setting stop it and the processes it started |

`%scikitplot_config isolate=true` runs native commands in a subprocess
too. A process a command leaves running after it exits is stopped a few
seconds later (or at the timeout), and the cell finishes; on POSIX a process
that started its own session is out of reach and keeps running. The result
keeps the first MiB of each output stream (`result.truncated` says when it
kept less); what was shown while the command ran is shown in full.

## Mistakes and errors[#](#mistakes-and-errors "Link to this heading")

A word that is not a command is refused, with the closest names; nothing
is guessed:

```
%scikitplot evn plan

```

prints:

```
MagicUsageError [usage]: 'evn' is not a scikitplot command
  hint: did you mean 'env'?

```

A command that fails shows its own message (as in a terminal) and returns
its exit status. `<TAB>` after `%scikitplot` completes command names,
then the options of a native command and the values of `--format`.