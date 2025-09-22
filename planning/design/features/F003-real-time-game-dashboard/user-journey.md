---
title: 'User Journey: Real-Time Game Dashboard'
description: 'User journey for a player interacting with the game dashboard on a weekly basis.'
feature: 'Real-Time Game Dashboard'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# User Journey: Game Dashboard

### Core Experience Flow (Weekly Cycle)

**Step 1: Review Current State**
- **Trigger**: The game screen loads for the current week.
- **State Description**: The dashboard displays the latest numbers: current inventory, any new customer orders, and updated costs. An animation shows the arrival of new shipments.
- **Available Actions**: Review the metrics, analyze the charts, decide on an order quantity.
- **Visual Hierarchy**: The player's inventory and the new customer order are the most important pieces of information to process.
- **System Feedback**: Numbers are updated smoothly. A visual indicator (e.g., a glowing number) might highlight a newly arrived shipment.

**Step 2: Decision Making**
- **Task Flow**: The player assesses their situation. "My inventory is low, and a large order just came in. I need to order more." They might look at the historical charts to see the trend.
- **State Changes**: The user interacts with the charts (hovering, tooltips) to get more data.
- **Error Prevention**: N/A.

**Step 3: Place Order**
- **Task Flow**: The user types their desired order quantity into the input field and clicks "Place Order".
- **State Changes**: The input field accepts the number. The "Place Order" button has clear hover/active states.
- **Success State**: The order is accepted. The screen transitions to an "End of Week" summary before advancing to the next week.
- **Error Recovery**: If the user enters an invalid number (e.g., negative, text), the input field shows an error state, and the "Place Order" button is disabled.

### Edge Cases

- **Backlog**: If inventory is zero and orders cannot be filled, the "Backlog" metric becomes a prominent, negative number, likely colored in `error` red to draw immediate attention.
- **First Week**: The dashboard is in its initial state, with starting inventory and no historical data to show yet.
- **Last Week**: After placing the final order, the user is automatically taken to the Game Completion Summary screen.
