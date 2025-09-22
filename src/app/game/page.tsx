'use client';

import { Configuration } from '@/components/game/Configuration';
import { Dashboard } from '@/components/game/Dashboard';
import useGameStore from '@/store/gameStore';

export default function GamePage() {
  const { playerRole } = useGameStore();

  return playerRole ? <Dashboard /> : <Configuration />;
}
