'use client';

import { useEffect } from 'react';

// Dynamically import custom elements only on client
if (typeof window !== 'undefined') {
  import('./custom-elements');
}

// Type definitions for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'health-metric-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'appointment-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'medication-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'health-indicator': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'doctor-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

interface HealthMetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  badge?: string;
  description?: string;
  children?: React.ReactNode;
}

export function HealthMetricCardComponent({
  title,
  value,
  unit,
  badge,
  description,
  children,
}: HealthMetricCardProps) {
  return (
    <health-metric-card>
      <span slot="title">{title}</span>
      <span slot="badge">{badge || 'INFO'}</span>
      <span slot="value">{value}</span>
      {unit && <span slot="unit">{unit}</span>}
      {description && <span slot="description">{description}</span>}
      {children && <div slot="nested-content">{children}</div>}
    </health-metric-card>
  );
}

interface AppointmentCardProps {
  doctor: string;
  date: string;
  time: string;
  location: string;
  status?: string;
  children?: React.ReactNode;
}

export function AppointmentCardComponent({
  doctor,
  date,
  time,
  location,
  status = 'Scheduled',
  children,
}: AppointmentCardProps) {
  return (
    <appointment-card>
      <span slot="doctor">{doctor}</span>
      <span slot="status">{status}</span>
      <span slot="date">{date}</span>
      <span slot="time">{time}</span>
      <span slot="location">{location}</span>
      {children && <div slot="nested">{children}</div>}
    </appointment-card>
  );
}

interface MedicationCardProps {
  name: string;
  dosage: string;
  frequency: string;
  quantity: string;
  icon?: string;
  children?: React.ReactNode;
}

export function MedicationCardComponent({
  name,
  dosage,
  frequency,
  quantity,
  icon = '💊',
  children,
}: MedicationCardProps) {
  return (
    <medication-card>
      <span slot="icon">{icon}</span>
      <span slot="name">{name}</span>
      <span slot="dosage">{dosage}</span>
      <span slot="frequency">{frequency}</span>
      <span slot="quantity">{quantity}</span>
      {children && <div slot="nested-med">{children}</div>}
    </medication-card>
  );
}

interface HealthIndicatorProps {
  text: string;
}

export function HealthIndicatorComponent({ text }: HealthIndicatorProps) {
  return (
    <health-indicator>
      <span slot="text">{text}</span>
    </health-indicator>
  );
}

interface DoctorCardProps {
  name: string;
  specialty: string;
  rating: string;
  reviews: number;
  experience: string;
  avatar?: string;
  onClick?: () => void;
}

export function DoctorCardComponent({
  name,
  specialty,
  rating,
  reviews,
  experience,
  avatar = '👨‍⚕️',
  onClick,
}: DoctorCardProps) {
  return (
    <doctor-card onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <span slot="avatar">{avatar}</span>
      <span slot="name">{name}</span>
      <span slot="specialty">{specialty}</span>
      <span slot="rating">{rating}</span>
      <span slot="reviews">{reviews}</span>
      <span slot="experience">{experience}</span>
    </doctor-card>
  );
}

export default {
  HealthMetricCardComponent,
  AppointmentCardComponent,
  MedicationCardComponent,
  HealthIndicatorComponent,
  DoctorCardComponent,
};
