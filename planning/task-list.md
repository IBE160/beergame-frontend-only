# Task list

## Goal with this task list
This document breaks down the development of the Beer Game Supply Chain Simulation into a series of granular, actionable tasks, integrating detailed design and architectural specifications. The goal is to provide a clear, implementation-ready roadmap for building the application.

## Tasks

### MVP

You can find the MVP definitions here: `@/planning/project-brief.md`.

#### Common tasks

- [x] Step 1: Project Setup
  - **Task**: Initialize a new Next.js project with TypeScript and Tailwind CSS. Configure ESLint and Prettier for code quality.
  - **Files**: 
    - `package.json`: Add dependencies.
    - `.eslintrc.json`: Configure ESLint.
    - `prettier.config.js`: Configure Prettier.
    - `tailwind.config.ts`: Configure Tailwind CSS.
    - `postcss.config.js`: Configure PostCSS.
    - `tsconfig.json`: Configure TypeScript.
  - **Step Dependencies**: None
  - **User Instructions**: Run `npx create-next-app@latest --typescript --tailwind --eslint .` to initialize the project.

- [x] Step 2: Folder Structure Setup
  - **Task**: Create the `src` folder and the directory structure as defined in the architecture document at `@planning/architecture.md`.
  - **Files**: 
    - `src/app/`
    - `src/components/`
    - `src/constants/`
    - `src/controller/`
    - `src/hooks/`
    - `src/lib/`
    - `src/store/`
    - `src/styles/`
    - `src/types/`
  - **Step Dependencies**: Step 1
  - **User Instructions**: Create the directories inside the `src` folder.

- [x] Step 3: Design Tokens Integration
  - **Task**: Translate the `design-tokens.json` into Tailwind CSS theme extensions. This includes colors, font sizes, spacing, and animation settings.
  - **Files**:
    - `tailwind.config.ts`: Extend the theme with custom tokens.
    - `src/styles/globals.css`: Define root CSS variables if necessary.
  - **Step Dependencies**: Step 1
  - **User Instructions**: Update `tailwind.config.ts` to include the design tokens for a consistent styling foundation.

- [x] Step 4: Global Styles and Layout
  - **Task**: Configure global styles in `globals.css` using the defined typography and color system. Set up the root layout in `app/layout.tsx` with the primary font.
  - **Files**: 
    - `src/styles/globals.css`: Apply base styles, including body background color and default text color from the design system.
    - `src/app/layout.tsx`: Set up the main HTML structure, import the 'Inter' font, and apply it to the body.
  - **Step Dependencies**: Step 2, Step 3
  - **User Instructions**: Populate the global stylesheet and the root layout file according to the design system.

- [ ] Step 5: UI Component Scaffolding
  - **Task**: Create placeholder files for all the reusable UI components defined in `planning/design/components`.
  - **Files**:
    - `src/components/ui/Button.tsx`
    - `src/components/ui/Card.tsx`
    - `src/components/ui/Input.tsx`
    - `src/components/ui/Slider.tsx`
    - `src/components/ui/Modal.tsx`
    - `src/components/ui/Tabs.tsx`
  - **Step Dependencies**: Step 2
  - **User Instructions**: Create the empty component files in the `src/components/ui` directory.

- [ ] Step 6: Build Button Component
  - **Task**: Implement the `Button` component with primary and secondary variants, and all interaction states (default, hover, active, focus, disabled) as specified in `buttons.md`.
  - **Files**:
    - `src/components/ui/Button.tsx`: Implement the component logic and styling.
  - **Step Dependencies**: Step 5
  - **User Instructions**: Build the `Button` component, ensuring all variants and states match the design specifications.

- [ ] Step 7: Build Card Component
  - **Task**: Implement the `Card` component, including the standard and selectable variants as specified in `cards.md`.
  - **Files**:
    - `src/components/ui/Card.tsx`: Implement the component logic and styling.
  - **Step Dependencies**: Step 5
  - **User Instructions**: Build the `Card` component with its variants.

- [ ] Step 8: Build Form Components
  - **Task**: Implement the `Input` and `Slider` components as specified in `forms.md`.
  - **Files**:
    - `src/components/ui/Input.tsx`: Implement the text input component.
    - `src/components/ui/Slider.tsx`: Implement the slider component.
  - **Step Dependencies**: Step 5
  - **User Instructions**: Build the form components, ensuring they are accessible.

- [ ] Step 9: Type Definitions
  - **Task**: Create all necessary TypeScript type definitions in `types/index.ts` as specified in the architecture document.
  - **Files**: 
    - `src/types/index.ts`: Define `Role`, `Order`, `Shipment`, `RoleState`, and `GameState`.
  - **Step Dependencies**: Step 2
  - **User Instructions**: Create the `index.ts` file in the `types` directory and add the type definitions.

- [ ] Step 10: State Management Setup
  - **Task**: Set up the Zustand store for global state management.
  - **Files**: 
    - `src/store/gameStore.ts`: Create the Zustand store with the initial `GameState`.
  - **Step Dependencies**: Step 9
  - **User Instructions**: Implement the `useGameStore` hook using Zustand.

- [ ] Step 11: Game Controller Stub
  - **Task**: Create a stub for the `GameController` class.
  - **Files**: 
    - `src/controller/GameController.ts`: Create the `GameController` class with a constructor and placeholder methods.
  - **Step Dependencies**: Step 10
  - **User Instructions**: Create the `GameController.ts` file and the basic class structure.

#### Feature tasks
- [ ] Step 12: F001 - Landing Page UI
  - **Task**: Create the landing page with a hero section, game description, and a "Start Game" button, following the design in `F001-landing-page-and-game-introduction/screen-states.md`.
  - **Files**: 
    - `src/app/page.tsx`: Implement the landing page UI using the `Button` component.
  - **Step Dependencies**: Step 4, Step 6
  - **User Instructions**: Build the UI for the landing page as a server component, ensuring it matches the design specifications.

- [ ] Step 13: F001 - How to Play Section
  - **Task**: Add the "How to Play" section to the landing page with game rules and a diagram of the supply chain.
  - **Files**: 
    - `src/app/page.tsx`: Add the new section.
  - **Step Dependencies**: Step 12
  - **User Instructions**: Add the instructional content to the landing page.

- [ ] Step 14: F002 - Game Configuration Page
  - **Task**: Create the game configuration page where players can select their role and the game duration, using the `Card` and `Slider` components.
  - **Files**: 
    - `src/app/game/page.tsx`: This will be the main game page, but will initially show the configuration screen.
    - `src/components/game/Configuration.tsx`: Create the configuration UI component.
  - **Step Dependencies**: Step 7, Step 8, Step 12
  - **User Instructions**: Build the game configuration UI, ensuring the `Card` components are selectable as per the design.

- [ ] Step 15: F002 - Game State Initialization
  - **Task**: Implement the logic in the `GameController` to initialize the game state based on the user's configuration.
  - **Files**: 
    - `src/controller/GameController.ts`: Add an `initializeGame` method.
    - `src/components/game/Configuration.tsx`: Call the `initializeGame` method when the user starts a game.
  - **Step Dependencies**: Step 11, Step 14
  - **User Instructions**: Implement the game initialization logic.

- [ ] Step 16: F003 - Game Dashboard UI
  - **Task**: Create the main game dashboard UI, which will display the player's metrics using `Card` components.
  - **Files**: 
    - `src/app/game/page.tsx`: Update to show the dashboard after configuration.
    - `src/components/game/Dashboard.tsx`: Create the dashboard component.
    - `src/components/game/MetricCard.tsx`: Create a specialized card for displaying metrics.
  - **Step Dependencies**: Step 7, Step 14
  - **User Instructions**: Build the UI for the game dashboard.

- [ ] Step 17: F004 - Order Placement UI
  - **Task**: Create the order placement component with an `Input` field and a "Place Order" `Button`.
  - **Files**: 
    - `src/components/game/OrderPlacement.tsx`: Create the order placement component.
    - `src/app/game/page.tsx`: Add the `OrderPlacement` component to the game page.
  - **Step Dependencies**: Step 6, Step 8, Step 16
  - **User Instructions**: Build the UI for placing orders.

- [ ] Step 18: F005, F007, F012, F015 - Game Logic Implementation
  - **Task**: Implement the core game logic in the `GameController` to handle advancing the week, processing orders, and calculating costs.
  - **Files**: 
    - `src/controller/GameController.ts`: Implement the `advanceWeek` method.
    - `src/lib/utils.ts`: Add utility functions for calculations.
  - **Step Dependencies**: Step 15, Step 17
  - **User Instructions**: Implement the core game logic. This is a complex step.

- [ ] Step 19: F006 - AI-Controlled Partners
  - **Task**: Implement the AI logic for the non-player roles.
  - **Files**: 
    - `src/lib/ai.ts`: Create the AI logic for making ordering decisions.
    - `src/controller/GameController.ts`: Integrate the AI logic into the `advanceWeek` method.
  - **Step Dependencies**: Step 18
  - **User Instructions**: Implement the AI for the other supply chain partners.

- [ ] Step 20: F007, F009, F010 - Historical Data and Charts
  - **Task**: Implement historical data tracking and display it on charts.
  - **Files**: 
    - `src/store/gameStore.ts`: Add a `history` array to the game state.
    - `src/controller/GameController.ts`: Update the history after each week.
    - `src/components/charts/HistoricalDataCharts.tsx`: Create the chart components.
    - `src/app/game/page.tsx`: Add the charts to the game page.
  - **Step Dependencies**: Step 18
  - **User Instructions**: Add charting capabilities to the application.

- [ ] Step 21: F008 - Game State Persistence
  - **Task**: Implement game state persistence using Local Storage.
  - **Files**: 
    - `src/lib/localStorage.ts`: Create functions to save and load the game state.
    - `src/store/gameStore.ts`: Integrate local storage with the Zustand store.
  - **Step Dependencies**: Step 10
  - **User Instructions**: Implement the logic to save and load the game from local storage.

- [ ] Step 22: F009 - Game Completion Summary
  - **Task**: Create the game completion summary page.
  - **Files**: 
    - `src/app/summary/page.tsx`: Create the summary page.
    - `src/controller/GameController.ts`: Add logic to detect the end of the game.
  - **Step Dependencies**: Step 20
  - **User Instructions**: Build the game summary page.

### Future features

- [ ] Step 23: F011 - Interactive Tutorial Mode
  - **Task**: Implement an interactive tutorial for new players.
  - **Files**: 
    - `src/components/game/Tutorial.tsx`: Create the tutorial component.
    - `src/app/game/page.tsx`: Add the tutorial to the game page.
  - **Step Dependencies**: Step 16
  - **User Instructions**: Create a tutorial to guide new users.

- [ ] Step 24: F012 - Strategy Tips System
  - **Task**: Implement a system to show contextual tips to the player.
  - **Files**: 
    - `src/components/game/Tips.tsx`: Create the tips component.
    - `src/app/game/page.tsx`: Add the tips to the game page.
  - **Step Dependencies**: Step 16
  - **User Instructions**: Implement the contextual tips system.

- [ ] Step 25: F014 - Difficulty Settings
  - **Task**: Add difficulty settings to the game configuration.
  - **Files**: 
    - `src/components/game/Configuration.tsx`: Add difficulty settings to the UI.
    - `src/lib/ai.ts`: Adjust the AI logic based on the difficulty.
  - **Step Dependencies**: Step 14, Step 19
  - **User Instructions**: Add difficulty settings to the game.

- [ ] Step 26: F013 - Bullwhip Effect Visualization
  - **Task**: Create a chart that visualizes the bullwhip effect by comparing order variability across the different supply chain tiers.
  - **Files**:
    - `src/components/charts/BullwhipEffectChart.tsx`: Create the chart component.
    - `src/app/summary/page.tsx`: Add the chart to the summary page.
    - `src/lib/calculator.ts`: Add logic to calculate the bullwhip effect metric.
  - **Step Dependencies**: Step 22
  - **User Instructions**: Implement the Bullwhip Effect Visualization and add it to the game summary page.

- [ ] Step 27: F015 - Performance Achievements
  - **Task**: Implement a system for unlocking and displaying performance achievements.
  - **Files**:
    - `src/lib/achievements.ts`: Define achievement criteria and logic for unlocking them.
    - `src/store/gameStore.ts`: Add achievements to the persistent state.
    - `src/components/achievements/AchievementIcon.tsx`: Create a component to display an achievement.
    - `src/components/achievements/AchievementModal.tsx`: Create a modal to notify users of unlocked achievements.
    - `src/app/profile/page.tsx`: Create a page to display all achievements.
  - **Step Dependencies**: Step 21
  - **User Instructions**: Implement the achievement system and a profile page to display them.

- [ ] Step 28: F016 - Game Speed Control
  - **Task**: Add a UI control to allow players to adjust the speed of game animations.
  - **Files**:
    - `src/components/game/GameSpeedControl.tsx`: Create the slider component for speed control.
    - `src/store/gameStore.ts`: Add `gameSpeed` to the store.
    - `src/app/game/page.tsx`: Add the control to the game UI.
    - `src/controller/GameController.ts`: Adjust animation timings based on `gameSpeed`.
  - **Step Dependencies**: Step 16
  - **User Instructions**: Implement the game speed control feature.

- [ ] Step 29: F017 - Multi-Game Statistics
  - **Task**: Store statistics from multiple games and create a page to display trends and averages.
  - **Files**:
    - `src/lib/localStorage.ts`: Enhance to store a history of game summaries.
    - `src/app/statistics/page.tsx`: Create the page to display multi-game stats.
    - `src/components/charts/TrendChart.tsx`: Create a component to show performance over time.
  - **Step Dependencies**: Step 22
  - **User Instructions**: Implement multi-game statistics tracking and a page to view them.

- [ ] Step 30: F018 - Responsive Mobile Interface
  - **Task**: Ensure all components and pages are fully responsive and provide a good user experience on mobile devices.
  - **Files**:
    - `src/styles/globals.css`: Add responsive styles.
    - `src/app/game/page.tsx`: Adjust layout for mobile.
    - `src/components/game/Dashboard.tsx`: Adjust layout for mobile.
    - `src/components/charts/HistoricalDataCharts.tsx`: Ensure charts are responsive.
    - `tailwind.config.ts`: Add or adjust breakpoints if necessary.
  - **Step Dependencies**: All UI steps
  - **User Instructions**: Review and update the entire application to be mobile-friendly. This is a cross-cutting concern.

- [ ] Step 31: F019 - Keyboard Shortcuts
  - **Task**: Implement keyboard shortcuts for common actions like placing an order.
  - **Files**:
    - `src/hooks/useKeyboardShortcuts.ts`: Create a custom hook to handle keyboard events.
    - `src/components/game/OrderPlacement.tsx`: Use the hook to trigger order placement.
    - `src/components/ui/Modal.tsx`: Add a help modal to display available shortcuts.
  - **Step Dependencies**: Step 17
  - **User Instructions**: Implement keyboard shortcuts for power users.

- [ ] Step 32: F020 - Data Export Functionality
  - **Task**: Allow users to export their game data to a CSV or JSON file.
  - **Files**:
    - `src/lib/export.ts`: Create functions to convert game data to CSV/JSON.
    - `src/app/summary/page.tsx`: Add an "Export Data" button to the summary page.
  - **Step Dependencies**: Step 22
  - **User Instructions**: Implement the data export functionality on the game summary page.

## Summary and next step
This updated task list provides a more detailed, design-aware, step-by-step guide to building the Beer Game application. The next step is to start with "Step 1: Project Setup" and proceed through the tasks in order. Each step is designed to be a self-contained unit of work that moves the project closer to completion.