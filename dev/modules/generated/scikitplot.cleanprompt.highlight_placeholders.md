# highlight\_placeholders[#](#highlight-placeholders "Link to this heading")

scikitplot.cleanprompt.highlight\_placeholders(**text**, **policy=RedactionPolicy(kinds=None**, **allow=()**, **tag\_style=TagStyle(prefix='['**, **suffix=']'**, **separator='-'**, **uppercase\_kind=True**, **style='placeholder')**, **overlap=<OverlapStrategy.LONGEST\_WINS: 'LONGEST\_WINS'>**, **limits=Limits(max\_input\_chars=1000000**, **max\_spans=100000**, **max\_entries=50000**, **max\_literal\_terms=10000**, **max\_literal\_length=4096)**, **case\_insensitive=False**, **min\_confidence=0.0**, **preserve\_placeholders=True)**, **color=None**, **stream=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_render.py#L99)[#](#scikitplot.cleanprompt.highlight_placeholders "Link to this definition")
:   Return a copy of `text` with placeholders wrapped in colour.

    Parameters:
    :   ****text****str
        :   Text containing placeholders.

        ****policy****RedactionPolicy, default=DEFAULT\_POLICY
        :   Supplies the placeholder grammar.

        ****color****bool, optional
        :   Explicit override; see [`should_colorize`](scikitplot.cleanprompt.should_colorize.html#scikitplot.cleanprompt.should_colorize "scikitplot.cleanprompt.should_colorize").

        ****stream****file-like, optional
        :   Destination used to detect a terminal.

    Returns:
    :   str
        :   A decorated copy, or `text` unchanged when colour is disabled.

    Parameters:
    :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy"))
        * ****color**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****stream**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)") **|** **None**)

    Return type:
    :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    Examples

    Try it in your browser!
    ```
    >>> highlight_placeholders("a [EMAIL-1] b", color=False)
    'a [EMAIL-1] b'

    ```
    Go BackOpen In Tab