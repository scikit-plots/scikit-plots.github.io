> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cleanprompt-plot-cleanprompt-basics-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cleanprompt Basics: Hide a Value, Then Get It Back[#](#cleanprompt-basics-hide-a-value-then-get-it-back "Link to this heading")

The whole submodule is one loop with one hop in the middle that it does not
control:

```
your text  ──encode──▶  a prompt you can paste anywhere
                                 │
                        the model answers
                                 │
your answer ◀──decode──  the reply, still in placeholders

```

This example walks that loop twice — once on the command line and once from
Python — on a text small enough to read in full, and checks the round trip
rather than asserting it in prose.

Nothing here needs a third-party package. `import scikitplot.cleanprompt`
imports no `spacy`, no `flask`, no `cryptography` and no `numpy`, so
this example runs on a bare installation.

Every value below is a reserved one that cannot reach anybody: `example.com`
is reserved by [****RFC 2606****](https://datatracker.ietf.org/doc/html/rfc2606.html), `+1 555 0100`–`0199` is the North American
fiction block, and `192.0.2.0/24` is the [****RFC 5737****](https://datatracker.ietf.org/doc/html/rfc5737.html) documentation range.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

```

## 1. Give the vault somewhere temporary to live[#](#give-the-vault-somewhere-temporary-to-live "Link to this heading")

A vault holds the values that were removed, in clear text. Left to itself
the command line writes one into the platform state directory, which is the
right default for a person at a terminal and the wrong one for a
documentation build. `CLEANPROMPT_VAULT` overrides it for every command in
this process and every subprocess it starts.

```
_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-cleanprompt-basics-")
_VAULT = Path(_WORKSPACE.name) / "vault.json"

os.environ["CLEANPROMPT_VAULT"] = str(_VAULT)

print("Vault for this example:", _VAULT.name, "(inside a temporary directory)")

```
```
Vault for this example: vault.json (inside a temporary directory)

```

## 2. The text we are not willing to send[#](#the-text-we-are-not-willing-to-send "Link to this heading")

One address, one telephone number, one host. Short enough that you can check
the output by eye, which is the point of a first example.

```
PROMPT = (
    "Draft a reply to ada@example.com. "
    "She called from +1 555 0142 about the outage on 192.0.2.10."
)

print(PROMPT)

```
```
Draft a reply to ada@example.com. She called from +1 555 0142 about the outage on 192.0.2.10.

```

## 3. The command line: `encode`[#](#the-command-line-encode "Link to this heading")

`encode` prints the prompt to ****standard output**** and its summary to
****standard error****. That split is what makes the command pipeable: the thing
you paste into a chat window is the only thing on stdout.

The gallery runs the module form, which always works. An installed
scikit-plots also provides `scikitplot cleanprompt ...` through the
centralized CLI, and `python -m scikitplot.cleanprompt ...` directly.

```
def _cli() -> list[str]:
    """Return the command prefix that reaches this submodule's CLI."""
    executable = shutil.which("scikitplot")
    if executable:
        return [executable, "cleanprompt"]
    return [sys.executable, "-m", "scikitplot.cleanprompt"]


CLI = _cli()


def _mask(text: str) -> str:
    """Replace the temporary workspace path so the output is reproducible."""
    return text.replace(_WORKSPACE.name, "<workspace>")


def _echo(argument: str) -> str:
    """Render one argument the way a shell would show it, shortened."""
    single_line = argument.replace("\n", "⏎")
    if len(single_line) > 56:
        single_line = single_line[:53] + "..."
    return '"{0}"'.format(single_line) if " " in argument else single_line


def _stream(label: str, text: str, limit: int = 0) -> None:
    """Print one captured stream, indented under its label."""
    lines = _mask(text).rstrip("\n").split("\n")
    if limit and len(lines) > limit:
        lines = lines[:limit] + ["... ({0} more line(s))".format(len(lines) - limit)]
    print("  {0} │ {1}".format(label, "\n         │ ".join(lines)))


def run(
    *arguments: str,
    stdin_text: str | None = None,
    limit: int = 0,
) -> subprocess.CompletedProcess:
    """Run one CLI command, echo it, and show both streams separately."""
    completed = subprocess.run(
        [*CLI, *arguments],
        input=stdin_text,
        capture_output=True,
        text=True,
    )
    print("$ cleanprompt", " ".join(_echo(one) for one in arguments))
    if completed.stdout:
        _stream("stdout", completed.stdout, limit)
    if completed.stderr:
        _stream("stderr", completed.stderr, limit)
    print("  exit   │", completed.returncode)
    return completed


encoded = run("encode", PROMPT)

```
```
$ cleanprompt encode "Draft a reply to ada@example.com. She called from +1 ..."
  stdout │ Draft a reply to [EMAIL-1]. She called from [PHONE-1] about the outage on [IPV4-1].
  stderr │ vault: <workspace>/vault.json (append, 3 value(s))
         │ warning: Names, organisations, places and other named entities not detected
         │   spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)
  exit   │ 0

```

The prompt on stdout is what goes to the model. Check that, rather than
trusting it: none of the three values may appear in it.

```
clean_prompt = encoded.stdout.strip()

for secret in ("ada@example.com", "+1 555 0142", "192.0.2.10"):
    assert secret not in clean_prompt, "{0!r} survived redaction".format(secret)

print("no original value survives in the prompt:", True)

```
```
no original value survives in the prompt: True

```

## 4. The command line: `decode`[#](#the-command-line-decode "Link to this heading")

Paste the prompt into any chat. Whatever the model answers still contains
the placeholders, because that is all it ever saw. `decode` reads the same
vault `encode` wrote and puts the values back.

The reply below stands in for a model. Nothing in this example sends
anything anywhere.

```
REPLY = (
    "Here is a draft:\n\n"
    "    Hi, thanks for calling from [PHONE-1]. I have looked at [IPV4-1] "
    "and will write back to [EMAIL-1] within the hour."
)

decoded = run("decode", REPLY)

```
```
$ cleanprompt decode "Here is a draft:⏎⏎    Hi, thanks for calling from [PH..."
  stdout │ Here is a draft:
         │
         │     Hi, thanks for calling from +1 555 0142. I have looked at 192.0.2.10 and will write back to ada@example.com within the hour.
  stderr │ restored 3 placeholder(s)
  exit   │ 0

```

## 5. Ending the conversation[#](#ending-the-conversation "Link to this heading")

The vault accumulates across `encode` calls so that a reply quoting an
earlier turn still restores. When the conversation is over, delete it.
`forget` without `--force` is a dry run: it says what it would remove and
removes nothing.

```
run("forget")
run("forget", "--force")

```
```
$ cleanprompt forget
  stderr │ would delete <workspace>/vault.json
         │   it held 3 value(s): EMAIL=1, IPV4=1, PHONE=1
         │   re-run with --force to delete it
  exit   │ 0
$ cleanprompt forget --force
  stderr │ deleted <workspace>/vault.json
         │   it held 3 value(s): EMAIL=1, IPV4=1, PHONE=1
         │   note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.
  exit   │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'forget', '--force'], returncode=0, stdout='', stderr='deleted /tmp/scikitplot-cleanprompt-basics-g3pp9rcw/vault.json\n  it held 3 value(s): EMAIL=1, IPV4=1, PHONE=1\n  note: this unlinks the file. On a journalling filesystem or an SSD the bytes may survive; use --encrypt with a key you hold for values that must not be recoverable.\n')

```

## 6. The same loop from Python[#](#the-same-loop-from-python "Link to this heading")

[`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") returns an [`EncodedPrompt`](../../modules/generated/scikitplot.cleanprompt.EncodedPrompt.html#scikitplot.cleanprompt.EncodedPrompt "scikitplot.cleanprompt.EncodedPrompt"). `.text` is what you send;
`.handle` is what [`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode") needs to put the values back. The handle
never leaves your process.

```
from scikitplot.cleanprompt import decode, encode  # noqa: E402

encoded_prompt = encode(PROMPT)

print("send this:")
print("   ", encoded_prompt.text)
print()
print("kept here:")
for entry in encoded_prompt.result.entries:
    print("    {0:<12} {1:<6} {2}".format(entry.label, entry.kind, entry.original))

```
```
send this:
    Draft a reply to [EMAIL-1]. She called from [PHONE-1] about the outage on [IPV4-1].

kept here:
    [EMAIL-1]    EMAIL  ada@example.com
    [PHONE-1]    PHONE  +1 555 0142
    [IPV4-1]     IPV4   192.0.2.10

```

The reply comes back in placeholders, and [`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode") closes the loop.

```
answer = decode(REPLY, encoded_prompt.handle)

print(answer)

```
```
Here is a draft:

    Hi, thanks for calling from +1 555 0142. I have looked at 192.0.2.10 and will write back to ada@example.com within the hour.

```

## 7. Check the loop rather than describing it[#](#check-the-loop-rather-than-describing-it "Link to this heading")

The property worth asserting is that a reply which is exactly the redacted
prompt restores to exactly the original text. That is invariant `I1` —
the round trip — and it is what everything else in this submodule is built
on.

```
restored = decode(encoded_prompt.text, encoded_prompt.handle)

print("round trip exact:", restored == PROMPT)
assert restored == PROMPT

```
```
round trip exact: True

```

## 8. One shot, if you only want to see it work[#](#one-shot-if-you-only-want-to-see-it-work "Link to this heading")

`roundtrip` does all of the above in one command, with a stand-in reply, and
prints the five stages side by side. It is the fastest way to show somebody
what this submodule does.

It writes no vault, because the vault only has to survive between two
commands and here there is one.

```
run("roundtrip", PROMPT)

```
```
$ cleanprompt roundtrip "Draft a reply to ada@example.com. She called from +1 ..."
  stdout │
         │ 1 · your text
         │     Draft a reply to ada@example.com. She called from +1 555 0142 about the outage on 192.0.2.10.
         │
         │ 2 · what gets sent — copy this into the model
         │     Draft a reply to [EMAIL-1]. She called from [PHONE-1] about the outage on [IPV4-1].
         │
         │ 3 · what was removed — kept on this machine, never sent
         │     placeholder  kind   count  detector
         │     -----------  -----  -----  -----------
         │     [EMAIL-1]    EMAIL  1      regex:EMAIL
         │     [PHONE-1]    PHONE  1      regex:PHONE
         │     [IPV4-1]     IPV4   1      regex:IPV4
         │
         │ 4 · a stand-in reply — NOT from a model; pass --reply to use a real one
         │     Of course. I have made a note of [EMAIL-1], [PHONE-1] and [IPV4-1], and I will follow up shortly.
         │
         │ 5 · restored — the values are back
         │     Of course. I have made a note of ada@example.com, +1 555 0142 and 192.0.2.10, and I will follow up shortly.
         │
         │ round trip exact: yes
  stderr │ warning: redacted 3 value(s): EMAIL=1, IPV4=1, PHONE=1
         │   Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.
         │   -> spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)
  exit   │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'roundtrip', 'Draft a reply to ada@example.com. She called from +1 555 0142 about the outage on 192.0.2.10.'], returncode=0, stdout='\n1 · your text\n    Draft a reply to ada@example.com. She called from +1 555 0142 about the outage on 192.0.2.10.\n\n2 · what gets sent — copy this into the model\n    Draft a reply to [EMAIL-1]. She called from [PHONE-1] about the outage on [IPV4-1].\n\n3 · what was removed — kept on this machine, never sent\n    placeholder  kind   count  detector   \n    -----------  -----  -----  -----------\n    [EMAIL-1]    EMAIL  1      regex:EMAIL\n    [PHONE-1]    PHONE  1      regex:PHONE\n    [IPV4-1]     IPV4   1      regex:IPV4 \n\n4 · a stand-in reply — NOT from a model; pass --reply to use a real one\n    Of course. I have made a note of [EMAIL-1], [PHONE-1] and [IPV4-1], and I will follow up shortly.\n\n5 · restored — the values are back\n    Of course. I have made a note of ada@example.com, +1 555 0142 and 192.0.2.10, and I will follow up shortly.\n\nround trip exact: yes\n', stderr='warning: redacted 3 value(s): EMAIL=1, IPV4=1, PHONE=1\n  Placeholders are stable; restore the reply with the same vault. Note that names, organisations, places and other named entities are still not being detected.\n  -> spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n')

```

## 9. What is **not** being detected[#](#what-is-not-being-detected "Link to this heading")

Regular expressions find structured values. They cannot find a person’s
name, and a redaction tool that quietly finds nothing looks exactly like a
clean bill of health. `doctor` is the command that refuses to let that
happen: it reports what is active ****and what is blind****.

Run it before trusting a redaction, not after.

```
run("doctor", limit=14)

```
```
$ cleanprompt doctor
  stdout │ headline: 12 structural detectors are active. Names, organisations and places are NOT being detected.
         │ healthy: no
         │ tiers:
         │   ner:
         │     status: AVAILABLE
         │     available: yes
         │     distribution: spacy
         │     version: 3.8.16
         │     supported: spacy>=3.4,<5
         │     detail: spacy 3.8.16 satisfies spacy>=3.4,<5
         │     install_hint: pip install "spacy>=3.4,<5"
         │     purpose: named-entity detection
         │   nltk:
         │     status: AVAILABLE
         │ ... (200 more line(s))
  exit   │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'doctor'], returncode=0, stdout='headline: 12 structural detectors are active. Names, organisations and places are NOT being detected.\nhealthy: no\ntiers:\n  ner:\n    status: AVAILABLE\n    available: yes\n    distribution: spacy\n    version: 3.8.16\n    supported: spacy>=3.4,<5\n    detail: spacy 3.8.16 satisfies spacy>=3.4,<5\n    install_hint: pip install "spacy>=3.4,<5"\n    purpose: named-entity detection\n  nltk:\n    status: AVAILABLE\n    available: yes\n    distribution: nltk\n    version: 3.10.3\n    supported: nltk>=3.6,<4\n    detail: nltk 3.10.3 satisfies nltk>=3.6,<4\n    install_hint: pip install "nltk>=3.6,<4"\n    purpose: named-entity detection without spaCy (English only)\n  web:\n    status: AVAILABLE\n    available: yes\n    distribution: flask\n    version: 3.1.3\n    supported: flask>=2.2,<4\n    detail: flask 3.1.3 satisfies flask>=2.2,<4\n    install_hint: pip install "flask>=2.2,<4"\n    purpose: the local web interface\n  crypto:\n    status: AVAILABLE\n    available: yes\n    distribution: cryptography\n    version: 50.0.2\n    supported: cryptography>=41\n    detail: cryptography 50.0.2 satisfies cryptography>=41\n    install_hint: pip install "cryptography>=41"\n    purpose: the Fernet vault cipher (--cipher fernet); encryption itself needs no tier\ndetection:\n  active_kinds:\n    - AWS_ACCESS_KEY\n    - CREDIT_CARD\n    - EMAIL\n    - IBAN\n    - IPV4\n    - IPV6\n    - JWT\n    - MAC\n    - PHONE\n    - PRIVATE_KEY\n    - SSN_US\n    - URL\n  inactive_kinds:\n    - TITLE_CASE\n  ner_active: no\n  ner_requested: no\n  ner_ready: no\n  ner_error: -\n  ner_remedy: -\n  total_patterns: 13\nblind_spots:\n  category: Names, organisations, places and other named entities\n  reason: named-entity detection is not running, and no regular expression can recognise a person\'s name\n  remedy: spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n  examples:\n    - a person\'s full name\n    - a company or institution\n    - a city or country\n  severity: high\n\n  category: Capitalised multi-word names (partial cover)\n  reason: the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives\n  remedy: add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly\n  examples:\n    - Mustafa Kemal\n    - Acme Corporation\n  severity: medium\n\n  category: Disabled structural patterns\n  reason: 1 built-in pattern(s) are not enabled: TITLE_CASE\n  remedy: drop --kinds to enable every built-in pattern\n  examples:\n    - TITLE_CASE\n  severity: medium\n\nentity_engines:\n  mode: auto\n  language: en\n  selected:\n    - spacy\n  ready: yes\n  engines:\n    spacy:\n      installed: yes\n      language_supported: yes\n      assets_checked: yes\n      assets_ready: yes\n      ready: yes\n      status: AVAILABLE\n      reason: spaCy 3.8.16 with model \'en_core_web_sm\'\n      remedy: \n      model: en_core_web_sm\n      missing: -\n      version: 3.8.16\n      usable: yes\n      languages:\n        - *\n      needs_model: yes\n      summary: statistical models, many languages, best quality\n      install_hint: pip install "spacy>=3.4,<5"\n      detail: spaCy 3.8.16 with model \'en_core_web_sm\'\n    nltk:\n      installed: yes\n      language_supported: yes\n      assets_checked: yes\n      assets_ready: yes\n      ready: yes\n      status: AVAILABLE\n      reason: NLTK 3.10.3 with its data packages\n      remedy: \n      model: -\n      missing: -\n      version: 3.10.3\n      usable: yes\n      languages:\n        - en\n      needs_model: yes\n      summary: classic chunker, English only, small download\n      install_hint: pip install "nltk>=3.6,<4"\n      detail: NLTK 3.10.3 with its data packages\n  canonical_labels:\n    - PERSON\n    - ORG\n    - GPE\n    - LOC\n    - FAC\n    - NORP\n    - EVENT\n    - WORK_OF_ART\n    - PRODUCT\n    - LAW\n    - LANGUAGE\n    - MISC\nnltk_corpora:\n  available: yes\n  missing: -\n  install_hint: \n  checked: yes\nlanguages:\n  requested: en\n  supported: yes\n  model: en_core_web_sm\n  model_installed: yes\n  model_version: 3.8.0\n  install_hint: python -m spacy download en_core_web_sm\n  resolution:\n    language: en\n    requested_size: sm\n    resolved_size: sm\n    fallback: no\n  installed_models:\n    en_core_web_sm: 3.8.0\n  supported_languages:\n    ca: Catalan\n    da: Danish\n    de: German\n    el: Greek\n    en: English\n    es: Spanish\n    fi: Finnish\n    fr: French\n    hr: Croatian\n    it: Italian\n    ja: Japanese\n    ko: Korean\n    lt: Lithuanian\n    mk: Macedonian\n    nb: Norwegian Bokmal\n    nl: Dutch\n    pl: Polish\n    pt: Portuguese\n    ro: Romanian\n    ru: Russian\n    sl: Slovenian\n    sv: Swedish\n    uk: Ukrainian\n    zh: Chinese\nconfiguration:\n  profile: -\n  config_file: -\n  ner_engine: auto\n  language: en\n  model_size: sm\n  policy_fingerprint: 33ad5234bfede14e\n  grammar_fingerprint: 0e7c5e996585e57b\n  vault_path: /tmp/scikitplot-cleanprompt-basics-g3pp9rcw/vault.json\n  vault_exists: no\n  case_insensitive: no\n  overlap: LONGEST_WINS\n  allow: -\n  limits:\n    max_input_chars: 1000000\n    max_spans: 100000\n    max_entries: 50000\n    max_literal_terms: 10000\n    max_literal_length: 4096\nenvironment:\n  python: 3.12.15\n  platform: linux\n  cli_frontend: click\n  vault_key_set: no\n  web_secret_key_set: no\nstatus: degraded\n', stderr='')

```

## 10. Cleanup[#](#cleanup "Link to this heading")

Remove the temporary vault directory. `forget --force` above already
unlinked the vault file itself; this removes the directory that held it.

```
os.environ.pop("CLEANPROMPT_VAULT", None)
_WORKSPACE.cleanup()

print("Temporary vault workspace cleaned:", not Path(_WORKSPACE.name).exists())

```
```
Temporary vault workspace cleaned: True

```

Tags: [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 8.721 seconds)

[![Launch binder](../../_images/binder_badge_logo3.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cleanprompt/plot_cleanprompt_basics_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo3.svg)](../../lite/lab/index.html?path=auto_examples/cleanprompt/plot_cleanprompt_basics_script.ipynb)

[`Download Jupyter notebook: plot_cleanprompt_basics_script.ipynb`](../../_downloads/cf7c3deaa8dfbddb0f4f1b534897efc8/plot_cleanprompt_basics_script.ipynb)

[`Download Python source code: plot_cleanprompt_basics_script.py`](../../_downloads/d9842edcb18d79b175b5a2a74327a5c3/plot_cleanprompt_basics_script.py)

[`Download zipped: plot_cleanprompt_basics_script.zip`](../../_downloads/29fa27ae6734ff5fa653b635d577c8af/plot_cleanprompt_basics_script.zip)

Related examples

![](../../_images/sphx_glr_plot_cleanprompt_cli_usage_script_thumb.png)

[Cleanprompt on the Command Line: Single Commands and Edge Cases](plot_cleanprompt_cli_usage_script.html)

Cleanprompt on the Command Line: Single Commands and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)