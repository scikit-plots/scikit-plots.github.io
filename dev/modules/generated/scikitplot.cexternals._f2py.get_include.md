# get\_include[#](#get-include "Link to this heading")

scikitplot.cexternals.\_f2py.get\_include()[[source]](https://github.com/scikit-plots/scikit-plots/blob/f02632e/scikitplot/cexternals/_f2py/__init__.py#L33)[#](#scikitplot.cexternals._f2py.get_include "Link to this definition")
:   Return the directory that contains the `fortranobject.c` and `.h` files.

    > **Note**
    > This function is not needed when building an extension with
    `numpy.distutils` directly from `.f` and/or `.pyf` files
    in one go.

    Python extension modules built with f2py-generated code need to use
    `fortranobject.c` as a source file, and include the `fortranobject.h`
    header. This function can be used to obtain the directory containing
    both of these files.

    Returns:
    :   ****include\_path****str
        :   Absolute path to the directory containing `fortranobject.c` and
            `fortranobject.h`.

    > **See also**
    > [`numpy.get_include`](https://numpy.org/devdocs/reference/generated/numpy.get_include.html#numpy.get_include "(in NumPy v2.5.dev0)")
    :   function that returns the numpy include directory

    Notes

    Added in version 1.21.1.

    Unless the build system you are using has specific support for f2py,
    building a Python extension using a `.pyf` signature file is a two-step
    process. For a module `mymod`:

    * Step 1: run `python -m numpy.f2py mymod.pyf --quiet`. This
      generates `mymodmodule.c` and (if needed)
      `mymod-f2pywrappers.f` files next to `mymod.pyf`.
    * Step 2: build your Python extension module. This requires the
      following source files:

      * `mymodmodule.c`
      * `mymod-f2pywrappers.f` (if it was generated in Step 1)
      * `fortranobject.c`