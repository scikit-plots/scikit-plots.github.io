# MemMap: file-backed or anonymous memory mapping[#](#memmap-file-backed-or-anonymous-memory-mapping "Link to this heading")

Examples relevant to the [`memmap`](../../apis/scikitplot.memmap.html#module-scikitplot.memmap "scikitplot.memmap") module.

When a file path is provided, the mapping is file-backed and reflects the
contents of the underlying file. When no file is provided, the module creates
an anonymous memory mapping backed by RAM only.

> **See also**
> * <https://numpy.org/doc/stable/reference/generated/numpy.memmap.html>

File-backed memory mapping with a safe, OS-agnostic interface.

This module provides an abstraction for accessing files as memory without
loading the entire file into RAM. Data is mapped lazily: only the portions
that are accessed are paged into memory by the operating system.

The goal of this module is to expose **memory semantics**, not raw I/O.
Implementation details such as POSIX `mmap` or Windows file mapping APIs
are intentionally hidden from users.

This design mirrors the philosophy of `numpy.memmap`:
high-level, portable, and safe by default.

## Conceptual overview[#](#conceptual-overview "Link to this heading")

Traditional file I/O copies data from disk into memory:

> file -> read() -> RAM buffer

Memory mapping instead exposes the file **as if it were memory**:

> file <-> OS page cache <-> process address space

This allows efficient random access to very large files without exceeding
available RAM.

## What this module is[#](#what-this-module-is "Link to this heading")

* A memory abstraction over files
* Lazy-loading and demand-paged
* Cross-platform (POSIX and Windows)
* Deterministic and explicit lifetime management
* Suitable for large datasets and random access patterns

## What this module is NOT[#](#what-this-module-is-not "Link to this heading")

* Not a file format parser
* Not a streaming I/O API
* Not a replacement for `read()` / `write()`
* Not an exposure of raw OS pointers

## Typical use cases[#](#typical-use-cases "Link to this heading")

* Large numeric or binary datasets
* Machine learning feature stores
* On-disk indexes or lookup tables
* Shared read-only data across processes
* Avoiding full file loads into RAM

## Design principles[#](#design-principles "Link to this heading")

* Intent-based naming (memmap, not mmap or mman)
* OS-specific details are private
* Public APIs do not expose pointers or syscalls
* Fail fast with clear, actionable errors
* Explicit ownership and lifetime control

Examples

Map a file and access its contents without loading it fully:

```
>>> from memmap import MemMap
>>> mm = MemMap.open("data.bin", mode="r")
>>> value = mm.read_at(offset=128, size=4)
>>> mm.close()

```

Only the requested bytes are accessed; the rest of the file remains on disk.

## Relationship to other APIs[#](#relationship-to-other-apis "Link to this heading")

* `io` modules move data (copy bytes into memory)
* `memmap` modules expose data (file-backed memory views)

If you need parsing or serialization, use an I/O module.
If you need random access to large data, use `memmap`.

## Platform notes[#](#platform-notes "Link to this heading")

Internally, this module uses:
\* POSIX `mmap` on Unix-like systems
\* Windows file mapping APIs on Windows

These details are implementation-specific and not part of the public API.

> **See also**
> * numpy.memmap
* scipy.io
* mmap (Python standard library)

## Notes for developers[#](#notes-for-developers "Link to this heading")

Public APIs must remain OS-agnostic.
Do not expose raw pointers, file descriptors, or platform-specific constants.
All resource acquisition must have explicit release semantics.