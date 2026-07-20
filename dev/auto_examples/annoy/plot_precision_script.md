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

  1%|▏         | 1264/100000 [00:00<00:07, 12635.46it/s]
  3%|▎         | 2528/100000 [00:00<00:07, 12599.45it/s]
  4%|▍         | 3788/100000 [00:00<00:07, 12570.54it/s]
  5%|▌         | 5052/100000 [00:00<00:07, 12596.63it/s]
  6%|▋         | 6321/100000 [00:00<00:07, 12629.39it/s]
  8%|▊         | 7589/100000 [00:00<00:07, 12644.91it/s]
  9%|▉         | 8854/100000 [00:00<00:07, 12630.54it/s]10000 / 100000 = 0.1

 10%|█         | 10118/100000 [00:00<00:07, 12631.17it/s]
 11%|█▏        | 11382/100000 [00:00<00:07, 12633.48it/s]
 13%|█▎        | 12646/100000 [00:01<00:06, 12575.68it/s]
 14%|█▍        | 13916/100000 [00:01<00:06, 12611.23it/s]
 15%|█▌        | 15178/100000 [00:01<00:06, 12553.32it/s]
 16%|█▋        | 16434/100000 [00:01<00:06, 12548.65it/s]
 18%|█▊        | 17689/100000 [00:01<00:06, 12548.82it/s]
 19%|█▉        | 18944/100000 [00:01<00:06, 12521.22it/s]20000 / 100000 = 0.2

 20%|██        | 20199/100000 [00:01<00:06, 12526.94it/s]
 21%|██▏       | 21452/100000 [00:01<00:06, 12490.71it/s]
 23%|██▎       | 22715/100000 [00:01<00:06, 12530.89it/s]
 24%|██▍       | 23969/100000 [00:01<00:06, 12523.65it/s]
 25%|██▌       | 25230/100000 [00:02<00:05, 12546.92it/s]
 26%|██▋       | 26496/100000 [00:02<00:05, 12578.58it/s]
 28%|██▊       | 27754/100000 [00:02<00:05, 12558.27it/s]
 29%|██▉       | 29010/100000 [00:02<00:05, 12547.70it/s]30000 / 100000 = 0.3

 30%|███       | 30265/100000 [00:02<00:05, 12544.74it/s]
 32%|███▏      | 31520/100000 [00:02<00:05, 12537.45it/s]
 33%|███▎      | 32777/100000 [00:02<00:05, 12545.93it/s]
 34%|███▍      | 34032/100000 [00:02<00:05, 12311.56it/s]
 35%|███▌      | 35265/100000 [00:02<00:05, 12286.43it/s]
 37%|███▋      | 36523/100000 [00:02<00:05, 12370.78it/s]
 38%|███▊      | 37778/100000 [00:03<00:05, 12423.09it/s]
 39%|███▉      | 39028/100000 [00:03<00:04, 12443.78it/s]40000 / 100000 = 0.4

 40%|████      | 40273/100000 [00:03<00:04, 12362.88it/s]
 42%|████▏     | 41510/100000 [00:03<00:04, 12098.02it/s]
 43%|████▎     | 42722/100000 [00:03<00:04, 11972.39it/s]
 44%|████▍     | 43949/100000 [00:03<00:04, 12056.94it/s]
 45%|████▌     | 45188/100000 [00:03<00:04, 12155.16it/s]
 46%|████▋     | 46438/100000 [00:03<00:04, 12257.14it/s]
 48%|████▊     | 47686/100000 [00:03<00:04, 12321.31it/s]
 49%|████▉     | 48938/100000 [00:03<00:04, 12379.11it/s]50000 / 100000 = 0.5

 50%|█████     | 50199/100000 [00:04<00:04, 12445.44it/s]
 51%|█████▏    | 51456/100000 [00:04<00:03, 12481.21it/s]
 53%|█████▎    | 52717/100000 [00:04<00:03, 12517.39it/s]
 54%|█████▍    | 53976/100000 [00:04<00:03, 12538.57it/s]
 55%|█████▌    | 55232/100000 [00:04<00:03, 12544.03it/s]
 56%|█████▋    | 56487/100000 [00:04<00:03, 12506.15it/s]
 58%|█████▊    | 57738/100000 [00:04<00:03, 12498.70it/s]
 59%|█████▉    | 58988/100000 [00:04<00:03, 12481.01it/s]60000 / 100000 = 0.6

 60%|██████    | 60243/100000 [00:04<00:03, 12498.70it/s]
 62%|██████▏   | 61507/100000 [00:04<00:03, 12540.27it/s]
 63%|██████▎   | 62772/100000 [00:05<00:02, 12572.58it/s]
 64%|██████▍   | 64046/100000 [00:05<00:02, 12621.51it/s]
 65%|██████▌   | 65310/100000 [00:05<00:02, 12626.13it/s]
 67%|██████▋   | 66573/100000 [00:05<00:02, 12610.00it/s]
 68%|██████▊   | 67835/100000 [00:05<00:02, 12599.81it/s]
 69%|██████▉   | 69096/100000 [00:05<00:02, 12600.20it/s]70000 / 100000 = 0.7

 70%|███████   | 70357/100000 [00:05<00:02, 12592.45it/s]
 72%|███████▏  | 71617/100000 [00:05<00:02, 12591.31it/s]
 73%|███████▎  | 72877/100000 [00:05<00:02, 12583.14it/s]
 74%|███████▍  | 74139/100000 [00:05<00:02, 12591.98it/s]
 75%|███████▌  | 75404/100000 [00:06<00:01, 12606.47it/s]
 77%|███████▋  | 76665/100000 [00:06<00:01, 12546.62it/s]
 78%|███████▊  | 77920/100000 [00:06<00:01, 12527.79it/s]
 79%|███████▉  | 79176/100000 [00:06<00:01, 12537.07it/s]80000 / 100000 = 0.8

 80%|████████  | 80434/100000 [00:06<00:01, 12547.85it/s]
 82%|████████▏ | 81692/100000 [00:06<00:01, 12555.07it/s]
 83%|████████▎ | 82955/100000 [00:06<00:01, 12577.37it/s]
 84%|████████▍ | 84213/100000 [00:06<00:01, 12565.26it/s]
 85%|████████▌ | 85470/100000 [00:06<00:01, 12553.37it/s]
 87%|████████▋ | 86727/100000 [00:06<00:01, 12558.25it/s]
 88%|████████▊ | 87987/100000 [00:07<00:00, 12568.98it/s]
 89%|████████▉ | 89247/100000 [00:07<00:00, 12576.74it/s]90000 / 100000 = 0.9

 91%|█████████ | 90505/100000 [00:07<00:00, 12548.82it/s]
 92%|█████████▏| 91766/100000 [00:07<00:00, 12565.69it/s]
 93%|█████████▎| 93029/100000 [00:07<00:00, 12582.53it/s]
 94%|█████████▍| 94288/100000 [00:07<00:00, 12581.97it/s]
 96%|█████████▌| 95554/100000 [00:07<00:00, 12603.45it/s]
 97%|█████████▋| 96815/100000 [00:07<00:00, 12593.35it/s]
 98%|█████████▊| 98077/100000 [00:07<00:00, 12599.31it/s]
 99%|█████████▉| 99337/100000 [00:07<00:00, 12533.11it/s]
100%|██████████| 100000/100000 [00:07<00:00, 12511.90it/s]

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
/home/circleci/repo/galleries/examples/annoy/plot_precision_script.py:110: UserWarning: seed=0 resets to Annoy's default seed
  q.set_seed(0)

  0%|          | 0/10 [00:00<?, ?it/s]limit: 10        precision:  10.00% avg time: 0.000111s
limit: 100       precision:  10.00% avg time: 0.000136s
limit: 1000      precision:  20.00% avg time: 0.000322s
limit: 10000     precision:  80.00% avg time: 0.002099s
limit: 10        precision:  10.00% avg time: 0.000116s
limit: 100       precision:  10.00% avg time: 0.000158s
limit: 1000      precision:  20.00% avg time: 0.000362s
limit: 10000     precision:  85.00% avg time: 0.002066s
limit: 10        precision:  10.00% avg time: 0.000123s
limit: 100       precision:  10.00% avg time: 0.000143s
limit: 1000      precision:  26.67% avg time: 0.000367s
limit: 10000     precision:  90.00% avg time: 0.002067s
limit: 10        precision:  10.00% avg time: 0.000136s
limit: 100       precision:  10.00% avg time: 0.000157s
limit: 1000      precision:  27.50% avg time: 0.000367s
limit: 10000     precision:  80.00% avg time: 0.002050s
limit: 10        precision:  10.00% avg time: 0.000127s
limit: 100       precision:  10.00% avg time: 0.000150s
limit: 1000      precision:  26.00% avg time: 0.000361s
limit: 10000     precision:  84.00% avg time: 0.002033s
limit: 10        precision:  10.00% avg time: 0.000125s
limit: 100       precision:  11.67% avg time: 0.000144s
limit: 1000      precision:  26.67% avg time: 0.000354s
limit: 10000     precision:  81.67% avg time: 0.002012s

 60%|██████    | 6/10 [00:00<00:00, 56.23it/s]limit: 10        precision:  10.00% avg time: 0.000132s
limit: 100       precision:  17.14% avg time: 0.000153s
limit: 1000      precision:  34.29% avg time: 0.000380s
limit: 10000     precision:  84.29% avg time: 0.002044s
limit: 10        precision:  10.00% avg time: 0.000133s
limit: 100       precision:  17.50% avg time: 0.000153s
limit: 1000      precision:  33.75% avg time: 0.000377s
limit: 10000     precision:  85.00% avg time: 0.002042s
limit: 10        precision:  10.00% avg time: 0.000134s
limit: 100       precision:  16.67% avg time: 0.000151s
limit: 1000      precision:  34.44% avg time: 0.000370s
limit: 10000     precision:  85.56% avg time: 0.002024s
limit: 10        precision:  10.00% avg time: 0.000136s
limit: 100       precision:  16.00% avg time: 0.000152s
limit: 1000      precision:  33.00% avg time: 0.000367s
limit: 10000     precision:  86.00% avg time: 0.002027s

100%|██████████| 10/10 [00:00<00:00, 56.53it/s]

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 9.321 seconds)

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