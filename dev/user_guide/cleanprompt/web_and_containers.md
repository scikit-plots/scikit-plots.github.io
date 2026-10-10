# The web page and containers[#](#the-web-page-and-containers "Link to this heading")

`flask` serves a paste-and-go page: paste a prompt, copy the redacted
version, paste the model’s reply back, read the restored answer. It needs the
`web` tier (Flask).

```
pip install "scikit-plots[cleanprompt-web]"
python -m scikitplot.cleanprompt flask --open

```

The page shows what is ****not**** being detected before you paste anything — the
one moment that warning is worth reading.

## How it keeps your data[#](#how-it-keeps-your-data "Link to this heading")

* The vault stays on the server, in a bounded, expiring store keyed by an
  opaque token. The cookie carries the token and nothing else.
* Every form carries a CSRF token, compared in constant time.
* The session key is configuration. Without `CLEANPROMPT_SECRET_KEY` a
  local run uses a per-process key (sessions end with the process), and
  container mode refuses to start.
* Entity detection uses the same engine selection as every other surface:
  `flask --ner --ner-engine nltk --lang en` runs exactly that, and a request
  the machine cannot meet refuses to start with the remedy, instead of serving
  a page whose banner claims names are being found.

## Who can reach it[#](#who-can-reach-it "Link to this heading")

| Command | Bind and exposure |
| --- | --- |
| `flask` | `127.0.0.1`: only this machine |
| `flask --host 192.0.2.10` | refused: reachable from other machines, no authentication |
| `flask --host 192.0.2.10 --allow-remote` | allowed, and the banner names the exposure |
| `flask --docker` | `0.0.0.0` inside a container, which a published port needs |

****Debug mode is loopback only.**** Flask’s debug mode serves an interactive
debugger that runs Python typed into the browser. `--debug` is therefore
refused with `--docker` or any non-loopback `--host`, whatever else is
acknowledged: `--allow-remote` accepts that the **page** is reachable, not
that **code execution** is.

This is Flask’s development server: right for one person on one machine,
wrong for a shared deployment. A shared deployment needs authentication, TLS
and a production server in front of it, which this command does not provide.

## Container files[#](#container-files "Link to this heading")

```
python -m scikitplot.cleanprompt docker --write ./deploy
python -m scikitplot.cleanprompt docker --write ./deploy --with-ner

```

This writes a `Dockerfile`, a `docker-compose.yml`, a `.dockerignore` and
a `README.md`. Everything in them is derived from the runtime:

* ****Loopback publishing.**** Both the compose file and the `docker run` line
  publish `127.0.0.1:PORT:PORT`. Docker’s `-p PORT:PORT` without an
  address publishes on every interface of the host — do not shorten it.
* ****The model it installs is the model it runs.**** With `--with-ner` the
  image downloads the model the runtime resolves (`en_core_web_sm` by
  default) and starts with `--ner --ner-engine spacy --ner-model` naming
  that same model, so the two cannot drift apart.
* ****A secret key with no default.**** `CLEANPROMPT_SECRET_KEY` is required; a
  default would be a published secret shared by every deployment.
* ****Least privilege.**** The image runs as a non-root user; the compose file
  mounts the filesystem read-only, drops every capability and sets
  `no-new-privileges`. `.dockerignore` keeps vault files out of the image.

```
export CLEANPROMPT_SECRET_KEY="$(python -c 'import secrets;print(secrets.token_hex(32))')"
docker compose -f deploy/docker-compose.yml up --build
# then open http://127.0.0.1:5000

```

From Python, `container_files` returns the
same files as strings and takes `language` and `model_size` for the model
layer.

## The terminal session[#](#the-terminal-session "Link to this heading")

`cli` is the same loop in a terminal, holding one vault for the session:

```
$ python -m scikitplot.cleanprompt cli
CleanPrompt interactive session
  Paste your text, then press Ctrl-D on a blank line to submit.
  Commands: :hide TERM   :allow TERM   :suggest   :why   :again   :quit

```