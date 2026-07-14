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

  1%|▏         | 1291/100000 [00:00<00:07, 12907.06it/s]
  3%|▎         | 2582/100000 [00:00<00:07, 12885.88it/s]
  4%|▍         | 3873/100000 [00:00<00:07, 12895.64it/s]
  5%|▌         | 5163/100000 [00:00<00:07, 12887.06it/s]
  6%|▋         | 6452/100000 [00:00<00:07, 12868.62it/s]
  8%|▊         | 7742/100000 [00:00<00:07, 12876.54it/s]
  9%|▉         | 9036/100000 [00:00<00:07, 12896.44it/s]10000 / 100000 = 0.1

 10%|█         | 10326/100000 [00:00<00:06, 12891.17it/s]
 12%|█▏        | 11618/100000 [00:00<00:06, 12899.02it/s]
 13%|█▎        | 12908/100000 [00:01<00:06, 12855.23it/s]
 14%|█▍        | 14201/100000 [00:01<00:06, 12875.78it/s]
 15%|█▌        | 15492/100000 [00:01<00:06, 12884.39it/s]
 17%|█▋        | 16781/100000 [00:01<00:06, 12828.88it/s]
 18%|█▊        | 18073/100000 [00:01<00:06, 12856.04it/s]
 19%|█▉        | 19367/100000 [00:01<00:06, 12878.36it/s]20000 / 100000 = 0.2

 21%|██        | 20655/100000 [00:01<00:06, 12872.17it/s]
 22%|██▏       | 21944/100000 [00:01<00:06, 12877.16it/s]
 23%|██▎       | 23239/100000 [00:01<00:05, 12897.52it/s]
 25%|██▍       | 24530/100000 [00:01<00:05, 12898.40it/s]
 26%|██▌       | 25824/100000 [00:02<00:05, 12910.21it/s]
 27%|██▋       | 27116/100000 [00:02<00:05, 12805.10it/s]
 28%|██▊       | 28406/100000 [00:02<00:05, 12833.27it/s]
 30%|██▉       | 29699/100000 [00:02<00:05, 12861.43it/s]30000 / 100000 = 0.3

 31%|███       | 30990/100000 [00:02<00:05, 12875.50it/s]
 32%|███▏      | 32284/100000 [00:02<00:05, 12894.58it/s]
 34%|███▎      | 33578/100000 [00:02<00:05, 12905.70it/s]
 35%|███▍      | 34869/100000 [00:02<00:05, 12884.94it/s]
 36%|███▌      | 36164/100000 [00:02<00:04, 12902.05it/s]
 37%|███▋      | 37458/100000 [00:02<00:04, 12912.29it/s]
 39%|███▉      | 38750/100000 [00:03<00:04, 12914.06it/s]40000 / 100000 = 0.4

 40%|████      | 40044/100000 [00:03<00:04, 12919.16it/s]
 41%|████▏     | 41338/100000 [00:03<00:04, 12923.20it/s]
 43%|████▎     | 42631/100000 [00:03<00:04, 12919.82it/s]
 44%|████▍     | 43925/100000 [00:03<00:04, 12924.51it/s]
 45%|████▌     | 45218/100000 [00:03<00:04, 12889.20it/s]
 47%|████▋     | 46510/100000 [00:03<00:04, 12897.38it/s]
 48%|████▊     | 47804/100000 [00:03<00:04, 12908.84it/s]
 49%|████▉     | 49097/100000 [00:03<00:03, 12914.49it/s]50000 / 100000 = 0.5

 50%|█████     | 50389/100000 [00:03<00:03, 12904.60it/s]
 52%|█████▏    | 51680/100000 [00:04<00:03, 12903.82it/s]
 53%|█████▎    | 52972/100000 [00:04<00:03, 12907.07it/s]
 54%|█████▍    | 54263/100000 [00:04<00:03, 12904.71it/s]
 56%|█████▌    | 55555/100000 [00:04<00:03, 12907.29it/s]
 57%|█████▋    | 56847/100000 [00:04<00:03, 12908.69it/s]
 58%|█████▊    | 58138/100000 [00:04<00:03, 12906.71it/s]
 59%|█████▉    | 59429/100000 [00:04<00:03, 12863.22it/s]60000 / 100000 = 0.6

 61%|██████    | 60717/100000 [00:04<00:03, 12866.45it/s]
 62%|██████▏   | 62009/100000 [00:04<00:02, 12880.08it/s]
 63%|██████▎   | 63300/100000 [00:04<00:02, 12888.85it/s]
 65%|██████▍   | 64591/100000 [00:05<00:02, 12894.36it/s]
 66%|██████▌   | 65884/100000 [00:05<00:02, 12904.73it/s]
 67%|██████▋   | 67175/100000 [00:05<00:02, 12898.83it/s]
 68%|██████▊   | 68469/100000 [00:05<00:02, 12909.12it/s]
 70%|██████▉   | 69760/100000 [00:05<00:02, 12899.98it/s]70000 / 100000 = 0.7

 71%|███████   | 71051/100000 [00:05<00:02, 12902.76it/s]
 72%|███████▏  | 72344/100000 [00:05<00:02, 12908.94it/s]
 74%|███████▎  | 73637/100000 [00:05<00:02, 12912.40it/s]
 75%|███████▍  | 74931/100000 [00:05<00:01, 12917.83it/s]
 76%|███████▌  | 76223/100000 [00:05<00:01, 12863.86it/s]
 78%|███████▊  | 77517/100000 [00:06<00:01, 12884.57it/s]
 79%|███████▉  | 78811/100000 [00:06<00:01, 12899.50it/s]80000 / 100000 = 0.8

 80%|████████  | 80101/100000 [00:06<00:01, 12894.09it/s]
 81%|████████▏ | 81397/100000 [00:06<00:01, 12913.22it/s]
 83%|████████▎ | 82689/100000 [00:06<00:01, 12909.56it/s]
 84%|████████▍ | 83983/100000 [00:06<00:01, 12918.09it/s]
 85%|████████▌ | 85277/100000 [00:06<00:01, 12922.98it/s]
 87%|████████▋ | 86570/100000 [00:06<00:01, 12920.96it/s]
 88%|████████▊ | 87863/100000 [00:06<00:00, 12921.32it/s]
 89%|████████▉ | 89157/100000 [00:06<00:00, 12923.92it/s]90000 / 100000 = 0.9

 90%|█████████ | 90450/100000 [00:07<00:00, 12913.30it/s]
 92%|█████████▏| 91743/100000 [00:07<00:00, 12916.62it/s]
 93%|█████████▎| 93035/100000 [00:07<00:00, 12914.91it/s]
 94%|█████████▍| 94327/100000 [00:07<00:00, 12913.82it/s]
 96%|█████████▌| 95621/100000 [00:07<00:00, 12918.74it/s]
 97%|█████████▋| 96913/100000 [00:07<00:00, 12907.59it/s]
 98%|█████████▊| 98204/100000 [00:07<00:00, 12907.79it/s]
 99%|█████████▉| 99495/100000 [00:07<00:00, 11624.58it/s]
100%|██████████| 100000/100000 [00:07<00:00, 12834.98it/s]

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
 70%|███████   | 7/10 [00:00<00:00, 60.85it/s]
100%|██████████| 10/10 [00:00<00:00, 61.87it/s]
limit: 10        precision:  10.00% avg time: 0.000130s
limit: 100       precision:  16.00% avg time: 0.000115s
limit: 1000      precision:  33.00% avg time: 0.000341s
limit: 10000     precision:  86.00% avg time: 0.001994s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 2.563 seconds)

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