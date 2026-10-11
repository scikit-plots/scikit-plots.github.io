# Memory mapping[#](#memory-mapping "Link to this heading")

`scikitplot.memmap` exposes a small native memory-mapping API for anonymous or file-backed regions. It is intended for explicit lifetime management and random byte access, not for parsing file formats or replacing ordinary stream I/O.

> **Important**
> A memory mapping is a resource with operating-system lifetime and protection rules. Prefer a context manager, validate offsets and sizes, and never treat a raw address as a portable data interface.
Getting started

Create an anonymous or file-backed mapping and close it deterministically.

[Getting started](getting_started.html#memmap-getting-started)Lifecycle and I/O

Read/write mapped ranges, context management, offsets, and ownership.

[Lifecycle and I/O](lifecycle_and_io.html#memmap-lifecycle-and-io)Protection, sync, and locking

Use mprotect, msync, and mlock with platform-aware expectations.

[Protection, sync, and locking](protection_sync_locking.html#memmap-protection-sync-locking)Python API

MemoryMap, mmap\_region, flags, validation helpers, and exceptions.

[Python API](python_api.html#memmap-python-api)Platform and limits

Page alignment, permissions, native-build requirements, and portability.

[Platform and limits](platform_and_limits.html#memmap-platform-and-limits)

## Which page should I use?[#](#which-page-should-i-use "Link to this heading")

Start with ****Getting started****. Then choose the page that owns the decision
you are making: architecture and lifecycle, configuration, persistence,
performance, public API, or limits. The guide intentionally separates those
concerns so examples do not accidentally become policy.

## Examples[#](#examples "Link to this heading")

See [MemMap](../../auto_examples/memmap/index.html#memmap-examples) for executable examples that accompany this guide.

## See also[#](#see-also "Link to this heading")

* [Annoy vector search](../annoy/index.html#annoy-index)

## Further reading[#](#further-reading "Link to this heading")

> **See also**
> * <https://numpy.org/doc/stable/reference/generated/numpy.memmap.html>
* numpy.memmap
* scipy.io
* mmap (Python standard library)