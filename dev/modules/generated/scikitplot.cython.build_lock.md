# build\_lock[#](#build-lock "Link to this heading")

scikitplot.cython.build\_lock(**lock\_dir**, **\***, **timeout\_s=60.0**, **poll\_s=0.05**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/287271b/scikitplot/cython/_lock.py#L35)[#](#scikitplot.cython.build_lock "Link to this definition")
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

    Returns:
    :   Iterator[None]
        :   Context manager that yields once the lock is held.

    Raises:
    :   TimeoutError
        :   If the lock cannot be acquired within `timeout_s` seconds.

        ValueError
        :   If `timeout_s < 0` or `poll_s <= 0`.

    Parameters:
    :   * ****lock\_dir**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)"))
        * ****timeout\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))
        * ****poll\_s**** ([**float**](https://docs.python.org/3/library/functions.html#float "(in Python v3.14)"))

    Return type:
    :   [**Iterator**](https://docs.python.org/3/library/typing.html#typing.Iterator "(in Python v3.14)")[None]

    Notes

    ****Stale lock recovery****: if a lock directory exists but its `mtime` is
    older than `timeout_s` seconds, it is treated as stale (left by a killed
    process) and removed before the next acquisition attempt. This prevents
    permanent deadlock after hard crashes.

    ****Clean release****: the lock directory is always removed in the `finally`
    block, so normal exceptions inside the `with` body release the lock
    correctly.