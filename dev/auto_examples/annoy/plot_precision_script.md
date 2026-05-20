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

  2%|▏         | 1706/100000 [00:00<00:05, 17052.74it/s]
  3%|▎         | 3412/100000 [00:00<00:05, 17009.20it/s]
  5%|▌         | 5116/100000 [00:00<00:05, 17020.53it/s]
  7%|▋         | 6819/100000 [00:00<00:05, 17018.17it/s]
  9%|▊         | 8521/100000 [00:00<00:05, 17008.19it/s]10000 / 100000 = 0.1

 10%|█         | 10222/100000 [00:00<00:05, 16988.61it/s]
 12%|█▏        | 11935/100000 [00:00<00:05, 17034.29it/s]
 14%|█▎        | 13639/100000 [00:00<00:05, 16989.06it/s]
 15%|█▌        | 15340/100000 [00:00<00:04, 16995.26it/s]
 17%|█▋        | 17040/100000 [00:01<00:04, 16949.06it/s]
 19%|█▉        | 18750/100000 [00:01<00:04, 16994.83it/s]20000 / 100000 = 0.2

 20%|██        | 20457/100000 [00:01<00:04, 17015.09it/s]
 22%|██▏       | 22159/100000 [00:01<00:04, 16943.45it/s]
 24%|██▍       | 23871/100000 [00:01<00:04, 16995.77it/s]
 26%|██▌       | 25582/100000 [00:01<00:04, 17028.83it/s]
 27%|██▋       | 27285/100000 [00:01<00:04, 16542.74it/s]
 29%|██▉       | 28997/100000 [00:01<00:04, 16712.11it/s]30000 / 100000 = 0.3

 31%|███       | 30711/100000 [00:01<00:04, 16838.20it/s]
 32%|███▏      | 32414/100000 [00:01<00:04, 16893.94it/s]
 34%|███▍      | 34124/100000 [00:02<00:03, 16952.44it/s]
 36%|███▌      | 35821/100000 [00:02<00:03, 16870.60it/s]
 38%|███▊      | 37533/100000 [00:02<00:03, 16944.75it/s]
 39%|███▉      | 39242/100000 [00:02<00:03, 16985.59it/s]40000 / 100000 = 0.4

 41%|████      | 40955/100000 [00:02<00:03, 17027.41it/s]
 43%|████▎     | 42669/100000 [00:02<00:03, 17059.82it/s]
 44%|████▍     | 44376/100000 [00:02<00:03, 17039.14it/s]
 46%|████▌     | 46081/100000 [00:02<00:03, 16894.85it/s]
 48%|████▊     | 47792/100000 [00:02<00:03, 16956.98it/s]
 50%|████▉     | 49502/100000 [00:02<00:02, 16997.77it/s]50000 / 100000 = 0.5

 51%|█████     | 51203/100000 [00:03<00:02, 16987.11it/s]
 53%|█████▎    | 52914/100000 [00:03<00:02, 17023.18it/s]
 55%|█████▍    | 54627/100000 [00:03<00:02, 17052.28it/s]
 56%|█████▋    | 56347/100000 [00:03<00:02, 17095.40it/s]
 58%|█████▊    | 58058/100000 [00:03<00:02, 17098.83it/s]
 60%|█████▉    | 59768/100000 [00:03<00:02, 16874.91it/s]60000 / 100000 = 0.6

 61%|██████▏   | 61464/100000 [00:03<00:02, 16899.79it/s]
 63%|██████▎   | 63177/100000 [00:03<00:02, 16968.08it/s]
 65%|██████▍   | 64884/100000 [00:03<00:02, 16997.11it/s]
 67%|██████▋   | 66589/100000 [00:03<00:01, 17011.05it/s]
 68%|██████▊   | 68294/100000 [00:04<00:01, 17020.63it/s]70000 / 100000 = 0.7

 70%|███████   | 70004/100000 [00:04<00:01, 17043.38it/s]
 72%|███████▏  | 71719/100000 [00:04<00:01, 17074.33it/s]
 73%|███████▎  | 73427/100000 [00:04<00:01, 17068.00it/s]
 75%|███████▌  | 75134/100000 [00:04<00:01, 17052.15it/s]
 77%|███████▋  | 76840/100000 [00:04<00:01, 16768.09it/s]
 79%|███████▊  | 78550/100000 [00:04<00:01, 16865.80it/s]80000 / 100000 = 0.8

 80%|████████  | 80255/100000 [00:04<00:01, 16918.57it/s]
 82%|████████▏ | 81956/100000 [00:04<00:01, 16944.99it/s]
 84%|████████▎ | 83664/100000 [00:04<00:00, 16984.40it/s]
 85%|████████▌ | 85378/100000 [00:05<00:00, 17029.37it/s]
 87%|████████▋ | 87090/100000 [00:05<00:00, 17055.03it/s]
 89%|████████▉ | 88804/100000 [00:05<00:00, 17077.42it/s]90000 / 100000 = 0.9

 91%|█████████ | 90516/100000 [00:05<00:00, 17088.51it/s]
 92%|█████████▏| 92237/100000 [00:05<00:00, 17122.32it/s]
 94%|█████████▍| 93951/100000 [00:05<00:00, 17125.03it/s]
 96%|█████████▌| 95665/100000 [00:05<00:00, 17128.78it/s]
 97%|█████████▋| 97379/100000 [00:05<00:00, 17129.05it/s]
 99%|█████████▉| 99092/100000 [00:05<00:00, 16753.05it/s]
100%|██████████| 100000/100000 [00:05<00:00, 16970.58it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 59.41it/s]
100%|██████████| 10/10 [00:00<00:00, 61.17it/s]
limit: 10        precision:  10.00% avg time: 0.000132s
limit: 100       precision:  16.00% avg time: 0.000116s
limit: 1000      precision:  33.00% avg time: 0.000336s
limit: 10000     precision:  86.00% avg time: 0.002006s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 53.997 seconds)

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