---
title: Game Dashboard User Journey
description: Complete user journey analysis for the game dashboard experience
feature: game-dashboard
last-updated: 2025-01-18
version: 1.0.0
related-files:
  - ./README.md
  - ./screen-states.md
dependencies:
  - ../game-configuration/user-journey.md
status: approved
---

# Game Dashboard User Journey

## Overview
This document maps the complete user journey through the game dashboard, identifying touchpoints, emotions, pain points, and opportunities for enhancement throughout the gameplay experience.

## User Personas

### Primary: Business Student (Sarah)
- **Age**: 22
- **Tech Savvy**: High
- **Gaming Experience**: Moderate
- **Goal**: Understand supply chain dynamics for class
- **Pain Points**: Complex concepts, fear of poor performance

### Secondary: Supply Chain Professional (Marcus)
- **Age**: 35
- **Tech Savvy**: Moderate
- **Gaming Experience**: Low
- **Goal**: Practical insights for work
- **Pain Points**: Limited time, needs quick learning

## Journey Stages

## Stage 1: Dashboard Entry

### User Actions
1. Completes game configuration
2. Clicks "Start Game"
3. Arrives at dashboard

### Thoughts & Emotions
- **Excitement**: "Let's see how this works"
- **Uncertainty**: "Where do I start?"
- **Curiosity**: "What do all these numbers mean?"

### Touchpoints
- Transition animation from config
- Initial dashboard load
- First impression of interface

### Pain Points
- Information overload risk
- Unclear starting point
- Intimidating data displays

### Opportunities
- Welcome overlay with key areas highlighted
- Animated attention directors
- Progressive reveal of complexity

### Design Solutions
```
- 2-second onboarding animation highlighting:
  1. "Your inventory is here" (pulse)
  2. "Orders come from here" (pulse)
  3. "Place orders here" (pulse)
- Dismissible first-time tips
- Subtle animation drawing eye to critical info
```

## Stage 2: Understanding Current State

### User Actions
1. Scans dashboard for information
2. Locates inventory level
3. Checks incoming orders
4. Reviews current week

### Thoughts & Emotions
- **Focused**: "I need to understand my situation"
- **Analytical**: "How much do I have vs. what's needed?"
- **Concerned**: "Am I already behind?"

### Touchpoints
- Inventory display widget
- Order information panel
- Week/progress indicator
- Cost accumulator

### Pain Points
- Unclear what's "good" vs "bad"
- Missing context for numbers
- No baseline for comparison

### Opportunities
- Contextual hints ("Healthy inventory level")
- Visual indicators (green/amber/red)
- Comparative benchmarks

### Design Solutions
```
Inventory Widget:
[====|====] 12 units (Healthy)
     ↑ Current level

Incoming Orders:
📦 4 units requested (Normal demand)

Week 1 of 20 (Just getting started!)
```

## Stage 3: First Order Decision

### User Actions
1. Considers order quantity
2. Hovers over input field
3. Enters tentative number
4. Reviews cost implications
5. Submits order

### Thoughts & Emotions
- **Cautious**: "I don't want to order wrong"
- **Calculating**: "What's the right amount?"
- **Hesitant**: "Should I be conservative?"

### Touchpoints
- Order input field
- Quantity suggestions
- Cost preview
- Submit button
- Confirmation feedback

### Pain Points
- No guidance on quantity
- Unclear cost implications
- Fear of making mistakes

### Opportunities
- Smart suggestions based on demand
- Real-time cost calculation
- "Undo" last order option

### Design Solutions
```
Order Placement:
┌─────────────────────────┐
│ How many to order?      │
│ [___8___] units        │
│ ↑ Suggested based on    │
│   recent demand         │
│                         │
│ Cost impact: +$4.00     │
│ [Place Order →]         │
└─────────────────────────┘
```

## Stage 4: Observing Results

### User Actions
1. Watches week advance
2. Sees inventory update
3. Notes cost changes
4. Reviews charts update

### Thoughts & Emotions
- **Anticipation**: "What happened?"
- **Learning**: "I see the cause and effect"
- **Adjustment**: "Next time I'll try..."

### Touchpoints
- Week transition animation
- Inventory level change
- Cost accumulator update
- Chart animations
- Supply chain flow visual

### Pain Points
- Changes happen too fast
- Unclear what changed and why
- Missing the connection

### Opportunities
- Slow-motion first few weeks
- Change highlighting
- Explanatory tooltips

### Design Solutions
```
Animated Sequence (1.5 seconds):
1. Order ships (visual flow)
2. Week counter increments
3. Inventory adjusts (with +/- indicator)
4. Costs update (with breakdown)
5. Charts append new data point
```

## Stage 5: Pattern Recognition

### User Actions
1. Places multiple orders
2. Observes trends
3. Checks historical charts
4. Identifies patterns

### Thoughts & Emotions
- **Confident**: "I'm getting the hang of this"
- **Curious**: "Why is demand changing?"
- **Strategic**: "I need to plan ahead"

### Touchpoints
- Chart interactions
- Trend indicators
- Pattern highlighting
- Historical data

### Pain Points
- Patterns not obvious
- Too much chart switching
- Losing track of strategy

### Opportunities
- AI-powered insights
- Pattern detection alerts
- Strategy tracker

### Design Solutions
```
Insight Notification:
💡 "Demand increased to 8 units in week 5!"

Pattern Alert:
📈 "Your inventory is trending low"
```

## Stage 6: Crisis Management

### User Actions
1. Encounters backorders
2. Sees costs spike
3. Attempts recovery
4. Adjusts strategy

### Thoughts & Emotions
- **Stress**: "I'm in trouble!"
- **Determination**: "I can fix this"
- **Learning**: "This is the bullwhip effect!"

### Touchpoints
- Backorder alerts
- Cost warnings
- Visual stress indicators
- Recovery suggestions

### Pain Points
- Panic-inducing presentations
- Unclear recovery path
- Demotivating failure

### Opportunities
- Calm crisis communication
- Recovery guidance
- Learning moments

### Design Solutions
```
Backorder Alert (non-alarming):
⚠️ "4 units backordered"
"Tip: Order extra to catch up"

Cost Spike Indicator:
📊 Costs rising - but recoverable!
```

## Stage 7: Mastery Development

### User Actions
1. Optimizes ordering
2. Minimizes costs
3. Anticipates changes
4. Achieves flow state

### Thoughts & Emotions
- **Accomplished**: "I've mastered this!"
- **Engaged**: "What's my best score?"
- **Competitive**: "Can I do better?"

### Touchpoints
- Performance metrics
- Achievement notifications
- Optimization hints
- Comparison benchmarks

### Pain Points
- Plateau in improvement
- Lack of advanced challenges
- No recognition of mastery

### Opportunities
- Advanced metrics unlock
- Performance achievements
- Difficulty progression

## Emotional Journey Map

```
Excitement    •       •                    •
              |       |                    |
Confidence    |   •   |   •          •    |
              |   |   |   |          |    |
Neutral       • - | - • - | - • -- • |    |
              |   |       |   |    | |    |
Uncertainty   |   |       • - •    | • -- •
              |   |               |
Frustration   |   |               •
              ────────────────────────────>
              Entry  Learn  Play  Crisis  Master
```

## Key Moments of Truth

### 1. First Impression (0-10 seconds)
**Success Criteria**: User understands layout and purpose
**Design Response**: Clear visual hierarchy, obvious starting point

### 2. First Order (30-60 seconds)
**Success Criteria**: User successfully places order
**Design Response**: Guided input, clear feedback

### 3. First Week Completion (1-2 minutes)
**Success Criteria**: User understands game mechanics
**Design Response**: Visible cause-effect, learning reinforcement

### 4. First Crisis (5-10 minutes)
**Success Criteria**: User recovers without quitting
**Design Response**: Supportive guidance, recoverable errors

### 5. Pattern Recognition (10-15 minutes)
**Success Criteria**: User identifies bullwhip effect
**Design Response**: Pattern highlighting, "aha!" moment

## Accessibility Considerations

### Cognitive Load Management
- Progressive complexity reveal
- Chunked information presentation
- Clear cause-effect relationships
- Reduced decision paralysis

### Error Recovery
- Non-punitive error messaging
- Clear recovery paths
- Learning from mistakes
- Positive reinforcement

### Time Pressure
- No time limits on decisions
- Pause functionality
- Save and resume
- Practice mode availability

## Success Metrics

### Engagement
- Average session duration: >15 minutes
- Order placement time: <30 seconds
- Dashboard interaction rate: >80%

### Learning
- Concept understanding: Post-game quiz >70%
- Pattern recognition: Identified by minute 10
- Strategy improvement: Cost reduction over games

### Satisfaction
- Completion rate: >85%
- Replay rate: >40%
- Recommendation rate: >60%

## Optimization Opportunities

### Quick Wins
1. Add tooltips to all data points
2. Implement smart order suggestions
3. Include visual performance indicators

### Medium-term Improvements
1. Adaptive difficulty based on performance
2. Personalized learning paths
3. Social comparison features

### Long-term Vision
1. AI coaching system
2. Multiplayer competitions
3. Real-world case studies

## Related Documentation
- [Screen States](./screen-states.md) - All UI states
- [Interactions](./interactions.md) - Detailed interaction patterns
- [Implementation](./implementation.md) - Technical requirements

## Last Updated
2025-01-18 - Initial user journey mapping