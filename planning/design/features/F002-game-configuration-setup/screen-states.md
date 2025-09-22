---
title: 'Screen States: Game Configuration Setup'
description: 'Screen states and specifications for the game configuration screen.'
feature: 'Game Configuration Setup'
last-updated: 2025-09-22
version: 1.0.0
status: draft
---

# Screen States: Game Configuration

## Screen: Game Setup

**Purpose**: To allow users to choose their role and game duration.

### State: Default (No Selection)

**Visual Design Specifications**:
- **Layout**: A centered container holding the configuration options.
- **Typography**: `h2` for the screen title ("Game Setup"). `h4` for section titles ("Choose Your Role").
- **Color Application**: Neutral background. Role cards are in their default state. The "Start Game" button is in its disabled style.
- **Interactive Elements**: Role cards and the duration slider are available for interaction.

### State: Role Selected

**Visual Design Specifications**:
- **Layout**: Same as default.
- **Interactive Elements**: The selected role card has a prominent border (using `primary` color) and/or a subtle background color change. Other cards remain in the default state.

### State: All Selections Made

**Visual Design Specifications**:
- **Layout**: Same as default.
- **Interactive Elements**: 
    - A role card is selected.
    - The duration slider shows a value.
    - The "Start Game" button is now in its enabled, primary action state (using `accent_primary` color), making it the clear focal point.

**Interaction Design Specifications**:
- **Primary Actions**: Clicking the enabled "Start Game" button.
- **Secondary Actions**: Changing the role or duration selection.

**Responsive Design Specifications**:
- **Mobile (320-767px)**: Role cards may stack vertically. The slider will be full-width.
- **Tablet/Desktop (768px+)**: Role cards are displayed in a 2x2 grid.
