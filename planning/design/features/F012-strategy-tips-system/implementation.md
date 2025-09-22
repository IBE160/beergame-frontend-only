---
title: 'Implementation: Strategy Tips System'
description: 'Implementation notes for the strategy tips component.'
feature: 'Strategy Tips System'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Strategy Tips

- **Library**: A library like [React Hot Toast](https://react-hot-toast.com/) or [Notistack](https://notistack.com/) can be used to manage the toast notifications.
- **Logic**: A rules engine will run after each week to check if any conditions for showing a tip have been met. The engine will also ensure that the same tip is not shown repeatedly.
- **Content**: The tips themselves will be stored in a simple array of objects.
