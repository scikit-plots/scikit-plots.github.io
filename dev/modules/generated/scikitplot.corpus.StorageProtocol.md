# StorageProtocol[#](#storageprotocol "Link to this heading")

class scikitplot.corpus.StorageProtocol(**\*args**, **\*\*kwargs**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L893)[#](#scikitplot.corpus.StorageProtocol "Link to this definition")
:   Structural interface every storage backend must satisfy.

    delete(**record\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L932)[#](#scikitplot.corpus.StorageProtocol.delete "Link to this definition")
    :   Delete a record by its identifier.

        Parameters:
        :   ****record\_id****str
            :   Storage record ID.

        Returns:
        :   bool
            :   `True` if the record existed and was deleted.

        Parameters:
        :   ****record\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    get(**record\_id**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L917)[#](#scikitplot.corpus.StorageProtocol.get "Link to this definition")
    :   Retrieve a record by its identifier.

        Parameters:
        :   ****record\_id****str
            :   Storage record ID.

        Returns:
        :   CorpusRecord or None
            :   `None` if no record with this ID exists.

        Parameters:
        :   ****record\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [**CorpusRecord**](scikitplot.corpus.CorpusRecord.html#scikitplot.corpus.CorpusRecord "scikitplot.corpus._types.CorpusRecord") | None

    save(**record**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L897)[#](#scikitplot.corpus.StorageProtocol.save "Link to this definition")
    :   Persist a single [`CorpusRecord`](scikitplot.corpus.CorpusRecord.html#scikitplot.corpus.CorpusRecord "scikitplot.corpus.CorpusRecord").

        Parameters:
        :   ****record****CorpusRecord
            :   Record to persist.

        Parameters:
        :   ****record**** ([**CorpusRecord**](scikitplot.corpus.CorpusRecord.html#scikitplot.corpus.CorpusRecord "scikitplot.corpus._types.CorpusRecord"))

        Return type:
        :   None

    save\_batch(**records**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L907)[#](#scikitplot.corpus.StorageProtocol.save_batch "Link to this definition")
    :   Persist a batch of [`CorpusRecord`](scikitplot.corpus.CorpusRecord.html#scikitplot.corpus.CorpusRecord "scikitplot.corpus.CorpusRecord") objects.

        Parameters:
        :   ****records****list[CorpusRecord]
            :   Records to persist.

        Parameters:
        :   ****records**** ([**list**](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")**[**[**CorpusRecord**](scikitplot.corpus.CorpusRecord.html#scikitplot.corpus.CorpusRecord "scikitplot.corpus._types.CorpusRecord")**]**)

        Return type:
        :   None

    search(**query**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/d6b03769/scikitplot/corpus/_types.py#L947)[#](#scikitplot.corpus.StorageProtocol.search "Link to this definition")
    :   Execute a retrieval query against this backend.

        Parameters:
        :   ****query****RetrievalQuery
            :   Query specification.

        Returns:
        :   list[ChunkHit]
            :   Ranked results.

        Parameters:
        :   ****query**** ([**RetrievalQuery**](scikitplot.corpus.RetrievalQuery.html#scikitplot.corpus.RetrievalQuery "scikitplot.corpus._types.RetrievalQuery"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**ChunkHit**](scikitplot.corpus.ChunkHit.html#scikitplot.corpus.ChunkHit "scikitplot.corpus._types.ChunkHit")]