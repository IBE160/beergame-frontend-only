---
title: 'Implementation: Game Configuration Setup'
description: 'Developer handoff and implementation notes for the game configuration screen.'
feature: 'Game Configuration Setup'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Implementation Notes: Game Configuration

## State Management

- **Local State**: This screen will manage its own state using React's `useState` for the selected role and duration.
    - `const [selectedRole, setSelectedRole] = useState(null);`
    - `const [duration, setDuration] = useState(20);`
- **Button State**: The "Start Game" button's `disabled` attribute will be tied to these state variables:
    - `disabled={!selectedRole || !duration}`
- **On Submit**: When the user clicks "Start Game", the selected configuration will be saved to `localStorage` and the user will be redirected to the main game page (`/game`).

## Component Breakdown

- **RoleCard.tsx**: A reusable component for the selection cards. It should take `roleName`, `description`, `isSelected`, and `onClick` as props.
- **Slider.tsx**: A reusable slider component. It should be built on top of a headless UI library (like Radix or Headless UI) to ensure accessibility.

## Data Persistence

- **`localStorage`**: Upon starting the game, create a JSON object in `localStorage` to hold the game settings.
    ```json
    {
      "gameSettings": {
        "playerRole": "Retailer",
        "duration": 25
      },
      "gameState": { ... } // To be populated by the game itself
    }
    ```

## API Integration Points

- None. This screen is fully client-side.
