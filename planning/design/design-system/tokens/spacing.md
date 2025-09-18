---
title: Spacing and Layout System
description: Defines the spacing scale, grid system, and layout principles for the Beer Game application.
last-updated: 2025-09-18
version: 1.0
related-files:
  - ../style-guide.yaml
status: draft
---

# Spacing and Layout System

## Overview
This document details the spacing and layout system, which provides a consistent and harmonious structure to the UI. A well-defined spacing system improves readability, usability, and visual balance.

## Base Unit
The base unit for all spacing is **8px**. All margins, paddings, and layout dimensions should be multiples of this base unit.

## Spacing Scale
The following scale provides a consistent set of spacing values to be used throughout the application.

| Name | Size | Usage |
| :--- | :--- | :--- |
| **xs** | 4px | Micro-spacing within components |
| **sm** | 8px | Small gaps, icon spacing |
| **md** | 16px | Medium-sized gaps, component spacing |
| **lg** | 24px | Large gaps, section spacing |
| **xl** | 32px | Extra-large gaps, page-level spacing |
| **2xl**| 48px | Layout spacing |
| **3xl**| 64px | Major layout divisions |

## Grid System
- **Columns**: 12 (desktop), 8 (tablet), 4 (mobile)
- **Gutters**: 16px
- **Margins**: 16px
- **Container Max Width**: 1280px

## Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Wide**: 1440px+

## Implementation Notes
Use the spacing scale for all `margin` and `padding` properties. Avoid using custom values to maintain consistency. The grid system should be used for all page-level layouts.
