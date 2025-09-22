import useGameStore from '../store/gameStore';
import { GameState, Role, RoleState } from '../types';

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
    // Placeholder for advancing the game by one week
    console.log('Advancing to the next week.');
  }

  public placeOrder(quantity: number): void {
    // Placeholder for placing an order
    console.log(`Placing order for ${quantity} units.`);
  }

  public getGameState(): GameState {
    return this.useStore.getState();
  }
}

export default GameController;
