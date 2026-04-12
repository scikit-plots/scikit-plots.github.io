# devel\_numpy\_c\_api\_python[#](#devel-numpy-c-api-python "Link to this heading")

## Devel NumPy: optional[#](#devel-numpy-optional "Link to this heading")

Optional NumPy import pattern.

```
"""Devel NumPy Python template: optional NumPy usage."""

from __future__ import annotations

from typing import Sequence


def maybe_mean(x: Sequence[float]) -> float:
    """Compute mean; uses NumPy if installed, otherwise pure Python."""
    try:
        import numpy as np  # type: ignore
    except Exception:
        xs = [float(v) for v in x]
        if not xs:
            raise ValueError("empty")
        return sum(xs) / len(xs)
    arr = np.asarray(x, dtype=float)
    if arr.size == 0:
        raise ValueError("empty")
    return float(arr.mean())

```

## NumPy conversion (Python)[#](#numpy-conversion-python "Link to this heading")

Optional NumPy usage with explicit import.

```
"""Devel Python template: NumPy usage (optional dependency)."""

from __future__ import annotations

from typing import Any


def as_float64_array(x: Any):
    """Convert input to a float64 NumPy array.

    Raises ImportError if NumPy is not installed.
    """
    import numpy as np  # noqa: PLC0415

    return np.asarray(x, dtype=np.float64)

```

## Dataclass Point (Python)[#](#dataclass-point-python "Link to this heading")

```
"""Dataclass example."""

from dataclasses import dataclass


@dataclass(frozen=True)
class Point:
    x: float
    y: float


def norm2(p: Point) -> float:
    return (p.x * p.x + p.y * p.y) ** 0.5

```

## Dataclass Point (Python)[#](#id1 "Link to this heading")

```
"""Dataclass example."""

from dataclasses import dataclass


@dataclass(frozen=True)
class Point:
    x: float
    y: float


def norm2(p: Point) -> float:
    return (p.x * p.x + p.y * p.y) ** 0.5

```

## Dataclass Point (Python)[#](#id2 "Link to this heading")

```
"""Dataclass example."""

from dataclasses import dataclass


@dataclass(frozen=True)
class Point:
    x: float
    y: float


def norm2(p: Point) -> float:
    return (p.x * p.x + p.y * p.y) ** 0.5

```