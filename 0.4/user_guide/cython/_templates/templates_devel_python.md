# devel\_python[#](#devel-python "Link to this heading")

## Devel: logging CLI[#](#devel-logging-cli "Link to this heading")

Argparse + logging skeleton.

```
"""Devel Python template: logging + argparse skeleton."""

from __future__ import annotations

import argparse
import logging
from typing import Sequence


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    p = argparse.ArgumentParser(prog="tool", description="Skeleton CLI")
    p.add_argument("--log-level", default="INFO")
    return p.parse_args(list(argv) if argv is not None else None)


def main(argv: Sequence[str] | None = None) -> int:
    ns = parse_args(argv)
    logging.basicConfig(level=getattr(logging, ns.log_level.upper(), logging.INFO))
    logging.getLogger(__name__).info("Hello from template")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

```

## Logging patterns[#](#logging-patterns "Link to this heading")

Shows logger usage and custom exceptions.

```
"""Developer Python template: logging patterns + structured errors."""

from __future__ import annotations

import logging

log = logging.getLogger(__name__)


class ConfigError(RuntimeError):
    """Raised when configuration is invalid."""


def validate_positive(name: str, value: int) -> None:
    if value <= 0:
        raise ConfigError(f"{name} must be > 0; got {value!r}")
    log.debug("validated %s=%s", name, value)

```

## Logging main (Python)[#](#logging-main-python "Link to this heading")

Argparse + logging skeleton.

```
"""Devel Python template: logging + main pattern."""

from __future__ import annotations

import argparse
import logging
import sys
from typing import Sequence


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--log-level", default="INFO")
    return p.parse_args(list(argv) if argv is not None else None)


def main(argv: Sequence[str] | None = None) -> int:
    ns = parse_args(argv)
    logging.basicConfig(
        level=getattr(logging, ns.log_level.upper(), logging.INFO), stream=sys.stderr
    )
    logging.getLogger(__name__).info("Hello from template")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

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