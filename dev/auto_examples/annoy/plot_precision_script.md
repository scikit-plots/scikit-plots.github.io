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

  2%|▏         | 1641/100000 [00:00<00:05, 16402.12it/s]
  3%|▎         | 3282/100000 [00:00<00:06, 15292.22it/s]
  5%|▍         | 4847/100000 [00:00<00:06, 15447.04it/s]
  7%|▋         | 6504/100000 [00:00<00:05, 15878.01it/s]
  8%|▊         | 8095/100000 [00:00<00:05, 15617.16it/s]
 10%|▉         | 9750/100000 [00:00<00:05, 15924.37it/s]10000 / 100000 = 0.1

 11%|█▏        | 11392/100000 [00:00<00:05, 16083.04it/s]
 13%|█▎        | 13094/100000 [00:00<00:05, 16376.34it/s]
 15%|█▍        | 14835/100000 [00:00<00:05, 16696.69it/s]
 17%|█▋        | 16506/100000 [00:01<00:05, 16466.69it/s]
 18%|█▊        | 18155/100000 [00:01<00:05, 16236.85it/s]
 20%|█▉        | 19781/100000 [00:01<00:04, 16188.85it/s]20000 / 100000 = 0.2

 21%|██▏       | 21418/100000 [00:01<00:04, 16240.77it/s]
 23%|██▎       | 23162/100000 [00:01<00:04, 16596.77it/s]
 25%|██▍       | 24875/100000 [00:01<00:04, 16756.05it/s]
 27%|██▋       | 26561/100000 [00:01<00:04, 16786.59it/s]
 28%|██▊       | 28241/100000 [00:01<00:04, 16017.21it/s]
 30%|██▉       | 29851/100000 [00:01<00:04, 15847.76it/s]30000 / 100000 = 0.3

 31%|███▏      | 31441/100000 [00:01<00:04, 15776.25it/s]
 33%|███▎      | 33023/100000 [00:02<00:04, 15318.54it/s]
 35%|███▍      | 34560/100000 [00:02<00:04, 15295.29it/s]
 36%|███▋      | 36255/100000 [00:02<00:04, 15774.62it/s]
 38%|███▊      | 37997/100000 [00:02<00:03, 16255.89it/s]
 40%|███▉      | 39742/100000 [00:02<00:03, 16608.24it/s]40000 / 100000 = 0.4

 41%|████▏     | 41488/100000 [00:02<00:03, 16859.20it/s]
 43%|████▎     | 43233/100000 [00:02<00:03, 17032.68it/s]
 45%|████▍     | 44977/100000 [00:02<00:03, 17151.56it/s]
 47%|████▋     | 46694/100000 [00:02<00:03, 17052.75it/s]
 48%|████▊     | 48439/100000 [00:02<00:03, 17169.66it/s]50000 / 100000 = 0.5

 50%|█████     | 50183/100000 [00:03<00:02, 17248.53it/s]
 52%|█████▏    | 51928/100000 [00:03<00:02, 17307.93it/s]
 54%|█████▎    | 53660/100000 [00:03<00:02, 17260.73it/s]
 55%|█████▌    | 55399/100000 [00:03<00:02, 17296.83it/s]
 57%|█████▋    | 57146/100000 [00:03<00:02, 17347.55it/s]
 59%|█████▉    | 58881/100000 [00:03<00:02, 17128.56it/s]60000 / 100000 = 0.6

 61%|██████    | 60623/100000 [00:03<00:02, 17212.79it/s]
 62%|██████▏   | 62363/100000 [00:03<00:02, 17266.18it/s]
 64%|██████▍   | 64092/100000 [00:03<00:02, 17270.31it/s]
 66%|██████▌   | 65835/100000 [00:03<00:01, 17315.77it/s]
 68%|██████▊   | 67570/100000 [00:04<00:01, 17324.45it/s]
 69%|██████▉   | 69303/100000 [00:04<00:01, 17044.21it/s]70000 / 100000 = 0.7

 71%|███████   | 71009/100000 [00:04<00:01, 15844.08it/s]
 73%|███████▎  | 72739/100000 [00:04<00:01, 16254.15it/s]
 74%|███████▍  | 74479/100000 [00:04<00:01, 16583.10it/s]
 76%|███████▌  | 76149/100000 [00:04<00:01, 16486.74it/s]
 78%|███████▊  | 77886/100000 [00:04<00:01, 16741.83it/s]
 80%|███████▉  | 79615/100000 [00:04<00:01, 16900.45it/s]80000 / 100000 = 0.8

 81%|████████▏ | 81335/100000 [00:04<00:01, 16987.95it/s]
 83%|████████▎ | 83057/100000 [00:05<00:00, 17054.10it/s]
 85%|████████▍ | 84765/100000 [00:05<00:00, 17060.04it/s]
 86%|████████▋ | 86487/100000 [00:05<00:00, 17105.65it/s]
 88%|████████▊ | 88207/100000 [00:05<00:00, 17130.92it/s]
 90%|████████▉ | 89923/100000 [00:05<00:00, 17139.02it/s]90000 / 100000 = 0.9

 92%|█████████▏| 91646/100000 [00:05<00:00, 17164.57it/s]
 93%|█████████▎| 93363/100000 [00:05<00:00, 17101.86it/s]
 95%|█████████▌| 95074/100000 [00:05<00:00, 15699.81it/s]
 97%|█████████▋| 96667/100000 [00:05<00:00, 14776.96it/s]
 98%|█████████▊| 98168/100000 [00:05<00:00, 14751.69it/s]
100%|█████████▉| 99660/100000 [00:06<00:00, 13678.61it/s]
100%|██████████| 100000/100000 [00:06<00:00, 16360.23it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 52.64it/s]
100%|██████████| 10/10 [00:00<00:00, 54.21it/s]
limit: 10        precision:  10.00% avg time: 0.000153s
limit: 100       precision:  16.00% avg time: 0.000131s
limit: 1000      precision:  33.00% avg time: 0.000393s
limit: 10000     precision:  86.00% avg time: 0.002349s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 14.487 seconds)

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