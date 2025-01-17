import matplotlib.pyplot as plt
fig1, ax1 = plt.subplots()
ax1.plot([1, 2, 3], [4, 5, 6])
ax1.set_title('Figure 1')
fig2, ax2 = plt.subplots()
ax2.bar(['A', 'B', 'C'], [3, 7, 2])
ax2.set_title('Figure 2')
import scikitplot as sp
combined_fig = sp.api._utils.save_figure((fig1, fig2), 'output.png', dpi=150, to_save=True)
combined_fig = sp.api._utils.save_figure((fig1, fig2), dpi=150, to_save=False, figsize=(14, 7))
