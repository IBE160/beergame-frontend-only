# Architecture Document: Beer Game Supply Chain Simulation (v2)

## 1. Executive Summary

This document outlines the technical architecture for the Beer Game Supply Chain Simulation, a web-based, single-player educational game. This is an enhanced version of the original architecture document, with more detailed implementation patterns, code examples, and a proposed folder structure.

- **Project Overview**: A frontend-only application that simulates the classic Beer Game, designed to be accessible, educational, and engaging without requiring a backend or multiple participants.
- **Technology Stack**: The application will be built using **Next.js** with **TypeScript** for the core framework, **Tailwind CSS** for styling, and **Zustand** for state management. **Chart.js** will be used for data visualization. This stack was chosen for its strong developer experience, performance, and alignment with modern web standards.
- **System Components**: The architecture is component-based, centered around a main `GameProvider` that manages state. Key components include the `Dashboard`, `OrderPlacement`, `SupplyChainVisualizer`, and `HistoricalDataCharts`.
- **Critical Constraints**: The application is entirely client-side, relying on browser local storage for persistence. This imposes a 5MB data limit and requires an architecture that supports offline functionality.

## 2. `src` Folder Structure

A well-organized folder structure is crucial for maintainability. The following structure is proposed:

```
src/
├── app/
│   ├── game/
│   │   └── page.tsx
│   ├── summary/
│   │   └── page.tsx
│   └── layout.tsx
│   └── page.tsx
├── components/
│   ├── charts/
│   │   ├── HistoricalDataCharts.tsx
│   │   └── InventoryChart.tsx
│   ├── game/
│   │   ├── Dashboard.tsx
│   │   ├── OrderPlacement.tsx
│   │   └── SupplyChainVisualizer.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Slider.tsx
├── constants/
│   ├── game.ts
│   └── index.ts
├── hooks/
│   └── useGameStore.ts
├── lib/
│   ├── ai.ts
│   ├── localStorage.ts
│   └── utils.ts
├── store/
│   └── gameStore.ts
└── types/
    └── index.ts
```

## 3. For Frontend Engineers

### Component Architecture and State Management

- **Component Structure**: The application will follow a modular, component-based architecture. Components will be organized by feature (e.g., `components/game/Dashboard.tsx`, `components/charts/InventoryChart.tsx`).
- **State Management**: **Zustand** will be used for global state management. A central `gameStore` will hold the entire game state, including the state of each supply chain role, the current week, and historical data. This provides a single source of truth and simplifies state updates.
- **Component State**: Local component state (e.g., UI toggles, form inputs) will be managed using React's `useState` and `useReducer` hooks where appropriate.

### Zustand Store (`store/gameStore.ts`)

The Zustand store will be the single source of truth for the game state.

```typescript
import create from 'zustand';
import { GameState, Role } from '@/types';

interface GameActions {
  placeOrder: (role: Role, quantity: number) => void;
  advanceWeek: () => void;
  // ... other actions
}

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  gameId: '',
  playerRole: 'Retailer',
  duration: 20,
  currentWeek: 1,
  roles: {
    // ... initial role states
  },
  history: [],
  placeOrder: (role, quantity) => {
    // ... logic to place an order
  },
  advanceWeek: () => {
    // ... complex logic to advance the game by one week
    // This will involve:
    // 1. Updating shipments
    // 2. Fulfilling orders
    // 3. Calculating costs
    // 4. Running the AI for other roles
    // 5. Updating the history
  },
}));
```

### React Component Example (`components/game/Dashboard.tsx`)

Components will connect to the Zustand store to access state and actions.

```typescript
import React from 'react';
import { useGameStore } from '@/hooks/useGameStore';
import { Card } from '@/components/ui/Card';

export const Dashboard = () => {
  const { currentWeek, roles, playerRole } = useGameStore();
  const playerState = roles[playerRole];

  return (
    <Card>
      <h2 className="text-xl font-bold">Week: {currentWeek}</h2>
      <p>Inventory: {playerState.inventory}</p>
      <p>Backlog: {playerState.backlog}</p>
      <p>Cost: ${playerState.cost.toFixed(2)}</p>
    </Card>
  );
};
```

### Local Storage Persistence (`lib/localStorage.ts`)

A utility module will handle saving and loading the game state from local storage.

```typescript
import { GameState } from '@/types';

const GAME_STATE_KEY = 'beer-game-state';

export const saveState = (state: GameState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(GAME_STATE_KEY, serializedState);
  } catch (e) {
    console.error("Could not save game state", e);
  }
};

export const loadState = (): GameState | undefined => {
  try {
    const serializedState = localStorage.getItem(GAME_STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load game state", e);
    return undefined;
  }
};
```

### AI Manager (`lib/ai.ts`)

The AI for the non-player roles will be managed in a dedicated module.

```typescript
import { RoleState } from '@/types';

// A simple AI strategy: try to maintain a target inventory level
const TARGET_INVENTORY = 20;

export const getAIOrder = (roleState: RoleState): number => {
  const { inventory, incomingOrders } = roleState;
  const effectiveInventory = inventory + incomingOrders.reduce((a, b) => a + b, 0);
  const deficit = TARGET_INVENTORY - effectiveInventory;
  
  // A simple heuristic: order the deficit, but not less than 0
  const order = Math.max(0, deficit);
  
  // Add some randomness to simulate human behavior
  const randomFactor = Math.random() * 0.2 + 0.9; // between 0.9 and 1.1
  return Math.round(order * randomFactor);
};
```

## 4. For QA Engineers

### Testing Strategy

- **Unit Tests**: Jest and React Testing Library will be used to test individual components and utility functions. The AI logic and game state transformations in the Zustand store are prime candidates for unit tests.
- **Integration Tests**: The interaction between components and the Zustand store will be tested to ensure that the UI correctly reflects the game state.
- **End-to-End (E2E) Tests**: Cypress or Playwright could be used to simulate a full game playthrough, from configuration to the summary screen.

## 5. For Security Analysts

### Security Model

- **Client-Side Only**: As a frontend-only application, the attack surface is limited. There is no server to attack and no user data is transmitted over the network.
- **Input Sanitization**: All user input (primarily the order quantity) will be sanitized to prevent any potential XSS vectors, although the risk is minimal as this data is not rendered as HTML.
- **Third-Party Libraries**: All third-party libraries will be regularly audited for vulnerabilities using `npm audit`.

## 6. Technology Stack Architecture

### Frontend Architecture

- **Framework**: **Next.js 14+ (App Router)** with **TypeScript**.
  - *Rationale*: Next.js provides a robust framework for building React applications with excellent performance and developer experience. The App Router simplifies routing and layouts. TypeScript adds static typing for improved code quality.
- **State Management**: **Zustand**.
  - *Rationale*: Zustand is a small, fast, and scalable state management solution that is simpler to use than Redux. It's a good fit for the complexity of the Beer Game's state.
- **Styling**: **Tailwind CSS**.
  - *Rationale*: Tailwind CSS allows for rapid UI development with a utility-first approach, which is ideal for this project.
- **Charts**: **Chart.js** with `react-chartjs-2`.
  - *Rationale*: Chart.js is a powerful and flexible charting library that can create the required historical data charts.

### Backend Architecture

- **No Backend**: This is a frontend-only application.

### Database and Storage

- **Primary Storage**: **Browser Local Storage**.
  - *Rationale*: Local storage is sufficient for persisting the game state for a single-player experience and avoids the complexity of a backend.

## 7. System Component Architecture

### Core Components

- **`GameProvider`**: A high-level component that initializes the Zustand store and provides it to the rest of the application.
- **`Dashboard`**: Displays the current game state (inventory, orders, costs).
- **`OrderPlacement`**: The form for the player to place their weekly order.
- **`SupplyChainVisualizer`**: A visual representation of the four supply chain tiers and the flow of goods and orders.
- **`HistoricalDataCharts`**: A set of charts displaying the player's performance over time.
- **`AIManager`**: A non-UI module that contains the logic for the AI-controlled players.

## 8. Data Architecture Specifications

### Entity Design

The primary entity is the `GameState`, which is a single object stored in local storage.

- **`GameState`** (`types/index.ts`):
  ```typescript
  export type Role = 'Retailer' | 'Wholesaler' | 'Distributor' | 'Factory';

  export interface RoleState {
    inventory: number;
    backlog: number;
    incomingOrders: number[];
    shipments: number[];
    cost: number;
  }

  export interface WeekData {
    week: number;
    inventory: number;
    order: number;
    cost: number;
  }

  export interface GameState {
    gameId: string;
    playerRole: Role;
    duration: number;
    currentWeek: number;
    roles: Record<Role, RoleState>;
    history: WeekData[];
  }
  ```

## 9. API Contract Specifications

- **No API**: There are no API contracts as this is a frontend-only application.

## 10. Security and Performance Foundation

### Security Architecture

- **Content Security Policy (CSP)**: A strict CSP will be implemented via meta tags to mitigate the risk of XSS attacks.
- **Input Validation**: The order input will be strictly validated to ensure it is a non-negative integer.

### Performance Architecture

- **Caching**: The application will be served with aggressive caching headers. A service worker will be implemented to enable offline play.
- **Asset Optimization**: Next.js will automatically optimize images. SVGs will be used for icons and visualizations where possible.