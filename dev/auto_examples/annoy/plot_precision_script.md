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

  2%|▏         | 1677/100000 [00:00<00:05, 16763.38it/s]
  3%|▎         | 3354/100000 [00:00<00:05, 16753.52it/s]
  5%|▌         | 5042/100000 [00:00<00:05, 16807.19it/s]
  7%|▋         | 6726/100000 [00:00<00:05, 16817.93it/s]
  8%|▊         | 8408/100000 [00:00<00:05, 16802.12it/s]10000 / 100000 = 0.1

 10%|█         | 10089/100000 [00:00<00:05, 16781.36it/s]
 12%|█▏        | 11784/100000 [00:00<00:05, 16835.49it/s]
 13%|█▎        | 13468/100000 [00:00<00:05, 16787.90it/s]
 15%|█▌        | 15167/100000 [00:00<00:05, 16848.67it/s]
 17%|█▋        | 16852/100000 [00:01<00:04, 16772.45it/s]
 19%|█▊        | 18543/100000 [00:01<00:04, 16811.88it/s]20000 / 100000 = 0.2

 20%|██        | 20243/100000 [00:01<00:04, 16866.51it/s]
 22%|██▏       | 21931/100000 [00:01<00:04, 16870.50it/s]
 24%|██▎       | 23630/100000 [00:01<00:04, 16903.56it/s]
 25%|██▌       | 25328/100000 [00:01<00:04, 16923.83it/s]
 27%|██▋       | 27021/100000 [00:01<00:04, 16432.42it/s]
 29%|██▊       | 28710/100000 [00:01<00:04, 16565.40it/s]30000 / 100000 = 0.3

 30%|███       | 30399/100000 [00:01<00:04, 16660.76it/s]
 32%|███▏      | 32090/100000 [00:01<00:04, 16733.86it/s]
 34%|███▍      | 33777/100000 [00:02<00:03, 16771.65it/s]
 35%|███▌      | 35456/100000 [00:02<00:03, 16677.72it/s]
 37%|███▋      | 37150/100000 [00:02<00:03, 16755.12it/s]
 39%|███▉      | 38843/100000 [00:02<00:03, 16804.40it/s]40000 / 100000 = 0.4

 41%|████      | 40525/100000 [00:02<00:03, 16808.89it/s]
 42%|████▏     | 42214/100000 [00:02<00:03, 16832.41it/s]
 44%|████▍     | 43911/100000 [00:02<00:03, 16871.51it/s]
 46%|████▌     | 45599/100000 [00:02<00:03, 16721.88it/s]
 47%|████▋     | 47292/100000 [00:02<00:03, 16781.37it/s]
 49%|████▉     | 48989/100000 [00:02<00:03, 16836.14it/s]50000 / 100000 = 0.5

 51%|█████     | 50679/100000 [00:03<00:02, 16853.10it/s]
 52%|█████▏    | 52375/100000 [00:03<00:02, 16883.01it/s]
 54%|█████▍    | 54064/100000 [00:03<00:02, 16882.12it/s]
 56%|█████▌    | 55759/100000 [00:03<00:02, 16900.67it/s]
 57%|█████▋    | 57450/100000 [00:03<00:02, 16877.68it/s]
 59%|█████▉    | 59138/100000 [00:03<00:02, 16675.14it/s]60000 / 100000 = 0.6

 61%|██████    | 60827/100000 [00:03<00:02, 16738.51it/s]
 63%|██████▎   | 62522/100000 [00:03<00:02, 16801.06it/s]
 64%|██████▍   | 64213/100000 [00:03<00:02, 16832.15it/s]
 66%|██████▌   | 65908/100000 [00:03<00:02, 16866.03it/s]
 68%|██████▊   | 67600/100000 [00:04<00:01, 16880.04it/s]
 69%|██████▉   | 69296/100000 [00:04<00:01, 16902.72it/s]70000 / 100000 = 0.7

 71%|███████   | 70988/100000 [00:04<00:01, 16904.98it/s]
 73%|███████▎  | 72679/100000 [00:04<00:01, 16899.51it/s]
 74%|███████▍  | 74372/100000 [00:04<00:01, 16906.13it/s]
 76%|███████▌  | 76068/100000 [00:04<00:01, 16920.94it/s]
 78%|███████▊  | 77761/100000 [00:04<00:01, 16634.58it/s]
 79%|███████▉  | 79454/100000 [00:04<00:01, 16721.26it/s]80000 / 100000 = 0.8

 81%|████████  | 81147/100000 [00:04<00:01, 16781.64it/s]
 83%|████████▎ | 82837/100000 [00:04<00:01, 16814.85it/s]
 85%|████████▍ | 84533/100000 [00:05<00:00, 16857.73it/s]
 86%|████████▌ | 86226/100000 [00:05<00:00, 16877.67it/s]
 88%|████████▊ | 87924/100000 [00:05<00:00, 16906.20it/s]
 90%|████████▉ | 89622/100000 [00:05<00:00, 16928.12it/s]90000 / 100000 = 0.9

 91%|█████████▏| 91315/100000 [00:05<00:00, 16927.41it/s]
 93%|█████████▎| 93008/100000 [00:05<00:00, 16922.05it/s]
 95%|█████████▍| 94708/100000 [00:05<00:00, 16944.67it/s]
 96%|█████████▋| 96403/100000 [00:05<00:00, 16941.89it/s]
 98%|█████████▊| 98098/100000 [00:05<00:00, 16928.41it/s]
100%|█████████▉| 99791/100000 [00:05<00:00, 16555.69it/s]
100%|██████████| 100000/100000 [00:05<00:00, 16804.45it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 57.70it/s]
100%|██████████| 10/10 [00:00<00:00, 59.23it/s]
limit: 10        precision:  10.00% avg time: 0.000142s
limit: 100       precision:  16.00% avg time: 0.000125s
limit: 1000      precision:  33.00% avg time: 0.000364s
limit: 10000     precision:  86.00% avg time: 0.002079s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 59.051 seconds)

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