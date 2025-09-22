---
title: 'User Journey: Game State Persistence'
description: 'User journey for resuming a saved game.'
feature: 'Game State Persistence'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# User Journey: Game Persistence

### Core Experience Flow (Resume)

**Step 1: Return to the App**
- **Trigger**: A user with a saved game in `localStorage` opens the application.
- **Task Flow**: The user sees the landing page, but the main CTA is now "Resume Game".

**Step 2: Resume**
- **Task Flow**: The user clicks "Resume Game".
- **Success State**: The application loads the saved game state from `localStorage` and takes the user directly to the dashboard for the week they left off.

### Core Experience Flow (Abandon)

**Step 1: Decide to Start Over**
- **Trigger**: A user with a saved game decides they want to start a new game.
- **Task Flow**: The user clicks the "Start New Game" button.
- **System Feedback**: A confirmation modal appears, warning the user that their current progress will be lost.

**Step 2: Confirm**
- **Task Flow**: The user confirms they want to start a new game.
- **Success State**: The `localStorage` is cleared, and the user is taken to the game configuration screen.
