'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
              Connect with experienced healthcare professionals, manage your medical records, book appointments, and receive telemedicine consultation—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/doctors">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Find a Doctor
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  View My Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            {[
              {
                icon: '👨‍⚕️',
                title: 'Find Doctors',
                description: 'Browse certified doctors by specialty, experience, and patient reviews',
                href: '/doctors',
              },
              {
                icon: '📅',
                title: 'Book Appointments',
                description: 'Schedule appointments with flexible booking and instant confirmation',
                href: '/appointments',
              },
              {
                icon: '📋',
                title: 'Medical Records',
                description: 'Access and manage your health records, prescriptions, and reports',
                href: '/records',
              },
              {
                icon: '💊',
                title: 'Pharmacy Services',
                description: 'Browse and order medications with home delivery',
                href: '/pharmacy',
              },
              {
                icon: '📱',
                title: 'Telemedicine',
                description: 'Video consultation with doctors from the comfort of your home',
                href: '/consultation',
              },
              {
                icon: '📊',
                title: 'Health Dashboard',
                description: 'Track your health metrics and appointments in one place',
                href: '/dashboard',
              },
            ].map((service, idx) => (
              <Link key={idx} href={service.href}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-muted hover:border-accent">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Map Section with iframe */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Find Our Clinic Locations
          </h2>

          <Card className="overflow-hidden border-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.159339635117!2d-74.00601592346934!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3158b6b1d7%3A0x8db11f7b6b4e5e5!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HealthHub Clinic Locations"
            ></iframe>
          </Card>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            Visit our clinic locations across the city. All clinics are equipped with modern healthcare facilities.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Why Choose HealthHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Healthcare Professionals',
                description: 'Our network includes certified doctors and specialists with years of experience',
              },
              {
                title: 'Secure Health Records',
                description: 'Your medical information is encrypted and stored securely with full privacy protection',
              },
              {
                title: '24/7 Access',
                description: 'Access your health records and book appointments anytime, from anywhere',
              },
              {
                title: 'Affordable Healthcare',
                description: 'Competitive pricing with transparent costs and insurance integration',
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of patients who trust HealthHub for their healthcare needs.
          </p>
          <Link href="/doctors">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Find Your Doctor Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About HealthHub</h3>
              <p className="text-sm opacity-80">Your trusted online healthcare platform connecting patients with professionals.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="text-sm opacity-80 space-y-2">
                <li><Link href="/doctors">Doctor Directory</Link></li>
                <li><Link href="/appointments">Appointments</Link></li>
                <li><Link href="/consultation">Telemedicine</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="text-sm opacity-80 space-y-2">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm opacity-80">
                Email: support@healthhub.com<br />
                Phone: 1-800-HEALTH-1
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 HealthHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
