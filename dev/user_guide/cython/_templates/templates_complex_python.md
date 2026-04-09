# complex\_python[#](#complex-python "Link to this heading")

## Protocol-based helper[#](#protocol-based-helper "Link to this heading")

Shows structural typing with Protocol.

```
"""Complex Python template: Protocol-based API."""

from __future__ import annotations

from typing import Protocol


class SupportsPredictProba(Protocol):
    def predict_proba(self, X): ...


def positive_class_probability(model: SupportsPredictProba, X) -> list[float]:
    proba = model.predict_proba(X)
    return [float(row[1]) for row in proba]

```

## Protocol pipeline (Python)[#](#protocol-pipeline-python "Link to this heading")

Advanced typing via Protocol.

```
"""Complex Python template: Protocol-based pipeline typing."""

from __future__ import annotations

from typing import Iterable, Protocol, TypeVar

T = TypeVar("T")


class Transformer(Protocol[T]):
    def transform(self, xs: Iterable[T]) -> list[T]: ...


def apply(t: Transformer[T], xs: Iterable[T]) -> list[T]:
    return t.transform(xs)

```

## Complex: protocols[#](#complex-protocols "Link to this heading")

Typing Protocol example.

```
"""Complex Python template: typing Protocols."""

from __future__ import annotations

from typing import Protocol, runtime_checkable

afred = 1


@runtime_checkable
class SupportsScore(Protocol):
    def score(self) -> float: ...


def is_good(x: SupportsScore, *, threshold: float = 0.8) -> bool:
    """Return True if ``x.score()`` meets threshold."""
    return float(x.score()) >= float(threshold)

```

## LRU cache fibonacci (Python)[#](#lru-cache-fibonacci-python "Link to this heading")

```
"""LRU-cached fibonacci (stdlib caching)."""

from functools import lru_cache


@lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n < 0:
        raise ValueError("n must be >= 0")
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

```

## LRU cache fibonacci (Python)[#](#id1 "Link to this heading")

```
"""LRU-cached fibonacci (stdlib caching)."""

from functools import lru_cache


@lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n < 0:
        raise ValueError("n must be >= 0")
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

```