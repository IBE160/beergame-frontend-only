---
title: 'User Journey: Game Configuration Setup'
description: 'User journey for configuring and starting a new game.'
feature: 'Game Configuration Setup'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# User Journey: Game Configuration

### Core Experience Flow

**Step 1: Entry Point**
- **Trigger**: User clicks "Play Now" on the landing page.
- **State Description**: A clean, focused screen is presented. The main elements are the role selection cards and the duration slider. The "Start Game" button is initially disabled.
- **Available Actions**: Select a role, adjust the duration slider.
- **Visual Hierarchy**: The role selection cards are the most prominent element, inviting interaction.

**Step 2: Role Selection**
- **Task Flow**: The user reviews the four roles (Retailer, Wholesaler, Distributor, Manufacturer). Each role is presented on a card with a brief description.
- **State Changes**: When a user clicks on a role card, it becomes visually selected (e.g., a border is applied, or the background color changes). Any previously selected card is deselected.
- **Error Prevention**: Only one role can be selected at a time.
- **Microcopy**: The role descriptions are concise and focus on the player's position in the supply chain.

**Step 3: Duration Selection**
- **Task Flow**: The user interacts with the slider to choose the game duration (20-52 weeks).
- **State Changes**: As the slider moves, the selected number of weeks is clearly displayed.
- **Error Prevention**: The slider is constrained to the allowed range.

**Step 4: Starting the Game**
- **Task Flow**: Once a role and duration are set, the "Start Game" button becomes enabled.
- **State Changes**: The button changes from a disabled style to the primary active style.
- **Success State**: The user clicks the "Start Game" button, and the application transitions to the main game dashboard.
- **Error Recovery**: If there's an issue initializing the game, an error message is shown, and the user remains on the configuration screen.

### Edge Cases

- **No Selection**: The "Start Game" button remains disabled until both a role and duration are chosen, preventing the user from starting an invalid game.
- **Changing Mind**: The user can freely change their role and duration selections before starting the game.
