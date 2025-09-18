---
title: Typography System
description: Defines the typographic styles, fonts, and hierarchy for the Beer Game application.
last-updated: 2025-09-18
version: 1.0
related-files:
  - ../style-guide.yaml
status: draft
---

# Typography System

## Overview
This document outlines the typography standards for the project, including font families, weights, and a responsive type scale. Consistent typography is key to creating a readable and visually cohesive user experience.

## Font Families
- **Primary**: 'Inter', a clean and modern sans-serif font chosen for its excellent readability at various sizes.
- **Monospace**: 'Roboto Mono', used for code snippets and numerical data that requires clear distinction between characters.

## Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Type Scale
The following type scale provides a harmonious and hierarchical set of text styles.

| Style | Size / Line Height | Weight | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | 2.5rem / 1.2 | 700 | -0.02em | Main page titles |
| **H2** | 2rem / 1.3 | 700 | -0.015em | Section titles |
| **H3** | 1.75rem / 1.4 | 600 | -0.01em | Sub-section titles |
| **H4** | 1.5rem / 1.5 | 600 | 0em | Card titles |
| **H5** | 1.25rem / 1.5 | 600 | 0.01em | Minor headings |
| **Body Large** | 1.125rem / 1.6 | 400 | 0em | Lead paragraphs |
| **Body** | 1rem / 1.7 | 400 | 0em | Main content |
| **Body Small** | 0.875rem / 1.5 | 400 | 0em | Captions, metadata |
| **Label** | 0.875rem / 1.5 | 600 | uppercase | Buttons, form labels |
| **Code** | 0.875rem / 1.5 | 400 | 0em | Code snippets |

## Responsive Typography
- **Mobile**: Base font size is 14px to ensure readability on small screens.
- **Desktop**: Base font size is 16px for optimal reading experience.

## Implementation Notes
Use the defined styles consistently. Avoid overriding line heights and letter spacing unless necessary for a specific component.
