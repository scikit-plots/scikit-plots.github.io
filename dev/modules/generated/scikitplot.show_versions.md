# show\_versions[#](#show-versions "Link to this heading")

scikitplot.show\_versions(**mode='stdout'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c8953a1/scikitplot/utils/_show_versions.py#L298)[#](#scikitplot.show_versions "Link to this definition")
:   Print or return debugging information about the system, Python, dependencies, and hardware.

    Parameters:
    :   ****mode****{‘stdout’, ‘dict’, ‘yaml’, ‘rich’}, default=’stdout’
        :   * ‘stdout’: prints information to console using `rich` (if available) or plain text.
            * ‘dict’: returns the information as a nested dictionary.
            * ‘yaml’: returns the information in YAML format (requires PyYAML).
            * ‘rich’: prints formatted output using rich library.

    Returns:
    :   ****version\_data****str, dict or None
        :   If `mode='dict'`, returns a dictionary of version information.
            If `mode='yaml'`, returns a string of version information.
            Otherwise, returns None.

    Parameters:
    :   ****mode**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Return type:
    :   Optional[[dict](https://docs.python.org/3/library/stdtypes.html#dict "(in Python v3.14)")[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"), any]]

    Notes

    Useful for debugging and issue reporting.

    * is\_free\_threaded\_build -> capability / ABI
    * is\_gil\_enabled -> runtime state
    * is\_running\_no\_gil -> effective execution mode

    Python | `is_free_threaded_build` | `is_gil_enabled` | `is_running_no_gil` |———————- | ———————–: | —————: | ——————: |3.8-3.12 | False | True | False |3.13-3.14 regular | False | True | False |3.13-3.14 FT + GIL ON | True | True | False |3.13-3.14 FT + GIL OFF | True | False | True |3.15+ FT + GIL OFF | True | False | True |

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot
    >>> scikitplot.show_versions()

    ```
    ```

    System Information:
                       python: 3.12.14 (main, Aug 13 2026, 21:21:31) [GCC 11.4.0]
                   executable: /home/circleci/.pyenv/versions/3.12.14/bin/python3.12
        python_implementation: CPython
                     libc_ver: ('glibc', '2.35')
                           OS: Linux-7.0.0-1009-aws-x86_64-with-glibc2.35
                 architecture: x86_64
                          CPU: x86_64
                        cores: 36
       is_free_threaded_build: False
            is_running_no_gil: False
               is_gil_enabled: True

    Python Dependencies:
                   scikitplot: 0.5.dev0+git.20260824.c8953a1
                          pip: 26.2.1
                   setuptools: 84.0.0
                       cython: 3.3.0
                        numpy: 2.5.2
                        scipy: 1.18.1
                      aggdraw: 1.4.1
                       pandas: 2.3.3
                   matplotlib: 3.11.1
                       joblib: 1.5.3
                threadpoolctl: 3.6.0
                 scikit-learn: 1.9.0
                      seaborn: 0.13.2

    Environment Variables:
                 runtime_envs: ['docker']
                           CI: true
              MKL_NUM_THREADS: None
              OMP_NUM_THREADS: None
         OPENBLAS_NUM_THREADS: None

    GPU Information:
                         cuda: None
                          gpu: None
                          mps: None
                          xla: None
                          xpu: None

    Threadpoolctl Information:
                     user_api: blas
                 internal_api: openblas
                  num_threads: 36
                       prefix: libscipy_openblas
                     filepath: /home/circleci/.pyenv/versions/3.12.14/lib/python3.12/site-packages/numpy.libs/libscipy_openblas64_-61654e39.so
                      version: 0.3.34.0.0
              threading_layer: pthreads
                 architecture: SkylakeX


    ```
    ```
    >>> import scikitplot
    >>> scikitplot.show_versions(mode="dict")

    ```
    ```
    {'system': {'python': '3.12.14 (main, Aug 13 2026, 21:21:31) [GCC 11.4.0]',
      'executable': '/home/circleci/.pyenv/versions/3.12.14/bin/python3.12',
      'python_implementation': 'CPython',
      'libc_ver': ('glibc', '2.35'),
      'OS': 'Linux-7.0.0-1009-aws-x86_64-with-glibc2.35',
      'architecture': 'x86_64',
      'CPU': 'x86_64',
      'cores': 36,
      'is_free_threaded_build': False,
      'is_running_no_gil': False,
      'is_gil_enabled': True},
     'dependencies': {'scikitplot': '0.5.dev0+git.20260824.c8953a1',
      'pip': '26.2.1',
      'setuptools': '84.0.0',
      'cython': '3.3.0',
      'numpy': '2.5.2',
      'scipy': '1.18.1',
      'aggdraw': '1.4.1',
      'pandas': '2.3.3',
      'matplotlib': '3.11.1',
      'joblib': '1.5.3',
      'threadpoolctl': '3.6.0',
      'scikit-learn': '1.9.0',
      'seaborn': '0.13.2'},
     'environment': {'runtime_envs': ['docker'],
      'CI': 'true',
      'MKL_NUM_THREADS': None,
      'OMP_NUM_THREADS': None,
      'OPENBLAS_NUM_THREADS': None},
     'gpu': {'cuda': None, 'gpu': None, 'mps': None, 'xla': None, 'xpu': None},
     'threadpoolctl': [{'user_api': 'blas',
       'internal_api': 'openblas',
       'num_threads': 36,
       'prefix': 'libscipy_openblas',
       'filepath': '/home/circleci/.pyenv/versions/3.12.14/lib/python3.12/site-packages/numpy.libs/libscipy_openblas64_-61654e39.so',
       'version': '0.3.34.0.0',
       'threading_layer': 'pthreads',
       'architecture': 'SkylakeX'}]}

    ```
    ```
    >>> # !scikitplot show_versions -j
    >>> !scikitplot show_versions || true

    ```
    ```

    System Information:
                       python: 3.12.14 (main, Aug 13 2026, 21:21:31) [GCC 11.4.0]
                   executable: /home/circleci/.pyenv/versions/3.12.14/bin/python
        python_implementation: CPython
                     libc_ver: ('glibc', '2.35')
                           OS: Linux-7.0.0-1009-aws-x86_64-with-glibc2.35
                 architecture: x86_64
                          CPU: x86_64
                        cores: 36
       is_free_threaded_build: False
            is_running_no_gil: False
               is_gil_enabled: True

    Python Dependencies:
                   scikitplot: 0.5.dev0+git.20260824.c8953a1
                          pip: 26.2.1
                   setuptools: 84.0.0
                       cython: 3.3.0
                        numpy: 2.5.2
                        scipy: 1.18.1
                      aggdraw: 1.4.1
                       pandas: 2.3.3
                   matplotlib: 3.11.1
                       joblib: 1.5.3
                threadpoolctl: 3.6.0
                 scikit-learn: 1.9.0
                      seaborn: 0.13.2

    Environment Variables:
                 runtime_envs: ['docker']
                           CI: true
              MKL_NUM_THREADS: None
              OMP_NUM_THREADS: None
         OPENBLAS_NUM_THREADS: None

    GPU Information:
                         cuda: None
                          gpu: None
                          mps: None
                          xla: None
                          xpu: None

    Threadpoolctl Information:
                     user_api: blas
                 internal_api: openblas
                  num_threads: 36
                       prefix: libscipy_openblas
                     filepath: /home/circleci/.pyenv/versions/3.12.14/lib/python3.12/site-packages/numpy.libs/libscipy_openblas64_-61654e39.so
                      version: 0.3.34.0.0
              threading_layer: pthreads
                 architecture: SkylakeX


    ```
    Go BackOpen In Tab

Make live