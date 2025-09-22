---
title: 'Accessibility: Game Configuration Setup'
description: 'Accessibility considerations for the game configuration screen.'
feature: 'Game Configuration Setup'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Accessibility: Game Configuration

## 1. WCAG 2.1 AA Compliance

This feature will adhere to WCAG 2.1 Level AA guidelines.

## 2. Specific Requirements

- **Keyboard Navigation**: 
    - The role selection cards and the slider must be fully operable with a keyboard.
    - The cards can be implemented as a `radiogroup` so that arrow keys can be used to switch between them.
    - The slider must be navigable using arrow keys to increment/decrement the value.
    - The "Start Game" button will be the last item in the tab order.

- **Screen Readers**: 
    - The role selection should be announced as a group of radio buttons (e.g., "Choose your role, 1 of 4: Retailer").
    - The slider should have an accessible label (e.g., "Game Duration") and announce the selected value as it changes (e.g., "25 weeks").
    - The state of the "Start Game" button (disabled or enabled) must be announced.

- **Color Contrast**: 
    - The selected state of the role cards must have sufficient contrast.
    - The text on the cards and the slider value must meet the 4.5:1 contrast ratio.

- **Touch Targets**: 
    - On mobile, the role cards and the slider handle must have a minimum touch target size of 44x44px.
