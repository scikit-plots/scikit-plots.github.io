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

  1%|▏         | 1454/100000 [00:00<00:06, 14537.24it/s]
  3%|▎         | 2908/100000 [00:00<00:06, 14401.84it/s]
  4%|▍         | 4349/100000 [00:00<00:06, 14038.23it/s]
  6%|▌         | 5817/100000 [00:00<00:06, 14283.31it/s]
  7%|▋         | 7312/100000 [00:00<00:06, 14517.85it/s]
  9%|▉         | 8780/100000 [00:00<00:06, 14570.57it/s]10000 / 100000 = 0.1

 10%|█         | 10238/100000 [00:00<00:06, 14107.17it/s]
 12%|█▏        | 11761/100000 [00:00<00:06, 14453.34it/s]
 13%|█▎        | 13295/100000 [00:00<00:05, 14722.44it/s]
 15%|█▍        | 14940/100000 [00:01<00:05, 15248.19it/s]
 16%|█▋        | 16468/100000 [00:01<00:05, 14736.74it/s]
 18%|█▊        | 18029/100000 [00:01<00:05, 14989.44it/s]
 20%|█▉        | 19533/100000 [00:01<00:05, 14577.66it/s]20000 / 100000 = 0.2

 21%|██        | 21187/100000 [00:01<00:05, 15146.49it/s]
 23%|██▎       | 22707/100000 [00:01<00:05, 14533.83it/s]
 24%|██▍       | 24169/100000 [00:01<00:05, 14229.45it/s]
 26%|██▌       | 25598/100000 [00:01<00:05, 13937.14it/s]
 27%|██▋       | 27043/100000 [00:01<00:05, 14082.40it/s]
 29%|██▊       | 28639/100000 [00:01<00:04, 14625.38it/s]30000 / 100000 = 0.3

 30%|███       | 30171/100000 [00:02<00:04, 14828.42it/s]
 32%|███▏      | 31768/100000 [00:02<00:04, 15161.74it/s]
 33%|███▎      | 33365/100000 [00:02<00:04, 15400.87it/s]
 35%|███▍      | 34908/100000 [00:02<00:04, 15404.12it/s]
 36%|███▋      | 36489/100000 [00:02<00:04, 15524.65it/s]
 38%|███▊      | 38072/100000 [00:02<00:03, 15614.16it/s]
 40%|███▉      | 39674/100000 [00:02<00:03, 15733.91it/s]40000 / 100000 = 0.4

 41%|████▏     | 41258/100000 [00:02<00:03, 15764.04it/s]
 43%|████▎     | 42842/100000 [00:02<00:03, 15786.57it/s]
 44%|████▍     | 44430/100000 [00:02<00:03, 15811.76it/s]
 46%|████▌     | 46012/100000 [00:03<00:03, 15634.42it/s]
 48%|████▊     | 47607/100000 [00:03<00:03, 15727.87it/s]
 49%|████▉     | 49204/100000 [00:03<00:03, 15799.11it/s]50000 / 100000 = 0.5

 51%|█████     | 50798/100000 [00:03<00:03, 15838.70it/s]
 52%|█████▏    | 52383/100000 [00:03<00:03, 15690.44it/s]
 54%|█████▍    | 53977/100000 [00:03<00:02, 15763.92it/s]
 56%|█████▌    | 55554/100000 [00:03<00:02, 15726.73it/s]
 57%|█████▋    | 57167/100000 [00:03<00:02, 15843.99it/s]
 59%|█████▉    | 58752/100000 [00:03<00:02, 15653.75it/s]60000 / 100000 = 0.6

 60%|██████    | 60348/100000 [00:03<00:02, 15742.55it/s]
 62%|██████▏   | 61923/100000 [00:04<00:02, 15644.37it/s]
 64%|██████▎   | 63522/100000 [00:04<00:02, 15746.77it/s]
 65%|██████▌   | 65184/100000 [00:04<00:02, 16005.91it/s]
 67%|██████▋   | 66940/100000 [00:04<00:02, 16469.28it/s]
 69%|██████▊   | 68692/100000 [00:04<00:01, 16782.31it/s]70000 / 100000 = 0.7

 70%|███████   | 70442/100000 [00:04<00:01, 16995.85it/s]
 72%|███████▏  | 72185/100000 [00:04<00:01, 17124.65it/s]
 74%|███████▍  | 73926/100000 [00:04<00:01, 17208.72it/s]
 76%|███████▌  | 75665/100000 [00:04<00:01, 17260.76it/s]
 77%|███████▋  | 77392/100000 [00:04<00:01, 17028.41it/s]
 79%|███████▉  | 79134/100000 [00:05<00:01, 17143.25it/s]80000 / 100000 = 0.8

 81%|████████  | 80873/100000 [00:05<00:01, 17216.16it/s]
 83%|████████▎ | 82615/100000 [00:05<00:01, 17276.23it/s]
 84%|████████▍ | 84355/100000 [00:05<00:00, 17312.72it/s]
 86%|████████▌ | 86092/100000 [00:05<00:00, 17328.76it/s]
 88%|████████▊ | 87826/100000 [00:05<00:00, 17297.42it/s]
 90%|████████▉ | 89556/100000 [00:05<00:00, 17280.74it/s]90000 / 100000 = 0.9

 91%|█████████▏| 91285/100000 [00:05<00:00, 17270.47it/s]
 93%|█████████▎| 93028/100000 [00:05<00:00, 17315.07it/s]
 95%|█████████▍| 94766/100000 [00:05<00:00, 17332.50it/s]
 97%|█████████▋| 96511/100000 [00:06<00:00, 17365.38it/s]
 98%|█████████▊| 98249/100000 [00:06<00:00, 17368.62it/s]
100%|█████████▉| 99986/100000 [00:06<00:00, 17053.16it/s]
100%|██████████| 100000/100000 [00:06<00:00, 15876.87it/s]

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
 70%|███████   | 7/10 [00:00<00:00, 61.81it/s]
100%|██████████| 10/10 [00:00<00:00, 63.04it/s]
limit: 10        precision:  10.00% avg time: 0.000119s
limit: 100       precision:  16.00% avg time: 0.000110s
limit: 1000      precision:  33.00% avg time: 0.000324s
limit: 10000     precision:  86.00% avg time: 0.001898s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 1.794 seconds)

[![Launch binder](../../_images/binder_badge_logo.svg)](https://mybinder.org/v2/gh/scikit-plots/scikit-plots/maintenance/0.4.X?urlpath=lab/tree/notebooks/auto_examples/annoy/plot_precision_script.ipynb)[![Launch JupyterLite](../../_images/jupyterlite_badge_logo.svg)](../../lite/lab/index.html?path=auto_examples/annoy/plot_precision_script.ipynb)

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