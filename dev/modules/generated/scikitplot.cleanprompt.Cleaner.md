# Cleaner[#](#cleaner "Link to this heading")

class scikitplot.cleanprompt.Cleaner(**plan=None**, **limits=None**, **prior=()**, **chunk\_chars=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L437)[#](#scikitplot.cleanprompt.Cleaner "Link to this definition")
:   Apply one validated plan to text, files, folders and archives.

    Parameters:
    :   ****plan****CleanPlan, optional
        :   Defaults to `CleanPlan()`: packs chosen by each file’s format, every
            format, placeholders.

        ****limits****OfficeLimits, optional
        :   Size bounds for a file read from disk (`max_part_bytes`), and for
            the members and total size of an Office file or archive.

        ****prior****iterable of Entry, optional
        :   Entries issued earlier — a vault being appended to. A value among them
            keeps its stand-in, and new stand-ins never repeat one of theirs.

        ****chunk\_chars****int, optional
        :   Largest piece of a CSV, TSV or JSON Lines file encoded at once.
            Defaults to the policy’s `max_input_chars`. Larger record files are
            encoded piece by piece, cut between records, with the same result as
            one pass; any other format above the limit is refused.

    Raises:
    :   CleanPromptError
        :   If the plan does not validate, or an entity engine it asks for is not
            installed.

    Parameters:
    :   * ****plan**** ([**CleanPlan**](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt.CleanPlan") **|** **None**)
        * ****limits**** (**OfficeLimits** **|** **None**)
        * ****prior**** (**Iterable****[****Entry****]**)
        * ****chunk\_chars**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)

    Notes

    ****User notes.**** Use it as a context manager, or call [`clear`](#scikitplot.cleanprompt.Cleaner.clear "scikitplot.cleanprompt.Cleaner.clear") when
    done: the cleaner holds every value it removed until then. Its
    representation shows counts, never values.

    ****Developer notes.**** Not thread-safe: the shared vault is the point of a
    cleaner, and two threads appending to it would number values in an order
    that depends on scheduling. Use one cleaner per thread when determinism
    across runs matters, which it does for anything tested.

    Examples

    Try it in your browser!
    ```
    >>> from scikitplot.cleanprompt._plan import FluentCleanPrompt
    >>> cleaner = FluentCleanPrompt().packs("patient").materialize()
    >>> out = cleaner.encode_text('{"mrn": 20417, "email": "ann@example.com"}', "json")
    >>> out.text
    '{"mrn": -9900000001, "email": "[EMAIL-1]"}'
    >>> cleaner.decode(out.text)
    '{"mrn": 20417, "email": "ann@example.com"}'

    ```
    Go BackOpen In Tab

    catalog[#](#scikitplot.cleanprompt.Cleaner.catalog "Link to this definition")
    :   !! processed by numpydoc !!

    clear()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L644)[#](#scikitplot.cleanprompt.Cleaner.clear "Link to this definition")
    :   Drop every value this cleaner holds. It cannot be used afterwards.

        Return type:
        :   None

    decode(**text**, **strict=False**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1754)[#](#scikitplot.cleanprompt.Cleaner.decode "Link to this definition")
    :   Put values back into `text`.

        Parameters:
        :   ****text****str
            :   A model’s reply, or an encoded file edited by one.

            ****strict****bool, default=False
            :   Raise on a placeholder this cleaner never issued.

        Returns:
        :   str
            :   The restored text.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    decode\_archive(**source**, **target**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1797)[#](#scikitplot.cleanprompt.Cleaner.decode_archive "Link to this definition")
    :   Restore every member of an encoded zip into a new zip.

        Parameters:
        :   ****source****path-like
            :   An archive written by [`encode_archive`](#scikitplot.cleanprompt.Cleaner.encode_archive "scikitplot.cleanprompt.Cleaner.encode_archive").

            ****target****path-like
            :   The zip to write.

        Returns:
        :   list of Item
            :   One per member.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))
            * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Item**](scikitplot.cleanprompt.Item.html#scikitplot.cleanprompt.Item "scikitplot.cleanprompt._runtime.Item")]

        > **See also**
        > `restore_archive`
        :   The same, given a vault instead of a cleaner.

    decode\_report(**text**, **strict=False**, **kinds=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1621)[#](#scikitplot.cleanprompt.Cleaner.decode_report "Link to this definition")
    :   Put values back into `text` and say what was and was not restored.

        Parameters:
        :   ****text****str
            :   A model’s reply, or an encoded file edited by one.

            ****strict****bool, default=False
            :   Raise on a placeholder this cleaner never issued.

            ****kinds****iterable of str, optional
            :   Restore only values of these kinds; placeholders of other kinds
                are left as they are. `None` restores every kind.

        Returns:
        :   RestorationResult
            :   With `unknown` and `repaired` filled in.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****strict**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
            * ****kinds**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]** **|** **None**)

        Return type:
        :   **RestorationResult**

    decode\_tree(**source**, **target**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1772)[#](#scikitplot.cleanprompt.Cleaner.decode_tree "Link to this definition")
    :   Restore every UTF-8 file under a folder into a mirror folder.

        Parameters:
        :   ****source****path-like
            :   Encoded files, possibly edited by a model.

            ****target****path-like
            :   Where restored files are written; must not be inside `source`.

        Yields:
        :   Item
            :   One per file, in sorted path order.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))
            * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.15)")[[**Item**](scikitplot.cleanprompt.Item.html#scikitplot.cleanprompt.Item "scikitplot.cleanprompt._runtime.Item")]

        > **See also**
        > `restore_tree`
        :   The same, given a vault instead of a cleaner.

    encode\_archive(**source**, **target**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1505)[#](#scikitplot.cleanprompt.Cleaner.encode_archive "Link to this definition")
    :   Encode every readable member of a zip into a new zip.

        Parameters:
        :   ****source****path-like
            :   The zip to read.

            ****target****path-like
            :   The zip to write. Must differ from `source`.

        Returns:
        :   list of Item
            :   One per member, in name order.

        Raises:
        :   CleanPromptError
            :   If the archive is unreadable, has too many members, or
                decompresses past the total size limit.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))
            * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Item**](scikitplot.cleanprompt.Item.html#scikitplot.cleanprompt.Item "scikitplot.cleanprompt._runtime.Item")]

        Notes

        ****Developer notes.**** The output is deterministic — members sorted,
        timestamps fixed — so encoding the same archive twice with fresh
        cleaners gives the same bytes. It is written to a temporary name and
        moved into place, so a failure never leaves half an archive.

    encode\_bytes(**data**, **name**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1203)[#](#scikitplot.cleanprompt.Cleaner.encode_bytes "Link to this definition")
    :   Encode a file’s bytes, choosing the format by name unless given.

        Parameters:
        :   ****data****bytes
            :   The file’s content.

            ****name****str
            :   The file name; its extension selects the format.

            ****format****str, optional
            :   Force a format by name or extension.

        Returns:
        :   Encoded
            :   The safe text and a report.

        Raises:
        :   CleanPromptError
            :   If no selected format reads it, it is not UTF-8, it does not parse
                as its format, or it is a PDF or zip (which need a file).

        Parameters:
        :   * ****data**** ([**bytes**](https://docs.python.org/3/builtins/stdtypes.html#bytes "(in Python v3.15)"))
            * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Encoded**](scikitplot.cleanprompt.Encoded.html#scikitplot.cleanprompt.Encoded "scikitplot.cleanprompt._runtime.Encoded")

    encode\_file(**path**, **format=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1264)[#](#scikitplot.cleanprompt.Cleaner.encode_file "Link to this definition")
    :   Encode one file from disk.

        Parameters:
        :   ****path****path-like
            :   The file.

            ****format****str, optional
            :   Force a format by name or extension.

        Returns:
        :   Encoded
            :   The safe text and a report. Nothing is written.

        Raises:
        :   CleanPromptError
            :   If the file is missing, too large, or cannot be read safely.

        Parameters:
        :   * ****path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Encoded**](scikitplot.cleanprompt.Encoded.html#scikitplot.cleanprompt.Encoded "scikitplot.cleanprompt._runtime.Encoded")

    encode\_files(**paths**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1306)[#](#scikitplot.cleanprompt.Cleaner.encode_files "Link to this definition")
    :   Encode several files into the one shared vault, in the order given.

        Parameters:
        :   ****paths****iterable of path-like
            :   The files.

        Returns:
        :   list of Encoded
            :   One per path.

        Raises:
        :   CleanPromptError
            :   On the first file that cannot be encoded.

        Parameters:
        :   ****paths**** ([**Iterable**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)")**]**)

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Encoded**](scikitplot.cleanprompt.Encoded.html#scikitplot.cleanprompt.Encoded "scikitplot.cleanprompt._runtime.Encoded")]

    encode\_text(**text**, **format='text'**, **name=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L796)[#](#scikitplot.cleanprompt.Cleaner.encode_text "Link to this definition")
    :   Encode a string read as one format.

        Parameters:
        :   ****text****str
            :   The content.

            ****format****str, default=’text’
            :   A format name or extension. Formats whose text must first be
                extracted from bytes (Office, PDF, zip) are refused here.

            ****name****str, optional
            :   A name for reports; defaults to `<text>`.

        Returns:
        :   Encoded
            :   The safe text and a report.

        Raises:
        :   TypeError
            :   If `text` is not a string.

            CleanPromptError
            :   If the format is not selected, needs bytes, or the text does not
                parse as it.

        Parameters:
        :   * ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
            * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)

        Return type:
        :   [**Encoded**](scikitplot.cleanprompt.Encoded.html#scikitplot.cleanprompt.Encoded "scikitplot.cleanprompt._runtime.Encoded")

    encode\_tree(**source**, **target**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1331)[#](#scikitplot.cleanprompt.Cleaner.encode_tree "Link to this definition")
    :   Encode every readable file under a folder into a mirror folder.

        Parameters:
        :   ****source****path-like
            :   The folder to read.

            ****target****path-like
            :   Where encoded files are written, mirroring `source`. Created if
                missing; must not be inside `source`.

        Yields:
        :   Item
            :   One per file or skipped folder, in sorted path order.

        Raises:
        :   CleanPromptError
            :   If `source` is not a folder or `target` is inside it.

        Parameters:
        :   * ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))
            * ****target**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))

        Return type:
        :   [**Iterator**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator "(in Python v3.15)")[[**Item**](scikitplot.cleanprompt.Item.html#scikitplot.cleanprompt.Item "scikitplot.cleanprompt._runtime.Item")]

        Notes

        ****User notes.**** It is a generator: files are encoded as you iterate,
        so wrap it in `list` to run it all. A file that is skipped or
        refused is not written, and says why.

    fingerprint()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L618)[#](#scikitplot.cleanprompt.Cleaner.fingerprint "Link to this definition")
    :   Return the plan’s content fingerprint.

        Returns:
        :   str
            :   As [`CleanPlan.fingerprint`](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan.fingerprint "scikitplot.cleanprompt.CleanPlan.fingerprint").

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    property formats: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), ...][#](#scikitplot.cleanprompt.Cleaner.formats "Link to this definition")
    :   Names of the formats this cleaner reads.

        Type:
        :   Tuple of [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    handle()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L668)[#](#scikitplot.cleanprompt.Cleaner.handle "Link to this definition")
    :   Return a [`Handle`](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt.Handle") over every value removed.

        Returns:
        :   Handle
            :   Usable with [`decode`](scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode"), and exportable
                with [`Handle.export`](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle.export "scikitplot.cleanprompt.Handle.export") for a vault file.

        Return type:
        :   [**Handle**](scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt._api.Handle")

    kinds\_in(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1720)[#](#scikitplot.cleanprompt.Cleaner.kinds_in "Link to this definition")
    :   Return the kinds of held values `text` refers to, sorted.

        Parameters:
        :   ****text****str
            :   Text a model wrote: a reply, or a tool call’s arguments.

        Returns:
        :   tuple of str
            :   One kind per distinct held value named in `text` — by its
                placeholder or stand-in, exactly or as the model rewrote it.
                Nothing it returns is a value.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

        Notes

        ****Developer notes.**** Decided by the same restoration that decoding
        uses, so “would this text receive a value of kind K” and “does
        decoding put one there” cannot disagree (`CP-073`).

    leaks(**text**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L685)[#](#scikitplot.cleanprompt.Cleaner.leaks "Link to this definition")
    :   Return the kinds of held values that still occur in `text`.

        Parameters:
        :   ****text****str
            :   Text about to leave, usually an encoded output.

        Returns:
        :   tuple of str
            :   One kind per distinct value found, sorted; empty when clean.

        Parameters:
        :   ****text**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), …]

        Notes

        ****Developer notes.**** An independent second check, not a repeat of the
        first: encoding decides spans with detectors and arbitration; this
        searches the finished text for the removed values themselves, as whole
        tokens. It checks exactly the kinds `remember` repeats, so with
        `remember` on it can only fire on a defect, and with it off it fires
        on every recurrence the rules did not catch. Nothing it returns is a
        value.

    property plan: [CleanPlan](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt._plan.CleanPlan")[#](#scikitplot.cleanprompt.Cleaner.plan "Link to this definition")
    :   The plan this cleaner runs.

        Type:
        :   [CleanPlan](scikitplot.cleanprompt.CleanPlan.html#scikitplot.cleanprompt.CleanPlan "scikitplot.cleanprompt.CleanPlan")

    property policy: [RedactionPolicy](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy")[#](#scikitplot.cleanprompt.Cleaner.policy "Link to this definition")
    :   The policy labels are issued under.

        Type:
        :   [RedactionPolicy](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy")

    survey\_tree(**source**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L1365)[#](#scikitplot.cleanprompt.Cleaner.survey_tree "Link to this definition")
    :   Report what encoding a folder would do, writing nothing.

        Parameters:
        :   ****source****path-like
            :   The folder.

        Returns:
        :   list of Item
            :   As [`encode_tree`](#scikitplot.cleanprompt.Cleaner.encode_tree "scikitplot.cleanprompt.Cleaner.encode_tree") would yield, with `output` left empty.

        Parameters:
        :   ****source**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** [**PathLike**](https://docs.python.org/3/library/os.html#os.PathLike "(in Python v3.15)"))

        Return type:
        :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[**Item**](scikitplot.cleanprompt.Item.html#scikitplot.cleanprompt.Item "scikitplot.cleanprompt._runtime.Item")]

        Notes

        ****User notes.**** A dry run to read before sending a folder anywhere:
        which files would be encoded, skipped or refused, and how many values
        of each kind each holds. No file is written and this cleaner’s vault
        is unchanged — the survey runs on a scratch copy of the plan.

    text\_format(**format**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L765)[#](#scikitplot.cleanprompt.Cleaner.text_format "Link to this definition")
    :   Return the name of the text format `format` resolves to here.

        Parameters:
        :   ****format****str
            :   A format name or extension.

        Returns:
        :   str
            :   The format’s name.

        Raises:
        :   CleanPromptError
            :   If the plan does not select it, or it is read from bytes.

        Parameters:
        :   ****format**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))

        Return type:
        :   [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")

    vault()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c24961db/scikitplot/cleanprompt/_runtime.py#L654)[#](#scikitplot.cleanprompt.Cleaner.vault "Link to this definition")
    :   Return a vault of every value removed so far.

        Returns:
        :   Vault
            :   A fresh copy; clearing it does not clear the cleaner.

        Return type:
        :   [**Vault**](scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt._vault.Vault")