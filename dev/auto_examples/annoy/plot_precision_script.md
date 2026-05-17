> **Note**
> [Go to the end](#sphx-glr-download-auto-examples-annoy-plot-precision-script-py)
to download the full example code or to run this example in your browser via JupyterLite or Binder.

# Precision annoy.AnnoyIndex with examples[#](#precision-annoy-annoyindex-with-examples "Link to this heading")

An example showing the [`AnnoyIndex`](../../modules/generated/scikitplot.annoy.AnnoyIndex.html#scikitplot.annoy.AnnoyIndex "scikitplot.annoy.AnnoyIndex") class.

```
from __future__ import print_function

import random; random.seed(0)
import time

# from annoy import AnnoyIndex
# from scikitplot.annoy import AnnoyIndex
from scikitplot.annoy import Index as AnnoyIndex

try:
    from tqdm.auto import tqdm, trange
except ImportError:
    # Fallback: dummy versions that ignore all args/kwargs
    tqdm = lambda iterable, *args, **kwargs: iterable
    trange = lambda n, *args, **kwargs: range(n)

```

n, f = 1\_000\_000, 100 # 100~2.5GB

```
n, f = 100_000, 100  # 100~0.25GB 256~0.6GB


idx = AnnoyIndex(
    f=f,
    metric='angular',
)
idx.set_seed(0)
for i in trange(n):
    if(i % (n//10) == 0): print(f"{i} / {n} = {1.0 * i / n}")
    # v = []
    # for z in range(f):
    #     v.append(random.gauss(0, 1))
    v = [random.gauss(0, 1) for _ in range(f)]
    idx.add_item(i, v)

idx.build(2 * f)
idx.save('test.annoy')
idx.info()

```
```
/home/circleci/repo/galleries/examples/annoy/plot_precision_script.py:37: UserWarning: seed=0 resets to Annoy's default seed
  idx.set_seed(0)

  0%|          | 0/100000 [00:00<?, ?it/s]0 / 100000 = 0.0

  2%|▏         | 1735/100000 [00:00<00:05, 17340.01it/s]
  3%|▎         | 3470/100000 [00:00<00:05, 16895.58it/s]
  5%|▌         | 5211/100000 [00:00<00:05, 17123.81it/s]
  7%|▋         | 6947/100000 [00:00<00:05, 17213.68it/s]
  9%|▊         | 8679/100000 [00:00<00:05, 17251.18it/s]10000 / 100000 = 0.1

 10%|█         | 10406/100000 [00:00<00:05, 17254.19it/s]
 12%|█▏        | 12132/100000 [00:00<00:05, 17234.65it/s]
 14%|█▍        | 13877/100000 [00:00<00:04, 17299.65it/s]
 16%|█▌        | 15620/100000 [00:00<00:04, 17338.87it/s]
 17%|█▋        | 17354/100000 [00:01<00:04, 17279.61it/s]
 19%|█▉        | 19098/100000 [00:01<00:04, 17326.53it/s]20000 / 100000 = 0.2

 21%|██        | 20838/100000 [00:01<00:04, 17347.38it/s]
 23%|██▎       | 22588/100000 [00:01<00:04, 17391.15it/s]
 24%|██▍       | 24333/100000 [00:01<00:04, 17406.39it/s]
 26%|██▌       | 26080/100000 [00:01<00:04, 17424.71it/s]
 28%|██▊       | 27823/100000 [00:01<00:04, 16900.68it/s]
 30%|██▉       | 29567/100000 [00:01<00:04, 17057.78it/s]30000 / 100000 = 0.3

 31%|███▏      | 31310/100000 [00:01<00:04, 17165.00it/s]
 33%|███▎      | 33054/100000 [00:01<00:03, 17246.38it/s]
 35%|███▍      | 34781/100000 [00:02<00:03, 17149.99it/s]
 37%|███▋      | 36526/100000 [00:02<00:03, 17238.94it/s]
 38%|███▊      | 38277/100000 [00:02<00:03, 17317.77it/s]40000 / 100000 = 0.4

 40%|████      | 40025/100000 [00:02<00:03, 17365.95it/s]
 42%|████▏     | 41770/100000 [00:02<00:03, 17389.23it/s]
 44%|████▎     | 43517/100000 [00:02<00:03, 17410.38it/s]
 45%|████▌     | 45259/100000 [00:02<00:03, 17235.76it/s]
 47%|████▋     | 47007/100000 [00:02<00:03, 17306.29it/s]
 49%|████▉     | 48755/100000 [00:02<00:02, 17355.45it/s]50000 / 100000 = 0.5

 50%|█████     | 50496/100000 [00:02<00:02, 17370.96it/s]
 52%|█████▏    | 52234/100000 [00:03<00:02, 16777.66it/s]
 54%|█████▍    | 53917/100000 [00:03<00:02, 16709.60it/s]
 56%|█████▌    | 55597/100000 [00:03<00:02, 16735.12it/s]
 57%|█████▋    | 57273/100000 [00:03<00:02, 16604.36it/s]
 59%|█████▉    | 58935/100000 [00:03<00:02, 16337.94it/s]60000 / 100000 = 0.6

 61%|██████    | 60610/100000 [00:03<00:02, 16457.34it/s]
 62%|██████▏   | 62335/100000 [00:03<00:02, 16688.95it/s]
 64%|██████▍   | 64006/100000 [00:03<00:02, 16485.08it/s]
 66%|██████▌   | 65666/100000 [00:03<00:02, 16517.61it/s]
 67%|██████▋   | 67319/100000 [00:03<00:01, 16446.57it/s]
 69%|██████▉   | 69006/100000 [00:04<00:01, 16570.70it/s]70000 / 100000 = 0.7

 71%|███████   | 70664/100000 [00:04<00:01, 16521.96it/s]
 72%|███████▏  | 72365/100000 [00:04<00:01, 16665.12it/s]
 74%|███████▍  | 74032/100000 [00:04<00:01, 16549.25it/s]
 76%|███████▌  | 75781/100000 [00:04<00:01, 16828.14it/s]
 77%|███████▋  | 77465/100000 [00:04<00:01, 16685.07it/s]
 79%|███████▉  | 79213/100000 [00:04<00:01, 16920.08it/s]80000 / 100000 = 0.8

 81%|████████  | 80956/100000 [00:04<00:01, 17069.76it/s]
 83%|████████▎ | 82670/100000 [00:04<00:01, 17088.39it/s]
 84%|████████▍ | 84413/100000 [00:04<00:00, 17188.81it/s]
 86%|████████▌ | 86158/100000 [00:05<00:00, 17265.11it/s]
 88%|████████▊ | 87903/100000 [00:05<00:00, 17318.80it/s]
 90%|████████▉ | 89654/100000 [00:05<00:00, 17374.59it/s]90000 / 100000 = 0.9

 91%|█████████▏| 91392/100000 [00:05<00:00, 17072.77it/s]
 93%|█████████▎| 93101/100000 [00:05<00:00, 16900.51it/s]
 95%|█████████▍| 94793/100000 [00:05<00:00, 16864.03it/s]
 96%|█████████▋| 96481/100000 [00:05<00:00, 16837.97it/s]
 98%|█████████▊| 98166/100000 [00:05<00:00, 16634.16it/s]
100%|█████████▉| 99831/100000 [00:05<00:00, 16123.96it/s]
100%|██████████| 100000/100000 [00:05<00:00, 16968.81it/s]

{'f': 100, 'metric': 'angular', 'n_neighbors': 5, 'on_disk_path': 'test.annoy', 'prefault': False, 'seed': None, 'verbose': None, 'schema_version': 0, 'n_items': 100000, 'n_trees': 200, 'memory_usage_byte': 499984128, 'memory_usage_mib': 476.822021484375}

```
```
def plot(idx, y=None, **kwargs):
    import numpy as np
    import matplotlib.pyplot as plt
    import scikitplot.cexternals._annoy._plotting as utils

    single = np.zeros(idx.get_n_items(), dtype=int)
    if y is None:
        double = np.random.uniform(0, 1, idx.get_n_items()).round()

    # single vs double
    fig, ax = plt.subplots(ncols=2, figsize=(12, 5))
    alpha = kwargs.pop("alpha", 0.8)
    y2 = utils.plot_annoy_index(
        idx,
        dims = list(range(idx.f)),
        plot_kwargs={"draw_legend": False},
        ax=ax[0],
    )[0]
    utils.plot_annoy_knn_edges(
        idx,
        y2,
        k=1,
        line_kwargs={"alpha": alpha},
        ax=ax[1],
    )

# idx.unbuild()
# idx.build(10)
plot(idx)

```
![plot precision script](../../_images/sphx_glr_plot_precision_script_001.png)
```
def precision(q):
  limits = [10, 100, 1_000, 10_000]
  k = 10
  prec_n = 10
  prec_sum = {}
  time_sum = {}

  for i in trange(prec_n):
      j = random.randrange(0, n)
      closest = set(q.get_nns_by_item(j, k, n))
      for limit in limits:
          t0 = time.time()
          toplist = q.get_nns_by_item(j, k, limit)
          T = time.time() - t0

          found = len(closest.intersection(toplist))
          hitrate = 1.0 * found / k
          prec_sum[limit] = prec_sum.get(limit, 0.0) + hitrate
          time_sum[limit] = time_sum.get(limit, 0.0) + T

  for limit in limits:
      print('limit: %-9d precision: %6.2f%% avg time: %.6fs'
      % (limit, 100.0 * prec_sum[limit] / (i + 1), time_sum[limit] / (i + 1)))

```
```
q = AnnoyIndex(f, 'angular')
q.set_seed(0)
q.load('test.annoy')
precision(q)

```
```
/home/circleci/repo/galleries/examples/annoy/plot_precision_script.py:111: UserWarning: seed=0 resets to Annoy's default seed
  q.set_seed(0)

  0%|          | 0/10 [00:00<?, ?it/s]
 60%|██████    | 6/10 [00:00<00:00, 57.44it/s]
100%|██████████| 10/10 [00:00<00:00, 59.34it/s]
limit: 10        precision:  10.00% avg time: 0.000138s
limit: 100       precision:  16.00% avg time: 0.000117s
limit: 1000      precision:  33.00% avg time: 0.000351s
limit: 10000     precision:  86.00% avg time: 0.002064s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 54.098 seconds)

[![Launch binder](../../_images/binder_badge_logo.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/main?urlpath=lab/tree/notebooks/auto_examples/annoy/plot_precision_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo.svg)](../../lite/lab/index.html?path=auto_examples/annoy/plot_precision_script.ipynb)

[`Download Jupyter notebook: plot_precision_script.ipynb`](../../_downloads/07d5582f4876eb3715769a9aead8056c/plot_precision_script.ipynb)

[`Download Python source code: plot_precision_script.py`](../../_downloads/c2d2f0a185e42e4309a9e8e17501ce87/plot_precision_script.py)

[`Download zipped: plot_precision_script.zip`](../../_downloads/c67622e005a2e5af616892c9bff66bbd/plot_precision_script.zip)

Related examples

![](../../_images/sphx_glr_plot_simple_script_thumb.png)

[Simple annoy.AnnoyIndex with examples](plot_simple_script.html)

Simple annoy.AnnoyIndex with examples![](../../_images/sphx_glr_plot_annoy_to_NPY_CSV_thumb.png)

[annoy.Index to NPY or CSV with examples](plot_annoy_to_NPY_CSV.html)

annoy.Index to NPY or CSV with examples![](../../_images/sphx_glr_plot_mmap_script_thumb.png)

[Mmap annoy.AnnoyIndex with examples](plot_mmap_script.html)

Mmap annoy.AnnoyIndex with examples![](../../_images/sphx_glr_plot_Annoy_legacy_c_api_thumb.png)

[annoy.Annoy legacy c-api with examples](plot_Annoy_legacy_c_api.html)

annoy.Annoy legacy c-api with examples

[Gallery generated by Sphinx-Gallery](https://sphinx-gallery.github.io)