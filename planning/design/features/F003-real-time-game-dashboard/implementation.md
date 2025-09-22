---
title: 'Implementation: Real-Time Game Dashboard'
description: 'Developer handoff and implementation notes for the game dashboard.'
feature: 'Real-Time Game Dashboard'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Game Dashboard

## State Management

- **Global State**: This screen is the heart of the application and will require a robust state management solution (like Zustand or React Context with useReducer).
- **State Shape**: The global state should contain the entire game state, including:
    ```typescript
    interface GameState {
      week: number;
      playerRole: Role;
      // ... other settings
      supplyChain: {
        [role: string]: {
          inventory: number;
          backlog: number;
          incomingOrders: number[];
          shipmentsInTransit: number[];
        };
      };
      historicalData: any[];
    }
    ```
- **Game Loop**: The core logic will be a function that takes the current state and a player's order, and returns the new state for the next week. This function will be called when the "Place Order" button is clicked.

## Component Breakdown

- **Dashboard.tsx**: The main container component that holds all the panels.
- **MetricCard.tsx**: A reusable card to display a single key metric (e.g., "Inventory"). It should handle the number animation.
- **OrderInput.tsx**: The component containing the input field and the "Place Order" button.
- **SupplyChainVisualizer.tsx**: The component for the supply chain flow visualization (likely using SVG).
- **Charts.tsx**: A container for the historical data charts, using a library like Recharts or Chart.js.

## Performance Targets

- **State Updates**: All state updates and re-renders must complete in under 100ms to keep the UI feeling responsive.
- **Chart Performance**: Use memoization (`React.memo`) for chart components to prevent unnecessary re-renders. Consider virtualizing data if performance becomes an issue with very long games.

## API Integration Points

- None. The entire game logic is handled on the client side.
