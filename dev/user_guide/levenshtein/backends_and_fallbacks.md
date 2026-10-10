# Backends and fallback[#](#backends-and-fallback "Link to this heading")

## Inspect capabilities[#](#inspect-capabilities "Link to this heading")

```
from scikitplot.levenshtein import available_backends

for info in available_backends():
    print(info.name, info.available, info.version, info.license)

```

The capability record is informational and does not import every optional
accelerator eagerly when the facade itself is imported.

## Automatic policy[#](#automatic-policy "Link to this heading")

`backend="auto"` uses this preference order:

| Backend | Implementation | License posture | Automatic? |
| --- | --- | --- | --- |
| `internal` | bundled `cexternals._editdistance` | MIT component in Scikit-Plots | yes |
| `rapidfuzz` | `rapidfuzz.distance.Levenshtein` | MIT | yes |
| `python` | local dynamic-programming fallback | BSD-3-Clause | yes, terminal fallback |
| `levenshtein` | external `Levenshtein` package | GPL-2.0-or-later | ****no; explicit only**** |

## Explicit selection[#](#explicit-selection "Link to this heading")

```
from scikitplot.levenshtein import distance

distance("kitten", "sitting", backend="rapidfuzz")

```

If that backend is unavailable:

`strict=False` (default)
:   Log a warning and fall back to the safe automatic path.

`strict=True`
:   Raise [`ImportError`](https://docs.python.org/3/builtins/exceptions.html#ImportError "(in Python v3.15)").

```
distance(
    "kitten",
    "sitting",
    backend="rapidfuzz",
    strict=True,
)

```

## Runtime failure[#](#runtime-failure "Link to this heading")

An accelerator can import correctly and still fail for a particular input or
environment.

With `strict=False` the facade warns and uses pure Python. With
`strict=True` the original runtime exception is propagated.

The pure-Python implementation is therefore the portability floor, not merely
a testing backend.

## Why the GPL backend is explicit-only[#](#why-the-gpl-backend-is-explicit-only "Link to this heading")

Scikit-Plots can interoperate with an installed external package without
making it part of the default automatic selection policy. This keeps automatic
behavior license-conservative and predictable.

Use the external backend only when your environment and distribution policy
have made that choice deliberately.