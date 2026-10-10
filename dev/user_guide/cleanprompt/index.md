# CleanPrompt User Guide[#](#cleanprompt-user-guide "Link to this heading")

CleanPrompt is the local privacy boundary in [`scikitplot.cleanprompt`](../../apis/scikitplot.cleanprompt.html#module-scikitplot.cleanprompt "scikitplot.cleanprompt").
It replaces values that its active detectors identify with stable placeholders
(or, when explicitly requested, selected surrogate values) before text leaves
your process, then restores the original values after a reply comes back.

The base tier is implemented with the Python standard library. Optional tiers
add named-entity detection, a local web interface, and the Fernet vault cipher.
The base package can therefore be imported and used without loading those
third-party packages.

> **Important**
> CleanPrompt protects values that it ****detects or that you explicitly tell it
to hide****. It is not a proof that arbitrary text contains no sensitive
information. Run `doctor` to see which detection surfaces are active and
`inspect` when you need to review what a particular input would expose.
[What it protects, and what it does not](security_and_limits.html#cleanprompt-security) lists what is and is not covered.

## The whole idea in one picture[#](#the-whole-idea-in-one-picture "Link to this heading")

```
original text
    |
    v
detect -> assign stable labels -> rewrite
    |                              |
    |                              +---- safe text ----> model / tool / agent
    |
    +---- handle / vault stays local
                                   |
                        model reply v
                              restore
                                   |
                                   v
                            local clear text

```

Two kinds of state come out of every redaction, and they go to different
places. The ****redacted text**** is meant to cross the model boundary. The
****vault**** (inside a [`Handle`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt.Handle") in the high-level API) holds the removed
values; it is the authority to restore them and ****must not be sent with the
prompt****. Treat a [`Handle`](../../modules/generated/scikitplot.cleanprompt.Handle.html#scikitplot.cleanprompt.Handle "scikitplot.cleanprompt.Handle") or [`Vault`](../../modules/generated/scikitplot.cleanprompt.Vault.html#scikitplot.cleanprompt.Vault "scikitplot.cleanprompt.Vault") like a secret.

## Thirty seconds[#](#thirty-seconds "Link to this heading")

```
from scikitplot.cleanprompt import encode, decode

encoded = encode("Mail ada@example.com about the Acme renewal", hide=["Acme"])
encoded.text
# 'Mail [EMAIL-1] about the [CUSTOM-1] renewal'
decode("I will contact [EMAIL-1] about [CUSTOM-1].", encoded.handle)
# 'I will contact ada@example.com about Acme.'

```

From a terminal, the same pair needs no paths at all:

```
python -m scikitplot.cleanprompt encode "Mail ada@example.com about the renewal"
python -m scikitplot.cleanprompt decode "I will contact [EMAIL-1]."

```

## Which surface should I use?[#](#which-surface-should-i-use "Link to this heading")

| Goal | Start with |
| --- | --- |
| One prompt/reply exchange in Python | [`encode`](../../modules/generated/scikitplot.cleanprompt.encode.html#scikitplot.cleanprompt.encode "scikitplot.cleanprompt.encode") and [`decode`](../../modules/generated/scikitplot.cleanprompt.decode.html#scikitplot.cleanprompt.decode "scikitplot.cleanprompt.decode") ([The Python API](python_api.html#cleanprompt-python-api)) |
| A multi-turn conversation with stable labels | [`Session`](../../modules/generated/scikitplot.cleanprompt.Session.html#scikitplot.cleanprompt.Session "scikitplot.cleanprompt.Session") or [`session`](../../modules/generated/scikitplot.cleanprompt.session-func.html#scikitplot.cleanprompt.session "scikitplot.cleanprompt.session") |
| Full control over policy and detectors | [`Redactor`](../../modules/generated/scikitplot.cleanprompt.Redactor.html#scikitplot.cleanprompt.Redactor "scikitplot.cleanprompt.Redactor"), [`RedactionPolicy`](../../modules/generated/scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt.RedactionPolicy"), [`DetectorRegistry`](../../modules/generated/scikitplot.cleanprompt.DetectorRegistry.html#scikitplot.cleanprompt.DetectorRegistry "scikitplot.cleanprompt.DetectorRegistry") |
| Paste text into a chat by hand | `cleanprompt encode` and `cleanprompt decode` ([The command line](command_line.html#cleanprompt-command-line)) |
| Preview what would be removed | `cleanprompt inspect` |
| Fail CI when findings are present | `cleanprompt scan` |
| Names, organisations and places | the entity engines ([Names, organisations and places](entity_detection.html#cleanprompt-entity-detection)) |
| Files, records, folders, Office documents, or archives | [`FluentCleanPrompt`](../../modules/generated/scikitplot.cleanprompt.FluentCleanPrompt.html#scikitplot.cleanprompt.FluentCleanPrompt "scikitplot.cleanprompt.FluentCleanPrompt") / `cleanprompt batch` ([Files, records, packs and plans](files_and_packs.html#cleanprompt-files-and-packs)) |
| Put a privacy gate in front of a model client | [`Guard`](../../modules/generated/scikitplot.cleanprompt.Guard.html#scikitplot.cleanprompt.Guard "scikitplot.cleanprompt.Guard") ([Models, tools and agents](agents_and_models.html#cleanprompt-agents)) |
| Guard an arbitrary command-line model | `cleanprompt ask --via "COMMAND"` |
| Give an MCP agent a local redaction boundary | `cleanprompt mcp` |
| Pin team configuration and detect definition drift | `cleanprompt plan` |
| A browser page, locally or in a container | `cleanprompt flask` / `cleanprompt docker` ([The web page and containers](web_and_containers.html#cleanprompt-web-and-containers)) |
| Check installation and optional capabilities | [`capabilities`](../../modules/generated/scikitplot.cleanprompt.capabilities.html#scikitplot.cleanprompt.capabilities "scikitplot.cleanprompt.capabilities") / `cleanprompt doctor` |

## How this guide is organised[#](#how-this-guide-is-organised "Link to this heading")

Read the first two pages in order; after that, go to the page for the job in
front of you.

* [Getting started](getting_started.html)
  * [Install](getting_started.html#install)
  * [Check what is active](getting_started.html#check-what-is-active)
  * [The loop, once, in the terminal](getting_started.html#the-loop-once-in-the-terminal)
  * [The loop, once, in Python](getting_started.html#the-loop-once-in-python)
  * [Where to next](getting_started.html#where-to-next)
* [How it works](how_it_works.html)
  * [1. Detect](how_it_works.html#detect)
  * [2. Resolve](how_it_works.html#resolve)
  * [3. Assign](how_it_works.html#assign)
  * [4. Rewrite](how_it_works.html#rewrite)
  * [5. Restore](how_it_works.html#restore)
  * [Placeholders or surrogates](how_it_works.html#placeholders-or-surrogates)
  * [The guarantees, in plain words](how_it_works.html#the-guarantees-in-plain-words)
* [The Python API](python_api.html)
  * [One exchange: `encode` and `decode`](python_api.html#one-exchange-encode-and-decode)
  * [A conversation: `Session`](python_api.html#a-conversation-session)
  * [Full control: `Redactor` and `restore`](python_api.html#full-control-redactor-and-restore)
  * [Diagnosis in Python](python_api.html#diagnosis-in-python)
* [The command line](command_line.html)
  * [The commands](command_line.html#the-commands)
  * [Giving it text](command_line.html#giving-it-text)
  * [The option grammar](command_line.html#the-option-grammar)
  * [The vault on the command line](command_line.html#the-vault-on-the-command-line)
  * [Reading a reply](command_line.html#reading-a-reply)
  * [Exit status](command_line.html#exit-status)
  * [A CI gate](command_line.html#a-ci-gate)
* [Names, organisations and places](entity_detection.html)
  * [The two engines](entity_detection.html#the-two-engines)
  * [Installed is not ready](entity_detection.html#installed-is-not-ready)
  * [Languages and model sizes](entity_detection.html#languages-and-model-sizes)
  * [When the engines disagree](entity_detection.html#when-the-engines-disagree)
  * [Behind a proxy](entity_detection.html#behind-a-proxy)
* [Files, records, packs and plans](files_and_packs.html)
  * [Packs and formats](files_and_packs.html#packs-and-formats)
  * [A plan for a set of files](files_and_packs.html#a-plan-for-a-set-of-files)
  * [Pinning a team’s configuration](files_and_packs.html#pinning-a-team-s-configuration)
  * [Your own pack](files_and_packs.html#your-own-pack)
  * [Before sending a record to a model](files_and_packs.html#before-sending-a-record-to-a-model)
* [Models, tools and agents](agents_and_models.html)
  * [A gate in front of any client](agents_and_models.html#a-gate-in-front-of-any-client)
  * [Command-line models](agents_and_models.html#command-line-models)
  * [Agents without code: MCP](agents_and_models.html#agents-without-code-mcp)
  * [Logging without leaking](agents_and_models.html#logging-without-leaking)
  * [What a guard does not do](agents_and_models.html#what-a-guard-does-not-do)
* [The web page and containers](web_and_containers.html)
  * [How it keeps your data](web_and_containers.html#how-it-keeps-your-data)
  * [Who can reach it](web_and_containers.html#who-can-reach-it)
  * [Container files](web_and_containers.html#container-files)
  * [The terminal session](web_and_containers.html#the-terminal-session)
* [What it protects, and what it does not](security_and_limits.html)
  * [What is guaranteed](security_and_limits.html#what-is-guaranteed)
  * [What is not guaranteed](security_and_limits.html#what-is-not-guaranteed)
  * [Things you are trusted with](security_and_limits.html#things-you-are-trusted-with)
* [Troubleshooting and questions](troubleshooting.html)
  * [When output is surprising](troubleshooting.html#when-output-is-surprising)
  * [Questions](troubleshooting.html#questions)
  * [Examples and API reference](troubleshooting.html#examples-and-api-reference)

The executable gallery, [Cleanprompt](../../auto_examples/cleanprompt/index.html#cleanprompt-examples), follows the same path with
code you can run: basics, the command line, the Python API, notebooks, then
moderate and advanced topics, recipes, packs and formats, and agents.

> **See also**
> * [Cleanprompt](../../auto_examples/cleanprompt/index.html#cleanprompt-examples)
* [Corpus User Guide](../corpus/index.html#corpus-index)
* [`scikitplot.cleanprompt`](../../apis/scikitplot.cleanprompt.html#module-scikitplot.cleanprompt "scikitplot.cleanprompt")