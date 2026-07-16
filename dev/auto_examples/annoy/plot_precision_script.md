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

  1%|▏         | 1324/100000 [00:00<00:07, 13235.47it/s]
  3%|▎         | 2648/100000 [00:00<00:07, 13192.45it/s]
  4%|▍         | 3968/100000 [00:00<00:07, 13189.17it/s]
  5%|▌         | 5288/100000 [00:00<00:07, 13192.01it/s]
  7%|▋         | 6608/100000 [00:00<00:07, 13190.10it/s]
  8%|▊         | 7928/100000 [00:00<00:06, 13189.79it/s]
  9%|▉         | 9251/100000 [00:00<00:06, 13200.81it/s]10000 / 100000 = 0.1

 11%|█         | 10572/100000 [00:00<00:06, 13167.21it/s]
 12%|█▏        | 11890/100000 [00:00<00:06, 13170.18it/s]
 13%|█▎        | 13208/100000 [00:01<00:06, 13169.84it/s]
 15%|█▍        | 14525/100000 [00:01<00:06, 13141.82it/s]
 16%|█▌        | 15840/100000 [00:01<00:06, 13089.00it/s]
 17%|█▋        | 17163/100000 [00:01<00:06, 13128.78it/s]
 18%|█▊        | 18485/100000 [00:01<00:06, 13153.51it/s]
 20%|█▉        | 19809/100000 [00:01<00:06, 13179.26it/s]20000 / 100000 = 0.2

 21%|██        | 21127/100000 [00:01<00:05, 13169.66it/s]
 22%|██▏       | 22448/100000 [00:01<00:05, 13178.87it/s]
 24%|██▍       | 23766/100000 [00:01<00:05, 13158.31it/s]
 25%|██▌       | 25089/100000 [00:01<00:05, 13178.95it/s]
 26%|██▋       | 26416/100000 [00:02<00:05, 13205.21it/s]
 28%|██▊       | 27737/100000 [00:02<00:05, 13096.31it/s]
 29%|██▉       | 29060/100000 [00:02<00:05, 13135.46it/s]30000 / 100000 = 0.3

 30%|███       | 30378/100000 [00:02<00:05, 13146.68it/s]
 32%|███▏      | 31706/100000 [00:02<00:05, 13184.62it/s]
 33%|███▎      | 33032/100000 [00:02<00:05, 13204.71it/s]
 34%|███▍      | 34357/100000 [00:02<00:04, 13217.64it/s]
 36%|███▌      | 35679/100000 [00:02<00:04, 13193.80it/s]
 37%|███▋      | 36999/100000 [00:02<00:04, 13190.05it/s]
 38%|███▊      | 38319/100000 [00:02<00:04, 13185.12it/s]
 40%|███▉      | 39644/100000 [00:03<00:04, 13203.97it/s]40000 / 100000 = 0.4

 41%|████      | 40967/100000 [00:03<00:04, 13211.27it/s]
 42%|████▏     | 42293/100000 [00:03<00:04, 13224.35it/s]
 44%|████▎     | 43616/100000 [00:03<00:04, 13217.43it/s]
 45%|████▍     | 44938/100000 [00:03<00:04, 13206.54it/s]
 46%|████▋     | 46259/100000 [00:03<00:04, 13183.70it/s]
 48%|████▊     | 47582/100000 [00:03<00:03, 13194.19it/s]
 49%|████▉     | 48902/100000 [00:03<00:03, 13183.43it/s]50000 / 100000 = 0.5

 50%|█████     | 50227/100000 [00:03<00:03, 13201.64it/s]
 52%|█████▏    | 51552/100000 [00:03<00:03, 13213.53it/s]
 53%|█████▎    | 52874/100000 [00:04<00:03, 13203.94it/s]
 54%|█████▍    | 54195/100000 [00:04<00:03, 13204.73it/s]
 56%|█████▌    | 55516/100000 [00:04<00:03, 13199.95it/s]
 57%|█████▋    | 56843/100000 [00:04<00:03, 13219.58it/s]
 58%|█████▊    | 58165/100000 [00:04<00:03, 13214.74it/s]
 59%|█████▉    | 59487/100000 [00:04<00:03, 13173.23it/s]60000 / 100000 = 0.6

 61%|██████    | 60805/100000 [00:04<00:02, 13173.57it/s]
 62%|██████▏   | 62125/100000 [00:04<00:02, 13178.80it/s]
 63%|██████▎   | 63443/100000 [00:04<00:02, 13170.21it/s]
 65%|██████▍   | 64765/100000 [00:04<00:02, 13183.85it/s]
 66%|██████▌   | 66087/100000 [00:05<00:02, 13193.81it/s]
 67%|██████▋   | 67413/100000 [00:05<00:02, 13213.34it/s]
 69%|██████▊   | 68735/100000 [00:05<00:02, 13189.59it/s]70000 / 100000 = 0.7

 70%|███████   | 70054/100000 [00:05<00:02, 13114.92it/s]
 71%|███████▏  | 71378/100000 [00:05<00:02, 13150.67it/s]
 73%|███████▎  | 72703/100000 [00:05<00:02, 13178.13it/s]
 74%|███████▍  | 74024/100000 [00:05<00:01, 13187.08it/s]
 75%|███████▌  | 75345/100000 [00:05<00:01, 13190.97it/s]
 77%|███████▋  | 76665/100000 [00:05<00:01, 12917.74it/s]
 78%|███████▊  | 77986/100000 [00:05<00:01, 13002.92it/s]
 79%|███████▉  | 79310/100000 [00:06<00:01, 13071.50it/s]80000 / 100000 = 0.8

 81%|████████  | 80635/100000 [00:06<00:01, 13123.35it/s]
 82%|████████▏ | 81960/100000 [00:06<00:01, 13158.20it/s]
 83%|████████▎ | 83284/100000 [00:06<00:01, 13180.56it/s]
 85%|████████▍ | 84605/100000 [00:06<00:01, 13188.99it/s]
 86%|████████▌ | 85929/100000 [00:06<00:01, 13203.60it/s]
 87%|████████▋ | 87253/100000 [00:06<00:00, 13211.64it/s]
 89%|████████▊ | 88575/100000 [00:06<00:00, 13201.58it/s]
 90%|████████▉ | 89896/100000 [00:06<00:00, 13202.41it/s]90000 / 100000 = 0.9

 91%|█████████ | 91217/100000 [00:06<00:00, 13201.23it/s]
 93%|█████████▎| 92540/100000 [00:07<00:00, 13207.31it/s]
 94%|█████████▍| 93866/100000 [00:07<00:00, 13220.25it/s]
 95%|█████████▌| 95189/100000 [00:07<00:00, 13221.84it/s]
 97%|█████████▋| 96513/100000 [00:07<00:00, 13225.81it/s]
 98%|█████████▊| 97836/100000 [00:07<00:00, 13218.82it/s]
 99%|█████████▉| 99158/100000 [00:07<00:00, 11878.10it/s]
100%|██████████| 100000/100000 [00:07<00:00, 13113.99it/s]

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

  0%|          | 0/10 [00:00<?, ?it/s]limit: 10        precision:  10.00% avg time: 0.000114s
limit: 100       precision:  10.00% avg time: 0.000154s
limit: 1000      precision:  20.00% avg time: 0.000359s
limit: 10000     precision:  80.00% avg time: 0.002056s
limit: 10        precision:  10.00% avg time: 0.000119s
limit: 100       precision:  10.00% avg time: 0.000167s
limit: 1000      precision:  20.00% avg time: 0.000379s
limit: 10000     precision:  85.00% avg time: 0.002065s
limit: 10        precision:  10.00% avg time: 0.000132s
limit: 100       precision:  10.00% avg time: 0.000157s
limit: 1000      precision:  26.67% avg time: 0.000391s
limit: 10000     precision:  90.00% avg time: 0.002063s
limit: 10        precision:  10.00% avg time: 0.000136s
limit: 100       precision:  10.00% avg time: 0.000148s
limit: 1000      precision:  27.50% avg time: 0.000374s
limit: 10000     precision:  80.00% avg time: 0.002040s
limit: 10        precision:  10.00% avg time: 0.000131s
limit: 100       precision:  10.00% avg time: 0.000147s
limit: 1000      precision:  26.00% avg time: 0.000379s
limit: 10000     precision:  84.00% avg time: 0.002062s
limit: 10        precision:  10.00% avg time: 0.000130s
limit: 100       precision:  11.67% avg time: 0.000141s
limit: 1000      precision:  26.67% avg time: 0.000376s
limit: 10000     precision:  81.67% avg time: 0.002045s

 60%|██████    | 6/10 [00:00<00:00, 54.09it/s]limit: 10        precision:  10.00% avg time: 0.000129s
limit: 100       precision:  17.14% avg time: 0.000142s
limit: 1000      precision:  34.29% avg time: 0.000371s
limit: 10000     precision:  84.29% avg time: 0.002053s
limit: 10        precision:  10.00% avg time: 0.000132s
limit: 100       precision:  17.50% avg time: 0.000142s
limit: 1000      precision:  33.75% avg time: 0.000370s
limit: 10000     precision:  85.00% avg time: 0.002054s
limit: 10        precision:  10.00% avg time: 0.000135s
limit: 100       precision:  16.67% avg time: 0.000142s
limit: 1000      precision:  34.44% avg time: 0.000369s
limit: 10000     precision:  85.56% avg time: 0.002063s
limit: 10        precision:  10.00% avg time: 0.000135s
limit: 100       precision:  16.00% avg time: 0.000141s
limit: 1000      precision:  33.00% avg time: 0.000366s
limit: 10000     precision:  86.00% avg time: 0.002064s

100%|██████████| 10/10 [00:00<00:00, 56.87it/s]

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 8.809 seconds)

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