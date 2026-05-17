# Installation[#](#installation "Link to this heading")

## Install an official release[#](#install-an-official-release "Link to this heading")

Matplotlib releases are available as wheel packages for macOS, Windows and
Linux on [PyPI](https://pypi.org/project/matplotlib/). Install it using
`pip`:

```
python -m pip install -U pip
python -m pip install -U matplotlib

```

If this command results in Matplotlib being compiled from source and
there’s trouble with the compilation, you can add `--prefer-binary` to
select the newest version of Matplotlib for which there is a
precompiled wheel for your OS and Python.

> **Note**
> The following backends work out of the box: Agg, ps, pdf, svg

Python is typically shipped with tk bindings which are used by
TkAgg.

For support of other GUI frameworks, LaTeX rendering, saving
animations and a larger selection of file formats, you can
install [optional dependencies](dependencies.html#optional-dependencies).

## Third-party distributions[#](#third-party-distributions "Link to this heading")

Various third-parties provide Matplotlib for their environments.

### Conda packages[#](#conda-packages "Link to this heading")

Matplotlib is available both via the **anaconda main channel**

```
conda install matplotlib

```

as well as via the **conda-forge community channel**

```
conda install -c conda-forge matplotlib

```

### Python distributions[#](#python-distributions "Link to this heading")

Matplotlib is part of major Python distributions:

* [Anaconda](https://www.anaconda.com/)
* [ActiveState ActivePython](https://www.activestate.com/products/python/downloads/)
* [WinPython](https://winpython.github.io/)

### Linux package manager[#](#linux-package-manager "Link to this heading")

If you are using the Python version that comes with your Linux distribution,
you can install Matplotlib via your package manager, e.g.:

* Debian / Ubuntu: `sudo apt-get install python3-matplotlib`
* Fedora: `sudo dnf install python3-matplotlib`
* Red Hat: `sudo yum install python3-matplotlib`
* Arch: `sudo pacman -S python-matplotlib`

## Install a nightly build[#](#install-a-nightly-build "Link to this heading")

Matplotlib makes nightly development build wheels available on the
[scientific-python-nightly-wheels Anaconda Cloud organization](https://anaconda.org/scientific-python-nightly-wheels).
These wheels can be installed with `pip` by specifying
scientific-python-nightly-wheels as the package index to query:

```
python -m pip install \
  --upgrade \
  --pre \
  --index-url https://pypi.anaconda.org/scientific-python-nightly-wheels/simple \
  --extra-index-url https://pypi.org/simple \
  matplotlib

```

## Install from source[#](#id3 "Link to this heading")

> **Installing for Development**
> If you would like to contribute to Matplotlib or otherwise need to
install the latest development code, please follow the instructions in
[Development setup](https://matplotlib.org/devdocs/devel/development_setup.html#installing-for-devs "(in Matplotlib v3.12.0.dev80+g7499f38d2)").

The following instructions are for installing from source for production use.
This is generally **not** recommended; please use prebuilt packages when possible.
Proceed with caution because these instructions may result in your
build producing unexpected behavior and/or causing local testing to fail.

Before trying to install Matplotlib, please install the [Dependencies](dependencies.html#dependencies).

To build from a tarball, download the latest **tar.gz** release
file from [the PyPI files page](https://pypi.org/project/matplotlib/).

If you are building your own Matplotlib wheels (or sdists) on Windows, note
that any DLLs that you copy into the source tree will be packaged too.

## Configure build and behavior defaults[#](#configure-build-and-behavior-defaults "Link to this heading")

We provide a [meson.options](https://github.com/matplotlib/matplotlib/blob/main/meson.options) file containing options with which you can use to
customize the build process. For example, which default backend to use, whether some of
the optional libraries that Matplotlib ships with are installed, and so on. These
options will be particularly useful to those packaging Matplotlib.

Aspects of some behaviorial defaults of the library can be configured via:

* [Environment variables](environment_variables_faq.html)
  * [Setting environment variables in Linux and macOS](environment_variables_faq.html#setting-environment-variables-in-linux-and-macos)
  * [Setting environment variables in Windows](environment_variables_faq.html#setting-environment-variables-in-windows)

Default plotting appearance and behavior can be configured via the
[rcParams file](https://matplotlib.org/devdocs/users/explain/customizing.html#customizing-with-matplotlibrc-files "(in Matplotlib v3.12.0.dev80+g7499f38d2)")

## Dependencies[#](#dependencies "Link to this heading")

Mandatory dependencies should be installed automatically if you install Matplotlib using
a package manager such as `pip` or `conda`; therefore this list is primarily for
reference and troubleshooting.

* [Dependencies](dependencies.html)
  * [Runtime dependencies](dependencies.html#runtime-dependencies)
  * [Build dependencies](dependencies.html#build-dependencies)
  * [Test dependencies](dependencies.html#test-dependencies)
  * [Documentation dependencies](dependencies.html#documentation-dependencies)

## Frequently asked questions[#](#frequently-asked-questions "Link to this heading")

### Report a compilation problem[#](#report-a-compilation-problem "Link to this heading")

See [Get help](https://matplotlib.org/devdocs/users/faq.html#reporting-problems "(in Matplotlib v3.12.0.dev80+g7499f38d2)").

### Matplotlib compiled fine, but nothing shows up when I use it[#](#matplotlib-compiled-fine-but-nothing-shows-up-when-i-use-it "Link to this heading")

The first thing to try is a [clean install](https://matplotlib.org/devdocs/install/index.html#clean-install "(in Matplotlib v3.12.0.dev80+g7499f38d2)") and see if
that helps. If not, the best way to test your install is by running a script,
rather than working interactively from a python shell or an integrated
development environment such as ****IDLE**** which add additional
complexities. Open up a UNIX shell or a DOS command prompt and run, for
example:

```
python -c "from pylab import *; set_loglevel('debug'); plot(); show()"

```

This will give you additional information about which backends Matplotlib is
loading, version information, and more. At this point you might want to make
sure you understand Matplotlib’s [configuration](https://matplotlib.org/devdocs/users/explain/customizing.html#customizing "(in Matplotlib v3.12.0.dev80+g7499f38d2)")
process, governed by the `matplotlibrc` configuration file which contains
instructions within and the concept of the Matplotlib backend.

If you are still having trouble, see [Get help](https://matplotlib.org/devdocs/users/faq.html#reporting-problems "(in Matplotlib v3.12.0.dev80+g7499f38d2)").

### How to completely remove Matplotlib[#](#how-to-completely-remove-matplotlib "Link to this heading")

Occasionally, problems with Matplotlib can be solved with a clean
installation of the package. In order to fully remove an installed Matplotlib:

1. Delete the caches from your [Matplotlib configuration directory](https://matplotlib.org/devdocs/install/index.html#locating-matplotlib-config-dir "(in Matplotlib v3.12.0.dev80+g7499f38d2)").
2. Delete any Matplotlib directories or eggs from your [installation directory](https://matplotlib.org/devdocs/install/index.html#locating-matplotlib-install "(in Matplotlib v3.12.0.dev80+g7499f38d2)").

### macOS Notes[#](#macos-notes "Link to this heading")

#### Which python for macOS?[#](#which-python-for-macos "Link to this heading")

Apple ships macOS with its own Python, in `/usr/bin/python`, and its own copy
of Matplotlib. Unfortunately, the way Apple currently installs its own copies
of NumPy, Scipy and Matplotlib means that these packages are difficult to
upgrade (see [system python packages](https://github.com/MacPython/wiki/wiki/Which-Python#system-python-and-extra-python-packages)). For that reason we strongly suggest
that you install a fresh version of Python and use that as the basis for
installing libraries such as NumPy and Matplotlib. One convenient way to
install Matplotlib with other useful Python software is to use the [Anaconda](https://conda.io/docs/)
Python scientific software collection, which includes Python itself and a
wide range of libraries; if you need a library that is not available from the
collection, you can install it yourself using standard methods such as **pip**.
See the Anaconda web page for installation support.

Other options for a fresh Python install are the standard installer from
[python.org](https://www.python.org/downloads/macos/), or installing
Python using a general macOS package management system such as [homebrew](https://brew.sh/) or [macports](https://www.macports.org). Power users on
macOS will likely want one of homebrew or macports on their system to install
open source software packages, but it is perfectly possible to use these
systems with another source for your Python binary, such as Anaconda
or Python.org Python.

#### Installing macOS binary wheels[#](#installing-macos-binary-wheels "Link to this heading")

If you are using Python from <https://www.python.org>, Homebrew, or Macports,
then you can use the standard pip installer to install Matplotlib binaries in
the form of wheels.

pip is installed by default with python.org and Homebrew Python, but needs to
be manually installed on Macports with

```
sudo port install py38-pip

```

Once pip is installed, you can install Matplotlib and all its dependencies with
from the Terminal.app command line:

```
python3 -m pip install matplotlib

```

You might also want to install IPython or the Jupyter notebook (`python3 -m pip
install ipython notebook`).

#### Checking your installation[#](#checking-your-installation "Link to this heading")

The new version of Matplotlib should now be on your Python “path”. Check this
at the Terminal.app command line:

```
python3 -c 'import matplotlib; print(matplotlib.__version__, matplotlib.__file__)'

```

You should see something like

```
3.10.0 /Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages/matplotlib/__init__.py

```

where `3.10.0` is the Matplotlib version you just installed, and the path
following depends on whether you are using Python.org Python, Homebrew or
Macports. If you see another version, or you get an error like

```
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: No module named matplotlib

```

then check that the Python binary is the one you expected by running

```
which python3

```

If you get a result like `/usr/bin/python...`, then you are getting the
Python installed with macOS, which is probably not what you want. Try closing
and restarting Terminal.app before running the check again. If that doesn’t fix
the problem, depending on which Python you wanted to use, consider reinstalling
Python.org Python, or check your homebrew or macports setup. Remember that
the disk image installer only works for Python.org Python, and will not get
picked up by other Pythons. If all these fail, please [let us know](https://matplotlib.org/devdocs/users/faq.html#reporting-problems "(in Matplotlib v3.12.0.dev80+g7499f38d2)").

## Troubleshooting[#](#troubleshooting "Link to this heading")

### Obtaining Matplotlib version[#](#obtaining-matplotlib-version "Link to this heading")

To find out your Matplotlib version number, import it and print the
`__version__` attribute:

```
>>> import matplotlib
>>> matplotlib.__version__
'0.98.0'

```

### `matplotlib` install location[#](#matplotlib-install-location "Link to this heading")

You can find what directory Matplotlib is installed in by importing it
and printing the `__file__` attribute:

```
>>> import matplotlib
>>> matplotlib.__file__
'/home/jdhunter/dev/lib64/python2.5/site-packages/matplotlib/__init__.pyc'

```

### `matplotlib` configuration and cache directory locations[#](#matplotlib-configuration-and-cache-directory-locations "Link to this heading")

Each user has a Matplotlib configuration directory which may contain a
[matplotlibrc](https://matplotlib.org/devdocs/users/explain/customizing.html#customizing-with-matplotlibrc-files "(in Matplotlib v3.12.0.dev80+g7499f38d2)") file. To
locate your `matplotlib/` configuration directory, use
[`matplotlib.get_configdir`](https://matplotlib.org/devdocs/api/matplotlib_configuration_api.html#matplotlib.get_configdir "(in Matplotlib v3.12.0.dev80+g7499f38d2)"):

```
>>> import matplotlib as mpl
>>> mpl.get_configdir()
'/home/darren/.config/matplotlib'

```

On Unix-like systems, this directory is generally located in your
[`HOME`](environment_variables_faq.html#envvar-HOME) directory under the `.config/` directory.

In addition, users have a cache directory. On Unix-like systems, this is
separate from the configuration directory by default. To locate your
`.cache/` directory, use [`matplotlib.get_cachedir`](https://matplotlib.org/devdocs/api/matplotlib_configuration_api.html#matplotlib.get_cachedir "(in Matplotlib v3.12.0.dev80+g7499f38d2)"):

```
>>> import matplotlib as mpl
>>> mpl.get_cachedir()
'/home/darren/.cache/matplotlib'

```

On Windows, both the config directory and the cache directory are
the same and are in your `Documents and Settings` or `Users`
directory by default:

```
>>> import matplotlib as mpl
>>> mpl.get_configdir()
'C:\\Documents and Settings\\jdhunter\\.matplotlib'
>>> mpl.get_cachedir()
'C:\\Documents and Settings\\jdhunter\\.matplotlib'

```

If you would like to use a different configuration directory, you can
do so by specifying the location in your [`MPLCONFIGDIR`](environment_variables_faq.html#envvar-MPLCONFIGDIR)
environment variable – see
[Setting environment variables in Linux and macOS](https://matplotlib.org/devdocs/install/environment_variables_faq.html#setting-linux-macos-environment-variables "(in Matplotlib v3.12.0.dev80+g7499f38d2)"). Note that
[`MPLCONFIGDIR`](environment_variables_faq.html#envvar-MPLCONFIGDIR) sets the location of both the configuration
directory and the cache directory.