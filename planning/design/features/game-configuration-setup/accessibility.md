---
title: "Accessibility: Game Configuration Setup"
description: "Accessibility considerations for the game configuration setup feature."
feature: "Game Configuration Setup"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
  - ../../accessibility/guidelines.md
status: draft
---

# Accessibility: Game Configuration Setup

## Overview
This document outlines the accessibility requirements for the game configuration screen to ensure it is usable by people of all abilities.

## Requirements

### Keyboard Navigation
- All interactive elements, including the role selection cards, duration slider, and "Start Game" button, must be focusable and operable via the keyboard.
- The tab order must be logical.
- A visible focus indicator must be present on all focusable elements.

### Screen Readers
- The role selection cards should be treated as radio buttons in a radio group, so that a screen reader user can easily switch between them.
- The duration slider must have an accessible name and provide audible feedback on its current value.
- The "Start Game" button's disabled state must be announced to screen reader users.

### Color Contrast
- All text and UI elements must meet WCAG 2.1 AA contrast requirements.
- The selected state of the role cards must have a non-color-based indicator (e.g., a border or icon).

## Testing Criteria
- **Automated**: Run Axe and Lighthouse scans.
- **Manual**:
  - Navigate and make selections using only the keyboard.
  - Test with a screen reader to ensure all controls are understandable and operable.
  - Verify color contrast.
