'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import GameController from '@/controller/GameController';

export function OrderPlacement() {
  const [quantity, setQuantity] = React.useState(0);
  const gameController = new GameController();

  const handlePlaceOrder = () => {
    gameController.placeOrder(quantity);
  };

  return (
    <div className="mt-8 p-4 border-t border-neutral-200">
      <h2 className="text-2xl font-semibold mb-4">Place Your Order</h2>
      <div className="flex items-center gap-4">
        <Input
          type="number"
          min={0}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 0)}
          className="max-w-xs"
        />
        <Button onClick={handlePlaceOrder}>Place Order</Button>
      </div>
    </div>
  );
}
