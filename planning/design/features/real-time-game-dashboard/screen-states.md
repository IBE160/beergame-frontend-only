---
title: "Screen States: Real-Time Game Dashboard"
description: "Visual specifications for the real-time game dashboard."
feature: "Real-Time Game Dashboard"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
status: draft
---

# Screen States: Real-Time Game Dashboard

## Overview
This document provides visual specifications for the game dashboard, which is the main interface for the player.

## Desktop View (1440px)

### Default State
- **Layout**: A multi-panel layout.
  - **Left Panel**: Player's current status (Inventory, Backorders, Costs).
  - **Center Panel**: The main supply chain visualization.
  - **Right Panel**: Order placement section and historical data charts.
- **Key Metrics**:
  - Displayed as large numbers with clear labels.
  - Use semantic colors (e.g., red for backorders and high costs).
- **Charts**:
  - Line chart for inventory over time.
  - Bar chart for orders placed vs. received.

### Backordered State
- The "Backorders" metric is highlighted with a red color.
- A warning icon appears next to the inventory level.

### Game Over State
- A modal window appears over the dashboard with the game completion summary.

## Mobile View (375px)

### Default State
- A single-column layout with collapsible sections for different panels of information.
- Key metrics are displayed at the top.
- Charts are simplified and may be horizontally scrollable.

## Loading State
- A loading spinner is displayed while the game state is being initialized.

## Empty State
- Not applicable for the dashboard.

## Error State
- If there is an error loading the game state, a message is displayed with an option to restart.
