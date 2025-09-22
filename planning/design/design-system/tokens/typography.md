---
title: Typography System
description: Defines the typographic scale, fonts, and styles for the Beer Game simulation.
last-updated: 2025-09-22
version: 1.0.0
status: approved
related-files:
  - ../style-guide.yaml
---

# Typography System

## Overview
Our typography system is built for clarity, readability, and hierarchy. We use 'Inter' for its excellent legibility on screens and 'JetBrains Mono' for code snippets. The type scale is responsive and designed to create clear information architecture.

## Font Stacks

- **Primary**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace**: `'JetBrains Mono', Consolas, monospace`

## Type Scale

| Role | Style | Example |
|---|---|---|
| `h1` | 40px / 1.2, Bold (700) | **Headline 1** |
| `h2` | 32px / 1.2, Bold (700) | **Headline 2** |
| `h3` | 28px / 1.3, SemiBold (600) | **Headline 3** |
| `h4` | 20px / 1.4, SemiBold (600) | **Headline 4** |
| `h5` | 16px / 1.5, SemiBold (600) | **Headline 5** |
| `body_large` | 18px / 1.6, Regular (400) | The quick brown fox jumps over the lazy dog. |
| `body` | 16px / 1.6, Regular (400) | The quick brown fox jumps over the lazy dog. |
| `body_small` | 14px / 1.5, Regular (400) | The quick brown fox jumps over the lazy dog. |
| `caption` | 12px / 1.4, Regular (400) | The quick brown fox jumps over the lazy dog. |
| `label` | 14px / 1.5, SemiBold (600), UPPERCASE | LABEL TEXT |
| `code` | 14.4px / 1.5, Monospace | `const example = true;` |

## Usage Guidelines

- **Headings (`h1`-`h5`)**: Use for structuring content. Follow a logical hierarchy; do not skip levels.
- **Body Text (`body`, `body_large`, `body_small`)**: Use for paragraphs and main content. Choose the size that best fits the context and reading length.
- **Labels & Captions**: Use for UI elements, helper text, and annotations.

## Implementation Notes
- Use `rem` units for font sizes to respect user's browser font size settings.
- The `letter-spacing` values defined in the style guide should be applied to headings for better visual balance.
