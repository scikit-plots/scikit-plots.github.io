# Python Implementations and Free-Threading (No-GIL) Support[#](#python-implementations-and-free-threading-no-gil-support "Link to this heading")

[`"Download This Page as .pdf"`](../_downloads/cac06aa2456734a4b7de9b87cc718010/python_nogil.pdf).

> **Warning**
> Free-threaded (No-GIL) mode is ****experimental**** and only available in
special builds of CPython (starting with version 3.13). Compatibility with
third-party packages, particularly C extensions, is limited.

## Overview[#](#overview "Link to this heading")

Python can be executed using multiple interpreters:

* ****CPython**** - the reference implementation. It now offers an ****experimental free-threaded (No-GIL) mode****.
* ****PyPy**** - a JIT-compiled alternative optimized for long-running pure Python code, still using the GIL.

## Comparison Table[#](#comparison-table "Link to this heading")

| Feature | CPython | PyPy | Notes |
| --- | --- | --- | --- |
| Default Interpreter | ✅ Yes | ❌ No | Widely distributed |
| JIT Compilation | ❌ No | ✅ Yes | Improves pure Python execution speed |
| Free-Threading (No-GIL) | ✅ Experimental (3.13+) | ❌ No | Available only in special CPython builds |
| C Extension Support | ✅ Full (legacy CPython API) | ⚠ Partial (via CFFI) | Free-threaded mode requires API updates |
| Memory Model | Reference counting + GIL | Tracing GC + JIT | Affects concurrency behavior |

## Timeline of No-GIL Development[#](#timeline-of-no-gil-development "Link to this heading")

| Year | Event |
| --- | --- |
| 2021 | PEP 703 proposed “No GIL” CPython fork |
| 2023 | PEP 703 accepted for experimental inclusion in CPython 3.13 |
| 2024 | CPython 3.13 released with optional `--disable-gil` build |
| 2025 (planned) | CPython 3.14 expands free-threading and extension support |
| 2026+ (planned) | CPython 3.15+ may stabilize No-GIL execution |

## Future CPython Feature Matrix[#](#future-cpython-feature-matrix "Link to this heading")

| Version | GIL Support | Free-Threaded Mode | Status | Notes |
| --- | --- | --- | --- | --- |
| 3.12 | ✅ Yes | ❌ No | Stable | Traditional GIL model |
| 3.13 | ✅ Yes | ✅ Yes | Experimental | Requires `python-freethreading` build |
| 3.14 | ✅ Yes | ✅ Yes | Experimental / Early Adoption | Improved extension support |
| 3.15+ | ✅ Yes | ✅ Yes | Future | No-GIL may become standard |

## Tabbed View (CPython vs PyPy)[#](#tabbed-view-cpython-vs-pypy "Link to this heading")

CPythonPyPy

CPython provides ****experimental free-threaded execution****.

****Useful Links:****

* [CPython Repository](https://github.com/python/cpython)
* [Free-Threading HOWTO](https://docs.python.org/3/howto/free-threading-python.html)
* [Installing Free-Threaded CPython](https://py-free-threading.github.io/installing-cpython/)

****Installation Example:****

```
mamba create -n nogil -c conda-forge python-freethreading

```

or:

```
conda create -n nogil --override-channels -c conda-forge python-freethreading

```

PyPy uses JIT compilation but ****does not support No-GIL execution****.

****Useful Links:****

* [PyPy Repository](https://github.com/pypy/pypy)
* [CPython vs PyPy Differences](https://doc.pypy.org/en/latest/cpython_differences.html)

## Critical and Essential Knowledge[#](#critical-and-essential-knowledge "Link to this heading")

> **Important**
> Misunderstanding these points may lead to performance or correctness issues:

* `python-freethreading` is a ****special CPython build with GIL disabled****.
* Free-threaded mode is ****experimental****; not the default in any official release.
* Most C extensions are ****incompatible**** with No-GIL and require updates.
* Free-threaded execution ****does not automatically improve performance****.
* Memory and object lifecycle semantics differ; race conditions are possible.
* Standard GIL-enabled CPython will remain available; No-GIL is optional.
* Explicit installation and thread-safe coding practices are required.
> **Caution**
> Code that runs correctly under GIL may be ****unsafe under No-GIL****.

## Risks vs Benefits Matrix[#](#risks-vs-benefits-matrix "Link to this heading")

| Category | Benefits | Risks |
| --- | --- | --- |
| Multi-threaded Python | True parallelism across CPU cores | Race conditions if code is not thread-safe |
| Performance | Potential speed-up in CPU-bound multi-threaded code | May degrade single-threaded performance |
| C Extension Compatibility | Can write No-GIL-safe extensions | Legacy extensions may crash or misbehave |
| Future-Proofing | Prepares code for upcoming GIL-free CPython | Still experimental; behavior may change |

## Migration Checklist[#](#migration-checklist "Link to this heading")

1. Install Free-Threaded Python.
2. Audit all C extensions.
3. Refactor shared mutable state.
4. Run multi-threaded tests.
5. Verify third-party library compatibility.
6. Monitor performance carefully.
7. Document interpreter requirements.

## Who Should Not Use Free-Threaded Python Yet[#](#who-should-not-use-free-threaded-python-yet "Link to this heading")

* Projects heavily dependent on legacy C extensions.
* Applications stable under standard CPython.
* Teams unfamiliar with thread safety.
* Environments requiring strict stability (e.g., production servers).

```
python -VV

```
```
import os, platform, subprocess, sys
print("Implementation\t:", platform.python_implementation(), sys.implementation.name)
print("Version\t\t:", sys.version)
print("Compiler\t:", platform.python_compiler())

```
```
# Python prints -VV, by os
os.system("python -VV")
with os.popen("python -VV") as f: output=f.read().strip()
print(output)

```
```
# Python prints -VV, by subprocess
output = subprocess.Popen(["python", "-VV"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True).communicate()[0].strip()
output = subprocess.run(["python", "-VV"], capture_output=True, text=True).stdout.strip()
output = subprocess.call(["python", "-VV"])
output = subprocess.check_output("python -VV", shell=True, text=True).strip()
print(output)

```