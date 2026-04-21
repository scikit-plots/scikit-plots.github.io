# 📦 Python Env Manager Guidelines[#](#python-env-manager-guidelines "Link to this heading")

> **See also**
> 🔎 Run the latest scikit-plots container — with full or partial preinstallation — interactively:

* [“Scikit-plots Runtime Docker Images”](https://hub.docker.com/r/scikitplot/scikit-plots)
* [scikit-plots/scikit-plots](https://github.com/scikit-plots/scikit-plots)

## 📦 Conda/Anaconda Environment Guidelines[#](#conda-anaconda-environment-guidelines "Link to this heading")

> **See also**
> * [“Conda Documentation”](https://docs.conda.io/en/latest/)
* [“Installing Conda”](https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html)
* [“Installing Anaconda”](https://www.anaconda.com/docs/getting-started/anaconda/install)
* [“Installing Miniconda”](https://www.anaconda.com/docs/getting-started/miniconda/install)
* [“Installing Miniforge”](https://conda-forge.org/download/)
* [“Installing Mamba”](https://mamba.readthedocs.io/en/latest/installation/mamba-installation.html)
* [“Installing Micromamba”](https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html)

### 🛠 The Main Tools (And What They’re Good At)[#](#the-main-tools-and-what-they-re-good-at "Link to this heading")

****🛠 The Main Tools (And What They’re Good At)****[#](#id1 "Link to this table")

| Tool | Create Environment | ⚠️ Activate Environment | Critical Notes |
| --- | --- | --- | --- |
| ****conda**** | conda create -n py311 python=3.11 | conda activate py311 | Full Anaconda distribution with ****many preinstalled packages****. |
| ****miniconda**** | conda create -n py311 python=3.11 | conda activate py311 | Minimal installer. Lightweight. ****Recommended for most users****. |
| ****mamba**** | mamba create -n py311 python=3.11 | conda activate py311 | Drop-in ****faster alternative to conda****. Needs conda to run. |
| ****micromamba**** | micromamba create -n py311 python=3.11 | micromamba activate py311 | ****No Python or conda needed****. Very fast. Shell hook required. |

### ⚖️ Feature Comparison (In Plain Words)[#](#feature-comparison-in-plain-words "Link to this heading")

****⚖️ Feature Comparison (In Plain Words)****[#](#id2 "Link to this table")

| Feature | conda | miniconda | mamba | micromamba | Critical Notes |
| --- | --- | --- | --- | --- | --- |
| ****Size**** | Large | Medium | Large | Very Small | micromamba is ideal for ****minimal**** or ****embedded**** environments |
| ****Language**** | Python | Python | C++ | C++ | mamba/micromamba are ****faster due**** to compiled language |
| ****Installation**** | GUI/CLI | CLI | via conda/pip | Static binary | 🚀 micromamba: ****no Python**** needed, ****portable**** |
| ****Speed**** | Slow | Slow | Fast | Very Fast | mamba/micromamba offer drastically ****faster performance**** |
| ****Conda env creation**** | ✅ Support | ✅ Support | ✅ Support | ✅ Support | ✅ All support full ****conda environments**** |
| ****Scripting / Docker**** | ⚠️ Heavy | ⚠️ Moderate | ⚠️ Heavy | ✅ Lightweight | micromamba is best suited for ****Docker and automation**** |
| ****Activation support**** | ✅ Support | ✅ Support | ✅ Support | ✅ (via hook) | micromamba requires ****manual shell**** integration |
| ****Use in CI/CD**** | ⚠️ Slower | ⚠️ Moderate | ✅ Fast | ✅ Best | micromamba is ideal for ****CI/CD pipelines**** |
| ****GPU support**** | ✅ Support | ✅ Support | ✅ Support | ✅ Support | ✅ All support ****CUDA & GPU**** packages |
| ****Platform support**** | All | All | All | All | micromamba supports ****Linux/macOS/Windows**** (via shell) |

### 💡 When to Use What[#](#when-to-use-what "Link to this heading")

* Use conda if you want the full Anaconda experience on local machines. Full-featured but heavy. Best for GUI users or those needing full Anaconda.
* Use miniconda for lighter installs with more manual control. Lightweight, clean base. Ideal for custom setups.
* Use mamba for speed, especially when resolving complex dependencies interactively. Same usage as conda, but much faster. Great for large envs.
* Use micromamba in containers, CI/CD, or when minimal overhead is critical. Tiny single binary, perfect for Docker, CI/CD, and scripting.

### 🛠 How to Use It Tips[#](#how-to-use-it-tips "Link to this heading")

Create the environment with only default (base) packages:

```
# (conda or mamba) Create New Env and install ``scikit-plots``
mamba create -n py311 python=3.11 ipykernel -y

```
```
# (conda or mamba) Create New Env and install ``scikit-plots``
conda env create -f environment.yml

```
```
conda activate py311

```

Create the environment with both base and extended packages:

```
conda create --name py311 --file environment.yml --group extended

```

Add the optional extended packages later to an existing environment:

```
conda install --name py311 --file environment.yml --group extended

```

## 📦 Pipenv Environment Guidelines[#](#pipenv-environment-guidelines "Link to this heading")

> **See also**
> * [“pipenv”](https://pypi.org/project/pipenv/)
* [scikit-plots/scikit-plots](https://github.com/scikit-plots/scikit-plots/tree/main/docker/env_pipenv)