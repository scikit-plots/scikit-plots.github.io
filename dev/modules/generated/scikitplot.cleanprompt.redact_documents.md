# redact\_documents[#](#redact-documents "Link to this heading")

scikitplot.cleanprompt.redact\_documents(**documents**, **cleaner**, **format='text'**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/fbd8e1af/scikitplot/cleanprompt/_corpus.py#L262)[#](#scikitplot.cleanprompt.redact_documents "Link to this definition")
:   Return corpus documents with every text field redacted by one cleaner.

    Parameters:
    :   ****documents****iterable of CorpusDocument
        :   Documents from any corpus reader or pipeline.

        ****cleaner****Cleaner
        :   The cleaner whose vault collects what is removed; decode replies with
            it.

        ****format****str, default=’text’
        :   The format each text field is read as. It must be selected by the
            cleaner’s plan.

    Returns:
    :   list of CorpusDocument
        :   New documents, in the same order. The inputs are unchanged. Each
            `doc_id` stays in its own scheme: the content-addressed SHA-256 of
            the redacted text, or, for a document named by
            `doc_id_scheme="uuid7"`, the same UUIDv7 when the text is unchanged
            and a newly minted one when it is not. Parent links within the batch
            follow.

    Raises:
    :   CleanPromptError
        :   If any field cannot be redacted, or a `parent_doc_id` names two
            documents of the batch that were renamed differently. Nothing is
            returned partly redacted.

    Parameters:
    :   * ****documents**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)
        * ****cleaner**** ([**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)"))
        * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.corpus._schema import CorpusDocument
    >>> from scikitplot.cleanprompt._plan import FluentCleanPrompt
    >>> doc = CorpusDocument.create(
    ...     "n.txt", 0, "Mail ann@example.com"
    ... )
    >>> redact_documents([doc], FluentCleanPrompt().materialize())[
    ...     0
    ... ].text
    'Mail [EMAIL-1]'

    ```
    Go BackOpen In Tab

## Gallery examples[#](#gallery-examples "Link to this heading")

![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](../../auto_examples/cleanprompt/plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders