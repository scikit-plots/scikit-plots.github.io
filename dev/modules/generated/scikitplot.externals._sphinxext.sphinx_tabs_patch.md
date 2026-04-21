# sphinx\_tabs\_patch[#](#sphinx-tabs-patch "Link to this heading")

Sphinx compatibility shim for docutils `backrefs`.

This extension prevents a hard failure in `sphinx-tabs` (sphinx\_tabs-3.4.7)
that manifests as `KeyError: 'backrefs'` with Docutils 0.22 during HTML builds.

The failure is triggered by `sphinx-tabs` attempting to remove `backrefs`
from an attribute mapping using `pop('backrefs')` without providing a
default. With recent docutils versions, some element nodes may not have the
`backrefs` list attribute present in their `.attributes` mapping at that
moment, so the unconditional pop raises.

This module fixes the problem **without modifying docutils** by ensuring that
all docutils element nodes in the doctree have a well-formed `backrefs`
entry (a list) before writers/visitors run.

Notes

* This is a compatibility workaround. The ideal long-term fix is in
  `sphinx-tabs`: replace `attrs.pop('backrefs')` with
  `attrs.pop('backrefs', None)` (or remove local attributes generically).
* This shim is safe because it only adds a missing key or normalizes an
  invalid value for a docutils-internal attribute.
* [executablebooks/sphinx-tabs#207](https://github.com/executablebooks/sphinx-tabs/pull/207)

Examples

Try it in your browser!

1. Place this file at `docs/source/_sphinx_ext/sphinx_tabs_patch.py`.
2. In `conf.py`:

```
>>> import os
>>> import sys
>>> import scikitplot
>>> sys.path.insert(0, os.path.abspath('_sphinx_ext'))
>>> extensions = [
...     # 'scikitplot.externals._sphinxext.sphinx_tabs_patch',
...     'sphinx_tabs_patch',   # <-- must come BEFORE sphinx_tabs.tabs
...     'sphinx_tabs.tabs',
...     # ... your other extensions
... ]

```

3. Rebuild:

$ make clean html

Go BackOpen In Tab