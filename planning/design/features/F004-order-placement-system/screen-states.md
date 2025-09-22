---
title: 'Screen States: Order Placement System'
description: 'Screen states for the order placement component.'
feature: 'Order Placement System'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Screen States: Order Placement

## Component: Order Input Area

### State: Default

**Visual Design**: An input field with a label ("Your Order") and a primary action button ("Place Order").

### State: Input Error

**Visual Design**: The input field's border turns to `error` red. A small error message appears below the input (e.g., "Please enter a valid number"). The "Place Order" button is disabled.

### State: Confirmation Modal

**Visual Design**: A modal overlay appears, asking the user to confirm their large order. It contains "Confirm" and "Cancel" buttons.
