# scikitplot.memmap[#](#module-scikitplot.memmap "Link to this heading")

MemMap: file-backed or anonymous memory mapping.

When a file path is provided, the mapping is file-backed and reflects the
contents of the underlying file. When no file is provided, the module creates
an anonymous memory mapping backed by RAM only.

This module provides a high-level abstraction for file-backed memory mapping,
allowing data on disk to be accessed as memory without loading the entire file
into RAM. The design follows the same conceptual model as `numpy.memmap`:
OS-agnostic, intent-based, and providing safer, on-demand access for Python
users.

While this module is implemented on top of Annoy’s low-level `mman` layer,
which operates on raw memory and offsets for custom binary index formats, all
operating-system details are hidden from the public API. Raw pointers and
platform-specific constructs are not exposed to user code.

This module is not a file I/O or parsing interface and does not eagerly copy
file contents into memory. It is intended for efficient random access to large,
stable binary data stored on disk with explicit and deterministic lifetime
management.

****User guide.**** See the [MemMap: file-backed or anonymous memory mapping](../user_guide/memmap/index.html#memmap-index) section for further details.

## MemMap: file-backed or anonymous memory mapping.[#](#memmap-file-backed-or-anonymous-memory-mapping "Link to this heading")

****User guide.**** See the [MemMap: file-backed or anonymous memory mapping](../user_guide/memmap/index.html#memmap-index) section for further details.

Class inheritance

![Inheritance diagram of MemoryMap](../_images/inheritance-91939b8fa837238ad34b831e4acc6d696114ea61.png)



|  |  |
| --- | --- |
| [`MemoryMap`](../modules/generated/scikitplot.memmap.MemoryMap.html#scikitplot.memmap.MemoryMap "scikitplot.memmap.MemoryMap") | Memory-mapped region with automatic resource management. |
| [`mmap_region`](../modules/generated/scikitplot.memmap.mmap_region.html#scikitplot.memmap.mmap_region "scikitplot.memmap.mmap_region") | Create a memory-mapped region (convenience function). |