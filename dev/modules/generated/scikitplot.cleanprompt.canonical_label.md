# canonical\_label[#](#canonical-label "Link to this heading")

scikitplot.cleanprompt.canonical\_label(**label**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/cleanprompt/_engines.py#L348)[#](#scikitplot.cleanprompt.canonical_label "Link to this definition")
:   Map an engine’s entity label onto the canonical vocabulary.

    Parameters:
    :   ****label****str
        :   The label an engine reported, for example `"ORGANIZATION"`.

    Returns:
    :   str
        :   The canonical label, or `"MISC"` when the engine’s label has no
            mapping.

    Parameters:
    :   ****label**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Notes

    ****Developer notes.**** Unknown labels become `MISC` rather than being
    dropped. A model that found something and a mapping that has not caught up
    are two different problems, and discarding the entity would turn a
    vocabulary gap into a privacy hole.

    Examples

    Try it in your browser!
    ```
    >>> canonical_label("ORGANIZATION")
    'ORG'
    >>> canonical_label("ORG")
    'ORG'
    >>> canonical_label("SOMETHING_NEW")
    'MISC'

    ```
    Go BackOpen In Tab