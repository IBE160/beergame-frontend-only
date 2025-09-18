---
title: "Implementation Notes: Game Configuration Setup"
description: "Developer-focused guide for implementing the game configuration screen."
feature: "Game Configuration Setup"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
  - ../../design-system/style-guide.yaml
status: draft
---

# Implementation Notes: Game Configuration Setup

## Overview
This document provides guidance for developers on implementing the game configuration screen.

## Component Library
- **Card**: Use a `SelectableCard` component for the role selection. This component should manage its own selected state.
- **Slider**: Use a standard HTML `input[type="range"]` and style it according to the design system.
- **Button**: Use the `PrimaryButton` component for the "Start Game" CTA, ensuring the `disabled` prop is correctly wired up.

## State Management
- A local state manager (e.g., React's `useState`) should be used to track the selected role and duration.
- The "Start Game" button's disabled state should be derived from this state (e.g., `disabled={!selectedRole || !duration}`).

## Accessibility
- For the role selection, use a `fieldset` and `legend` to group the choices. Each card should be a `label` associated with a visually hidden `input[type="radio"]`.
- For the duration slider, use `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` to provide context to screen readers.

## Data Persistence
- Upon clicking "Start Game", the selected role and duration should be saved to the browser's `localStorage` to be used by the game dashboard.
