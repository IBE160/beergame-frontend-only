---
title: Accessibility Testing Procedures
description: How we test for accessibility to ensure compliance and usability.
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Accessibility Testing

We use a combination of automated tools and manual testing to ensure our application is accessible.

## Automated Testing

- **Tooling**: We use tools like [Axe](https://www.deque.com/axe/) and [Lighthouse](https://developers.google.com/web/tools/lighthouse) to automatically scan for common accessibility issues.
- **Process**: Automated scans are run as part of our continuous integration process to catch regressions.

## Manual Testing

Automated tools can only catch a fraction of accessibility issues. Manual testing is essential to ensure a truly usable experience.

- **Keyboard Navigation**: We manually test every interactive element to ensure it is reachable and operable with only a keyboard.
- **Screen Reader Testing**: We test the application with popular screen readers like [NVDA](https://www.nvaccess.org/) and [VoiceOver](https://www.apple.com/voiceover/info/guide/10.14/) to ensure the content is announced logically and all interactions are clear.
- **Color Contrast Checks**: We use tools to manually check that all color combinations meet WCAG contrast requirements.
