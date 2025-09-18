---
title: "Accessibility: Real-Time Game Dashboard"
description: "Accessibility considerations for the game dashboard feature."
feature: "Real-Time Game Dashboard"
last-updated: 2025-09-18
version: 1.0
related-files:
  - ./README.md
  - ../../accessibility/guidelines.md
status: draft
---

# Accessibility: Real-Time Game Dashboard

## Overview
This document outlines the accessibility requirements for the game dashboard to ensure it is usable by all players.

## Requirements

### Keyboard Navigation
- All interactive elements, including the order input, "Place Order" button, and any chart controls, must be keyboard accessible.
- The tab order must be logical.

### Screen Readers
- Key metrics (Inventory, Backorders, Costs) must be clearly announced.
- The supply chain visualization should be represented in a way that is understandable to screen reader users (e.g., as a structured list or table).
- The data charts should be accessible, either by providing a data table alternative or by using a library that supports screen reader access.
- ARIA live regions should be used to announce important game state changes, such as the start of a new week or a new backorder.

### Color Contrast
- All text and data visualizations must meet WCAG 2.1 AA contrast requirements.
- Information conveyed by color (e.g., red for backorders) must also be available in another format (e.g., text or an icon).

### Motion
- The week advancement animations should be disabled for users with `prefers-reduced-motion` enabled. The dashboard should update instantly in this case.

## Testing Criteria
- **Automated**: Run Axe and Lighthouse scans.
- **Manual**:
  - Play the game using only the keyboard.
  - Play the game with a screen reader to ensure all information is conveyed clearly.
  - Verify color contrast, especially in the data charts.
