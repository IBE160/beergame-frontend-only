import { RoleState, Order } from '@/types';

const TARGET_WEEKS_OF_COVER = 4;
const CONSTANT_DEMAND = 10;

/**
 * A simple AI ordering strategy.
 * It tries to maintain a target inventory level.
 * @param roleState - The current state of the role.
 * @returns The quantity to order.
 */
export const getAIOrder = (roleState: RoleState): number => {
  const { inventory, incomingOrders, backlog } = roleState;

  const incomingOrdersTotal = incomingOrders.reduce((sum, order) => sum + order.quantity, 0);

  const targetInventory = TARGET_WEEKS_OF_COVER * CONSTANT_DEMAND;

  const orderQuantity = targetInventory - inventory - incomingOrdersTotal + backlog;

  // Ensure order is not negative
  return Math.max(0, orderQuantity);
};
