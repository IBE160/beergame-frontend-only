---
title: 'Feature Design: Real-Time Game Dashboard'
description: 'Design overview for the real-time game dashboard feature (F003).'
feature: 'Real-Time Game Dashboard'
last-updated: 2025-09-22
version: 1.0.0
status: draft
related-files:
  - ./user-journey.md
  - ./screen-states.md
---

# Feature: Real-Time Game Dashboard (F003)

## 1. User Experience Analysis

- **Primary User Goal**: To have a clear, at-a-glance understanding of the current game state to make informed ordering decisions.
- **Success Criteria**: A player can identify their current inventory, incoming orders, and total costs within 5 seconds of looking at the dashboard.
- **Key Pain Points Addressed**: Prevents the cognitive overload of tracking multiple changing variables without a clear visual aid.
- **User Personas**: This is the primary screen for all players during the game.

## 2. Information Architecture

- **Content Hierarchy**:
    1.  **Global Status**: Current Week, Total Costs.
    2.  **Player's Key Metrics**: Inventory, Backlog, Incoming Shipment.
    3.  **Player's Action Area**: Order Input field and "Place Order" button.
    4.  **Supply Chain Visualization**: A view of the entire supply chain.
    5.  **Historical Data**: Charts showing trends over time.
- **Navigation Structure**: This is the main game screen. Navigation may include tabs or expandable sections for the charts and supply chain view.
- **Mental Model Alignment**: The layout should resemble a dashboard, with the most critical information given the most prominence.
- **Progressive Disclosure Strategy**: Key metrics are always visible. The historical charts might be in a separate tab or section to avoid cluttering the main view.
