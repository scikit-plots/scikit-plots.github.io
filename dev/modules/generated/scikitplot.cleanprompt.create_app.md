# create\_app[#](#create-app "Link to this heading")

scikitplot.cleanprompt.create\_app(**policy=None**, **secret\_key=None**, **ephemeral\_secret\_key=False**, **store=None**, **enable\_ner=False**, **ner\_model=None**, **ner\_engine='auto'**, **language='en'**, **model\_size='sm'**, **hide\_terms=()**, **word\_boundary=False**, **session\_cookie\_secure=False**, **config=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/de98219d/scikitplot/cleanprompt/_app.py#L238)[#](#scikitplot.cleanprompt.create_app "Link to this definition")
:   Build the Flask application.

    Parameters:
    :   ****policy****RedactionPolicy, optional
        :   Redaction configuration. Defaults to
            `DEFAULT_POLICY`.

        ****secret\_key****str, optional
        :   Flask session signing key. Falls back to `CLEANPROMPT_SECRET_KEY`.

        ****ephemeral\_secret\_key****bool, default=False
        :   Permit a per-process random key when none is configured. Sessions then
            do not survive a restart and do not work across workers.

        ****store****SessionStore, optional
        :   Vault store. A new bounded store is created when omitted.

        ****enable\_ner****bool, default=False
        :   Also run named-entity detection, with the engine `ner_engine`
            selects. Every selected engine must be ready (package, language and
            data), or the app refuses to start.

        ****ner\_model****str, optional
        :   Explicit spaCy model, overriding `language` and `model_size`.

        ****ner\_engine****str, default=’auto’
        :   Entity engine: `auto`, `spacy`, `nltk`, `both` or `none`.

        ****language****str, default=’en’
        :   Language code for entity detection.

        ****model\_size****str, default=’sm’
        :   Preferred spaCy model size.

        ****hide\_terms****tuple of str, default=()
        :   Exact strings hidden on every request, in addition to whatever the
            visitor types into the form.

        ****word\_boundary****bool, default=False
        :   Whether `hide_terms` match only at word boundaries.

        ****session\_cookie\_secure****bool, default=False
        :   Set the `Secure` cookie flag. Defaults to `False` because the app
            is served over plain HTTP on loopback; set it when placing the app
            behind TLS.

        ****config****dict, optional
        :   Extra Flask configuration applied last.

    Returns:
    :   flask.Flask
        :   The configured application.

    Raises:
    :   CapabilityError
        :   If the `web` tier is unavailable, or `enable_ner` is set and the
            requested entity engine is not ready; the message names each engine’s
            reason and remedy.

        PolicyError
        :   If no secret key is configured and `ephemeral_secret_key` is not set.

    Parameters:
    :   * ****policy**** ([**RedactionPolicy**](scikitplot.cleanprompt.RedactionPolicy.html#scikitplot.cleanprompt.RedactionPolicy "scikitplot.cleanprompt._policy.RedactionPolicy") **|** **None**)
        * ****secret\_key**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****ephemeral\_secret\_key**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****store**** ([**SessionStore**](scikitplot.cleanprompt.SessionStore.html#scikitplot.cleanprompt.SessionStore "scikitplot.cleanprompt._app.SessionStore") **|** **None**)
        * ****enable\_ner**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****ner\_model**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****ner\_engine**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****model\_size**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****hide\_terms**** ([**tuple**](https://docs.python.org/3/builtins/stdtypes.html#tuple "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** **...****]**)
        * ****word\_boundary**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****session\_cookie\_secure**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****config**** ([**dict**](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]** **|** **None**)

    Return type:
    :   [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")

    Notes

    ****Developer notes.**** Every route is registered on a local `app`; there is
    no module-level application object, so importing this module has no side
    effects and a test can build as many isolated apps as it needs.