---
title: "Connectome-constrained world models"
date: 2026-02-10
categories: research
tags: [world-models, neuroscience, RL]
summary: "Using a real nervous system's wiring diagram as a structural prior for an agent's predictive model."
---

This is a placeholder post so you can see how a research write-up renders.
Replace the file in `_posts/` with your own. The first paragraph is a good
place to state the question in one or two plain sentences.

## The idea

A *world model* learns to predict how an environment evolves so an agent can
plan inside its own imagination. A *connectome* is the full wiring diagram of a
nervous system. The thesis asks a simple question: if we constrain the world
model's connectivity to match a biological connectome, what do we gain?

## What I did

- Built a baseline world model in JAX.
- Replaced the dense recurrent core with a sparse graph derived from a published connectome.
- Compared sample efficiency and stability across a handful of control tasks.

```python
# Illustrative — the connectome enters as a fixed sparsity mask.
W = init_weights(n, n) * connectome_mask
```

## What I found

Write your results here. A short table or a single figure usually does more
than three paragraphs of prose.

## What's next

End with the open threads — it signals you know where the work goes, which is
exactly what research-engineering interviewers look for.
