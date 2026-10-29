> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-ipymagic-plot-ipymagic-scikit-plots-profiler-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Profile a Notebook Cell with `%%scikitplot_profile`[#](#profile-a-notebook-cell-with-scikitplot-profile "Link to this heading")

`%scikitplot_profile` (a line) and `%%scikitplot_profile` (a cell) run
code under `cProfile` and show the functions that took the time, as a
table that is also data. The steps:

1. profile a line, then a cell, and read the table;
2. sort and limit (`-s`, `-l`) and use the rows as data;
3. save the statistics (`-D`) for [`pstats`](https://docs.python.org/3/library/pstats.html#module-pstats "(in Python v3.15)") or snakeviz;
4. code that raises: the profile up to the error, then the error;
5. one profiler per process: a second one is refused, not stacked;
6. the interactive viewer (snakeviz, opt in).

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```

## Some code worth profiling[#](#some-code-worth-profiling "Link to this heading")

A small, deterministic workload: a slow pure-Python function and a fast
built-in doing the same job.

```
import cProfile
import os
import pstats
import shutil
import tempfile
from pathlib import Path

from scikitplot._ipymagic import ProfilerBusyError, profile_code

# In a notebook (this page's download), load the magics so the ``%%`` cells
# below run; a plain script has no IPython and skips this.
_shell = globals().get("get_ipython", lambda: None)()
if _shell is not None:
    _shell.run_line_magic("load_ext", "scikitplot")


def slow_sum_of_squares(n):
    """Sum the squares below ``n`` in a Python loop."""
    total = 0
    for value in range(n):
        total += value * value
    return total


def fast_sum_of_squares(n):
    """Sum the squares below ``n`` with the built-in ``sum``."""
    return sum(value * value for value in range(n))


namespace = {
    "slow_sum_of_squares": slow_sum_of_squares,
    "fast_sum_of_squares": fast_sum_of_squares,
}

```

## Profile a line[#](#profile-a-line "Link to this heading")

```
%scikitplot_profile slow_sum_of_squares(200_000)

```

The magic runs the line in the notebook’s namespace; here
`profile_code` gets the namespace explicitly. It returns the
`ProfileResult` and what the code raised (None).

```
result, error = profile_code("slow_sum_of_squares(200_000)", namespace, limit=5)
print(result.to_text())
assert error is None

```
```
3 calls in 0.0389 s; 3 of 3 functions by cumulative

      ncalls    tottime    cumtime  function
           1   0.000032   0.038872  <built-in method builtins.exec>
           1   0.000002   0.038839  <string>:1(<module>)
           1   0.038837   0.038837  /home/circleci/repo/galleries/examples/ipymagic/plot_ipymagic_scikit-plots_profiler.py:45(slow_sum_of_squares)

```

## Profile a cell, sorted by call count[#](#profile-a-cell-sorted-by-call-count "Link to this heading")

```
%%scikitplot_profile -s ncalls -l 4
slow_sum_of_squares(50_000)
fast_sum_of_squares(50_000)

```

`-s` is `cumulative` (default), `tottime` or `ncalls`; `-l` the
number of rows. Equal values are ordered by location, so the same run
gives the same table.

```
cell = "slow_sum_of_squares(50_000)\nfast_sum_of_squares(50_000)\n"
result, _ = profile_code(cell, namespace, sort="ncalls", limit=4)
print(result.to_text())

```
```
50006 calls in 0.0247 s; 4 of 6 functions by ncalls

      ncalls    tottime    cumtime  function
       50001   0.007353   0.007353  /home/circleci/repo/galleries/examples/ipymagic/plot_ipymagic_scikit-plots_profiler.py:55(<genexpr>)
           1   0.010468   0.010468  /home/circleci/repo/galleries/examples/ipymagic/plot_ipymagic_scikit-plots_profiler.py:45(slow_sum_of_squares)
           1   0.000006   0.014144  /home/circleci/repo/galleries/examples/ipymagic/plot_ipymagic_scikit-plots_profiler.py:53(fast_sum_of_squares)
           1   0.000004   0.024616  <string>:1(<module>)

```

The rows are data: the generator expression of the fast version is called
once per value, which is where its calls go.

```
top = result.rows[0]
print(f"most calls: {top.function}, {top.ncalls} calls, line {top.line}")
print("as a dict:", sorted(result.to_dict()))

```
```
most calls: <genexpr>, 50001 calls, line 55
as a dict: ['functions', 'limit', 'rows', 'sort', 'stats_file', 'total_calls', 'total_time']

```

## Save the statistics[#](#save-the-statistics "Link to this heading")

```
%%scikitplot_profile -D run.prof
slow_sum_of_squares(100_000)

```

The file is ordinary [`pstats`](https://docs.python.org/3/library/pstats.html#module-pstats "(in Python v3.15)") data: `python -m pstats run.prof`,
snakeviz, or any tool that reads `cProfile` output. Quote a path with
spaces: `-D "my run.prof"`.

```
work = Path(tempfile.mkdtemp(prefix="skplt-profile-"))
stats_file = work / "my run.prof"
result, _ = profile_code(
    "slow_sum_of_squares(100_000)", namespace, stats_file=str(stats_file)
)
print("written:", Path(result.stats_file).name)
pstats.Stats(str(stats_file)).sort_stats("cumulative").print_stats(2)

```
```
written: my run.prof
Thu Oct 29 06:16:52 2026    /tmp/skplt-profile-n7m36n2f/my run.prof

         4 function calls in 0.011 seconds

   Ordered by: cumulative time
   List reduced from 4 to 2 due to restriction <2>

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.000    0.000    0.011    0.011 {built-in method builtins.exec}
        1    0.000    0.000    0.011    0.011 <string>:1(<module>)



<pstats.Stats object at 0x7bc00152c590>

```

## Code that raises[#](#code-that-raises "Link to this heading")

The profile is kept up to the error; the magic shows the table, then
raises the error as the cell’s own:

```
result, error = profile_code("slow_sum_of_squares(10_000); 1 / 0", namespace)
print("raised:", type(error).__name__, "| calls profiled:", result.total_calls)

```
```
raised: ZeroDivisionError | calls profiled: 3

```

## One profiler per process[#](#one-profiler-per-process "Link to this heading")

Python allows one profiler at a time. When another one records the
process (`python -m cProfile`, an IDE profiler, an outer profile), the
magic refuses, instead of silently replacing it:

```
outer = cProfile.Profile()
outer.enable()
try:
    profile_code("1 + 1", {})
except ProfilerBusyError as exc:
    refused = f"{type(exc).__name__} [{exc.code}]: {exc}"
finally:
    outer.disable()
print(refused)

```
```
ProfilerBusyError [profiler_busy]: cannot profile: the sys.monitoring profiler slot is taken by 'cProfile'

```

## The interactive viewer (opt in)[#](#the-interactive-viewer-opt-in "Link to this heading")

```
%%scikitplot_profile --snakeviz
slow_sum_of_squares(100_000)

```

and, when done:

```
%scikitplot_profile --stop-snakeviz

```

`--snakeviz` (`pip install snakeviz`) opens the profile as an
interactive icicle chart below the cell. The server listens on
`127.0.0.1`, so it works where the browser and the kernel share a
machine; on a remote kernel, keep the table or download the `-D` file.
Servers stop with `--stop-snakeviz`, `%unload_ext` or when the kernel
exits. A documentation build starts one only when
`SCIKITPLOT_GALLERY_RUN_SNAKEVIZ=1`.

```
if os.environ.get("SCIKITPLOT_GALLERY_RUN_SNAKEVIZ", "0").strip() == "1":
    from scikitplot._ipymagic._snakeviz import start_snakeviz, stop_all

    server = start_snakeviz(str(stats_file))
    print("serving on loopback:", server.url.startswith("http://127.0.0.1:"))
    print("stopped:", stop_all())
else:
    print("SKIP: set SCIKITPLOT_GALLERY_RUN_SNAKEVIZ=1 to start snakeviz")

shutil.rmtree(work)

```
```
SKIP: set SCIKITPLOT_GALLERY_RUN_SNAKEVIZ=1 to start snakeviz

```

Tags: [model-workflow: ipymagic](../../_tags/model-workflow-ipymagic.html) [plot-type: text](../../_tags/plot-type-text.html) [level: intermediate](../../_tags/level-intermediate.html)

****Total running time of the script:**** (0 minutes 0.090 seconds)

[![Launch binder](../../_images/binder_badge_logo25.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/ipymagic/plot_ipymagic_scikit-plots_profiler.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo25.svg)](../../lite/lab/index.html?path=auto_examples/ipymagic/plot_ipymagic_scikit-plots_profiler.ipynb)

[`Download Jupyter notebook: plot_ipymagic_scikit-plots_profiler.ipynb`](../../_downloads/a2528bffae21bc4a58f71f2c602d7f1d/plot_ipymagic_scikit-plots_profiler.ipynb)

[`Download Python source code: plot_ipymagic_scikit-plots_profiler.py`](../../_downloads/c4dd0c4e1ed67f559048781b6a1f7493/plot_ipymagic_scikit-plots_profiler.py)

[`Download zipped: plot_ipymagic_scikit-plots_profiler.zip`](../../_downloads/555bd0f5080862124fd5c661dcfadf87/plot_ipymagic_scikit-plots_profiler.zip)

Related examples

![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_thumb.png)

[Run scikit-plots Commands from a Notebook](plot_ipymagic_scikit-plots.html)

Run scikit-plots Commands from a Notebook![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_cleanprompt_thumb.png)

[Clean a Prompt in a Notebook Cell with %%scikitplot](plot_ipymagic_scikit-plots_cleanprompt.html)

Clean a Prompt in a Notebook Cell with %%scikitplot![](../../_images/sphx_glr_plot_ipymagic_scikit-plots_mcp_thumb.png)

[Inspect and Self-test the MCP Server from a Notebook](plot_ipymagic_scikit-plots_mcp.html)

Inspect and Self-test the MCP Server from a Notebook![](../../_images/sphx_glr_plot_env_config_policy_script_thumb.png)

[One Configuration File for Laptops, CI and Agents](../env/plot_env_config_policy_script.html)

One Configuration File for Laptops, CI and Agents

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)