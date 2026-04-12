# ModuleDeprecationWarning[#](#moduledeprecationwarning "Link to this heading")

exception scikitplot.exceptions.ModuleDeprecationWarning[[source]](https://github.com/scikit-plots/scikit-plots/blob/64b40d9/scikitplot/exceptions.py#L287)[#](#scikitplot.exceptions.ModuleDeprecationWarning "Link to this definition")
:   Module deprecation warning.

    > **Warning**
    > This warning should not be used, since nose testing is not relevant
    anymore.

    The nose tester turns ordinary Deprecation warnings into test failures.
    That makes it hard to deprecate whole modules, because they get
    imported by default. So this is a special Deprecation warning that the
    nose tester will let pass without making tests fail.

    Annotation:
    :   Unrecognized objtype: `exception`