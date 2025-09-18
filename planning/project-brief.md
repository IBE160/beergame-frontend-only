# 📄 Project Brief: Beer Game Supply Chain Simulation

## 1. Project Overview
**Summary:**
A web-based implementation of the MIT Beer Game supply chain simulation that allows players to experience and learn about supply chain dynamics through an interactive single-player game where they manage inventory, orders, and costs in a beer distribution network.

**Background / Context:**
The Beer Game is a renowned educational tool developed at MIT in the 1960s to teach supply chain management concepts. This digital implementation will make the simulation accessible online, allowing players to understand critical supply chain phenomena like the bullwhip effect, inventory management, and the impact of information delays. The application will serve as an educational platform for students, professionals, and anyone interested in understanding supply chain dynamics without requiring physical game materials or multiple participants.

---

## 2. Objectives and Goals
**Objectives:**
- Create an engaging, educational simulation that demonstrates supply chain management principles
- Enable single-player gameplay with AI-controlled supply chain partners
- Visualize supply chain dynamics through real-time data and charts
- Teach players about the bullwhip effect and importance of strategic ordering decisions
- Provide immediate feedback on player performance through cost tracking and analytics

**Success Criteria / KPIs:**
- Players can complete a full game session (20-52 weeks) without technical issues
- Game accurately simulates supply chain delays and cost calculations
- Clear visualization of inventory levels, orders, and costs throughout gameplay
- Players achieve understanding of key concepts (bullwhip effect, inventory management)
- Intuitive user interface requiring minimal learning curve
- Performance metrics clearly displayed at game completion

---

## 3. Target Audience and Users
**Primary Users:**
- Business and engineering students learning supply chain management
- Supply chain professionals seeking training tools
- Educators teaching operations management
- Business professionals interested in understanding supply chain dynamics
- Anyone curious about how supply chains work

**User Needs / Pain Points:**
- Need for accessible supply chain education without physical materials
- Difficulty understanding abstract supply chain concepts without hands-on experience
- Lack of single-player options for practicing supply chain decision-making
- Need for immediate feedback on decisions and their downstream effects
- Desire to experiment with different strategies without real-world consequences

---

## 4. Key Features and Functionality
**Core Features (MVP):**
- **Landing Page**
  - Engaging hero section with game description and value proposition
  - Clear call-to-action to start new game
  - Comprehensive "How to Play" section with game rules and instructions
  - Visual explanation of the beer supply chain structure

- **Game Configuration**
  - Role selection interface (Retailer, Wholesaler, Distributor, Manufacturer)
  - Game duration slider (20-52 weeks)
  - Start game button with validation
  - Clear display of game parameters and objectives

- **Game Dashboard**
  - Real-time inventory level display
  - Current week/round indicator
  - Incoming orders visualization
  - Backorder tracking
  - Cost accumulation display (inventory and backorder costs)
  - Historical data charts:
    - Inventory levels over time
    - Orders placed and received
    - Cost trends
  - Order input field with validation
  - "Place Order" button to advance to next week
  - Visual representation of supply chain flow

- **AI-Controlled Partners**
  - Bot players for non-selected roles
  - Normal distribution-based decision making with configurable parameters
  - Realistic ordering patterns to simulate human behavior

- **Game Completion**
  - Summary statistics and performance metrics
  - Total costs breakdown
  - Comparison with optimal performance
  - Key learnings and insights
  - Option to replay or try different role

**Nice-to-Have Features:**
- **Multiplayer Mode**
  - Real-time multiplayer sessions
  - Player matchmaking or room codes
  - Chat functionality between players

- **Advanced Analytics**
  - Bullwhip effect visualization
  - Supply chain efficiency metrics
  - Performance comparison with other players

- **Educational Content**
  - Interactive tutorials
  - Strategy guides and tips
  - Case studies from real supply chains

- **Customization Options**
  - Different product types (not just beer)
  - Adjustable cost parameters
  - Variable demand patterns
  - Custom supply chain configurations

---

## 5. Scope and Deliverables
**In Scope:**
- Next.js web application with responsive design
- Single-player game mode with AI partners
- Local storage for game state persistence
- Core game mechanics (ordering, inventory, costs)
- Data visualization using charts and graphs
- Game configuration and completion flows
- Educational content and instructions

**Out of Scope:**
- Backend API or database integration
- User authentication and accounts
- Multiplayer networking infrastructure
- Mobile native applications
- Advanced AI/ML for bot behavior
- Payment or monetization features
- Social features (leaderboards, sharing)

**Expected Deliverables:**
- Fully functional Next.js application
- Responsive UI design for desktop and mobile
- Game logic implementation
- AI bot behavior system
- Data visualization components
- Documentation for game rules and mechanics
- Source code with proper structure and comments

---

## 6. Timeline and Milestones
| Milestone         | Date        |
|-------------------|-------------|
| Project Brief Complete | 2025-01-18 |
| PRD Development | 2025-01-19 |
| UI/UX Design | 2025-01-22 |
| Core Game Development | 2025-01-29 |
| Testing & Polish | 2025-02-02 |
| Launch Ready | 2025-02-05 |

---

## 7. Roles and Responsibilities
| Role             | Responsibilities            |
|------------------|------------------------------|
| Project Owner     | Define requirements, approve deliverables |
| Product Manager   | Create PRD, manage feature prioritization |
| UI/UX Designer    | Design interfaces, user flows, visual assets |
| Frontend Developer | Implement Next.js application, game logic |
| QA Tester        | Test functionality, identify bugs |

---

## 9. Risks and Assumptions
**Known Risks:**
- **Complexity of game logic** - Mitigate by starting with simplified version and iterating
- **Browser performance with charts** - Use efficient charting libraries and optimize rendering
- **Local storage limitations** - Implement data cleanup and provide clear storage management
- **User engagement without multiplayer** - Create compelling AI behavior and clear objectives
- **Mobile responsiveness challenges** - Design mobile-first and test across devices

**Assumptions:**
- Users have modern web browsers with JavaScript enabled
- Local storage is sufficient for game state (no backend needed)
- Single-player mode provides adequate educational value
- Normal distribution is appropriate for bot decision modeling
- 20-52 week range covers typical gameplay scenarios
- Charts and visualizations will run smoothly on average devices

---

## Technical Specifications

**Technology Stack:**
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context or Zustand
- **Charts**: Chart.js or Recharts
- **Data Persistence**: Browser Local Storage
- **Build Tool**: Next.js built-in webpack
- **Deployment**: Vercel or similar static hosting

**Key Technical Decisions:**
- Frontend-only architecture for simplicity and easy deployment
- Local storage for game persistence without backend complexity
- Component-based architecture for maintainability
- Responsive design prioritizing desktop but supporting mobile
- Client-side game logic for instant feedback