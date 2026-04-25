# Timer[#](#timer "Link to this heading")

class scikitplot.utils.\_time.Timer(**message=''**, **\***, **precision=3**, **logging\_level='info'**, **verbose=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/f4129c4/scikitplot/utils/_time.py#L16)[#](#scikitplot.utils._time.Timer "Link to this definition")
:   Lightweight ⏱ timing context manager with [`logger`](scikitplot.logger.html#module-scikitplot.logger "scikitplot.logger") support.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.utils._time import Timer
    >>> with Timer("Building Annoy index...", verbose=True):
    ...     build_index()

    ```
    ```
    >>> import scikitplot.utils as sp

    ```
    ```
    >>> with sp.Timer(verbose=True, logging_level="debug"):
    ...     sp.PathNamer()

    ```
    ```
    >>> with sp.Timer(logging_level="debug"):
    ...     sp.PathNamer().make_filename()

    ```
    ```
    >>> with sp.Timer(logging_level="info"):
    ...     sp.PathNamer().make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="warn"):
    ...     sp.make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="warning"):
    ...     sp.make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="exception"):
    ...     sp.make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="error"):
    ...     sp.make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="fatal"):
    ...     sp.make_path()

    ```
    ```
    >>> with sp.Timer(logging_level="critical"):
    ...     sp.make_path()

    ```
    Go BackOpen In Tab

    Parameters:
    :   * ****message**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****precision**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****logging\_level**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
        * ****verbose**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))