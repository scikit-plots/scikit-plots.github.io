# threads\_info[#](#threads-info "Link to this heading")

scikitplot.annoy.threads\_info()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/annoy/_threads.py#L277)[#](#scikitplot.annoy.threads_info "Link to this definition")
:   Describe what decides the number of threads in this process.

    Returns:
    :   dict
        :   `compiled`
            :   Whether the compiled module has the multithreaded build.

            `mode`
            :   The mode in effect (`threads_mode`).

            `modes`
            :   Every mode, the default first.

            `env`
            :   The name of the environment variable that selects the mode.

            `cpu_count`
            :   The number of CPUs `multi` uses for `n_jobs=-1`.

    Raises:
    :   ValueError
        :   If the environment variable holds something that is not a mode.

    Return type:
    :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> info = threads_info()
    >>> info["env"], info["modes"]
    ('SKPLT_ANNOY_THREADS', ('auto', 'single', 'multi'))

    ```
    Go BackOpen In Tab