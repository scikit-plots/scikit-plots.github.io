# ANNIndexArtifact[#](#annindexartifact "Link to this heading")

class scikitplot.corpus.ANNIndexArtifact(**path**, **manifest**, **generation**, **doc\_ids**, **backend**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L104)[#](#scikitplot.corpus.ANNIndexArtifact "Link to this definition")
:   A persisted vector index together with its provenance.

    Parameters:
    :   ****path****pathlib.Path
        :   Artifact directory.

        ****manifest****EmbeddingManifest
        :   Which model produced the vectors.

        ****generation****IndexGeneration
        :   Which content the index was built over.

        ****doc\_ids****tuple of str
        :   The sidecar: `doc_ids[i]` is the document at row **i**.

        ****backend****str
        :   Name of the backend that wrote the native payload.

    Parameters:
    :   * ****path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
        * ****manifest**** ([**EmbeddingManifest**](scikitplot.corpus.EmbeddingManifest.html#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest"))
        * ****generation**** ([**IndexGeneration**](scikitplot.corpus.IndexGeneration.html#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration"))
        * ****doc\_ids**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Notes

    ****Developer.**** `doc_ids` is a tuple, so an artifact cannot have its
    mapping mutated after the correspondence has been validated.

    backend: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L104)[#](#scikitplot.corpus.ANNIndexArtifact.backend "Link to this definition")

    doc\_id\_for(**ordinal**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L135)[#](#scikitplot.corpus.ANNIndexArtifact.doc_id_for "Link to this definition")
    :   Resolve a backend row offset to a stable document identity.

        Parameters:
        :   ****ordinal****int
            :   Row index as returned by `VectorIndexBackend.query`.

        Returns:
        :   str
            :   The `doc_id` at that row.

        Raises:
        :   IndexError
            :   If `ordinal` is negative or outside the sidecar. Out of range
                means the index and the sidecar disagree – a corrupt artifact
                rather than a bad query.

            TypeError
            :   If `ordinal` is not an integer. `bool` is rejected explicitly:
                it is an `int` subclass, so `True` would otherwise resolve to
                row 1.

        Parameters:
        :   ****ordinal**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

        Notes

        ****Developer.**** The domain comes from
        `scikitplot._utils._indexing.require_index`, so this boundary and
        the lexical index answer the same question the same way. Direct tuple
        indexing used to accept `-1` and resolve it to the last row, which
        turned a caller’s off-by-one into a plausible wrong document.

    doc\_ids: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L104)[#](#scikitplot.corpus.ANNIndexArtifact.doc_ids "Link to this definition")

    generation: [IndexGeneration](scikitplot.corpus.IndexGeneration.html#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L104)[#](#scikitplot.corpus.ANNIndexArtifact.generation "Link to this definition")

    classmethod generations(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L409)[#](#scikitplot.corpus.ANNIndexArtifact.generations "Link to this definition")
    :   Return the generation directories retained under `path`.

        Parameters:
        :   ****path****str or pathlib.Path
            :   Artifact root.

        Returns:
        :   list of pathlib.Path
            :   Retained generations, sorted by name. A reader holding one of these
                keeps reading it until it is pruned.

        Parameters:
        :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")]

    load\_vectors()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L535)[#](#scikitplot.corpus.ANNIndexArtifact.load_vectors "Link to this definition")
    :   Return the native payload, or `None` when none was written.

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    manifest: [EmbeddingManifest](scikitplot.corpus.EmbeddingManifest.html#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L104)[#](#scikitplot.corpus.ANNIndexArtifact.manifest "Link to this definition")

    classmethod open(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L433)[#](#scikitplot.corpus.ANNIndexArtifact.open "Link to this definition")
    :   Open the generation the artifact’s pointer currently names.

        Parameters:
        :   ****path****str or pathlib.Path
            :   Artifact root, or a generation directory, which is opened directly.

        Returns:
        :   ANNIndexArtifact

        Raises:
        :   ArtifactError
            :   If the root has no readable pointer, or the generation it names is
                absent. A directory with no pointer is refused rather than guessed
                at: picking a generation by name would make the choice silently.

        Parameters:
        :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))

        Return type:
        :   [**ANNIndexArtifact**](#scikitplot.corpus.ANNIndexArtifact "scikitplot.corpus._artifact.ANNIndexArtifact")

    classmethod open\_generation(**path**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L476)[#](#scikitplot.corpus.ANNIndexArtifact.open_generation "Link to this definition")
    :   Load an artifact, validating its internal consistency.

        Raises:
        :   ArtifactError
            :   If the artifact is missing a required file, declares an unreadable
                sidecar schema, or its sidecar disagrees with its manifest.

        Parameters:
        :   ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))

        Return type:
        :   [**ANNIndexArtifact**](#scikitplot.corpus.ANNIndexArtifact "scikitplot.corpus._artifact.ANNIndexArtifact")

        Notes

        ****Developer.**** Loading validates **before** returning, so a caller cannot
        hold an artifact whose mapping has not been checked. A sidecar written
        by a future schema is refused rather than interpreted, for the same
        reason the document schema refuses an unknown major version: a mapping
        that might mean something else is worse than no mapping.

    path: [Path](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L104)[#](#scikitplot.corpus.ANNIndexArtifact.path "Link to this definition")

    require\_compatible(**manifest=None**, **\***, **documents=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L187)[#](#scikitplot.corpus.ANNIndexArtifact.require_compatible "Link to this definition")
    :   Refuse to use this artifact with incompatible inputs.

        Parameters:
        :   ****manifest****EmbeddingManifest or None, optional
            :   Query-time embedding generation. Must match the artifact’s.

            ****documents****iterable or None, optional
            :   Documents the caller intends to serve from this index. Their
                identities must match the sidecar ****as a set****.

        Raises:
        :   IncompatibleEmbeddingsError
            :   If `manifest` describes a different embedding generation.

            ArtifactError
            :   If `documents` do not match the sidecar.

        Parameters:
        :   * ****manifest**** ([**EmbeddingManifest**](scikitplot.corpus.EmbeddingManifest.html#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest") **|** **None**)
            * ****documents**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   None

        Notes

        ****Developer.**** The document check compares **sets**, not order. Order is
        exactly what the sidecar exists to record, so requiring the caller to
        reproduce it would defeat the purpose; what must hold is that the
        artifact describes these documents and no others.

    resolve(**hits**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L176)[#](#scikitplot.corpus.ANNIndexArtifact.resolve "Link to this definition")
    :   Map `(ordinal, score)` pairs to `(doc_id, score)` pairs.

        Parameters:
        :   ****hits**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")**,** [**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")**]****]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")]]

    property row\_count: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[#](#scikitplot.corpus.ANNIndexArtifact.row_count "Link to this definition")
    :   Number of rows the sidecar describes.

    classmethod write(**path**, **\***, **documents**, **backend**, **manifest**, **vectors=None**, **generation=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/corpus/_artifact.py#L254)[#](#scikitplot.corpus.ANNIndexArtifact.write "Link to this definition")
    :   Publish an artifact atomically.

        Parameters:
        :   ****path****str or pathlib.Path
            :   Destination directory. Replaced atomically if it exists.

            ****documents****sequence
            :   Documents ****in row order****. Their order defines the sidecar, which
                is the point: it is recorded rather than assumed.

            ****backend****str
            :   Name of the backend that produced the native payload.

            ****manifest****EmbeddingManifest
            :   Embedding generation the vectors belong to.

            ****vectors****array-like or None, optional
            :   Native payload. Written as `.npy` when NumPy is available.

            ****generation****IndexGeneration or None, optional
            :   Defaults to deriving one from `documents` and `backend`.

        Returns:
        :   ANNIndexArtifact

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.15)"))
            * ****documents**** ([**Sequence**](https://docs.python.org/3/library/typing.html#typing.Sequence "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
            * ****backend**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****manifest**** ([**EmbeddingManifest**](scikitplot.corpus.EmbeddingManifest.html#scikitplot.corpus.EmbeddingManifest "scikitplot.corpus._embedding_manifest.EmbeddingManifest"))
            * ****vectors**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
            * ****generation**** ([**IndexGeneration**](scikitplot.corpus.IndexGeneration.html#scikitplot.corpus.IndexGeneration "scikitplot.corpus._generation.IndexGeneration") **|** **None**)

        Return type:
        :   [**ANNIndexArtifact**](#scikitplot.corpus.ANNIndexArtifact "scikitplot.corpus._artifact.ANNIndexArtifact")

        Notes

        ****Developer.**** Publication uses `atomic_write_path`, which R04
        verified under `ENOSPC`, `EACCES` and `KeyboardInterrupt`: the
        target is left intact and no temporary files survive. A half-written
        artifact would be worse than none, because its sidecar could describe
        rows the native index does not have.