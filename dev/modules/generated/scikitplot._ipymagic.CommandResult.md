# CommandResult[#](#commandresult "Link to this heading")

class scikitplot.\_ipymagic.CommandResult(**argv**, **command**, **mode**, **exit\_code**, **stdout**, **stderr**, **duration**, **data=None**, **timed\_out=False**, **truncated=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult "Link to this definition")
:   The outcome of one `scikitplot` command run from a notebook or Python.

    Parameters:
    :   ****argv****tuple of str
        :   Arguments given to `scikitplot` (without the program name).

        ****command****str or None
        :   Registered command that ran (canonical name), None for the root
            (`--help`, `--version`).

        ****mode****{“in-process”, “subprocess”}
        :   Where it ran.

        ****exit\_code****int
        :   Exit status (`124` when the timeout stopped it; an interrupt
            raises `KeyboardInterrupt` instead of returning a result).

        ****stdout, stderr****str
        :   Captured output (bounded; see `truncated`).

        ****duration****float
        :   Seconds.

        ****data****object, default=None
        :   Parsed stdout of a `--format json` run; None otherwise or when
            stdout was not JSON.

        ****timed\_out****bool, default=False
        :   Stopped because the timeout elapsed.

        ****truncated****bool, default=False
        :   Captured output was cut to the capture limit; output shown while
            the command ran was not, output shown after it ends with a note.

    Parameters:
    :   * ****argv**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****command**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****exit\_code**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****stdout**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****stderr**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****duration**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****data**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****timed\_out**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****truncated**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    argv: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.argv "Link to this definition")

    command: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.command "Link to this definition")

    data: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") = None[#](#scikitplot._ipymagic.CommandResult.data "Link to this definition")

    duration: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.duration "Link to this definition")

    exit\_code: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.exit_code "Link to this definition")

    mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.mode "Link to this definition")

    property ok: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[#](#scikitplot._ipymagic.CommandResult.ok "Link to this definition")
    :   Whether the command exited with status 0 (bool).

    stderr: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.stderr "Link to this definition")

    stdout: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L34)[#](#scikitplot._ipymagic.CommandResult.stdout "Link to this definition")

    summary()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L81)[#](#scikitplot._ipymagic.CommandResult.summary "Link to this definition")
    :   Return the one-line status of the run.

        Returns:
        :   str
            :   `"scikitplot <command>: exit <n> in <t> s (<mode>)"` plus the
                reason it was stopped, if it was.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    timed\_out: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot._ipymagic.CommandResult.timed_out "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/_ipymagic/_results.py#L97)[#](#scikitplot._ipymagic.CommandResult.to_dict "Link to this definition")
    :   Return the result as plain data (JSON-serialisable).

        Returns:
        :   dict
            :   Every field; `argv` as a list.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    truncated: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot._ipymagic.CommandResult.truncated "Link to this definition")