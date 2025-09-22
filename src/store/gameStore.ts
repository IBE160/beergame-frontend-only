import { create } from 'zustand';
import { GameState } from '../types';

interface GameStore extends GameState {
  // Actions will be added later
}

const useGameStore = create<GameStore>((set) => ({
  week: 0,
  roles: {
    retailer: {
      inventory: 12,
      backlog: 0,
      incomingOrders: [],
      outgoingShipments: [],
      cost: 0,
    },
    wholesaler: {
      inventory: 12,
      backlog: 0,
      incomingOrders: [],
      outgoingShipments: [],
      cost: 0,
    },
    distributor: {
      inventory: 12,
      backlog: 0,
      incomingOrders: [],
      outgoingShipments: [],
      cost: 0,
    },
    manufacturer: {
      inventory: 12,
      backlog: 0,
      incomingOrders: [],
      outgoingShipments: [],
      cost: 0,
    },
  },
  totalCost: 0,
}));

export default useGameStore;
