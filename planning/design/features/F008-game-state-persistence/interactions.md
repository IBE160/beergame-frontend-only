---
title: 'Interactions: Game State Persistence'
description: 'Interactions for the game state persistence feature.'
feature: 'Game State Persistence'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Interactions: Game Persistence

- **Save Indicator**: The "Game Saved" indicator should fade in and out smoothly.
    - **Duration**: `300ms` fade-in, `300ms` fade-out, with a 2-second delay.
- **Abandon Modal**: This is a critical confirmation, so it must be a blocking modal that traps focus.
