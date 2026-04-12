# basic\_python[#](#basic-python "Link to this heading")

## Basic: square[#](#basic-square "Link to this heading")

Pure Python function example.

```
"""Basic Python template: pure-Python function.

Goal
----
Provide a minimal reference for users starting with templates.
"""


def square(n: int) -> int:
    """Return n*n."""
    return n * n

```

## Add floats (Python)[#](#add-floats-python "Link to this heading")

```
"""Add two floats (pure Python)."""


def add(a: float, b: float) -> float:
    return a + b

```

## Toggle bool (Python)[#](#toggle-bool-python "Link to this heading")

```
"""Toggle a boolean (pure Python)."""


def toggle(flag: bool) -> bool:
    return not flag

```

## Repeat string (Python)[#](#repeat-string-python "Link to this heading")

```
"""Repeat a string (pure Python)."""


def repeat(s: str, n: int) -> str:
    if n < 0:
        raise ValueError("n must be >= 0")
    return s * n

```

## Dot product on sequences (Python)[#](#dot-product-on-sequences-python "Link to this heading")

```
"""Dot product on sequences (pure Python)."""

from typing import Sequence


def dot_list(x: Sequence[float], y: Sequence[float]) -> float:
    if len(x) != len(y):
        raise ValueError("length mismatch")
    return sum(a * b for a, b in zip(x, y))

```