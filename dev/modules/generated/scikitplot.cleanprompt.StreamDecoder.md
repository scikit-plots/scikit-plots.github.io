# StreamDecoder[#](#streamdecoder "Link to this heading")

class scikitplot.cleanprompt.StreamDecoder(**guard**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L124)[#](#scikitplot.cleanprompt.StreamDecoder "Link to this definition")
:   Decode a model’s reply as it streams in, never splitting a label.

    Parameters:
    :   ****guard****Guard
        :   Supplies the vault and the placeholder grammar.

    Parameters:
    :   ****guard**** ([**Guard**](scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard"))

    Notes

    ****User notes.**** Call [`feed`](#scikitplot.cleanprompt.StreamDecoder.feed "scikitplot.cleanprompt.StreamDecoder.feed") with each chunk and print what it
    returns; call [`flush`](#scikitplot.cleanprompt.StreamDecoder.flush "scikitplot.cleanprompt.StreamDecoder.flush") once at the end. The text you print is exactly
    what decoding the whole reply at once would give.

    ****Developer notes.**** Two things can be cut by a chunk boundary: a bracket
    label (`[EMA` | `IL-1]`) and a literal stand-in (`Marion` |
    `Holt`, or `id_1` | `0` where `id_10` is also a stand-in). The
    decoder emits everything before the earliest point where either could
    still be in progress, and keeps the rest:

    * from the last unclosed opening delimiter within `MAX_LABEL`
      characters, including a backslash escaping it;
    * the longest tail of the buffer that is a proper prefix of a literal
      stand-in, or a whole stand-in that is also a prefix of a longer one.

    Everything emitted is decoded with the same function as a whole reply.

    ****One reply, one audit event.**** A reply decoded whole records one
    `decoded` event. Streamed, it arrives in as many chunks as the model
    emits tokens, and recording each chunk turned one reply into thousands of
    events that said nothing a single one does not (`CP-090`). The counts
    are gathered as chunks arrive and recorded once, by [`flush`](#scikitplot.cleanprompt.StreamDecoder.flush "scikitplot.cleanprompt.StreamDecoder.flush"), with
    the number of chunks; they equal the counts of the same reply decoded
    whole. A stream that is abandoned without [`flush`](#scikitplot.cleanprompt.StreamDecoder.flush "scikitplot.cleanprompt.StreamDecoder.flush")
    records no event; [`flush`](#scikitplot.cleanprompt.StreamDecoder.flush "scikitplot.cleanprompt.StreamDecoder.flush") is what ends a reply.

    feed(**chunk**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L270)[#](#scikitplot.cleanprompt.StreamDecoder.feed "Link to this definition")
    :   Add a chunk and return the decoded text that is now certain.

        Parameters:
        :   ****chunk****str
            :   The next piece of the reply.

        Returns:
        :   str
            :   Decoded text; possibly empty while a label is incomplete.

        Raises:
        :   TypeError
            :   If `chunk` is not a string.

        Parameters:
        :   ****chunk**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    flush()[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_guard.py#L311)[#](#scikitplot.cleanprompt.StreamDecoder.flush "Link to this definition")
    :   Return the decoded remainder, record the reply, and reset.

        Returns:
        :   str
            :   Whatever was held back, decoded.

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")