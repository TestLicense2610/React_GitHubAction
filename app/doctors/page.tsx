'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DoctorCardComponent } from '@/components/web-components';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: '★★★★★',
    reviews: 248,
    experience: '15 years of experience',
    avatar: '👩‍⚕️',
    bio: 'Specialist in heart diseases and cardiovascular treatment',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    rating: '★★★★★',
    reviews: 186,
    experience: '12 years of experience',
    avatar: '👨‍⚕️',
    bio: 'Expert in neurological disorders and treatment',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dermatology',
    rating: '★★★★☆',
    reviews: 342,
    experience: '10 years of experience',
    avatar: '👩‍⚕️',
    bio: 'Specialized in skin care and cosmetic dermatology',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    rating: '★★★★★',
    reviews: 215,
    experience: '18 years of experience',
    avatar: '👨‍⚕️',
    bio: 'Expert in bone and joint disorders',
  },
  {
    id: 5,
    name: 'Dr. Lisa Anderson',
    specialty: 'Pediatrics',
    rating: '★★★★★',
    reviews: 289,
    experience: '14 years of experience',
    avatar: '👩‍⚕️',
    bio: 'Dedicated to children\'s health and wellness',
  },
  {
    id: 6,
    name: 'Dr. David Kumar',
    specialty: 'General Medicine',
    rating: '★★★★☆',
    reviews: 421,
    experience: '20 years of experience',
    avatar: '👨‍⚕️',
    bio: 'Primary healthcare and general medical consultation',
  },
];

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  const specialties = ['All', ...new Set(doctors.map((d) => d.specialty))];

  const filteredDoctors =
    selectedSpecialty === 'All'
      ? doctors
      : doctors.filter((d) => d.specialty === selectedSpecialty);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Find Your Doctor
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Browse our network of certified healthcare professionals
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Specialty</h2>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                variant={selectedSpecialty === specialty ? 'default' : 'outline'}
                className={
                  selectedSpecialty === specialty
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }
              >
                {specialty}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                onClick={() => setSelectedDoctor(doctor)}
                className="cursor-pointer"
              >
                <DoctorCardComponent
                  name={doctor.name}
                  specialty={doctor.specialty}
                  rating={doctor.rating}
                  reviews={doctor.reviews}
                  experience={doctor.experience}
                  avatar={doctor.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedDoctor(null)}
        >
          <Card
            className="max-w-md w-full bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">{selectedDoctor.avatar}</div>
              <h2 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h2>
              <p className="text-primary font-semibold mb-2">{selectedDoctor.specialty}</p>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-accent text-lg">{selectedDoctor.rating}</span>
                <span className="text-muted-foreground text-sm">
                  ({selectedDoctor.reviews} reviews)
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{selectedDoctor.bio}</p>
              <p className="text-sm text-muted-foreground mb-6">{selectedDoctor.experience}</p>
              <Link href="/appointments">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book Appointment
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={() => setSelectedDoctor(null)}
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </main>
  );
}
