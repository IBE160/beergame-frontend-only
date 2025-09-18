---
title: Motion and Animation System
description: Defines the principles, timing, and easing functions for animations in the Beer Game application.
last-updated: 2025-09-18
version: 1.0
related-files:
  - ../style-guide.yaml
status: draft
---

# Motion and Animation System

## Overview
This document outlines the motion design principles and specifications for the project. Animations are used purposefully to enhance the user experience by providing feedback, guiding focus, and creating a sense of fluidity.

## Principles
- **Performance**: Animations must be smooth (60fps) and optimized for web performance.
- **Purpose**: Every animation should have a clear purpose, such as indicating a state change or improving spatial awareness.
- **Consistency**: Similar interactions should use consistent animation patterns.
- **Accessibility**: Respect the `prefers-reduced-motion` media query to disable non-essential animations for users who are sensitive to motion.

## Timing Functions
- **Ease Out**: `cubic-bezier(0.0, 0, 0.2, 1)` - For elements entering the screen.
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.6, 1)` - For elements that move across the screen.

## Duration Scale
- **Micro**: `150ms` - For small, subtle feedback animations (e.g., hover effects).
- **Short**: `250ms` - For small component transitions (e.g., fading in/out).
- **Medium**: `400ms` - For larger UI transitions (e.g., panel sliding).
- **Long**: `600ms` - For major page transitions.

## Implementation Notes
Use the defined duration and timing functions to ensure consistency. All animations should be implemented using CSS transitions or transforms to leverage hardware acceleration. Avoid animating properties that are not performant, such as `width`, `height`, `top`, or `left`.
