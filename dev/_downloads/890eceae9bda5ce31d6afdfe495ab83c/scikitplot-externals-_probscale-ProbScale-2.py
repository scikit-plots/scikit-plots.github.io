from scipy import stats
fig, ax = pyplot.subplots(figsize=(4, 7))
ax.set_ylim(bottom=0.01, top=0.99)
ax.set_yscale('prob', as_pct=False, dist=stats.norm)
