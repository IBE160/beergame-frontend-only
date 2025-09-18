---
title: "Interactions: Real-Time Game Dashboard"
description: "Defines the interaction patterns and animations for the game dashboard."
feature: "Real-Time Game Dashboard"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
status: draft
---

# Interactions: Real-Time Game Dashboard

## Overview
This document specifies the micro-interactions and animations for the game dashboard to create a dynamic and informative experience.

## Week Advancement
- When the "Place Order" button is clicked, a short animation sequence plays:
  1. The player's order is shown moving to the supplier.
  2. Shipments in transit move one step down the supply chain.
  3. New inventory arrives and the inventory number updates with a subtle animation (e.g., a quick scale-up and fade-in).
  4. The week counter increments.
- **Duration**: The entire sequence should take about 1-1.5 seconds.

## Chart Interactions
- **Hover**: A tooltip appears showing the exact value of the data point.
- **Pan/Zoom**: On desktop, users can click and drag to pan the chart. On mobile, they can use pinch gestures.

## Order Input
- **Validation**: The input field provides real-time validation, showing an error state if the user enters a non-numeric or negative value.

## Supply Chain Visualization
- **Hover**: Hovering over a supply chain node (e.g., the Wholesaler) could show a popover with more detailed information about that node.
