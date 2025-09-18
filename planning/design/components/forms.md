---
title: "Form Element Specifications"
description: "Design and usage specifications for form elements."
last-updated: 2025-09-18
version: 1.0
related-files:
  - ../design-system/style-guide.yaml
status: draft
---

# Form Element Specifications

## Overview
This document provides design specifications for form elements, including text inputs, sliders, and labels.

## Text Input
- **Style**: A simple input field with a border and a label.
- **States**:
  - **Default**: `border: 1px solid var(--neutral-400)`
  - **Focus**: `border-color: var(--primary); box-shadow: 0 0 0 2px var(--primary-light)`
  - **Error**: `border-color: var(--error); color: var(--error)`
  - **Disabled**: `background-color: var(--neutral-100); cursor: not-allowed`

## Slider
- **Style**: A range input with a custom track and thumb.
- **Track**: `height: 4px; background-color: var(--neutral-300)`
- **Thumb**: `width: 16px; height: 16px; background-color: var(--primary); border-radius: 50%`

## Label
- **Style**: `font-size: 0.875rem; font-weight: 600; color: var(--neutral-700)`
- **Association**: Labels must be programmatically associated with their form control using the `for` attribute.

## Accessibility
- All form inputs must have a corresponding label.
- Error messages must be programmatically associated with the input using `aria-describedby`.
- Ensure that the focus state is clear and visible.
