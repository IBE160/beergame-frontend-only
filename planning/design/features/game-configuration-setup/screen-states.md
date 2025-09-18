---
title: "Screen States: Game Configuration Setup"
description: "Visual specifications for the game configuration screen."
feature: "Game Configuration Setup"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
status: draft
---

# Screen States: Game Configuration Setup

## Overview
This document provides visual specifications for the game configuration screen, including different states and responsive layouts.

## Desktop View (1440px)

### Default State
- **Headline**: "Set Up Your Game" (H2)
- **Role Selection**:
  - A grid of four cards, one for each role (Retailer, Wholesaler, Distributor, Manufacturer).
  - Each card has an icon, the role name, and a short description.
- **Duration Slider**:
  - A slider with a range of 20 to 52 weeks.
  - A label above the slider displays the currently selected duration (e.g., "30 Weeks").
- **CTA Button**: "Start Game" (Primary Button, disabled by default).

### Role Selected State
- The selected role card has a prominent border and a slightly different background color.
- The "Start Game" button becomes enabled if the duration has also been set.

### All Settings Selected State
- The "Start Game" button is enabled and has a primary color fill.

## Mobile View (375px)

### Default State
- Role selection cards are displayed in a two-column grid.
- The duration slider and its label are stacked vertically.

## Loading State
- Not applicable for this screen.

## Empty State
- Not applicable for this screen.

## Error State
- Not applicable for this screen, as the "Start Game" button is disabled until all required selections are made.
