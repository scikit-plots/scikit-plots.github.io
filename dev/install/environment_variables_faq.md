# Environment variables[#](#environment-variables "Link to this heading")

HOME[#](#envvar-HOME "Link to this definition")
:   The user’s home directory. On Linux, [`~`](#envvar-HOME) is shorthand for [`HOME`](#envvar-HOME).

MPLBACKEND[#](#envvar-MPLBACKEND "Link to this definition")
:   This optional variable can be set to choose the Matplotlib backend. See
    [What is a backend?](https://matplotlib.org/devdocs/users/explain/figure/backends.html#what-is-a-backend "(in Matplotlib v3.12.0.dev498+gadecc563e)").

MPLCONFIGDIR[#](#envvar-MPLCONFIGDIR "Link to this definition")
:   This is the directory used to store user customizations to
    Matplotlib, as well as some caches to improve performance. If
    [`MPLCONFIGDIR`](#envvar-MPLCONFIGDIR) is not defined, `HOME/.config/matplotlib`
    and `HOME/.cache/matplotlib` are used on Linux, and
    `HOME/.matplotlib` on other platforms, if they are
    writable. Otherwise, the Python standard library’s `tempfile.gettempdir` is
    used to find a base directory in which the `matplotlib` subdirectory is
    created.

PATH[#](#envvar-PATH "Link to this definition")
:   The list of directories searched to find executable programs.

PYTHONPATH[#](#envvar-PYTHONPATH "Link to this definition")
:   The list of directories that are added to Python’s standard search list when
    importing packages and modules.

QT\_API[#](#envvar-QT_API "Link to this definition")
:   The Python Qt wrapper to prefer when using Qt-based backends. See [the
    entry in the usage guide](https://matplotlib.org/devdocs/api/backend_qt_api.html#qt-bindings "(in Matplotlib v3.12.0.dev498+gadecc563e)") for more information.

## Setting environment variables in Linux and macOS[#](#setting-environment-variables-in-linux-and-macos "Link to this heading")

To list the current value of [`PYTHONPATH`](#envvar-PYTHONPATH), which may be empty, try:

```
echo $PYTHONPATH

```

The procedure for setting environment variables in depends on what your default
shell is. Common shells include ****bash**** and ****csh****. You
should be able to determine which by running at the command prompt:

```
echo $SHELL

```

To create a new environment variable:

```
export PYTHONPATH=~/Python  # bash/ksh
setenv PYTHONPATH ~/Python  # csh/tcsh

```

To prepend to an existing environment variable:

```
export PATH=~/bin:${PATH}  # bash/ksh
setenv PATH ~/bin:${PATH}  # csh/tcsh

```

The search order may be important to you, do you want `~/bin` to be
searched first or last? To append to an existing environment variable:

```
export PATH=${PATH}:~/bin  # bash/ksh
setenv PATH ${PATH}:~/bin  # csh/tcsh

```

To make your changes available in the future, add the commands to your
`~/.bashrc` or `~/.cshrc` file.

## Setting environment variables in Windows[#](#setting-environment-variables-in-windows "Link to this heading")

Open the ****Control Panel**** (Start ‣ Control Panel),
start the ****System**** program. Click the Advanced tab
and select the Environment Variables button. You can edit or add to
the User Variables.