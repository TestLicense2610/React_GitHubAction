'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HealthMetricCardComponent, HealthIndicatorComponent } from '@/components/web-components';

const medicalRecords = [
  {
    id: 1,
    type: 'Lab Report',
    title: 'Blood Test Results',
    date: '2024-02-10',
    doctor: 'Dr. David Kumar',
    details: 'Complete blood count, Thyroid panel',
    status: 'Normal',
  },
  {
    id: 2,
    type: 'Prescription',
    title: 'Current Medications',
    date: '2024-02-05',
    doctor: 'Dr. Sarah Johnson',
    details: 'Prescribed for hypertension management',
    status: 'Active',
  },
  {
    id: 3,
    type: 'Diagnosis',
    title: 'Hypertension',
    date: '2024-01-15',
    doctor: 'Dr. Sarah Johnson',
    details: 'Systolic: 140, Diastolic: 90',
    status: 'Active',
  },
  {
    id: 4,
    type: 'Vaccination',
    title: 'COVID-19 Booster',
    date: '2023-12-20',
    doctor: 'Nurse: Maria',
    details: 'Moderna vaccine administered',
    status: 'Completed',
  },
];

const prescriptions = [
  {
    id: 1,
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    quantity: '30 tablets',
    issue_date: '2024-02-05',
    expiry_date: '2024-05-05',
  },
  {
    id: 2,
    name: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once at bedtime',
    quantity: '30 tablets',
    issue_date: '2024-02-05',
    expiry_date: '2024-05-05',
  },
];

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'records' | 'prescriptions'>('overview');

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Medical Records
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Access and manage your complete health history
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-border">
          {['overview', 'records', 'prescriptions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-3 font-semibold border-b-2 transition-colors capitalize ${
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
            <div>
              <h2 className="text-2xl font-bold mb-6">Health Metrics Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <HealthMetricCardComponent
                  title="Blood Pressure"
                  value="120/80"
                  unit="mmHg"
                  badge="NORMAL"
                  description="Last measured: Feb 10, 2024"
                >
                  <HealthIndicatorComponent text="Healthy Range" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="Heart Rate"
                  value="72"
                  unit="bpm"
                  badge="GOOD"
                  description="Measured at rest"
                >
                  <HealthIndicatorComponent text="Normal Range" />
                </HealthMetricCardComponent>

                <HealthMetricCardComponent
                  title="BMI"
                  value="24.5"
                  unit="kg/m²"
                  badge="HEALTHY"
                  description="Last updated: Feb 5, 2024"
                >
                  <HealthIndicatorComponent text="Healthy Weight" />
                </HealthMetricCardComponent>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  {medicalRecords.slice(0, 3).map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between pb-4 border-b border-border last:border-b-0"
                    >
                      <div>
                        <p className="font-semibold">{record.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {record.type} • {record.date}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        {record.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Records Tab */}
        {activeTab === 'records' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">All Medical Records</h2>
            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <Card key={record.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">
                          {record.type === 'Lab Report' && '🔬'}
                          {record.type === 'Prescription' && '💊'}
                          {record.type === 'Diagnosis' && '📋'}
                          {record.type === 'Vaccination' && '💉'}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold">{record.title}</h3>
                          <p className="text-sm text-muted-foreground">{record.type}</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground mb-2">{record.details}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span>📅 {record.date}</span>
                        <span>👨‍⚕️ {record.doctor}</span>
                        <span className="text-accent">Status: {record.status}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Prescriptions Tab */}
        {activeTab === 'prescriptions' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Active Prescriptions</h2>
            <div className="space-y-4">
              {prescriptions.map((med) => (
                <Card key={med.id} className="p-6 border-l-4 border-l-accent">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{med.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Dosage</p>
                          <p className="font-semibold text-foreground">{med.dosage}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Frequency</p>
                          <p className="font-semibold text-foreground">{med.frequency}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Quantity</p>
                          <p className="font-semibold text-foreground">{med.quantity}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Expires</p>
                          <p className="font-semibold text-foreground">{med.expiry_date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                        Refill
                      </Button>
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
