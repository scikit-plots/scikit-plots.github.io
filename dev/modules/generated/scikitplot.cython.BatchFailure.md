# BatchFailure[#](#batchfailure "Link to this heading")

class scikitplot.cython.BatchFailure(**name**, **source**, **error\_type**, **error**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_result.py#L383)[#](#scikitplot.cython.BatchFailure "Link to this definition")
:   A single failure within a batch build (CYTHON-BATCH-001).

    Parameters:
    :   ****name****str
        :   The batch key (e.g. file stem) that failed.

        ****source****pathlib.Path
        :   The source path that failed to build/import.

        ****error\_type****str
        :   The exception class name.

        ****error****str
        :   The stringified exception message.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****source**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****error\_type**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****error**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    error: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_result.py#L383)[#](#scikitplot.cython.BatchFailure.error "Link to this definition")

    error\_type: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_result.py#L383)[#](#scikitplot.cython.BatchFailure.error_type "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_result.py#L383)[#](#scikitplot.cython.BatchFailure.name "Link to this definition")

    source: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/1037dde0/scikitplot/cython/_result.py#L383)[#](#scikitplot.cython.BatchFailure.source "Link to this definition")