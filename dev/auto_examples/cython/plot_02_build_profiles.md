> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-cython-plot-02-build-profiles-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Build profiles: fast-debug, release, annotate[#](#build-profiles-fast-debug-release-annotate "Link to this heading")

Profiles provide canonical preset build options, while keeping explicit
user-provided arguments authoritative.

Profiles:

* `fast-debug`: optimize for iteration speed (debug-friendly)
* `release`: optimize for runtime speed
* `annotate`: generate the Cython HTML annotation report

This example compiles the same snippet under different profiles and prints
the resulting cache keys (they differ because build options differ).

What this example demonstrates:

1. Profiles change build options → cache keys differ deterministically.
2. Explicit user arguments override profile defaults (strict precedence).
3. Annotation builds may generate an HTML report; we show where it is stored.

```
# Authors: The scikit-plots developers
# SPDX-License-Identifier: BSD-3-Clause

```
```
from __future__ import annotations

import sys
from pathlib import Path
from typing import Any

from scikitplot import cython

```
```
def _print_result(label: str, r: Any) -> None:
    """Print a compact BuildResult summary (stable fields only)."""
    print(f"\n[{label}]")
    print("  module_name :", r.module_name)
    print("  key         :", r.key)
    print("  used_cache  :", r.used_cache)
    print("  artifact    :", r.artifact_path)
    # meta keys are stable across our devkit; use .get defensively.
    meta = getattr(r, "meta", {}) or {}
    print("  profile     :", meta.get("profile", None))
    print("  annotate    :", meta.get("annotate", None))
    print("  language    :", meta.get("language", None))

    cargs = meta.get("extra_compile_args", None)
    largs = meta.get("extra_link_args", None)
    directives = meta.get("compiler_directives", None)

    if cargs is not None:
        print("  extra_compile_args:", cargs)
    if largs is not None:
        print("  extra_link_args   :", largs)
    if directives is not None:
        # Print a small, deterministic subset if huge.
        if isinstance(directives, dict):
            keys = sorted(directives.keys())
            subset = {k: directives[k] for k in keys[:10]}
            print("  compiler_directives (subset):", subset)
        else:
            print("  compiler_directives:", directives)

```

## Generate `python` Module from `python`[#](#generate-python-module-from-python "Link to this heading")

```
report = cython.check_build_prereqs(numpy=False)

if not report.get('cython', {}).get('ok'):
    # sys.exit("Skipping compilation because build prerequisites are missing.")
    print("Skipping compilation because build prerequisites are missing.")
    problems = report.get("problems", [])
    if problems:
        print("Problems:", problems)
else:
    source = "def f(int n):\n    return n*n\n"

    # 1) Compile under three profiles.
    r_fast = cython.compile_and_load_result(source, profile="fast-debug", verbose=0)
    r_rel = cython.compile_and_load_result(source, profile="release", verbose=0)

    # annotate profile already requests annotation generation; we keep annotate=True explicit
    # to demonstrate that explicit user args remain authoritative and documented.
    r_ann = cython.compile_and_load_result(source, profile="annotate", annotate=True, view_annotate=False, use_cache=True, verbose=1, force_rebuild=True)

    html = Path(r_ann.build_dir) / f"{r_ann.module_name}.html"
    print("HTML:", html)
    print("exists:", html.exists())

    # 2) Keys differ deterministically.
    print("fast-debug key:", r_fast.key)
    print("release    key:", r_rel.key)
    print("annotate   key:", r_ann.key)

    print("\nKey comparisons:")
    print("  fast vs release :", r_fast.key != r_rel.key)
    print("  fast vs annotate:", r_fast.key != r_ann.key)
    print("  release vs annotate:", r_rel.key != r_ann.key)

    # 3) Sanity: compiled function works.
    print("\nf(10) fast-debug:", r_fast.module.f(10))
    print("f(10) release   :", r_rel.module.f(10))
    print("f(10) annotate  :", r_ann.module.f(10))

    # 4) Show what options differ (strictly from meta).
    _print_result("fast-debug", r_fast)
    _print_result("release", r_rel)
    _print_result("annotate", r_ann)

    # 5) Show where annotation lives (if present).
    # We do not assume a fixed filename; we check metadata.
    ann_meta = getattr(r_ann, "meta", {}) or {}
    ann_path = ann_meta.get("annotate_html", None) or ann_meta.get("annotation_html", None)
    if ann_path:
        print("\nAnnotation HTML report:")
        print(" ", ann_path)
    else:
        print("\nAnnotation HTML report not recorded in metadata for this build.")

    # 6) Demonstrate precedence: explicit args override profile defaults.
    # Example: even under "release", you can force annotate=False explicitly.
    r_rel_no_ann = cython.compile_and_load_result(source, profile="release", annotate=False, verbose=0)
    print("\nPrecedence demo: explicit annotate=False under release")
    print("  key:", r_rel_no_ann.key)
    print("  annotate in meta:", (getattr(r_rel_no_ann, "meta", {}) or {}).get("annotate", None))

```
```
Compiling /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.pyx because it changed.
[1/1] Cythonizing /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.pyx
HTML: /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.html
exists: True
fast-debug key: 3464939529e20b40db9cd23e32e1a086bba1f8ab1eaa338e87a105f0aba359c0
release    key: 01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa
annotate   key: 1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff

Key comparisons:
  fast vs release : True
  fast vs annotate: True
  release vs annotate: True

f(10) fast-debug: 100
f(10) release   : 100
f(10) annotate  : 100

[fast-debug]
  module_name : scikitplot_cython_3464939529e20b40
  key         : 3464939529e20b40db9cd23e32e1a086bba1f8ab1eaa338e87a105f0aba359c0
  used_cache  : True
  artifact    : /home/circleci/.cache/scikitplot/cython/3464939529e20b40db9cd23e32e1a086bba1f8ab1eaa338e87a105f0aba359c0/scikitplot_cython_3464939529e20b40.cpython-311-x86_64-linux-gnu.so
  profile     : fast-debug
  annotate    : False
  language    : None
  extra_compile_args: ['-O0', '-g']
  extra_link_args   : []
  compiler_directives (subset): {'boundscheck': True, 'cdivision': False, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}

[release]
  module_name : scikitplot_cython_01dd21214243c2d7
  key         : 01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa
  used_cache  : False
  artifact    : /home/circleci/.cache/scikitplot/cython/01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa/scikitplot_cython_01dd21214243c2d7.cpython-311-x86_64-linux-gnu.so
  profile     : release
  annotate    : False
  language    : None
  extra_compile_args: ['-O3', '-DNDEBUG']
  extra_link_args   : []
  compiler_directives (subset): {'boundscheck': False, 'cdivision': True, 'embedsignature': True, 'initializedcheck': False, 'language_level': 3, 'wraparound': False}

[annotate]
  module_name : scikitplot_cython_1b5e70054f7239ef
  key         : 1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff
  used_cache  : False
  artifact    : /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.cpython-311-x86_64-linux-gnu.so
  profile     : annotate
  annotate    : True
  language    : None
  extra_compile_args: ['-O0', '-g']
  extra_link_args   : []
  compiler_directives (subset): {'boundscheck': True, 'embedsignature': True, 'initializedcheck': True, 'language_level': 3, 'wraparound': True}

Annotation HTML report:
  /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.html

Precedence demo: explicit annotate=False under release
  key: 01dd21214243c2d7a88c8ed7b8e71dff57f23272c1f732bedfb1ac838bc4d9fa
  annotate in meta: False

```
```
import json
import shutil
import textwrap
from pprint import pprint

if report.get('cython', {}).get('ok'):
    # pprint(textwrap.wrap(str(r_ann)))

    print("\nBuildResult (metadata):")
    print("  module_name :", r_ann.module_name)
    print("  cache key   :", r_ann.key)
    print("  build dir   :", r_ann.build_dir)
    print("  artifact    :", r_ann.artifact_path)
    print("  used_cache  :", r_ann.used_cache)
    print("  created_utc :", r_ann.created_utc)
    print("  Annotation  :", r_ann.meta["annotate"])
    print("  HTML report :", r_ann.meta["annotate_html"])

```
```
BuildResult (metadata):
  module_name : scikitplot_cython_1b5e70054f7239ef
  cache key   : 1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff
  build dir   : /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff
  artifact    : /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.cpython-311-x86_64-linux-gnu.so
  used_cache  : False
  created_utc : 2026-06-12T17:50:06Z
  Annotation  : True
  HTML report : /home/circleci/.cache/scikitplot/cython/1b5e70054f7239efd161cddf35228e0ef380164fbe5a129b9318c601baaff1ff/scikitplot_cython_1b5e70054f7239ef.html

```

## Display `annotate` Profile to see the actual C code[#](#display-annotate-profile-to-see-the-actual-c-code "Link to this heading")

cython –annotate <pyx file> will output an html report where each line of the the pyx file
is color coded as to the amount of back and forth to the python interpreter that is required,
and each line can be expanded to see the actual C code generated.

```
def read_html_file(file_path):
    with open(file_path, 'r') as file:
        html_content = file.read()
    return html_content

if report.get('cython', {}).get('ok'):
    if ann_path:
        # print(HTML(read_html_file(ann_path)).data[-8000:])

        from IPython.display import display, HTML, IFrame
        # display(IFrame(src=ann_path, width=700, height=600))
        # display(HTML('<h1>Hello, world!</h1>'))
        display(HTML(read_html_file(ann_path)))

```
```
<IPython.core.display.HTML object>

```

## Viewing the HTML web file to see the actual C code[#](#viewing-the-html-web-file-to-see-the-actual-c-code "Link to this heading")

cython –annotate <pyx file> will output an html report where each line of the the pyx file
is color coded as to the amount of back and forth to the python interpreter that is required,
and each line can be expanded to see the actual C code generated.

```
# import module
# import webbrowser

# open html file
# webbrowser.open(ann_path)

# Sample Output:
r"""
Generated by Cython 3.2.4

Yellow lines hint at Python interaction.
Click on a line that starts with a "+" to see the C code that Cython generated for it.

Raw output: scikitplot_cython_ddc7a5b27b5b1257.c

−1: def f(int n):
/* Python wrapper */
static PyObject *__pyx_pw_34scikitplot_cython_ddc7a5b27b5b1257_1f(PyObject *__pyx_self,
#if CYTHON_METH_FASTCALL
PyObject *const *__pyx_args, Py_ssize_t __pyx_nargs, PyObject *__pyx_kwds
#else
PyObject *__pyx_args, PyObject *__pyx_kwds
#endif
); /*proto*/
PyDoc_STRVAR(__pyx_doc_34scikitplot_cython_ddc7a5b27b5b1257_f, "f(int n)");
static PyMethodDef __pyx_mdef_34scikitplot_cython_ddc7a5b27b5b1257_1f = {"f", (PyCFunction)(void(*)(void))(__Pyx_PyCFunction_FastCallWithKeywords)__pyx_pw_34scikitplot_cython_ddc7a5b27b5b1257_1f, __Pyx_METH_FASTCALL|METH_KEYWORDS, __pyx_doc_34scikitplot_cython_ddc7a5b27b5b1257_f};
static PyObject *__pyx_pw_34scikitplot_cython_ddc7a5b27b5b1257_1f(PyObject *__pyx_self,
#if CYTHON_METH_FASTCALL
PyObject *const *__pyx_args, Py_ssize_t __pyx_nargs, PyObject *__pyx_kwds
#else
PyObject *__pyx_args, PyObject *__pyx_kwds
#endif
) {
  int __pyx_v_n;
  #if !CYTHON_METH_FASTCALL
  CYTHON_UNUSED Py_ssize_t __pyx_nargs;
  #endif
  CYTHON_UNUSED PyObject *const *__pyx_kwvalues;
  PyObject *__pyx_r = 0;
  __Pyx_RefNannyDeclarations
  __Pyx_RefNannySetupContext("f (wrapper)", 0);
  #if !CYTHON_METH_FASTCALL
  #if CYTHON_ASSUME_SAFE_SIZE
  __pyx_nargs = PyTuple_GET_SIZE(__pyx_args);
  #else
  __pyx_nargs = PyTuple_Size(__pyx_args); if (unlikely(__pyx_nargs < 0)) return NULL;
  #endif
  #endif
  __pyx_kwvalues = __Pyx_KwValues_FASTCALL(__pyx_args, __pyx_nargs);
  {
    PyObject ** const __pyx_pyargnames[] = {&__pyx_mstate_global->__pyx_n_u_n,0};
  PyObject* values[1] = {0};
    const Py_ssize_t __pyx_kwds_len = (__pyx_kwds) ? __Pyx_NumKwargs_FASTCALL(__pyx_kwds) : 0;
    if (unlikely(__pyx_kwds_len) < 0) __PYX_ERR(0, 1, __pyx_L3_error)
    if (__pyx_kwds_len > 0) {
      switch (__pyx_nargs) {
        case  1:
        values[0] = __Pyx_ArgRef_FASTCALL(__pyx_args, 0);
        if (!CYTHON_ASSUME_SAFE_MACROS && unlikely(!values[0])) __PYX_ERR(0, 1, __pyx_L3_error)
        CYTHON_FALLTHROUGH;
        case  0: break;
        default: goto __pyx_L5_argtuple_error;
      }
      const Py_ssize_t kwd_pos_args = __pyx_nargs;
      if (__Pyx_ParseKeywords(__pyx_kwds, __pyx_kwvalues, __pyx_pyargnames, 0, values, kwd_pos_args, __pyx_kwds_len, "f", 0) < (0)) __PYX_ERR(0, 1, __pyx_L3_error)
      for (Py_ssize_t i = __pyx_nargs; i < 1; i++) {
        if (unlikely(!values[i])) { __Pyx_RaiseArgtupleInvalid("f", 1, 1, 1, i); __PYX_ERR(0, 1, __pyx_L3_error) }
      }
    } else if (unlikely(__pyx_nargs != 1)) {
      goto __pyx_L5_argtuple_error;
    } else {
      values[0] = __Pyx_ArgRef_FASTCALL(__pyx_args, 0);
      if (!CYTHON_ASSUME_SAFE_MACROS && unlikely(!values[0])) __PYX_ERR(0, 1, __pyx_L3_error)
    }
    __pyx_v_n = __Pyx_PyLong_As_int(values[0]); if (unlikely((__pyx_v_n == (int)-1) && PyErr_Occurred())) __PYX_ERR(0, 1, __pyx_L3_error)
  }
  goto __pyx_L6_skip;
  __pyx_L5_argtuple_error:;
  __Pyx_RaiseArgtupleInvalid("f", 1, 1, 1, __pyx_nargs); __PYX_ERR(0, 1, __pyx_L3_error)
  __pyx_L6_skip:;
  goto __pyx_L4_argument_unpacking_done;
  __pyx_L3_error:;
  for (Py_ssize_t __pyx_temp=0; __pyx_temp < (Py_ssize_t)(sizeof(values)/sizeof(values[0])); ++__pyx_temp) {
    Py_XDECREF(values[__pyx_temp]);
  }
  __Pyx_AddTraceback("scikitplot_cython_ddc7a5b27b5b1257.f", __pyx_clineno, __pyx_lineno, __pyx_filename);
  __Pyx_RefNannyFinishContext();
  return NULL;
  __pyx_L4_argument_unpacking_done:;
  __pyx_r = __pyx_pf_34scikitplot_cython_ddc7a5b27b5b1257_f(__pyx_self, __pyx_v_n);
  int __pyx_lineno = 0;
  const char *__pyx_filename = NULL;
  int __pyx_clineno = 0;

  /* function exit code */
  for (Py_ssize_t __pyx_temp=0; __pyx_temp < (Py_ssize_t)(sizeof(values)/sizeof(values[0])); ++__pyx_temp) {
    Py_XDECREF(values[__pyx_temp]);
  }
  __Pyx_RefNannyFinishContext();
  return __pyx_r;
}

static PyObject *__pyx_pf_34scikitplot_cython_ddc7a5b27b5b1257_f(CYTHON_UNUSED PyObject *__pyx_self, int __pyx_v_n) {
  PyObject *__pyx_r = NULL;
/* … */
  __pyx_t_2 = __Pyx_CyFunction_New(&__pyx_mdef_34scikitplot_cython_ddc7a5b27b5b1257_1f, 0, __pyx_mstate_global->__pyx_n_u_f, NULL, __pyx_mstate_global->__pyx_n_u_scikitplot_cython_ddc7a5b27b5b12, __pyx_mstate_global->__pyx_d, ((PyObject *)__pyx_mstate_global->__pyx_codeobj_tab[0])); if (unlikely(!__pyx_t_2)) __PYX_ERR(0, 1, __pyx_L1_error)
  __Pyx_GOTREF(__pyx_t_2);
  #if CYTHON_COMPILING_IN_CPYTHON && PY_VERSION_HEX >= 0x030E0000
  PyUnstable_Object_EnableDeferredRefcount(__pyx_t_2);
  #endif
  if (PyDict_SetItem(__pyx_mstate_global->__pyx_d, __pyx_mstate_global->__pyx_n_u_f, __pyx_t_2) < (0)) __PYX_ERR(0, 1, __pyx_L1_error)
  __Pyx_DECREF(__pyx_t_2); __pyx_t_2 = 0;
  __pyx_t_2 = __Pyx_PyDict_NewPresized(0); if (unlikely(!__pyx_t_2)) __PYX_ERR(0, 1, __pyx_L1_error)
  __Pyx_GOTREF(__pyx_t_2);
  if (PyDict_SetItem(__pyx_mstate_global->__pyx_d, __pyx_mstate_global->__pyx_n_u_test, __pyx_t_2) < (0)) __PYX_ERR(0, 1, __pyx_L1_error)
  __Pyx_DECREF(__pyx_t_2); __pyx_t_2 = 0;
−2:     return n*n
  __Pyx_XDECREF(__pyx_r);
  __pyx_t_1 = __Pyx_PyLong_From_int((__pyx_v_n * __pyx_v_n)); if (unlikely(!__pyx_t_1)) __PYX_ERR(0, 2, __pyx_L1_error)
  __Pyx_GOTREF(__pyx_t_1);
  __pyx_r = __pyx_t_1;
  __pyx_t_1 = 0;
  goto __pyx_L0;
"""

```
```
'\nGenerated by Cython 3.2.4\n\nYellow lines hint at Python interaction.\nClick on a line that starts with a "+" to see the C code that Cython generated for it.\n\nRaw output: scikitplot_cython_ddc7a5b27b5b1257.c\n\n−1: def f(int n):\n/* Python wrapper */\nstatic PyObject *__pyx_pw_34scikitplot_cython_ddc7a5b27b5b1257_1f(PyObject *__pyx_self,\n#if CYTHON_METH_FASTCALL\nPyObject *const *__pyx_args, Py_ssize_t __pyx_nargs, PyObject *__pyx_kwds\n#else\nPyObject *__pyx_args, PyObject *__pyx_kwds\n#endif\n); /*proto*/\nPyDoc_STRVAR(__pyx_doc_34scikitplot_cython_ddc7a5b27b5b1257_f, "f(int n)");\nstatic PyMethodDef __pyx_mdef_34scikitplot_cython_ddc7a5b27b5b1257_1f = {"f", (PyCFunction)(void(*)(void))(__Pyx_PyCFunction_FastCallWithKeywords)__pyx_pw_34scikitplot_cython_ddc7a5b27b5b1257_1f, __Pyx_METH_FASTCALL|METH_KEYWORDS, __pyx_doc_34scikitplot_cython_ddc7a5b27b5b1257_f};\nstatic PyObject *__pyx_pw_34scikitplot_cython_ddc7a5b27b5b1257_1f(PyObject *__pyx_self,\n#if CYTHON_METH_FASTCALL\nPyObject *const *__pyx_args, Py_ssize_t __pyx_nargs, PyObject *__pyx_kwds\n#else\nPyObject *__pyx_args, PyObject *__pyx_kwds\n#endif\n) {\n  int __pyx_v_n;\n  #if !CYTHON_METH_FASTCALL\n  CYTHON_UNUSED Py_ssize_t __pyx_nargs;\n  #endif\n  CYTHON_UNUSED PyObject *const *__pyx_kwvalues;\n  PyObject *__pyx_r = 0;\n  __Pyx_RefNannyDeclarations\n  __Pyx_RefNannySetupContext("f (wrapper)", 0);\n  #if !CYTHON_METH_FASTCALL\n  #if CYTHON_ASSUME_SAFE_SIZE\n  __pyx_nargs = PyTuple_GET_SIZE(__pyx_args);\n  #else\n  __pyx_nargs = PyTuple_Size(__pyx_args); if (unlikely(__pyx_nargs < 0)) return NULL;\n  #endif\n  #endif\n  __pyx_kwvalues = __Pyx_KwValues_FASTCALL(__pyx_args, __pyx_nargs);\n  {\n    PyObject ** const __pyx_pyargnames[] = {&__pyx_mstate_global->__pyx_n_u_n,0};\n  PyObject* values[1] = {0};\n    const Py_ssize_t __pyx_kwds_len = (__pyx_kwds) ? __Pyx_NumKwargs_FASTCALL(__pyx_kwds) : 0;\n    if (unlikely(__pyx_kwds_len) < 0) __PYX_ERR(0, 1, __pyx_L3_error)\n    if (__pyx_kwds_len > 0) {\n      switch (__pyx_nargs) {\n        case  1:\n        values[0] = __Pyx_ArgRef_FASTCALL(__pyx_args, 0);\n        if (!CYTHON_ASSUME_SAFE_MACROS && unlikely(!values[0])) __PYX_ERR(0, 1, __pyx_L3_error)\n        CYTHON_FALLTHROUGH;\n        case  0: break;\n        default: goto __pyx_L5_argtuple_error;\n      }\n      const Py_ssize_t kwd_pos_args = __pyx_nargs;\n      if (__Pyx_ParseKeywords(__pyx_kwds, __pyx_kwvalues, __pyx_pyargnames, 0, values, kwd_pos_args, __pyx_kwds_len, "f", 0) < (0)) __PYX_ERR(0, 1, __pyx_L3_error)\n      for (Py_ssize_t i = __pyx_nargs; i < 1; i++) {\n        if (unlikely(!values[i])) { __Pyx_RaiseArgtupleInvalid("f", 1, 1, 1, i); __PYX_ERR(0, 1, __pyx_L3_error) }\n      }\n    } else if (unlikely(__pyx_nargs != 1)) {\n      goto __pyx_L5_argtuple_error;\n    } else {\n      values[0] = __Pyx_ArgRef_FASTCALL(__pyx_args, 0);\n      if (!CYTHON_ASSUME_SAFE_MACROS && unlikely(!values[0])) __PYX_ERR(0, 1, __pyx_L3_error)\n    }\n    __pyx_v_n = __Pyx_PyLong_As_int(values[0]); if (unlikely((__pyx_v_n == (int)-1) && PyErr_Occurred())) __PYX_ERR(0, 1, __pyx_L3_error)\n  }\n  goto __pyx_L6_skip;\n  __pyx_L5_argtuple_error:;\n  __Pyx_RaiseArgtupleInvalid("f", 1, 1, 1, __pyx_nargs); __PYX_ERR(0, 1, __pyx_L3_error)\n  __pyx_L6_skip:;\n  goto __pyx_L4_argument_unpacking_done;\n  __pyx_L3_error:;\n  for (Py_ssize_t __pyx_temp=0; __pyx_temp < (Py_ssize_t)(sizeof(values)/sizeof(values[0])); ++__pyx_temp) {\n    Py_XDECREF(values[__pyx_temp]);\n  }\n  __Pyx_AddTraceback("scikitplot_cython_ddc7a5b27b5b1257.f", __pyx_clineno, __pyx_lineno, __pyx_filename);\n  __Pyx_RefNannyFinishContext();\n  return NULL;\n  __pyx_L4_argument_unpacking_done:;\n  __pyx_r = __pyx_pf_34scikitplot_cython_ddc7a5b27b5b1257_f(__pyx_self, __pyx_v_n);\n  int __pyx_lineno = 0;\n  const char *__pyx_filename = NULL;\n  int __pyx_clineno = 0;\n\n  /* function exit code */\n  for (Py_ssize_t __pyx_temp=0; __pyx_temp < (Py_ssize_t)(sizeof(values)/sizeof(values[0])); ++__pyx_temp) {\n    Py_XDECREF(values[__pyx_temp]);\n  }\n  __Pyx_RefNannyFinishContext();\n  return __pyx_r;\n}\n\nstatic PyObject *__pyx_pf_34scikitplot_cython_ddc7a5b27b5b1257_f(CYTHON_UNUSED PyObject *__pyx_self, int __pyx_v_n) {\n  PyObject *__pyx_r = NULL;\n/* … */\n  __pyx_t_2 = __Pyx_CyFunction_New(&__pyx_mdef_34scikitplot_cython_ddc7a5b27b5b1257_1f, 0, __pyx_mstate_global->__pyx_n_u_f, NULL, __pyx_mstate_global->__pyx_n_u_scikitplot_cython_ddc7a5b27b5b12, __pyx_mstate_global->__pyx_d, ((PyObject *)__pyx_mstate_global->__pyx_codeobj_tab[0])); if (unlikely(!__pyx_t_2)) __PYX_ERR(0, 1, __pyx_L1_error)\n  __Pyx_GOTREF(__pyx_t_2);\n  #if CYTHON_COMPILING_IN_CPYTHON && PY_VERSION_HEX >= 0x030E0000\n  PyUnstable_Object_EnableDeferredRefcount(__pyx_t_2);\n  #endif\n  if (PyDict_SetItem(__pyx_mstate_global->__pyx_d, __pyx_mstate_global->__pyx_n_u_f, __pyx_t_2) < (0)) __PYX_ERR(0, 1, __pyx_L1_error)\n  __Pyx_DECREF(__pyx_t_2); __pyx_t_2 = 0;\n  __pyx_t_2 = __Pyx_PyDict_NewPresized(0); if (unlikely(!__pyx_t_2)) __PYX_ERR(0, 1, __pyx_L1_error)\n  __Pyx_GOTREF(__pyx_t_2);\n  if (PyDict_SetItem(__pyx_mstate_global->__pyx_d, __pyx_mstate_global->__pyx_n_u_test, __pyx_t_2) < (0)) __PYX_ERR(0, 1, __pyx_L1_error)\n  __Pyx_DECREF(__pyx_t_2); __pyx_t_2 = 0;\n−2:     return n*n\n  __Pyx_XDECREF(__pyx_r);\n  __pyx_t_1 = __Pyx_PyLong_From_int((__pyx_v_n * __pyx_v_n)); if (unlikely(!__pyx_t_1)) __PYX_ERR(0, 2, __pyx_L1_error)\n  __Pyx_GOTREF(__pyx_t_1);\n  __pyx_r = __pyx_t_1;\n  __pyx_t_1 = 0;\n  goto __pyx_L0;\n'

```

Tags: [domain: cython](../../_tags/domain-cython.html) [plot-type: cython](../../_tags/plot-type-cython.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (0 minutes 1.286 seconds)

[![Launch binder](../../_images/binder_badge_logo5.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/cython/plot_02_build_profiles.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo5.svg)](../../lite/lab/index.html?path=auto_examples/cython/plot_02_build_profiles.ipynb)

[`Download Jupyter notebook: plot_02_build_profiles.ipynb`](../../_downloads/08761d35a1d099622f1fb73a45705c8b/plot_02_build_profiles.ipynb)

[`Download Python source code: plot_02_build_profiles.py`](../../_downloads/b23995e26470e0b68ae0edf2ee962e0a/plot_02_build_profiles.py)

[`Download zipped: plot_02_build_profiles.zip`](../../_downloads/044d73ef0bc56e7ac09aefe34a101419/plot_02_build_profiles.zip)

Related examples

![](../../_images/sphx_glr_plot_05_package_examples_multimodule_thumb.png)

[Multi-module package builds (5 package examples)](plot_05_package_examples_multimodule.html)

Multi-module package builds (5 package examples)![](../../_images/sphx_glr_plot_00_quickstart_compile_and_load_thumb.png)

[Cython quickstart: compile\_and\_load](plot_00_quickstart_compile_and_load.html)

Cython quickstart: compile\_and\_load![](../../_images/sphx_glr_plot_01_browse_and_compile_templates_thumb.png)

[Browse and compile templates](plot_01_browse_and_compile_templates.html)

Browse and compile templates![](../../_images/sphx_glr_plot_06_multifile_support_files_thumb.png)

[Multi-file builds: .pxi includes and external headers](plot_06_multifile_support_files.html)

Multi-file builds: .pxi includes and external headers

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)