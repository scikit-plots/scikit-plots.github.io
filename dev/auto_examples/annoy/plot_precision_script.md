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

  2%|▏         | 1725/100000 [00:00<00:05, 17247.67it/s]
  3%|▎         | 3450/100000 [00:00<00:05, 17220.82it/s]
  5%|▌         | 5173/100000 [00:00<00:05, 17181.98it/s]
  7%|▋         | 6892/100000 [00:00<00:05, 17072.15it/s]
  9%|▊         | 8600/100000 [00:00<00:05, 17016.94it/s]10000 / 100000 = 0.1

 10%|█         | 10302/100000 [00:00<00:05, 16980.57it/s]
 12%|█▏        | 12001/100000 [00:00<00:05, 16564.43it/s]
 14%|█▎        | 13660/100000 [00:00<00:05, 16565.45it/s]
 15%|█▌        | 15339/100000 [00:00<00:05, 16632.00it/s]
 17%|█▋        | 17028/100000 [00:01<00:04, 16710.36it/s]
 19%|█▊        | 18741/100000 [00:01<00:04, 16836.95it/s]20000 / 100000 = 0.2

 20%|██        | 20431/100000 [00:01<00:04, 16855.39it/s]
 22%|██▏       | 22126/100000 [00:01<00:04, 16881.13it/s]
 24%|██▍       | 23824/100000 [00:01<00:04, 16908.67it/s]
 26%|██▌       | 25528/100000 [00:01<00:04, 16946.95it/s]
 27%|██▋       | 27223/100000 [00:01<00:04, 16352.96it/s]
 29%|██▉       | 28934/100000 [00:01<00:04, 16572.59it/s]30000 / 100000 = 0.3

 31%|███       | 30634/100000 [00:01<00:04, 16696.58it/s]
 32%|███▏      | 32307/100000 [00:01<00:04, 16627.20it/s]
 34%|███▍      | 34021/100000 [00:02<00:03, 16776.64it/s]
 36%|███▌      | 35701/100000 [00:02<00:03, 16763.33it/s]
 37%|███▋      | 37404/100000 [00:02<00:03, 16840.68it/s]
 39%|███▉      | 39089/100000 [00:02<00:03, 16578.74it/s]40000 / 100000 = 0.4

 41%|████      | 40806/100000 [00:02<00:03, 16751.38it/s]
 42%|████▏     | 42483/100000 [00:02<00:03, 15300.67it/s]
 44%|████▍     | 44210/100000 [00:02<00:03, 15849.33it/s]
 46%|████▌     | 45874/100000 [00:02<00:03, 16072.72it/s]
 48%|████▊     | 47565/100000 [00:02<00:03, 16312.81it/s]
 49%|████▉     | 49254/100000 [00:02<00:03, 16479.59it/s]50000 / 100000 = 0.5

 51%|█████     | 50973/100000 [00:03<00:02, 16686.43it/s]
 53%|█████▎    | 52649/100000 [00:03<00:02, 16435.15it/s]
 54%|█████▍    | 54298/100000 [00:03<00:02, 16319.12it/s]
 56%|█████▌    | 55982/100000 [00:03<00:02, 16471.04it/s]
 58%|█████▊    | 57671/100000 [00:03<00:02, 16593.84it/s]
 59%|█████▉    | 59333/100000 [00:03<00:02, 16262.54it/s]60000 / 100000 = 0.6

 61%|██████    | 61016/100000 [00:03<00:02, 16424.67it/s]
 63%|██████▎   | 62713/100000 [00:03<00:02, 16583.85it/s]
 64%|██████▍   | 64374/100000 [00:03<00:02, 16274.74it/s]
 66%|██████▌   | 66069/100000 [00:03<00:02, 16471.58it/s]
 68%|██████▊   | 67719/100000 [00:04<00:02, 15856.34it/s]
 69%|██████▉   | 69432/100000 [00:04<00:01, 16223.17it/s]70000 / 100000 = 0.7

 71%|███████   | 71101/100000 [00:04<00:01, 16359.16it/s]
 73%|███████▎  | 72742/100000 [00:04<00:01, 16277.33it/s]
 74%|███████▍  | 74423/100000 [00:04<00:01, 16432.43it/s]
 76%|███████▌  | 76069/100000 [00:04<00:01, 15771.85it/s]
 78%|███████▊  | 77653/100000 [00:04<00:01, 12507.82it/s]
 79%|███████▉  | 79011/100000 [00:04<00:01, 12461.58it/s]80000 / 100000 = 0.8

 81%|████████  | 80732/100000 [00:05<00:01, 13673.77it/s]
 82%|████████▏ | 82452/100000 [00:05<00:01, 14616.12it/s]
 84%|████████▍ | 84125/100000 [00:05<00:01, 15196.88it/s]
 86%|████████▌ | 85694/100000 [00:05<00:00, 15193.82it/s]
 87%|████████▋ | 87288/100000 [00:05<00:00, 15406.36it/s]
 89%|████████▉ | 88947/100000 [00:05<00:00, 15748.07it/s]90000 / 100000 = 0.9

 91%|█████████ | 90678/100000 [00:05<00:00, 16204.37it/s]
 92%|█████████▏| 92412/100000 [00:05<00:00, 16538.22it/s]
 94%|█████████▍| 94119/100000 [00:05<00:00, 16694.11it/s]
 96%|█████████▌| 95839/100000 [00:05<00:00, 16842.60it/s]
 98%|█████████▊| 97555/100000 [00:06<00:00, 16935.65it/s]
 99%|█████████▉| 99253/100000 [00:06<00:00, 16418.65it/s]
100%|██████████| 100000/100000 [00:06<00:00, 16191.63it/s]

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
 50%|█████     | 5/10 [00:00<00:00, 41.06it/s]
100%|██████████| 10/10 [00:00<00:00, 45.70it/s]
limit: 10        precision:  10.00% avg time: 0.000177s
limit: 100       precision:  16.00% avg time: 0.000148s
limit: 1000      precision:  33.00% avg time: 0.000463s
limit: 10000     precision:  86.00% avg time: 0.002979s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 38.368 seconds)

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