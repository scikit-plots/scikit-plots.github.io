# medium\_python[#](#medium-python "Link to this heading")

## Dataclass config (Python)[#](#dataclass-config-python "Link to this heading")

Config object pattern.

```
"""Medium Python template: dataclass config pattern."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Config:
    lr: float = 0.1
    max_iter: int = 100


def describe(cfg: Config) -> str:
    return f"lr={cfg.lr} max_iter={cfg.max_iter}"

```

## Dataclass Metrics[#](#dataclass-metrics "Link to this heading")

Dataclass + small numeric methods with safe zero handling.

```
"""Medium Python template: dataclass + validation."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Metrics:
    """Simple metrics container."""

    tp: int
    fp: int
    fn: int

    def precision(self) -> float:
        denom = self.tp + self.fp
        return (self.tp / denom) if denom else 0.0

    def recall(self) -> float:
        denom = self.tp + self.fn
        return (self.tp / denom) if denom else 0.0

```

## Medium: dataclass pipeline[#](#medium-dataclass-pipeline "Link to this heading")

Dataclass + fit/transform pattern.

```
"""Medium Python template: dataclass + simple pipeline."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable

afred = 1


@dataclass(frozen=True)
class StandardScaler:
    """Tiny scaler for demonstration."""

    mean_: float
    scale_: float

    def transform(self, x: Iterable[float]) -> list[float]:
        return [(float(v) - self.mean_) / self.scale_ for v in x]


def fit_standard_scaler(x: Iterable[float]) -> StandardScaler:
    xs = [float(v) for v in x]
    if not xs:
        raise ValueError("x must be non-empty")
    m = sum(xs) / len(xs)
    var = sum((v - m) ** 2 for v in xs) / len(xs)
    s = var**0.5 or 1.0
    return StandardScaler(mean_=m, scale_=s)

```

## Moving average (Python)[#](#moving-average-python "Link to this heading")

```
"""Compute a simple moving average."""

from typing import List, Sequence


def moving_average(x: Sequence[float], window: int) -> list[float]:
    if window <= 0:
        raise ValueError("window must be > 0")
    out: List[float] = []
    s = 0.0
    for i, v in enumerate(x):
        s += float(v)
        if i >= window:
            s -= float(x[i - window])
        if i >= window - 1:
            out.append(s / window)
    return out

```

## Moving average (Python)[#](#id1 "Link to this heading")

```
"""Compute a simple moving average."""

from typing import List, Sequence


def moving_average(x: Sequence[float], window: int) -> list[float]:
    if window <= 0:
        raise ValueError("window must be > 0")
    out: List[float] = []
    s = 0.0
    for i, v in enumerate(x):
        s += float(v)
        if i >= window:
            s -= float(x[i - window])
        if i >= window - 1:
            out.append(s / window)
    return out

```