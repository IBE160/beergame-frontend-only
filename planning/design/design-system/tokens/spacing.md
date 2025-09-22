---
title: Spacing and Layout System
description: Defines the spacing scale, grid system, and layout principles for the Beer Game simulation.
last-updated: 2025-09-22
version: 1.0.0
status: approved
related-files:
  - ../style-guide.yaml
---

# Spacing and Layout

## Overview
Our layout system uses a consistent 8px base unit to create a harmonious and predictable visual rhythm. This ensures that all elements, from small components to large page layouts, feel cohesive.

## Spacing Scale
The spacing scale provides a controlled set of values for margins, padding, and positioning.

| Name | Value (rem) | Value (px) | Usage |
|---|---|---|---|
| `xs` | 0.25rem | 4px | Micro-spacing within components. |
| `sm` | 0.5rem | 8px | Gaps between small elements. |
| `md` | 1rem | 16px | Standard spacing for most elements. |
| `lg` | 1.5rem | 24px | Spacing between larger components or sections. |
| `xl` | 2rem | 32px | Page-level spacing, large gaps. |
| `2xl` | 3rem | 48px | Extra-large spacing for separating major regions. |
| `3xl` | 4rem | 64px | Page headers and footers. |

## Grid System
Our responsive grid helps create consistent layouts across different screen sizes.

- **Columns**: 12 (desktop), 8 (tablet), 4 (mobile)
- **Gutters**: 1rem (16px)
- **Page Margins**: `xl` (32px) on desktop, `lg` (24px) on tablet, `md` (16px) on mobile.

## Breakpoints

| Name | Range | Description |
|---|---|---|
| `mobile` | 320px - 767px | Single-column layout, touch-first design. |
| `tablet` | 768px - 1023px | Adapts to wider screens, may use 2 columns. |
| `desktop` | 1024px - 1439px | Full-featured layout for mouse and keyboard. |
| `wide` | 1440px+ | Utilizes extra space for better information density. |

## Implementation Notes
- Use spacing variables (e.g., `space-md`) in CSS/Tailwind instead of hardcoded values.
- Combine padding and margin from the scale to achieve desired layouts.
- The container max-widths defined in the style guide should be used to constrain content width for optimal readability.
