---
title: 'Interactions: Game Configuration Setup'
description: 'Interaction patterns and animations for the game configuration screen.'
feature: 'Game Configuration Setup'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Interactions: Game Configuration

## 1. Role Selection Cards

- **Component**: `Card` (custom variant for selection)
- **Element**: The four role cards.

| State | Visual Treatment | Animation |
|---|---|---|
| `Default` | Standard card appearance. | `150ms ease-out` transition on border and shadow. |
| `Hover` | A subtle lift (box-shadow) and the border color may appear faintly. | `150ms ease-out` transition. |
| `Selected` | A prominent border (2px, `primary` color) is applied. | `150ms ease-out` transition. |
| `Focus` | A visible outline appears around the card, similar to the `Selected` state but potentially with a different color or style to differentiate. | `150ms ease-out` transition. |

## 2. Duration Slider

- **Component**: `Slider`
- **Interaction**: The user can drag the slider handle or click on the track.
- **Feedback**: The numerical value of the selected duration is displayed in real-time next to the slider.
- **Animation**: The slider handle moves smoothly. The track fill updates instantly.

## 3. "Start Game" Button Enablement

- **Trigger**: Both a role has been selected AND a duration has been set.
- **Animation**: When the button becomes enabled, it can have a subtle "pulse" or "fade-in" effect to draw the user's attention to the now-available primary action.
- **Details**:
    - **Duration**: `300ms`
    - **Easing**: `ease-out`
    - **Property**: `opacity` and `transform: scale()`
- **Purpose**: To clearly signify that the user can now proceed.
