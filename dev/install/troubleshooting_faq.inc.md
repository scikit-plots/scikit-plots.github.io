# Troubleshooting[#](#troubleshooting "Link to this heading")

## Obtaining Matplotlib version[#](#obtaining-matplotlib-version "Link to this heading")

To find out your Matplotlib version number, import it and print the
`__version__` attribute:

```
>>> import matplotlib
>>> matplotlib.__version__
'0.98.0'

```

## `matplotlib` install location[#](#matplotlib-install-location "Link to this heading")

You can find what directory Matplotlib is installed in by importing it
and printing the `__file__` attribute:

```
>>> import matplotlib
>>> matplotlib.__file__
'/home/jdhunter/dev/lib64/python2.5/site-packages/matplotlib/__init__.pyc'

```

## `matplotlib` configuration and cache directory locations[#](#matplotlib-configuration-and-cache-directory-locations "Link to this heading")

Each user has a Matplotlib configuration directory which may contain a
[matplotlibrc](https://matplotlib.org/devdocs/users/explain/customizing.html#customizing-with-matplotlibrc-files "(in Matplotlib v3.12.0.dev368+g6db3896c8)") file. To
locate your `matplotlib/` configuration directory, use
[`matplotlib.get_configdir`](https://matplotlib.org/devdocs/api/matplotlib_configuration_api.html#matplotlib.get_configdir "(in Matplotlib v3.12.0.dev368+g6db3896c8)"):

```
>>> import matplotlib as mpl
>>> mpl.get_configdir()
'/home/darren/.config/matplotlib'

```

On Unix-like systems, this directory is generally located in your
[`HOME`](environment_variables_faq.html#envvar-HOME) directory under the `.config/` directory.

In addition, users have a cache directory. On Unix-like systems, this is
separate from the configuration directory by default. To locate your
`.cache/` directory, use [`matplotlib.get_cachedir`](https://matplotlib.org/devdocs/api/matplotlib_configuration_api.html#matplotlib.get_cachedir "(in Matplotlib v3.12.0.dev368+g6db3896c8)"):

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
[Setting environment variables in Linux and macOS](https://matplotlib.org/devdocs/install/environment_variables_faq.html#setting-linux-macos-environment-variables "(in Matplotlib v3.12.0.dev368+g6db3896c8)"). Note that
[`MPLCONFIGDIR`](environment_variables_faq.html#envvar-MPLCONFIGDIR) sets the location of both the configuration
directory and the cache directory.