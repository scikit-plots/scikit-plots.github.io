# verify\_template\_assets[#](#verify-template-assets "Link to this heading")

scikitplot.cython.verify\_template\_assets()[[source]](https://github.com/scikit-plots/scikit-plots/blob/ba33a1a0/scikitplot/cython/_templates_api.py#L1205)[#](#scikitplot.cython.verify_template_assets "Link to this definition")
:   Verify every referenced template support asset is actually shipped.

    Walks all `*.meta.json` template descriptors and confirms that each file
    named in their `support_paths` (e.g. `.pxi` / `.pxd` includes) exists
    on disk next to the template. This is the in-package guard for
    CYTHON-WASM-001: a packaging recipe that excludes `**/*.pxi` (or any other
    support extension) would silently drop assets that shipped templates
    `include`; this check turns that into a detectable, testable failure
    instead of an opaque build error in the browser/WASM runtime.

    Returns:
    :   list of str
        :   Human-readable descriptions of missing assets — empty when every
            referenced support file is present.

    Return type:
    :   [list](https://docs.python.org/3/builtins/stdtypes.html#list "(in Python v3.15)")[[str](https://docs.python.org/3/builtins/stdtypes.html#str "(in Python v3.15)")]

    > **See also**
    > [`scikitplot.cython.platform_capabilities`](scikitplot.cython.platform_capabilities.html#scikitplot.cython.platform_capabilities "scikitplot.cython.platform_capabilities")
    :   Declares whether runtime compilation is available on this platform.

    Examples

    Try it in your browser!
    ```
    >>> missing = verify_template_assets()
    >>> assert missing == [], missing

    ```
    Go BackOpen In Tab