---
title: Accessibility Guidelines
description: Core accessibility principles and guidelines for the Beer Game simulation.
last-updated: 2025-09-22
version: 1.0.0
status: draft
related-files:
  - ../design-system/style-guide.yaml
---

# Accessibility Guidelines

## 1. Our Commitment

We are committed to making the Beer Game Supply Chain Simulation accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our application and in doing so adhere to many of the available standards and guidelines.

Our goal is to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA.

## 2. Core Principles

Our design and development process will be guided by the four main principles of accessibility (POUR):

-   **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
-   **Operable**: User interface components and navigation must be operable.
-   **Understandable**: Information and the operation of the user interface must be understandable.
-   **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

## 3. Key Guidelines

### Color and Contrast
-   All text must have a contrast ratio of at least **4.5:1** against its background (WCAG AA).
-   Large text (18pt/24px or 14pt/18.5px bold) must have a contrast ratio of at least **3:1**.
-   Color should not be the only means of conveying information or indicating an action.

### Keyboard Navigation
-   All interactive elements must be reachable and operable using only the keyboard.
-   The tab order must be logical and intuitive.
-   A visible focus indicator must be present for all interactive elements when they receive keyboard focus.

### Screen Readers
-   Use semantic HTML to properly define headings, lists, landmarks, and other content structures.
-   Provide appropriate `alt` text for all meaningful images.
-   Use ARIA (Accessible Rich Internet Applications) roles and attributes to add necessary semantics to custom components.

### Motion
-   Respect the `prefers-reduced-motion` media query. All non-essential animations should be disabled when this is active.

## 4. Testing

Accessibility will be tested throughout the development process using a combination of automated tools and manual checks.

-   **Automated Tools**: Axe, Lighthouse
-   **Manual Testing**: Keyboard-only navigation, screen reader testing (NVDA, VoiceOver).
