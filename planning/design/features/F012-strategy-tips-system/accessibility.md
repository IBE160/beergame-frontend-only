---
title: 'Accessibility: Strategy Tips System'
description: 'Accessibility for the strategy tips component.'
feature: 'Strategy Tips System'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Accessibility: Strategy Tips

- **ARIA Live Region**: The container for the toast notifications will be an `aria-live` region, so the tips are announced by screen readers as they appear.
- **Focus**: The toasts should not steal focus from the user's current task.
- **Dismissible**: The toasts must be easily dismissible by keyboard users.
