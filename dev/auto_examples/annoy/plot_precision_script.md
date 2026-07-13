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

  1%|▏         | 1316/100000 [00:00<00:07, 13149.17it/s]
  3%|▎         | 2631/100000 [00:00<00:07, 13068.01it/s]
  4%|▍         | 3940/100000 [00:00<00:07, 13076.26it/s]
  5%|▌         | 5253/100000 [00:00<00:07, 13097.26it/s]
  7%|▋         | 6567/100000 [00:00<00:07, 13109.29it/s]
  8%|▊         | 7882/100000 [00:00<00:07, 13119.89it/s]
  9%|▉         | 9201/100000 [00:00<00:06, 13140.74it/s]10000 / 100000 = 0.1

 11%|█         | 10516/100000 [00:00<00:06, 13119.38it/s]
 12%|█▏        | 11828/100000 [00:00<00:06, 13097.58it/s]
 13%|█▎        | 13138/100000 [00:01<00:06, 12954.10it/s]
 14%|█▍        | 14441/100000 [00:01<00:06, 12974.62it/s]
 16%|█▌        | 15759/100000 [00:01<00:06, 13034.90it/s]
 17%|█▋        | 17075/100000 [00:01<00:06, 13070.93it/s]
 18%|█▊        | 18397/100000 [00:01<00:06, 13113.23it/s]
 20%|█▉        | 19714/100000 [00:01<00:06, 13128.05it/s]20000 / 100000 = 0.2

 21%|██        | 21027/100000 [00:01<00:06, 13050.39it/s]
 22%|██▏       | 22348/100000 [00:01<00:05, 13097.98it/s]
 24%|██▎       | 23670/100000 [00:01<00:05, 13132.55it/s]
 25%|██▍       | 24990/100000 [00:01<00:05, 13151.13it/s]
 26%|██▋       | 26306/100000 [00:02<00:05, 13147.22it/s]
 28%|██▊       | 27621/100000 [00:02<00:05, 13124.89it/s]
 29%|██▉       | 28939/100000 [00:02<00:05, 13138.66it/s]30000 / 100000 = 0.3

 30%|███       | 30254/100000 [00:02<00:05, 13141.43it/s]
 32%|███▏      | 31571/100000 [00:02<00:05, 13149.68it/s]
 33%|███▎      | 32888/100000 [00:02<00:05, 13153.15it/s]
 34%|███▍      | 34210/100000 [00:02<00:04, 13171.11it/s]
 36%|███▌      | 35528/100000 [00:02<00:04, 13156.02it/s]
 37%|███▋      | 36844/100000 [00:02<00:04, 12744.97it/s]
 38%|███▊      | 38157/100000 [00:02<00:04, 12855.42it/s]
 39%|███▉      | 39470/100000 [00:03<00:04, 12935.94it/s]40000 / 100000 = 0.4

 41%|████      | 40786/100000 [00:03<00:04, 12999.35it/s]
 42%|████▏     | 42105/100000 [00:03<00:04, 13053.23it/s]
 43%|████▎     | 43420/100000 [00:03<00:04, 13081.44it/s]
 45%|████▍     | 44741/100000 [00:03<00:04, 13119.74it/s]
 46%|████▌     | 46054/100000 [00:03<00:04, 13104.28it/s]
 47%|████▋     | 47374/100000 [00:03<00:04, 13132.14it/s]
 49%|████▊     | 48693/100000 [00:03<00:03, 13148.10it/s]50000 / 100000 = 0.5

 50%|█████     | 50008/100000 [00:03<00:03, 13148.49it/s]
 51%|█████▏    | 51329/100000 [00:03<00:03, 13164.78it/s]
 53%|█████▎    | 52646/100000 [00:04<00:03, 13157.76it/s]
 54%|█████▍    | 53964/100000 [00:04<00:03, 13162.80it/s]
 55%|█████▌    | 55281/100000 [00:04<00:03, 13155.49it/s]
 57%|█████▋    | 56597/100000 [00:04<00:03, 13076.56it/s]
 58%|█████▊    | 57911/100000 [00:04<00:03, 13095.15it/s]
 59%|█████▉    | 59221/100000 [00:04<00:03, 13082.88it/s]60000 / 100000 = 0.6

 61%|██████    | 60534/100000 [00:04<00:03, 13095.25it/s]
 62%|██████▏   | 61844/100000 [00:04<00:02, 13061.23it/s]
 63%|██████▎   | 63159/100000 [00:04<00:02, 13086.59it/s]
 64%|██████▍   | 64478/100000 [00:04<00:02, 13116.67it/s]
 66%|██████▌   | 65791/100000 [00:05<00:02, 13120.32it/s]
 67%|██████▋   | 67111/100000 [00:05<00:02, 13141.31it/s]
 68%|██████▊   | 68432/100000 [00:05<00:02, 13159.02it/s]
 70%|██████▉   | 69754/100000 [00:05<00:02, 13174.28it/s]70000 / 100000 = 0.7

 71%|███████   | 71072/100000 [00:05<00:02, 13167.33it/s]
 72%|███████▏  | 72391/100000 [00:05<00:02, 13171.79it/s]
 74%|███████▎  | 73713/100000 [00:05<00:01, 13184.39it/s]
 75%|███████▌  | 75035/100000 [00:05<00:01, 13194.51it/s]
 76%|███████▋  | 76355/100000 [00:05<00:01, 13147.03it/s]
 78%|███████▊  | 77673/100000 [00:05<00:01, 13154.66it/s]
 79%|███████▉  | 78990/100000 [00:06<00:01, 13158.68it/s]80000 / 100000 = 0.8

 80%|████████  | 80306/100000 [00:06<00:01, 13158.80it/s]
 82%|████████▏ | 81625/100000 [00:06<00:01, 13165.40it/s]
 83%|████████▎ | 82944/100000 [00:06<00:01, 13170.57it/s]
 84%|████████▍ | 84266/100000 [00:06<00:01, 13182.44it/s]
 86%|████████▌ | 85585/100000 [00:06<00:01, 13178.06it/s]
 87%|████████▋ | 86906/100000 [00:06<00:00, 13185.00it/s]
 88%|████████▊ | 88227/100000 [00:06<00:00, 13190.72it/s]
 90%|████████▉ | 89547/100000 [00:06<00:00, 13188.65it/s]90000 / 100000 = 0.9

 91%|█████████ | 90866/100000 [00:06<00:00, 13153.18it/s]
 92%|█████████▏| 92182/100000 [00:07<00:00, 12821.71it/s]
 93%|█████████▎| 93466/100000 [00:07<00:00, 12622.32it/s]
 95%|█████████▍| 94730/100000 [00:07<00:00, 12507.79it/s]
 96%|█████████▌| 95982/100000 [00:07<00:00, 12420.14it/s]
 97%|█████████▋| 97247/100000 [00:07<00:00, 12486.68it/s]
 99%|█████████▊| 98535/100000 [00:07<00:00, 12598.45it/s]
100%|█████████▉| 99796/100000 [00:07<00:00, 12516.74it/s]
100%|██████████| 100000/100000 [00:07<00:00, 13042.51it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 59.03it/s]
100%|██████████| 10/10 [00:00<00:00, 60.97it/s]
limit: 10        precision:  10.00% avg time: 0.000131s
limit: 100       precision:  16.00% avg time: 0.000116s
limit: 1000      precision:  33.00% avg time: 0.000338s
limit: 10000     precision:  86.00% avg time: 0.002022s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 17.643 seconds)

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