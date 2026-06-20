# Quickstart Contributing Guidelines[#](#quickstart-contributing-guidelines "Link to this heading")

## Creating a development environment[#](#creating-a-development-environment "Link to this heading")

To make and test code changes and build the documentation locally you will need to
create a development environment. If you run into problems at any stage do not hesitate
to [TEMPLATE ask for help](https://scikit-plots.github.io/dev/help.html).

### Set up GitHub and Git[#](#set-up-github-and-git "Link to this heading")

scikit-plots is hosted on [GitHub](https://github.com/scikit-plots/scikit-plots), and to
contribute, you will need a [GitHub account](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).

We use [Git](https://git-scm.com/) for version control and to allow many people to
work together on the project. See the
[GitHub quickstart instructions](https://docs.github.com/en/get-started/quickstart/set-up-git)
for installing and configuring git, as well as the [Git Resources Guidelines](guide_git_resources.html#git-resources) page.

If you are new to contributing to projects through forking on GitHub, see the
[GitHub documentation for contributing to projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

> **Important**
> If you dont want to install any packages on your local you can use
`Setup Docker Pre-Installed Env` via [Docker Containerization Guidelines](guide_docker.html#docker-index).

### Install a C compiler if needed[#](#install-a-c-compiler-if-needed "Link to this heading")

How to do this will depend on your platform.

****Windows****

You will need
[Build Tools for Visual Studio](https://visualstudio.microsoft.com/downloads/?q=build+tools).

> **Note**
> You DO NOT need to install Visual Studio.
You only need “Build Tools for Visual Studio” found by
scrolling down to “All downloads” -> “Tools for Visual Studio” -> “Build Tools
for Visual Studio”.

Alternative options include:

* Install the necessary components on the command line using [vs\_BuildTools.exe](https://learn.microsoft.com/en-us/visualstudio/install/use-command-line-parameters-to-install-visual-studio?source=recommendations&view=vs-2022).
* Use the [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

****MacOS****

Install the Developer Tools using `xcode-select --install`. There is no need to
install the full Xcode application and this command will install only the command line
tools and developer utilities.

Further details and related information can be found at
<https://devguide.python.org/setup/#macos>.

****Linux****

For Linux-based installations, you won’t have to install any additional components.

## Create a clone of scikit-plots[#](#create-a-clone-of-scikit-plots "Link to this heading")

If you have not done so already, you will need your own copy of `scikit-plots` to
build it and/or contribute to the source. scikit-plots is hosted in the
[scikit-plots GitHub repository](https://www.github.com/scikit-plots/scikit-plots)
and you need to make a clone.

First, create a [GitHub Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
by going to the [scikit-plots project page](https://github.com/scikit-plots/scikit-plots)
and hitting the `Fork` button.

Next, [clone](https://git-scm.com/docs/git-clone) your GitHub fork to your machine:

```
## Forked repo: https://github.com/scikit-plots/scikit-plots.git
git clone https://github.com/YOUR-USER-NAME/scikit-plots.git
cd scikit-plots

```
> **Tip**
> Actually we run below scripts step-by-step in following Documentation.
(See Also: [bash-first-run-notice.txt](https://github.com/scikit-plots/scikit-plots/blob/main/docker/scripts/bash-first-run-notice.txt))

```
bash docker/scripts/post_create_commands.sh

```

### ▶️ Quick check bash-first-run-notice.txt[#](#quick-check-bash-first-run-notice-txt "Link to this heading")

[“See Also: bash-first-run-notice.txt”](https://github.com/scikit-plots/scikit-plots/blob/main/docker/scripts/bash-first-run-notice.txt)

bash-first-run-notice.txt[#](#bash-first-run-notice.txt "Link to this dropdown")
```
👋  Welcome to the `scikit-plots` Dev Environment (Docker / Codespaces)

🧭  Quick Navigation:
• 🔎  Open the Command Palette → `Ctrl+Shift+P` / `Cmd+Shift+P` or `F1`
• 📘  Quick Start → https://scikit-plots.github.io/dev/introduction/quick_start.html
• 🛠️  Dev Guide → https://scikit-plots.github.io/dev/devel/index.html

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⭐ 🌟  IMPORTANT: Complete Environment Setup
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅  Troubleshooting VsCode Guide "micromamba" Env:
  $ # https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png
  $ # Command Palette (`Ctrl+Shift+P`) or on GUI click top "Open Quick Access" and type `> interpreter`
  $ # if display "micromamba" Env choose it, If not exist choose "Enter interpreter path..." then enter "/root/micromamba/envs/py311/bin/python"

✅  Check Installation:
  $ python -c "import scikitplot; scikitplot.show_config()"
  $ scikitplot -V

✅  Post-Create Setup All-In-One Script (Recommended):
  $ bash docker/scripts/all_post_create.sh

✅  Git Safe Configs:
  $ # bash docker/scripts/git_add_safe_dirs.sh  # add safe directories for git
  $ git config --global --add safe.directory '*'

✅  (Optionally) Git Submodules Clone/Download/Initialize Configs, Not Needed Every Time:
  $ git submodule update --init
  $ git submodule update --init --recursive

✅  Git Upstream Configs:
  $ git remote add upstream https://github.com/scikit-plots/scikit-plots.git

✅  Git Tag Configs:
  $ git fetch upstream --tags

✅  Create Environment (Conda/Mamba/Micromamba):
  $ conda create -n py311 python=3.11 ipykernel -y
  $ conda activate py311

✅  Install Build Dependencies:
  $ pip install -r requirements/build.txt
  $ pip install -r requirements/all.txt

✅  (Optional) Install CPU-specific packages:
  $ pip install -r requirements/cpu.txt

✅  Git hooks manager Initialize, Ensures code meets quality standards before it
  $ pre-commit install

✅  Install the current package in editable mode, using the current environment for building, and ignore cached builds:
  $ pip install --no-build-isolation --no-cache-dir -e . -vvv

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦  Environment Management Notes (Conda/Anaconda/Miniconda/Miniforge/Mamba/Micromamba):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Initialize Conda shell support (if needed):
  # https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html
  $ micromamba shell init --shell bash
  $ mamba init
  $ conda init

• See environments:
  $ micromamba info -e
  $ mamba info -e
  $ conda info -e

• Activate environments (depending on tool):

root@sp-docker /work/docs (subpackage-bug-fix)
  $ micromamba --version
  $ micromamba activate $(micromamba info -e | grep py312)
  $ micromamba activate /root/micromamba/envs/py312
  $ micromamba activate py311
  $ conda activate py311

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡  Troubleshooting:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• 💽  Disk Space:
  $ df -h && du -h --max-depth=1

• 💾  Creation logs (Codespaces):
  ⚠️ 👇 Check Codespace Container creation raise `ERROR: ... : No space left on device`
  $ cat /workspaces/.codespaces/.persistedshare/creation.log

• 📦 Warning: Clock skew detected. Your build may be incomplete (Mostly fixed; closed all open files.):
  ⚠️ Issues mostly fixed by closing all currently open files.
  ⚠️ ⏻ Restart Computer, If Needed.
  $ make clean
  $ find . -exec touch {} +
  $ python -m pip install --no-build-isolation --no-cache-dir -e . -v

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✍  Starting Development
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌿  Create a new branch before working:
  $ git checkout -b feature/my-new-feature

✍  Proceed to create a branch if you have uncommitted changes and are beginning work on a new feature or bug fix.
🔄  Read more: https://scikit-plots.github.io/dev/devel/quickstart_contributing.html#creating-a-branch

```

### Initialize and Fetch Submodules[#](#initialize-and-fetch-submodules "Link to this heading")

> **Note**
> Not Needed Every Time.
```
## (if Necessary) Add in git safe dirs
## Or use ``git config ...`` to add ``scikit-plots`` in git safe dirs
# bash docker/scripts/git_add_safe_dirs.sh  # add safe directories for git
git config --global --add safe.directory '*'

```
```
## (Optionally) Git Submodules Clone/Download/Initialize Configs, Not Needed Every Time.
## Almost always used after cloning a repo with submodules.
# git submodule update --init --recursive

```
```
## (Optionally) Update submodules to the latest commit on their configured remote branch
## Used when you want your submodules to move to their latest remote commit.
# git submodule update --init --recursive --remote  # (not needed every time)

```

Adding and Fetching Upstream Remote:

```
## (Recommended) Add remote upstream
git remote add upstream https://github.com/scikit-plots/scikit-plots.git
git fetch upstream --tags

```

This creates the directory `scikit-plots` and connects your repository to the upstream
(main project) [scikit-plots](https://github.com/scikit-plots/scikit-plots) repository.

You can see the remote repositories as follows:

```
.. prompt:: bash

```
> ## (Recommended) Check remote upstream
> git remote –verbose

You will see something like:

```
>>> origin  https://github.com/YOUR-USER-NAME/scikit-plots (fetch)
>>> origin  https://github.com/YOUR-USER-NAME/scikit-plots (push)
>>> upstream        https://github.com/scikit-plots/scikit-plots.git (fetch)
>>> upstream        https://github.com/scikit-plots/scikit-plots.git (push)

```

## Create an isolated development environment[#](#create-an-isolated-development-environment "Link to this heading")

A key requirement is to have an isolated Python environment, meaning that it is
isolated from both your system Python and any other Python environments you may have
for doing other work. This is important because the development environment will often
be unstable and possibly broken at times, and you don’t want to break your other work.

There are many good options for doing this, including a number of virtual environment
managers (e.g., the Python standard library [venv](https://docs.python.org/3/library/venv.html)
module). Users who have a preference for a particular virtual environment manager are
encouraged to use it!

For this quickstart guide we use the [conda](https://docs.conda.io/en/latest/) package
manager provided by [miniforge](https://github.com/conda-forge/miniforge). This is a
popular choice and generally works well, especially for newcomers. It is easy to install
and use on all platforms and it makes it easy to install different Python versions which
can be useful for testing.

### Install miniforge and conda[#](#install-miniforge-and-conda "Link to this heading")

If you do not already have `conda` installed,
[download and install miniforge](https://github.com/conda-forge/miniforge/blob/main/README.md).
The details depend on
your system but the end result is to provide a `conda` executable that you can use
to create and manage isolated Python environments.

Now create and activate an `py311` conda environment using the following:

```
## (Recommended) Check Docker also can be created env `py311` to use
conda info -e
conda activate py311

```
```
## (Recommended) Can be run on conda (or mamba) `conda base` or `venv` env
conda create -n py311 python=3.11 ipykernel graphviz -y

```

Note the `graphviz` package is required for building the documentation.

### Install the development version of scikit-plots[#](#install-the-development-version-of-scikit-plots "Link to this heading")

Now you can install the development version of `scikit-plots` into your new environment. This
will install the latest version of `scikit-plots` from your local git repo, along with
all the dependencies needed to build and fully test `scikit-plots`:

```
>>> ## (if Necessary) setup one line scikit-plots development version
>>> # make dev

```
```
## (Recommended) Setup scikit-plots lib dep
# pip install -r ./requirements/build.txt
# pip install -r ./requirements/cpu.txt
pip install -r ./requirements/all.txt

```
```
## (Recommended) Setup scikit-plots lib
pip install --no-build-isolation --no-cache-dir -e . -v

```
```
## (Optionally) It is also possible to include optional dependencies:
## cpu refer tensorflow-cpu, keras, transformers
python -m pip install --no-build-isolation --no-cache-dir -e .[build,dev,test,doc] -v

```

#### Checking the build scikit-plots[#](#checking-the-build-scikit-plots "Link to this heading")

At this point you should be able to `import scikitplot` from your locally built version:

```
## Checking the build without root
bash -c "cd ~ && python -c 'import scikitplot; scikitplot.show_config()'"

```
```
## Checking version
python -c 'import scikitplot; scikitplot.show_config()'

```
```
## Checking version
scikitplot --version
scikitplot -V

```

Next you may want to try running some or all of the `scikitplot` unit tests.
Running the full test suite can take a few minutes, so you may want to start with a
single sub-package (e.g. [KeyToDataScience](../user_guide/decile/kds.html#decile-kds-index)):

```
>>> ## python -m pytest -p vscode_pytest --collect-only --rootdir=.
>>> ## run a sub set of the test suite
>>> pytest scikitplot/decile/kds

>>> ## or the whole suite
>>> pytest

```

Details on running and writing tests can be found in the [Testing Guidelines](guide_test.html#testing-guidelines)
section.

### Install pre-commit[#](#install-pre-commit "Link to this heading")

This is optional, but **highly recommended**. [Pre-commit](https://pre-commit.com/) is a
tool that runs a number of [Continuous Integration (CI)](contributing_ci) checks
(e.g. code formatting) on your code before you commit it. If you skip this step then it
is likely that one or more of those CI checks will fail when you make a pull request,
resulting in lost time (yours and CI resources).

(Recommended) Installation is straightforward. From the root of the `scikit-plots` repository, run:

```
>>> ## Git hooks manager Initialize, Ensures code meets quality standards before it
>>> ## Triggered when running `git commit ...;` if all checks pass, the commit proceeds, allowing you to push the changes.
>>> pre-commit install

```

(if Necessary) Manually one-by-one testing (not needed every time):

```
>>> ## (if Necessary) Manually one-by-one testing:
>>> ## If the test is successful one by one
>>> ## but there is an error in the entire test, check the inconsistency
>>> # pre-commit run ruff-format --verbose # (with `--all-files` option not recommended)
>>> pre-commit run ruff
>>> pre-commit run black

```

(if Necessary) Update and reinstall pre-commit hooks (not needed every time):

```
>>> ## (if Necessary) Update and reinstall pre-commit hooks (not needed every time), If Needed
>>> pre-commit autoupdate  # (not needed every time)
>>> pre-commit clean && pre-commit install
>>> pre-commit run # (with `--all-files` option not recommended)

```

Now all of the styling checks will be run each time you commit changes, ensuring that
the CI formatting checks for your [pull request](#quickstart-pull-request) will
pass.

> **Tip**
> To learn more about pre-commit, see the [Pre-commit](guide_devel_details.html#pre-commit) section.

## Creating and submitting a pull request[#](#creating-and-submitting-a-pull-request "Link to this heading")

You can contribute bug fixes, new features, and documentation updates by submitting a
GitHub pull request (PR). This section will guide you through the process. We encourage
you to [ask for help](https://github.com/orgs/scikit-plots/discussions) if you get stuck.
The `scikit-plots` community is welcoming and friendly and will help you!

If you are new to the `scikit-plots` Project and interested to submit a large patch
(e.g., a new big feature or significant refactoring), we encourage you to first
discuss your ideas on GitHub to increase the chance of your PR
being accepted.

### Creating a branch[#](#creating-a-branch "Link to this heading")

Your local `main` branch should always reflect the current state of `scikit-plots` repository.
First ensure it’s up-to-date with the `main` `scikit-plots` repository:

```
>>> # git checkout main
>>> git switch main

```

### (Recommended) Use Fast-forward only[#](#recommended-use-fast-forward-only "Link to this heading")

* Fast-forward only: Updates your branch only if it can be fast-forwarded (i.e., no local commits that diverge from upstream/main).
* If divergence exists: Git refuses to pull, and you must manually resolve the situation (e.g., using git rebase or git merge).
* Use case: When you want a clean history and are sure your local branch is either up-to-date or strictly behind upstream/main.

Use when you have no local commits diverging from upstream/main:

```
>>> ## When you just want to update and have no local commits diverging from upstream.
>>> git pull upstream main --ff-only

```
```
## Example Scenario Before Fast-forward only:

A---B---C---D---E---F  (upstream/main)
         \
          (local main)

## ✅ Works: After git pull upstream main --ff-only, local main becomes:

A---B---C---D---E---F  (local main = upstream/main)

## ❌ Fails (Diverging History): You've made local commits (X and Y), but upstream has new commits (D, E, F):
## Because the histories have diverged, Git refuses to merge since a fast-forward isn't possible.

A---B---C---D---E---F  (upstream/main)
         \
          X---Y  (local main)  ❌ (Fast-forward not possible)

```

### (if Necessary) Rebases[#](#if-necessary-rebases "Link to this heading")

* Rebases your local commits on top of the latest upstream/main
* Rewrites history by replaying your commits on top of upstream/main, making the history linear
* Use case: When you want to keep a clean history while incorporating upstream changes without a merge commit.
* Since no local commits exist, both commands do the same thing: fast-forward the branch.

Use when you have local commits and want to apply them on top of upstream/main while keeping a linear history:

```
>>> ## When you do have local commits and want to apply them cleanly on top of the latest upstream changes.
>>> git pull upstream main --rebase

```
```
## Example Scenario Before Rebasing:

A---B---C---D---E---F  (upstream/main)
         \
          X---Y  (local main)

## ✅ Works: After git pull upstream main --rebase, local main becomes:
## ✅ Rewrites history, replaying local commits on top of upstream/main:
## Your commits (X and Y) are reapplied on top of F, creating new commits (X' and Y' with new hashes).

A---B---C---D---E---F---X'---Y'  (rebased local main)

```

To view the commit history in Git, you can use the following commands:

```
>>> git log --pretty=format:"%h - %an, %ar : %s" -n 9
>>> git log --oneline --graph --decorate --all -n 9

```

Now create a development branch for making your changes. For example:

```
>>> git switch -c subpackage-bug-fix

```

Delete the branch locally:

```
>>> # git checkout main && git pull
>>> git switch main
>>> git branch -d subpackage-bug-fix

```

This changes your working branch from `main` to the `subpackage-bug-fix` branch.
Keep any changes in this branch specific to one bug or feature so it is clear what the
branch brings to `scikit-plots`. You can have many feature branches and switch in between them
using the [git switch](https://git-scm.com/docs/git-switch) command.

Using a descriptive branch name can help you stay organized. For example
`kds-commented-header` might be a good name for a branch that fixes the
commented header issue [#1](https://github.com/scikit-plots/scikit-plots/issues/1) in
the `kds` sub-package.

When you want to update the feature branch with changes in main after
you created the branch, check the section on
[updating a PR](#contributing-update-pr).

## Making code or documentation changes[#](#making-code-or-documentation-changes "Link to this heading")

Now comes the fun part where you use your favorite editor or IDE to make changes to the
code or documentation! At a high level this breaks into a few parts:

* ****Make changes****: Make the changes you want to make. This could be fixing a bug,
  adding a new feature, or updating the documentation.
* ****Test changes****: For code changes, ensure that they work as expected following the
  process outlined in the [Testing Guidelines](guide_test.html#testing-guidelines) section.
* ****Build documentation****: If you are updating the documentation, you will want to
  [build the documentation](guide_document.html#builddocs) to ensure that it looks good.
* ****Add a changelog entry****: For most code changes you will need to
  [Add a changelog entry](guide_devel_details.html#add-changelog).

> **Tip**
> For more information and examples see [The editing workflow](guide_devel_details.html#edit-flow) or [The editing workflow](guide_devel_workflow.html#edit-flow-work) section.

You can see a summary of the changes you’ve currently made by running:

```
git status

```

You can then commit your all your changes to your local repository with an explanatory
[commit message](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html):

```
git add files-that-you-changed ...
git commit -m "your commit message goes here"

```
> **Important**
> Never merge changes from `upstream/main` into your feature branch. If
changes in `main` require changes to our code you must [Rebase if necessary](guide_devel_details.html#rebase).

### Pushing your changes[#](#pushing-your-changes "Link to this heading")

When you want your changes to appear publicly on your GitHub page, push your
forked feature branch’s commits:

```
>>> git push origin --set-upstream subpackage-bug-fix

```

Here `origin` is the default name given to your fork on GitHub.

Now your code is on GitHub, but it is not visible to the `scikit-plots` maintainers. For that
to happen, a pull request needs to be submitted on GitHub.

The first time you push to a new branch on GitHub, you will see a message like below
with a useful link to create a pull request:

```
>>> remote: Create a pull request for 'subpackage-bug-fix' on GitHub by visiting:
>>> remote:      https://github.com/YOUR-USER-NAME/scikit-plots/pull/new/subpackage-bug-fix

```

### Making a pull request[#](#making-a-pull-request "Link to this heading")

If everything looks good, you are ready to make a pull request (PR). A PR is how
code from your local repository becomes available to the GitHub community to review and
merged into project to appear the in the next release.

Most of the time you can just follow the link that `git` provided when you pushed
your branch and create the PR. If you don’t have that link (and for a few more details),
you can follow the [Make a pull request](guide_devel_details.html#pull-request) instructions.

Follow the instructions in the PR template and fill it out as completely as possible.

If your PR is still a work in progress then instead of clicking “Create pull request”,
click on the small down arrow next to it and select
“[Create draft pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)”.
In addition, if your commits are not ready for CI testing, you
should include `[ci skip]` the last commit message – but note that code formatting
checks and documentation building will still be done. Formatting and style errors **should**
already have been fixed before committing if you have locally
[installed pre-commit](#contributing-pre-commit); but if you have not,
you can use the [Fixing coding style issues](maintainers/maintainer_workflow.html#pre-commit-bot) to fix them automatically in the PR.

Once submitted (and marked as ready), this request goes to the `scikit-plots` maintainers and
they will review the PR.

### Updating your pull request[#](#updating-your-pull-request "Link to this heading")

Based on the review you get on your pull request, you will probably need to make
some adjustments. You can follow the [code committing steps](#contributing-commit-code)
again to address any feedback and update your pull request:

```
>>> git push origin subpackage-bug-fix

```

Any `git push` will automatically update your pull request with your branch’s changes
and restart the [Continuous Integration](contributing_ci) checks.

> **Important**
> At this point please read (or at least skim) the sections [Do Not Create a Merge Commit](guide_devel_details.html#revise-and-push),
[Rebase if necessary](guide_devel_details.html#rebase), and [Squash if necessary](guide_devel_details.html#squash-if-necessary). The information here
covers situations that happen on occasion and can be cause trouble. As always if
you have questions, ask for help from the maintainer reviewing your PR.

### Tips for a successful pull request[#](#tips-for-a-successful-pull-request "Link to this heading")

If you have made it to this point and submitted a pull request, one of the core
maintainers will take a look. To make the process as smooth and efficient as possible,
here are some tips:

* ****Reference any existing open issue**** to [link to that issue](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests)
  and close the issue if the PR is merged.
* ****Ensure you have appropriate tests****.
* ****Keep your pull requests as simple as possible**** – larger PRs take longer to review.
* ****When practical, limit the scope of a PR to one sub-package**** – this means fewer
  required reviewers and a faster review process.
* ****Ensure that CI is in a green state**** – any required failures should be addressed.