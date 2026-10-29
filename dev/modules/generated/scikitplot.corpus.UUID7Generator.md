# UUID7Generator[#](#uuid7generator "Link to this heading")

class scikitplot.corpus.UUID7Generator(**\***, **clock\_ns=None**, **random\_bytes=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_identity.py#L178)[#](#scikitplot.corpus.UUID7Generator "Link to this definition")
:   Monotonic generator of RFC 9562 UUID version 7 identifiers.

    Parameters:
    :   ****clock\_ns****callable, optional
        :   Returns the current Unix time in nanoseconds. Default
            [`time.time_ns`](https://docs.python.org/3/library/time.html#time.time_ns "(in Python v3.15)"). Injectable so that tests can step the clock.

        ****random\_bytes****callable, optional
        :   `random_bytes(n) -> bytes` returning `n` unpredictable bytes.
            Default [`os.urandom`](https://docs.python.org/3/library/os.html#os.urandom "(in Python v3.15)"), the operating system’s CSPRNG (RFC 9562,
            section 6.9).

    Parameters:
    :   * ****clock\_ns**** (**Callable****[****[****]****,** [**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]** **|** **None**)
        * ****random\_bytes**** (**Callable****[****[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**]****,** [**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)")**]** **|** **None**)

    Notes

    ****User.**** Call the instance to get a [`uuid.UUID`](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)"). One process needs
    one generator: the module-level [`uuid7`](scikitplot.corpus.uuid7.html#scikitplot.corpus.uuid7 "scikitplot.corpus.uuid7") is that instance.

    ****Developer.**** Thread-safe: the clock read, the counter step and the record
    of the result happen under one lock. Fork-safe for every instance, not only
    the module’s: each call compares [`os.getpid`](https://docs.python.org/3/library/os.html#os.getpid "(in Python v3.15)") with the process that
    last used the instance and, in a forked child, calls [`reset`](#scikitplot.corpus.UUID7Generator.reset "scikitplot.corpus.UUID7Generator.reset") before
    taking the lock. A lock held by another thread at the fork stays held in
    the child, and the child must not continue the parent’s counter (RFC 9562,
    section 6.9: reseed on fork).

    Examples

    Try it in your browser!
    ```
    >>> ticks = iter([5_000_000, 5_000_000, 1_000_000])
    >>> make = UUID7Generator(clock_ns=lambda: next(ticks))
    >>> a, b, c = make(), make(), make()
    >>> a < b < c  # same millisecond, then a clock step backwards
    True
    >>> {uuid7_unix_ms(u) for u in (a, b, c)}
    {5}

    ```
    Go BackOpen In Tab

    \_\_call\_\_()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_identity.py#L262)[#](#scikitplot.corpus.UUID7Generator.__call__ "Link to this definition")
    :   Return the next identifier.

        Returns:
        :   uuid.UUID
            :   Version 7, RFC 9562 variant, greater than every identifier this
                generator returned before.

        Raises:
        :   OverflowError
            :   If the timestamp no longer fits 48 bits (the year 10889), or the
                clock reads before the Unix epoch.

            ValueError
            :   If `random_bytes` returns the wrong number of bytes.

            TypeError
            :   If `random_bytes` returns something other than bytes.

        Return type:
        :   [**UUID**](https://docs.python.org/3/library/uuid.html#uuid.UUID "(in Python v3.15)")

    reset()[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/corpus/_identity.py#L229)[#](#scikitplot.corpus.UUID7Generator.reset "Link to this definition")
    :   Forget the sequence, so the next identifier starts a new one.

        Notes

        Replaces the lock instead of acquiring it: called in a forked child,
        where another thread of the parent may have held it at the fork.

        Return type:
        :   None