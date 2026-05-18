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

  2%|▏         | 1663/100000 [00:00<00:05, 16625.06it/s]
  3%|▎         | 3326/100000 [00:00<00:05, 16550.16it/s]
  5%|▌         | 5013/100000 [00:00<00:05, 16694.71it/s]
  7%|▋         | 6683/100000 [00:00<00:05, 16661.63it/s]
  8%|▊         | 8354/100000 [00:00<00:05, 16677.24it/s]10000 / 100000 = 0.1

 10%|█         | 10022/100000 [00:00<00:05, 16673.47it/s]
 12%|█▏        | 11690/100000 [00:00<00:05, 16638.69it/s]
 13%|█▎        | 13354/100000 [00:00<00:05, 16565.55it/s]
 15%|█▌        | 15016/100000 [00:00<00:05, 16581.47it/s]
 17%|█▋        | 16675/100000 [00:01<00:05, 16475.87it/s]
 18%|█▊        | 18332/100000 [00:01<00:04, 16504.13it/s]
 20%|█▉        | 19985/100000 [00:01<00:04, 16509.95it/s]20000 / 100000 = 0.2

 22%|██▏       | 21637/100000 [00:01<00:04, 16419.69it/s]
 23%|██▎       | 23299/100000 [00:01<00:04, 16478.89it/s]
 25%|██▍       | 24960/100000 [00:01<00:04, 16516.51it/s]
 27%|██▋       | 26622/100000 [00:01<00:04, 16547.13it/s]
 28%|██▊       | 28277/100000 [00:01<00:04, 16084.46it/s]
 30%|██▉       | 29942/100000 [00:01<00:04, 16248.24it/s]30000 / 100000 = 0.3

 32%|███▏      | 31601/100000 [00:01<00:04, 16346.65it/s]
 33%|███▎      | 33261/100000 [00:02<00:04, 16420.67it/s]
 35%|███▍      | 34905/100000 [00:02<00:03, 16332.16it/s]
 37%|███▋      | 36561/100000 [00:02<00:03, 16398.41it/s]
 38%|███▊      | 38240/100000 [00:02<00:03, 16512.67it/s]
 40%|███▉      | 39927/100000 [00:02<00:03, 16618.09it/s]40000 / 100000 = 0.4

 42%|████▏     | 41611/100000 [00:02<00:03, 16683.79it/s]
 43%|████▎     | 43280/100000 [00:02<00:03, 16679.67it/s]
 45%|████▍     | 44949/100000 [00:02<00:03, 16667.87it/s]
 47%|████▋     | 46616/100000 [00:02<00:03, 16492.93it/s]
 48%|████▊     | 48284/100000 [00:02<00:03, 16546.72it/s]
 50%|████▉     | 49949/100000 [00:03<00:03, 16576.42it/s]50000 / 100000 = 0.5

 52%|█████▏    | 51607/100000 [00:03<00:02, 16570.65it/s]
 53%|█████▎    | 53266/100000 [00:03<00:02, 16576.03it/s]
 55%|█████▍    | 54924/100000 [00:03<00:02, 16572.04it/s]
 57%|█████▋    | 56582/100000 [00:03<00:02, 16568.42it/s]
 58%|█████▊    | 58243/100000 [00:03<00:02, 16580.20it/s]
 60%|█████▉    | 59902/100000 [00:03<00:02, 16362.56it/s]60000 / 100000 = 0.6

 62%|██████▏   | 61585/100000 [00:03<00:02, 16500.17it/s]
 63%|██████▎   | 63247/100000 [00:03<00:02, 16533.54it/s]
 65%|██████▍   | 64913/100000 [00:03<00:02, 16570.68it/s]
 67%|██████▋   | 66607/100000 [00:04<00:02, 16679.59it/s]
 68%|██████▊   | 68292/100000 [00:04<00:01, 16727.79it/s]
 70%|██████▉   | 69965/100000 [00:04<00:01, 16725.18it/s]70000 / 100000 = 0.7

 72%|███████▏  | 71638/100000 [00:04<00:01, 16700.95it/s]
 73%|███████▎  | 73309/100000 [00:04<00:01, 16693.27it/s]
 75%|███████▍  | 74979/100000 [00:04<00:01, 16681.98it/s]
 77%|███████▋  | 76648/100000 [00:04<00:01, 16367.72it/s]
 78%|███████▊  | 78309/100000 [00:04<00:01, 16437.53it/s]
 80%|███████▉  | 79985/100000 [00:04<00:01, 16530.69it/s]80000 / 100000 = 0.8

 82%|████████▏ | 81653/100000 [00:04<00:01, 16574.26it/s]
 83%|████████▎ | 83314/100000 [00:05<00:01, 16581.46it/s]
 85%|████████▍ | 84992/100000 [00:05<00:00, 16637.97it/s]
 87%|████████▋ | 86657/100000 [00:05<00:00, 16618.55it/s]
 88%|████████▊ | 88320/100000 [00:05<00:00, 16614.02it/s]
 90%|████████▉ | 89982/100000 [00:05<00:00, 16605.75it/s]90000 / 100000 = 0.9

 92%|█████████▏| 91643/100000 [00:05<00:00, 16591.71it/s]
 93%|█████████▎| 93303/100000 [00:05<00:00, 16576.29it/s]
 95%|█████████▍| 94973/100000 [00:05<00:00, 16610.85it/s]
 97%|█████████▋| 96643/100000 [00:05<00:00, 16636.51it/s]
 98%|█████████▊| 98308/100000 [00:05<00:00, 16639.14it/s]
100%|█████████▉| 99972/100000 [00:06<00:00, 16269.01it/s]
100%|██████████| 100000/100000 [00:06<00:00, 16536.00it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 57.48it/s]
100%|██████████| 10/10 [00:00<00:00, 59.22it/s]
limit: 10        precision:  10.00% avg time: 0.000125s
limit: 100       precision:  16.00% avg time: 0.000134s
limit: 1000      precision:  33.00% avg time: 0.000343s
limit: 10000     precision:  86.00% avg time: 0.002053s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (1 minutes 48.698 seconds)

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