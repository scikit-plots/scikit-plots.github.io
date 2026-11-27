# ScikitplotTracingException[#](#scikitplottracingexception "Link to this heading")

exception scikitplot.exceptions.ScikitplotTracingException(**message**, **error\_code=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/0f76614b/scikitplot/exceptions.py#L511)[#](#scikitplot.exceptions.ScikitplotTracingException "Link to this definition")
:   Exception thrown from tracing logic.

    Tracing logic should not block the main execution flow in general; hence
    this exception is used to distinguish tracing-related errors and handle
    them gracefully without surfacing them to end users.

    Parameters:
    :   ****message****str or Exception
        :   Description of the tracing error.

        ****error\_code****int or str, optional
        :   Error code; defaults to `0`.

    Annotation:
    :   Unrecognized objtype: `exception`