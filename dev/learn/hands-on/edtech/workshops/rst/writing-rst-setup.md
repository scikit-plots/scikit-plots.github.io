# RST Workshop: Development Environment[#](#rst-workshop-development-environment "Link to this heading")

The development environment for this workshop consists of:

> * [Visual Studio Code](https://code.visualstudio.com/)
> * [reStructuredText Extension](https://docs.restructuredtext.net/) for Visual Studio Code
> * A Debian-based distribution running [Sphinx Server with LiveReload](https://github.com/dldl/sphinx-server/)

## Environment Setup[#](#id1 "Link to this heading")

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Install [reStructuredText Extension](https://docs.restructuredtext.net/) for Visual Studio Code.
3. Open a Linux shell and install Sphinx and the required extensions.

   ```
   sudo apt-get update && sudo apt upgrade
   sudo apt-get -y install python3-pip
   pip3 install Sphinx
   pip3 install sphinx-autobuild

   ```

## Create a Project[#](#create-a-project "Link to this heading")

1. Create a project directory
2. Use `sphinx-quickstart` to create a new Sphinx projects

   * Open a terminal in VSC (Terminal -> New Terminal)
   * Open up a linux shell
   * Execute: `sphinx-quickstart`
   * Follow the prompts

## Configure LiveReload[#](#configure-livereload "Link to this heading")

1. Clone `sphinx-server` from [dldl/sphinx-server](https://github.com/dldl/sphinx-server).

   > **Note**
   > This project needs to be in `/opt/sphinx-server`
   ```
   cd /opt
   sudo git clone https://github.com/dldl/sphinx-server.git

   ```
2. Copy file `server.py` to your project root.

   ```
   cd /mnt/c/Users/user/source/rst/my-project
   cp /opt/sphinx-server/server.py .

   ```
3. Start the mini-server that uses `autobuild` and `livereload`.

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
4. Open your browser to `http://localhost:8000/`.

> **Source & license**
> Reproduced ****verbatim, without modification**** from
[© 2022, BilimEdtech Labs](https://labs.bilimedtech.com/index.html),
licensed under
[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

Source page:
<https://labs.bilimedtech.com/workshops/rst/writing-rst-setup.html>

See [LICENSE](../../LICENSE_edtech.html) for the full license text.