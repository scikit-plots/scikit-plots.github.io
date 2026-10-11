# scikitplot.levenshtein.Match[#](#scikitplot-levenshtein-match "Link to this heading")

class scikitplot.levenshtein.Match(**choice**, **distance**, **similarity**, **index**, **backend='python'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/levenshtein/_core.py#L57)[#](#scikitplot.levenshtein.Match "Link to this definition")
:   One ranked fuzzy-match result with actual backend provenance.

    Parameters:
    :   * ****choice**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****distance**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****similarity**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    \_\_init\_\_(**choice**, **distance**, **similarity**, **index**, **backend='python'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d2447a31/scikitplot/../../../../../../../repo/docs/<string>#L)[#](#scikitplot.levenshtein.Match.__init__ "Link to this definition")
    :   Parameters:
        :   * ****choice**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****distance**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****similarity**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
            * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
            * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   None

    Methods

    |  |  |
    | --- | --- |
    | [`__init__`](#scikitplot.levenshtein.Match.__init__ "scikitplot.levenshtein.Match.__init__")(choice, distance, similarity, index) |  |
    | `to_dict`() | Return scalar match metadata; `choice` is preserved as-is. |

    Attributes

    |  |  |
    | --- | --- |
    | `backend` |  |
    | `choice` |  |
    | `distance` |  |
    | `similarity` |  |
    | `index` |  |