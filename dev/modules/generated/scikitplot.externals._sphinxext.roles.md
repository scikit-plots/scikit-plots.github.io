# roles[#](#roles "Link to this heading")

Custom roles for the Matplotlib documentation.

> **Warning**
> These roles are considered semi-public. They are only intended to be used in
the Matplotlib documentation.

However, it can happen that downstream packages end up pulling these roles into
their documentation, which will result in documentation build errors. The following
describes the exact mechanism and how to fix the errors.

There are two ways, Matplotlib docstrings can end up in downstream documentation.
You have to subclass a Matplotlib class and either use the `:inherited-members:`
option in your autodoc configuration, or you have to override a method without
specifying a new docstring; the new method will inherit the original docstring and
still render in your autodoc. If the docstring contains one of the custom sphinx
roles, you’ll see one of the following error messages:

```
Unknown interpreted text role "mpltype".
Unknown interpreted text role "rc".

```

To fix this, you can add this module as extension to your sphinx `conf.py`:

```
extensions = [
    'matplotlib.sphinxext.roles',
    # Other extensions.
]

```
> **Warning**
> Direct use of these roles in other packages is not officially supported. We
reserve the right to modify or remove these roles without prior notification.