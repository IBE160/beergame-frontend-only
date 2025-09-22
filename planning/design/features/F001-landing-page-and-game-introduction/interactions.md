---
title: 'Interactions: Landing Page & Game Introduction'
description: 'Interaction patterns and animations for the landing page.'
feature: 'Landing Page & Game Introduction'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Interactions: Landing Page

## 1. CTA Button Interactions

- **Component**: `Button`
- **Element**: "Play Now" / "Resume Game"

| State | Visual Treatment | Animation |
|---|---|---|
| `Default` | Solid background (`accent_primary`), white text. | None. |
| `Hover` | Background darkens slightly (`accent_secondary`). | `150ms ease-out` transition on background color. A slight lift using box-shadow. |
| `Active` | Background darkens further. The button may scale down slightly (98%). | `150ms ease-out` transition. |
| `Focus` | A visible outline (using `primary` color) appears around the button. | `150ms ease-out` transition on the outline. |

## 2. Scrolling Animations

- **Trigger**: User scrolls down the page.
- **Animation**: As sections scroll into view, their content can have a subtle "fade-in and slide-up" animation.
- **Details**:
    - **Duration**: `400ms`
    - **Easing**: `ease-out`
    - **Property**: `opacity` and `transform: translateY()`
- **Purpose**: To create a smooth and engaging discovery experience without being distracting.
- **Accessibility**: This animation will be disabled if `prefers-reduced-motion` is active.

## 3. Page Load Animation

- **Trigger**: Initial page load.
- **Animation**: The main headline and sub-headline fade in.
- **Details**:
    - **Duration**: `600ms`
    - **Easing**: `ease-out`
    - **Property**: `opacity`
- **Purpose**: To create a polished and professional first impression.
