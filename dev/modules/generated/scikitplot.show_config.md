# show\_config[#](#show-config "Link to this heading")

scikitplot.show\_config(**mode='stdout'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/77015c4/scikitplot/config/__config__.py#L189)[#](#scikitplot.show_config "Link to this definition")
:   Show libraries and system information on which SciPy was built
    and is being used

    Parameters:
    :   ****mode****{`'stdout'`, `'dicts'`}, optional.
        :   Indicates how to display the config information.
            `'stdout'` prints to console, `'dicts'` returns a dictionary
            of the configuration.

    Returns:
    :   ****out****{`dict`, `None`}
        :   If mode is `'dicts'`, a dict is returned, else None

    Notes

    1. The `'stdout'` mode will give more readable
       output if `pyyaml` is installed

    Examples

    Try it in your browser!
    ```
    >>> import scikitplot
    >>> scikitplot.show_config()

    ```
    ```
    Build Dependencies:
      blas:
        detection method: pkgconfig
        found: true
        include directory: /usr/include/x86_64-linux-gnu/openblas-pthread/
        lib directory: /usr/lib/x86_64-linux-gnu/openblas-pthread/
        name: openblas
        openblas configuration: USE_64BITINT= DYNAMIC_ARCH=1 DYNAMIC_OLDER=1 NO_CBLAS=
          NO_LAPACK= NO_LAPACKE=1 NO_AFFINITY=1 USE_OPENMP=0 generic MAX_THREADS=64
        pc file directory: /usr/lib/x86_64-linux-gnu/pkgconfig
        version: 0.3.20
      lapack:
        detection method: pkgconfig
        found: true
        include directory: /usr/include/x86_64-linux-gnu/openblas-pthread/
        lib directory: /usr/lib/x86_64-linux-gnu/openblas-pthread/
        name: openblas
        openblas configuration: USE_64BITINT= DYNAMIC_ARCH=1 DYNAMIC_OLDER=1 NO_CBLAS=
          NO_LAPACK= NO_LAPACKE=1 NO_AFFINITY=1 USE_OPENMP=0 generic MAX_THREADS=64
        pc file directory: /usr/lib/x86_64-linux-gnu/pkgconfig
        version: 0.3.20
      pybind11:
        detection method: config-tool
        include directory: unknown
        name: pybind11
        version: 3.0.4
    Compilers:
      c:
        commands: /usr/bin/ccache, cc
        linker: ld.bfd
        name: gcc
        version: 11.4.0
      c++:
        commands: /usr/bin/ccache, c++
        linker: ld.bfd
        name: gcc
        version: 11.4.0
      cython:
        commands: cython
        linker: cython
        name: cython
        version: 3.2.8
      fortran:
        commands: gfortran
        linker: ld.bfd
        name: gcc
        version: 11.4.0
      pythran: {}
    Machine Information:
      build:
        cpu: x86_64
        endian: little
        family: x86_64
        system: linux
      cross-compiled: false
      host:
        cpu: x86_64
        endian: little
        family: x86_64
        system: linux
    Python Information:
      path: /home/circleci/.pyenv/versions/3.12.13/bin/python
      version: '3.12'


    ```
    Go BackOpen In Tab

Make live