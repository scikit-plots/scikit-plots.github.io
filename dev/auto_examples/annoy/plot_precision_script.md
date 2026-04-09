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

  2%|▏         | 1727/100000 [00:00<00:05, 17264.30it/s]
  3%|▎         | 3470/100000 [00:00<00:05, 17360.77it/s]
  5%|▌         | 5207/100000 [00:00<00:05, 17341.47it/s]
  7%|▋         | 6942/100000 [00:00<00:05, 17311.26it/s]
  9%|▊         | 8674/100000 [00:00<00:05, 17251.41it/s]10000 / 100000 = 0.1

 10%|█         | 10400/100000 [00:00<00:05, 17189.96it/s]
 12%|█▏        | 12126/100000 [00:00<00:05, 17194.63it/s]
 14%|█▍        | 13871/100000 [00:00<00:04, 17275.00it/s]
 16%|█▌        | 15603/100000 [00:00<00:04, 17287.00it/s]
 17%|█▋        | 17332/100000 [00:01<00:04, 17187.16it/s]
 19%|█▉        | 19067/100000 [00:01<00:04, 17234.03it/s]20000 / 100000 = 0.2

 21%|██        | 20792/100000 [00:01<00:04, 17238.55it/s]
 23%|██▎       | 22521/100000 [00:01<00:04, 17253.30it/s]
 24%|██▍       | 24268/100000 [00:01<00:04, 17315.92it/s]
 26%|██▌       | 26000/100000 [00:01<00:04, 17311.91it/s]
 28%|██▊       | 27732/100000 [00:01<00:04, 16779.54it/s]
 29%|██▉       | 29464/100000 [00:01<00:04, 16936.16it/s]30000 / 100000 = 0.3

 31%|███       | 31198/100000 [00:01<00:04, 17053.60it/s]
 33%|███▎      | 32941/100000 [00:01<00:03, 17164.56it/s]
 35%|███▍      | 34660/100000 [00:02<00:03, 17129.69it/s]
 36%|███▋      | 36391/100000 [00:02<00:03, 17180.97it/s]
 38%|███▊      | 38121/100000 [00:02<00:03, 17215.03it/s]
 40%|███▉      | 39856/100000 [00:02<00:03, 17253.74it/s]40000 / 100000 = 0.4

 42%|████▏     | 41588/100000 [00:02<00:03, 17273.09it/s]
 43%|████▎     | 43323/100000 [00:02<00:03, 17296.02it/s]
 45%|████▌     | 45053/100000 [00:02<00:03, 17109.73it/s]
 47%|████▋     | 46789/100000 [00:02<00:03, 17181.61it/s]
 49%|████▊     | 48523/100000 [00:02<00:02, 17227.79it/s]50000 / 100000 = 0.5

 50%|█████     | 50256/100000 [00:02<00:02, 17255.88it/s]
 52%|█████▏    | 51992/100000 [00:03<00:02, 17285.46it/s]
 54%|█████▎    | 53728/100000 [00:03<00:02, 17306.04it/s]
 55%|█████▌    | 55462/100000 [00:03<00:02, 17314.84it/s]
 57%|█████▋    | 57194/100000 [00:03<00:02, 17316.17it/s]
 59%|█████▉    | 58926/100000 [00:03<00:02, 17076.60it/s]60000 / 100000 = 0.6

 61%|██████    | 60660/100000 [00:03<00:02, 17152.27it/s]
 62%|██████▏   | 62392/100000 [00:03<00:02, 17201.65it/s]
 64%|██████▍   | 64143/100000 [00:03<00:02, 17291.50it/s]
 66%|██████▌   | 65881/100000 [00:03<00:01, 17315.50it/s]
 68%|██████▊   | 67615/100000 [00:03<00:01, 17321.77it/s]
 69%|██████▉   | 69356/100000 [00:04<00:01, 17345.22it/s]70000 / 100000 = 0.7

 71%|███████   | 71094/100000 [00:04<00:01, 17355.27it/s]
 73%|███████▎  | 72830/100000 [00:04<00:01, 17345.55it/s]
 75%|███████▍  | 74565/100000 [00:04<00:01, 17327.36it/s]
 76%|███████▋  | 76298/100000 [00:04<00:01, 17014.76it/s]
 78%|███████▊  | 78030/100000 [00:04<00:01, 17102.37it/s]
 80%|███████▉  | 79761/100000 [00:04<00:01, 17163.14it/s]80000 / 100000 = 0.8

 81%|████████▏ | 81494/100000 [00:04<00:01, 17211.63it/s]
 83%|████████▎ | 83230/100000 [00:04<00:00, 17253.74it/s]
 85%|████████▍ | 84965/100000 [00:04<00:00, 17280.30it/s]
 87%|████████▋ | 86696/100000 [00:05<00:00, 17289.03it/s]
 88%|████████▊ | 88434/100000 [00:05<00:00, 17314.25it/s]90000 / 100000 = 0.9

 90%|█████████ | 90167/100000 [00:05<00:00, 17315.73it/s]
 92%|█████████▏| 91903/100000 [00:05<00:00, 17328.53it/s]
 94%|█████████▎| 93642/100000 [00:05<00:00, 17346.70it/s]
 95%|█████████▌| 95377/100000 [00:05<00:00, 17343.31it/s]
 97%|█████████▋| 97112/100000 [00:05<00:00, 17336.43it/s]
 99%|█████████▉| 98846/100000 [00:05<00:00, 17328.97it/s]
100%|██████████| 100000/100000 [00:05<00:00, 17219.32it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 55.21it/s]
100%|██████████| 10/10 [00:00<00:00, 56.63it/s]
limit: 10        precision:  10.00% avg time: 0.000145s
limit: 100       precision:  16.00% avg time: 0.000119s
limit: 1000      precision:  33.00% avg time: 0.000376s
limit: 10000     precision:  86.00% avg time: 0.002363s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 6.031 seconds)

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