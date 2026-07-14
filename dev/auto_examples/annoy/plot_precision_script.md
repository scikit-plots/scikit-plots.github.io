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

  1%|▏         | 1315/100000 [00:00<00:07, 13141.43it/s]
  3%|▎         | 2630/100000 [00:00<00:07, 13144.38it/s]
  4%|▍         | 3945/100000 [00:00<00:07, 13101.67it/s]
  5%|▌         | 5261/100000 [00:00<00:07, 13122.60it/s]
  7%|▋         | 6574/100000 [00:00<00:07, 13117.29it/s]
  8%|▊         | 7887/100000 [00:00<00:07, 13120.38it/s]
  9%|▉         | 9205/100000 [00:00<00:06, 13138.90it/s]10000 / 100000 = 0.1

 11%|█         | 10519/100000 [00:00<00:06, 13076.83it/s]
 12%|█▏        | 11834/100000 [00:00<00:06, 13098.42it/s]
 13%|█▎        | 13144/100000 [00:01<00:06, 13097.05it/s]
 14%|█▍        | 14462/100000 [00:01<00:06, 13119.79it/s]
 16%|█▌        | 15775/100000 [00:01<00:06, 13111.59it/s]
 17%|█▋        | 17089/100000 [00:01<00:06, 13117.49it/s]
 18%|█▊        | 18408/100000 [00:01<00:06, 13136.61it/s]
 20%|█▉        | 19725/100000 [00:01<00:06, 13146.03it/s]20000 / 100000 = 0.2

 21%|██        | 21040/100000 [00:01<00:06, 13046.62it/s]
 22%|██▏       | 22356/100000 [00:01<00:05, 13077.71it/s]
 24%|██▎       | 23672/100000 [00:01<00:05, 13099.63it/s]
 25%|██▍       | 24986/100000 [00:01<00:05, 13110.73it/s]
 26%|██▋       | 26299/100000 [00:02<00:05, 13115.88it/s]
 28%|██▊       | 27614/100000 [00:02<00:05, 13123.15it/s]
 29%|██▉       | 28929/100000 [00:02<00:05, 13128.97it/s]30000 / 100000 = 0.3

 30%|███       | 30242/100000 [00:02<00:05, 13120.94it/s]
 32%|███▏      | 31560/100000 [00:02<00:05, 13137.16it/s]
 33%|███▎      | 32877/100000 [00:02<00:05, 13146.65it/s]
 34%|███▍      | 34195/100000 [00:02<00:05, 13153.55it/s]
 36%|███▌      | 35511/100000 [00:02<00:04, 13002.14it/s]
 37%|███▋      | 36822/100000 [00:02<00:04, 13033.96it/s]
 38%|███▊      | 38126/100000 [00:02<00:04, 13006.54it/s]
 39%|███▉      | 39436/100000 [00:03<00:04, 13033.05it/s]40000 / 100000 = 0.4

 41%|████      | 40750/100000 [00:03<00:04, 13062.60it/s]
 42%|████▏     | 42068/100000 [00:03<00:04, 13096.67it/s]
 43%|████▎     | 43384/100000 [00:03<00:04, 13113.61it/s]
 45%|████▍     | 44701/100000 [00:03<00:04, 13129.65it/s]
 46%|████▌     | 46015/100000 [00:03<00:04, 13101.92it/s]
 47%|████▋     | 47332/100000 [00:03<00:04, 13120.49it/s]
 49%|████▊     | 48645/100000 [00:03<00:03, 13116.51it/s]
 50%|████▉     | 49961/100000 [00:03<00:03, 13127.40it/s]50000 / 100000 = 0.5

 51%|█████▏    | 51276/100000 [00:03<00:03, 13131.78it/s]
 53%|█████▎    | 52593/100000 [00:04<00:03, 13142.51it/s]
 54%|█████▍    | 53908/100000 [00:04<00:03, 13028.15it/s]
 55%|█████▌    | 55225/100000 [00:04<00:03, 13069.70it/s]
 57%|█████▋    | 56543/100000 [00:04<00:03, 13099.71it/s]
 58%|█████▊    | 57859/100000 [00:04<00:03, 13116.65it/s]
 59%|█████▉    | 59171/100000 [00:04<00:03, 12310.25it/s]60000 / 100000 = 0.6

 60%|██████    | 60482/100000 [00:04<00:03, 12537.68it/s]
 62%|██████▏   | 61802/100000 [00:04<00:03, 12729.21it/s]
 63%|██████▎   | 63123/100000 [00:04<00:02, 12869.47it/s]
 64%|██████▍   | 64442/100000 [00:04<00:02, 12962.57it/s]
 66%|██████▌   | 65760/100000 [00:05<00:02, 13024.34it/s]
 67%|██████▋   | 67080/100000 [00:05<00:02, 13075.44it/s]
 68%|██████▊   | 68396/100000 [00:05<00:02, 13100.50it/s]
 70%|██████▉   | 69713/100000 [00:05<00:02, 13120.51it/s]70000 / 100000 = 0.7

 71%|███████   | 71031/100000 [00:05<00:02, 13135.65it/s]
 72%|███████▏  | 72350/100000 [00:05<00:02, 13150.56it/s]
 74%|███████▎  | 73666/100000 [00:05<00:02, 13148.25it/s]
 75%|███████▍  | 74984/100000 [00:05<00:01, 13155.61it/s]
 76%|███████▋  | 76300/100000 [00:05<00:01, 12928.87it/s]
 78%|███████▊  | 77615/100000 [00:05<00:01, 12992.94it/s]
 79%|███████▉  | 78932/100000 [00:06<00:01, 13043.00it/s]80000 / 100000 = 0.8

 80%|████████  | 80248/100000 [00:06<00:01, 13075.52it/s]
 82%|████████▏ | 81565/100000 [00:06<00:01, 13101.59it/s]
 83%|████████▎ | 82883/100000 [00:06<00:01, 13122.20it/s]
 84%|████████▍ | 84198/100000 [00:06<00:01, 13128.17it/s]
 86%|████████▌ | 85515/100000 [00:06<00:01, 13138.37it/s]
 87%|████████▋ | 86829/100000 [00:06<00:01, 13127.41it/s]
 88%|████████▊ | 88147/100000 [00:06<00:00, 13142.12it/s]
 89%|████████▉ | 89462/100000 [00:06<00:00, 13143.99it/s]90000 / 100000 = 0.9

 91%|█████████ | 90777/100000 [00:06<00:00, 13142.01it/s]
 92%|█████████▏| 92095/100000 [00:07<00:00, 13150.78it/s]
 93%|█████████▎| 93411/100000 [00:07<00:00, 13152.24it/s]
 95%|█████████▍| 94727/100000 [00:07<00:00, 13152.56it/s]
 96%|█████████▌| 96043/100000 [00:07<00:00, 13146.45it/s]
 97%|█████████▋| 97358/100000 [00:07<00:00, 13143.92it/s]
 99%|█████████▊| 98673/100000 [00:07<00:00, 13139.75it/s]
100%|█████████▉| 99987/100000 [00:07<00:00, 12842.45it/s]
100%|██████████| 100000/100000 [00:07<00:00, 13064.14it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 57.30it/s]
100%|██████████| 10/10 [00:00<00:00, 58.81it/s]
limit: 10        precision:  10.00% avg time: 0.000140s
limit: 100       precision:  16.00% avg time: 0.000120s
limit: 1000      precision:  33.00% avg time: 0.000359s
limit: 10000     precision:  86.00% avg time: 0.002133s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 22.061 seconds)

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