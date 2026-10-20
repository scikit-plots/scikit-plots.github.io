# build\_lock[#](#build-lock "Link to this heading")

scikitplot.cython.build\_lock(**lock\_dir**, **\***, **timeout\_s=60.0**, **poll\_s=0.05**, **stale\_after\_s=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cython/_lock.py#L93)[#](#scikitplot.cython.build_lock "Link to this definition")
:   Acquire an exclusive build lock via atomic directory creation.

    Parameters:
    :   ****lock\_dir****pathlib.Path
        :   Lock directory path to create atomically.

        ****timeout\_s****float, default=60.0
        :   Maximum seconds to wait for the lock. A value of `0` makes a single
            acquisition attempt and raises `TimeoutError` immediately if the lock
            is already held.

        ****poll\_s****float, default=0.05
        :   Sleep interval in seconds between acquisition retries.

        ****stale\_after\_s****float | None, default=None
        :   Age in seconds after which an existing lock may be reclaimed as stale.
            When `None`, the effective threshold is
            `max(timeout_s, _DEFAULT_STALE_AFTER_S)`.

    Returns:
    :   Generator[None, None, None]
        :   Context manager that yields once the lock is held.

    Raises:
    :   TimeoutError
        :   If the lock cannot be acquired within `timeout_s` seconds.

        ValueError
        :   If `timeout_s < 0`, `poll_s <= 0`, or an explicit
            `stale_after_s <= 0`.

    Parameters:
    :   * ****lock\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****timeout\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****poll\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****stale\_after\_s**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    Return type:
    :   [**Generator**](https://docs.python.org/3/library/typing.html#typing.Generator "(in Python v3.15)")[None, None, None]

    Notes

    ****Stale lock recovery****: if a lock directory exists but its `mtime` is
    older than the effective stale threshold, it is treated as stale (left by
    a killed process) and removed before the next acquisition attempt. The
    threshold is `stale_after_s` when supplied; otherwise it is
    `max(timeout_s, _DEFAULT_STALE_AFTER_S)`.

    ****Clean release****: the lock directory is always removed in the `finally`
    block, so normal exceptions inside the `with` body release the lock
    correctly.