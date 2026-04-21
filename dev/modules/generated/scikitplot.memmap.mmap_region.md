# mmap\_region[#](#mmap-region "Link to this heading")

scikitplot.memmap.mmap\_region(**int size: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)")**, **int prot: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0x3**, **int flags: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0x22**, **int fd: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = -1**, **int offset: [int](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)") = 0**) → [MemoryMap](scikitplot.memmap.MemoryMap.html#scikitplot.memmap.MemoryMap "scikitplot.memmap.MemoryMap")[#](#scikitplot.memmap.mmap_region "Link to this definition")
:   Create a memory-mapped region (convenience function).

    Parameters:
    :   ****size****int
        :   Size of mapping in bytes

        ****prot****int, optional
        :   Protection flags. Default: PROT\_READ | PROT\_WRITE

        ****flags****int, optional
        :   Mapping flags. Default: MAP\_PRIVATE | MAP\_ANONYMOUS

        ****fd****int, optional
        :   File descriptor. Default: -1 (anonymous)

        ****offset****int, optional
        :   File offset. Default: 0

    Returns:
    :   MemoryMap
        :   New memory mapping

    Parameters:
    :   * ****size**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****prot**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****flags**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****fd**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))
        * ****offset**** ([**int**](https://docs.python.org/3/library/functions.html#int "(in Python v3.14)"))

    Return type:
    :   [**MemoryMap**](scikitplot.memmap.MemoryMap.html#scikitplot.memmap.MemoryMap "scikitplot.memmap._memmap.mem_map.MemoryMap")

    Examples

    Try it in your browser!
    ```
    >>> m = mmap_region(4096)
    >>> m.write(b"Hello")
    >>> m.close()

    ```
    Go BackOpen In Tab