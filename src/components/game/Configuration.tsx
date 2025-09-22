'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Slider } from '@/components/ui/Slider';
import { Role } from '@/types';

const roles: Role[] = ['Retailer', 'Wholesaler', 'Distributor', 'Manufacturer'];

export function Configuration() {
  const [selectedRole, setSelectedRole] = React.useState<Role | null>(null);
  const [duration, setDuration] = React.useState([26]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Game Configuration</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Select Your Role</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((role) => (
            <Card
              key={role}
              variant="selectable"
              selected={selectedRole === role}
              onClick={() => setSelectedRole(role)}
              className="p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold">{role}</h3>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Game Duration (Weeks)</h2>
        <div className="flex items-center gap-4">
          <Slider
            min={10}
            max={52}
            step={1}
            value={duration}
            onValueChange={setDuration}
          />
          <span className="font-semibold text-lg">{duration[0]}</span>
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" disabled={!selectedRole}>
          Start Game
        </Button>
      </div>
    </div>
  );
}
