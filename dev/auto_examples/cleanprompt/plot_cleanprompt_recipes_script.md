> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cleanprompt-plot-cleanprompt-recipes-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents[#](#cleanprompt-recipes-ci-gates-notebooks-pipelines-and-agents "Link to this heading")

Six complete, working patterns for the places this submodule actually gets
used. Each one is short, runs here, and is written so it can be lifted into a
project without editing anything but the paths.

| # | Recipe | The question it answers |
| --- | --- | --- |
| 1 | CI gate | “how do I fail a build when a file contains a value we must not ship?” |
| 2 | Pre-commit hook | “how do I catch it before it is committed, not after?” |
| 3 | Notebook helper | “how do I paste a prompt from a notebook without leaking the dataframe?” |
| 4 | Batch pipeline | “how do I redact a directory reproducibly?” |
| 5 | Agent loop | “how do I put this between an agent and a model API?” |
| 6 | Log hygiene | “how do I stop a value reaching the logs in the first place?” |

Every value below is reserved and cannot reach anybody.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import io
import json
import logging
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

_WORKSPACE = tempfile.TemporaryDirectory(prefix="scikitplot-cleanprompt-recipes-")
_HOME = Path(_WORKSPACE.name)

os.environ["CLEANPROMPT_VAULT"] = str(_HOME / "vault.json")


def _cli() -> list[str]:
    executable = shutil.which("scikitplot")
    if executable:
        return [executable, "cleanprompt"]
    return [sys.executable, "-m", "scikitplot.cleanprompt"]


CLI = _cli()


def run(*arguments: str, limit: int = 0, env: dict | None = None):
    """Run one CLI command and show both streams, with paths masked."""
    environment = dict(os.environ)
    if env:
        environment.update(env)
    completed = subprocess.run(
        [*CLI, *arguments], input="", capture_output=True, text=True, env=environment
    )
    shown = " ".join(
        ('"{0}"'.format(one) if " " in one else one).replace(
            _WORKSPACE.name, "<workspace>"
        )
        for one in arguments
    )
    print("$ cleanprompt", shown)
    for label, stream in (("out", completed.stdout), ("err", completed.stderr)):
        if not stream:
            continue
        lines = stream.replace(_WORKSPACE.name, "<workspace>").rstrip("\n").split("\n")
        if limit and len(lines) > limit:
            lines = lines[:limit] + ["... ({0} more)".format(len(lines) - limit)]
        print("  {0} │ {1}".format(label, "\n      │ ".join(lines)))
    print("  exit │", completed.returncode)
    return completed

```

## Recipe 1 — a CI gate[#](#recipe-1-a-ci-gate "Link to this heading")

`scan` exists for exactly this. It runs the same detection as everything
else and reports through the only channel a build system reads: the exit
status. `3` means values were found; `0` means none were.

```
# .github/workflows/no-secrets.yml
- name: Reject prompts containing personal data
  run: |
    python -m scikitplot.cleanprompt scan \
        --profile strict \
        --format json \
        --in prompts/support-macros.md

```

Put `--profile strict` on a gate. A gate is the one place where a false
positive costs a minute and a false negative costs the thing you were
protecting.

```
fixture = _HOME / "support-macros.md"
fixture.write_text(
    "# Macros\n\n"
    "Escalation contact: ada@example.com\n"
    "Bridge line: +1 555 0142\n",
    encoding="utf-8",
)

clean_fixture = _HOME / "clean-macros.md"
clean_fixture.write_text("# Macros\n\nEscalation contact: the on-call rota.\n", encoding="utf-8")

found = run("scan", "--profile", "strict", "--format", "json", "--in", str(fixture), limit=8)
passed = run("scan", "--profile", "strict", "--format", "json", "--in", str(clean_fixture), limit=4)

print()
print("gate fails on the dirty file:", found.returncode == 3)
print("gate passes on the clean file:", passed.returncode == 0)
assert found.returncode == 3 and passed.returncode == 0

```
```
$ cleanprompt scan --profile strict --format json --in <workspace>/support-macros.md
  out │ {
      │   "clean": false,
      │   "findings": 2,
      │   "max_findings": 0,
      │   "by_kind": {
      │     "EMAIL": 1,
      │     "PHONE": 1
      │   },
      │ ... (19 more)
  exit │ 3
$ cleanprompt scan --profile strict --format json --in <workspace>/clean-macros.md
  out │ {
      │   "clean": true,
      │   "findings": 0,
      │   "max_findings": 0,
      │ ... (17 more)
  exit │ 0

gate fails on the dirty file: True
gate passes on the clean file: True

```

`--max-findings` exists for a repository that is adopting the gate on an
existing codebase: set it to today’s count, then ratchet it down. It is a
migration tool, not a setting — a gate that tolerates findings forever is not
a gate.

```
run("scan", "--max-findings", "5", "--in", str(fixture), limit=3)

```
```
$ cleanprompt scan --max-findings 5 --in <workspace>/support-macros.md
  out │ clean: yes
      │ findings: 2
      │ max_findings: 5
      │ ... (32 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'scan', '--max-findings', '5', '--in', '/tmp/scikitplot-cleanprompt-recipes-fv7bmz9j/support-macros.md'], returncode=0, stdout="clean: yes\nfindings: 2\nmax_findings: 5\nby_kind:\n  EMAIL: 1\n  PHONE: 1\nplaceholders:\n  - [EMAIL-1]\n  - [PHONE-1]\nblind_spots:\n  category: Names, organisations, places and other named entities\n  reason: named-entity detection is not running, and no regular expression can recognise a person's name\n  remedy: spaCy is installed with its model; enable it for this run (--ner on the command line, or add spacy_detector() to the registry)\n  examples:\n    - a person's full name\n    - a company or institution\n    - a city or country\n  severity: high\n\n  category: Capitalised multi-word names (partial cover)\n  reason: the TITLE_CASE pattern is available but not enabled; it finds runs of capitalised words without needing spaCy, at the cost of false positives\n  remedy: add TITLE_CASE to the detection kinds (--kinds ... TITLE_CASE), or use --suggest to review candidates and hide them explicitly\n  examples:\n    - Mustafa Kemal\n    - Acme Corporation\n  severity: medium\n\n  category: Disabled structural patterns\n  reason: 1 built-in pattern(s) are not enabled: TITLE_CASE\n  remedy: drop --kinds to enable every built-in pattern\n  examples:\n    - TITLE_CASE\n  severity: medium\n\nstatus: clean\n", stderr='')

```

## Recipe 2 — a pre-commit hook[#](#recipe-2-a-pre-commit-hook "Link to this heading")

The same gate, one step earlier. Add this to `.pre-commit-config.yaml`:

```
repos:
  - repo: local
    hooks:
      - id: cleanprompt-scan
        name: no personal data in prompts
        entry: python -m scikitplot.cleanprompt scan --profile strict --in
        language: system
        files: '^prompts/.*\\.(md|txt)$'

```

`pre-commit` appends the changed file names to `entry`, which is why the
command ends with `--in`. Because the hook runs on the **staged** content,
it catches the value before it exists in history — which matters, because
removing a value from a Git history is considerably harder than not
committing it.

## Recipe 3 — a notebook helper[#](#recipe-3-a-notebook-helper "Link to this heading")

In a notebook the prompt is usually built from data, so the risk is not a
value you typed but one that arrived in a dataframe. Wrap the send.

```
from scikitplot.cleanprompt import session  # noqa: E402


def ask(question: str, send) -> str:
    """Redact, send, restore — the whole loop as one call.

    Parameters
    ----------
    question : str
        The prompt, values and all.
    send : callable
        Takes the redacted prompt, returns the model's reply. It never sees a
        value.

    Returns
    -------
    str
        The reply, with the values put back.
    """
    with session() as chat:
        return chat.roundtrip(question, send)


ROWS = [
    {"name": "Marion Holt", "email": "ada@example.com", "host": "192.0.2.10"},
    {"name": "Devin Nakamura", "email": "bob@example.com", "host": "192.0.2.11"},
]

built = "Summarise these incidents:\n" + "\n".join(
    "- {name} ({email}) on {host}".format(**row) for row in ROWS
)


def fake_model(sent: str) -> str:
    """Stand in for a model, and assert what it was given."""
    for row in ROWS:
        assert row["email"] not in sent, "a value reached the model"
        assert row["host"] not in sent, "a value reached the model"
    return "Two incidents. I will follow up with the addresses in the text."


print(ask(built, fake_model))

```
```
Two incidents. I will follow up with the addresses in the text.

```

Note what the assertions inside `fake_model` are doing. A wrapper like this
is worth very little unless something checks that it worked, and the cheapest
place to check is the boundary itself. Keep those assertions in the real
version too.

## Recipe 4 — a reproducible batch pass[#](#recipe-4-a-reproducible-batch-pass "Link to this heading")

For a directory of documents, use `redact` rather than `encode`: it
defaults to `--vault-mode overwrite`, which is what a reproducible pipeline
needs — each run starts from a known state instead of inheriting the last
one’s numbering.

One vault per document, beside the output, so the two travel together.

```
corpus = _HOME / "corpus"
corpus.mkdir()
output = _HOME / "redacted"
output.mkdir()

for index, body in enumerate(
    [
        "Ticket 1: ada@example.com could not reach 192.0.2.10.",
        "Ticket 2: bob@example.com was billed on 4242 4242 4242 4242.",
        "Ticket 3: nothing sensitive in this one.",
    ],
    start=1,
):
    (corpus / "ticket-{0}.txt".format(index)).write_text(body, encoding="utf-8")

for source in sorted(corpus.glob("*.txt")):
    run(
        "redact",
        "--quiet",
        "--profile",
        "strict",
        "--in",
        str(source),
        "--out",
        str(output / source.name),
        "--vault",
        str(output / (source.stem + ".vault.json")),
    )

print()
for produced in sorted(output.glob("*.txt")):
    print("{0:<14} {1}".format(produced.name, produced.read_text(encoding="utf-8").strip()))

```
```
$ cleanprompt redact --quiet --profile strict --in <workspace>/corpus/ticket-1.txt --out <workspace>/redacted/ticket-1.txt --vault <workspace>/redacted/ticket-1.vault.json
  exit │ 0
$ cleanprompt redact --quiet --profile strict --in <workspace>/corpus/ticket-2.txt --out <workspace>/redacted/ticket-2.txt --vault <workspace>/redacted/ticket-2.vault.json
  exit │ 0
$ cleanprompt redact --quiet --profile strict --in <workspace>/corpus/ticket-3.txt --out <workspace>/redacted/ticket-3.txt --vault <workspace>/redacted/ticket-3.vault.json
  exit │ 0

ticket-1.txt   Ticket 1: [EMAIL-1] could not reach [IPV4-1].
ticket-2.txt   Ticket 2: [EMAIL-1] was billed on [CREDIT_CARD-1].
ticket-3.txt   Ticket 3: nothing sensitive in this one.

```

The pass is reproducible in the sense that matters: running it twice gives
byte-identical output, because nothing in the pipeline depends on process
state or on [`hash`](https://docs.python.org/3/builtins/functions.html#hash "(in Python v3.15)").

```
before = {p.name: p.read_bytes() for p in sorted(output.glob("*.txt"))}

for source in sorted(corpus.glob("*.txt")):
    run("redact", "--quiet", "--profile", "strict", "--in", str(source),
        "--out", str(output / source.name),
        "--vault", str(output / (source.stem + ".vault.json")))

after = {p.name: p.read_bytes() for p in sorted(output.glob("*.txt"))}

print()
print("byte-identical on a second run:", before == after)
assert before == after

```
```
$ cleanprompt redact --quiet --profile strict --in <workspace>/corpus/ticket-1.txt --out <workspace>/redacted/ticket-1.txt --vault <workspace>/redacted/ticket-1.vault.json
  exit │ 0
$ cleanprompt redact --quiet --profile strict --in <workspace>/corpus/ticket-2.txt --out <workspace>/redacted/ticket-2.txt --vault <workspace>/redacted/ticket-2.vault.json
  exit │ 0
$ cleanprompt redact --quiet --profile strict --in <workspace>/corpus/ticket-3.txt --out <workspace>/redacted/ticket-3.txt --vault <workspace>/redacted/ticket-3.vault.json
  exit │ 0

byte-identical on a second run: True

```

One caution for a batch pass, and it is the reason `--vault` is explicit
above: a vault is clear text. Writing it next to the output is convenient
and is the wrong default for a repository — add `*.vault.json` to
`.gitignore`, or encrypt with `--encrypt` and keep the passphrase
elsewhere.

## Recipe 5 — between an agent and a model API[#](#recipe-5-between-an-agent-and-a-model-api "Link to this heading")

The shape that matters here is that the vault belongs to the ****conversation****,
not to the call. A [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session") held for the life of the exchange gives a
value the same label in turn seven that it had in turn one, which is what lets
the model refer back to it.

```
from scikitplot.cleanprompt import Session  # noqa: E402


class Conversation:
    """A model client with redaction on both sides of every call.

    Notes
    -----
    **User notes.** Construct one per conversation, use it as a context
    manager, and the values are cleared when the block ends.

    **Developer notes.** ``_transport`` is the only place a redacted prompt
    leaves this object, and the only place a reply comes back. Keeping it to
    one method is what makes the boundary auditable: there is exactly one line
    to check when somebody asks whether a value can escape.
    """

    def __init__(self, transport):
        self._transport = transport
        self._session = Session()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, tb):
        self._session.clear()

    def ask(self, question: str) -> str:
        """Send one turn and return the reply with values restored."""
        sent = self._session.encode(question)
        received = self._transport(sent)
        return self._session.decode(received)

    @property
    def audit(self) -> dict:
        """Return what was withheld, for a log that must not hold values."""
        report = self._session.report()
        return {"turns": report["turns"], "labels": report["labels"]}


TRANSCRIPT = []


def recording_transport(sent: str) -> str:
    """Stand in for a model API, recording exactly what crossed the boundary."""
    TRANSCRIPT.append(sent)
    mentioned = re.findall(r"\[[A-Z_]+-\d+\]", sent)
    return "Understood. I will contact {0}.".format(
        " and ".join(mentioned) if mentioned else "the reporter"
    )


with Conversation(recording_transport) as chat:
    print(chat.ask("Open an incident for ada@example.com"))
    print(chat.ask("Add bob@example.com and ada@example.com to it"))
    print()
    print("audit:", json.dumps(chat.audit, sort_keys=True))

print()
print("what actually crossed the boundary:")
for line in TRANSCRIPT:
    print("   ", line)

for line in TRANSCRIPT:
    assert "ada@example.com" not in line
    assert "bob@example.com" not in line
print()
print("no value reached the transport:", True)

```
```
Understood. I will contact ada@example.com.
Understood. I will contact bob@example.com and ada@example.com.

audit: {"labels": {"[EMAIL-1]": "EMAIL", "[EMAIL-2]": "EMAIL"}, "turns": 2}

what actually crossed the boundary:
    Open an incident for [EMAIL-1]
    Add [EMAIL-2] and [EMAIL-1] to it

no value reached the transport: True

```

## Recipe 6 — keeping values out of the logs[#](#recipe-6-keeping-values-out-of-the-logs "Link to this heading")

The loop above protects the model. It does nothing about the log line your
framework writes just before the call, which is a common way for a value to
escape a system that redacts correctly everywhere it was designed to.

`redacting` installs a filter for literal strings you hold — tokens,
passphrases, a customer identifier you were given. It is deliberately
literal rather than pattern-based, so treat it as a last line of defence for
****named**** values, never as a substitute for redacting the prompt.

```
from scikitplot.cleanprompt import redacting  # noqa: E402

buffer = io.StringIO()
app_log = logging.getLogger("cleanprompt.recipes")
app_log.handlers = [logging.StreamHandler(buffer)]
app_log.setLevel(logging.INFO)
app_log.propagate = False

# The value held here is a customer reference: something you were given and
# must not repeat, though it is no credential.  A token or a passphrase is
# registered the same way; an example has no reason to put one through a logger.
CUSTOMER_REFERENCE = "ACME-7731-demo"

with redacting(secrets=[CUSTOMER_REFERENCE], logger=app_log):
    app_log.info("opening an incident for customer %s", CUSTOMER_REFERENCE)
    app_log.info("prompt was: Open an incident for [EMAIL-1]")

written = buffer.getvalue()
print(written.strip())
print()
print("the held value is absent:", CUSTOMER_REFERENCE not in written)
assert CUSTOMER_REFERENCE not in written

```
```
opening an incident for customer <redacted>
prompt was: Open an incident for [EMAIL-1]

the held value is absent: True

```

## 7. Two more worth knowing about[#](#two-more-worth-knowing-about "Link to this heading")

****The local web interface.**** `cleanprompt flask` serves a paste-and-go page
on loopback, and `cleanprompt docker` writes a Dockerfile and a compose
file for it. No server is started in a documentation build:

```
cleanprompt flask --port 5000            # http://127.0.0.1:5000
cleanprompt flask --docker --port 5000   # binds 0.0.0.0 inside a container
cleanprompt docker --write ./deploy      # generate the files

```

`--docker` binds `0.0.0.0` because a container’s port mapping needs it.
Outside a container that exposes an unauthenticated page to the network, so
any other non-loopback bind additionally requires `--allow-remote`.

Three things in the generated files are worth checking, and each is derived
from the runtime rather than written by hand:

* every launch line publishes on ****loopback**** (`-p 127.0.0.1:5000:5000`).
  `-p 5000:5000` without an address publishes on every interface of the
  host;
* with `--with-ner` the image installs the model the runtime resolves and
  runs with exactly that model, named explicitly, so the two cannot drift;
* `--debug` is refused on any address but loopback, container mode
  included, because Flask’s debugger runs code typed into the browser.

```
files = run("docker", "--port", "5000", "--with-ner")
launches = [line.strip() for line in files.stdout.splitlines() if "docker run" in line]
print("launch lines:", launches)
assert launches and all("-p 127.0.0.1:" in line for line in launches)
installed = [line.strip() for line in files.stdout.splitlines() if "spacy download" in line]
requested = [line.strip() for line in files.stdout.splitlines() if line.startswith("CMD")]
print("installed:", installed)
print("requested:", requested)

```
```
$ cleanprompt docker --port 5000 --with-ner
  out │ # ---- Dockerfile ----
      │ # CleanPrompt web interface.
      │ #
      │ # Build:  docker build -t cleanprompt .
      │ # Run:    docker run --rm -p 127.0.0.1:5000:5000 \
      │ #           -e CLEANPROMPT_SECRET_KEY="$(python -c 'import secrets;print(secrets.token_hex(32))')" \
      │ #           cleanprompt
      │ FROM python:3.12-slim
      │
      │ ENV PYTHONDONTWRITEBYTECODE=1 \
      │     PYTHONUNBUFFERED=1 \
      │     PIP_NO_CACHE_DIR=1
      │
      │ WORKDIR /app
      │
      │ # The base tier needs no third-party package; only the web tier does.
      │ RUN pip install --no-cache-dir "flask>=2.2,<4" scikit-plots
      │
      │ # Optional named-entity tier: spaCy and the model the CMD below runs.
      │ RUN pip install --no-cache-dir "spacy>=3.4,<5" \
      │  && python -m spacy download en_core_web_sm
      │
      │ # Run as a non-root user: this process handles pasted personal data.
      │ RUN useradd --create-home --uid 10001 cleanprompt
      │ USER cleanprompt
      │
      │ EXPOSE 5000
      │
      │ # CLEANPROMPT_SECRET_KEY is required and deliberately has no default: a default
      │ # would be a published secret shared by every deployment.
      │ HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
      │   CMD python -c "import urllib.request;urllib.request.urlopen('http://127.0.0.1:5000/healthz')"
      │
      │ ENTRYPOINT ["python", "-m", "scikitplot.cleanprompt", "flask", "--docker", "--port", "5000"]
      │ CMD ["--ner", "--ner-engine", "spacy", "--ner-model", "en_core_web_sm"]
      │
      │ # ---- docker-compose.yml ----
      │ services:
      │   cleanprompt:
      │     build:
      │       context: .
      │       dockerfile: Dockerfile
      │     image: cleanprompt:local
      │     ports:
      │       # Published on loopback only. Change to "5000:5000" to expose it to
      │       # the network, and read the note in README.md before you do.
      │       - "127.0.0.1:5000:5000"
      │     environment:
      │       # Required. Generate with:
      │       #   python -c "import secrets;print(secrets.token_hex(32))"
      │       CLEANPROMPT_SECRET_KEY: "${CLEANPROMPT_SECRET_KEY:?set CLEANPROMPT_SECRET_KEY}"
      │     read_only: true
      │     tmpfs:
      │       - /tmp
      │     security_opt:
      │       - no-new-privileges:true
      │     cap_drop:
      │       - ALL
      │     restart: unless-stopped
      │
      │ # ---- .dockerignore ----
      │ __pycache__/
      │ *.py[cod]
      │ .git/
      │ .venv/
      │ *.egg-info/
      │ # Never ship a vault into an image: it holds the values that were removed.
      │ *.vault.json
      │ vault*.json
      │ .cleanprompt.toml
      │
      │ # ---- README.md ----
      │ # CleanPrompt in a container
      │
      │ ```sh
      │ export CLEANPROMPT_SECRET_KEY="$(python -c 'import secrets;print(secrets.token_hex(32))')"
      │ docker compose up --build
      │ ```
      │
      │ Then open <http://127.0.0.1:5000>.
      │
      │ Without compose, publish on loopback the same way:
      │
      │ ```sh
      │ docker build -t cleanprompt .
      │ docker run --rm -p 127.0.0.1:5000:5000 -e CLEANPROMPT_SECRET_KEY cleanprompt
      │ ```
      │
      │ `-p 5000:5000` without the `127.0.0.1:` prefix publishes on **every**
      │ interface of the host.
      │
      │ `--debug` is refused in a container: Flask's debugger runs code typed into the
      │ browser, and it is allowed only on a loopback address.
      │
      │ ## What the flags mean
      │
      │ `--docker` makes the app bind `0.0.0.0`. Inside a container that is necessary:
      │ a process bound to `127.0.0.1` is reachable only from inside the container, so
      │ the published port looks dead. It also means the app is reachable from every
      │ network the container is attached to.
      │
      │ **This interface has no authentication.** The compose file therefore publishes
      │ the port on `127.0.0.1` only. If you change that, put an authenticating proxy
      │ in front of it first — anything pasted into this page is, by definition,
      │ personal data.
      │
      │ `CLEANPROMPT_SECRET_KEY` is required and has no default. A default would be a
      │ published secret shared by every deployment, and it signs the session cookie
      │ that identifies which stored vault belongs to which browser.
      │
      │ ## Name detection
      │
      │ The default image does not include spaCy, so names, organisations and places
      │ are **not** detected. Rebuild with the `ner` layer to add it:
      │
      │ ```sh
      │ python -m scikitplot.cleanprompt docker --write . --with-ner
      │ docker compose up --build
      │ ```
      │
      │ Without it, use the suggestion panel in the interface, which lists capitalised
      │ candidates for you to hide explicitly.
      │
      │ ## Checking what is active
      │
      │ ```sh
      │ docker compose exec cleanprompt \
      │   python -m scikitplot.cleanprompt doctor --format json
      │ ```
  exit │ 0
launch lines: ['# Run:    docker run --rm -p 127.0.0.1:5000:5000 \\', 'docker run --rm -p 127.0.0.1:5000:5000 -e CLEANPROMPT_SECRET_KEY cleanprompt']
installed: ['&& python -m spacy download en_core_web_sm']
requested: ['CMD ["--ner", "--ner-engine", "spacy", "--ner-model", "en_core_web_sm"]']

```

The debugger refusal, with a secret key set so that is the only obstacle
left. It fails before any server starts:

```
refused = run(
    "flask", "--docker", "--debug", env={"CLEANPROMPT_SECRET_KEY": "k" * 64}
)
assert refused.returncode != 0
if "refusing --debug" not in refused.stderr:
    # The web tier is checked first; without Flask the command stops there.
    assert "pip install" in refused.stderr, refused.stderr
    print("[SKIP] the 'web' tier (Flask) is not installed, so the bind check is not reached")

```
```
$ cleanprompt flask --docker --debug
  err │ error: refusing --debug on '0.0.0.0': Flask's debug mode serves an interactive debugger that runs code typed into the browser, and this interface has no authentication. Use --debug only on 127.0.0.1 (the default without --docker), or drop --debug.
  exit │ 1

```

****The interactive session.**** `cleanprompt cli` is a paste-and-go terminal
loop that holds one vault for the whole session: paste a prompt, copy the
redacted version, paste the reply back, read the restored answer. It needs a
terminal, so it is shown rather than run. The transcript below is real
output, captured by driving the command with a pipe:

```
$ cleanprompt cli
CleanPrompt interactive session
  Paste your text, then press Ctrl-D on a blank line to submit.
  Commands: :hide TERM   :allow TERM   :suggest   :why   :again   :quit
  12 structural detectors are active. Names, organisations and places are NOT being detected.
  ! Names, organisations, places and other named entities
    fix: spaCy is installed with its model; enable it for this run (--ner ...)

Paste your text, then Ctrl-D:
Mail ada@example.com about the outage

--- send this ---
Mail [EMAIL-1] about the outage

placeholder  kind   count  detector
-----------  -----  -----  -----------
[EMAIL-1]    EMAIL  1      regex:EMAIL

cleanprompt>

```

Note the banner: the session says what it is ****blind to**** before you paste
anything, which is the one moment that warning is worth reading.

```
run("cli", "--help", limit=6)

```
```
$ cleanprompt cli --help
  out │ Usage: python -m scikitplot.cleanprompt cli [OPTIONS]
      │
      │   Paste text, get a redacted copy to send, paste the reply back, get your
      │   values restored. Everything stays in this process.
      │
      │ Options:
      │ ... (30 more)
  exit │ 0

CompletedProcess(args=['/home/circleci/.pyenv/versions/3.12.15/bin/scikitplot', 'cleanprompt', 'cli', '--help'], returncode=0, stdout="Usage: python -m scikitplot.cleanprompt cli [OPTIONS]\n\n  Paste text, get a redacted copy to send, paste the reply back, get your\n  values restored. Everything stays in this process.\n\nOptions:\n  --profile [balanced|minimal|strict]\n                                  Named policy bundle (default: balanced).\n  --config PATH                   Config file; by default .cleanprompt.toml or\n                                  cleanprompt.toml is searched upward.\n  -k, --kinds KIND                Detection kinds to enable; default is every\n                                  built-in pattern.\n  --hide TERM                     Additional exact strings to hide.\n  --allow TERM                    Surfaces that must never be redacted.\n  --word-boundary                 Match --hide terms only at word boundaries.\n  --ignore-case                   Treat values differing only in case as one\n                                  entity.\n  --ner                           Also run named-entity detection (requires\n                                  the 'ner' tier).\n  --ner-engine [auto|spacy|nltk|both|none]\n                                  Which entity engine: auto (spaCy, else\n                                  NLTK), spacy, nltk, both (union: higher\n                                  recall, more noise) or none.\n  --lang CODE                     Language for entity detection, e.g. en, de,\n                                  fr, es, ja. Unsupported codes fall back to\n                                  the multilingual model.\n  --model-size [sm|md|lg|trf]     Preferred spaCy model size (sm, md, lg,\n                                  trf).\n  --ner-model NAME                Explicit spaCy model, overriding --lang and\n                                  --model-size.\n  --overlap [LONGEST_WINS|PRIORITY_WINS|STRICT]\n                                  How to arbitrate overlapping detections.\n  --color [auto|always|never]     Colourise placeholders in terminal output.\n  --save-vault PATH               Also write the vault to a file when the\n                                  session ends.\n  -h, --help                      Show this message and exit.\n", stderr='')

```

## 8. Cleanup[#](#cleanup "Link to this heading")

```
run("forget", "--force")

os.environ.pop("CLEANPROMPT_VAULT", None)
_WORKSPACE.cleanup()

print("Temporary workspace cleaned:", not Path(_WORKSPACE.name).exists())

```
```
$ cleanprompt forget --force
  err │ no vault at <workspace>/vault.json; nothing to forget
  exit │ 0
Temporary workspace cleaned: True

```

Tags: [model-workflow: cleanprompt](../../_tags/model-workflow-cleanprompt.html) [plot-type: text](../../_tags/plot-type-text.html) [level: advanced](../../_tags/level-advanced.html) [purpose: reference](../../_tags/purpose-reference.html)

****Total running time of the script:**** (0 minutes 7.963 seconds)

[![Launch binder](../../_images/binder_badge_logo3.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cleanprompt/plot_cleanprompt_recipes_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo3.svg)](../../lite/lab/index.html?path=auto_examples/cleanprompt/plot_cleanprompt_recipes_script.ipynb)

[`Download Jupyter notebook: plot_cleanprompt_recipes_script.ipynb`](../../_downloads/d5883bfe2fcdc4b17f54535773ec735e/plot_cleanprompt_recipes_script.ipynb)

[`Download Python source code: plot_cleanprompt_recipes_script.py`](../../_downloads/f0483c34249693480f23a1e8bbdd30d8/plot_cleanprompt_recipes_script.py)

[`Download zipped: plot_cleanprompt_recipes_script.zip`](../../_downloads/a4f048f886303f63432a4c06497dd30c/plot_cleanprompt_recipes_script.zip)

Related examples

![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back![](../../_images/sphx_glr_plot_cleanprompt_cli_usage_script_thumb.png)

[Cleanprompt on the Command Line: Single Commands and Edge Cases](plot_cleanprompt_cli_usage_script.html)

Cleanprompt on the Command Line: Single Commands and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)