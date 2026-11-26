# split\_line[#](#split-line "Link to this heading")

scikitplot.\_ipymagic.split\_line(**line**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/_ipymagic/_bridge.py#L81)[#](#scikitplot._ipymagic.split_line "Link to this definition")
:   Split a magic’s line into arguments the way a POSIX shell would.

    Parameters:
    :   ****line****str
        :   Text after the magic’s name (IPython has already expanded
            `{var}` and `$var`).

    Returns:
    :   list of str
        :   Arguments.

    Raises:
    :   MagicUsageError
        :   For an unterminated quote.

    Parameters:
    :   ****line**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    Notes

    Quote a Windows path (`"C:\Users\me\env.toml"`): outside quotes a
    backslash escapes the next character, as in any POSIX shell.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot._ipymagic import split_line
    >>> split_line('env plan -n "my env" --package six')
    ['env', 'plan', '-n', 'my env', '--package', 'six']

    ```
    Go BackOpen In Tab