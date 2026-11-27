# Lean[#](#lean "Link to this heading")

Evidence on Lean projects, read from source text with `LeanIndex`:
what a theorem claims, what its proof rests on, and whether any of that is
`sorry`, an axiom or code that adds declarations at build time. Every
item names its file and lines. The examples write their own projects: no
Lean toolchain, no download.

```
.lean files
     ↓
LeanIndex.from_folder      (declarations, names used, audit flags)
     ↓                     save / load: one file, read in seconds;
     ↓                     refresh: read again only what changed
add_folder                 (a project over its saved dependencies)
     ↓
summary   dossier   discover / export     (layer=: one project's files)
     ↓
lake build, #print axioms  (the kernel decides)

```

To read `.lean` files as documents of a retrieval corpus, see
[`scikitplot.corpus.LeanReader`](../../modules/generated/scikitplot.corpus.LeanReader.html#scikitplot.corpus.LeanReader "scikitplot.corpus.LeanReader") in the corpus examples.

![](../../_images/sphx_glr_plot_lean_audit_script_thumb.png)

[Audit an AI-Assisted Formal Proof with LeanIndex](plot_lean_audit_script.html)

Audit an AI-Assisted Formal Proof with LeanIndex![](../../_images/sphx_glr_plot_lean_index_script_thumb.png)

[Gather the Evidence on a Lean Proof with LeanIndex](plot_lean_index_script.html)

Gather the Evidence on a Lean Proof with LeanIndex![](../../_images/sphx_glr_plot_lean_layers_script_thumb.png)

[Index a Lean Project over its Saved Dependencies with LeanIndex](plot_lean_layers_script.html)

Index a Lean Project over its Saved Dependencies with LeanIndex