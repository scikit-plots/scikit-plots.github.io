# IndexGeneration[#](#indexgeneration "Link to this heading")

class scikitplot.corpus.IndexGeneration(**schema\_version**, **embedding\_manifest\_id**, **document\_digest**, **backend**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L115)[#](#scikitplot.corpus.IndexGeneration "Link to this definition")
:   Identity of one built index.

    Parameters:
    :   ****schema\_version****str
        :   Document serialisation generation.

        ****embedding\_manifest\_id****str or None
        :   Fingerprint of the embedding generation, or `None` for an index with
            no vectors.

        ****document\_digest****str
        :   Digest of the published rows: each row’s identity and content, in the
            order written. Not a set digest – order and content are what the
            sidecar records, so both belong to the identity.

        ****backend****str or None
        :   Name of the index backend, or `None` when no dense index was built.

    Parameters:
    :   * ****schema\_version**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****embedding\_manifest\_id**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****document\_digest**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

    Examples

    Try it in your browser!
    ```
    >>> a = IndexGeneration("2.0", None, "2-abc", "bruteforce")
    >>> b = IndexGeneration("2.0", None, "2-abc", "bruteforce")
    >>> a == b and a.fingerprint == b.fingerprint
    True

    ```
    Go BackOpen In Tab

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L115)[#](#scikitplot.corpus.IndexGeneration.backend "Link to this definition")

    property document\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.IndexGeneration.document_count "Link to this definition")
    :   Number of documents indexed, read from the digest prefix.

    document\_digest: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L115)[#](#scikitplot.corpus.IndexGeneration.document_digest "Link to this definition")

    embedding\_manifest\_id: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L115)[#](#scikitplot.corpus.IndexGeneration.embedding_manifest_id "Link to this definition")

    property fingerprint: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[#](#scikitplot.corpus.IndexGeneration.fingerprint "Link to this definition")
    :   Stable content-derived identifier, 16 hex characters.

    classmethod from\_dict(**data**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L174)[#](#scikitplot.corpus.IndexGeneration.from_dict "Link to this definition")
    :   Rebuild from [`to_dict`](#scikitplot.corpus.IndexGeneration.to_dict "scikitplot.corpus.IndexGeneration.to_dict") output.

        Raises:
        :   ValueError
            :   If a declared fingerprint disagrees with the fields supplied, which
                means the payload was altered.

        Parameters:
        :   ****data**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**IndexGeneration**](#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration")

    matches(**other**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L164)[#](#scikitplot.corpus.IndexGeneration.matches "Link to this definition")
    :   Whether `other` describes the same index.

        Parameters:
        :   ****other**** ([**IndexGeneration**](#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration") **|** **None**)

        Return type:
        :   [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")

    schema\_version: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L115)[#](#scikitplot.corpus.IndexGeneration.schema_version "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_generation.py#L168)[#](#scikitplot.corpus.IndexGeneration.to_dict "Link to this definition")
    :   Return a JSON-compatible mapping including the fingerprint.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]