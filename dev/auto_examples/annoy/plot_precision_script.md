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

  2%|▏         | 1705/100000 [00:00<00:05, 17047.21it/s]
  3%|▎         | 3410/100000 [00:00<00:05, 17048.10it/s]
  5%|▌         | 5115/100000 [00:00<00:05, 17040.96it/s]
  7%|▋         | 6820/100000 [00:00<00:05, 17040.17it/s]
  9%|▊         | 8525/100000 [00:00<00:05, 17028.03it/s]10000 / 100000 = 0.1

 10%|█         | 10228/100000 [00:00<00:05, 17019.77it/s]
 12%|█▏        | 11941/100000 [00:00<00:05, 17055.14it/s]
 14%|█▎        | 13647/100000 [00:00<00:05, 17020.30it/s]
 15%|█▌        | 15363/100000 [00:00<00:04, 17062.99it/s]
 17%|█▋        | 17070/100000 [00:01<00:04, 17001.10it/s]
 19%|█▉        | 18778/100000 [00:01<00:04, 17023.11it/s]20000 / 100000 = 0.2

 20%|██        | 20482/100000 [00:01<00:04, 17025.41it/s]
 22%|██▏       | 22185/100000 [00:01<00:04, 17012.64it/s]
 24%|██▍       | 23895/100000 [00:01<00:04, 17036.14it/s]
 26%|██▌       | 25606/100000 [00:01<00:04, 17055.41it/s]
 27%|██▋       | 27312/100000 [00:01<00:04, 16509.56it/s]
 29%|██▉       | 29016/100000 [00:01<00:04, 16664.25it/s]30000 / 100000 = 0.3

 31%|███       | 30721/100000 [00:01<00:04, 16776.14it/s]
 32%|███▏      | 32426/100000 [00:01<00:04, 16856.89it/s]
 34%|███▍      | 34132/100000 [00:02<00:03, 16914.76it/s]
 36%|███▌      | 35825/100000 [00:02<00:03, 16808.54it/s]
 38%|███▊      | 37531/100000 [00:02<00:03, 16882.24it/s]
 39%|███▉      | 39239/100000 [00:02<00:03, 16941.06it/s]40000 / 100000 = 0.4

 41%|████      | 40955/100000 [00:02<00:03, 17004.22it/s]
 43%|████▎     | 42665/100000 [00:02<00:03, 17031.16it/s]
 44%|████▍     | 44373/100000 [00:02<00:03, 17045.61it/s]
 46%|████▌     | 46078/100000 [00:02<00:03, 16878.97it/s]
 48%|████▊     | 47785/100000 [00:02<00:03, 16933.81it/s]
 49%|████▉     | 49489/100000 [00:02<00:02, 16963.62it/s]50000 / 100000 = 0.5

 51%|█████     | 51186/100000 [00:03<00:02, 16892.09it/s]
 53%|█████▎    | 52892/100000 [00:03<00:02, 16940.97it/s]
 55%|█████▍    | 54587/100000 [00:03<00:02, 16941.48it/s]
 56%|█████▋    | 56283/100000 [00:03<00:02, 16946.19it/s]
 58%|█████▊    | 57989/100000 [00:03<00:02, 16979.60it/s]
 60%|█████▉    | 59688/100000 [00:03<00:02, 16757.88it/s]60000 / 100000 = 0.6

 61%|██████▏   | 61392/100000 [00:03<00:02, 16839.21it/s]
 63%|██████▎   | 63095/100000 [00:03<00:02, 16895.08it/s]
 65%|██████▍   | 64795/100000 [00:03<00:02, 16922.88it/s]
 66%|██████▋   | 66495/100000 [00:03<00:01, 16942.60it/s]
 68%|██████▊   | 68197/100000 [00:04<00:01, 16963.20it/s]
 70%|██████▉   | 69899/100000 [00:04<00:01, 16977.76it/s]70000 / 100000 = 0.7

 72%|███████▏  | 71597/100000 [00:04<00:01, 16952.54it/s]
 73%|███████▎  | 73300/100000 [00:04<00:01, 16973.81it/s]
 75%|███████▌  | 75000/100000 [00:04<00:01, 16980.10it/s]
 77%|███████▋  | 76699/100000 [00:04<00:01, 16672.89it/s]
 78%|███████▊  | 78381/100000 [00:04<00:01, 16715.07it/s]80000 / 100000 = 0.8

 80%|████████  | 80076/100000 [00:04<00:01, 16780.78it/s]
 82%|████████▏ | 81772/100000 [00:04<00:01, 16833.78it/s]
 83%|████████▎ | 83474/100000 [00:04<00:00, 16886.90it/s]
 85%|████████▌ | 85216/100000 [00:05<00:00, 17044.47it/s]
 87%|████████▋ | 86973/100000 [00:05<00:00, 17200.75it/s]
 89%|████████▊ | 88730/100000 [00:05<00:00, 17309.77it/s]90000 / 100000 = 0.9

 90%|█████████ | 90488/100000 [00:05<00:00, 17389.58it/s]
 92%|█████████▏| 92249/100000 [00:05<00:00, 17453.51it/s]
 94%|█████████▍| 94008/100000 [00:05<00:00, 17493.56it/s]
 96%|█████████▌| 95767/100000 [00:05<00:00, 17521.97it/s]
 98%|█████████▊| 97520/100000 [00:05<00:00, 17514.36it/s]
 99%|█████████▉| 99272/100000 [00:05<00:00, 17124.49it/s]
100%|██████████| 100000/100000 [00:05<00:00, 16998.40it/s]

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
 70%|███████   | 7/10 [00:00<00:00, 63.41it/s]
100%|██████████| 10/10 [00:00<00:00, 64.56it/s]
limit: 10        precision:  10.00% avg time: 0.000115s
limit: 100       precision:  16.00% avg time: 0.000113s
limit: 1000      precision:  33.00% avg time: 0.000315s
limit: 10000     precision:  86.00% avg time: 0.001823s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 53.856 seconds)

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