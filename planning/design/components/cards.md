---
title: "Card Component Specifications"
description: "Design and usage specifications for card components."
last-updated: 2025-09-18
version: 1.0
status: draft
---

# Card Component Specifications

## Overview
This document provides design specifications for card components, which are used to group related content.

## Standard Card
- **Usage**: For displaying content in a structured way, such as in the "How to Play" section.
- **Style**:
  - `background-color: var(--white)`
  - `border: 1px solid var(--neutral-200)`
  - `border-radius: 8px`
  - `box-shadow: 0 2px 4px rgba(0,0,0,0.05)`
- **Content**: Can contain a header, an image, and body text.

## Selectable Card
- **Usage**: For the role selection screen.
- **Style**: Inherits from the standard card.
- **States**:
  - **Selected**: `border-color: var(--primary); box-shadow: 0 0 0 2px var(--primary-light)`
  - **Hover**: Lifts with a subtle shadow increase.

## Accessibility
- Cards should have a logical heading structure.
- If a card is a single link, the entire card should be wrapped in an `<a>` tag.
