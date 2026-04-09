# Code Style and Writing Guidelines[#](#code-style-and-writing-guidelines "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib.

We appreciate these guidelines being followed because it improves the readability,
consistency, and maintainability of the code base.

> **API guidelines**
> If adding new features, changing behavior or function signatures, or removing
public interfaces, please consult the [API guidelines](https://matplotlib.org/devdocs/devel/api_changes.html#api-changes "(in Matplotlib v3.11.0.dev2075+ga7fc90270)").

## PEP8, as enforced by flake8[#](#pep8-as-enforced-by-flake8 "Link to this heading")

Formatting should follow the recommendations of [PEP8](https://peps.python.org/pep-0008/), as enforced by [flake8](https://flake8.pycqa.org/).
Matplotlib modifies PEP8 to extend the maximum line length to 88
characters. You can check flake8 compliance from the command line with

```
python -m pip install flake8
flake8 /path/to/module.py

```

or your editor may provide integration with it. Note that Matplotlib intentionally
does not use the [black](https://black.readthedocs.io/) auto-formatter ([1](https://github.com/matplotlib/matplotlib/issues/18796)), in particular due to its inability
to understand the semantics of mathematical expressions ([2](https://github.com/psf/black/issues/148), [3](https://github.com/psf/black/issues/1984)).

## Package imports[#](#package-imports "Link to this heading")

Import the following modules using the standard scipy conventions:

```
import numpy as np
import numpy.ma as ma
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.cbook as cbook
import matplotlib.patches as mpatches

```

In general, Matplotlib modules should ****not**** import `.rcParams` using `from
matplotlib import rcParams`, but rather access it as `mpl.rcParams`. This
is because some modules are imported very early, before the `.rcParams`
singleton is constructed.

## Variable names[#](#variable-names "Link to this heading")

When feasible, please use our internal variable naming convention for objects
of a given class and objects of any child class:

| base class | variable | multiples |
| --- | --- | --- |
| `~matplotlib.figure.FigureBase` | `fig` |  |
| `~matplotlib.axes.Axes` | `ax` |  |
| `~matplotlib.transforms.Transform` | `trans` | `trans_<source>_<target>`  `trans_<source>` when target is screen |
|

Generally, denote more than one instance of the same class by adding suffixes to
the variable names. If a format isn’t specified in the table, use numbers or
letters as appropriate.

## Type hints[#](#type-hints "Link to this heading")

If you add new public API or change public API, update or add the
corresponding [mypy](https://mypy.readthedocs.io/en/latest/) type hints.
We generally use [stub files](https://typing.readthedocs.io/en/latest/source/stubs.html#type-stubs)
(`*.pyi`) to store the type information; for example `colors.pyi` contains
the type information for `colors.py`. A notable exception is `pyplot.py`,
which is type hinted inline.

Type hints can be validated by the [stubtest](https://mypy.readthedocs.io/en/stable/stubtest.html) tool, which can be run
locally using `tox -e stubtest` and is a part of the [Automated tests](guide_devel_workflow.html#automated-tests)
suite. Type hints for existing functions are also checked by the mypy
[pre-commit hook](guide_devel_setup.html#pre-commit-hooks).

## New modules and files: installation[#](#new-modules-and-files-installation "Link to this heading")

* If you have added new files or directories, or reorganized existing ones, make sure the
  new files are included in the `meson.build` in the corresponding directories.
* New modules **may** be typed inline or using parallel stub file like existing modules.

## C/C++ extensions[#](#c-c-extensions "Link to this heading")

* Extensions may be written in C or C++.
* Code style should conform to PEP7 (understanding that PEP7 doesn’t
  address C++, but most of its admonitions still apply).
* Python/C interface code should be kept separate from the core C/C++
  code. The interface code should be named `FOO_wrap.cpp` or
  `FOO_wrapper.cpp`.
* Header file documentation (aka docstrings) should be in Numpydoc
  format. We don’t plan on using automated tools for these
  docstrings, and the Numpydoc format is well understood in the
  scientific Python community.
* C/C++ code in the `extern/` directory is vendored, and should be kept
  close to upstream whenever possible. It can be modified to fix bugs or
  implement new features only if the required changes cannot be made elsewhere
  in the codebase. In particular, avoid making style fixes to it.

## Keyword argument processing[#](#keyword-argument-processing "Link to this heading")

Matplotlib makes extensive use of `**kwargs` for pass-through customizations
from one function to another. A typical example is
`~matplotlib.axes.Axes.text`. The definition of `matplotlib.pyplot.text` is a
simple pass-through to `matplotlib.axes.Axes.text`:

```
# in pyplot.py
def text(x, y, s, fontdict=None, **kwargs):
    return gca().text(x, y, s, fontdict=fontdict, **kwargs)

```

`matplotlib.axes.Axes.text` (simplified for illustration) just
passes all `args` and `kwargs` on to `matplotlib.text.Text.__init__`:

```
# in axes/_axes.py
def text(self, x, y, s, fontdict=None, **kwargs):
    t = Text(x=x, y=y, text=s, **kwargs)

```

and `matplotlib.text.Text.__init__` (again, simplified)
just passes them on to the `matplotlib.artist.Artist.update` method:

```
# in text.py
def __init__(self, x=0, y=0, text='', **kwargs):
    super().__init__()
    self.update(kwargs)

```

`update` does the work looking for methods named like
`set_property` if `property` is a keyword argument. i.e., no one
looks at the keywords, they just get passed through the API to the
artist constructor which looks for suitably named methods and calls
them with the value.

As a general rule, the use of `**kwargs` should be reserved for
pass-through keyword arguments, as in the example above. If all the
keyword args are to be used in the function, and not passed
on, use the key/value keyword args in the function definition rather
than the `**kwargs` idiom.

In some cases, you may want to consume some keys in the local
function, and let others pass through. Instead of popping arguments to
use off `**kwargs`, specify them as keyword-only arguments to the local
function. This makes it obvious at a glance which arguments will be
consumed in the function. For example, in
[`plot`](https://matplotlib.org/devdocs/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib.axes.Axes.plot "(in Matplotlib v3.11.0.dev2075+ga7fc90270)"), `scalex` and `scaley` are
local arguments and the rest are passed on as
`Line2D` keyword arguments:

```
# in axes/_axes.py
def plot(self, *args, scalex=True, scaley=True, **kwargs):
    lines = []
    for line in self._get_lines(*args, **kwargs):
        self.add_line(line)
        lines.append(line)

```

## Using logging for debug messages[#](#using-logging-for-debug-messages "Link to this heading")

Matplotlib uses the standard Python `logging` library to write verbose
warnings, information, and debug messages. Please use it! In all those places
you write `print` calls to do your debugging, try using `logging.debug`
instead!

To include `logging` in your module, at the top of the module, you need to
`import logging`. Then calls in your code like:

```
_log = logging.getLogger(__name__)  # right after the imports

# code
# more code
_log.info('Here is some information')
_log.debug('Here is some more detailed information')

```

will log to a logger named `matplotlib.yourmodulename`.

If an end-user of Matplotlib sets up `logging` to display at levels more
verbose than `logging.WARNING` in their code with the Matplotlib-provided
helper:

```
plt.set_loglevel("debug")

```

or manually with

```
import logging
logging.basicConfig(level=logging.DEBUG)
import matplotlib.pyplot as plt

```

Then they will receive messages like

```
DEBUG:matplotlib.backends:backend MacOSX version unknown
DEBUG:matplotlib.yourmodulename:Here is some information
DEBUG:matplotlib.yourmodulename:Here is some more detailed information

```

Avoid using pre-computed strings (`f-strings`, `str.format`,etc.) for logging because
of security and performance issues, and because they interfere with style handlers. For
example, use `_log.error('hello %s', 'world')` rather than `_log.error('hello
{}'.format('world'))` or `_log.error(f'hello {s}')`.

### Which logging level to use?[#](#which-logging-level-to-use "Link to this heading")

There are five levels at which you can emit messages.

* `logging.critical` and `logging.error` are really only there for errors that
  will end the use of the library but not kill the interpreter.
* `logging.warning` and `._api.warn_external` are used to warn the user,
  see below.
* `logging.info` is for information that the user may want to know if the
  program behaves oddly. They are not displayed by default. For instance, if
  an object isn’t drawn because its position is `NaN`, that can usually
  be ignored, but a mystified user could call
  `logging.basicConfig(level=logging.INFO)` and get an error message that
  says why.
* `logging.debug` is the least likely to be displayed, and hence can be the
  most verbose. “Expected” code paths (e.g., reporting normal intermediate
  steps of layouting or rendering) should only log at this level.

By default, `logging` displays all log messages at levels higher than
`logging.WARNING` to `sys.stderr`.

The [logging tutorial](https://docs.python.org/3/howto/logging.html#logging-basic-tutorial) suggests that the difference between `logging.warning`
and `._api.warn_external` (which uses `warnings.warn`) is that
`._api.warn_external` should be used for things the user must change to stop
the warning (typically in the source), whereas `logging.warning` can be more
persistent. Moreover, note that `._api.warn_external` will by default only
emit a given warning **once** for each line of user code, whereas
`logging.warning` will display the message every time it is called.

By default, `warnings.warn` displays the line of code that has the `warn`
call. This usually isn’t more informative than the warning message itself.
Therefore, Matplotlib uses `._api.warn_external` which uses `warnings.warn`,
but goes up the stack and displays the first line of code outside of
Matplotlib. For example, for the module:

```
# in my_matplotlib_module.py
import warnings

def set_range(bottom, top):
    if bottom == top:
        warnings.warn('Attempting to set identical bottom==top')

```

running the script:

```
from matplotlib import my_matplotlib_module
my_matplotlib_module.set_range(0, 0)  # set range

```

will display

```
UserWarning: Attempting to set identical bottom==top
warnings.warn('Attempting to set identical bottom==top')

```

Modifying the module to use `._api.warn_external`:

```
from matplotlib import _api

def set_range(bottom, top):
    if bottom == top:
        _api.warn_external('Attempting to set identical bottom==top')

```

and running the same script will display

```
UserWarning: Attempting to set identical bottom==top
my_matplotlib_module.set_range(0, 0)  # set range

```

## Licenses for contributed code[#](#licenses-for-contributed-code "Link to this heading")

scikit-plots only uses BSD compatible code. If you bring in code from
another project make sure it has a PSF, BSD, MIT or compatible license
(see the Open Source Initiative [licenses page](https://opensource.org/licenses) for details on individual
licenses). If it doesn’t, you may consider contacting the author and
asking them to relicense it. GPL and LGPL code are not acceptable in
the main code base, though we are considering an alternative way of
distributing L/GPL code through an separate channel, possibly a
toolkit. If you include code, make sure you include a copy of that
code’s license in the license directory if the code’s license requires
you to distribute the license with it. Non-BSD compatible licenses
are acceptable in scikit-plots toolkits (e.g., basemap), but make sure you
clearly state the licenses you are using.

### Why BSD compatible?[#](#why-bsd-compatible "Link to this heading")

The two dominant license variants in the wild are GPL-style and
BSD-style. There are countless other licenses that place specific
restrictions on code reuse, but there is an important difference to be
considered in the GPL and BSD variants. The best known and perhaps
most widely used license is the GPL, which in addition to granting you
full rights to the source code including redistribution, carries with
it an extra obligation. If you use GPL code in your own code, or link
with it, your product must be released under a GPL compatible
license. i.e., you are required to give the source code to other
people and give them the right to redistribute it as well. Many of the
most famous and widely used open source projects are released under
the GPL, including linux, gcc, emacs and sage.

The second major class are the BSD-style licenses (which includes MIT
and the python PSF license). These basically allow you to do whatever
you want with the code: ignore it, include it in your own open source
project, include it in your proprietary product, sell it,
whatever. python itself is released under a BSD compatible license, in
the sense that, quoting from the PSF license page:

```
There is no GPL-like "copyleft" restriction. Distributing
binary-only versions of Python, modified or not, is allowed. There
is no requirement to release any of your source code. You can also
write extension modules for Python and provide them only in binary
form.

```

Famous projects released under a BSD-style license in the permissive
sense of the last paragraph are the BSD operating system, python and
TeX.

There are several reasons why early scikit-plots developers selected a
BSD compatible license. scikit-plots is a python extension, and we
choose a license that was based on the python license (BSD
compatible). Also, we wanted to attract as many users and developers
as possible, and many software companies will not use GPL code in
software they plan to distribute, even those that are highly committed
to open source development, such as [enthought](https://www.enthought.com), out of legitimate concern that use of the
GPL will “infect” their code base by its viral nature. In effect, they
want to retain the right to release some proprietary code. Companies
and institutions who use scikit-plots often make significant
contributions, because they have the resources to get a job done, even
a boring one. Two of the scikit-plots backends (FLTK and WX) were
contributed by private companies. The final reason behind the
licensing choice is compatibility with the other python extensions for
scientific computing: ipython, numpy, scipy, the enthought tool suite
and python itself are all distributed under BSD compatible licenses.