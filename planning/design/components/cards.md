---
title: Card Specifications
description: Design specifications for card components.
last-updated: 2025-09-22
version: 1.0.0
status: approved
---

# Cards

Cards are used to group related information in a flexible and modular way.

## Standard Card

Used for displaying content like metrics or role selection.

- **Component**: `Card`

### Visual Specifications
- **Padding**: `16px` or `24px`
- **Border Radius**: `12px`
- **Border**: `1px solid neutral_200`
- **Background**: `white`
- **Shadow**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`

## Selectable Card

Used for the role selection in the game configuration.

- **Component**: `Card`
- **Variant**: Selectable

### Interaction Specifications
- **Hover**: Shadow increases slightly. `150ms ease-out` transition.
- **Selected**: A 2px solid border in `primary` color appears.
- **Focus**: A 2px solid outline in `primary` color appears.
