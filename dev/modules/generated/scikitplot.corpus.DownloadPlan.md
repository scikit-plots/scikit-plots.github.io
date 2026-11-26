# DownloadPlan[#](#downloadplan "Link to this heading")

class scikitplot.corpus.DownloadPlan(**index**, **input\_url**, **url\_kind**, **downloader**, **output\_path**, **timeout**, **max\_bytes**, **verify\_ssl**, **block\_private\_ips**, **max\_redirects**, **youtube\_mode=None**, **youtube\_language=None**, **youtube\_include\_auto=None**, **github\_token\_configured=False**, **headers\_configured=False**, **max\_retries=None**, **retry\_backoff=None**)[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan "Link to this definition")
:   Side-effect-free dispatch plan for one URL.

    The plan contains only non-secret policy/provenance data. It does not
    resolve DNS, probe content type, allocate a temporary directory, import a
    remote SDK, or contact the network. Credential/header **presence** is visible
    without serializing their contents.

    Parameters:
    :   * ****index**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****input\_url**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****url\_kind**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****downloader**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"))
        * ****output\_path**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****timeout**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)"))
        * ****max\_bytes**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****verify\_ssl**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****block\_private\_ips**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****max\_redirects**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)"))
        * ****youtube\_mode**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****youtube\_language**** ([**str**](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") **|** **None**)
        * ****youtube\_include\_auto**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") **|** **None**)
        * ****github\_token\_configured**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****headers\_configured**** ([**bool**](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)"))
        * ****max\_retries**** ([**int**](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") **|** **None**)
        * ****retry\_backoff**** ([**float**](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") **|** **None**)

    block\_private\_ips: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.block_private_ips "Link to this definition")

    downloader: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.downloader "Link to this definition")

    github\_token\_configured: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.DownloadPlan.github_token_configured "Link to this definition")

    headers\_configured: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") = False[#](#scikitplot.corpus.DownloadPlan.headers_configured "Link to this definition")

    index: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.index "Link to this definition")

    input\_url: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.input_url "Link to this definition")

    max\_bytes: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.max_bytes "Link to this definition")

    max\_redirects: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.max_redirects "Link to this definition")

    max\_retries: [int](https://docs.python.org/3/builtins/functions.html#int "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.DownloadPlan.max_retries "Link to this definition")

    output\_path: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.output_path "Link to this definition")

    retry\_backoff: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.DownloadPlan.retry_backoff "Link to this definition")

    timeout: [float](https://docs.python.org/3/builtins/functions.html#float "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.timeout "Link to this definition")

    to\_dict()[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L79)[#](#scikitplot.corpus.DownloadPlan.to_dict "Link to this definition")
    :   Return a JSON-compatible representation without secret values.

        Return type:
        :   [dict](https://docs.python.org/3/builtins/stdtypes.html#dict "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)"), [object](https://docs.python.org/3/builtins/functions.html#object "(in Python v3.15)")]

    url\_kind: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.url_kind "Link to this definition")

    verify\_ssl: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)")[[source]](https://github.com/scikit-plots/scikit-plots/blob/740e0f58/scikitplot/corpus/_downloader/_downloader.py#L50)[#](#scikitplot.corpus.DownloadPlan.verify_ssl "Link to this definition")

    youtube\_include\_auto: [bool](https://docs.python.org/3/builtins/functions.html#bool "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.DownloadPlan.youtube_include_auto "Link to this definition")

    youtube\_language: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.DownloadPlan.youtube_language "Link to this definition")

    youtube\_mode: [str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)") | [None](https://docs.python.org/3/builtins/constants.html#None "(in Python v3.15)") = None[#](#scikitplot.corpus.DownloadPlan.youtube_mode "Link to this definition")