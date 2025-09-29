import { Button } from "@/components/ui/Button";
import { ArrowRight, BarChart, Beer, Factory, ShoppingCart, Truck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-neutral-50 text-neutral-800">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Beer className="text-accent-primary" size={28} />
            <h1 className="text-h5 font-bold text-primary">BeerGame Sim</h1>
          </div>
          <Button>Play Now</Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6 bg-primary-light overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
            <div className="relative z-10">
                <h1 className="text-h1 font-bold text-primary-dark tracking-tighter">
                    Master the Chaos of the Supply Chain
                </h1>
                <p className="mt-4 text-body_large text-neutral-700 max-w-3xl mx-auto">
                    Experience the Bullwhip Effect firsthand in the classic Beer Game simulation. Can you manage your inventory and costs, or will you amplify the chaos?
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button variant="primary" size="default" className="shadow-lg shadow-accent-primary/20">
                        Start Game <ArrowRight className="ml-2" size={20} />
                    </Button>
                    <Button variant="secondary" size="default">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>

        {/* What is it? Section */}
        <section className="py-2xl bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-h2 font-bold text-neutral-900">What is the Beer Game?</h2>
              <p className="mt-4 text-body text-neutral-600">
                The Beer Game isn't about drinking beer. It's a powerful simulation developed at MIT to demonstrate fundamental principles of supply chain management. Four players—a Retailer, Wholesaler, Distributor, and Factory—must work together to meet customer demand, but are hampered by communication delays and the challenge of predicting orders.
              </p>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section className="py-2xl bg-neutral-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-bold text-neutral-900">How to Play</h2>
              <p className="mt-4 text-body text-neutral-600 max-w-3xl mx-auto">The goal is simple: minimize costs. The execution is anything but.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-block bg-primary-light p-4 rounded-full">
                  <ShoppingCart className="text-primary" size={32} />
                </div>
                <h3 className="text-h4 font-semibold mt-4">1. Receive Orders</h3>
                <p className="mt-2 text-body_small text-neutral-600">Each week, you'll receive an order from your downstream partner. Your job is to ship them beer from your inventory.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-block bg-primary-light p-4 rounded-full">
                  <Truck className="text-primary" size={32} />
                </div>
                <h3 className="text-h4 font-semibold mt-4">2. Place Orders</h3>
                <p className="mt-2 text-body_small text-neutral-600">Based on the orders you're getting and your current inventory, you must place an order with your upstream partner.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-block bg-primary-light p-4 rounded-full">
                  <BarChart className="text-primary" size={32} />
                </div>
                <h3 className="text-h4 font-semibold mt-4">3. Minimize Costs</h3>
                <p className="mt-2 text-body_small text-neutral-600">You're charged for holding excess inventory and for every order you can't fill (backlog). The player with the lowest total cost wins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Roles Section */}
        <section className="py-2xl bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-h2 font-bold text-neutral-900">The Supply Chain Roles</h2>
                    <p className="mt-4 text-body text-neutral-600 max-w-3xl mx-auto">Communication is limited. You only know what your direct partner orders.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200"></div>
                    <div className="relative flex justify-between items-start">
                        {/* Role 1: Factory */}
                        <div className="w-1/4 text-center">
                            <div className="relative mb-4">
                                <div className="inline-block bg-white p-5 rounded-full border-2 border-neutral-200">
                                    <Factory className="text-primary" size={40} />
                                </div>
                            </div>
                            <h3 className="text-h5 font-semibold">Factory</h3>
                            <p className="text-caption text-neutral-500">Produces the beer</p>
                        </div>
                        {/* Role 2: Distributor */}
                        <div className="w-1/4 text-center">
                            <div className="relative mb-4">
                                <div className="inline-block bg-white p-5 rounded-full border-2 border-neutral-200">
                                    <Truck className="text-primary" size={40} />
                                </div>
                            </div>
                            <h3 className="text-h5 font-semibold">Distributor</h3>
                            <p className="text-caption text-neutral-500">Distributes to wholesalers</p>
                        </div>
                        {/* Role 3: Wholesaler */}
                        <div className="w-1/4 text-center">
                            <div className="relative mb-4">
                                <div className="inline-block bg-white p-5 rounded-full border-2 border-neutral-200">
                                    <Users className="text-primary" size={40} />
                                </div>
                            </div>
                            <h3 className="text-h5 font-semibold">Wholesaler</h3>
                            <p className="text-caption text-neutral-500">Supplies retailers</p>
                        </div>
                        {/* Role 4: Retailer */}
                        <div className="w-1/4 text-center">
                            <div className="relative mb-4">
                                <div className="inline-block bg-white p-5 rounded-full border-2 border-neutral-200">
                                    <ShoppingCart className="text-primary" size={40} />
                                </div>
                            </div>
                            <h3 className="text-h5 font-semibold">Retailer</h3>
                            <p className="text-caption text-neutral-500">Sells to the customer</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-body_small text-neutral-600"><span className="font-semibold text-primary-dark">Orders</span> flow from Retailer to Factory.</p>
                        <p className="text-body_small text-neutral-600"><span className="font-semibold text-accent-secondary">Shipments</span> flow from Factory to Retailer.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Why it Matters Section */}
        <section className="py-2xl bg-neutral-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold text-neutral-900">The Bullwhip Effect</h2>
              <p className="mt-4 text-body text-neutral-600">
                This is the core lesson of the game. You'll discover how a small, predictable change in customer demand can become wildly amplified as it travels up the supply chain, leading to massive overstocking and shortages.
              </p>
              <p className="mt-4 text-body text-neutral-600">
                Understanding this phenomenon is critical for anyone in business, logistics, or management. This simulation makes the concept tangible and unforgettable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              {/* Placeholder for a chart visualization */}
              <BarChart size={150} className="mx-auto text-primary/20" />
              <p className="text-center mt-4 font-semibold text-primary-dark">Order volatility increases up the supply chain.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-2xl bg-primary-light">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-h2 font-bold text-primary-dark">Ready to Test Your Skills?</h2>
            <p className="mt-4 text-body text-neutral-700 max-w-2xl mx-auto">
              No spreadsheets, no complex setup. Just pure supply chain strategy. Jump in and see if you can beat the bullwhip.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="default" className="shadow-lg shadow-accent-primary/20">
                Start Your Supply Chain
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-lg bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6 text-center text-neutral-500 text-body_small">
          <p>&copy; 2025 BeerGame Sim. A project to demonstrate supply chain principles.</p>
        </div>
      </footer>
    </div>
  );
}