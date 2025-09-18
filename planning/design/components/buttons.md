---
title: "Button Specifications"
description: "Design and usage specifications for button components."
last-updated: 2025-09-18
version: 1.0
related-files:
  - ../design-system/style-guide.yaml
status: draft
---

# Button Specifications

## Overview
This document provides the design specifications for all button variants used in the application.

## Variants

### Primary Button
- **Usage**: For the primary call to action on a page.
- **Style**: Solid background color (primary), white text.
- **States**:
  - **Default**: `background-color: var(--primary)`
  - **Hover**: `background-color: var(--primary-dark)`
  - **Active**: `transform: scale(0.98)`
  - **Disabled**: `opacity: 0.5; cursor: not-allowed`

### Secondary Button
- **Usage**: For secondary actions.
- **Style**: Outlined with a transparent background and colored text/border.
- **States**:
  - **Default**: `border: 1px solid var(--primary); color: var(--primary)`
  - **Hover**: `background-color: var(--primary-light)`

### Ghost Button
- **Usage**: For tertiary actions, often in toolbars or headers.
- **Style**: No border or background, just colored text.
- **States**:
  - **Hover**: `background-color: var(--neutral-100)`

## Sizes
- **Small**: 32px height, 14px font size
- **Medium**: 40px height, 16px font size (default)
- **Large**: 48px height, 18px font size

## Accessibility
- Buttons must have a clear and descriptive label.
- Ensure sufficient color contrast for both text and borders.
- The focus state must be clearly visible.
