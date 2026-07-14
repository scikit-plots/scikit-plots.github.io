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

  1%|▏         | 1301/100000 [00:00<00:07, 13005.02it/s]
  3%|▎         | 2614/100000 [00:00<00:07, 13074.19it/s]
  4%|▍         | 3930/100000 [00:00<00:07, 13110.04it/s]
  5%|▌         | 5245/100000 [00:00<00:07, 13124.78it/s]
  7%|▋         | 6558/100000 [00:00<00:07, 13101.28it/s]
  8%|▊         | 7873/100000 [00:00<00:07, 13116.35it/s]
  9%|▉         | 9191/100000 [00:00<00:06, 13135.81it/s]10000 / 100000 = 0.1

 11%|█         | 10505/100000 [00:00<00:06, 13125.49it/s]
 12%|█▏        | 11818/100000 [00:00<00:06, 13119.03it/s]
 13%|█▎        | 13131/100000 [00:01<00:06, 13119.30it/s]
 14%|█▍        | 14445/100000 [00:01<00:06, 13123.85it/s]
 16%|█▌        | 15759/100000 [00:01<00:06, 13126.76it/s]
 17%|█▋        | 17072/100000 [00:01<00:06, 13104.90it/s]
 18%|█▊        | 18391/100000 [00:01<00:06, 13129.01it/s]
 20%|█▉        | 19704/100000 [00:01<00:06, 13128.24it/s]20000 / 100000 = 0.2

 21%|██        | 21017/100000 [00:01<00:06, 13109.03it/s]
 22%|██▏       | 22330/100000 [00:01<00:05, 13114.47it/s]
 24%|██▎       | 23642/100000 [00:01<00:05, 13108.08it/s]
 25%|██▍       | 24957/100000 [00:01<00:05, 13119.98it/s]
 26%|██▋       | 26274/100000 [00:02<00:05, 13133.21it/s]
 28%|██▊       | 27588/100000 [00:02<00:05, 13111.16it/s]
 29%|██▉       | 28902/100000 [00:02<00:05, 13118.83it/s]30000 / 100000 = 0.3

 30%|███       | 30215/100000 [00:02<00:05, 13121.86it/s]
 32%|███▏      | 31529/100000 [00:02<00:05, 13126.75it/s]
 33%|███▎      | 32845/100000 [00:02<00:05, 13136.34it/s]
 34%|███▍      | 34161/100000 [00:02<00:05, 13142.86it/s]
 35%|███▌      | 35476/100000 [00:02<00:04, 13112.13it/s]
 37%|███▋      | 36791/100000 [00:02<00:04, 13123.22it/s]
 38%|███▊      | 38107/100000 [00:02<00:04, 13133.58it/s]
 39%|███▉      | 39426/100000 [00:03<00:04, 13147.67it/s]40000 / 100000 = 0.4

 41%|████      | 40741/100000 [00:03<00:04, 13136.31it/s]
 42%|████▏     | 42058/100000 [00:03<00:04, 13143.38it/s]
 43%|████▎     | 43376/100000 [00:03<00:04, 13152.83it/s]
 45%|████▍     | 44692/100000 [00:03<00:04, 13153.51it/s]
 46%|████▌     | 46008/100000 [00:03<00:04, 13069.05it/s]
 47%|████▋     | 47318/100000 [00:03<00:04, 13077.84it/s]
 49%|████▊     | 48633/100000 [00:03<00:03, 13096.42it/s]
 50%|████▉     | 49950/100000 [00:03<00:03, 13116.53it/s]50000 / 100000 = 0.5

 51%|█████▏    | 51268/100000 [00:03<00:03, 13133.29it/s]
 53%|█████▎    | 52582/100000 [00:04<00:03, 13123.77it/s]
 54%|█████▍    | 53899/100000 [00:04<00:03, 13137.42it/s]
 55%|█████▌    | 55216/100000 [00:04<00:03, 13145.32it/s]
 57%|█████▋    | 56531/100000 [00:04<00:03, 13138.70it/s]
 58%|█████▊    | 57845/100000 [00:04<00:03, 13128.28it/s]
 59%|█████▉    | 59158/100000 [00:04<00:03, 12887.49it/s]60000 / 100000 = 0.6

 60%|██████    | 60470/100000 [00:04<00:03, 12955.53it/s]
 62%|██████▏   | 61784/100000 [00:04<00:02, 13008.54it/s]
 63%|██████▎   | 63099/100000 [00:04<00:02, 13049.44it/s]
 64%|██████▍   | 64417/100000 [00:04<00:02, 13087.97it/s]
 66%|██████▌   | 65730/100000 [00:05<00:02, 13098.11it/s]
 67%|██████▋   | 67041/100000 [00:05<00:02, 13067.34it/s]
 68%|██████▊   | 68361/100000 [00:05<00:02, 13103.99it/s]
 70%|██████▉   | 69672/100000 [00:05<00:02, 12947.77it/s]70000 / 100000 = 0.7

 71%|███████   | 70968/100000 [00:05<00:02, 12936.58it/s]
 72%|███████▏  | 72279/100000 [00:05<00:02, 12986.21it/s]
 74%|███████▎  | 73594/100000 [00:05<00:02, 13032.39it/s]
 75%|███████▍  | 74907/100000 [00:05<00:01, 13061.16it/s]
 76%|███████▌  | 76214/100000 [00:05<00:01, 13040.14it/s]
 78%|███████▊  | 77528/100000 [00:05<00:01, 13068.93it/s]
 79%|███████▉  | 78840/100000 [00:06<00:01, 13083.64it/s]80000 / 100000 = 0.8

 80%|████████  | 80153/100000 [00:06<00:01, 13095.06it/s]
 81%|████████▏ | 81466/100000 [00:06<00:01, 13103.93it/s]
 83%|████████▎ | 82779/100000 [00:06<00:01, 13111.49it/s]
 84%|████████▍ | 84098/100000 [00:06<00:01, 13132.92it/s]
 85%|████████▌ | 85415/100000 [00:06<00:01, 13143.09it/s]
 87%|████████▋ | 86730/100000 [00:06<00:01, 13085.16it/s]
 88%|████████▊ | 88039/100000 [00:06<00:00, 13083.83it/s]
 89%|████████▉ | 89348/100000 [00:06<00:00, 13059.02it/s]90000 / 100000 = 0.9

 91%|█████████ | 90654/100000 [00:06<00:00, 12793.79it/s]
 92%|█████████▏| 91935/100000 [00:07<00:00, 12395.24it/s]
 93%|█████████▎| 93244/100000 [00:07<00:00, 12596.02it/s]
 95%|█████████▍| 94551/100000 [00:07<00:00, 12733.18it/s]
 96%|█████████▌| 95864/100000 [00:07<00:00, 12847.98it/s]
 97%|█████████▋| 97180/100000 [00:07<00:00, 12938.09it/s]
 98%|█████████▊| 98491/100000 [00:07<00:00, 12988.76it/s]
100%|█████████▉| 99791/100000 [00:07<00:00, 11744.02it/s]
100%|██████████| 100000/100000 [00:07<00:00, 12998.17it/s]

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
 70%|███████   | 7/10 [00:00<00:00, 61.96it/s]
100%|██████████| 10/10 [00:00<00:00, 63.00it/s]
limit: 10        precision:  10.00% avg time: 0.000123s
limit: 100       precision:  16.00% avg time: 0.000109s
limit: 1000      precision:  33.00% avg time: 0.000322s
limit: 10000     precision:  86.00% avg time: 0.001897s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 8.778 seconds)

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