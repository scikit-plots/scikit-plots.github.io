# DownloadPolicy[#](#downloadpolicy "Link to this heading")

class scikitplot.corpus.DownloadPolicy(**name='secure'**, **timeout=30.0**, **max\_bytes=104857600**, **verify\_ssl=True**, **block\_private\_ips=True**, **max\_redirects=5**, **user\_agent='Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'**, **max\_retries=3**, **retry\_backoff=1.0**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L31)[#](#scikitplot.corpus.DownloadPolicy "Link to this definition")
:   Transport/resource policy shared by Corpus downloaders.

    This object intentionally contains no credentials, headers or destination
    paths, so it is safe to serialize in plans and diagnostics.

    Parameters:
    :   * ****name**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****timeout**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****user\_agent**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****max\_retries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****retry\_backoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))

    block\_private\_ips: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.DownloadPolicy.block_private_ips "Link to this definition")

    classmethod constrained()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L91)[#](#scikitplot.corpus.DownloadPolicy.constrained "Link to this definition")
    :   Return a smaller CI/docs-friendly resource budget.

        Return type:
        :   [**DownloadPolicy**](#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy")

    classmethod from\_config(**config**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L132)[#](#scikitplot.corpus.DownloadPolicy.from_config "Link to this definition")
    :   Build from JSON/YAML-shaped configuration with typo rejection.

        Parameters:
        :   ****config**** ([**Mapping**](https://docs.python.org/3/library/collections.abc.html#collections.abc.Mapping "(in Python v3.15)")**[**[**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")**,** [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")**]**)

        Return type:
        :   [**DownloadPolicy**](#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy")

    classmethod large\_files()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L103)[#](#scikitplot.corpus.DownloadPolicy.large_files "Link to this definition")
    :   Allow large transfers without relaxing TLS or SSRF protections.

        Return type:
        :   [**DownloadPolicy**](#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy")

    max\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 104857600[#](#scikitplot.corpus.DownloadPolicy.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 5[#](#scikitplot.corpus.DownloadPolicy.max_redirects "Link to this definition")

    max\_retries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") = 3[#](#scikitplot.corpus.DownloadPolicy.max_retries "Link to this definition")

    name: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'secure'[#](#scikitplot.corpus.DownloadPolicy.name "Link to this definition")

    retry\_backoff: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 1.0[#](#scikitplot.corpus.DownloadPolicy.retry_backoff "Link to this definition")

    classmethod secure()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L86)[#](#scikitplot.corpus.DownloadPolicy.secure "Link to this definition")
    :   Return the security-first library defaults.

        Return type:
        :   [**DownloadPolicy**](#scikitplot.corpus.DownloadPolicy "scikitplot.corpus._downloader._policy.DownloadPolicy")

    timeout: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") = 30.0[#](#scikitplot.corpus.DownloadPolicy.timeout "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L128)[#](#scikitplot.corpus.DownloadPolicy.to_dict "Link to this definition")
    :   Return a JSON-compatible policy representation.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    to\_kwargs()[[source]](https://github.com/scikit-plots/scikit-plots/blob/c051ecec/scikitplot/corpus/_downloader/_policy.py#L115)[#](#scikitplot.corpus.DownloadPolicy.to_kwargs "Link to this definition")
    :   Return constructor kwargs for downloader classes.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [**Any**](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.15)")]

    user\_agent: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") = 'Mozilla/5.0 (compatible; scikitplot-corpus/1.0; +https://github.com/scikit-plots/scikit-plots)'[#](#scikitplot.corpus.DownloadPolicy.user_agent "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = True[#](#scikitplot.corpus.DownloadPolicy.verify_ssl "Link to this definition")