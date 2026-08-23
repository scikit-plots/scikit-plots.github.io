Scikit-plots Contributing
  
 0.5.dev0+git.20260823.71eae2e - August 23, 2026 18:39 UTC

# Contributing Guidelines to scikit-plots[#](#contributing-guidelines-to-scikit-plots "Link to this heading")

Thank you for your interest in helping to improve scikit-plots!

This project is a community effort, and everyone is welcome to contribute. Everyone
within the community is expected to abide by our [code of conduct](../project/code_of_conduct.html#code-of-conduct).

There are various ways to contribute, such as optimizing and refactoring code,
detailing unclear documentation and writing new examples, helping the community,
reporting and fixing bugs, requesting and implementing new features…

> **See also**
> * <https://matplotlib.org/sampledoc/index.html>
* [`"Download matplotlib sampledoc.pdf"`](../_downloads/7fc6a146c19f17d029102fe992728d8d/sampledoc.pdf).
> **Note**
> Some Parts of this guides were adapted from the
[matplotlib developer documentation](https://matplotlib.org/devdocs/devel/index.html),
[pandas developer documentation](https://pandas.pydata.org/pandas-docs/stable/development/index.html),
[astropy developer documentation](https://docs.astropy.org/en/latest/index_dev.html),
[scikit-learn developer documentation](https://scikit-learn.org/dev/developers/index.html)
Scikit-plots is grateful to the these teams for their documentation efforts.

## Quickstart Contribute Guide[#](#quickstart-contribute-guide "Link to this heading")

Here you’ll find all the guidance and resources you need to quickly start contributing to this project.

**Quickstart Contributing**

Get up and running quickly to local:

quickstart

* [Quickstart Contribute Guide](guide_qu_contribute.html)
  * [Creating a development environment](guide_qu_contribute.html#creating-a-development-environment)
  * [Create a clone of scikit-plots](guide_qu_contribute.html#create-a-clone-of-scikit-plots)
  * [Create an isolated development environment](guide_qu_contribute.html#create-an-isolated-development-environment)
  * [Creating and submitting a pull request](guide_qu_contribute.html#creating-and-submitting-a-pull-request)
  * [Making code or documentation changes](guide_qu_contribute.html#making-code-or-documentation-changes)
* [Contributing Code: A Worked Example](git_edit_workflow_examples.html)
  * [Before you begin](git_edit_workflow_examples.html#before-you-begin)
  * [Grab the latest updates to astropy](git_edit_workflow_examples.html#grab-the-latest-updates-to-astropy)
  * [Set up an isolated workspace](git_edit_workflow_examples.html#set-up-an-isolated-workspace)
  * [Test first, please](git_edit_workflow_examples.html#test-first-please)
  * [Add this test to your local git repo](git_edit_workflow_examples.html#add-this-test-to-your-local-git-repo)
  * [Fix the issue](git_edit_workflow_examples.html#fix-the-issue)
  * [Stop and think: Any more tests or other changes?](git_edit_workflow_examples.html#stop-and-think-any-more-tests-or-other-changes)
  * [Commit any additional changes](git_edit_workflow_examples.html#commit-any-additional-changes)
  * [Push your changes to your GitHub fork of astropy](git_edit_workflow_examples.html#push-your-changes-to-your-github-fork-of-astropy)
  * [Propose your changes as a pull request](git_edit_workflow_examples.html#propose-your-changes-as-a-pull-request)
  * [Edit the changelog](git_edit_workflow_examples.html#edit-the-changelog)
  * [Revise and push as necessary](git_edit_workflow_examples.html#revise-and-push-as-necessary)
**Docker Desktop or Github Codespaces**

Fast launch by `pre-installed` Docker Env:

docker

* [Docker Guidelines](guide_docker.html)
  * [🐋 Docker Containerization](guide_docker.html#docker-containerization)
  * [🏷️ Github Codespaces Guide](guide_docker.html#github-codespaces-guide)
  * [🏷️ Docker Desktop Guide](guide_docker.html#docker-desktop-guide)
  * [🐳 Docker Compose Quickstart Guide](guide_docker.html#docker-compose-quickstart-guide)
  * [🐳 Docker Compose Configuration](guide_docker.html#docker-compose-configuration)
  * [🛠️ Custom Docker Commands](guide_docker.html#custom-docker-commands)
  * [📂 Folder Structure](guide_docker.html#folder-structure)
  * [🖥️ Useful References](guide_docker.html#useful-references)
* [Docker Recovery Guide](guide_docker_wsl_recovery_sphinx.html)
  * [Windows WSL + Cross-Platform Notes](guide_docker_wsl_recovery_sphinx.html#windows-wsl-cross-platform-notes)
  * [1. Situation Overview (Windows WSL2 Case)](guide_docker_wsl_recovery_sphinx.html#situation-overview-windows-wsl2-case)
  * [2. Architecture Model (Critical Understanding)](guide_docker_wsl_recovery_sphinx.html#architecture-model-critical-understanding)
  * [3. Critical Safety Rules](guide_docker_wsl_recovery_sphinx.html#critical-safety-rules)
  * [4. Pre-check (System Validation)](guide_docker_wsl_recovery_sphinx.html#pre-check-system-validation)
  * [5. Recovery Strategy (Preferred Method)](guide_docker_wsl_recovery_sphinx.html#recovery-strategy-preferred-method)
  * [6. Fallback Method (Compatibility Mode)](guide_docker_wsl_recovery_sphinx.html#fallback-method-compatibility-mode)
  * [7. Verification](guide_docker_wsl_recovery_sphinx.html#verification)
  * [8. Restart Docker](guide_docker_wsl_recovery_sphinx.html#restart-docker)
  * [9. Root Causes](guide_docker_wsl_recovery_sphinx.html#root-causes)
  * [10. Failure Handling](guide_docker_wsl_recovery_sphinx.html#failure-handling)
  * [11. Recovery Outcome](guide_docker_wsl_recovery_sphinx.html#recovery-outcome)
  * [12. Key Principle](guide_docker_wsl_recovery_sphinx.html#key-principle)
  * [13. Summary Flow](guide_docker_wsl_recovery_sphinx.html#summary-flow)
  * [14. Linux Recovery Notes](guide_docker_wsl_recovery_sphinx.html#linux-recovery-notes)
  * [15. macOS Recovery Notes](guide_docker_wsl_recovery_sphinx.html#macos-recovery-notes)
  * [Final Warning](guide_docker_wsl_recovery_sphinx.html#final-warning)
* [Python Env Manager Guide](guide_python_env_manager.html)
  * [📦 Conda/Anaconda Environment Guidelines](guide_python_env_manager.html#conda-anaconda-environment-guidelines)
  * [📦 Pipenv Environment Guidelines](guide_python_env_manager.html#pipenv-environment-guidelines)

## GitHub issue tracker[#](#github-issue-tracker "Link to this heading")

The [issue tracker](https://github.com/scikit-plots/scikit-plots/issues) serves as the
centralized location for making feature requests, reporting bugs, identifying major
projects to work on, and discussing priorities.

We have preloaded the issue creation page with markdown forms requesting the information
we need to triage issues and we welcome you to add any additional information or
context that may be necessary for resolving the issue:

**Submit a bug report**

Thank you for your help in keeping bug reports targeted and descriptive.

[Report a bug](https://github.com/scikit-plots/scikit-plots/issues/new/choose)

**Request a new feature**

Thank you for your help in keeping feature requests well defined and tightly scoped.

[Request a feature](https://github.com/scikit-plots/scikit-plots/issues/new/choose)

Since scikit-plots is an open source project with limited resources, we encourage users
to also [participate](guide_gs_contribute.html#contribute-code) in fixing bugs and implementing new
features.

## Getting Started Contribute Guide[#](#getting-started-contribute-guide "Link to this heading")

We welcome you to get more involved with the scikit-plots project! If you are new
to contributing, we recommend that you first read our
[Getting Started Contribute Guide](guide_gs_contribute.html#contributing):

Contribute code

[Code](guide_gs_contribute.html#contribute-code)

Write documentation

[Documentation](guide_gs_contribute.html#contribute-documentation)

Triage issues

[Triage](guide_gs_contribute.html#contribute-triage)

Build community

[Community](guide_gs_contribute.html#other-ways-to-contribute)

[Is this my first contribution?](guide_gs_contribute.html#new-contributors)

[Where do I ask questions?](guide_gs_contribute.html#get-connected)

[How do I choose an issue?](guide_gs_contribute.html#managing-issues-prs)

[How do I start a pull request?](guide_gs_contribute.html#how-to-pull-request)

## Development Workflow Guide[#](#development-workflow-guide "Link to this heading")

If you are contributing code or documentation, please follow our guide for setting up
and managing a development environment and workflow:

**Install Guide**

* [Development Setup Guide](guide_devel_setup.html)
  * [Fork the scikit-plots repository](guide_devel_setup.html#fork-the-scikit-plots-repository)
  * [Retrieve the latest version of the code](guide_devel_setup.html#retrieve-the-latest-version-of-the-code)
  * [Create a dedicated environment](guide_devel_setup.html#create-a-dedicated-environment)
  * [Install external dependencies](guide_devel_setup.html#install-external-dependencies)
  * [Install scikit-plots in editable mode](guide_devel_setup.html#install-scikit-plots-in-editable-mode)
  * [Verify the Installation](guide_devel_setup.html#verify-the-installation)
  * [Install pre-commit hooks](guide_devel_setup.html#install-pre-commit-hooks)
**Workflow Guide**

* [Development Workflow Guide](guide_devel_workflow.html)
  * [Workflow summary](guide_devel_workflow.html#workflow-summary)
  * [Update the `main` branch](guide_devel_workflow.html#update-the-main-branch)
  * [Make a new feature branch](guide_devel_workflow.html#make-a-new-feature-branch)
  * [The editing workflow](guide_devel_workflow.html#the-editing-workflow)
  * [Verify your changes](guide_devel_workflow.html#verify-your-changes)
  * [Open a pull request](guide_devel_workflow.html#open-a-pull-request)
  * [Update a pull request](guide_devel_workflow.html#update-a-pull-request)
  * [Manage commit history](guide_devel_workflow.html#manage-commit-history)
  * [Automated tests](guide_devel_workflow.html#automated-tests)
**Troubleshooting Guide**

* [Troubleshooting Guide](guide_troubleshooting.html)
  * [Problems with git](guide_troubleshooting.html#problems-with-git)
  * [Unlink of file `*/_c_internal_utils.cp311-win_amd64.pyd` failed](guide_troubleshooting.html#unlink-of-file-c-internal-utils-cp311-win-amd64-pyd-failed)
  * [Windows compilation errors](guide_troubleshooting.html#windows-compilation-errors)
**Coding Guide**

* [Coding Guide](guide_code.html)
  * [Interface and Dependencies](guide_code.html#interface-and-dependencies)
  * [Documentation and Testing](guide_code.html#documentation-and-testing)
  * [Data and Configuration](guide_code.html#data-and-configuration)
  * [Standard output, warnings, and errors](guide_code.html#standard-output-warnings-and-errors)
  * [Coding Style/Conventions](guide_code.html#coding-style-conventions)
  * [Unicode guidelines](guide_code.html#unicode-guidelines)
  * [Including C Code](guide_code.html#including-c-code)
  * [Requirements Specific to Affiliated Packages](guide_code.html#requirements-specific-to-affiliated-packages)
  * [Examples](guide_code.html#examples)
**C or Cython Extensions Guide**

* [C or Cython Extensions Guide](guide_ccython.html)
  * [Using Numpy C headers](guide_ccython.html#using-numpy-c-headers)
  * [Installing C header files](guide_ccython.html#installing-c-header-files)
  * [Preventing importing at build time](guide_ccython.html#preventing-importing-at-build-time)
  * [Speed up your builds with ccache](guide_ccython.html#speed-up-your-builds-with-ccache)
**Python Free-threaded (No-GIL) Guide**

* [Python Free-threaded Guide](guide_python_nogil.html)
  * [Overview](guide_python_nogil.html#overview)
  * [Comparison Table](guide_python_nogil.html#comparison-table)
  * [Timeline of No-GIL Development](guide_python_nogil.html#timeline-of-no-gil-development)
  * [Future CPython Feature Matrix](guide_python_nogil.html#future-cpython-feature-matrix)
  * [Tabbed View (CPython vs PyPy)](guide_python_nogil.html#tabbed-view-cpython-vs-pypy)
  * [Critical and Essential Knowledge](guide_python_nogil.html#critical-and-essential-knowledge)
  * [Risks vs Benefits Matrix](guide_python_nogil.html#risks-vs-benefits-matrix)
  * [Migration Checklist](guide_python_nogil.html#migration-checklist)
  * [Who Should Not Use Free-Threaded Python Yet](guide_python_nogil.html#who-should-not-use-free-threaded-python-yet)
**Development Details Guide**

* [Development Details Guide](guide_devel_details.html)
  * [Pre-commit](guide_devel_details.html#pre-commit)
  * [The editing workflow](guide_devel_details.html#the-editing-workflow)
  * [Add a changelog entry](guide_devel_details.html#add-a-changelog-entry)
  * [Make a pull request](guide_devel_details.html#make-a-pull-request)
  * [Do Not Create a Merge Commit](guide_devel_details.html#do-not-create-a-merge-commit)
  * [Rebase if necessary](guide_devel_details.html#rebase-if-necessary)
  * [Squash if necessary](guide_devel_details.html#squash-if-necessary)
  * [How to push](guide_devel_details.html#how-to-push)
  * [Troubleshooting the build](guide_devel_details.html#troubleshooting-the-build)
  * [External C Libraries](guide_devel_details.html#external-c-libraries)

## Policies and Guidelines for Consistent Maintenance and Workflow Management[#](#policies-and-guidelines-for-consistent-maintenance-and-workflow-management "Link to this heading")

These policies and guidelines help us maintain consistency in the various types
of maintenance work. If you are writing code or documentation, following these policies
helps maintainers more easily review your work. If you are helping triage, community
manage, or release manage, these guidelines describe how our current process works.

**Coding Guide**

* [Code Style and Writing Guidelines](guide_code_style_write.html)
* [Code API Versioning and Change Guidelines](guide_code_api_ver_change.html)
* [Code Testing Guidelines](guide_code_testing.html)
* [Testing Guidelines](guide_test.html)
* [Command-Line Scripts Guide](guide_scripts_cli.html)
**Documentation Guide**

* [Documentation Writing Guidelines](guide_document_write.html)
* [Documentation Styling Guidelines](guide_document_style.html)
* [Documentation Tagging Guidelines](guide_document_tag.html)
* [🌍 Internationalization (i18n) Guide](guide_document_internationalization.html)
* [🌍 Internationalization (i18n) Guide](guide_document_internationalization.html#id1)
* [Further Reading](guide_document_internationalization.html#further-reading)
* [Review Recommendations](guide_document_internationalization.html#review-recommendations)
**Maintainer Guide**

This section is about preparing a major/minor release, a release candidate (RC), or a bug-fix release.

* [Maintainer Guidelines](guide_maintainer.html)
* [conda-forge Guidelines](guide_maintainer_conda_forge.html)
**Maintenance Guide**

* [Release Guidelines](guide_release.html)
* [Community Management Guidelines](guide_communication.html)
* [Dependency Version Policy Guidelines](guide_min_dep_policy.html)
* [Sp Enhancement Proposals](SPEP/index.html)
**Triage And Review Guide**

* [Bug Triaging and Issue Curation Guidelines](guide_triage.html)
* [Pull Request Guidelines](guide_pr.html)
**Git Resources Guide**

* [Git Resources Guide](guide_git_resources.html)

 On this page[Edit on GitHub](https://github.com/scikit-plots/scikit-plots/edit/main/docs/source/devel/index.rst)[Show Source](../_sources/devel/index.rst.txt)