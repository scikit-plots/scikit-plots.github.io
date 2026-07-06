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

  1%|▏         | 1253/100000 [00:00<00:07, 12528.28it/s]
  3%|▎         | 2507/100000 [00:00<00:07, 12529.01it/s]
  4%|▍         | 3766/100000 [00:00<00:07, 12556.00it/s]
  5%|▌         | 5036/100000 [00:00<00:07, 12610.78it/s]
  6%|▋         | 6304/100000 [00:00<00:07, 12632.00it/s]
  8%|▊         | 7572/100000 [00:00<00:07, 12646.12it/s]
  9%|▉         | 8848/100000 [00:00<00:07, 12680.78it/s]10000 / 100000 = 0.1

 10%|█         | 10117/100000 [00:00<00:07, 12683.09it/s]
 11%|█▏        | 11393/100000 [00:00<00:06, 12705.57it/s]
 13%|█▎        | 12664/100000 [00:01<00:06, 12666.31it/s]
 14%|█▍        | 13936/100000 [00:01<00:06, 12682.55it/s]
 15%|█▌        | 15207/100000 [00:01<00:06, 12690.51it/s]
 16%|█▋        | 16477/100000 [00:01<00:06, 12681.96it/s]
 18%|█▊        | 17746/100000 [00:01<00:06, 12680.02it/s]
 19%|█▉        | 19019/100000 [00:01<00:06, 12693.15it/s]20000 / 100000 = 0.2

 20%|██        | 20293/100000 [00:01<00:06, 12704.95it/s]
 22%|██▏       | 21564/100000 [00:01<00:06, 12620.41it/s]
 23%|██▎       | 22835/100000 [00:01<00:06, 12645.51it/s]
 24%|██▍       | 24106/100000 [00:01<00:05, 12662.58it/s]
 25%|██▌       | 25384/100000 [00:02<00:05, 12694.82it/s]
 27%|██▋       | 26654/100000 [00:02<00:05, 12672.06it/s]
 28%|██▊       | 27926/100000 [00:02<00:05, 12685.69it/s]
 29%|██▉       | 29195/100000 [00:02<00:05, 12683.37it/s]30000 / 100000 = 0.3

 30%|███       | 30468/100000 [00:02<00:05, 12695.67it/s]
 32%|███▏      | 31738/100000 [00:02<00:05, 12693.16it/s]
 33%|███▎      | 33012/100000 [00:02<00:05, 12707.10it/s]
 34%|███▍      | 34283/100000 [00:02<00:05, 12705.52it/s]
 36%|███▌      | 35554/100000 [00:02<00:05, 12556.28it/s]
 37%|███▋      | 36825/100000 [00:02<00:05, 12599.28it/s]
 38%|███▊      | 38094/100000 [00:03<00:04, 12624.10it/s]
 39%|███▉      | 39368/100000 [00:03<00:04, 12658.05it/s]40000 / 100000 = 0.4

 41%|████      | 40640/100000 [00:03<00:04, 12675.69it/s]
 42%|████▏     | 41908/100000 [00:03<00:04, 12673.38it/s]
 43%|████▎     | 43181/100000 [00:03<00:04, 12689.95it/s]
 44%|████▍     | 44458/100000 [00:03<00:04, 12711.21it/s]
 46%|████▌     | 45730/100000 [00:03<00:04, 12669.27it/s]
 47%|████▋     | 46999/100000 [00:03<00:04, 12674.78it/s]
 48%|████▊     | 48268/100000 [00:03<00:04, 12678.58it/s]
 50%|████▉     | 49540/100000 [00:03<00:03, 12688.36it/s]50000 / 100000 = 0.5

 51%|█████     | 50813/100000 [00:04<00:03, 12700.31it/s]
 52%|█████▏    | 52084/100000 [00:04<00:03, 12695.16it/s]
 53%|█████▎    | 53354/100000 [00:04<00:03, 12689.20it/s]
 55%|█████▍    | 54624/100000 [00:04<00:03, 12691.55it/s]
 56%|█████▌    | 55896/100000 [00:04<00:03, 12697.44it/s]
 57%|█████▋    | 57166/100000 [00:04<00:03, 12657.85it/s]
 58%|█████▊    | 58432/100000 [00:04<00:03, 12650.78it/s]
 60%|█████▉    | 59698/100000 [00:04<00:03, 12622.31it/s]60000 / 100000 = 0.6

 61%|██████    | 60963/100000 [00:04<00:03, 12627.95it/s]
 62%|██████▏   | 62235/100000 [00:04<00:02, 12652.52it/s]
 64%|██████▎   | 63501/100000 [00:05<00:02, 12651.48it/s]
 65%|██████▍   | 64767/100000 [00:05<00:02, 12653.26it/s]
 66%|██████▌   | 66039/100000 [00:05<00:02, 12672.40it/s]
 67%|██████▋   | 67307/100000 [00:05<00:02, 12668.12it/s]
 69%|██████▊   | 68574/100000 [00:05<00:02, 12661.28it/s]
 70%|██████▉   | 69844/100000 [00:05<00:02, 12672.67it/s]70000 / 100000 = 0.7

 71%|███████   | 71112/100000 [00:05<00:02, 12670.72it/s]
 72%|███████▏  | 72380/100000 [00:05<00:02, 12660.87it/s]
 74%|███████▎  | 73647/100000 [00:05<00:02, 12654.36it/s]
 75%|███████▍  | 74915/100000 [00:05<00:01, 12661.28it/s]
 76%|███████▌  | 76182/100000 [00:06<00:01, 12601.11it/s]
 77%|███████▋  | 77452/100000 [00:06<00:01, 12627.77it/s]
 79%|███████▊  | 78720/100000 [00:06<00:01, 12640.84it/s]
 80%|███████▉  | 79986/100000 [00:06<00:01, 12645.70it/s]80000 / 100000 = 0.8

 81%|████████▏ | 81251/100000 [00:06<00:01, 12636.34it/s]
 83%|████████▎ | 82518/100000 [00:06<00:01, 12645.19it/s]
 84%|████████▍ | 83783/100000 [00:06<00:01, 12640.12it/s]
 85%|████████▌ | 85048/100000 [00:06<00:01, 12639.25it/s]
 86%|████████▋ | 86314/100000 [00:06<00:01, 12643.12it/s]
 88%|████████▊ | 87579/100000 [00:06<00:00, 12639.73it/s]
 89%|████████▉ | 88844/100000 [00:07<00:00, 12640.17it/s]90000 / 100000 = 0.9

 90%|█████████ | 90109/100000 [00:07<00:00, 12561.60it/s]
 91%|█████████▏| 91380/100000 [00:07<00:00, 12604.67it/s]
 93%|█████████▎| 92648/100000 [00:07<00:00, 12625.44it/s]
 94%|█████████▍| 93919/100000 [00:07<00:00, 12648.33it/s]
 95%|█████████▌| 95191/100000 [00:07<00:00, 12666.92it/s]
 96%|█████████▋| 96458/100000 [00:07<00:00, 12666.12it/s]
 98%|█████████▊| 97731/100000 [00:07<00:00, 12682.05it/s]
 99%|█████████▉| 99000/100000 [00:07<00:00, 11435.26it/s]
100%|██████████| 100000/100000 [00:07<00:00, 12600.33it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 59.38it/s]
100%|██████████| 10/10 [00:00<00:00, 61.31it/s]
limit: 10        precision:  10.00% avg time: 0.000129s
limit: 100       precision:  16.00% avg time: 0.000121s
limit: 1000      precision:  33.00% avg time: 0.000338s
limit: 10000     precision:  86.00% avg time: 0.002016s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 13.177 seconds)

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