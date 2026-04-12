# hard\_python[#](#hard-python "Link to this heading")

## CLI skeleton[#](#cli-skeleton "Link to this heading")

Executable-friendly Python CLI structure.

```
"""Hard Python template: CLI skeleton with argparse + logging.

This demonstrates canonical "executable-friendly" structure:
- parse_args(argv)
- main(argv) returning an exit code
"""

from __future__ import annotations

import argparse
import logging


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(prog="hard_cli")
    parser.add_argument("--level", default="INFO", help="Logging level")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    logging.basicConfig(level=getattr(logging, str(args.level).upper(), logging.INFO))
    logging.getLogger(__name__).info("Hello from CLI skeleton")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

```

## Hard: thread map[#](#hard-thread-map "Link to this heading")

ThreadPoolExecutor map pattern.

```
"""Hard Python template: concurrent execution.

Demonstrates a safe ThreadPoolExecutor pattern with bounded workers.
"""

from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from typing import Callable, Iterable


def thread_map(
    fn: Callable[[int], int], items: Iterable[int], *, max_workers: int = 4
) -> list[int]:
    """Map ``fn`` over items using a thread pool."""
    if max_workers <= 0:
        raise ValueError("max_workers must be positive")
    with ThreadPoolExecutor(max_workers=max_workers) as ex:
        return list(ex.map(fn, items))

```

## Quantile sketch interface (Python)[#](#quantile-sketch-interface-python "Link to this heading")

Template interface stub for advanced sketches.

```
"""Hard Python template: deterministic reservoir-free approximate quantile stub.

Note: This is a *template stub* describing interfaces. Replace with a real
quantile sketch (e.g. t-digest) if needed.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass
class QuantileSketch:
    """Template interface for a quantile sketch."""

    def update(self, x: float) -> None:
        raise NotImplementedError

    def quantile(self, q: float) -> float:
        raise NotImplementedError

```

## Stable softmax (Python)[#](#stable-softmax-python "Link to this heading")

```
"""Stable softmax (numerical stability)."""

from math import exp
from typing import Sequence


def softmax(x: Sequence[float]) -> list[float]:
    if not x:
        return []
    m = max(x)
    exps = [exp(v - m) for v in x]
    s = sum(exps)
    return [v / s for v in exps]

```

## Stable softmax (Python)[#](#id1 "Link to this heading")

```
"""Stable softmax (numerical stability)."""

from math import exp
from typing import Sequence


def softmax(x: Sequence[float]) -> list[float]:
    if not x:
        return []
    m = max(x)
    exps = [exp(v - m) for v in x]
    s = sum(exps)
    return [v / s for v in exps]

```