> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-05-package-examples-multimodule-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Multi-module package builds (5 package examples)[#](#multi-module-package-builds-5-package-examples "Link to this heading")

This example shows how to build a small compiled package consisting of
multiple Cython extension modules in one build directory.

Package examples live under `_templates/package_examples/` and include:

* vector\_ops
* stats\_basic
* text\_hash
* signal\_conv
* graph\_algo

## What this example demonstrates[#](#what-this-example-demonstrates "Link to this heading")

1. Listing bundled package examples.
2. Checking build prerequisites safely (so docs builds don’t fail).
3. Building one example package (profile=”fast-debug”).
4. Showing deterministic metadata: cache key, artifacts, module names.
5. Importing a module by dotted name and calling a known function (when declared).
6. Pinning the package build by alias and re-importing by alias.
7. Re-importing from cache key (restart-safe).
8. Optional: printing cache stats.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import importlib
from typing import Any, Iterable

from scikitplot import cython

```
```
def _safe_call_known_function(module: Any, candidates: Iterable[str]) -> None:
    """
    Call a known function if present, otherwise print a small preview.

    This is intentionally strict: we only call names we expect, and only if
    present on the module. Otherwise we print public names for inspection.
    """
    for name in candidates:
        f = getattr(module, name, None)
        if callable(f):
            try:
                # Use a simple, deterministic call convention:
                # - prefer 1-arg integer calls where sensible
                out = f(10)
                print(f"  {module.__name__}.{name}(10) -> {out!r}")
            except TypeError:
                # Some functions may take no args or different args; avoid guessing.
                print(f"  {module.__name__}.{name} is callable but signature differs; not calling.")
            return

    # Fallback: show a preview of public names (no execution).
    public = sorted(n for n in getattr(module, "__dict__", {}).keys() if n and not n.startswith("_"))
    print(f"  No known callable exported; public names: {public[:15]}{' ...' if len(public) > 15 else ''}")

```

## List all available Package tamplates[#](#list-all-available-package-tamplates "Link to this heading")

<https://scikit-plots.github.io/dev/user_guide/cython/_templates/templates_index.html>

```
examples = getattr(cython, "list_package_examples", lambda: [])()
print("Package examples:", examples)

```
```
Package examples: ['graph_algo', 'signal_conv', 'stats_basic', 'text_hash', 'vector_ops']

```

## Generate `python` Packages from `cython`[#](#generate-python-packages-from-cython "Link to this heading")

```
# Pick a template deterministically and safely.
if not examples:
    print("No package examples were bundled in this build.")
else:
    # Build prereqs check: keep docs builds safe.
    report = cython.check_build_prereqs(numpy=False)

    if not report.get('cython', {}).get('ok'):
        print("Skipping package build because prerequisites are missing.\n")
        problems = report.get("problems", [])
        if problems:
            print("Problems:", problems)
    else:
        # Choose a deterministic example name (first in sorted order)
        name = sorted(examples)[0]
        print("\nBuilding package example:", name)

        # Demonstrate profiles:
        # fast-debug is great for iteration; release for performance.
        r_debug = cython.build_package_example_result(name, profile="fast-debug", verbose=0)
        print("\nBuild (fast-debug) result:")
        print(r_debug)

        # Optional: build release too to show key changes deterministically.
        r_release = cython.build_package_example_result(name, profile="release", verbose=0)
        print("\nBuild (release) result:")
        print(r_release)
        print("\nKeys differ by profile:")
        print("  fast-debug:", r_debug.key)
        print("  release   :", r_release.key)

        # Show deterministic metadata
        print("\nPackage metadata:")
        print("  package_name:", r_debug.package_name)
        print("  build_dir   :", r_debug.build_dir)
        print("  used_cache  :", r_debug.used_cache)
        print("  created_utc :", r_debug.created_utc)

        # Show per-module summary and artifact paths
        print("\nModules and artifacts:")
        for br in r_debug.results:
            print(" ", br.module.__name__)
            print("    artifact:", br.artifact_path)

        # Import one built module by dotted name and call a known function (strict)
        first_module = r_debug.modules[0]
        mod_name = first_module.__name__
        mod = importlib.import_module(mod_name)
        print("\nImported module:", mod.__name__)

        # Try calling a known function name (declared by convention)
        # Keep candidates short and standard.
        _safe_call_known_function(mod, candidates=("run", "demo", "test", "inc", "dec", "dot", "hash_text"))

        # Pin/alias (per-cache-dir) and import again
        alias = f"pkg_{name}_debug"
        print("\nPinning build:")
        cython.pin(r_debug.key, alias=alias, overwrite=True)
        r_pinned = cython.import_pinned_result(alias)
        print("Pinned import result:")
        print(r_pinned)
        print("Pinned package name:", r_pinned.package_name)

        # Restart-safe import by key (no recompilation)
        r_cached = cython.import_cached_package_result(r_debug.key)
        print("\nImported from cache key:")
        print(r_cached)
        print("  used_cache:", r_cached.used_cache)

        # Optional: cache stats (if available)
        if hasattr(cython, "cache_stats"):
            stats = cython.cache_stats()
            print("\nCache stats snapshot:")
            print(stats)

```
```
Building package example: graph_algo
Compiling /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.pyx because it changed.
Compiling /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.pyx because it changed.
[1/2] Cythonizing /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.pyx
[2/2] Cythonizing /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.pyx

Build (fast-debug) result:
PackageBuildResult(package_name='scikitplot_pkg_graph_algo', key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), results=(BuildResult(module=<module 'scikitplot_pkg_graph_algo.bfs' from '/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'>, key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', module_name='scikitplot_pkg_graph_algo.bfs', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'), used_cache=False, created_utc='2026-07-14T00:01:44Z', fingerprint={'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, source_sha256='d3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', meta={'kind': 'package', 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'package_name': 'scikitplot_pkg_graph_algo', 'modules': [{'module_name': 'scikitplot_pkg_graph_algo.bfs', 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', 'annotate_html': None}, {'module_name': 'scikitplot_pkg_graph_algo.degree', 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', 'annotate_html': None}], 'created_utc': '2026-07-14T00:01:44Z', 'fingerprint': {'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, 'directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': True, 'wraparound': True, 'initializedcheck': True, 'cdivision': False}, 'compiler_directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': True, 'wraparound': True, 'initializedcheck': True, 'cdivision': False}, 'profile': 'fast-debug', 'annotate': False, 'view_annotate': False, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'annotate_html': None, 'annotation_html': {}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'support_files': [], 'support_paths': [], 'extra_sources': [], 'language': None}), BuildResult(module=<module 'scikitplot_pkg_graph_algo.degree' from '/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'>, key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', module_name='scikitplot_pkg_graph_algo.degree', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'), used_cache=False, created_utc='2026-07-14T00:01:44Z', fingerprint={'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, source_sha256='5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', meta={'kind': 'package', 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'package_name': 'scikitplot_pkg_graph_algo', 'modules': [{'module_name': 'scikitplot_pkg_graph_algo.bfs', 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', 'annotate_html': None}, {'module_name': 'scikitplot_pkg_graph_algo.degree', 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', 'annotate_html': None}], 'created_utc': '2026-07-14T00:01:44Z', 'fingerprint': {'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, 'directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': True, 'wraparound': True, 'initializedcheck': True, 'cdivision': False}, 'compiler_directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': True, 'wraparound': True, 'initializedcheck': True, 'cdivision': False}, 'profile': 'fast-debug', 'annotate': False, 'view_annotate': False, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'annotate_html': None, 'annotation_html': {}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'support_files': [], 'support_paths': [], 'extra_sources': [], 'language': None})), used_cache=False, created_utc='2026-07-14T00:01:44Z', fingerprint={'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, meta={'kind': 'package', 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'package_name': 'scikitplot_pkg_graph_algo', 'modules': [{'module_name': 'scikitplot_pkg_graph_algo.bfs', 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', 'annotate_html': None}, {'module_name': 'scikitplot_pkg_graph_algo.degree', 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', 'annotate_html': None}], 'created_utc': '2026-07-14T00:01:44Z', 'fingerprint': {'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, 'directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': True, 'wraparound': True, 'initializedcheck': True, 'cdivision': False}, 'compiler_directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': True, 'wraparound': True, 'initializedcheck': True, 'cdivision': False}, 'profile': 'fast-debug', 'annotate': False, 'view_annotate': False, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'annotate_html': None, 'annotation_html': {}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'support_files': [], 'support_paths': [], 'extra_sources': [], 'language': None})
Compiling /home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/bfs.pyx because it changed.
Compiling /home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/degree.pyx because it changed.
[1/2] Cythonizing /home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/bfs.pyx
[2/2] Cythonizing /home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/degree.pyx

Build (release) result:
PackageBuildResult(package_name='scikitplot_pkg_graph_algo', key='6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c'), results=(BuildResult(module=<module 'scikitplot_pkg_graph_algo.bfs' from '/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'>, key='6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c', module_name='scikitplot_pkg_graph_algo.bfs', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'), used_cache=False, created_utc='2026-07-14T00:01:47Z', fingerprint={'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, source_sha256='d3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', meta={'kind': 'package', 'key': '6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c', 'package_name': 'scikitplot_pkg_graph_algo', 'modules': [{'module_name': 'scikitplot_pkg_graph_algo.bfs', 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', 'annotate_html': None}, {'module_name': 'scikitplot_pkg_graph_algo.degree', 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', 'annotate_html': None}], 'created_utc': '2026-07-14T00:01:47Z', 'fingerprint': {'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, 'directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': False, 'wraparound': False, 'initializedcheck': False, 'cdivision': True}, 'compiler_directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': False, 'wraparound': False, 'initializedcheck': False, 'cdivision': True}, 'profile': 'release', 'annotate': False, 'view_annotate': False, 'extra_compile_args': ['-O3', '-DNDEBUG'], 'extra_link_args': [], 'annotate_html': None, 'annotation_html': {}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'support_files': [], 'support_paths': [], 'extra_sources': [], 'language': None}), BuildResult(module=<module 'scikitplot_pkg_graph_algo.degree' from '/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'>, key='6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c', module_name='scikitplot_pkg_graph_algo.degree', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'), used_cache=False, created_utc='2026-07-14T00:01:47Z', fingerprint={'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, source_sha256='5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', meta={'kind': 'package', 'key': '6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c', 'package_name': 'scikitplot_pkg_graph_algo', 'modules': [{'module_name': 'scikitplot_pkg_graph_algo.bfs', 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', 'annotate_html': None}, {'module_name': 'scikitplot_pkg_graph_algo.degree', 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', 'annotate_html': None}], 'created_utc': '2026-07-14T00:01:47Z', 'fingerprint': {'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, 'directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': False, 'wraparound': False, 'initializedcheck': False, 'cdivision': True}, 'compiler_directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': False, 'wraparound': False, 'initializedcheck': False, 'cdivision': True}, 'profile': 'release', 'annotate': False, 'view_annotate': False, 'extra_compile_args': ['-O3', '-DNDEBUG'], 'extra_link_args': [], 'annotate_html': None, 'annotation_html': {}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'support_files': [], 'support_paths': [], 'extra_sources': [], 'language': None})), used_cache=False, created_utc='2026-07-14T00:01:47Z', fingerprint={'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, meta={'kind': 'package', 'key': '6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c', 'package_name': 'scikitplot_pkg_graph_algo', 'modules': [{'module_name': 'scikitplot_pkg_graph_algo.bfs', 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', 'annotate_html': None}, {'module_name': 'scikitplot_pkg_graph_algo.degree', 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', 'annotate_html': None}], 'created_utc': '2026-07-14T00:01:47Z', 'fingerprint': {'python': '3.12.13', 'python_impl': 'CPython', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'machine': 'x86_64', 'processor': 'x86_64', 'cython': '3.2.8', 'numpy': '2.4.6', 'abi': ''}, 'directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': False, 'wraparound': False, 'initializedcheck': False, 'cdivision': True}, 'compiler_directives': {'language_level': 3, 'embedsignature': True, 'boundscheck': False, 'wraparound': False, 'initializedcheck': False, 'cdivision': True}, 'profile': 'release', 'annotate': False, 'view_annotate': False, 'extra_compile_args': ['-O3', '-DNDEBUG'], 'extra_link_args': [], 'annotate_html': None, 'annotation_html': {}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'support_files': [], 'support_paths': [], 'extra_sources': [], 'language': None})

Keys differ by profile:
  fast-debug: 051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08
  release   : 6cc200d89b044810b562aa2e379d2740041c6a6f558fdfc4f2b464f70bc1322c

Package metadata:
  package_name: scikitplot_pkg_graph_algo
  build_dir   : /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08
  used_cache  : False
  created_utc : 2026-07-14T00:01:44Z

Modules and artifacts:
  scikitplot_pkg_graph_algo.bfs
    artifact: /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so
  scikitplot_pkg_graph_algo.degree
    artifact: /home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so

Imported module: scikitplot_pkg_graph_algo.bfs
  No known callable exported; public names: ['bfs', 'deque']

Pinning build:
Pinned import result:
PackageBuildResult(package_name='scikitplot_pkg_graph_algo', key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), results=(BuildResult(module=<module 'scikitplot_pkg_graph_algo.bfs' from '/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'>, key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', module_name='scikitplot_pkg_graph_algo.bfs', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'), used_cache=True, created_utc='2026-07-14T00:01:44Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, source_sha256='d3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', meta={'annotate': False, 'annotate_html': None, 'annotation_html': {}, 'compiler_directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'created_utc': '2026-07-14T00:01:44Z', 'directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'extra_sources': [], 'fingerprint': {'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'kind': 'package', 'language': None, 'modules': [{'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.bfs', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2'}, {'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.degree', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371'}], 'package_name': 'scikitplot_pkg_graph_algo', 'profile': 'fast-debug', 'support_files': [], 'support_paths': [], 'view_annotate': False}), BuildResult(module=<module 'scikitplot_pkg_graph_algo.degree' from '/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'>, key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', module_name='scikitplot_pkg_graph_algo.degree', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'), used_cache=True, created_utc='2026-07-14T00:01:44Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, source_sha256='5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', meta={'annotate': False, 'annotate_html': None, 'annotation_html': {}, 'compiler_directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'created_utc': '2026-07-14T00:01:44Z', 'directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'extra_sources': [], 'fingerprint': {'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'kind': 'package', 'language': None, 'modules': [{'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.bfs', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2'}, {'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.degree', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371'}], 'package_name': 'scikitplot_pkg_graph_algo', 'profile': 'fast-debug', 'support_files': [], 'support_paths': [], 'view_annotate': False})), used_cache=True, created_utc='2026-07-14T00:01:44Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, meta={'annotate': False, 'annotate_html': None, 'annotation_html': {}, 'compiler_directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'created_utc': '2026-07-14T00:01:44Z', 'directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'extra_sources': [], 'fingerprint': {'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'kind': 'package', 'language': None, 'modules': [{'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.bfs', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2'}, {'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.degree', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371'}], 'package_name': 'scikitplot_pkg_graph_algo', 'profile': 'fast-debug', 'support_files': [], 'support_paths': [], 'view_annotate': False})
Pinned package name: scikitplot_pkg_graph_algo

Imported from cache key:
PackageBuildResult(package_name='scikitplot_pkg_graph_algo', key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), results=(BuildResult(module=<module 'scikitplot_pkg_graph_algo.bfs' from '/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'>, key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', module_name='scikitplot_pkg_graph_algo.bfs', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so'), used_cache=True, created_utc='2026-07-14T00:01:44Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, source_sha256='d3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2', meta={'annotate': False, 'annotate_html': None, 'annotation_html': {}, 'compiler_directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'created_utc': '2026-07-14T00:01:44Z', 'directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'extra_sources': [], 'fingerprint': {'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'kind': 'package', 'language': None, 'modules': [{'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.bfs', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2'}, {'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.degree', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371'}], 'package_name': 'scikitplot_pkg_graph_algo', 'profile': 'fast-debug', 'support_files': [], 'support_paths': [], 'view_annotate': False}), BuildResult(module=<module 'scikitplot_pkg_graph_algo.degree' from '/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'>, key='051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', module_name='scikitplot_pkg_graph_algo.degree', build_dir=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08'), artifact_path=PosixPath('/home/circleci/.cache/scikitplot/cython/051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08/scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so'), used_cache=True, created_utc='2026-07-14T00:01:44Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, source_sha256='5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371', meta={'annotate': False, 'annotate_html': None, 'annotation_html': {}, 'compiler_directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'created_utc': '2026-07-14T00:01:44Z', 'directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'extra_sources': [], 'fingerprint': {'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'kind': 'package', 'language': None, 'modules': [{'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.bfs', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2'}, {'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.degree', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371'}], 'package_name': 'scikitplot_pkg_graph_algo', 'profile': 'fast-debug', 'support_files': [], 'support_paths': [], 'view_annotate': False})), used_cache=True, created_utc='2026-07-14T00:01:44Z', fingerprint={'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, meta={'annotate': False, 'annotate_html': None, 'annotation_html': {}, 'compiler_directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'created_utc': '2026-07-14T00:01:44Z', 'directives': {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}, 'extra_compile_args': ['-O0', '-g'], 'extra_link_args': [], 'extra_sources': [], 'fingerprint': {'abi': '', 'cython': '3.2.8', 'machine': 'x86_64', 'numpy': '2.4.6', 'platform': 'Linux-7.0.0-1008-aws-x86_64-with-glibc2.35', 'processor': 'x86_64', 'python': '3.12.13', 'python_impl': 'CPython'}, 'include_dirs': ['/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/scikitplot/cython/_templates/package_examples/graph_algo', '/home/circleci/repo/galleries/examples/cython', '/home/circleci/.pyenv/versions/3.12.13/lib/python3.12/site-packages/numpy/_core/include'], 'key': '051941ca8458eaa2c07eb4b3b437b784901d9299fc05c875cc4221938b24af08', 'kind': 'package', 'language': None, 'modules': [{'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/bfs.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.bfs', 'source_sha256': 'd3f1eaf3cb7438cf670f928965db1b4716ab6c8feacbb95ab744b6355ff758d2'}, {'annotate_html': None, 'artifact': 'scikitplot_pkg_graph_algo/degree.cpython-312-x86_64-linux-gnu.so', 'module_name': 'scikitplot_pkg_graph_algo.degree', 'source_sha256': '5c22e7a9ea4bb6273325a19d4fe03a8c3ed4d5e6bb0b78f218a560196ee3a371'}], 'package_name': 'scikitplot_pkg_graph_algo', 'profile': 'fast-debug', 'support_files': [], 'support_paths': [], 'view_annotate': False})
  used_cache: True

Cache stats snapshot:
CacheStats(cache_root=PosixPath('/home/circleci/.cache/scikitplot/cython'), n_modules=7, n_packages=2, total_bytes=8675492, pinned_aliases=2, pinned_keys=2, newest_mtime_utc='2026-07-14T00:01:47Z', oldest_mtime_utc='2026-07-14T00:01:30Z')

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 4.130 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_05_package_examples_multimodule.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_05_package_examples_multimodule.ipynb)

[`Download Jupyter notebook: plot_05_package_examples_multimodule.ipynb`](../../_downloads/fd866acd47e488285dc41ac8779918f6/plot_05_package_examples_multimodule.ipynb)

[`Download Python source code: plot_05_package_examples_multimodule.py`](../../_downloads/13e9206bf0ad7f3ff957fc485755a9e7/plot_05_package_examples_multimodule.py)

[`Download zipped: plot_05_package_examples_multimodule.zip`](../../_downloads/d56bce85af3091f9efd1b57af7339fde/plot_05_package_examples_multimodule.zip)

Related examples

![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_09_workflow_templates_cli_thumb.png)

[Workflow templates (train / hpo / predict) + CLI entry template](plot_09_workflow_templates_cli.html)

Workflow templates (train / hpo / predict) + CLI entry template![](../../_images/sphx_glr_plot_04_pin_alias_thumb.png)

[Pin/Alias: stable handles for cached builds](plot_04_pin_alias.html)

Pin/Alias: stable handles for cached builds![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)