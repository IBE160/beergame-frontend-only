---
title: "Modal Component Specifications"
description: "Design and usage specifications for modal dialogs."
last-updated: 2025-09-18
version: 1.0
status: draft
---

# Modal Component Specifications

## Overview
This document provides design specifications for modal dialogs, which are used to display content or actions that require the user's immediate attention.

## Standard Modal
- **Usage**: For displaying information or asking for confirmation, such as the game completion summary.
- **Layout**:
  - **Overlay**: A semi-transparent overlay that covers the entire viewport.
  - **Dialog**: A centered container for the modal's content.
- **Style**:
  - **Dialog**: `background-color: var(--white); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15)`
- **Content**:
  - **Header**: A title for the modal.
  - **Body**: The main content of the modal.
  - **Footer**: A section for action buttons (e.g., "Close", "Confirm").

## Accessibility
- The modal must be focus-trapped, meaning the user cannot tab outside of it.
- The `aria-modal="true"` attribute must be set on the dialog element.
- The `role="dialog"` attribute should be used.
- The modal should be closeable via the Escape key.
- The element that triggered the modal should be returned focus to when the modal is closed.
