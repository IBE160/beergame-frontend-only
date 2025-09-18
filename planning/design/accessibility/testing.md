---
title: "Accessibility Testing"
description: "Procedures and tools for accessibility testing."
last-updated: 2025-09-18
version: 1.0
status: draft
---

# Accessibility Testing

## Overview
This document outlines our process for testing the accessibility of the Beer Game application.

## Automated Testing
We use automated tools to catch common accessibility violations. These tools are integrated into our development workflow.
- **Tools**: Axe, Lighthouse
- **Process**: Run scans on every pull request.

## Manual Testing
Manual testing is crucial for identifying issues that automated tools cannot.
- **Process**:
  - **Keyboard Navigation**: Test all interactive elements using only the keyboard.
  - **Screen Reader Testing**: Test with NVDA and VoiceOver to ensure a good experience for visually impaired users.
  - **Color Contrast**: Use a color contrast checker to verify all text and UI elements.

## User Testing
We will conduct user testing with people with disabilities to gather feedback and identify areas for improvement.
