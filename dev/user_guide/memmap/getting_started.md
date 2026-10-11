# Getting started[#](#getting-started "Link to this heading")

Create mappings through `MemoryMap` factory methods rather than by
constructing the extension type directly.

## Anonymous mapping[#](#anonymous-mapping "Link to this heading")

```
from scikitplot.memmap import MemoryMap

with MemoryMap.create_anonymous(4096) as mm:
    mm.write(b"hello", 0)
    assert mm.read(5, 0) == b"hello"

```

## File-backed mapping[#](#file-backed-mapping "Link to this heading")

File-backed mappings accept an ****open file descriptor****, a byte offset and a
mapping size. Offsets must satisfy the platform page-alignment requirement.
Keep file ownership clear: mapping a descriptor does not turn arbitrary binary
data into a parsed object.

Use `py_get_page_size` and `py_is_page_aligned` when calculating
portable offsets.