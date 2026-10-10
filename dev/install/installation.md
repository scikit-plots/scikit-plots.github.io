# Installing scikit-plots[#](#installing-scikit-plots "Link to this heading")

Scikit-plots relies on [Matplotlib](http://matplotlib.org/) and
[Scikit-learn](http://scikit-learn.org/) for plotting model results.
Additionally, it can work with results from other modeling libraries such as
[TensorFlow](https://www.tensorflow.org/) and [PyTorch](https://pytorch.org/).
Ensure that you have the necessary libraries installed in your environment.

There are different ways to install scikit-plots:

* [Install the latest official release](#install-official-release). This
  is the best approach for most users. It will provide a stable version
  and pre-built packages are available for most platforms.

## Installing the latest release[#](#installing-the-latest-release "Link to this heading")

⚠️ Partially support Python 3.8 3.9 without some packages in cexternals, externals due to externals lib dep (e.g., astropy.stats, arrat-api-compat, arrat-api-extra)

⚠️ Recommended: Use a Virtual Environmentt (like `venv` `pipenv`) to Avoid Conflicts

🚫 Don’t use conda `base` — it’s prone to conflicts.

✅ This avoids dependency issues and keeps your system stable.

pip

Windows

Install the 64-bit version of Python 3, for instance from the
[official website](https://www.python.org/downloads/windows/).

Now create a [virtual environment (venv)](https://docs.python.org/3/tutorial/venv.html) and install scikit-plots.
Note that the virtual environment is optional but strongly recommended, in
order to avoid potential conflicts with other packages.

```
python -m venv sklearn-env
sklearn-env\Scripts\activate  # (or dot .) activate
pip install scikit-plots

# Cause numpy>=2.0.0 but support old numpy
# pip install numpy==1.26.4

```

In order to check your installation, you can use:

```
python -m pip show scikit-plots  # show scikit-plots version and location
python -m pip freeze             # show all installed packages in the environment

# Version Check
python -c "import scikitplot; scikitplot.show_versions()"

```
```
# (Optionally) CLI Version Check
scikitplot
scikitplot -h
scikitplot -V
scikitplot --version

```

Linux

Python 3 is usually installed by default on most Linux distributions. To
check if you have it installed, try:

```
python3 --version
pip3 --version

```

If you don’t have Python 3 installed, please install `python3` and
`python3-pip` from your distribution’s package manager.

Now create a [virtual environment (venv)](https://docs.python.org/3/tutorial/venv.html) and install scikit-plots.
Note that the virtual environment is optional but strongly recommended, in
order to avoid potential conflicts with other packages.

```
python3 -m venv sklearn-env
source sklearn-env/bin/activate  # (or dot .) activate
pip3 install -U scikit-plots

# Cause numpy>=2.0.0 but support old numpy
# pip3 install numpy==1.26.4

```

In order to check your installation, you can use:

```
python3 -m pip show scikit-plots  # show scikit-plots version and location
python3 -m pip freeze             # show all installed packages in the environment

# Version Check
python3 -c "import scikitplot; scikitplot.show_versions()"

```
```
# (Optionally) CLI Version Check
scikitplot
scikitplot -h
scikitplot -V
scikitplot --version

```

MacOS

Install Python 3 using [homebrew](https://brew.sh/) (`brew install python`)
or by manually installing the package from the [official website](https://www.python.org/downloads/macos/).

Now create a [virtual environment (venv)](https://docs.python.org/3/tutorial/venv.html) and install scikit-plots.
Note that the virtual environment is optional but strongly recommended, in
order to avoid potential conflicts with other packages.

```
python -m venv sklearn-env
source sklearn-env/bin/activate  # (or dot .) activate
pip install scikit-plots

# Cause numpy>=2.0.0 but support old numpy
# pip install numpy==1.26.4

```

In order to check your installation, you can use:

```
python -m pip show scikit-plots  # show scikit-plots version and location
python -m pip freeze             # show all installed packages in the environment

# Version Check
python -c "import scikitplot; scikitplot.show_versions()"

```
```
# (Optionally) CLI Version Check
scikitplot
scikitplot -h
scikitplot -V
scikitplot --version

```

conda

Install conda using the [miniforge installers](https://github.com/conda-forge/miniforge#miniforge) (no administrator permission
required). Then run:

```
## (conda, mamba or micromamba) Create New Env and install ``scikit-plots``
## Create a new environment and install Python 3.11 with IPython kernel support
# conda create -y -n py311 python=3.11 ipykernel
# mamba create --yes --name py311 python=3.11 ipykernel
micromamba create -y -n py311 python=3.11 ipykernel

```
```
## (conda, mamba or micromamba) Activate the environment
# conda activate py311
# mamba activate py311
micromamba activate py311

```
```
## (conda, mamba or micromamba) Deep Explore scikit-plots
# conda repoquery search -c conda-forge "scikit-plots=0.4.0" --json
# mamba repoquery search -c conda-forge "scikit-plots=0.4.0" --json
# micromamba repoquery search -c conda-forge "scikit-plots=0.4.0" --json
# micromamba repoquery search -c conda-forge "scikit-plots=0.4.0" --json --platform osx-64
micromamba repoquery search -c conda-forge "scikit-plots=0.4.0" --json \
  | jq -r '.result.pkgs[] | "\(.subdir)  \(.build)"'

```
```
## (conda, mamba or micromamba) Install scikit-plots
# conda install -y conda-forge::scikit-plots
# mamba install --yes --channel conda-forge scikit-plots
micromamba install -y -c conda-forge scikit-plots

# Cause numpy>=2.0.0 but support old numpy
# pip install numpy==1.26.4

```
```
## (conda, mamba or micromamba) Install newest compatible build scikit-plots
# conda update -y conda-forge::scikit-plots
# mamba update --yes --channel conda-forge scikit-plots
micromamba update -y -c conda-forge scikit-plots

# Cause numpy>=2.0.0 but support old numpy
# pip install numpy==1.26.4

```

In order to check your installation, you can use:

```
## (conda, mamba or micromamba) Verify version and location scikit-plots
# conda list | grep scikit-plots
# mamba list | grep scikit-plots
micromamba list | grep scikit-plots

# Version Check
python -c "import scikitplot; scikitplot.show_versions()"

```
```
# (Optionally) CLI Version Check
scikitplot
scikitplot -h
scikitplot -V
scikitplot --version

```

(Optionally) Also available Nightly Version ****can be cause conflict**** required `New Environment`:

```
## (Optionally) Install the lost packages "Runtime dependencies"
## wget https://raw.githubusercontent.com/scikit-plots/scikit-plots/main/requirements/default.txt
curl -O https://raw.githubusercontent.com/scikit-plots/scikit-plots/main/requirements/default.txt
pip install -r default.txt

```
```
## Try After Ensure all "Runtime dependencies" installed
# pip install --extra-index-url https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots

# Cause numpy>=2.0.0 but support old numpy
# pip install numpy==1.26.4

```

### Setting Up Your Environment[#](#setting-up-your-environment "Link to this heading")

To manage dependencies and avoid conflicts, it is recommended to use an
isolated environment, such as [pip venv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)
or [conda](https://conda.io/projects/conda/en/latest/user-guide/install/index.html). This approach allows
you to install specific versions of `scikit-learn` and its dependencies
independently from other Python packages.

For Linux users, it is advisable to avoid installing pip packages alongside
those managed by your distribution’s package manager (e.g., apt, dnf, pacman).

### Activating Your Environment[#](#activating-your-environment "Link to this heading")

Remember to activate your chosen environment before running any Python commands,
especially when starting a new terminal session.

### Installing Dependencies[#](#installing-dependencies "Link to this heading")

If you have not yet installed `NumPy` or `SciPy`, you can do so using `pip`
or [conda](https://conda.io/projects/conda/en/latest/user-guide/install/index.html).
When using [pip](https://pip.pypa.io/en/stable/), ensure that **binary wheels** are used to avoid
compiling from source. This is particularly important for certain configurations,
such as running Linux on a Raspberry Pi.

## Installing A lightweight version `scikit-plots-x`[#](#installing-a-lightweight-version-scikit-plots-x "Link to this heading")

🔜🚀 [README.md](https://github.com/scikit-plots/scikit-plots#----by-----github-urls---)
A lightweight version that is designed to be used in environments where you want to minimize the size of the package.

* <https://anaconda.org/channels/scikit-plots-wheels-staging-nightly>

### scikit-plots-skinny[#](#scikit-plots-skinny "Link to this heading")

* ⚠️ `scikit-plots-skinny` as base required/dependency remaining `scikit-plots-x`.

```
pip install scikit-plots-skinny@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/skinny

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-skinny

```

### scikit-plots-annoy[#](#scikit-plots-annoy "Link to this heading")

```
pip install scikit-plots-annoy@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/annoy

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-annoy

```

### scikit-plots-cleanprompt[#](#scikit-plots-cleanprompt "Link to this heading")

```
pip install scikit-plots-cleanprompt@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/cleanprompt

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-cleanprompt

```

### scikit-plots-corpus[#](#scikit-plots-corpus "Link to this heading")

```
pip install scikit-plots-corpus@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/corpus

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-corpus

```

### scikit-plots-cython[#](#scikit-plots-cython "Link to this heading")

```
pip install scikit-plots-cython@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/cython

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-cython

```

### scikit-plots-mcp[#](#scikit-plots-mcp "Link to this heading")

```
pip install scikit-plots-mcp@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/mcp

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-mcp

```

### scikit-plots-mlflow[#](#scikit-plots-mlflow "Link to this heading")

```
pip install scikit-plots-mlflow@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/mlflow

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-mlflow

```

### scikit-plots-rank-bm25[#](#scikit-plots-rank-bm25 "Link to this heading")

```
pip install scikit-plots-rank-bm25@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/rank-bm25

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-rank-bm25

```

### scikit-plots-sphinx-ext[#](#scikit-plots-sphinx-ext "Link to this heading")

```
pip install scikit-plots-sphinx-ext@git+https://github.com/scikit-plots/scikit-plots.git@main#subdirectory=libs/sphinx-ext

```
```
pip install -i https://pypi.anaconda.org/scikit-plots-wheels-staging-nightly/simple scikit-plots-sphinx-ext

```

## Dependencies[#](#dependencies "Link to this heading")

Mandatory dependencies should be installed automatically if you install Matplotlib using
a package manager such as `pip` or `conda`; therefore this list is primarily for
reference and troubleshooting.

**Dependencies**

* [Dependencies](dependencies.html)
  * [Runtime dependencies](dependencies.html#runtime-dependencies)
  * [Build dependencies](dependencies.html#build-dependencies)
  * [Test dependencies](dependencies.html#test-dependencies)
  * [Documentation dependencies](dependencies.html#documentation-dependencies)
**Dependencies**

* [Troubleshooting](troubleshooting_faq.inc.html)
  * [Obtaining Matplotlib version](troubleshooting_faq.inc.html#obtaining-matplotlib-version)
  * [`matplotlib` install location](troubleshooting_faq.inc.html#matplotlib-install-location)
  * [`matplotlib` configuration and cache directory locations](troubleshooting_faq.inc.html#matplotlib-configuration-and-cache-directory-locations)