---
title: Game Dashboard Design
description: Complete design specifications for the main gameplay dashboard interface
feature: game-dashboard
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ./user-journey.md
  - ./screen-states.md
  - ./interactions.md
  - ./accessibility.md
  - ./implementation.md
  - ../../design-system/style-guide.yaml
dependencies:
  - ../game-configuration/README.md
  - ../supply-chain-visualization/README.md
  - ../historical-charts/README.md
status: approved
---

# Game Dashboard Design

## Overview
The Game Dashboard is the primary interface where players make strategic decisions, monitor supply chain performance, and interact with the simulation. It presents complex data in an intuitive, actionable format while maintaining engagement through clear visual feedback and smooth interactions.

## Design Goals

### Primary Objectives
1. **Information Clarity**: Present supply chain data without overwhelming
2. **Action Efficiency**: Enable quick order placement with minimal friction
3. **Performance Visibility**: Show real-time costs and metrics prominently
4. **Learning Support**: Surface insights about supply chain dynamics
5. **Responsive Adaptability**: Optimize for desktop while supporting mobile

## Layout Structure

### Desktop Layout (1024px+)
```
┌────────────────────────────────────────────────────┐
│                    Status Bar                      │
├──────────────┬─────────────────────────────────────┤
│              │                                     │
│   Control    │        Visualization Area           │
│    Panel     │                                     │
│              ├─────────────────────────────────────┤
│              │                                     │
│              │         Charts Panel                │
│              │                                     │
└──────────────┴─────────────────────────────────────┘
```

### Mobile Layout (< 768px)
```
┌─────────────────┐
│   Status Bar    │
├─────────────────┤
│  Control Panel  │
├─────────────────┤
│ Visualization   │
├─────────────────┤
│    Charts       │
└─────────────────┘
```

## Component Specifications

### Status Bar
**Purpose**: Persistent game state and progress indication

**Content**:
- Current Week/Round (prominent)
- Player Role indicator
- Total Cost accumulator
- Game Progress bar
- Quick actions (pause, help, settings)

**Visual Design**:
- Height: 64px desktop, 56px mobile
- Background: Primary gradient subtle
- Typography: H5 for week, body for other data
- Color coding for cost thresholds

### Control Panel
**Purpose**: Primary interaction area for order management

**Sections**:
1. **Inventory Status**
   - Current inventory level (large number)
   - Trend indicator (up/down arrow)
   - Visual gauge representation

2. **Order Information**
   - Incoming orders display
   - Backorder count (if any)
   - Demand forecast hint

3. **Order Placement**
   - Number input with increment/decrement
   - Smart suggestions based on history
   - "Place Order" primary CTA
   - Order history quick access

**Visual Design**:
- Width: 320px desktop, full width mobile
- Card-based sections with 16px spacing
- Elevated cards for interactive elements
- Clear visual hierarchy with typography

### Visualization Area
**Purpose**: Supply chain flow representation

**Features**:
- Four-tier supply chain diagram
- Animated product flow indicators
- Real-time inventory levels per tier
- Order/shipment in transit markers
- Player position highlight

**Visual Design**:
- Isometric or flat design based on preference
- Role colors for each tier
- Smooth animations for flow
- Interactive tooltips on hover/tap

### Charts Panel
**Purpose**: Historical data and trend analysis

**Chart Types**:
1. **Inventory Level** (Line chart)
2. **Orders Placed vs Received** (Dual line)
3. **Cost Accumulation** (Area chart)
4. **Bullwhip Effect** (Special visualization)

**Visual Design**:
- Responsive height: 400px desktop, 250px mobile
- Consistent color scheme from tokens
- Interactive legends
- Pan/zoom capabilities on touch

## Visual Hierarchy

### Information Priority
1. **Level 1**: Current week, inventory level, total cost
2. **Level 2**: Incoming orders, backorders, order input
3. **Level 3**: Charts, historical data, trends
4. **Level 4**: Settings, help, auxiliary information

### Typography Scale
- **Display Numbers**: 48px (inventory, cost)
- **Primary Info**: 24px (week, orders)
- **Secondary Info**: 16px (labels, descriptions)
- **Tertiary Info**: 14px (help text, tooltips)

## Color Application

### Semantic Colors
- **Success Green**: Positive inventory, good performance
- **Warning Amber**: Low inventory, rising costs
- **Error Red**: Backorders, critical situations
- **Info Blue**: Neutral information, tips

### Data Visualization
- Consistent with chart color tokens
- Role colors for supply chain positions
- Gradient overlays for depth and emphasis

## Responsive Behavior

### Breakpoint Adaptations

#### Mobile (320-767px)
- Stacked layout
- Collapsible sections
- Swipeable charts
- Bottom sheet for order placement

#### Tablet (768-1023px)
- Two-column layout
- Side panel for controls
- Expandable visualization

#### Desktop (1024px+)
- Full three-panel layout
- All information visible
- Hover interactions enabled
- Keyboard shortcuts active

## Micro-interactions

### Order Placement
1. Input focus: Border highlight, label float
2. Value change: Instant cost preview
3. Submit click: Button depression, loading state
4. Success: Confirmation animation, week advance

### Chart Interactions
1. Hover: Tooltip with exact values
2. Click: Detailed view modal
3. Drag: Pan through time periods
4. Pinch: Zoom in/out on mobile

### Status Updates
1. Cost increase: Subtle shake animation
2. Backorder alert: Pulse and color change
3. Week transition: Smooth counter increment
4. Achievement: Celebration animation

## Dark Mode Adaptations

### Color Transformations
- Background: `#111827` (neutral-900)
- Surface: `#1F2937` (neutral-800)
- Text: `#F9FAFB` (neutral-50)
- Borders: `#374151` (neutral-700)

### Contrast Adjustments
- Increase contrast for data visualizations
- Brighten semantic colors slightly
- Add subtle glow to interactive elements

## Accessibility Considerations

### Keyboard Navigation
- Tab through all interactive elements
- Arrow keys for chart navigation
- Enter/Space to submit orders
- Escape to close modals

### Screen Reader Support
- Live regions for status updates
- Descriptive labels for all controls
- Chart data available as tables
- Role and state announcements

### Visual Accessibility
- 4.5:1 contrast minimum
- Focus indicators prominent
- Color-blind safe visualizations
- Text scalable to 200%

## Performance Optimizations

### Rendering Strategy
- Virtual scrolling for large datasets
- Canvas rendering for complex charts
- RequestAnimationFrame for animations
- Debounced input handlers

### Asset Optimization
- SVG icons with sprite sheets
- Lazy loading for charts
- Compressed data formats
- Efficient state management

## Implementation Notes

### Component Architecture
```typescript
interface DashboardProps {
  gameState: GameState;
  onOrderSubmit: (quantity: number) => void;
  onChartInteraction: (chart: ChartType, data: ChartData) => void;
}

interface DashboardSections {
  statusBar: StatusBarComponent;
  controlPanel: ControlPanelComponent;
  visualization: VisualizationComponent;
  charts: ChartsComponent;
}
```

### State Management
- Global state for game data
- Local state for UI interactions
- Persistent state for preferences
- Derived state for calculations

### Animation Timing
- Status updates: 200ms ease-out
- Chart transitions: 400ms ease-in-out
- Order confirmation: 600ms spring
- Week advancement: 800ms ease-out

## Design Validation

### Usability Metrics
- Time to place first order: <10 seconds
- Error rate in order placement: <5%
- Information findability: <3 seconds
- Mobile touch accuracy: >95%

### Performance Targets
- Initial render: <100ms
- Interaction response: <50ms
- Animation FPS: 60fps consistent
- Memory usage: <50MB

## Related Documentation
- [User Journey](./user-journey.md) - Complete user flow
- [Screen States](./screen-states.md) - All UI states
- [Interactions](./interactions.md) - Detailed interactions
- [Accessibility](./accessibility.md) - A11y requirements
- [Implementation](./implementation.md) - Developer guide

## Last Updated
2025-01-18 - Initial comprehensive design specification