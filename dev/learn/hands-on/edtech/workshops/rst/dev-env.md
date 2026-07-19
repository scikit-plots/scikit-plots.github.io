# [Windows Development Environment](#id1)[#](#windows-development-environment "Link to this heading")

So, you want to start writing RST. This guide can help you get started.

> **Note**
> These instructions assume Windows 10.

## [Development Overview](#id2)[#](#development-overview "Link to this heading")

RST tools haven’t advanced as fast of Markdown tools have, but there
are some good options. A writer or developer working with RST needs
these tools:

1. A text editor that supports:

   Linting
   :   Detects warnings and errors; write using best practices.

   Syntax highlighting
   :   Improves code readability.

   IntelliSense
   :   Speeds up the writing process using blocks and snippets.
2. An interpreter or rendering engine

## [Text Editor](#id3)[#](#text-editor "Link to this heading")

> **Tip**
> Use these tools:

* [Visual Studio Code](https://code.visualstudio.com/)
* [reStructuredText Extension for Visual Studio Code](https://docs.restructuredtext.net/)

[Visual Studio Code](https://code.visualstudio.com/) (VSC) is a modern text editor with plugins that support
writing documents in RST. VSC has an abundance of extensions that are
easy to install.

The [reStructuredText Extension for Visual Studio Code](https://docs.restructuredtext.net/) is highly
recommended because it adds appropriate support tools:

> * Syntax Highlighting
> * Code Snippets
> * Live Preview (not recommended, see below)
> * Section Builder
> * Linter
> * IntelliSense

## [Interpreter for Active Writing](#id4)[#](#interpreter-for-active-writing "Link to this heading")

> **Tip**
> Use Sphinx Server with LiveReload to speed up your
development process.

Developers using RST need a way to preview their work. It is easy to make
mistakes in RST. A single spacing error (vertical or horizontal) can alter
the output drastically. Finding an easy solution to view the rendered
RST is important. Unfortunately, there are not many easy options. The
process might feel more like programming than writing documentation.

We have not had a good experience using the **live preview** tools in
Windows. For example, the [reStructuredText Extension for Visual Studio Code](https://docs.restructuredtext.net/)
includes a live preview tool, but can be slow slow.

### [Option 1 - Sphinx Server with LiveReload](#id5)[#](#option-1-sphinx-server-with-livereload "Link to this heading")

This option keeps the convenience of live preview but improves the
performance of trying to render RST in VSC. It creates an environment that:

> 1. watches the active project for changes
> 2. rebuilds the project automatically
> 3. refreshes the browser window

> **Note**
> This example uses Ubuntu 18.04 in WSL.

1. Open a Linux shell.
2. Install Sphinx and extensions.

   ```
   sudo apt-get update && apt upgrade
   sudo apt-get -y install python3-pip
   pip3 install Sphinx
   pip3 install sphinx-autobuild

   ```
3. Clone `sphinx-server` from [dldl/sphinx-server](https://github.com/dldl/sphinx-server).

   > **Note**
   > This project needs to be in `/opt/sphinx-server`
   ```
   cd /opt
   sudo git clone https://github.com/dldl/sphinx-server.git

   ```
4. Copy file `server.py` to your project root.

   ```
   cd /mnt/c/Users/user/source/rst/my-project
   cp /opt/sphinx-server/server.py .

   ```
5. Start the mini-server that uses `autobuild` and `livereload`.

   ```
   python3 server.py

   ```
   > **python3 only**
   > Using `python` will generate this error:

   ```
   python server.py
   Traceback (most recent call last):
     File "server.py", line 7, in <module>
       import http.server
   ImportError: No module named http.server

   ```
   > **Tip**
   > Start `python3 server.py` using the built-in terminal in VSC!

   1. `Terminal -> New Terminal`
   2. `bash`
   3. `python3 server.py`
6. Open your browser to `http://localhost:8000/`.

### [Option 2 - Build Manually](#id6)[#](#option-2-build-manually "Link to this heading")

You can build the project manually using `make html` from the Windows
command prompt or a Linux shell. VSC makes it easy to build using the
built-in terminal in Visual Studio Code.

#### [Windows CMD or PowerShell](#id7)[#](#windows-cmd-or-powershell "Link to this heading")

1. Install Python and Sphinx using [these instructions](https://docs.restructuredtext.net/articles/prerequisites.html).
2. Open your project folder using VSC: `File -> Open Folder`.
3. Open the terminal in Visual Studio Code and execute the `make html`
   command.

   1. `Terminal -> New Terminal`
   2. `.\make.bat html`
4. Open the rendered HTML file in your browser.

#### [Windows WSL](#id8)[#](#windows-wsl "Link to this heading")

1. Install Python and Sphinx.

   ```
   sudo apt-get -y install python3-pip
   pip3 install Sphinx

   ```
2. Open your project folder using VSC: `File -> Open Folder`.
3. Open the terminal in Visual Studio Code, open Bash, and execute
   the `make html`.

   1. `Terminal -> New Terminal`
   2. `bash`
   3. `make html`
4. Open the rendered HTML file in your browser.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/workshops/rst/dev-env.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.