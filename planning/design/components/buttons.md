---
title: Button Specifications
description: Design and interaction specifications for button components.
last-updated: 2025-09-22
version: 1.0.0
status: approved
---

# Buttons

## Primary Button

Used for the main call to action on a page.

- **Component**: `Button`
- **Variants**: Primary
- **States**: Default, Hover, Active, Focus, Disabled

### Visual Specifications
- **Height**: 44px (Medium)
- **Padding**: `12px 24px`
- **Border Radius**: `8px`
- **Background**: `accent_primary` (#FFBF00)
- **Typography**: `body`, Bold (700), white text

### Interaction Specifications
- **Hover**: Background darkens to `accent_secondary` (#E6A200). `150ms ease-out` transition.
- **Active**: Background darkens further. Button scales to 98%.
- **Focus**: A 2px solid outline in `primary` color (#005A9C).
- **Disabled**: Background is `neutral_200`, text is `neutral_500`.

## Secondary Button

Used for secondary actions.

- **Component**: `Button`
- **Variants**: Secondary

### Visual Specifications
- **Height**: 44px (Medium)
- **Padding**: `12px 24px`
- **Border Radius**: `8px`
- **Border**: `1px solid neutral_400`
- **Background**: `white`
- **Typography**: `body`, SemiBold (600), `neutral_900` text

### Interaction Specifications
- **Hover**: Background changes to `neutral_50`. `150ms ease-out` transition.
- **Active**: Background changes to `neutral_100`.
- **Focus**: A 2px solid outline in `primary` color.
- **Disabled**: Background is `neutral_100`, text is `neutral_500`, border is `neutral_200`.
