---
title: 'Interactions: Real-Time Game Dashboard'
description: 'Interaction patterns and animations for the game dashboard.'
feature: 'Real-Time Game Dashboard'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Interactions: Game Dashboard

## 1. Order Input

- **Component**: `Input` field
- **Interaction**: Standard text input, but restricted to numbers.
- **Feedback**: 
    - **Validation**: Inline validation provides immediate feedback if the user types a non-numeric or negative value.
    - **Focus**: The input field has a clear focus state (e.g., a colored border).

## 2. "Place Order" Button

- **Component**: `Button`
- **Interaction**: This is the primary action for each week.
- **Feedback**: 
    - **States**: Standard `default`, `hover`, `active`, `focus`, and `disabled` states.
    - **Loading**: After clicking, the button could enter a loading state (e.g., showing a spinner) to indicate the system is processing the turn. This prevents double-clicks.

## 3. Data Updates (Week Transition)

- **Trigger**: The game advances to the next week.
- **Animation**: Instead of numbers just appearing, they should animate to their new values.
- **Details**:
    - **Type**: A "count-up" or "count-down" animation.
    - **Duration**: `400ms`
    - **Easing**: `ease-out`
- **Purpose**: To make the state change feel dynamic and alive, and to clearly show what has changed.

## 4. Chart Interactions

- **Component**: `Chart`
- **Interaction**: 
    - **Hover**: Hovering over the chart reveals a tooltip with the exact data for that point in time.
    - **Pan/Zoom**: On larger charts (for longer games), the user can pan and zoom to inspect the data more closely.
- **Animation**: The chart lines can animate in when the page first loads or when the data is updated.
