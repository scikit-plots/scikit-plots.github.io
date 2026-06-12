# show\_versions[#](#show-versions "Link to this heading")

scikitplot.show\_versions(**mode='stdout'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/576badd/scikitplot/utils/_show_versions.py#L298)[#](#scikitplot.show_versions "Link to this definition")
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
                       python: 3.11.15 (main, Mar  4 2026, 16:25:54) [GCC 11.4.0]
                   executable: /home/circleci/.pyenv/versions/3.11.15/bin/python3.11
        python_implementation: CPython
                     libc_ver: ('glibc', '2.35')
                           OS: Linux-6.17.0-1013-aws-x86_64-with-glibc2.35
                 architecture: x86_64
                          CPU: x86_64
                        cores: 36
       is_free_threaded_build: False
            is_running_no_gil: False
               is_gil_enabled: True

    Python Dependencies:
                   scikitplot: 0.5.dev0+git.20260612.576badd
                          pip: 26.0.1
                   setuptools: 79.0.1
                       cython: 3.2.5
                        numpy: 2.4.6
                        scipy: 1.17.1
                      aggdraw: 1.4.1
                       pandas: 2.3.3
                   matplotlib: 3.11.0
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
                     filepath: /home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/numpy.libs/libscipy_openblas64_-32a4b2a6.so
                      version: 0.3.31.188.0
              threading_layer: pthreads
                 architecture: SkylakeX


    ```
    ```
    >>> import scikitplot
    >>> scikitplot.show_versions(mode="dict")

    ```
    ```
    {'system': {'python': '3.11.15 (main, Mar  4 2026, 16:25:54) [GCC 11.4.0]',
      'executable': '/home/circleci/.pyenv/versions/3.11.15/bin/python3.11',
      'python_implementation': 'CPython',
      'libc_ver': ('glibc', '2.35'),
      'OS': 'Linux-6.17.0-1013-aws-x86_64-with-glibc2.35',
      'architecture': 'x86_64',
      'CPU': 'x86_64',
      'cores': 36,
      'is_free_threaded_build': False,
      'is_running_no_gil': False,
      'is_gil_enabled': True},
     'dependencies': {'scikitplot': '0.5.dev0+git.20260612.576badd',
      'pip': '26.0.1',
      'setuptools': '79.0.1',
      'cython': '3.2.5',
      'numpy': '2.4.6',
      'scipy': '1.17.1',
      'aggdraw': '1.4.1',
      'pandas': '2.3.3',
      'matplotlib': '3.11.0',
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
       'filepath': '/home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/numpy.libs/libscipy_openblas64_-32a4b2a6.so',
       'version': '0.3.31.188.0',
       'threading_layer': 'pthreads',
       'architecture': 'SkylakeX'}]}

    ```
    ```
    >>> # !scikitplot show_versions -j
    >>> !scikitplot show_versions || true

    ```
    ```
    [32m[1mChanged logging level: WARNING[0m
    [1;36mScikit-plot Version Information:[0m


    ```
    ```

    System Information:
                       python: 3.11.15 (main, Mar  4 2026, 16:25:54) [GCC 11.4.0]
                   executable: /home/circleci/.pyenv/versions/3.11.15/bin/python
        python_implementation: CPython
                     libc_ver: ('glibc', '2.35')
                           OS: Linux-6.17.0-1013-aws-x86_64-with-glibc2.35
                 architecture: x86_64
                          CPU: x86_64
                        cores: 36
       is_free_threaded_build: False
            is_running_no_gil: False
               is_gil_enabled: True

    Python Dependencies:
                   scikitplot: 0.5.dev0+git.20260612.576badd
                          pip: 26.0.1
                   setuptools: 79.0.1
                       cython: 3.2.5
                        numpy: 2.4.6
                        scipy: 1.17.1
                      aggdraw: 1.4.1
                       pandas: 2.3.3
                   matplotlib: 3.11.0
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
                     filepath: /home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/numpy.libs/libscipy_openblas64_-32a4b2a6.so
                      version: 0.3.31.188.0
              threading_layer: pthreads
                 architecture: SkylakeX

                     user_api: blas
                 internal_api: openblas
                  num_threads: 36
                       prefix: libscipy_openblas
                     filepath: /home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/scipy.libs/libscipy_openblas-6cdc3b4a.so
                      version: 0.3.30
              threading_layer: pthreads
                 architecture: SkylakeX

                     user_api: openmp
                 internal_api: openmp
                  num_threads: 36
                       prefix: libgomp
                     filepath: /home/circleci/.pyenv/versions/3.11.15/lib/python3.11/site-packages/scikit_learn.libs/libgomp-e985bcbb.so.1.0.0
                      version: None


    ```
    Go BackOpen In Tab

Make live