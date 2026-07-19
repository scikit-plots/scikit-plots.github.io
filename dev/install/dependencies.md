# Dependencies[#](#dependencies "Link to this heading")

## Runtime dependencies[#](#runtime-dependencies "Link to this heading")

### Required[#](#required "Link to this heading")

When installing through a package manager like `pip` or `conda`, the
mandatory dependencies are automatically installed. This list is mainly for
reference.

* [Python](https://www.python.org/downloads/) (>= 3.11)
* [contourpy](https://pypi.org/project/contourpy/) (>= 1.0.1)
* [cycler](https://matplotlib.org/cycler/) (>= 0.10.0)
* [dateutil](https://pypi.org/project/python-dateutil/) (>= 2.7)
* [fontTools](https://fonttools.readthedocs.io/en/latest/) (>= 4.22.0)
* [kiwisolver](https://github.com/nucleic/kiwi) (>= 1.3.1)
* [NumPy](https://numpy.org) (>= 1.25)
* [packaging](https://pypi.org/project/packaging/) (>= 20.0)
* [Pillow](https://pillow.readthedocs.io/en/latest/) (>= 9.0)
* [pyparsing](https://pypi.org/project/pyparsing/) (>= 3)

### Optional[#](#optional "Link to this heading")

The following packages and tools are not required but extend the capabilities
of Matplotlib.

#### Backends[#](#backends "Link to this heading")

Matplotlib figures can be rendered to various user interfaces. See
[What is a backend?](https://matplotlib.org/devdocs/users/explain/figure/backends.html#what-is-a-backend "(in Matplotlib v3.12.0.dev368+g6db3896c8)") for more details on the optional Matplotlib backends
and the capabilities they provide.

* [Tk](https://docs.python.org/3/library/tk.html) (>= 8.5, != 8.6.0 or 8.6.1): for the Tk-based backends. Tk is part of
  most standard Python installations, but it’s not part of Python itself and
  thus may not be present in rare cases.
* [PyQt6](https://pypi.org/project/PyQt6/) (>= 6.1), [PySide6](https://pypi.org/project/PySide6/), [PyQt5](https://pypi.org/project/PyQt5/) (>= 5.12), or [PySide2](https://pypi.org/project/PySide2/): for the Qt-based
  backends.
* [PyGObject](https://pygobject.readthedocs.io/en/latest/) and [pycairo](https://pycairo.readthedocs.io/en/latest/) (>= 1.14.0): for the GTK-based backends. If using pip
  (but not conda or system package manager) PyGObject must be built from
  source; see [pygobject documentation](https://pygobject.readthedocs.io/en/latest/devguide/dev_environ.html).
* [pycairo](https://pycairo.readthedocs.io/en/latest/) (>= 1.14.0) or [cairocffi](https://doc.courtbouillon.org/cairocffi/stable/) (>= 0.8): for cairo-based backends.
* [wxPython](https://www.wxpython.org/) (>= 4): for the wx-based backends. If using pip (but not conda or
  system package manager) on Linux wxPython wheels must be manually downloaded
  from <https://wxpython.org/pages/downloads/>.
* [Tornado](https://pypi.org/project/tornado/) (>= 5): for the WebAgg backend.
* [ipykernel](https://pypi.org/project/ipykernel/): for the nbagg backend.
* macOS (>= 10.12): for the macosx backend.

#### Animations[#](#animations "Link to this heading")

* [ffmpeg](https://www.ffmpeg.org/): for saving movies.
* [ImageMagick](https://www.imagemagick.org/script/index.php): for saving
  animated gifs.

#### Font handling and rendering[#](#font-handling-and-rendering "Link to this heading")

* [LaTeX](https://www.latex-project.org/) (with [cm-super](https://ctan.org/pkg/cm-super) and [underscore](https://ctan.org/pkg/underscore)) and [GhostScript (>= 9.0)](https://ghostscript.com/releases/): for rendering text with LaTeX.
* [fontconfig](https://www.fontconfig.org) (>= 2.7): for detection of system
  fonts on Linux.

### C libraries[#](#c-libraries "Link to this heading")

Matplotlib brings its own copies of the following libraries:

* `Agg`: the Anti-Grain Geometry C++ rendering engine
* `ttconv`: a TrueType font utility

Additionally, Matplotlib depends on:

* [FreeType](https://www.freetype.org/) (>= 2.3): a font rendering library
* [QHull](http://www.qhull.org/) (>= 8.0.2): a library for computing triangulations (note that this version is
  also known as 2020.2)

#### Download during install[#](#download-during-install "Link to this heading")

By default, Matplotlib downloads and builds its own copies of Qhull and FreeType.
The vendored version of FreeType is necessary to run the test suite, because
different versions of FreeType rasterize characters differently.

#### Use system libraries[#](#use-system-libraries "Link to this heading")

To force Matplotlib to use a copy of FreeType or Qhull already installed in your system,
you must [pass configuration settings to Meson via meson-python](https://meson-python.readthedocs.io/en/stable/how-to-guides/config-settings.html):

```
python -m pip install \
  --config-settings=setup-args="-Dsystem-freetype=true" \
  --config-settings=setup-args="-Dsystem-qhull=true" \
  .

```

In this case, you need to install the FreeType and Qhull library and headers.
This can be achieved using a package manager, e.g. for FreeType:

```
# Pick ONE of the following:
sudo apt install libfreetype6-dev  # Debian/Ubuntu
sudo dnf install freetype-devel    # Fedora
brew install freetype              # macOS with Homebrew
conda install freetype             # conda, any OS

```

(adapt accordingly for Qhull).

On Linux and macOS, it is also recommended to install [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/), a helper
tool for locating FreeType:

```
# Pick ONE of the following:
sudo apt install pkg-config  # Debian/Ubuntu
sudo dnf install pkgconf     # Fedora
brew install pkg-config      # macOS with Homebrew
conda install pkg-config     # conda
# Or point the PKG_CONFIG environment variable to the path to pkg-config:
export PKG_CONFIG=...

```

If not using pkg-config (in particular on Windows), you may need to set the
include path (to the library headers) and link path (to the libraries)
explicitly, if they are not in standard locations. This can be done using
standard environment variables – on Linux and macOS:

```
export CFLAGS='-I/directory/containing/ft2build.h'
export LDFLAGS='-L/directory/containing/libfreetype.so'

```

and on Windows:

```
set CL=/IC:\directory\containing\ft2build.h
set LINK=/LIBPATH:C:\directory\containing\freetype.lib

```

If you go this route but need to reset and rebuild to change your settings,
remember to clear your artifacts before re-building:

```
git clean -xfd

```

#### From source files[#](#from-source-files "Link to this heading")

If the automatic download does not work (for example, on air-gapped systems) it is
preferable to instead use system libraries. However you can manually download the
tarballs into `subprojects/packagecache` at the top level of the checkout
repository. The expected SHA256 hashes of the downloaded tarballs are in
`subprojects/*.wrap` if you wish to verify them, but they will also be checked by
the build system before unpacking.

### Minimum pip / manylinux support (linux)[#](#minimum-pip-manylinux-support-linux "Link to this heading")

Matplotlib publishes [manylinux wheels](https://github.com/pypa/manylinux)
which have a minimum version of pip which will recognize the wheels

* Python 3.9+: `manylinux2014` / pip >= 19.3

In all cases the required version of pip is embedded in the CPython source.

## Build dependencies[#](#build-dependencies "Link to this heading")

### Python[#](#setup-dependencies "Link to this heading")

`pip` normally builds packages using [build isolation](https://pip.pypa.io/en/stable/reference/build-system/ "(in pip v26.1)"),
which means that `pip` installs the dependencies listed here for the
duration of the build process. However, build isolation is disabled via the the
[–no-build-isolation](https://pip.pypa.io/en/stable/cli/pip_install/#install-no-build-isolation "(in pip v26.1)") flag
when [installing Matplotlib for development](../devel/guide_devel_setup.html#development-install), which
means that the dependencies must be explicitly installed, either by [creating a virtual environment](../devel/guide_devel_setup.html#dev-environment)
(recommended) or by manually installing the following packages:

* [meson-python](https://meson-python.readthedocs.io/) (>= 0.13.1).
* [PyBind11](https://pypi.org/project/pybind11/) (>= 2.13.2). Used to connect C/C++ code
  with Python.
* [setuptools\_scm](https://pypi.org/project/setuptools-scm/) (>= 7). Used to
  update the reported `mpl.__version__` based on the current git commit.
  Also a runtime dependency for editable installs.
* [NumPy](https://numpy.org/) (>= 1.22). Also a runtime dependency.

### Compilers and external build tools[#](#compilers-and-external-build-tools "Link to this heading")

When setting up a virtual environment for development, [ninja](https://ninja-build.org/)
(>= 1.8.2) may need to be installed separately. This may be available
as a [pre-built binary](https://github.com/ninja-build/ninja/releases) or from a
[package manager](https://github.com/ninja-build/ninja/wiki/Pre-built-Ninja-packages)
or bundled with Meson. Ninja may also be installed via `pip` if otherwise not
available.

#### Compilers[#](#compilers "Link to this heading")

Matplotlib requires a C++ compiler that supports C++17, and each platform has a
development environment that must be installed before a compiler can be installed.
You may also need to install headers for various libraries used in the compiled extension
source files.

Linux

On some Linux systems, you can install a meta-build package. For example,
on Ubuntu `apt install build-essential` with elevated privileges.

Otherwise, use the system distribution’s package manager to install
[gcc](#compiler-table).


macOS

Install [Xcode](https://developer.apple.com/xcode/) for Apple platform development.


Windows

Install [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/?q=build+tools)

Make sure “Desktop development with C++” is selected, and that the latest MSVC,
“C++ CMake tools for Windows,” and a Windows SDK compatible with your version
of Windows are selected and installed. They should be selected by default under
the “Optional” subheading, but are required to build Matplotlib from source.

Alternatively, you can install a Linux-like environment such as [CygWin](https://www.cygwin.com/)
or [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install).
If using [MinGW-64](https://www.mingw-w64.org/), we require ****v6**** of the
``Mingw-w64-x86_64-headers`.

We highly recommend that you install a compiler using your platform tool, i.e., Xcode,
VS Code or Linux package manager. Choose ****one**** compiler from this list:

| compiler | minimum version | platforms | notes |
| --- | --- | --- | --- |
| GCC | ****7.2**** | Linux, macOS, Windows | [gcc 7.2](https://gcc.gnu.org/projects/cxx-status.html#cxx17), [GCC: Binaries](https://gcc.gnu.org/install/binaries.html), |
| Clang (LLVM) | ****5**** | Linux, macOS | [clang 5](https://clang.llvm.org/cxx_status.html), [LLVM](https://releases.llvm.org/download.html) |
| MSVC++ | ****16.0**** | Windows | [Visual Studio 2019 C++](https://docs.microsoft.com/en-us/cpp/overview/visual-cpp-language-conformance?view=msvc-160) |

## Test dependencies[#](#test-dependencies "Link to this heading")

This section lists the additional software required for
[running the tests](https://docs.xarray.dev/en/stable/user-guide/testing.html#testing "(in xarray v2026.7.0)").

### Required[#](#id9 "Link to this heading")

* [pytest](https://docs.pytest.org/en/stable/) (>= 7.0.0)

### Optional[#](#id10 "Link to this heading")

In addition to all of the optional dependencies on the main library, for
testing the following will be used if they are installed.

#### Python[#](#id11 "Link to this heading")

These packages are installed when [creating a virtual environment](../devel/guide_devel_setup.html#dev-environment),
otherwise they must be installed manually:

* [nbformat](https://pypi.org/project/nbformat/) and [nbconvert](https://pypi.org/project/nbconvert/) used to test the notebook backend
* [pandas](https://pandas.pydata.org/) used to test compatibility with Pandas
* [pikepdf](https://pypi.org/project/pikepdf/) used in some tests for the pgf and pdf backends
* [psutil](https://pypi.org/project/psutil/) used in testing the interactive backends
* [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/) (>= 2.3.1) to collect coverage information
* [pytest-timeout](https://pypi.org/project/pytest-timeout/) to limit runtime in case of stuck tests
* [pytest-xdist](https://pypi.org/project/pytest-xdist/) to run tests in parallel
* [pytest-xvfb](https://pypi.org/project/pytest-xvfb/) to run tests without windows popping up (Linux)
* [pytz](https://pypi.org/project/pytz/) used to test pytz int
* [sphinx](https://pypi.org/project/Sphinx/) used to test our sphinx extensions
* [xarray](https://pypi.org/project/xarray/) used to test compatibility with xarray

#### External tools[#](#external-tools "Link to this heading")

* [Ghostscript](https://ghostscript.com/) (>= 9.0, to render PDF files)
* [Inkscape](https://inkscape.org) (to render SVG files)
* [WenQuanYi Zen Hei](http://wenq.org/en/) and [Noto Sans CJK](https://fonts.google.com/noto/use) fonts for testing font fallback and
  non-Western fonts

If any of these dependencies are not discovered, then the tests that rely on
them will be skipped by pytest.

> **Note**
> When installing Inkscape on Windows, make sure that you select “Add
Inkscape to system PATH”, either for all users or current user, or the
tests will not find it.

## Documentation dependencies[#](#documentation-dependencies "Link to this heading")

### Python[#](#id12 "Link to this heading")

The additional Python packages required to build the
[documentation](https://matplotlib.org/devdocs/devel/document.html#documenting-matplotlib "(in Matplotlib v3.12.0.dev368+g6db3896c8)") are listed in
`doc.txt` and can be installed using

```
pip install -r requirements/doc.txt

```

The content of `doc.txt` is also shown below:

```
# Created at: 2026-07-07 19:11:22.373698
# Generated via tools/requirements/generate_requirements.py.
# Do not edit this file; modify `pyproject.toml` instead and run `python tools/generate_requirements.py`.
-r core.txt
sphinx[testing]>=5.0.0,<100.0.0
sphinx-copybutton
sphinx-togglebutton
sphinx-design
sphinx-gallery
sphinx-prompt
sphinx-remove-toctrees
sphinx-rtd-theme
sphinx-tabs
sphinx-tags
sphinxext-opengraph
sphinxcontrib-inlinesyntaxhighlight
sphinxcontrib-sass
sphinxcontrib-svg2pdfconverter
pydata-sphinx-theme
colorspacious
jinja2
jupyter-sphinx
jupyterlite-pyodide-kernel
jupyterlite-sphinx
jupytext
intersphinx_registry
numpydoc
myst-nb
myst-parser
packaging
pooch
towncrier
catboost
xgboost

```

### External tools[#](#doc-dependencies-external "Link to this heading")

#### Required[#](#id14 "Link to this heading")

The documentation requires LaTeX and Graphviz. These are not
Python packages and must be installed separately.

* [Graphviz](http://www.graphviz.org/download)
* a LaTeX distribution, e.g. [TeX Live](https://www.tug.org/texlive/) or
  [MikTeX](https://miktex.org/)

##### LaTeX dependencies[#](#latex-dependencies "Link to this heading")

The following collections must be installed. When using a distribution that does not
support collections, the packages listed for each collection must be installed. You may
need to install some packages that are not listed here. The complete version of many
LaTeX distribution installers, e.g. “texlive-full” or “texlive-all”,
will often automatically include these collections.

| collection | packages |
| --- | --- |
| collection-basic | [cm](https://ctan.org/pkg/cm), luahbtex |
| collection-fontsrecommended | [cm-super](https://ctan.org/pkg/cm-super), [lm](https://ctan.org/pkg/lm), [txfonts](https://ctan.org/pkg/txfonts) |
| collection-latex | [fix-cm](https://ctan.org/pkg/fix-cm), [geometry](https://ctan.org/pkg/geometry), [hyperref](https://ctan.org/pkg/hyperref), [latex](https://ctan.org/pkg/latex), latex-bin, [psnfss](https://ctan.org/pkg/psnfss) |
| collection-latexextra | [import](https://ctan.org/pkg/import), [sfmath](https://ctan.org/pkg/sfmath), [type1cm](https://ctan.org/pkg/type1cm) |
| collection-latexrecommended | [fontspec](https://ctan.org/pkg/fontspec), [underscore](https://ctan.org/pkg/underscore), |
| collection-xetex | [xetex](https://ctan.org/pkg/xetex), xetex-bin |

The following packages must also be installed:

* [dvipng](https://ctan.org/pkg/dvipng)
* [pgf](https://ctan.org/pkg/pgf) (if using the pgf backend)

#### Optional[#](#id16 "Link to this heading")

The documentation can be built without Inkscape and optipng, but the build
process will raise various warnings.

* [Inkscape](https://inkscape.org)
* [optipng](http://optipng.sourceforge.net)
* the font [xkcd script](https://github.com/ipython/xkcd-font/) or [Comic Neue](https://github.com/crozynski/comicneue)
* the font “Times New Roman”