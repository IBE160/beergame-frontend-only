---
title: 'Implementation: Demand Pattern Display'
description: 'Implementation notes for the demand pattern display component.'
feature: 'Demand Pattern Display'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Demand Pattern

- **Logic**: The demand pattern is a simple rule in the game engine:
    ```javascript
    function getCustomerDemand(week) {
      return week < 5 ? 4 : 8;
    }
    ```
- **Component**: This will be another instance of the `MetricCard` component, passing in the demand data.
