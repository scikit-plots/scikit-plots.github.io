# Filter[#](#filter "Link to this heading")

class scikitplot.logging.Filter(**name=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L769)[#](#scikitplot.logging.Filter "Link to this definition")
:   Filter instances are used to perform arbitrary filtering of LogRecords.

    Loggers and Handlers can optionally use Filter instances to filter
    records as desired. The base filter class only allows events which are
    below a certain point in the logger hierarchy. For example, a filter
    initialized with “A.B” will allow events logged by loggers “A.B”,
    “A.B.C”, “A.B.C.D”, “A.B.D” etc. but not “A.BB”, “B.A.B” etc. If
    initialized with the empty string, all events are passed.

    filter(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/../../logging/__init__.py#L791)[#](#scikitplot.logging.Filter.filter "Link to this definition")
    :   Determine if the specified record is to be logged.

        Returns True if the record should be logged, or False otherwise.
        If deemed appropriate, the record may be modified in-place.