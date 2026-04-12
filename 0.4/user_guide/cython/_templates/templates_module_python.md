# module\_python[#](#module-python "Link to this heading")

## Registry pattern[#](#registry-pattern "Link to this heading")

Simple in-module registry pattern.

```
"""Module Python template: simple registry pattern."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class ModelSpec:
    name: str
    version: str


_REGISTRY: dict[str, ModelSpec] = {}


def register(spec: ModelSpec) -> None:
    _REGISTRY[spec.name] = spec


def get(name: str) -> ModelSpec:
    return _REGISTRY[name]

```

## Module layout (Python)[#](#module-layout-python "Link to this heading")

Example of \_\_all\_\_ and a small class.

```
"""Module Python template: recommended module layout."""

from __future__ import annotations

__all__ = ["Greeter"]


class Greeter:
    def __init__(self, name: str) -> None:
        self.name = name

    def hello(self) -> str:
        return f"Hello, {self.name}!"

```

## Module: package build[#](#module-package-build "Link to this heading")

Notes and example for build\_package\_from\_code.

```
"""Module Python template: package build notes.

This template is documentation-as-code for building a small extension package.
Use :func:`scikitplot.cython.build_package_from_code` to compile multiple modules
in one build directory.
"""

EXAMPLE = r"""
from scikitplot.cython import build_package_from_code

pkg = {
    "core": "def add(int a, int b):\n    return a+b\n",
    "metrics": "def f1(double p, double r):\n    return 2*p*r/(p+r)\n",
}
res = build_package_from_code(pkg, package_name="myfast")
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