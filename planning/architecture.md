# Architecture Document: Beer Game Supply Chain Simulation (v4 - Final)

## 1. Executive Summary

This document provides the complete technical architecture for the Beer Game Supply Chain Simulation. It serves as the definitive blueprint for all engineering work.

- **Project Overview**: A frontend-only, single-player, web-based application that simulates the classic MIT Beer Game. The primary goal is to create an engaging and educational experience that teaches core supply chain principles like the bullwhip effect.

- **Key Architectural Decisions**:
    1.  **Frontend-Only**: To ensure accessibility and simplify deployment, the application will be entirely client-side with no backend dependency.
    2.  **Centralized Logic Controller**: A non-UI `GameController` will manage all business logic, separating it from the state and view layers.
    3.  **Global State Management**: A lightweight global store (Zustand) will hold the game state, acting as a single source of truth.
    4.  **Component-Based UI**: The user interface will be built with modular, reusable React components.

- **Technology Stack**: **Next.js (App Router)** with **TypeScript**, **Zustand** for state, and **Tailwind CSS** for styling.

- **Critical Constraints**: The application must function entirely within the user's browser, relying on **Local Storage** for state persistence. This imposes a data size limit (approx. 5MB) and necessitates a design that supports offline functionality after the initial load.

## 2. For Backend Engineers

This is a frontend-only project. No backend services are required. All data and game logic are handled client-side.

## 3. For Frontend Engineers

This section provides a complete guide for building the application.

### 3.1. Technology Stack Rationale

-   **Framework: Next.js 14+ (App Router)**: Chosen for its hybrid rendering capabilities, file-based routing, performance optimizations (code-splitting, prefetching), and excellent developer experience.
-   **Language: TypeScript**: Ensures type safety, which is critical for a complex state model like the Beer Game. It improves maintainability and reduces runtime errors.
-   **State Management: Zustand**: A minimal, fast, and scalable state management library. It's simpler than Redux and avoids the need for extensive boilerplate or context providers.
-   **Styling: Tailwind CSS**: A utility-first CSS framework that allows for rapid and consistent UI development directly within the markup.

### 3.2. `src` Folder Structure

This structure separates concerns and promotes modularity.

```
src/
├── app/                # Next.js App Router: Pages and Layouts
│   ├── game/
│   │   └── page.tsx
│   ├── summary/
│   │   └── page.tsx
│   ├── layout.tsx      # Root Layout
│   └── page.tsx        # Home Page
├── components/         # Reusable React Components
│   ├── charts/         # Charting components
│   │   ├── HistoricalDataCharts.tsx
│   │   └── InventoryChart.tsx
│   ├── game/           # Game-specific components
│   │   ├── Dashboard.tsx
│   │   ├── OrderPlacement.tsx
│   │   └── SupplyChainVisualizer.tsx
│   ├── layout/         # Page layout components (Header, Footer)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/             # Generic, reusable UI elements
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Slider.tsx
├── constants/          # Application-wide constants
│   └── game.ts
├── controller/         # Core application logic
│   └── GameController.ts
├── hooks/              # Custom React hooks
│   └── useGameController.ts
├── lib/                # Utility functions and external services
│   ├── ai.ts
│   ├── localStorage.ts
│   └── utils.ts
├── store/              # Zustand global state store
│   └── gameStore.ts
├── styles/             # Global styles
│   └── globals.css
└── types/              # TypeScript type definitions
    └── index.ts
```

### 3.3. System Component Architecture

The architecture is designed around a clear separation of concerns: **View (React) -> State (Zustand) -> Logic (GameController)**.

1.  **View (React Components)**: The components are responsible only for rendering the UI based on the current state and forwarding user events to the `GameController`.
2.  **Logic (`GameController`)**: This class contains all the game's rules and business logic. It is instantiated within the React tree and interacts with the state management layer.
3.  **State (Zustand Store)**: The store holds the game state. It is updated exclusively by the `GameController`.

### 3.4. Component Implementation Guide

#### `app/game/page.tsx`
This Client Component is the main entry point for the game UI. It initializes the `GameController`.

-   **Code**:
    ```typescript
    "use client";
    import { useGameController } from '@/hooks/useGameController';
    // ... other imports

    export default function GamePage() {
      const gameController = useGameController();

      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ... child components ... */}
          <OrderPlacement gameController={gameController} />
        </div>
      );
    }
    ```

#### `components/game/Dashboard.tsx`
Displays the player's key metrics. It reads directly from the global store.

-   **Props**: None.
-   **State**: Subscribes to `currentWeek`, `settings`, and `roles` from `useGameStore`.
-   **Code**:
    ```typescript
    "use client";
    import { useGameStore } from '@/store/gameStore';
    // ...

    export const Dashboard = () => {
      const { currentWeek, settings, roles } = useGameStore();
      const playerState = roles[settings.playerRole];
      // ... render logic
    };
    ```

#### `components/game/OrderPlacement.tsx`
Handles user input for placing an order.

-   **Props**: `gameController: GameController`.
-   **State**: Local state for the input field: `const [orderQuantity, setOrderQuantity] = useState(0);`
-   **Events**: Calls `gameController.placePlayerOrder(orderQuantity)` on button click.
-   **Code**:
    ```typescript
    "use client";
    import { useState } from 'react';
    import { GameController } from '@/controller/GameController';
    // ...

    export const OrderPlacement = ({ gameController }) => {
      const [orderQuantity, setOrderQuantity] = useState(0);
      // ... event handlers
    };
    ```

### 3.5. State Management

-   **`store/gameStore.ts`**: The Zustand store will be minimal. It holds the state and provides selectors for components to subscribe to changes.

    ```typescript
    import create from 'zustand';
    import { GameState } from '@/types';

    export const useGameStore = create<GameState>((set) => ({
      gameId: '',
      settings: { playerRole: 'Retailer', duration: 20 },
      currentWeek: 0,
      roles: { /* initial state */ },
      history: [],
    }));
    ```

-   **`controller/GameController.ts`**: This class will contain the core game logic.

    ```typescript
    import { useGameStore } from '@/store/gameStore';
    import { GameState } from '@/types';

    export class GameController {
      constructor() {
        // The controller can get and set state directly
        const { getState, setState } = useGameStore;
      }

      public advanceWeek() {
        // 1. Fulfill incoming shipments
        // 2. Fulfill outgoing orders
        // 3. Update inventory and backlog
        // 4. Calculate costs
        // 5. Get AI orders
        // 6. Advance all shipments and orders in transit
        // 7. Update history and week number
      }
    }
    ```

## 4. Data Architecture Specifications

The data model is fully typed in `types/index.ts` to ensure consistency across the application.

-   **`Order`**: Represents a request for a quantity of beer from one role to another.
-   **`Shipment`**: Represents a delivery of a quantity of beer.
-   **`RoleState`**: Contains all the state for a single supply chain role (Retailer, etc.).
-   **`GameState`**: The top-level state object that contains everything and is persisted to Local Storage.

```typescript
// types/index.ts
export type Role = 'Retailer' | 'Wholesaler' | 'Distributor' | 'Factory';

export interface Order { /* ... */ }
export interface Shipment { /* ... */ }
export interface RoleState { /* ... */ }
export interface GameState { /* ... */ }
```

## 5. For QA Engineers

### 5.1. Testing Strategy

-   **Unit Tests (Jest)**: The `GameController` and all functions in `lib/` and `store/` must have comprehensive unit tests. The game logic is complex and must be validated independently of the UI.
-   **Component Tests (React Testing Library)**: All UI components will be tested to ensure they render correctly based on props and state. User interactions will be simulated to test event handlers.
-   **E2E Tests (Cypress)**: A full gameplay scenario will be tested end-to-end, from starting a new game to viewing the summary screen.

### 5.2. Key Areas to Test

-   **Game Logic**: The turn-advancement logic in `GameController` is the most critical part of the application.
-   **State Persistence**: Test that the game state is correctly saved to and loaded from Local Storage.
-   **Edge Cases**: Test for edge cases like placing an order of 0, handling large backlogs, and the game ending.

## 6. For Security Analysts

-   **Threat Model**: The primary threat is Cross-Site Scripting (XSS) from third-party libraries. There is no server-side threat.
-   **Mitigation**:
    1.  **Dependency Scanning**: Use `npm audit` and Snyk to regularly scan for vulnerabilities in dependencies.
    2.  **Content Security Policy (CSP)**: Implement a strict CSP to prevent loading of untrusted scripts.
    3.  **Input Sanitization**: While the risk is low, all user input (the order quantity) will be sanitized to ensure it is a number.

## 7. Performance and Scalability

-   **Performance**: The main performance concern is the re-rendering of the UI as the game state changes each week. This will be mitigated by:
    -   Using memoization (`React.memo`) for expensive components.
    -   Using granular selectors in Zustand to prevent unnecessary re-renders.
-   **Scalability**: As a frontend-only application, scalability is handled by the user's browser. The application is designed to be lightweight to run smoothly on modern devices.