"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";
import { Role } from "@/types";
import { Factory, ShoppingCart, Truck, Users } from "lucide-react";

const roles: {
  name: Role;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Retailer",
    description: "You are the face of the business, selling directly to customers.",
    icon: <ShoppingCart size={48} className="text-primary" />,
  },
  {
    name: "Wholesaler",
    description: "You buy in bulk from the distributor and supply to retailers.",
    icon: <Users size={48} className="text-primary" />,
  },
  {
    name: "Distributor",
    description: "You are the regional hub, shipping truckloads to wholesalers.",
    icon: <Truck size={48} className="text-primary" />,
  },
  {
    name: "Factory",
    description: "You are the source, brewing the beer to meet demand.",
    icon: <Factory size={48} className="text-primary" />,
  },
];

export function Configuration() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [duration, setDuration] = useState<number>(20);
  const router = useRouter();

  const handleStartGame = () => {
    if (selectedRole) {
      // TODO: Call GameController.initializeGame in Step 15
      console.log("Starting game with:", {
        playerRole: selectedRole,
        duration,
      });
      // For now, we'll just log this. Navigation will happen after state is set.
    }
  };

  return (
    <div className="bg-primary-light min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Card variant="default" padding="large">
          <div className="text-center">
            <h1 className="text-h2 font-bold">Game Setup</h1>
            <p className="mt-2 text-body text-neutral-600">
              Choose your role and set the game duration to begin.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-h4 font-semibold">Choose Your Role</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roles.map((role) => (
                <Card
                  key={role.name}
                  variant="selectable"
                  padding="large"
                  selected={selectedRole === role.name}
                  onClick={() => setSelectedRole(role.name)}
                  className="text-center flex flex-col items-center justify-center cursor-pointer"
                >
                  {role.icon}
                  <h3 className="mt-4 text-h5 font-bold">{role.name}</h3>
                  <p className="mt-1 text-caption text-neutral-500">
                    {role.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-h4 font-semibold">Game Duration (Weeks)</h2>
            <div className="mt-4 flex items-center gap-4">
              <Slider
                min="20"
                max="52"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
              <span className="font-bold text-h4 text-primary w-16 text-center">
                {duration}
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={handleStartGame}
              disabled={!selectedRole}
              className="w-full md:w-auto"
            >
              Start Game
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
