---
title: "Interactions: Game Configuration Setup"
description: "Defines the interaction patterns and animations for the game configuration screen."
feature: "Game Configuration Setup"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
status: draft
---

# Interactions: Game Configuration Setup

## Overview
This document specifies the micro-interactions and animations for the game configuration screen to create a responsive and intuitive user experience.

## Role Selection Cards
- **Hover**: The card lifts slightly with a subtle shadow increase.
- **Active/Click**: The card scales down to 95% of its original size. When selected, it remains in a "selected" state (e.g., with a border).
- **Transition**: `200ms ease-out`

## Duration Slider
- **Drag**: The slider thumb provides haptic feedback (if on a mobile device) and a tooltip showing the current value.
- **Label Update**: The duration label updates in real-time as the slider is moved.

## "Start Game" Button
- **Disabled State**: The button has a reduced opacity (e.g., 50%) and a `not-allowed` cursor on hover.
- **Enabled State**: The button transitions to the primary button style.
- **Hover/Active**: Follows the standard button interaction patterns.
- **Transition**: `250ms ease-out` on the background color and opacity.
