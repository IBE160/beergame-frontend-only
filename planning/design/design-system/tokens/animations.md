---
title: Motion and Animation System
description: Defines the principles, timing, and easing functions for animations in the Beer Game simulation.
last-updated: 2025-09-22
version: 1.0.0
status: approved
related-files:
  - ../style-guide.yaml
---

# Motion and Animation

## Overview
Motion is used purposefully to guide users, provide feedback, and enhance the user experience without being distracting. Our animations are designed to be quick, fluid, and consistent, adhering to the principles of performance and accessibility.

## Animation Principles

1.  **Functional**: Every animation must have a purpose, such as indicating a state change or directing attention.
2.  **Performant**: Animations must be smooth (targeting 60fps) and should prioritize hardware-accelerated CSS properties (`transform`, `opacity`).
3.  **Consistent**: Similar interactions should use consistent animation patterns.
4.  **Accessible**: We must respect the `prefers-reduced-motion` media query to disable or reduce animations for users who are sensitive to motion.

## Duration Scale

| Name | Value | Usage |
|---|---|---|
| `micro` | 150ms | Micro-interactions like hover effects. |
| `short` | 250ms | State changes, fade-ins, and other subtle feedback. |
| `medium` | 400ms | Panel transitions and more significant element movements. |
| `long` | 600ms | Full-screen or complex transitions. |

## Easing Functions

| Name | Value | Usage |
|---|---|---|
| `ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | For elements entering the screen. The fast start makes it feel responsive. |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.6, 1)` | For elements that move from one point to another on the screen. |

## Common Animations

- **Fade In**: Used for new elements appearing on the screen.
  - `animation: fadeIn 250ms ease-out;`
- **Slide In**: Used for panels or menus appearing from the side.
  - `animation: slideIn 400ms ease-out;`
- **Hover/Focus**: Used for interactive elements to indicate they are clickable.
  - `transition: all 150ms ease-out;`
