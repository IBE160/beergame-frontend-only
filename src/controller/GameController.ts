import useGameStore from '../store/gameStore';
import { GameState, Role, RoleState, Order, Shipment } from '../types';

class GameController {
  private useStore = useGameStore;

  constructor() {
    // Initialize with default state or load from storage
  }

  public initializeGame(playerRole: Role, gameWeeks: number): void {
    const roles: Role[] = ['Retailer', 'Wholesaler', 'Distributor', 'Manufacturer'];
    const initialRoleState: Omit<RoleState, 'role'> = {
      inventory: 12,
      backlog: 0,
      incomingOrders: [],
      outgoingOrders: [],
      incomingShipments: [],
      outgoingShipments: [],
      cost: 0,
    };

    const initialState: GameState = {
      playerRole,
      currentWeek: 1,
      gameDuration: gameWeeks,
      roles: roles.reduce((acc, role) => {
        acc[role] = { ...initialRoleState, role };
        return acc;
      }, {} as Record<Role, RoleState>),
      history: [],
    };

    this.useStore.setState(initialState);
    console.log(`Initializing game for ${playerRole} for ${gameWeeks} weeks.`);
  }

  public advanceWeek(): void {
    const { roles, currentWeek, playerRole } = this.useStore.getState();
    const newRolesState = JSON.parse(JSON.stringify(roles));

    const roleOrder: Role[] = ['Manufacturer', 'Distributor', 'Wholesaler', 'Retailer'];

    // Customer demand for the retailer
    if (currentWeek <= 4) {
      newRolesState.Retailer.incomingOrders.push({ id: `w${currentWeek}-c`, week: currentWeek, quantity: 4 });
    } else {
      newRolesState.Retailer.incomingOrders.push({ id: `w${currentWeek}-c`, week: currentWeek, quantity: 8 });
    }

    roleOrder.forEach((roleName, index) => {
      const upstreamPartner = index > 0 ? roleOrder[index - 1] : null;
      const downstreamPartner = index < roleOrder.length - 1 ? roleOrder[index + 1] : null;

      const roleState = newRolesState[roleName];

      // 1. Receive incoming shipments
      roleState.incomingShipments.forEach(shipment => {
        roleState.inventory += shipment.quantity;
      });
      roleState.incomingShipments = [];

      // 2. Process incoming orders
      const totalDemand = roleState.incomingOrders.reduce((sum, order) => sum + order.quantity, 0) + roleState.backlog;
      let shippedQuantity = 0;

      if (totalDemand > 0) {
        if (roleState.inventory >= totalDemand) {
          shippedQuantity = totalDemand;
          roleState.inventory -= totalDemand;
          roleState.backlog = 0;
        } else {
          shippedQuantity = roleState.inventory;
          roleState.inventory = 0;
          roleState.backlog = totalDemand - shippedQuantity;
        }
      }

      if (shippedQuantity > 0 && downstreamPartner) {
        newRolesState[downstreamPartner].incomingShipments.push({
          id: `w${currentWeek}-${roleName}`,
          week: currentWeek,
          quantity: shippedQuantity,
          from: roleName,
          to: downstreamPartner,
        });
      }
      roleState.incomingOrders = [];

      // 3. Update costs
      roleState.cost += roleState.inventory * 0.5; // Inventory holding cost
      roleState.cost += roleState.backlog * 1; // Backlog cost

      // 4. Place orders to upstream partner
      if (roleName !== playerRole) {
        // Simple AI for non-player roles
        const orderQuantity = Math.max(0, totalDemand - roleState.inventory + 4);
        if (upstreamPartner) {
            newRolesState[upstreamPartner].incomingOrders.push({ id: `w${currentWeek}-${roleName}`, week: currentWeek, quantity: orderQuantity });
        }
      }
    });

    this.useStore.setState(prevState => ({
      ...prevState,
      roles: newRolesState,
      currentWeek: prevState.currentWeek + 1,
      history: [...prevState.history, prevState.roles],
    }));
  }

  public placeOrder(quantity: number): void {
    const { playerRole, roles, currentWeek } = this.useStore.getState();
    if (!playerRole) return;

    const upstreamPartner = this.getUpstreamPartner(playerRole);
    if (!upstreamPartner) return;

    const newRolesState = JSON.parse(JSON.stringify(roles));
    newRolesState[upstreamPartner].incomingOrders.push({ id: `w${currentWeek}-${playerRole}`, week: currentWeek, quantity });

    this.useStore.setState({ roles: newRolesState });

    this.advanceWeek();
  }

  private getUpstreamPartner(role: Role): Role | null {
    switch (role) {
      case 'Retailer': return 'Wholesaler';
      case 'Wholesaler': return 'Distributor';
      case 'Distributor': return 'Manufacturer';
      default: return null;
    }
  }

  public getGameState(): GameState {
    return this.useStore.getState();
  }
}

export default GameController;
