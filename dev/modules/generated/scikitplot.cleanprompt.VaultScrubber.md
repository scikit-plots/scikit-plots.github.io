# VaultScrubber[#](#vaultscrubber "Link to this heading")

class scikitplot.cleanprompt.VaultScrubber(**owner=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L646)[#](#scikitplot.cleanprompt.VaultScrubber "Link to this definition")
:   Keep a vault’s values out of every log record for as long as it holds them.

    Notes

    ****User notes.**** You do not create one: [`Cleaner`](scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt.Cleaner"),
    [`Guard`](scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard") and
    [`Session`](scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session") do, and it lives exactly as long
    as they hold values. While it lives, any record from this submodule that
    would contain a removed value carries `<redacted>` instead.

    ****Developer notes.**** Surfaces go into one shared, counted filter. They are
    released by [`close`](#scikitplot.cleanprompt.VaultScrubber.close "scikitplot.cleanprompt.VaultScrubber.close") and, if the owner is dropped without being
    closed, by a `weakref.finalize` on the owner — a surface left in the
    filter would otherwise keep the secrets of every cleaner the process ever
    made, which is the leak it exists to prevent.

    Parameters:
    :   ****owner**** ([**object**](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)") **|** **None**)

    add(**secrets**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L679)[#](#scikitplot.cleanprompt.VaultScrubber.add "Link to this definition")
    :   Scrub these surfaces too.

        Parameters:
        :   ****secrets**** ([**Iterable**](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**]**)

        Return type:
        :   None

    close()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/cleanprompt/_logging.py#L689)[#](#scikitplot.cleanprompt.VaultScrubber.close "Link to this definition")
    :   Stop scrubbing this vault’s surfaces and forget them.

        Return type:
        :   None