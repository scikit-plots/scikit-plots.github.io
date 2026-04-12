# easy\_python[#](#easy-python "Link to this heading")

## Histogram (pure Python)[#](#histogram-pure-python "Link to this heading")

Counts integer occurrences using Counter.

```
"""Easy Python template: small algorithm with clear loops."""

from __future__ import annotations

from collections import Counter
from typing import Iterable


def histogram(values: Iterable[int]) -> dict[int, int]:
    """Count integer occurrences.

    Parameters
    ----------
    values : Iterable[int]
        Input integers.

    Returns
    -------
    dict[int, int]
        Mapping value -> count.
    """
    return dict(Counter(values))

```

## Easy: running mean[#](#easy-running-mean "Link to this heading")

Streaming running mean generator.

```
"""Easy Python template: streaming statistic.

Shows stateful iteration and a small utility.
"""

from __future__ import annotations

from typing import Iterable, Iterator


def running_mean(values: Iterable[float]) -> Iterator[float]:
    """Yield the running mean of *values*."""
    total = 0.0
    n = 0
    for x in values:
        n += 1
        total += float(x)
        yield total / n

```

## Count chars (Python)[#](#count-chars-python "Link to this heading")

```
"""Count characters in a string."""

from collections import Counter


def count_chars(s: str) -> dict[str, int]:
    return dict(Counter(s))

```

## Count chars (Python)[#](#id1 "Link to this heading")

```
"""Count characters in a string."""

from collections import Counter


def count_chars(s: str) -> dict[str, int]:
    return dict(Counter(s))

```

## Count chars (Python)[#](#id2 "Link to this heading")

```
"""Count characters in a string."""

from collections import Counter


def count_chars(s: str) -> dict[str, int]:
    return dict(Counter(s))

```