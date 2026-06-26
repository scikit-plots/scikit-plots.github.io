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

  1%|▏         | 1307/100000 [00:00<00:07, 13062.48it/s]
  3%|▎         | 2614/100000 [00:00<00:07, 13042.70it/s]
  4%|▍         | 3919/100000 [00:00<00:07, 12998.75it/s]
  5%|▌         | 5219/100000 [00:00<00:07, 12979.33it/s]
  7%|▋         | 6517/100000 [00:00<00:07, 12962.44it/s]
  8%|▊         | 7818/100000 [00:00<00:07, 12977.16it/s]
  9%|▉         | 9116/100000 [00:00<00:07, 12962.14it/s]10000 / 100000 = 0.1

 10%|█         | 10413/100000 [00:00<00:06, 12953.99it/s]
 12%|█▏        | 11712/100000 [00:00<00:06, 12964.64it/s]
 13%|█▎        | 13009/100000 [00:01<00:06, 12964.25it/s]
 14%|█▍        | 14306/100000 [00:01<00:06, 12937.09it/s]
 16%|█▌        | 15604/100000 [00:01<00:06, 12948.19it/s]
 17%|█▋        | 16899/100000 [00:01<00:06, 12930.66it/s]
 18%|█▊        | 18193/100000 [00:01<00:06, 12930.47it/s]
 19%|█▉        | 19488/100000 [00:01<00:06, 12934.58it/s]20000 / 100000 = 0.2

 21%|██        | 20782/100000 [00:01<00:06, 12919.49it/s]
 22%|██▏       | 22080/100000 [00:01<00:06, 12935.71it/s]
 23%|██▎       | 23374/100000 [00:01<00:05, 12854.57it/s]
 25%|██▍       | 24660/100000 [00:01<00:05, 12783.20it/s]
 26%|██▌       | 25939/100000 [00:02<00:05, 12718.60it/s]
 27%|██▋       | 27211/100000 [00:02<00:05, 12674.81it/s]
 28%|██▊       | 28479/100000 [00:02<00:05, 12624.84it/s]
 30%|██▉       | 29766/100000 [00:02<00:05, 12695.24it/s]30000 / 100000 = 0.3

 31%|███       | 31054/100000 [00:02<00:05, 12750.06it/s]
 32%|███▏      | 32330/100000 [00:02<00:05, 12730.24it/s]
 34%|███▎      | 33626/100000 [00:02<00:05, 12797.55it/s]
 35%|███▍      | 34906/100000 [00:02<00:05, 12678.56it/s]
 36%|███▌      | 36199/100000 [00:02<00:05, 12751.68it/s]
 37%|███▋      | 37475/100000 [00:02<00:04, 12635.37it/s]
 39%|███▉      | 38766/100000 [00:03<00:04, 12716.00it/s]40000 / 100000 = 0.4

 40%|████      | 40057/100000 [00:03<00:04, 12772.88it/s]
 41%|████▏     | 41335/100000 [00:03<00:04, 12717.52it/s]
 43%|████▎     | 42607/100000 [00:03<00:04, 12451.43it/s]
 44%|████▍     | 43903/100000 [00:03<00:04, 12598.09it/s]
 45%|████▌     | 45170/100000 [00:03<00:04, 12618.33it/s]
 46%|████▋     | 46433/100000 [00:03<00:04, 12483.00it/s]
 48%|████▊     | 47691/100000 [00:03<00:04, 12509.19it/s]
 49%|████▉     | 48970/100000 [00:03<00:04, 12590.17it/s]50000 / 100000 = 0.5

 50%|█████     | 50244/100000 [00:03<00:03, 12632.33it/s]
 52%|█████▏    | 51540/100000 [00:04<00:03, 12729.58it/s]
 53%|█████▎    | 52819/100000 [00:04<00:03, 12745.83it/s]
 54%|█████▍    | 54118/100000 [00:04<00:03, 12816.41it/s]
 55%|█████▌    | 55413/100000 [00:04<00:03, 12853.62it/s]
 57%|█████▋    | 56712/100000 [00:04<00:03, 12893.08it/s]
 58%|█████▊    | 58002/100000 [00:04<00:03, 12860.73it/s]
 59%|█████▉    | 59289/100000 [00:04<00:03, 12820.34it/s]60000 / 100000 = 0.6

 61%|██████    | 60580/100000 [00:04<00:03, 12846.48it/s]
 62%|██████▏   | 61874/100000 [00:04<00:02, 12873.96it/s]
 63%|██████▎   | 63169/100000 [00:04<00:02, 12894.76it/s]
 64%|██████▍   | 64462/100000 [00:05<00:02, 12903.26it/s]
 66%|██████▌   | 65753/100000 [00:05<00:02, 12883.18it/s]
 67%|██████▋   | 67048/100000 [00:05<00:02, 12900.62it/s]
 68%|██████▊   | 68346/100000 [00:05<00:02, 12921.95it/s]
 70%|██████▉   | 69639/100000 [00:05<00:02, 12907.16it/s]70000 / 100000 = 0.7

 71%|███████   | 70930/100000 [00:05<00:02, 12866.58it/s]
 72%|███████▏  | 72226/100000 [00:05<00:02, 12893.68it/s]
 74%|███████▎  | 73516/100000 [00:05<00:02, 12877.75it/s]
 75%|███████▍  | 74805/100000 [00:05<00:01, 12879.32it/s]
 76%|███████▌  | 76097/100000 [00:05<00:01, 12845.87it/s]
 77%|███████▋  | 77389/100000 [00:06<00:01, 12866.26it/s]
 79%|███████▊  | 78685/100000 [00:06<00:01, 12892.98it/s]
 80%|███████▉  | 79979/100000 [00:06<00:01, 12905.22it/s]80000 / 100000 = 0.8

 81%|████████▏ | 81289/100000 [00:06<00:01, 12961.61it/s]
 83%|████████▎ | 82586/100000 [00:06<00:01, 12903.56it/s]
 84%|████████▍ | 83877/100000 [00:06<00:01, 12878.97it/s]
 85%|████████▌ | 85166/100000 [00:06<00:01, 12880.56it/s]
 87%|████████▋ | 86504/100000 [00:06<00:01, 13029.41it/s]
 88%|████████▊ | 87846/100000 [00:06<00:00, 13144.97it/s]
 89%|████████▉ | 89188/100000 [00:06<00:00, 13226.21it/s]90000 / 100000 = 0.9

 91%|█████████ | 90527/100000 [00:07<00:00, 13274.58it/s]
 92%|█████████▏| 91855/100000 [00:07<00:00, 13251.57it/s]
 93%|█████████▎| 93193/100000 [00:07<00:00, 13289.26it/s]
 95%|█████████▍| 94532/100000 [00:07<00:00, 13316.98it/s]
 96%|█████████▌| 95870/100000 [00:07<00:00, 13333.13it/s]
 97%|█████████▋| 97204/100000 [00:07<00:00, 13326.53it/s]
 99%|█████████▊| 98541/100000 [00:07<00:00, 13337.68it/s]
100%|█████████▉| 99875/100000 [00:07<00:00, 11981.31it/s]
100%|██████████| 100000/100000 [00:07<00:00, 12836.79it/s]

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
 70%|███████   | 7/10 [00:00<00:00, 64.46it/s]
100%|██████████| 10/10 [00:00<00:00, 65.82it/s]
limit: 10        precision:  10.00% avg time: 0.000100s
limit: 100       precision:  16.00% avg time: 0.000103s
limit: 1000      precision:  33.00% avg time: 0.000298s
limit: 10000     precision:  86.00% avg time: 0.001757s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 55.173 seconds)

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