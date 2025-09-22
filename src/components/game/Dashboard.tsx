'use client';

import useGameStore from '@/store/gameStore';
import { MetricCard } from './MetricCard';

export function Dashboard() {
  const { playerRole, roles, currentWeek } = useGameStore();

  if (!playerRole) {
    return null; // or a loading state
  }

  const playerState = roles[playerRole];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{playerRole} Dashboard</h1>
        <p className="text-xl font-semibold">Week: {currentWeek}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Inventory" value={playerState.inventory} />
        <MetricCard label="Backlog" value={playerState.backlog} />
        <MetricCard label="Incoming Orders" value={playerState.incomingOrders.length} />
        <MetricCard label="Total Cost" value={`$${playerState.cost}`} />
      </div>
    </div>
  );
}
