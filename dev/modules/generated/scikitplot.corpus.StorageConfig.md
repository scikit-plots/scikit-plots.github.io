# StorageConfig[#](#storageconfig "Link to this heading")

class scikitplot.corpus.StorageConfig(**backend=StorageBackend.MEMORY**, **collection\_name='corpus'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L561)[#](#scikitplot.corpus.StorageConfig "Link to this definition")
:   Abstract base configuration for storage backend implementations.

    Parameters:
    :   ****backend****StorageBackend
        :   Target storage system.

        ****collection\_name****str
        :   Name of the collection / table / index to write to.

    Parameters:
    :   * ****backend**** ([**StorageBackend**](scikitplot.corpus.StorageBackend.html#scikitplot.corpus.StorageBackend "scikitplot.corpus._types.StorageBackend"))
        * ****collection\_name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    backend: [StorageBackend](scikitplot.corpus.StorageBackend.html#scikitplot.corpus.StorageBackend "scikitplot.corpus._types.StorageBackend") = 'memory'[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L)[#](#scikitplot.corpus.StorageConfig.backend "Link to this definition")

    collection\_name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'corpus'[#](#scikitplot.corpus.StorageConfig.collection_name "Link to this definition")