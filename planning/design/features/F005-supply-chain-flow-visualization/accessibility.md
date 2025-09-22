---
title: 'Accessibility: Supply Chain Flow Visualization'
description: 'Accessibility for the supply chain visualization component.'
feature: 'Supply Chain Flow Visualization'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Accessibility: Supply Chain Visualization

- **Alternative Representation**: For screen reader users, the visualization must have a non-visual alternative. This could be a simple, structured text description that is updated each week (e.g., "Your order is now 1 week away from the wholesaler.").
- **ARIA**: Use ARIA roles (`graphics-document`, `graphics-symbol`) to describe the visualization to assistive technologies.
- **Color**: Do not rely on color alone to indicate the status or movement of items.
