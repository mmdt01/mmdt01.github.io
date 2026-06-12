---
title: "Notes on JAX for biologically structured networks"
date: 2025-11-22
categories: research
tags: [JAX, engineering]
summary: "Practical patterns for sparse, masked, and graph-structured layers."
---

A shorter, more technical note — the kind of thing that shows you can reason
about implementation, not just ideas. Replace with your own.

## Why this comes up

Biological connectivity is sparse and structured. Naively masking a dense
matrix wastes compute; doing it well takes a little care in JAX.

## A few patterns

1. Keep the mask static so `jit` can specialise on it.
2. Prefer segment operations over Python loops over neurons.
3. Profile before optimising — the bottleneck is rarely where you expect.

That's the whole point of a note: small, useful, and findable later.
