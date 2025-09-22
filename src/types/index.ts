export type Role = "retailer" | "wholesaler" | "distributor" | "manufacturer";

export interface Order {
  week: number;
  quantity: number;
}

export interface Shipment {
  week: number;
  quantity: number;
}

export interface RoleState {
  inventory: number;
  backlog: number;
  incomingOrders: Order[];
  outgoingShipments: Shipment[];
  cost: number;
}

export interface GameState {
  week: number;
  roles: {
    [key in Role]: RoleState;
  };
  totalCost: number;
}
