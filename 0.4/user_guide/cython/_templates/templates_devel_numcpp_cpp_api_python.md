# devel\_numcpp\_cpp\_api\_python[#](#devel-numcpp-cpp-api-python "Link to this heading")

## C++ bridge notes[#](#c-bridge-notes "Link to this heading")

Documentation-oriented notes for C++ extension workflows.

```
"""Developer Python template: notes for C++ bridge workflows.

This template is documentation-oriented. For actual C++ extension builds,
see the corresponding Cython template in the adjacent category.
"""

from __future__ import annotations


def notes() -> str:
    return (
        "For C++ integration, prefer building a small extension with language='c++' "
        "and linking extra_sources (e.g., .cpp). This devkit supports that."
    )

```

## C++ bridge notes (Python)[#](#c-bridge-notes-python "Link to this heading")

Documentation-only template.

```
"""Devel Python template: C++ bridge notes.

This file documents best practices for bridging Python to C++ extensions:
- prefer a small, stable Python API
- validate inputs in Python
- keep ABI-sensitive logic in the extension

This is documentation-only template.
"""

```

## Devel NumPy+C++: notes[#](#devel-numpy-c-notes "Link to this heading")

Notes for NumPy + C++ extension workflows.

```
"""Devel NumPy+C++ Python template: notes.

This folder holds templates that demonstrate NumPy with C++ extensions.
For a compiled example, see the sibling Cython template.
"""

NOTES = """\
For C++ integration, use:
- profile='release'
- language='c++'
- a toolchain with a C++ compiler
"""

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