'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AppointmentCardComponent } from '@/components/web-components';

const appointmentsList = [
  {
    id: 1,
    doctor: 'Dr. Sarah Johnson',
    date: '2024-02-25',
    time: '10:00 AM',
    location: 'Clinic A, Room 101',
    status: 'Confirmed',
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    date: '2024-03-05',
    time: '2:30 PM',
    location: 'Clinic B, Room 205',
    status: 'Scheduled',
  },
];

export default function AppointmentsPage() {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState(appointmentsList);

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const newAppointment = {
      id: appointments.length + 1,
      doctor: formData.get('doctor') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      location: formData.get('location') as string,
      status: 'Pending',
    };

    setAppointments([...appointments, newAppointment]);
    setShowForm(false);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Manage Your Appointments
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Schedule, view, and manage all your medical appointments
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Upcoming Appointments */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
                <Button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-primary hover:bg-primary/90"
                >
                  {showForm ? 'Cancel' : 'Book New'}
                </Button>
              </div>

              {showForm && (
                <Card className="p-6 mb-6 border-primary/50">
                  <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
                  <form onSubmit={handleBookAppointment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Select Doctor
                      </label>
                      <select
                        name="doctor"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Choose a doctor...</option>
                        <option value="Dr. Sarah Johnson">Dr. Sarah Johnson - Cardiology</option>
                        <option value="Dr. Michael Chen">Dr. Michael Chen - Neurology</option>
                        <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez - Dermatology</option>
                        <option value="Dr. James Wilson">Dr. James Wilson - Orthopedics</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input
                          type="date"
                          name="date"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Time</label>
                        <input
                          type="time"
                          name="time"
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="e.g., Clinic A, Room 101"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Confirm Booking
                    </Button>
                  </form>
                </Card>
              )}

              <div className="space-y-4">
                {appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <AppointmentCardComponent
                      key={appointment.id}
                      doctor={appointment.doctor}
                      date={appointment.date}
                      time={appointment.time}
                      location={appointment.location}
                      status={appointment.status}
                    />
                  ))
                ) : (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">No appointments scheduled yet</p>
                    <Link href="/doctors">
                      <Button className="bg-primary hover:bg-primary/90">
                        Find a Doctor
                      </Button>
                    </Link>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Calendar */}
          <div className="lg:col-span-1">
            <Card className="p-4 sticky top-20">
              <h3 className="text-lg font-semibold mb-4">Appointment Calendar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check available time slots and book your appointment
              </p>
              <div className="bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=UTC&bgcolor=%23ffffff&src=Y180ZGZjaWVma2Zwc2tqMjNzcTI1NWwwdDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5"
                  style={{
                    border: 0,
                    width: '100%',
                    height: 400,
                  }}
                  frameBorder="0"
                  scrolling="no"
                  title="Medical Appointment Calendar"
                ></iframe>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Calendar shows availability for all our healthcare professionals
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
