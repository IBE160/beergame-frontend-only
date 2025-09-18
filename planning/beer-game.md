# Beer Game Supply Chain Simulation Research

## What is the Beer Game?

The Beer Game (also known as the Beer Distribution Game or Beer Supply Chain Game) is a role-playing simulation originally developed at MIT Sloan School of Management in the 1960s by Jay Forrester and the System Dynamics Group. It is designed to illustrate the complexities and challenges of managing a supply chain.

The simulation centers on a multi-tiered supply chain that produces and distributes a single product - beer (or root beer for younger audiences). Despite its simplicity of managing just one product, the game reveals complex dynamics like information delays, the bullwhip effect, and coordination challenges that are common in real-world supply chains.

The game has been played by thousands of students, professionals, and organizations worldwide and continues to be one of the most widely used management simulations for teaching supply chain principles.

## What are the Objectives?

The main objectives of the Beer Game are:

### Learning Objectives:
1. **Understand supply chain dynamics** - Experience firsthand how decisions at one level affect the entire supply chain
2. **Recognize the bullwhip effect** - See how small fluctuations in demand can cause increasingly larger swings in inventory and orders upstream
3. **Appreciate information sharing** - Understand the importance of timely and accurate communication across the supply chain
4. **Develop systems thinking** - Learn that local optimization doesn't necessarily lead to global optimization
5. **Experience decision-making under uncertainty** - Make decisions with limited information and time delays

### Game Performance Objectives:
1. **Minimize total supply chain costs** - Balance inventory holding costs and backorder/stockout costs
2. **Satisfy customer demand** - Ensure products are available when customers need them
3. **Maintain optimal inventory levels** - Avoid both excess inventory and stockouts
4. **Coordinate effectively** - Work as a team to optimize the entire supply chain, not just individual positions

Typical cost targets in the game:
- Individual costs: Below 7,800 units
- Total supply chain costs: Below 29,300 units
- Inventory holding cost: $0.50 per case per week
- Backorder cost: $1.00 per case per week

## What are the Roles?

The Beer Game features four distinct roles in the supply chain, each representing a different tier:

### 1. Retailer
- **Position**: Closest to the end consumer
- **Responsibilities**:
  - Receives orders directly from customers (end consumers)
  - Manages retail inventory
  - Places orders with the Wholesaler
  - First to experience demand changes
- **Challenges**: Must respond quickly to consumer demand fluctuations

### 2. Wholesaler
- **Position**: Second tier in the supply chain
- **Responsibilities**:
  - Receives orders from the Retailer
  - Manages wholesale inventory
  - Places orders with the Distributor
  - Supplies products to the Retailer
- **Challenges**: Balancing retailer demands with inventory management

### 3. Distributor
- **Position**: Third tier in the supply chain
- **Responsibilities**:
  - Receives orders from the Wholesaler
  - Manages distribution center inventory
  - Places orders with the Factory/Manufacturer
  - Distributes products to the Wholesaler
- **Challenges**: Managing larger order variations due to amplification effect

### 4. Factory/Manufacturer
- **Position**: Furthest from the end consumer
- **Responsibilities**:
  - Receives orders from the Distributor
  - Manages production and factory inventory
  - Produces beer based on production orders
  - Has production capacity and lead times
- **Challenges**: Experiences the largest demand fluctuations due to the bullwhip effect

Each role only has visibility to their immediate upstream supplier and downstream customer, mimicking real-world information silos in supply chains.

## What are the Rules?

### Basic Game Flow:
1. **Game Duration**: Typically 20-52 weeks (rounds)
2. **Product**: One product (beer) flowing through the supply chain
3. **Communication**: Limited to orders - no verbal communication between roles during play

### Turn Sequence (Each Week):
1. **Receive Inventory**: Advance shipping delays and receive new inventory
2. **Fill Orders**: Check incoming orders and ship available inventory
3. **Record Position**: Track inventory levels and backorders
4. **Advance Orders**: Move order slips through the delay pipeline
5. **Place New Orders**: Decide and place orders with your supplier

### Key Constraints:
1. **Information Delays**:
   - Orders take 1 week to reach suppliers
   - Shipments take 2 weeks to arrive after ordering

2. **No Order Cancellation**: Once placed, orders cannot be cancelled or expedited

3. **Must Fill Orders**: You must ship all available inventory to fill orders

4. **Backorders Accumulate**: Unfilled orders become backorders that must be filled when inventory arrives

5. **Starting Conditions**:
   - Each position starts with 12 units in inventory
   - 4 units in each shipping delay box
   - Initial orders of 4 units in the pipeline

### Cost Structure:
- **Inventory Holding Cost**: $0.50 per case in inventory per week
- **Backorder Cost**: $1.00 per case on backorder per week
- **Goal**: Minimize total costs across the supply chain

### Information Visibility:
- Players can only see their own inventory, backorders, and costs
- Orders from customers are the only demand information available
- No visibility into other positions' inventory or orders (unless playing in transparent mode)

### Special Rules for Different Modes:
- **Single Player**: Human plays retailer, other positions are automated
- **Multiplayer**: Each position played by a human player
- **Transparent Mode**: Players can see each other's inventory levels
- **Team Mode**: Players can communicate and coordinate strategies

### Common Pitfalls to Avoid:
1. **Overreacting to demand changes** - Leads to the bullwhip effect
2. **Hoarding inventory** - Increases holding costs unnecessarily
3. **Under-ordering** - Creates stockouts and backorder penalties
4. **Ignoring lead times** - Failing to account for delays in the system
5. **Local optimization** - Optimizing your position at the expense of the total supply chain