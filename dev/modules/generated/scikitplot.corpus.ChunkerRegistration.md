# ChunkerRegistration[#](#chunkerregistration "Link to this heading")

class scikitplot.corpus.ChunkerRegistration(**strategy**, **chunker\_class**, **default\_config**, **description=''**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_types.py#L971)[#](#scikitplot.corpus.ChunkerRegistration "Link to this definition")
:   An entry in the `ChunkerRegistry`.

    Parameters:
    :   ****strategy****ChunkingStrategy
        :   The strategy key this registration maps to.

        ****chunker\_class****type
        :   The concrete chunker class (must satisfy [`ChunkerProtocol`](scikitplot.corpus.ChunkerProtocol.html#scikitplot.corpus.ChunkerProtocol "scikitplot.corpus.ChunkerProtocol")).

        ****default\_config****ChunkerConfig
        :   Default configuration instance used when none is supplied.

        ****description****str
        :   Human-readable description of this chunker.

    Parameters:
    :   * ****strategy**** ([**ChunkingStrategy**](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus.ChunkingStrategy"))
        * ****chunker\_class**** ([**type**](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)"))
        * ****default\_config**** ([**ChunkerConfig**](scikitplot.corpus.ChunkerConfig.html#scikitplot.corpus.ChunkerConfig "scikitplot.corpus.ChunkerConfig"))
        * ****description**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    chunker\_class: [type](https://docs.python.org/3/builtins/functions.html#type "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_types.py#L971)[#](#scikitplot.corpus.ChunkerRegistration.chunker_class "Link to this definition")

    default\_config: [ChunkerConfig](scikitplot.corpus.ChunkerConfig.html#scikitplot.corpus.ChunkerConfig "scikitplot.corpus.ChunkerConfig")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_types.py#L971)[#](#scikitplot.corpus.ChunkerRegistration.default_config "Link to this definition")

    description: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = ''[#](#scikitplot.corpus.ChunkerRegistration.description "Link to this definition")

    strategy: [ChunkingStrategy](scikitplot.corpus.ChunkingStrategy.html#scikitplot.corpus.ChunkingStrategy "scikitplot.corpus.ChunkingStrategy")[[source]](https://github.com/scikit-plots/scikit-plots/blob/493b8af5/scikitplot/corpus/_types.py#L971)[#](#scikitplot.corpus.ChunkerRegistration.strategy "Link to this definition")