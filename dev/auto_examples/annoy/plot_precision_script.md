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

  2%|▏         | 1745/100000 [00:00<00:05, 17446.36it/s]
  3%|▎         | 3491/100000 [00:00<00:05, 17448.27it/s]
  5%|▌         | 5243/100000 [00:00<00:05, 17478.44it/s]
  7%|▋         | 6991/100000 [00:00<00:05, 17477.60it/s]
  9%|▊         | 8739/100000 [00:00<00:05, 17473.74it/s]10000 / 100000 = 0.1

 10%|█         | 10487/100000 [00:00<00:05, 17434.41it/s]
 12%|█▏        | 12231/100000 [00:00<00:05, 17403.87it/s]
 14%|█▍        | 13988/100000 [00:00<00:04, 17454.15it/s]
 16%|█▌        | 15747/100000 [00:00<00:04, 17494.78it/s]
 17%|█▋        | 17497/100000 [00:01<00:04, 17427.28it/s]
 19%|█▉        | 19258/100000 [00:01<00:04, 17479.89it/s]20000 / 100000 = 0.2

 21%|██        | 21009/100000 [00:01<00:04, 17488.11it/s]
 23%|██▎       | 22767/100000 [00:01<00:04, 17515.62it/s]
 25%|██▍       | 24524/100000 [00:01<00:04, 17530.67it/s]
 26%|██▋       | 26281/100000 [00:01<00:04, 17541.92it/s]
 28%|██▊       | 28036/100000 [00:01<00:04, 16954.38it/s]
 30%|██▉       | 29759/100000 [00:01<00:04, 17033.28it/s]30000 / 100000 = 0.3

 31%|███▏      | 31466/100000 [00:01<00:04, 16917.74it/s]
 33%|███▎      | 33168/100000 [00:01<00:03, 16945.84it/s]
 35%|███▍      | 34865/100000 [00:02<00:03, 16285.59it/s]
 37%|███▋      | 36629/100000 [00:02<00:03, 16675.57it/s]
 38%|███▊      | 38388/100000 [00:02<00:03, 16940.09it/s]40000 / 100000 = 0.4

 40%|████      | 40146/100000 [00:02<00:03, 17126.32it/s]
 42%|████▏     | 41886/100000 [00:02<00:03, 17206.51it/s]
 44%|████▎     | 43650/100000 [00:02<00:03, 17333.06it/s]
 45%|████▌     | 45386/100000 [00:02<00:03, 17191.21it/s]
 47%|████▋     | 47132/100000 [00:02<00:03, 17268.39it/s]
 49%|████▉     | 48861/100000 [00:02<00:02, 17263.97it/s]50000 / 100000 = 0.5

 51%|█████     | 50603/100000 [00:02<00:02, 17309.04it/s]
 52%|█████▏    | 52338/100000 [00:03<00:02, 17320.03it/s]
 54%|█████▍    | 54086/100000 [00:03<00:02, 17365.38it/s]
 56%|█████▌    | 55823/100000 [00:03<00:02, 17351.30it/s]
 58%|█████▊    | 57572/100000 [00:03<00:02, 17391.15it/s]
 59%|█████▉    | 59312/100000 [00:03<00:02, 17129.71it/s]60000 / 100000 = 0.6

 61%|██████    | 61047/100000 [00:03<00:02, 17192.49it/s]
 63%|██████▎   | 62777/100000 [00:03<00:02, 17221.68it/s]
 65%|██████▍   | 64520/100000 [00:03<00:02, 17283.58it/s]
 66%|██████▋   | 66263/100000 [00:03<00:01, 17326.07it/s]
 68%|██████▊   | 68001/100000 [00:03<00:01, 17341.81it/s]
 70%|██████▉   | 69742/100000 [00:04<00:01, 17361.17it/s]70000 / 100000 = 0.7

 71%|███████▏  | 71485/100000 [00:04<00:01, 17379.73it/s]
 73%|███████▎  | 73224/100000 [00:04<00:01, 17371.46it/s]
 75%|███████▍  | 74966/100000 [00:04<00:01, 17384.12it/s]
 77%|███████▋  | 76705/100000 [00:04<00:01, 16921.35it/s]
 78%|███████▊  | 78422/100000 [00:04<00:01, 16994.10it/s]80000 / 100000 = 0.8

 80%|████████  | 80129/100000 [00:04<00:01, 17015.61it/s]
 82%|████████▏ | 81883/100000 [00:04<00:01, 17169.95it/s]
 84%|████████▎ | 83634/100000 [00:04<00:00, 17270.19it/s]
 85%|████████▌ | 85384/100000 [00:04<00:00, 17337.50it/s]
 87%|████████▋ | 87146/100000 [00:05<00:00, 17420.76it/s]
 89%|████████▉ | 88907/100000 [00:05<00:00, 17477.10it/s]90000 / 100000 = 0.9

 91%|█████████ | 90661/100000 [00:05<00:00, 17492.89it/s]
 92%|█████████▏| 92411/100000 [00:05<00:00, 17489.52it/s]
 94%|█████████▍| 94161/100000 [00:05<00:00, 17478.80it/s]
 96%|█████████▌| 95922/100000 [00:05<00:00, 17517.83it/s]
 98%|█████████▊| 97676/100000 [00:05<00:00, 17522.81it/s]
 99%|█████████▉| 99429/100000 [00:05<00:00, 17122.66it/s]
100%|██████████| 100000/100000 [00:05<00:00, 17269.26it/s]

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
 60%|██████    | 6/10 [00:00<00:00, 55.33it/s]
100%|██████████| 10/10 [00:00<00:00, 56.81it/s]
limit: 10        precision:  10.00% avg time: 0.000145s
limit: 100       precision:  16.00% avg time: 0.000124s
limit: 1000      precision:  33.00% avg time: 0.000365s
limit: 10000     precision:  86.00% avg time: 0.002224s

```

Tags: [model-workflow: vector-db](../../_tags/model-workflow-vector-db.html) [plot-type: bar](../../_tags/plot-type-bar.html) [level: beginner](../../_tags/level-beginner.html) [purpose: showcase](../../_tags/purpose-showcase.html)

****Total running time of the script:**** (2 minutes 1.815 seconds)

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