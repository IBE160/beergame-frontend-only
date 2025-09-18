---
title: "Navigation Component Specifications"
description: "Design and usage specifications for navigation components."
last-updated: 2025-09-18
version: 1.0
status: draft
---

# Navigation Component Specifications

## Overview
This document provides design specifications for navigation components, such as the main header.

## Header
- **Layout**: A full-width bar at the top of the page.
- **Content**:
  - **Left**: Logo and application title.
  - **Right**: Navigation links (e.g., "How to Play", "About").
- **Style**: `background-color: var(--white); border-bottom: 1px solid var(--neutral-200)`

## Mobile Navigation
- **Trigger**: A hamburger icon button is displayed on mobile viewports.
- **Menu**: A slide-in panel from the right, containing the navigation links.
- **Overlay**: A semi-transparent overlay is displayed behind the menu to obscure the main content.

## Accessibility
- The navigation should be contained within a `<nav>` element.
- The mobile menu button must have an `aria-expanded` attribute to indicate its state.
- The navigation links should be structured as an unordered list.
menu when it is open.
