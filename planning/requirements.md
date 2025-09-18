# 📄 Requirements Document: Beer Game Supply Chain Simulation

## Functional Requirements

### FR-001: Landing Page Display
- **ID**: FR-001
- **Description**: The system shall display a landing page with hero section containing game description, value proposition, and a prominent "Start Game" call-to-action button
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: None
- **Acceptance Criteria**:
  - Landing page loads in under 3 seconds on standard broadband connection
  - Hero section visible without scrolling on desktop viewports ≥1024px width
  - "Start Game" button click navigates to game configuration screen
  - Page renders correctly on mobile devices (320px minimum width)
- **Reference**: F001

### FR-002: Game Instructions Display
- **ID**: FR-002
- **Description**: The system shall display comprehensive "How to Play" instructions including game rules, objectives, and supply chain role descriptions
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-001
- **Acceptance Criteria**:
  - Instructions section accessible via navigation or scrolling from landing page
  - Content includes all four supply chain roles with descriptions
  - Rules section covers turn sequence, cost structure, and constraints
  - Visual diagram of supply chain structure displayed
- **Reference**: F001

### FR-003: Game Configuration Interface
- **ID**: FR-003
- **Description**: The system shall provide a configuration interface allowing players to select their supply chain role and game duration before starting
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-001
- **Acceptance Criteria**:
  - Four role selection cards displayed (Retailer, Wholesaler, Distributor, Manufacturer)
  - Duration slider allows selection between 20 and 52 weeks (integer values only)
  - Start button disabled until both role and duration are selected
  - Configuration values stored in browser local storage
- **Reference**: F002

### FR-004: Game State Initialization
- **ID**: FR-004
- **Description**: The system shall initialize game state with starting inventory of 12 units per position, 4 units in shipping pipelines, and initial orders of 4 units
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-003
- **Acceptance Criteria**:
  - Each supply chain position starts with exactly 12 units inventory
  - Each shipping delay pipeline contains 4 units at start
  - Initial customer demand set to 4 units per week for weeks 1-4
  - Week counter initialized to 1
  - All costs initialized to 0
- **Reference**: F002, F003

### FR-005: Real-Time Dashboard Display
- **ID**: FR-005
- **Description**: The system shall display a real-time game dashboard showing current week, inventory level, incoming orders, backorders, and accumulated costs
- **Priority**: MUST
- **Complexity**: High
- **Dependencies**: FR-004
- **Acceptance Criteria**:
  - Current week number displayed prominently (1-52)
  - Inventory level shows integer value, negative values indicate backorders
  - Incoming orders from downstream customer displayed
  - Total cost calculated as (inventory × $0.50) + (backorders × $1.00) per week
  - Dashboard updates within 100ms of state changes
- **Reference**: F003

### FR-006: Order Placement System
- **ID**: FR-006
- **Description**: The system shall accept player order input as non-negative integers and advance the game to the next week upon order submission
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-005
- **Acceptance Criteria**:
  - Order input field accepts only non-negative integer values (0-9999)
  - Validation prevents submission of empty, negative, or non-numeric values
  - Order submission triggers week advancement sequence
  - Orders cannot be cancelled or modified after submission
  - Confirmation required for orders exceeding 100 units
- **Reference**: F004

### FR-007: Supply Chain Flow Simulation
- **ID**: FR-007
- **Description**: The system shall simulate product and order flow through the four-tier supply chain with appropriate delays
- **Priority**: MUST
- **Complexity**: High
- **Dependencies**: FR-006
- **Acceptance Criteria**:
  - Orders take 1 week to reach upstream suppliers
  - Shipments take 2 weeks to arrive after ordering
  - All available inventory must be shipped to fill orders
  - Unfilled orders accumulate as backorders
  - Turn sequence follows: receive inventory → fill orders → record position → advance orders → place new order
- **Reference**: F005

### FR-008: AI Partner Decision Making
- **ID**: FR-008
- **Description**: The system shall control non-player supply chain positions using AI that makes ordering decisions based on inventory levels and demand patterns
- **Priority**: MUST
- **Complexity**: High
- **Dependencies**: FR-007
- **Acceptance Criteria**:
  - AI calculates orders using base stock policy with normal distribution variance
  - AI considers current inventory, backorders, and recent order history
  - AI decisions bounded between 0 and 200% of recent average demand
  - AI parameters configurable for difficulty adjustment
  - AI decisions execute automatically each week
- **Reference**: F006

### FR-009: Historical Data Tracking
- **ID**: FR-009
- **Description**: The system shall track and store historical data for inventory levels, orders placed, orders received, and costs for all supply chain positions
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-007
- **Acceptance Criteria**:
  - Data stored for each week includes: inventory level, orders placed, orders received, weekly cost
  - Historical data retained for entire game duration (up to 52 weeks)
  - Data structure supports efficient retrieval for charting
  - Memory usage remains under 5MB for maximum game duration
- **Reference**: F007

### FR-010: Data Visualization Charts
- **ID**: FR-010
- **Description**: The system shall display interactive charts showing inventory levels, order quantities, and cost accumulation over time
- **Priority**: MUST
- **Complexity**: High
- **Dependencies**: FR-009
- **Acceptance Criteria**:
  - Line chart displays inventory levels for player's position over time
  - Bar chart shows orders placed vs orders received per week
  - Area chart displays cumulative cost progression
  - Charts update in real-time as game progresses
  - Tooltips show exact values on hover/touch
  - Charts support pan/zoom for games longer than 20 weeks
- **Reference**: F007

### FR-011: Game State Persistence
- **ID**: FR-011
- **Description**: The system shall automatically save game state to browser local storage and provide resume functionality
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-005, FR-009
- **Acceptance Criteria**:
  - Game state saved automatically after each turn
  - Save includes: current week, all positions' inventory/orders, historical data, configuration
  - Resume prompt displayed when returning user has saved game
  - Corrupted save data handled gracefully with error message
  - Option to abandon current game and start new
- **Reference**: F008

### FR-012: Customer Demand Generation
- **ID**: FR-012
- **Description**: The system shall generate customer demand following the Beer Game pattern: 4 units/week for weeks 1-4, then 8 units/week from week 5 onward
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-007
- **Acceptance Criteria**:
  - Weeks 1-4: customer orders exactly 4 units
  - Week 5+: customer orders exactly 8 units
  - Demand visible to Retailer role immediately
  - Other roles see demand only through order propagation
- **Reference**: F010

### FR-013: Game Completion Summary
- **ID**: FR-013
- **Description**: The system shall display a comprehensive summary screen upon game completion showing performance metrics and educational insights
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-009
- **Acceptance Criteria**:
  - Summary displays total cost for player's position
  - Comparison shown against target costs (< $2,000 optimal)
  - Bullwhip effect explanation provided if detected
  - Key metrics displayed: average inventory, total backorders, cost breakdown
  - Options to replay game or try different role
- **Reference**: F009

### FR-014: Supply Chain Visualization
- **ID**: FR-014
- **Description**: The system shall display a visual representation of the supply chain showing all four tiers and product/order flow indicators
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-005
- **Acceptance Criteria**:
  - All four tiers displayed: Retailer, Wholesaler, Distributor, Manufacturer
  - Current inventory levels shown for each tier
  - Orders in transit indicated with visual markers
  - Shipments in transit shown with directional flow
  - Player's position highlighted distinctly
- **Reference**: F005

### FR-015: Cost Calculation Engine
- **ID**: FR-015
- **Description**: The system shall calculate costs each week as $0.50 per unit in inventory plus $1.00 per unit backordered
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-005
- **Acceptance Criteria**:
  - Inventory holding cost = max(0, inventory) × $0.50
  - Backorder cost = max(0, -inventory) × $1.00
  - Weekly costs calculated at end of each turn
  - Cumulative cost maintained throughout game
  - Cost calculations accurate to 2 decimal places
- **Reference**: F003

### FR-016: Tutorial Mode
- **ID**: FR-016
- **Description**: The system shall provide an optional interactive tutorial mode that guides first-time players through game mechanics
- **Priority**: SHOULD
- **Complexity**: High
- **Dependencies**: FR-001 through FR-006
- **Acceptance Criteria**:
  - Tutorial overlay highlights relevant UI elements in sequence
  - Step-by-step instructions for first 3 game weeks
  - Tutorial can be skipped with confirmation dialog
  - Tutorial state separate from actual game state
  - Progress indicators show tutorial completion
- **Reference**: F011

### FR-017: Contextual Tips System
- **ID**: FR-017
- **Description**: The system shall display contextual strategy tips based on game situations to help players learn
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-005
- **Acceptance Criteria**:
  - Tips triggered by specific conditions (high inventory, backorders, etc.)
  - Each tip displayed maximum once per game
  - Tips dismissible by user action
  - Option in settings to disable all tips
  - Tips stored in accessible data structure for easy updates
- **Reference**: F012

### FR-018: Difficulty Settings
- **ID**: FR-018
- **Description**: The system shall provide difficulty settings that adjust AI behavior and demand variability
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-003, FR-008
- **Acceptance Criteria**:
  - Three preset difficulties: Easy, Normal, Hard
  - Difficulty affects AI ordering variance (±20%, ±40%, ±60%)
  - Custom difficulty allows manual parameter adjustment
  - Difficulty selection available in game configuration
  - Current difficulty displayed during gameplay
- **Reference**: F014

### FR-019: Performance Achievements
- **ID**: FR-019
- **Description**: The system shall track and award achievements based on game performance milestones
- **Priority**: COULD
- **Complexity**: Medium
- **Dependencies**: FR-013
- **Acceptance Criteria**:
  - Achievements defined for: low cost, no backorders, efficiency metrics
  - Achievement unlock triggers at game completion
  - Achievement status persisted in local storage
  - Achievement gallery accessible from main menu
  - New achievement notifications displayed prominently
- **Reference**: F015

### FR-020: Data Export Functionality
- **ID**: FR-020
- **Description**: The system shall allow users to export game data in CSV or JSON format for external analysis
- **Priority**: COULD
- **Complexity**: Low
- **Dependencies**: FR-009, FR-013
- **Acceptance Criteria**:
  - Export button available on completion summary
  - CSV format includes headers and weekly data rows
  - JSON format preserves data structure and types
  - File download triggered via browser API
  - Filename includes timestamp and role played
- **Reference**: F020

## Non-Functional Requirements

### NFR-001: Page Load Performance
- **ID**: NFR-001
- **Description**: The system shall load the initial landing page in less than 3 seconds on a standard broadband connection (10 Mbps)
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: None
- **Acceptance Criteria**:
  - Time to First Contentful Paint (FCP) < 1.5 seconds
  - Time to Interactive (TTI) < 3 seconds
  - Lighthouse performance score > 85
  - Tested on Chrome, Firefox, Safari latest versions
- **Reference**: F001

### NFR-002: Game Responsiveness
- **ID**: NFR-002
- **Description**: The system shall respond to user interactions within 100 milliseconds to maintain fluid gameplay experience
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-005, FR-006
- **Acceptance Criteria**:
  - Button click feedback < 50ms
  - State updates rendered < 100ms
  - Chart updates complete < 200ms
  - No blocking operations on main thread > 50ms
- **Reference**: F003

### NFR-003: Concurrent User Scalability
- **ID**: NFR-003
- **Description**: The system shall support at least 1000 concurrent users playing single-player games without performance degradation
- **Priority**: SHOULD
- **Complexity**: Low
- **Dependencies**: Frontend-only architecture
- **Acceptance Criteria**:
  - Static hosting supports 1000+ concurrent connections
  - Client-side processing handles all game logic
  - No server-side bottlenecks (frontend-only)
  - CDN distribution for global accessibility
- **Reference**: All features

### NFR-004: Browser Compatibility
- **ID**: NFR-004
- **Description**: The system shall function correctly on Chrome, Firefox, Safari, and Edge browsers released within the last 2 years
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: All UI components
- **Acceptance Criteria**:
  - All features work on Chrome 100+, Firefox 100+, Safari 15+, Edge 100+
  - Polyfills provided for missing browser features
  - Graceful degradation for unsupported features
  - Browser testing matrix documented
- **Reference**: All features

### NFR-005: Mobile Responsiveness
- **ID**: NFR-005
- **Description**: The system shall provide a fully functional mobile experience on devices with screen width ≥320px
- **Priority**: MUST
- **Complexity**: High
- **Dependencies**: All UI components
- **Acceptance Criteria**:
  - Touch targets minimum 44×44px per WCAG guidelines
  - Responsive breakpoints at 320px, 768px, 1024px, 1440px
  - Horizontal scrolling eliminated on mobile views
  - Virtual keyboard doesn't obscure input fields
- **Reference**: F018

### NFR-006: Data Storage Limits
- **ID**: NFR-006
- **Description**: The system shall limit local storage usage to maximum 5MB per game session
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-011
- **Acceptance Criteria**:
  - Game state serialization < 1MB for 52-week game
  - Historical data compression if exceeding 3MB
  - Storage quota exceeded handled gracefully
  - Old game data cleanup after 30 days
- **Reference**: F008

### NFR-007: Accessibility Standards
- **ID**: NFR-007
- **Description**: The system shall meet WCAG 2.1 Level AA accessibility standards
- **Priority**: SHOULD
- **Complexity**: High
- **Dependencies**: All UI components
- **Acceptance Criteria**:
  - All interactive elements keyboard accessible
  - Color contrast ratio ≥ 4.5:1 for normal text
  - ARIA labels for screen readers on all controls
  - Focus indicators visible on all interactive elements
  - Automated accessibility testing score > 90%
- **Reference**: All features

### NFR-008: Security - Input Validation
- **ID**: NFR-008
- **Description**: The system shall validate and sanitize all user inputs to prevent injection attacks and data corruption
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-006
- **Acceptance Criteria**:
  - Order quantities validated as positive integers
  - Configuration parameters bounded to valid ranges
  - No executable code in local storage data
  - Input sanitization on all text fields
- **Reference**: F004

### NFR-009: Chart Performance
- **ID**: NFR-009
- **Description**: The system shall render charts with smooth animations at minimum 30 frames per second
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-010
- **Acceptance Criteria**:
  - Chart updates maintain 30+ FPS
  - Canvas/SVG rendering optimized for performance
  - Data point limit of 52 weeks (maximum game length)
  - Throttled updates during rapid state changes
- **Reference**: F007

### NFR-010: Code Maintainability
- **ID**: NFR-010
- **Description**: The system shall be built using modular, well-documented TypeScript code with minimum 80% test coverage
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: Technical architecture
- **Acceptance Criteria**:
  - TypeScript strict mode enabled
  - JSDoc comments on all public functions
  - Unit test coverage ≥ 80%
  - ESLint rules enforced with no errors
  - Component-based architecture with clear separation
- **Reference**: Technical specifications

### NFR-011: Network Resilience
- **ID**: NFR-011
- **Description**: The system shall function fully offline after initial load, with no network requests required during gameplay
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: Frontend-only architecture
- **Acceptance Criteria**:
  - Service worker caches all assets for offline use
  - No API calls during gameplay
  - Game continues functioning with network disconnected
  - Offline indicator displayed when appropriate
- **Reference**: All features

### NFR-012: Memory Management
- **ID**: NFR-012
- **Description**: The system shall maintain memory usage below 100MB during a full 52-week game session
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-009, FR-010
- **Acceptance Criteria**:
  - Memory profiling shows < 100MB heap usage
  - No memory leaks detected over extended play
  - Unused objects garbage collected properly
  - Chart data efficiently managed with sliding window
- **Reference**: F007, F009

## User Experience Requirements

### UXR-001: Information Architecture
- **ID**: UXR-001
- **Description**: The system shall organize information in a clear three-level hierarchy: Landing → Configuration → Gameplay
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-001, FR-003, FR-005
- **Acceptance Criteria**:
  - Maximum 3 clicks to start playing from landing page
  - Breadcrumb navigation shows current location
  - Back button preserves game state when applicable
  - Clear visual hierarchy with consistent navigation
- **Reference**: F001, F002, F003

### UXR-002: Progressive Disclosure
- **ID**: UXR-002
- **Description**: The system shall reveal complex information progressively, showing essential elements first and details on demand
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-002, FR-005
- **Acceptance Criteria**:
  - Basic game controls immediately visible
  - Advanced options in collapsible sections
  - Tooltips provide additional context on hover/tap
  - Tutorial information revealed step-by-step
  - Charts initially show summary, details on interaction
- **Reference**: F001, F003

### UXR-003: Error Prevention
- **ID**: UXR-003
- **Description**: The system shall prevent user errors through input constraints, clear labeling, and confirmation dialogs
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-006
- **Acceptance Criteria**:
  - Input fields restrict to valid character types
  - Confirmation required for destructive actions (new game, large orders)
  - Clear labels indicate required vs optional fields
  - Disabled states for invalid actions
  - Inline validation with helpful error messages
- **Reference**: F004

### UXR-004: Feedback Patterns
- **ID**: UXR-004
- **Description**: The system shall provide immediate visual and optional audio feedback for all user actions
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-006, FR-013
- **Acceptance Criteria**:
  - Button states change on hover/active/disabled
  - Success animations for completed actions
  - Error states clearly distinguished with color and icons
  - Loading indicators for operations > 500ms
  - Toast notifications for important events
- **Reference**: F004, F009

### UXR-005: Visual Design Consistency
- **ID**: UXR-005
- **Description**: The system shall maintain consistent visual design using a defined color palette, typography scale, and spacing system
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: All UI components
- **Acceptance Criteria**:
  - Tailwind CSS design tokens used consistently
  - Maximum 3 font weights, 5 font sizes
  - 8px spacing grid system
  - Consistent border radius and shadows
  - Dark mode support with appropriate color mapping
- **Reference**: All features

### UXR-006: Mobile Touch Optimization
- **ID**: UXR-006
- **Description**: The system shall optimize touch interactions for mobile devices with appropriate target sizes and gestures
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: NFR-005
- **Acceptance Criteria**:
  - Touch targets minimum 44×44px
  - Swipe gestures for chart navigation
  - Pinch-to-zoom on charts
  - No hover-dependent functionality
  - Touch feedback within 100ms
- **Reference**: F018

### UXR-007: Onboarding Flow
- **ID**: UXR-007
- **Description**: The system shall guide new users through an intuitive onboarding experience that builds confidence
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-001, FR-002, FR-016
- **Acceptance Criteria**:
  - Welcome message for first-time visitors
  - Highlighted "How to Play" for new users
  - Optional tutorial prominently offered
  - Quick-start guide maximum 5 steps
  - Skip option always available
- **Reference**: F001, F011

### UXR-008: Data Visualization Clarity
- **ID**: UXR-008
- **Description**: The system shall present data visualizations that are immediately understandable without extensive explanation
- **Priority**: MUST
- **Complexity**: Medium
- **Dependencies**: FR-010
- **Acceptance Criteria**:
  - Chart types match data relationships (line for trends, bar for comparisons)
  - Clear axis labels and units
  - Color coding consistent with meaning (red for costs, green for inventory)
  - Legends positioned for easy reference
  - Key insights highlighted automatically
- **Reference**: F007

### UXR-009: Game State Awareness
- **ID**: UXR-009
- **Description**: The system shall keep users constantly aware of their current game state and progress
- **Priority**: MUST
- **Complexity**: Low
- **Dependencies**: FR-005
- **Acceptance Criteria**:
  - Current week prominently displayed
  - Progress bar shows game completion (week/total weeks)
  - Key metrics visible without scrolling
  - Status indicators for critical conditions (backorders)
  - Auto-save indicator confirms data persistence
- **Reference**: F003

### UXR-010: Contextual Help
- **ID**: UXR-010
- **Description**: The system shall provide context-sensitive help accessible from any screen without losing game state
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-002
- **Acceptance Criteria**:
  - Help icon accessible from all game screens
  - Help content relevant to current screen/action
  - Modal or sidebar help preserves game state
  - Searchable help content
  - Quick reference card for key concepts
- **Reference**: F001, F012

### UXR-011: Performance Feedback
- **ID**: UXR-011
- **Description**: The system shall provide clear, motivating feedback about player performance throughout the game
- **Priority**: SHOULD
- **Complexity**: Medium
- **Dependencies**: FR-013
- **Acceptance Criteria**:
  - Real-time cost performance vs target
  - Milestone notifications (week 10, 25, etc.)
  - Positive reinforcement for good decisions
  - Constructive feedback for poor performance
  - Final score presented with context
- **Reference**: F009

### UXR-012: Responsive Layout Adaptation
- **ID**: UXR-012
- **Description**: The system shall adapt layout intelligently based on screen size while maintaining functionality
- **Priority**: MUST
- **Complexity**: High
- **Dependencies**: NFR-005
- **Acceptance Criteria**:
  - Mobile: Single column, stacked components
  - Tablet: Two-column layout where appropriate
  - Desktop: Full multi-panel dashboard
  - Charts resize appropriately
  - No horizontal scrolling required
- **Reference**: F018