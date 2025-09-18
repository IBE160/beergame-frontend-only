---
title: Game Configuration Design
description: Design specifications for game setup and configuration interface
feature: game-configuration
last-updated: 2025-01-18
version: 1.0.0
status: approved
---

# Game Configuration Design

## Overview
The game configuration screen enables players to personalize their simulation experience by selecting their role and game parameters. The design emphasizes clarity and excitement while building anticipation for gameplay.

## Layout Structure

### Configuration Container
- Centered card design (max-width: 800px)
- Two-section layout: Role Selection + Game Settings
- Progressive disclosure of options
- Clear visual hierarchy

## Role Selection

### Visual Design
Four role cards in 2×2 grid (desktop) or vertical stack (mobile):

#### Each Role Card Contains:
- **Icon**: Custom illustration for each role
- **Title**: Role name (e.g., "Retailer")
- **Description**: 2-line explanation
- **Difficulty**: Star rating (1-4 stars)
- **Color**: Role-specific accent color

### Interaction Pattern
- Hover: Card elevation and border highlight
- Selection: Checkmark overlay, selected state
- Only one selectable at a time
- Smooth transitions between states

### Role Information
1. **Retailer** ⭐
   - "Closest to customers"
   - "Manage direct demand"
   - Color: Green

2. **Wholesaler** ⭐⭐
   - "Supply to retailers"
   - "Balance multiple orders"
   - Color: Blue

3. **Distributor** ⭐⭐⭐
   - "Regional distribution"
   - "Complex logistics"
   - Color: Purple

4. **Manufacturer** ⭐⭐⭐⭐
   - "Production planning"
   - "Longest delays"
   - Color: Amber

## Game Settings

### Duration Slider
- **Range**: 20-52 weeks
- **Default**: 26 weeks
- **Visual**: Branded slider with week markers
- **Feedback**: Live week count display
- **Labels**: "Quick Game" (20) to "Full Simulation" (52)

### Difficulty Settings (Future)
- Easy / Normal / Hard toggles
- Affects AI behavior and demand variance
- Visual indicators for each level

### Additional Options (Future)
- Tutorial mode toggle
- Demand pattern selection
- Cost multiplier adjustment

## Visual Hierarchy

### Information Priority
1. Role selection (primary focus)
2. Duration setting (secondary)
3. Start button (call-to-action)
4. Additional options (tertiary)

### Typography
- Page title: H1 (36px)
- Section headers: H3 (24px)
- Card titles: H4 (20px)
- Descriptions: Body (16px)
- Labels: Small (14px)

## Start Game Flow

### Pre-Start Validation
- Role must be selected
- Duration must be set
- Visual feedback for missing items

### Start Button States
- **Disabled**: Gray, no role selected
- **Enabled**: Primary color, ready
- **Hover**: Elevated with shadow
- **Loading**: Spinner during setup

### Transition to Game
- Fade out configuration
- Loading state with tips
- Smooth transition to dashboard

## Responsive Design

### Desktop (1024px+)
- 2×2 role card grid
- Horizontal settings layout
- Side-by-side sections

### Tablet (768px-1023px)
- 2×2 role card grid maintained
- Stacked settings sections
- Full-width components

### Mobile (< 768px)
- Single column role cards
- Full-width settings
- Sticky start button
- Reduced padding/spacing

## Accessibility

### Keyboard Navigation
- Tab through all options
- Arrow keys for role selection
- Space/Enter to select
- Clear focus indicators

### Screen Reader Support
- Descriptive labels for all controls
- Role selection announced
- Settings changes announced
- Validation messages clear

## Visual Polish

### Animations
- Card hover: 200ms ease-out scale
- Selection: 400ms spring animation
- Slider: Smooth value transitions
- Button states: Instant feedback

### Colors
- Background: Subtle gradient
- Cards: White with shadows
- Selected: Primary color border
- Disabled: 50% opacity

## Error States

### No Role Selected
- Red border on role section
- Error message below
- Start button disabled

### Invalid Configuration
- Clear error messaging
- Highlight problem areas
- Prevent progression

## Implementation Notes

### State Management
```typescript
interface ConfigState {
  selectedRole: Role | null;
  gameDuration: number;
  difficulty: Difficulty;
  isValid: boolean;
}
```

### Validation Rules
- Role required
- Duration 20-52 weeks
- All fields must be valid
- Clear error messages

## Performance Considerations
- Lazy load role illustrations
- Optimize animations for 60fps
- Minimal re-renders
- Fast configuration save

## Success Metrics
- Configuration completion: >95%
- Average time to start: <30 seconds
- Error rate: <5%
- Role selection distribution: Balanced