---
title: Modal Specifications
description: Design specifications for modal dialogs.
last-updated: 2025-09-22
version: 1.0.0
status: approved
---

# Modals

Modals are used to display important information or require user confirmation without navigating away from the current page.

## Standard Modal

Used for confirmations (e.g., abandon game) or help dialogs.

- **Component**: `Modal`

### Visual Specifications
- **Overlay Background**: `rgba(0, 0, 0, 0.5)`
- **Modal Padding**: `24px`
- **Modal Border Radius**: `16px`
- **Modal Background**: `white`
- **Modal Shadow**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

### Interaction Specifications
- **Animation**: The modal overlay fades in, and the modal dialog scales in.
    - **Duration**: `250ms ease-out`
- **Dismiss**: Can be dismissed by clicking the overlay, clicking a close button, or pressing the Escape key.
