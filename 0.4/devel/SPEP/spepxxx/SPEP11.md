# SEP11: Third-party dependencies[#](#sep11-third-party-dependencies "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib MEPs.

This MEP attempts to improve the way in which third-party dependencies
in matplotlib are handled.

## [Status](#id1)[#](#status "Link to this heading")

****Completed**** – needs to be merged

## [Branches and Pull requests](#id2)[#](#branches-and-pull-requests "Link to this heading")

`#1157`: Use automatic dependency resolution

`#1290`: Debundle pyparsing

`#1261`: Update six to 1.2

## [Abstract](#id3)[#](#abstract "Link to this heading")

One of the goals of matplotlib has been to keep it as easy to install
as possible. To that end, some third-party dependencies are included
in the source tree and, under certain circumstances, installed
alongside matplotlib. This MEP aims to resolve some problems with
that approach, bring some consistency, while continuing to make
installation convenient.

At the time that was initially done, [setuptools](https://pypi.org/project/setuptools/), [easy\_install](https://setuptools.readthedocs.io/en/latest/easy_install.html) and
[PyPI](https://pypi.org/project) were not mature enough to be relied on. However, at present,
we should be able to safely leverage the “modern” versions of those
tools, [distribute](https://pypi.org/project/distribute/) and [pip](https://pypi.org/project/pip/).

While matplotlib has dependencies on both Python libraries and C/C++
libraries, this MEP addresses only the Python libraries so as to not
confuse the issue. C libraries represent a larger and mostly
orthogonal set of problems.

## [Detailed description](#id4)[#](#detailed-description "Link to this heading")

matplotlib depends on the following third-party Python libraries:

* Numpy
* dateutil (pure Python)
* pytz (pure Python)
* six – required by dateutil (pure Python)
* pyparsing (pure Python)
* PIL (optional)
* GUI frameworks: pygtk, gobject, tkinter, PySide, PyQt4, wx (all
  optional, but one is required for an interactive GUI)

### [Current behavior](#id5)[#](#current-behavior "Link to this heading")

When installing from source, a ****git**** checkout or [pip](https://pypi.org/project/pip/):

* `setup.py` attempts to `import numpy`. If this fails, the
  installation fails.
* For each of [dateutil](https://pypi.org/project/python-dateutil/), [pytz](https://pypi.org/project/pytz/) and [six](https://pypi.org/project/six/), `setup.py` attempts to
  import them (from the top-level namespace). If that fails,
  matplotlib installs its local copy of the library into the
  top-level namespace.
* [pyparsing](https://pypi.org/project/pyparsing/) is always installed inside of the matplotlib
  namespace.

This behavior is most surprising when used with [pip](https://pypi.org/project/pip/), because no
[pip](https://pypi.org/project/pip/) dependency resolution is performed, even though it is likely to
work for all of these packages.

The fact that [pyparsing](https://pypi.org/project/pyparsing/) is installed in the matplotlib namespace has
reportedly (#1290) confused some users into thinking it is a
matplotlib-related module and import it from there rather than the
top-level.

When installing using the Windows installer, [dateutil](https://pypi.org/project/python-dateutil/), [pytz](https://pypi.org/project/pytz/) and
[six](https://pypi.org/project/six/) are installed at the top-level **always**, potentially overwriting
already installed copies of those libraries.

TODO: Describe behavior with the OS-X installer.

When installing using a package manager (Debian, RedHat, MacPorts
etc.), this behavior actually does the right thing, and there are no
special patches in the matplotlib packages to deal with the fact that
we handle [dateutil](https://pypi.org/project/python-dateutil/), [pytz](https://pypi.org/project/pytz/) and [six](https://pypi.org/project/six/) in this way. However, care
should be taken that whatever approach we move to continues to work in
that context.

Maintaining these packages in the matplotlib tree and making sure they
are up-to-date is a maintenance burden. Advanced new features that
may require a third-party pure Python library have a higher barrier to
inclusion because of this burden.

### [Desired behavior](#id6)[#](#desired-behavior "Link to this heading")

Third-party dependencies are downloaded and installed from their
canonical locations by leveraging [pip](https://pypi.org/project/pip/), [distribute](https://pypi.org/project/distribute/) and [PyPI](https://pypi.org/project).

[dateutil](https://pypi.org/project/python-dateutil/), [pytz](https://pypi.org/project/pytz/), and [pyparsing](https://pypi.org/project/pyparsing/) should be made into optional
dependencies – though obviously some features would fail if they
aren’t installed. This will allow the user to decide whether they
want to bother installing a particular feature.

## [Implementation](#id7)[#](#implementation "Link to this heading")

For installing from source, and assuming the user has all of the
C-level compilers and dependencies, this can be accomplished fairly
easily using [distribute](https://pypi.org/project/distribute/) and following the instructions [here](https://pypi.org/project/distribute/). The only anticipated
change to the matplotlib library code will be to import [pyparsing](https://pypi.org/project/pyparsing/)
from the top-level namespace rather than from within matplotlib. Note
that [distribute](https://pypi.org/project/distribute/) will also allow us to remove the direct dependency
on [six](https://pypi.org/project/six/), since it is, strictly speaking, only a direct dependency of
[dateutil](https://pypi.org/project/python-dateutil/).

For binary installations, there are a number of alternatives (here
ordered from best/hardest to worst/easiest):

1. The distutils wininst installer allows a post-install script to
   run. It might be possible to get this script to run [pip](https://pypi.org/project/pip/) to
   install the other dependencies. (See [this thread](http://grokbase.com/t/python/distutils-sig/109bdnfhp4/distutils-ann-setuptools-post-install-script-for-bdist-wininst)
   for someone who has trod that ground before).
2. Continue to ship [dateutil](https://pypi.org/project/python-dateutil/), [pytz](https://pypi.org/project/pytz/), [six](https://pypi.org/project/six/) and [pyparsing](https://pypi.org/project/pyparsing/) in
   our installer, but use the post-install-script to install them
   **only** if they cannot already be found.
3. Move all of these packages inside a (new) `matplotlib.extern`
   namespace so it is clear for outside users that these are
   external packages. Add some conditional imports in the core
   matplotlib codebase so [dateutil](https://pypi.org/project/python-dateutil/) (at the top-level) is tried
   first, and failing that `matplotlib.extern.dateutil` is used.

2 and 3 are undesirable as they still require maintaining copies of
these packages in our tree – and this is exacerbated by the fact that
they are used less – only in the binary installers. None of these 3
approaches address Numpy, which will still have to be manually
installed using an installer.

TODO: How does this relate to the Mac OS-X installer?

## [Backward compatibility](#id8)[#](#backward-compatibility "Link to this heading")

At present, matplotlib can be installed from source on a machine
without the third party dependencies and without an internet
connection. After this change, an internet connection (and a working
PyPI) will be required to install matplotlib for the first time.
(Subsequent matplotlib updates or development work will run without
accessing the network).

## [Alternatives](#id9)[#](#alternatives "Link to this heading")

Distributing binary eggs doesn’t feel like a usable solution. That
requires getting [easy\_install](https://setuptools.readthedocs.io/en/latest/easy_install.html) installed first, and Windows users
generally prefer the well known `.exe` or `.msi` installer that works
out of the box.