---
title: 'Implementation: Interactive Tutorial Mode'
description: 'Implementation notes for the interactive tutorial.'
feature: 'Interactive Tutorial Mode'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Interactive Tutorial

- **Library**: A library like [React Joyride](https://react-joyride.com/) or [Shepherd.js](https://shepherdjs.dev/) can be used to create the tutorial overlay and tooltips. These libraries handle many of the complexities of focus management and highlighting.
- **State**: The tutorial will have its own state machine to track the user's progress through the steps.
- **Trigger**: The tutorial can be triggered by a query parameter in the URL (e.g., `/game?tutorial=true`), which makes it easy to start from the landing page.
