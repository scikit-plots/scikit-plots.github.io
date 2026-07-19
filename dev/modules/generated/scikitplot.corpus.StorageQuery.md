# StorageQuery[#](#storagequery "Link to this heading")

class scikitplot.corpus.StorageQuery(**input\_path=None**, **source\_type=None**, **language=None**, **section\_type=None**, **collection\_id=None**, **full\_text=None**, **limit=100**, **offset=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/cdecb99/scikitplot/corpus/_storage/_storage.py#L65)[#](#scikitplot.corpus.StorageQuery "Link to this definition")
:   Query parameters for [`StorageBase.query`](scikitplot.corpus.StorageBase.html#scikitplot.corpus.StorageBase.query "scikitplot.corpus.StorageBase.query").

    Parameters:
    :   ****input\_path****str or None, optional
        :   Filter to documents from this source file. Default: `None` (all).

        ****source\_type****str or None, optional
        :   Filter to documents with this `source_type` value. Default: `None`.

        ****language****str or None, optional
        :   Filter by ISO 639-1 language code. Default: `None`.

        ****section\_type****str or None, optional
        :   Filter by `SectionType` value string. Default: `None`.

        ****collection\_id****str or None, optional
        :   Filter by corpus collection identifier. Default: `None`.

        ****full\_text****str or None, optional
        :   Full-text search string. Supported by `SQLiteStorage` (FTS5)
            only; ignored by `InMemoryStorage` and `JSONLStorage`.
            Default: `None`.

        ****limit****int, optional
        :   Maximum number of results to return. Default: `100`.

        ****offset****int, optional
        :   Zero-based result offset for pagination. Default: `0`.

    Parameters:
    :   * ****input\_path**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****source\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****language**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****section\_type**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****collection\_id**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****full\_text**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
        * ****limit**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****offset**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    collection\_id: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.StorageQuery.collection_id "Link to this definition")

    full\_text: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.StorageQuery.full_text "Link to this definition")

    input\_path: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.StorageQuery.input_path "Link to this definition")

    language: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.StorageQuery.language "Link to this definition")

    limit: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 100[#](#scikitplot.corpus.StorageQuery.limit "Link to this definition")

    offset: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0[#](#scikitplot.corpus.StorageQuery.offset "Link to this definition")

    section\_type: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.StorageQuery.section_type "Link to this definition")

    source\_type: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.StorageQuery.source_type "Link to this definition")