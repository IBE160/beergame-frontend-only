---
title: 'Screen States: Real-Time Game Dashboard'
description: 'Screen states and specifications for the main game dashboard.'
feature: 'Real-Time Game Dashboard'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Screen States: Game Dashboard

## Screen: Main Dashboard

**Purpose**: To provide the player with all the necessary information and controls to play the game.

### State: Default (In-Progress Week)

**Visual Design Specifications**:
- **Layout**: A multi-panel layout. A top bar for global status (Week, Cost). A main panel for the player's key metrics and order input. Side or bottom panels for the supply chain view and historical charts.
- **Typography**: Use `h3` or `h4` for panel titles. Key metrics should use a large, bold font for easy reading.
- **Color Application**: The UI is predominantly neutral to let the data stand out. Semantic colors are used for alerts (e.g., red for backlogs, green for high inventory).
- **Interactive Elements**: The order input field and "Place Order" button are the primary interactive elements.

### State: Backlog / Stockout

**Visual Design Specifications**:
- **Layout**: Same as default.
- **Visual Hierarchy**: The "Backlog" metric becomes the most prominent element on the screen. Its text color changes to `error` red, and an icon might appear next to it.
- **Feedback**: This state is designed to create a sense of urgency.

### State: End of Week Transition

**Visual Design Specifications**:
- **Layout**: A modal overlay or a brief full-screen transition can be used to summarize the week's events.
- **Content**: Shows the order being placed and the shipment moving. This provides feedback on the player's action.
- **Animation**: The screen animates to the next week, with numbers updating in a visually pleasing way (e.g., a quick count-up animation).

**Responsive Design Specifications**:
- **Mobile (320-767px)**: The layout becomes a single-column feed. The key metrics and order input are at the top. The supply chain view and charts are in collapsible sections or separate tabs below.
- **Tablet/Desktop (768px+)**: The full multi-panel dashboard is displayed, allowing the user to see all information at once.
