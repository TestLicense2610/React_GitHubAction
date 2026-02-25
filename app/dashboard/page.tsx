'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  HealthMetricCardComponent,
  HealthIndicatorComponent,
  AppointmentCardComponent,
  MedicationCardComponent,
} from '@/components/web-components';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'medications' | 'appointments'>('overview');

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 text-balance">
                Welcome Back!
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Here's your health overview for today
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-primary-foreground rounded-full text-3xl">
              👤
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
          {['overview', 'metrics', 'medications', 'appointments'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-3 font-semibold border-b-2 transition-colors capitalize whitespace-nowrap ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Health Snapshot</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Appointments', value: '3', icon: '📅' },
                  { label: 'Active Medications', value: '2', icon: '💊' },
                  { label: 'Health Score', value: '85%', icon: '⭐' },
                  { label: 'Days Streak', value: '15', icon: '🔥' },
                ].map((stat, idx) => (
                  <Card key={idx} className="p-4 text-center">
                    <p className="text-3xl mb-2">{stat.icon}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
                <Link href="/appointments">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                <AppointmentCardComponent
                  doctor="Dr. Sarah Johnson"
                  date="Feb 25, 2024"
                  time="10:00 AM"
                  location="Clinic A, Room 101"
                  status="Confirmed"
                />
                <AppointmentCardComponent
                  doctor="Dr. Michael Chen"
                  date="Mar 05, 2024"
                  time="2:30 PM"
                  location="Clinic B, Room 205"
                  status="Scheduled"
                />
              </div>
            </div>

            {/* Active Medications */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Current Medications</h2>
                <Link href="/pharmacy">
                  <Button variant="outline" size="sm">
                    Refill
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                <MedicationCardComponent
                  name="Lisinopril"
                  dosage="10mg"
                  frequency="Once daily"
                  quantity="30 tablets"
                  icon="💊"
                />
                <MedicationCardComponent
                  name="Atorvastatin"
                  dosage="20mg"
                  frequency="Once at bedtime"
                  quantity="30 tablets"
                  icon="💊"
                />
              </div>
            </div>
          </div>
        )}

        {/* Health Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Health Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <HealthMetricCardComponent
                  title="Blood Pressure"
                  value="120/80"
                  unit="mmHg"
                  badge="NORMAL"
                  description="Last measured: 2 hours ago"
                >
                  <HealthIndicatorComponent text="Healthy Range" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="Heart Rate"
                  value="72"
                  unit="bpm"
                  badge="GOOD"
                  description="Resting heart rate"
                >
                  <HealthIndicatorComponent text="Normal Range" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="BMI"
                  value="24.5"
                  unit="kg/m²"
                  badge="HEALTHY"
                  description="Weight: 75kg, Height: 175cm"
                >
                  <HealthIndicatorComponent text="Healthy Weight" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="Blood Glucose"
                  value="95"
                  unit="mg/dL"
                  badge="NORMAL"
                  description="Fasting glucose level"
                >
                  <HealthIndicatorComponent text="Healthy Level" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="Sleep Duration"
                  value="7.5"
                  unit="hours"
                  badge="GOOD"
                  description="Last night's sleep"
                >
                  <HealthIndicatorComponent text="Optimal Sleep" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="Stress Level"
                  value="4/10"
                  unit="scale"
                  badge="LOW"
                  description="Current stress level"
                >
                  <HealthIndicatorComponent text="Well Managed" />
                </HealthMetricCardComponent>
              </div>
            </div>

            {/* Embedded Health Tracking Widget */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Health Trends</h3>
              <iframe
                src="https://www.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23FFFFFF&src=Y18yN2UzZWY5OTJlMjAxMmEwZjAwYzA1MzEzZWZjNzQ4MmQ4OTc0YTA1NjE1ODY5YmY5NWE3YjFlOGMyODQ1MzExQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5"
                style={{
                  border: 0,
                  width: '100%',
                  height: 400,
                }}
                frameBorder="0"
                scrolling="no"
                title="Health Events Calendar"
              ></iframe>
            </Card>
          </div>
        )}

        {/* Medications Tab */}
        {activeTab === 'medications' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Medication Management</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {[
                  {
                    name: 'Lisinopril',
                    dosage: '10mg',
                    frequency: 'Once daily',
                    quantity: '30 tablets',
                    startDate: 'Jan 15, 2024',
                    refillDate: 'May 15, 2024',
                  },
                  {
                    name: 'Atorvastatin',
                    dosage: '20mg',
                    frequency: 'Once at bedtime',
                    quantity: '30 tablets',
                    startDate: 'Jan 15, 2024',
                    refillDate: 'May 15, 2024',
                  },
                  {
                    name: 'Vitamin D3',
                    dosage: '2000 IU',
                    frequency: 'Once daily',
                    quantity: '60 capsules',
                    startDate: 'Feb 01, 2024',
                    refillDate: 'Jun 01, 2024',
                  },
                ].map((med, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-l-accent">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{med.name}</h3>
                        <p className="text-sm text-muted-foreground">{med.dosage} • {med.frequency}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Refill
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Quantity</p>
                        <p className="font-semibold">{med.quantity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Started</p>
                        <p className="font-semibold">{med.startDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Next Refill</p>
                        <p className="font-semibold">{med.refillDate}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 h-fit sticky top-20">
                <h3 className="font-semibold mb-4">Medication Tips</h3>
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
                    <p className="font-semibold text-accent mb-1">💊 Take Medications</p>
                    <p className="text-muted-foreground">Set reminders for each medication</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="font-semibold text-primary mb-1">⏰ Keep Schedule</p>
                    <p className="text-muted-foreground">Maintain consistent timing daily</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/30">
                    <p className="font-semibold text-secondary mb-1">📋 Track Effects</p>
                    <p className="text-muted-foreground">Note any side effects</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Appointments</h2>
              <Link href="/appointments">
                <Button className="bg-primary hover:bg-primary/90">
                  Book New Appointment
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  doctor: 'Dr. Sarah Johnson',
                  specialty: 'Cardiology',
                  date: 'Feb 25, 2024',
                  time: '10:00 AM',
                  location: 'Clinic A, Room 101',
                  status: 'Confirmed',
                },
                {
                  doctor: 'Dr. Michael Chen',
                  specialty: 'Neurology',
                  date: 'Mar 05, 2024',
                  time: '2:30 PM',
                  location: 'Clinic B, Room 205',
                  status: 'Scheduled',
                },
                {
                  doctor: 'Dr. Emily Rodriguez',
                  specialty: 'Dermatology',
                  date: 'Mar 12, 2024',
                  time: '11:00 AM',
                  location: 'Clinic C, Room 103',
                  status: 'Pending',
                },
              ].map((appt, idx) => (
                <Card key={idx} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{appt.doctor}</h3>
                      <p className="text-sm text-accent font-medium mb-3">{appt.specialty}</p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Date</p>
                          <p className="font-semibold">{appt.date}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Time</p>
                          <p className="font-semibold">{appt.time}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Location</p>
                          <p className="font-semibold">{appt.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-3">
                        {appt.status}
                      </span>
                      <div className="space-y-2">
                        <Button size="sm" variant="outline" className="w-full">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
