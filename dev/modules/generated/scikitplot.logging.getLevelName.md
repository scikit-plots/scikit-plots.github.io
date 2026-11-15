# getLevelName[#](#getlevelname "Link to this heading")

scikitplot.logging.getLevelName(**level**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/../../logging/__init__.py#L129)[#](#scikitplot.logging.getLevelName "Link to this definition")
:   Return the textual or numeric representation of logging level ‘level’.

    If the level is one of the predefined levels (CRITICAL, ERROR, WARNING,
    INFO, DEBUG) then you get the corresponding string. If you have
    associated levels with names using addLevelName then the name you have
    associated with ‘level’ is returned.

    If a numeric value corresponding to one of the defined levels is passed
    in, the corresponding string representation is returned.

    If a string representation of the level is passed in, the corresponding
    numeric value is returned.

    If no matching numeric or string value is passed in, the string
    ‘Level %s’ % level is returned.