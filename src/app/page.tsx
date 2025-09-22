import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The Beer Game
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-neutral-600">
            A supply chain simulation that will teach you about the bullwhip effect, and how to avoid it.
          </p>
          <div className="mt-8">
            <Button size="lg">Play Now</Button>
          </div>
        </section>

        {/* How to Play Section */}
        <section id="how-to-play" className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center">How to Play</h2>
            <div className="mt-8 text-lg text-neutral-700 space-y-4">
              <p>
                The Beer Game is a role-playing simulation where players take on the role of one of four stages in a supply chain: Retailer, Wholesaler, Distributor, or Manufacturer.
              </p>
              <div className="my-8 flex justify-center">
                <Image
                  src="/supply-chain.svg"
                  alt="Supply chain diagram"
                  width={800}
                  height={100}
                />
              </div>
              <p>
                The goal is to minimize the total cost for your team by managing your inventory and fulfilling customer orders. Each week, you will receive orders from your downstream partner and place orders with your upstream partner. The challenge is that you only have local information, and you must anticipate the demand from the end customer.
              </p>
              <p>
                This simulation demonstrates the bullwhip effect, where small fluctuations in demand at the retail level can cause progressively larger fluctuations at the wholesale, distributor, and manufacturer levels.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-neutral-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} The Beer Game. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
