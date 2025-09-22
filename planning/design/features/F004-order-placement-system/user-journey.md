---
title: 'User Journey: Order Placement System'
description: 'User journey for placing a weekly order.'
feature: 'Order Placement System'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# User Journey: Order Placement

### Core Experience Flow

**Step 1: Decision**
- **Trigger**: The user has reviewed the dashboard and decided on an order quantity.
- **Task Flow**: The user navigates to the order input field.

**Step 2: Input**
- **Task Flow**: The user types a number into the input field.
- **State Changes**: The input field displays the number.
- **Error Prevention**: The input field only accepts non-negative integers. An error message appears if the user tries to enter other characters.

**Step 3: Submission**
- **Task Flow**: The user clicks the "Place Order" button.
- **Success State**: The order is confirmed, and the game advances to the next week.
- **Edge Case**: If the order is unusually large (e.g., >100), a confirmation modal appears to prevent costly mistakes.
