# Cleanprompt[#](#cleanprompt "Link to this heading")

Examples for [`cleanprompt`](../../apis/scikitplot.cleanprompt.html#module-scikitplot.cleanprompt "scikitplot.cleanprompt") are ordered as a learning path.
The submodule replaces sensitive values in a text with stable placeholders
before that text is sent to a language model, and puts the values back
afterwards:

```
your text
    ↓
detect        regular expressions, and optionally named entities
    ↓
assign        one stable label per distinct value
    ↓
rewrite       a single pass over the original text
    ↓
── the model ──   the only hop this submodule does not control
    ↓
restore       the labels become the values again

```
```
# The base tier needs nothing beyond the standard library
pip install scikit-plots

# Optional tiers, each independent of the others
# spaCy entity detection, NLTK entity detection, local Flask interface, the Fernet vault cipher
pip install scikit-plots[cleanprompt]

# The same two scripts serve Docker images, the devcontainer and
# the documentation build; see their headers for the options.
bash docker/scripts/install_nltk.sh
bash docker/scripts/install_spacy.sh

# What is active on this machine, and what is blind
python -m scikitplot.cleanprompt doctor

```
> **See also**
> * [takashiishida/cleanprompt](https://github.com/takashiishida/cleanprompt) — the upstream project this
  submodule was restructured from.
* [Mcp](../mcp/index.html#mcp-examples) — the other submodule with a centrally registered CLI.

## Start here[#](#start-here "Link to this heading")

1. ****Basics**** — hide one value, send the prompt, get the value back. The whole
   loop in four commands and four function calls.
2. ****The command line**** — every input route, the option grammar, exit codes,
   and the edge cases that bite: a pasted paragraph, a dash-leading value,
   `--`, abbreviations, pipes, and a closed pipe.
3. ****The Python API**** — [`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode")/[`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode"), [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session"),
   [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor"), and what each one does when the input is degenerate.
4. ****Notebooks and modules**** — send a whole `.ipynb` or `.py`: the schema
   renamed role by role, paths and rendered data removed, and the code still
   readable enough for a model to help with.
5. ****Moderate**** — policies and profiles, the vault lifecycle, append versus
   overwrite, entity engines and whether they are **ready** (package, language
   and data), languages, and the surrogate style.
6. ****Advanced**** — custom detectors, overlap arbitration, vault encryption
   without a compiled dependency, the lossy model hop, values written with
   invisible or full-width characters, and the nine core runtime invariants.
7. ****Recipes**** — a CI gate, a notebook helper, a logging filter, a batch
   pipeline, an agent loop, and container files that stay on loopback.
8. ****Packs and formats**** — records, configs and whole folders: YAML packs that
   read field names (`mrn`, `DB_PASSWORD`, `member_id`), formats from
   CSV to Word to zip, the fluent plan (`all`, one domain, or any
   combination), your own pack from a JSON or YAML file (and why a pack file
   is trusted like code), and the corpus bridge.
9. ****A gate for any model or agent**** — [`Guard`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard") in front of any client:
   checked outgoing text, chat messages, tool calls, streamed replies,
   `ask --via` for command-line models, the agent skill, the MCP server for
   agents without code, plan files a team pins, and audit logs that record what
   left without keeping what was removed.

## Which surface should I use?[#](#which-surface-should-i-use "Link to this heading")

| Goal | Start with |
| --- | --- |
| Paste a prompt into a chat window by hand | `cleanprompt encode` / `cleanprompt decode` |
| See what **would** be removed, changing nothing | `cleanprompt inspect` |
| Fail a build when a file contains sensitive values | `cleanprompt scan` |
| One call in an application | [`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") and [`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode") |
| A multi-turn conversation with one stable vault | [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session"), usually as a `with` block |
| Full control of detectors, overlap and limits | [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor") with a [`RedactionPolicy`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy") |
| Add a detector of your own | [`RegexDetector`](../../modules/generated/scikitplot.cleanprompt.RegexDetector.html#scikitplot.cleanprompt.RegexDetector "scikitplot.cleanprompt.RegexDetector") / [`LiteralDetector`](../../modules/generated/scikitplot.cleanprompt.LiteralDetector.html#scikitplot.cleanprompt.LiteralDetector "scikitplot.cleanprompt.LiteralDetector") in a [`DetectorRegistry`](../../modules/generated/scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt.DetectorRegistry") |
| Send a notebook, a module or any analysis file | `cleanprompt encode --in analysis.ipynb --out analysis.clean.ipynb` |
| See a file’s schema before sending it | `cleanprompt inspect --in analysis.ipynb` |
| Records, configs, Office files, a whole folder or a zip | [`FluentCleanPrompt`](../../modules/generated/scikitplot.cleanprompt.FluentCleanPrompt.html#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt.FluentCleanPrompt") → [`Cleaner`](../../modules/generated/scikitplot.cleanprompt.Cleaner.html#scikitplot.cleanprompt.Cleaner "scikitplot.cleanprompt.Cleaner"), or `cleanprompt batch SRC --out DST` |
| Hide your own domain’s fields | a pack file: `cleanprompt batch --pack-file hr.yaml --pack hr` |
| Make corpus documents safe before indexing | `redact_documents` |
| Put any model, SDK or agent behind one privacy gate | [`Guard`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard") (`FluentCleanPrompt().guard()`) |
| Guard a command-line model (`ollama`, `llm`, …) | `cleanprompt ask --via "COMMAND"` |
| Teach an AI assistant to use it | `cleanprompt skill --write DIR` |
| Give any MCP agent the gate, without code | `cleanprompt mcp --root PROJECT` |
| Pin a team’s packs and rules, and fail CI when they drift | `cleanprompt plan --write` / `--check`, and `--plan FILE` |

## Capability matrix[#](#capability-matrix "Link to this heading")

The base tier imports ****no third-party package****, so the normal gallery path
runs on a bare installation. Optional capabilities are preflighted and reported
as a visible `SKIP` when unavailable, never silently omitted.

| Example | Normal path | Optional capability | Behavior when unavailable |
| --- | --- | --- | --- |
| Basics | standard library | none | not applicable |
| Command line | standard library | `click` frontend | falls back to `argparse`; parity is asserted either way |
| Python API | standard library | none | not applicable |
| Notebooks and modules | standard library | none | not applicable |
| Moderate | standard library | spaCy / NLTK entity engines | specific `SKIP` per engine; the pattern half still runs |
| Advanced | standard library | `cryptography` for `--cipher fernet` | the `portable` cipher runs regardless; Fernet section `SKIP` |
| Recipes | standard library | Flask for the web recipe | configuration shown, server not started |
| Packs and formats | standard library (packs are compiled JSON) | PyYAML for YAML packs; [`scikitplot.corpus`](../../apis/scikitplot.corpus.html#module-scikitplot.corpus "scikitplot.corpus") for the bridge | JSON packs still shown; specific `SKIP` for each |
| A gate for any model | standard library | none (the model is a stand-in function) | not applicable |

## Gallery reliability rule[#](#gallery-reliability-rule "Link to this heading")

The examples distinguish optional capability absence from real defects:

`missing optional package, model or data package`
:   Report a visible, specific `SKIP` and continue when the example can
    remain truthful.

`invalid public API / failed round trip / a value surviving into the redacted text`
:   Fail visibly. The gallery must not convert a leak or a regression into a
    skip, because the one property this submodule sells is that the value did
    not go to the model.

Every example asserts its own round trip. An example that prints a redacted
prompt has already checked that the original value is absent from it.

## Where the vault goes during a documentation build[#](#where-the-vault-goes-during-a-documentation-build "Link to this heading")

A vault holds the ****removed values in clear text****. Left to itself the CLI
writes one into the platform state directory —
`$XDG_STATE_HOME/cleanprompt/vault.json` on Linux,
`%LOCALAPPDATA%\cleanprompt\` on Windows — which is right for a person at a
terminal and wrong for a documentation builder.

Every script here therefore points `CLEANPROMPT_VAULT` at a
[`TemporaryDirectory`](https://docs.python.org/3/library/tempfile.html#tempfile.TemporaryDirectory "(in Python v3.15)") in its first cell and removes it in its
last. Nothing a gallery run produces outlives the build, and nothing is written
next to the source tree, where a `git add .` could commit it.

## Reading the examples is not the same as running them[#](#reading-the-examples-is-not-the-same-as-running-them "Link to this heading")

The redacted prompts printed by these examples contain no real values: the
addresses use the reserved `example.com` and `example.invalid` domains
([****RFC 2606****](https://datatracker.ietf.org/doc/html/rfc2606.html)), the telephone numbers the North American fiction block
`+1 555 0100`–`0199`, the addresses the documentation ranges
`192.0.2.0/24` ([****RFC 5737****](https://datatracker.ietf.org/doc/html/rfc5737.html)) and `2001:db8::/32` ([****RFC 3849****](https://datatracker.ietf.org/doc/html/rfc3849.html)), and the
card number the publicly published test value.

Use the same discipline in your own examples and tests. A tutorial that leaks a
real value has undone the thing it was teaching.

## Browser / WASM note[#](#browser-wasm-note "Link to this heading")

The base tier is pure Python and has no filesystem requirement beyond the vault
path, so pattern detection, the API and the placeholder round trip are strong
JupyterLite candidates. Subprocess execution, the platform state directory,
`getpass` prompts, native spaCy models, NLTK data downloads and a listening
Flask server should not be assumed available in a browser runtime.

The examples that shell out to the CLI say so, and the equivalent Python call
is shown beside every one of them.

![](../../_images/sphx_glr_plot_cleanprompt_advanced_script_thumb.png)

[Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop](plot_cleanprompt_advanced_script.html)

Cleanprompt Advanced: Invariants, Encryption, and the Lossy Model Hop![](../../_images/sphx_glr_plot_cleanprompt_basics_script_thumb.png)

[Cleanprompt Basics: Hide a Value, Then Get It Back](plot_cleanprompt_basics_script.html)

Cleanprompt Basics: Hide a Value, Then Get It Back![](../../_images/sphx_glr_plot_cleanprompt_cli_usage_script_thumb.png)

[Cleanprompt on the Command Line: Single Commands and Edge Cases](plot_cleanprompt_cli_usage_script.html)

Cleanprompt on the Command Line: Single Commands and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_guard_agents_script_thumb.png)

[Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves](plot_cleanprompt_guard_agents_script.html)

Cleanprompt as a Gate: Any Model, Any Agent, Nothing Private Leaves![](../../_images/sphx_glr_plot_cleanprompt_moderate_script_thumb.png)

[Cleanprompt Moderate: Policies, Entities, and the Vault’s Lifecycle](plot_cleanprompt_moderate_script.html)

Cleanprompt Moderate: Policies, Entities, and the Vault's Lifecycle![](../../_images/sphx_glr_plot_cleanprompt_notebooks_script_thumb.png)

[Cleanprompt for Notebooks: Sending an Analysis Without Sending the Data](plot_cleanprompt_notebooks_script.html)

Cleanprompt for Notebooks: Sending an Analysis Without Sending the Data![](../../_images/sphx_glr_plot_cleanprompt_packs_formats_script_thumb.png)

[Cleanprompt Packs and Formats: Records, Configs and Whole Folders](plot_cleanprompt_packs_formats_script.html)

Cleanprompt Packs and Formats: Records, Configs and Whole Folders![](../../_images/sphx_glr_plot_cleanprompt_python_api_script_thumb.png)

[Cleanprompt from Python: Single Calls and Edge Cases](plot_cleanprompt_python_api_script.html)

Cleanprompt from Python: Single Calls and Edge Cases![](../../_images/sphx_glr_plot_cleanprompt_recipes_script_thumb.png)

[Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents](plot_cleanprompt_recipes_script.html)

Cleanprompt Recipes: CI Gates, Notebooks, Pipelines and Agents