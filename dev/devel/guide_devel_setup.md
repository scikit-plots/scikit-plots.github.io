# Development Setup Guidelines[#](#development-setup-guidelines "Link to this heading")

> **Template**
> Template for further usage, template belong to matplotlib.

To set up scikit-plots for development follow these steps:

## [Fork the scikit-plots repository](#id1)[#](#fork-the-scikit-plots-repository "Link to this heading")

scikit-plots is hosted at [scikit-plots/scikit-plots.git](https://github.com/scikit-plots/scikit-plots.git). If you
plan on solving issues or submitting pull requests to the main scikit-plots
repository, you should first fork this repository by **clicking** the
 ****Fork**** button near the top of the [project repository](https://github.com/scikit-plots/scikit-plots) page.

This creates a copy of the code under your account on the GitHub server. See [the GitHub
documentation](https://docs.github.com/get-started/quickstart/fork-a-repo) for more details.

## [Retrieve the latest version of the code](#id2)[#](#retrieve-the-latest-version-of-the-code "Link to this heading")

Now that your fork of the repository lives under your GitHub username, you can
retrieve the most recent version of the source code with one of the following
commands (replace `<your-username>` with your GitHub username):

https
```
git clone https://github.com/<your-username>/scikit-plots.git

```

ssh
```
git clone git@github.com:<your-username>/scikit-plots.git

```

This requires you to setup an [SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) in advance, but saves you from
typing your password at every connection.

This will place the sources in a directory `scikit-plots` below your
current working directory and set the remote name `origin` to point to your
fork. Change into this directory before continuing:

```
cd scikit-plots

```

Now set the remote name `upstream` to point to the scikit-plots main repository:

https
```
git remote add upstream https://github.com/scikit-plots/scikit-plots.git

```

ssh
```
git remote add upstream git@github.com:scikit-plots/scikit-plots.git

```

You can now use `upstream` to retrieve the most current snapshot of the source
code, as described in [Development Workflow Guidelines](guide_devel_workflow.html#development-workflow).

Additional `git` and `GitHub` resources[#](#additional-git-and-github-resources "Link to this dropdown")

For more information on `git` and `GitHub`, see:

* [Git documentation](https://git-scm.com/doc)
* [GitHub-Contributing to a Project](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project)
* [GitHub Skills](https://skills.github.com/)
* [Working with scikit-image source code](https://scikit-image.org/docs/stable/gitwash/index.html#using-git "(in skimage v0.26.0)")
* [Git Resources Guidelines](guide_git_resources.html#git-resources)
* [Installing git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Managing remote repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
* <https://tacaswell.github.io/think-like-git.html>
* <https://tom.preston-werner.com/2009/05/19/the-git-parable.html>

## [Create a dedicated environment](#id3)[#](#create-a-dedicated-environment "Link to this heading")

You should set up a dedicated environment to decouple your scikit-plots
development from other Python and scikit-plots installations on your system.

We recommend using one of the following options for a dedicated development environment
because these options are configured to install the Python dependencies as part of their
setup.

venv environment

Create a new [venv](https://docs.python.org/3/library/venv.html) environment with

```
python -m venv <file folder location>

```

and activate it with one of the following

```
source <file folder location>/bin/activate  # Linux/macOS
<file folder location>\Scripts\activate.bat  # Windows cmd.exe
<file folder location>\Scripts\Activate.ps1  # Windows PowerShell

```

On some systems, you may need to type `python3` instead of `python`.
For a discussion of the technical reasons, see [PEP-394](https://peps.python.org/pep-0394).

Install the Python dependencies with

```
pip install -r requirements/dev/dev-requirements.txt

```

Remember to activate the environment whenever you start working on scikit-plots!


conda environment

Create a new [conda](https://docs.conda.io/en/latest/) environment and install the Python dependencies with

```
conda env create -f environment.yml

```

You can use `mamba` instead of `conda` in the above command if
you have [mamba](https://mamba.readthedocs.io/en/latest/) installed.

Activate the environment using

```
conda activate mpl-dev

```

Remember to activate the environment whenever you start working on scikit-plots!


 GitHub Codespaces

[GitHub Codespaces](https://docs.github.com/codespaces) is a cloud-based
in-browser development environment that comes with the appropriate setup to
contribute to scikit-plots.

1. Open codespaces on your fork by clicking on the green  `Code`
   button on the GitHub web interface and selecting the `Codespaces` tab.
2. Next, click on “Open codespaces on <your branch name>”. You will be
   able to change branches later, so you can select the default
   `main` branch.
3. After the codespace is created, you will be taken to a new browser
   tab where you can use the terminal to activate a pre-defined conda
   environment called `mpl-dev`:

   ```
   conda activate mpl-dev

   ```

Remember to activate the **mpl-dev** environment whenever you start working on
scikit-plots.

If you need to open a GUI window with scikit-plots output on Codespaces, our
configuration includes a [light-weight Fluxbox-based desktop](https://github.com/devcontainers/features/tree/main/src/desktop-lite).
You can use it by connecting to this desktop via your web browser. To do this:

1. Press `F1` or `Ctrl/Cmd+Shift+P` and select
   `Ports: Focus on Ports View` in the VSCode session to bring it into
   focus. Open the ports view in your tool, select the `noVNC` port, and
   click the Globe icon.
2. In the browser that appears, click the Connect button and enter the desktop
   password (`vscode` by default).

Check the [GitHub instructions](https://github.com/devcontainers/features/tree/main/src/desktop-lite#connecting-to-the-desktop)
for more details on connecting to the desktop.

If you also built the documentation pages, you can view them using Codespaces.
Use the “Extensions” icon in the activity bar to install the “Live Server”
extension. Locate the `doc/build/html` folder in the Explorer, right click
the file you want to open and select “Open with Live Server.”

## [Install external dependencies](#id4)[#](#install-external-dependencies "Link to this heading")

Python dependencies were installed as part of [setting up the environment](#dev-environment).
Additionally, the following non-Python dependencies must also be installed locally:

* [c++ compiler](../install/dependencies.html#compile-dependencies)
* [documentation build dependencies](../install/dependencies.html#doc-dependencies-external)

For a full list of dependencies, see [Dependencies](../install/dependencies.html#dependencies). External dependencies do not
need to be installed when working in codespaces.

## [Install scikit-plots in editable mode](#id5)[#](#install-scikit-plots-in-editable-mode "Link to this heading")

Install scikit-plots in editable mode from the `scikit-plots` directory using the
command

```
python -m pip install --verbose --no-build-isolation --editable ".[dev]"

```

The ‘editable/develop mode’ builds everything and places links in your Python environment
so that Python will be able to import scikit-plots from your development source directory.
This allows you to import your modified version of scikit-plots without having to
re-install after changing a `.py` or compiled extension file.

When working on a branch that does not have Meson enabled, meaning it does not
have [PR #26621](https://github.com/scikit-plots/scikit-plots/pull/26621/) in its history (log), you will have to reinstall from source
each time you change any compiled extension code.

If the installation is not working, please consult the [troubleshooting guide](guide_troubleshooting.html#troubleshooting-faq).
If the guide does not offer a solution, please reach out via [chat](https://gitter.im/scikit-plots/scikit-plots)
or [open an issue](index.html#submitting-a-bug-report).

### [Build options](#id6)[#](#build-options "Link to this heading")

If you are working heavily with files that need to be compiled, you may want to
inspect the compilation log. This can be enabled by setting the environment
variable [`MESONPY_EDITABLE_VERBOSE`](https://mesonbuild.com/meson-python/reference/environment-variables.html#envvar-MESONPY_EDITABLE_VERBOSE "(in meson-python)") or by setting the `editable-verbose`
config during installation

```
python -m pip install --no-build-isolation --config-settings=editable-verbose=true --editable .

```

For more information on installation and other configuration options, see the
Meson Python [editable installs guide](https://mesonbuild.com/meson-python/how-to-guides/editable-installs.html#how-to-guides-editable-installs "(in meson-python)").

For a list of the other environment variables you can set before install, see [Environment variables](../install/environment_variables_faq.html#environment-variables).

## [Verify the Installation](#id7)[#](#verify-the-installation "Link to this heading")

Run the following command to make sure you have correctly installed scikit-plots in
editable mode. The command should be run when the virtual environment is activated:

```
python -c "import scikitplot; print(scikitplot.__file__)"

```

This command should return : `<scikit-plots_local_repo>\scikitplot\__init__.py`

We encourage you to run tests and build docs to verify that the code installed correctly
and that the docs build cleanly, so that when you make code or document related changes
you are aware of the existing issues beforehand.

* Run test cases to verify installation [Testing your code](https://docs.xarray.dev/en/stable/user-guide/testing.html#testing "(in xarray v2026.4.0)")
* Verify documentation build [Documentation Writing Guidelines](guide_document_write.html#documenting-scikit-plots)

## [Install pre-commit hooks](#id8)[#](#install-pre-commit-hooks "Link to this heading")

[pre-commit](https://pre-commit.com/) hooks save time in the review process by
identifying issues with the code before a pull request is formally opened. Most
hooks can also aide in fixing the errors, and the checks should have
corresponding [development workflow](guide_devel_workflow.html#development-workflow) and
[pull request](guide_pr.html#pr-guidelines) guidelines. Hooks are configured in
[.pre-commit-config.yaml](https://github.com/scikit-plots/scikit-plots/blob/main/.pre-commit-config.yaml?)
and include checks for spelling and formatting, flake 8 conformity, accidentally
committed files, import order, and incorrect branching.

Install pre-commit hooks

```
python -m pip install pre-commit
pre-commit install

```

Hooks are run automatically after the `git commit` stage of the
[editing workflow](guide_devel_details.html#edit-flow) or [The editing workflow](guide_devel_workflow.html#edit-flow-work). When a hook has found and fixed an error in a
file, that file must be **staged and committed** again.

Hooks can also be run manually. All the hooks can be run, in order as
listed in `.pre-commit-config.yaml`, against the full codebase with

```
pre-commit run --all-files

```

To run a particular hook manually, run `pre-commit run` with the hook id

```
pre-commit run <hook id> --all-files

```

Please note that the `mypy` pre-commit hook cannot check the [Type hints](guide_code_style_write.html#type-hints)
for new functions; instead the stubs for new functions are checked using the
`stubtest` [CI check](guide_devel_workflow.html#automated-tests) and can be checked locally using
`tox -e stubtest`.