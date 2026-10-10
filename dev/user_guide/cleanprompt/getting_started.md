# Getting started[#](#getting-started "Link to this heading")

This page installs CleanPrompt, checks what it can see on your machine, and
walks once through the full loop: hide, send, restore.

## Install[#](#install "Link to this heading")

The normal installation already includes the base CleanPrompt implementation:

```
pip install scikit-plots

```

Install the complete optional CleanPrompt bundle when you want all optional
integrations:

```
pip install "scikit-plots[cleanprompt]"

```

Or install only the tier you need:

| Extra | Tier | Main dependency | Purpose |
| --- | --- | --- | --- |
| `cleanprompt-ner` | `ner` | spaCy | named-entity detection, many languages |
| `cleanprompt-nltk` | `nltk` | NLTK | English named-entity detection without spaCy |
| `cleanprompt-web` | `web` | Flask | local browser interface |
| `cleanprompt-crypto` | `crypto` | cryptography | the optional Fernet vault cipher; encryption itself needs no tier |

A lightweight partial distribution is also available as
`scikit-plots-cleanprompt`. It composes with `scikit-plots-skinny` and is
intended for installations that do not need the full `scikit-plots`
distribution. Do not install the partial distribution beside full
`scikit-plots` because both distributions own the same CleanPrompt package
files.

> **Note**
> An entity engine needs ****data**** as well as its package: spaCy needs a
model (`python -m spacy download en_core_web_sm`), NLTK needs its data
packages. Installing the extra is the first of two steps.
[Names, organisations and places](entity_detection.html#cleanprompt-entity-detection) explains, and `doctor` names the
exact command for your machine.

## Check what is active[#](#check-what-is-active "Link to this heading")

Before relying on an optional capability, inspect the installation instead of
assuming that importing a dependency means it is usable:

```
python -m scikitplot.cleanprompt doctor

```

`doctor` reports the four optional tiers (`ner`, `nltk`, `web` and
`crypto`), which structural detectors are active, the categories nothing is
looking for (its **blind spots**), where the default vault lives, and — with
`--ner` — whether the entity engine you asked for is ready to run. Add
`--format json` when a script reads it.

The Python equivalent reports the tiers without importing their third-party
packages:

```
from scikitplot.cleanprompt import capabilities
reports = capabilities()
reports["ner"].status

```

Status is a [`CapabilityStatus`](../../modules/generated/scikitplot.cleanprompt.CapabilityStatus.html#scikitplot.cleanprompt.CapabilityStatus "scikitplot.cleanprompt.CapabilityStatus"), which distinguishes states such as
`ABSENT`, `BROKEN`, `INCOMPATIBLE`, `MISCONFIGURED` and `AVAILABLE`.

## The loop, once, in the terminal[#](#the-loop-once-in-the-terminal "Link to this heading")

`roundtrip` shows all five stages in one command and writes nothing to disk:
your text, what gets sent, what was removed (values hidden unless
`--reveal`), a reply, and the restored text with a `round trip exact` line.

```
python -m scikitplot.cleanprompt roundtrip "Mail ada@example.com from 192.0.2.10"

```

Stage four is a fixed stand-in, labelled “NOT from a model” on every run;
`--reply TEXT` substitutes a real answer.

For real work, the two halves are separate commands, because a reply can
arrive minutes or days later:

```
# 1. text in, a pasteable prompt out (and nothing else on stdout)
python -m scikitplot.cleanprompt encode <<'END'
Please summarise the complaint from ada@example.com, sent from 192.0.2.10.
END

# 2. paste the model's answer back
python -m scikitplot.cleanprompt decode <<'END'
The customer at [EMAIL-1] reports that [IPV4-1] cannot connect.
END

# 3. when the conversation is over
python -m scikitplot.cleanprompt forget --force

```

The quoted heredoc delimiter (`<<'END'`) stops the shell from interpreting
anything in the pasted text — parentheses, `$` and backticks included.

`encode` keeps the removed values in a vault at a default location outside
your working directory and appends to it, so the same address keeps the same
placeholder for the whole conversation. `decode` reads the same vault.
`forget` deletes it. [The command line](command_line.html#cleanprompt-command-line) covers the vault in
detail.

## The loop, once, in Python[#](#the-loop-once-in-python "Link to this heading")

```
from scikitplot.cleanprompt import encode, decode

safe_text, handle = encode("Write to ada@example.com about invoice 42")
reply = "Done: I wrote to [EMAIL-1]."      # whatever the model returned
decode(reply, handle)
# 'Done: I wrote to ada@example.com.'
handle.clear()

```

Only `safe_text` goes to the model. Call [`Handle.clear`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle.clear "scikitplot.cleanprompt.Handle.clear") when the
restoration authority is no longer needed.

## Where to next[#](#where-to-next "Link to this heading")

* [How it works](how_it_works.html#cleanprompt-how-it-works) — what happens between `encode` and
  `decode`, and why each step is shaped the way it is.
* [Names, organisations and places](entity_detection.html#cleanprompt-entity-detection) — names, organisations and places.
* [Cleanprompt](../../auto_examples/cleanprompt/index.html#cleanprompt-examples) — the executable gallery.