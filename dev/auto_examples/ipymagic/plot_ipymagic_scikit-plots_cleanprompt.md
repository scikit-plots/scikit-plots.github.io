> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-ipymagic-plot-ipymagic-scikit-plots-cleanprompt-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Clean a Prompt in a Notebook Cell with `%%scikitplot`[#](#clean-a-prompt-in-a-notebook-cell-with-scikitplot "Link to this heading")

The cell form `%%scikitplot COMMAND` gives the cell’s text to the command
on standard input. With `cleanprompt` that turns a notebook cell into a
guarded text box: what you paste is redacted before it goes anywhere, and
the vault that can restore it is written where you say.

The steps:

1. redact a cell, keep the vault in a folder of your choice;
2. restore a model’s reply with the same vault;
3. read what ran (exit code, output, where it ran);
4. the edge cases: an empty cell, a command that needs no input.

`cleanprompt` is a **delegated** command: it runs in a subprocess of the
kernel’s own Python, streamed, and stopped by the interrupt button or by the
`timeout` setting. Every value below is reserved for documentation.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## A vault for this example[#](#a-vault-for-this-example "Link to this heading")

`cleanprompt` writes the removed values to a vault. By default that is a
file in your state directory; here a temporary folder keeps the example
self-contained and leaves nothing behind.

```
import io
import shutil
import tempfile
from pathlib import Path

from scikitplot._ipymagic import MagicSettings, route, run_command

# In a notebook (this page's download), load the magics so the ``%%`` cells
# below run; a plain script has no IPython and skips this.
_shell = globals().get("get_ipython", lambda: None)()
if _shell is not None:
    _shell.run_line_magic("load_ext", "scikitplot")

work = Path(tempfile.mkdtemp(prefix="skplt-ipymagic-"))
vault = work / "vault.json"
print("cleanprompt runs in a subprocess:", route(["cleanprompt"]).delegated)

```
```
cleanprompt runs in a subprocess: True

```

## Redact a cell[#](#redact-a-cell "Link to this heading")

```
%%scikitplot cleanprompt redact --vault {vault}
Mail me at jane.doe@example.com or call +1 202 555 0143.

```

`{vault}` is a Python variable expanded by IPython. The redacted text is
printed; the report and the vault path go to standard error.

```
cell = "Mail me at jane.doe@example.com or call +1 202 555 0143.\n"
redacted = run_command(["cleanprompt", "redact", "--vault", str(vault)], stdin=cell)
print(redacted.summary())

```
```
Mail me at [EMAIL-1] or call [PHONE-1].
warning: redacted 2 value(s): EMAIL=1, PHONE=1
  Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.
  -> spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)
placeholder  kind   count  detector
-----------  -----  -----  -----------
[EMAIL-1]    EMAIL  1      regex:EMAIL
[PHONE-1]    PHONE  1      regex:PHONE
vault: /tmp/skplt-ipymagic-gpclnnbf/vault.json (overwrite, 2 value(s))
scikitplot cleanprompt: exit 0 in 0.68 s (subprocess)

```

The result keeps both streams, so a notebook can test the outcome instead
of reading it:

```
assert redacted.ok and "jane.doe@example.com" not in redacted.stdout
assert vault.is_file()
print("safe to send:", redacted.stdout.strip())

```
```
safe to send: Mail me at [EMAIL-1] or call [PHONE-1].

```

## Restore a reply[#](#restore-a-reply "Link to this heading")

Send the redacted text to a model; its reply keeps the placeholders. The
same vault puts the values back:

```
%%scikitplot cleanprompt restore --vault {vault}
I will write to [EMAIL-1] and call [PHONE-1] tomorrow.

```
```
reply = "I will write to [EMAIL-1] and call [PHONE-1] tomorrow.\n"
restored = run_command(["cleanprompt", "restore", "--vault", str(vault)], stdin=reply)
expected = "I will write to jane.doe@example.com and call +1 202 555 0143 tomorrow."
assert restored.ok and restored.stdout.strip() == expected

```
```
restored 2 placeholder(s)
I will write to jane.doe@example.com and call +1 202 555 0143 tomorrow.

```

A list of words, not a string, is the safe way to pass a path that may hold
spaces or quotes; a string is split like a shell would (`"a b"` is one
word).

## Edge cases[#](#edge-cases "Link to this heading")

An empty or whitespace-only cell gives the command no input at all, so
`%%scikitplot cleanprompt --help` behaves like the line magic:

```
blank_cell = "   \n"
stdin = blank_cell if blank_cell.strip() else None  # what the magic does
help_result = run_command(["cleanprompt", "--help"], stdin=stdin, out=io.StringIO())
print(help_result.summary())
print(help_result.stdout.splitlines()[0])

```
```
scikitplot cleanprompt: exit 0 in 0.37 s (subprocess)
Usage: python -m scikitplot.cleanprompt [OPTIONS] [COMMAND] [ARGS]...

```

A command that fails shows its own message and returns its exit status;
`restore --strict` refuses a placeholder the vault does not hold:

```
err = io.StringIO()
strict = run_command(
    ["cleanprompt", "restore", "--strict", "--vault", str(vault)],
    stdin="Who is [PERSON-9]?\n",
    err=err,
)
print(strict.summary())
print(err.getvalue().strip().splitlines()[-1])

```
```
scikitplot cleanprompt: exit 1 in 0.44 s (subprocess)
error: placeholder '[PERSON-9]' is not present in the vault

```

For a long-running command, `timeout` stops it (exit status 124, as GNU
`timeout`) together with every process it started:

```
%scikitplot_config timeout=120

```
```
guarded = MagicSettings(timeout=120)
print(guarded)

```
```
MagicSettings(raise_on_error=False, timeout=120, isolate=False, stream=True)

```

Clean up the example’s folder (the vault holds the removed values):

```
shutil.rmtree(work)

```

Tags: [model-workflow: ipymagic](../../_tags/model-workflow-ipymagic.html) [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html)

****Total running time of the script:**** (0 minutes 1.916 seconds)

[![Launch binder](../../_images/binder_badge_logo25.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/ipymagic/plot_ipymagic_scikit-plots_cleanprompt.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo25.svg)](../../lite/lab/index.html?path=auto_examples/ipymagic/plot_ipymagic_scikit-plots_cleanprompt.ipynb)

[`Download Jupyter notebook: plot_ipymagic_scikit-plots_cleanprompt.ipynb`](../../_downloads/acd19bfc39431dd1cc58ea12e496a133/plot_ipymagic_scikit-plots_cleanprompt.ipynb)

[`Download Python source code: plot_ipymagic_scikit-plots_cleanprompt.py`](../../_downloads/68da4f3798a6522e010107415c4bcb3e/plot_ipymagic_scikit-plots_cleanprompt.py)

[`Download zipped: plot_ipymagic_scikit-plots_cleanprompt.zip`](../../_downloads/6684a75b0563ee4fab20a8dc51f4f2b6/plot_ipymagic_scikit-plots_cleanprompt.zip)

Related examples

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_profiler_thumb.png)

[Profile a Notebook Cell with %%scikitplot\_profile](plot_ipymagic_scikit-plots_profiler.html)

Profile a Notebook Cell with %%scikitplot\_profile![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](../cleanprompt/plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_mcp_thumb.png)

[Inspect and Self-test the MCP Server from a Notebook](plot_ipymagic_scikit-plots_mcp.html)

Inspect and Self-test the MCP Server from a Notebook

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)