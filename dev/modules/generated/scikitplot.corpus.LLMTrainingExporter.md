# LLMTrainingExporter[#](#llmtrainingexporter "Link to this heading")

class scikitplot.corpus.LLMTrainingExporter(**engine=None**, **default\_system\_prompt='You are a helpful assistant.'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L1432)[#](#scikitplot.corpus.LLMTrainingExporter "Link to this definition")
:   Export a corpus with embeddings to LLM training formats.

    Orchestrates the full journey from
    `list[CorpusDocument]` → training-ready files / datasets.

    Parameters:
    :   ****engine****MultimodalEmbeddingEngine or EmbeddingEngine or None
        :   Embedding engine. When `None`, existing `doc.embedding`
            values are used as-is; raises `ValueError` if a document
            lacks an embedding where one is required.

        ****default\_system\_prompt****str, optional
        :   System prompt prepended to all OpenAI fine-tuning conversations.
            Default: `"You are a helpful assistant."`.

    Parameters:
    :   * ****engine**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") **|** **None**)
        * ****default\_system\_prompt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))

    Examples

    Try it in your browser!

    OpenAI fine-tuning (chat format):

    ```
    >>> exporter = LLMTrainingExporter(engine)
    >>> exporter.to_openai_finetuning_jsonl(
    ...     docs,
    ...     output_path=Path("train.jsonl"),
    ...     system_prompt="Answer medical questions accurately.",
    ...     response_fn=lambda doc: doc.metadata.get("answer", ""),
    ... )

    ```

    HuggingFace SFT dataset:

    ```
    >>> ds = exporter.to_huggingface_training_dataset(
    ...     docs,
    ...     tokenizer_name="gpt2",
    ...     task="clm",
    ... )

    ```

    Pure embedding matrix for vector DB or contrastive training:

    ```
    >>> matrix, meta_df = exporter.to_embedding_matrix(docs)
    >>> matrix.shape  # (N, D)
    (1024, 512)

    ```
    Go BackOpen In Tab

    default\_system\_prompt: [str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") = 'You are a helpful assistant.'[#](#scikitplot.corpus.LLMTrainingExporter.default_system_prompt "Link to this definition")

    engine: [Any](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)") | [None](https://docs.python.org/3/library/constants.html#None "(in Python v3.14)") = None[#](#scikitplot.corpus.LLMTrainingExporter.engine "Link to this definition")

    log\_to\_mlflow(**documents**, **\***, **run\_name=None**, **artifact\_dir='corpus\_embeddings'**, **log\_params=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L1955)[#](#scikitplot.corpus.LLMTrainingExporter.log_to_mlflow "Link to this definition")
    :   Log embedding matrix and metadata as MLflow artifacts.

        Parameters:
        :   ****documents****CorpusDocument | list[CorpusDocument] | None
            :   Documents with embeddings. `None` / empty input logs zero embeddings.
                Single doc is wrapped automatically. `None` list entries filtered.

            ****run\_name****str or None, optional
            :   MLflow run name. Uses the active run when `None`.

            ****artifact\_dir****str, optional
            :   Directory inside the MLflow artifact store.
                Default: `"corpus_embeddings"`.

            ****log\_params****bool, optional
            :   Log engine config as MLflow params. Default: `True`.

        Raises:
        :   ImportError
            :   If `mlflow` is not installed.

        Parameters:
        :   * ****documents**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]** **|** **None**)
            * ****run\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****artifact\_dir**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****log\_params**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   None

    to\_embedding\_matrix(**documents**, **\***, **include\_metadata=True**, **output\_path=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L1833)[#](#scikitplot.corpus.LLMTrainingExporter.to_embedding_matrix "Link to this definition")
    :   Export embeddings as a `(N, D)` NumPy matrix with metadata.

        Parameters:
        :   ****documents****CorpusDocument | list[CorpusDocument] | None
            :   Documents. Those without embeddings are embedded via the
                engine when one is set, else raise `ValueError`.
                `None` / empty input returns an empty `(0, 0)` matrix.
                Single doc is wrapped automatically. `None` list entries filtered.

            ****include\_metadata****bool, optional
            :   Build a metadata DataFrame (or dict of lists).
                Default: `True`.

            ****output\_path****pathlib.Path or str or None, optional
            :   When set, saves `{output_path}.npy` (matrix) and
                `{output_path}.csv` (metadata). Default: `None`.

        Returns:
        :   ****matrix****ndarray shape (N, D) float32
            :   `(0, 0)` when no documents remain after normalization.

            ****metadata****pandas.DataFrame or dict[str, list]
            :   Metadata table with `doc_id`, `input_path`,
                `source_type`, `modality`, `content_hash`,
                `chunk_index` columns. Returns plain dict when
                pandas is not installed.

        Raises:
        :   ValueError
            :   If any document lacks an embedding and `engine=None`.

        Parameters:
        :   * ****documents**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]** **|** **None**)
            * ****include\_metadata**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)

        Return type:
        :   [tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**ndarray**](https://numpy.org/devdocs/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v2.6.dev0)")[[tuple](https://docs.python.org/3/library/stdtypes.html#tuple "(in Python v3.14)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)"), …], [**dtype**](https://numpy.org/devdocs/reference/generated/numpy.dtype.html#numpy.dtype "(in NumPy v2.6.dev0)")[**\_ScalarT**]], [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")]

    to\_huggingface\_training\_dataset(**documents**, **\***, **tokenizer\_name='gpt2'**, **max\_length=512**, **task='clm'**, **text\_field='text'**, **label\_field=None**, **include\_embeddings=False**, **stride=0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L1666)[#](#scikitplot.corpus.LLMTrainingExporter.to_huggingface_training_dataset "Link to this definition")
    :   Build a HuggingFace `datasets.Dataset` for LLM training.

        Parameters:
        :   ****documents****CorpusDocument | list[CorpusDocument] | None
            :   Documents to tokenize. `None` / empty list returns an empty dataset.
                Single doc is wrapped automatically. `None` list entries filtered.

            ****tokenizer\_name****str, optional
            :   HuggingFace tokenizer name or local path.
                Default: `"gpt2"`.

            ****max\_length****int, optional
            :   Maximum token sequence length. Sequences are truncated
                (and optionally strided). Default: `512`.

            ****task****{“clm”, “mlm”, “sft”}, optional
            :   Training objective.

                `"clm"` — causal language model: `labels = input_ids`.
                `"mlm"` — masked language model: `labels = input_ids`
                (dynamic token masking is delegated to
                `DataCollatorForLanguageModeling` at training time).
                `"sft"` — supervised fine-tuning: requires
                `label_field` to be set.

                Default: `"clm"`.

            ****text\_field****str, optional
            :   Document attribute to tokenize. Default: `"text"`.

            ****label\_field****str or None, optional
            :   Attribute to use as classification label (for `"sft"`).
                Default: `None`.

            ****include\_embeddings****bool, optional
            :   Add `"embedding"` column. Default: `False`.

            ****stride****int, optional
            :   Overlap between windows when splitting long texts.
                Default: `0` (no stride).

        Returns:
        :   datasets.Dataset
            :   Tokenized training dataset. Falls back to a plain dict of
                lists when `datasets` is not installed.

        Raises:
        :   ImportError
            :   If `transformers` is not installed.

        Parameters:
        :   * ****documents**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]** **|** **None**)
            * ****tokenizer\_name**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****max\_length**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
            * ****task**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****text\_field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****label\_field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****include\_embeddings**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****stride**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

        Return type:
        :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")

    to\_openai\_finetuning\_jsonl(**documents**, **output\_path**, **\***, **system\_prompt=None**, **response\_fn=None**, **user\_field='text'**, **include\_embeddings=False**, **skip\_empty=True**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/e137512/scikitplot/corpus/_embeddings/_multimodal_embedding.py#L1537)[#](#scikitplot.corpus.LLMTrainingExporter.to_openai_finetuning_jsonl "Link to this definition")
    :   Export documents as OpenAI chat fine-tuning JSONL.

        Each line is a valid fine-tuning example:

        ```
        {
          "messages": [
            {"role": "system", "content": "<system_prompt>"},
            {"role": "user",   "content": "<doc.text>"},
            {"role": "assistant", "content": "<response_fn(doc)>"}
          ],
          "embedding": [...]    // optional, only when include_embeddings=True
        }

        ```

        Parameters:
        :   ****documents****CorpusDocument | list[CorpusDocument] | None
            :   Documents to export. `None` and empty list write an empty file.
                Single doc is wrapped automatically. `None` list entries filtered.

            ****output\_path****pathlib.Path or str
            :   Destination `.jsonl` file.

            ****system\_prompt****str or None, optional
            :   System message. Defaults to `self.default_system_prompt`.

            ****response\_fn****callable or None, optional
            :   `fn(doc) → str` producing the assistant response for each
                document. When `None`, uses `doc.metadata.get("answer", "")`
                — suitable when answers are stored in metadata.

            ****user\_field****str, optional
            :   Document attribute to use as the user message.
                Default: `"text"`.

            ****include\_embeddings****bool, optional
            :   Append `"embedding"` key to each record. Requires that
                embeddings are present (call `_ensure_embedded` first
                or set an `engine`). Default: `False`.

            ****skip\_empty****bool, optional
            :   Skip documents with empty user content. Default: `True`.

        Returns:
        :   pathlib.Path
            :   Path to the written `.jsonl` file.

        Parameters:
        :   * ****documents**** ([**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument") **|** [**list**](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.14)")**[**[**CorpusDocument**](scikitplot.corpus.CorpusDocument.html#scikitplot.corpus.CorpusDocument "scikitplot.corpus._schema.CorpusDocument")**]** **|** **None**)
            * ****output\_path**** ([**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)") **|** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****system\_prompt**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)") **|** **None**)
            * ****response\_fn**** ([**Callable**](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.14)")**[****[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.14)")**]****,** [**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)")**]** **|** **None**)
            * ****user\_field**** ([**str**](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.14)"))
            * ****include\_embeddings**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))
            * ****skip\_empty**** ([**bool**](https://docs.python.org/3/library/functions.html#bool "(in Python v3.14)"))

        Return type:
        :   [**Path**](https://docs.python.org/3/library/pathlib.html#pathlib.Path "(in Python v3.14)")

        Notes

        OpenAI fine-tuning requires at minimum a `"user"` message and
        an `"assistant"` message. Provide `response_fn` to generate
        meaningful assistant turns; otherwise the export produces single-turn
        user-only examples (system + user, no assistant reply) which are
        valid for supervised fine-tuning when you add assistant responses
        separately.