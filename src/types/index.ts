export type Role = 'Retailer' | 'Wholesaler' | 'Distributor' | 'Factory';

export interface Order {
  weekPlaced: number;
  quantity: number;
  from: Role;
  to: Role;
}

export interface Shipment {
  weekShipped: number;
  weekDue: number;
  quantity: number;
  from: Role;
  to: Role;
}

export interface RoleState {
  inventory: number;
  backlog: number;
  incomingOrders: Order[];
  shipmentsInTransit: Shipment[];
  cost: number;
  orderPlacedThisWeek: number;
}

export interface GameSettings {
  playerRole: Role;
  duration: number; // in weeks
}

export interface GameHistoryEntry {
    week: number;
    roles: Record<Role, {
        inventory: number;
        backlog: number;
        cost: number;
        order: number;
    }>;
}


export interface GameState {
  gameId: string;
  settings: GameSettings;
  currentWeek: number;
  roles: Record<Role, RoleState>;
  history: GameHistoryEntry[];
}
