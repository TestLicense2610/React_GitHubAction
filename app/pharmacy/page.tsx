'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MedicationCardComponent } from '@/components/web-components';

const medications = [
  {
    id: 1,
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    quantity: '30 tablets',
    price: '$15.99',
    icon: '💊',
    inStock: true,
  },
  {
    id: 2,
    name: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once at bedtime',
    quantity: '30 tablets',
    price: '$22.50',
    icon: '💊',
    inStock: true,
  },
  {
    id: 3,
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    quantity: '60 tablets',
    price: '$12.99',
    icon: '💊',
    inStock: true,
  },
  {
    id: 4,
    name: 'Ibuprofen',
    dosage: '200mg',
    frequency: 'As needed',
    quantity: '50 tablets',
    price: '$8.99',
    icon: '💊',
    inStock: true,
  },
  {
    id: 5,
    name: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily',
    quantity: '21 capsules',
    price: '$18.50',
    icon: '💊',
    inStock: false,
  },
  {
    id: 6,
    name: 'Vitamin D3',
    dosage: '2000 IU',
    frequency: 'Once daily',
    quantity: '60 capsules',
    price: '$10.99',
    icon: '🔶',
    inStock: true,
  },
];

export default function PharmacyPage() {
  const [cart, setCart] = useState<typeof medications[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (med: typeof medications[0]) => {
    setCart([...cart, med]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Online Pharmacy
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Browse and order medications with home delivery
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search medications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Medications Grid */}
            <h2 className="text-2xl font-bold mb-6">Available Medications</h2>
            <div className="space-y-4">
              {filteredMeds.length > 0 ? (
                filteredMeds.map((med) => (
                  <div
                    key={med.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <MedicationCardComponent
                        name={med.name}
                        dosage={med.dosage}
                        frequency={med.frequency}
                        quantity={med.quantity}
                        icon={med.icon}
                      />
                    </div>
                    <div className="ml-4 text-right flex flex-col items-end gap-2">
                      <p className="text-2xl font-bold text-primary">{med.price}</p>
                      {med.inStock ? (
                        <Button
                          onClick={() => addToCart(med)}
                          className="bg-accent hover:bg-accent/90 text-white"
                          size="sm"
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <Button variant="outline" disabled size="sm">
                          Out of Stock
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">No medications found</p>
                </Card>
              )}
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20 border-accent">
              <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
              {cart.length > 0 ? (
                <>
                  <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between pb-3 border-b border-border">
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.dosage}</p>
                          <p className="text-sm text-accent font-semibold">{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive/80 font-bold ml-2"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Subtotal:</span>
                      <span className="font-bold text-lg text-primary">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      <p>Free shipping on orders over $50</p>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 mb-2">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setCart([])}
                  >
                    Clear Cart
                  </Button>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-sm mb-4">Your cart is empty</p>
                  <p className="text-xs text-muted-foreground">
                    Add medications to get started
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '🚚',
              title: 'Fast Delivery',
              description: 'Same-day delivery available in select areas',
            },
            {
              icon: '🔒',
              title: 'Secure Payment',
              description: 'All transactions are encrypted and secure',
            },
            {
              icon: '💊',
              title: 'Licensed Pharmacists',
              description: 'All medications verified by certified pharmacists',
            },
          ].map((feature, idx) => (
            <Card key={idx} className="p-6 text-center">
              <p className="text-4xl mb-3">{feature.icon}</p>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
