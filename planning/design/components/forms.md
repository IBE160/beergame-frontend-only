---
title: Form Specifications
description: Design specifications for form elements like inputs and sliders.
last-updated: 2025-09-22
version: 1.0.0
status: approved
---

# Form Elements

## Text Input

Used for the order placement system.

- **Component**: `Input`

### Visual Specifications
- **Height**: 44px
- **Padding**: `12px 16px`
- **Border Radius**: `8px`
- **Border**: `1px solid neutral_400`
- **Background**: `white`
- **Typography**: `body`

### Interaction Specifications
- **Focus**: Border color changes to `primary` color.
- **Error**: Border color changes to `error` color.
- **Disabled**: Background is `neutral_100`.

## Slider

Used for the game duration and speed controls.

- **Component**: `Slider`

### Visual Specifications
- **Track Height**: 8px
- **Track Background**: `neutral_200`
- **Track Fill Background**: `primary` color
- **Handle Size**: 20px diameter
- **Handle Background**: `primary` color
- **Handle Shadow**: `0 2px 4px rgba(0, 0, 0, 0.2)`
