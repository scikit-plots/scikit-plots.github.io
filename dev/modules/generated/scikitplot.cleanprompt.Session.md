# Session[#](#session "Link to this heading")

class scikitplot.cleanprompt.Session(**\*\*options**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L530)[#](#scikitplot.cleanprompt.Session "Link to this definition")
:   A conversation: consistent placeholders, and a vault with a lifetime.

    Parameters:
    :   ****\*\*options****
        :   Any keyword [`encode`](scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") accepts. They apply to every turn.

    Parameters:
    :   ****options**** (**Any**)

    Notes

    ****User notes.**** Use it as a context manager so the values are cleared when
    the block ends, however it ends:

    ```
    with session(ner=True) as chat:
        reply = chat.roundtrip("Summarise this for ada@example.com", send=model)

    ```

    Across turns the same value keeps the same placeholder, so a model reading
    the thread sees one consistent participant rather than a new stranger each
    time.

    ****Developer notes.**** Continuity is carried by passing the previous turn’s
    entries into the next [`Redactor.redact`](scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor.redact "scikitplot.cleanprompt.Redactor.redact") call as a `seed`. The
    redactor itself stays stateless — that is invariant I4 and the upstream
    defect `CP-003` — and the session is the object that deliberately owns
    the link between two documents.

    A session is not thread-safe: it is a conversation, and a conversation has
    one voice. Use one session per thread.

    Examples

    Try it in your browser!
    ```
    >>> with session() as chat:
    ...     first = chat.encode("Mail ada@example.com")
    ...     second = chat.encode("Ping ada@example.com again")
    >>> first, second
    ('Mail [EMAIL-1]', 'Ping [EMAIL-1] again')

    ```
    Go BackOpen In Tab

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L775)[#](#scikitplot.cleanprompt.Session.clear "Link to this definition")
    :   Drop every value this session holds.

        Return type:
        :   None

    decode(**reply**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L661)[#](#scikitplot.cleanprompt.Session.decode "Link to this definition")
    :   Restore values in `reply` from everything seen this session.

        Parameters:
        :   * ****reply**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    decode\_report(**reply**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L666)[#](#scikitplot.cleanprompt.Session.decode_report "Link to this definition")
    :   Restore `reply` and report what was and was not resolved.

        Returns:
        :   RestorationResult
            :   Carries `restored`, `unknown` and `unused`.

        Parameters:
        :   ****reply**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    encode(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L611)[#](#scikitplot.cleanprompt.Session.encode "Link to this definition")
    :   Redact `text`, keeping placeholders consistent with earlier turns.

        Parameters:
        :   ****text****str
            :   This turn’s prompt.

        Returns:
        :   str
            :   Safe to send.

        Raises:
        :   TypeError
            :   If `text` is not a string.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    property handle: [Handle](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt._api.Handle")[#](#scikitplot.cleanprompt.Session.handle "Link to this definition")
    :   everything seen this session.

        Type:
        :   [Handle](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt.Handle")

    property policy: [RedactionPolicy](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy")[#](#scikitplot.cleanprompt.Session.policy "Link to this definition")
    :   the policy every turn uses.

        Type:
        :   [RedactionPolicy](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy")

    report()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L739)[#](#scikitplot.cleanprompt.Session.report "Link to this definition")
    :   Return what this session has done and what it can and cannot detect.

        Returns:
        :   dict
            :   `turns`, `entries`, `labels` (placeholder to category, in
                issue order) and `detection`, which is the full
                [`diagnose`](scikitplot.cleanprompt.diagnose.html#scikitplot.cleanprompt.diagnose "scikitplot.cleanprompt.diagnose") report.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

        Notes

        ****User notes.**** Safe to print, log or attach to a ticket: it names
        placeholders and categories, never values.

        ****Developer notes.**** This returned the diagnosis alone, which is what
        the session **can** detect and says nothing about what it **did**. On a
        session object `report()` reads as “tell me about this session”, and
        a caller who wanted the turn count had to reach past the method to
        `.turns`. The diagnosis is still here, under `detection`; the
        session’s own state is now the top level.

        `labels` maps each placeholder to its category and deliberately
        stops there. The placeholder is already in the text that was sent, so
        it discloses nothing, while the value it stands for is exactly what
        this submodule exists to keep out of anything that gets copied
        elsewhere.

    roundtrip(**text**, **send**, **\***, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cleanprompt/_api.py#L678)[#](#scikitplot.cleanprompt.Session.roundtrip "Link to this definition")
    :   Encode, hand to `send`, decode the answer.

        Parameters:
        :   ****text****str
            :   This turn’s prompt.

            ****send****callable
            :   Takes the safe text, returns the model’s reply. Any provider.

            ****strict****bool, default=False
            :   Passed to [`decode`](scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode").

        Returns:
        :   str
            :   The reply with your values restored.

        Raises:
        :   CleanPromptError
            :   If `send` does not return a string. Anything `send` itself
                raises propagates unchanged: it is the caller’s client and the
                caller’s error.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****send**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

        Examples

        Try it in your browser!
        ```
        >>> with session() as chat:
        ...     chat.roundtrip(
        ...         "Mail ada@example.com",
        ...         send=lambda safe: "Sent to " + safe.split()[-1],
        ...     )
        'Sent to ada@example.com'

        ```
        Go BackOpen In Tab

    property turns: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.cleanprompt.Session.turns "Link to this definition")
    :   How many prompts have been encoded.

        Type:
        :   [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](../../auto_examples/cleanprompt/plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents