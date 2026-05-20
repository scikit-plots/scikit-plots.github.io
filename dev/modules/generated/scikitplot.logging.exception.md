# exception[#](#exception "Link to this heading")

scikitplot.logging.exception(**msg**, **\*args**, **exc\_info=True**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/82d02fb/scikitplot/logging.py#L1465)[#](#scikitplot.logging.exception "Link to this definition")
:   Log a message with severity ‘ERROR’ on the root logger.

    With exception information. If the logger has no handlers,
    basicConfig() is called to add a console handler
    with a pre-defined format.