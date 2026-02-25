'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const availableSlots = [
  { id: 1, doctor: 'Dr. Sarah Johnson', time: '10:00 AM', date: 'Today' },
  { id: 2, doctor: 'Dr. Michael Chen', time: '11:30 AM', date: 'Today' },
  { id: 3, doctor: 'Dr. Emily Rodriguez', time: '2:00 PM', date: 'Today' },
  { id: 4, doctor: 'Dr. James Wilson', time: '3:30 PM', date: 'Today' },
  { id: 5, doctor: 'Dr. Lisa Anderson', time: '10:00 AM', date: 'Tomorrow' },
  { id: 6, doctor: 'Dr. David Kumar', time: '4:00 PM', date: 'Tomorrow' },
];

const consultationTypes = [
  {
    icon: '🎥',
    title: 'Video Consultation',
    description: 'Face-to-face video call with a doctor',
    duration: '30 minutes',
    price: '$49.99',
  },
  {
    icon: '📞',
    title: 'Phone Consultation',
    description: 'Voice call with a healthcare professional',
    duration: '20 minutes',
    price: '$29.99',
  },
  {
    icon: '💬',
    title: 'Chat Consultation',
    description: 'Text-based consultation with a doctor',
    duration: 'Ongoing',
    price: '$19.99',
  },
];

export default function ConsultationPage() {
  const [selectedType, setSelectedType] = useState<string>('video');
  const [selectedSlot, setSelectedSlot] = useState<typeof availableSlots[0] | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBooking = (slot: typeof availableSlots[0]) => {
    setSelectedSlot(slot);
    setShowConfirmation(true);
  };

  const handleConfirmBooking = () => {
    alert(`Consultation booked with ${selectedSlot?.doctor} at ${selectedSlot?.time}!`);
    setShowConfirmation(false);
    setSelectedSlot(null);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Telemedicine Consultation
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Connect with doctors from the comfort of your home
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Consultation Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Consultation Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {consultationTypes.map((type, idx) => (
              <Card
                key={idx}
                className={`p-6 cursor-pointer transition-all ${
                  selectedType === type.title.split(' ')[0].toLowerCase()
                    ? 'border-primary border-2 shadow-lg'
                    : 'border-border hover:shadow-md'
                }`}
                onClick={() => setSelectedType(type.title.split(' ')[0].toLowerCase())}
              >
                <p className="text-4xl mb-4">{type.icon}</p>
                <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold">{type.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="text-lg font-bold text-accent">{type.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">How Video Consultation Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Book a Slot',
                description: 'Choose a time that works for you',
              },
              {
                step: '2',
                title: 'Receive Link',
                description: 'Get video consultation link via email',
              },
              {
                step: '3',
                title: 'Connect',
                description: 'Join the call at scheduled time',
              },
              {
                step: '4',
                title: 'Get Prescription',
                description: 'Receive prescription digitally',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Slots */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Available Time Slots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSlots.map((slot) => (
              <Card
                key={slot.id}
                className="p-6 border-muted hover:border-accent hover:shadow-md transition-all cursor-pointer"
                onClick={() => handleBooking(slot)}
              >
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary">{slot.date}</p>
                  <p className="text-2xl font-bold">{slot.time}</p>
                </div>
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <span className="text-2xl">👨‍⚕️</span>
                  <div>
                    <p className="font-semibold text-sm">{slot.doctor}</p>
                    <p className="text-xs text-muted-foreground">Available now</p>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90">
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Booking Confirmation Modal */}
      {showConfirmation && selectedSlot && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowConfirmation(false)}
        >
          <Card
            className="max-w-md w-full bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Confirm Booking</h2>

              <div className="space-y-4 mb-6 bg-muted/30 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doctor:</span>
                  <span className="font-semibold">{selectedSlot.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-semibold">{selectedSlot.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-semibold">{selectedSlot.time}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-4">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fee:</span>
                  <span className="font-bold text-lg text-accent">$49.99</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-6 text-center">
                You will receive a video call link 15 minutes before the consultation
              </p>

              <div className="space-y-3">
                <Button
                  onClick={handleConfirmBooking}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Confirm & Pay
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowConfirmation(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Features Section */}
      <section className="py-16 bg-muted/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose Our Telemedicine?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: 'End-to-End Encrypted', description: 'Your privacy is protected' },
              { icon: '⏱️', title: 'No Waiting Time', description: 'Consult from home instantly' },
              { icon: '💾', title: 'Digital Records', description: 'Get instant prescriptions' },
              { icon: '🔄', title: 'Easy Follow-up', description: 'Schedule follow-ups anytime' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl mb-3">{feature.icon}</p>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
