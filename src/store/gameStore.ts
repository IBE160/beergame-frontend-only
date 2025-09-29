import { create } from 'zustand';
import { GameState, GameSettings, RoleState } from '@/types';

const initialSettings: GameSettings = {
  playerRole: 'Retailer',
  duration: 20,
};

const initialRoleState: RoleState = {
  inventory: 12,
  backlog: 0,
  incomingOrders: [],
  shipmentsInTransit: [],
  cost: 0,
  orderPlacedThisWeek: 4,
};

const initialState: Omit<GameState, 'gameId' | 'history'> = {
  settings: initialSettings,
  currentWeek: 0,
  roles: {
    Retailer: { ...initialRoleState },
    Wholesaler: { ...initialRoleState },
    Distributor: { ...initialRoleState },
    Factory: { ...initialRoleState },
  },
};

export const useGameStore = create<GameState>(() => ({
  gameId: '',
  ...initialState,
  history: [],
}));
