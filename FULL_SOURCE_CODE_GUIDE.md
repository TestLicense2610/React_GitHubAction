# HealthHub - Full Source Code Documentation

Complete guide to all source code files in the healthcare platform.

## File Index

### Core Application Files

#### 1. `app/layout.tsx` - Root Layout (44 lines)
```typescript
// Imports Navigation component
// Sets up metadata for SEO
// Configures root HTML structure

key features:
- Metadata with title, description, icons
- Navigation component at top level
- Google Fonts integration (Geist)
- Analytics setup

Routes all child pages through this layout
```

#### 2. `app/globals.css` - Design System (100+ lines)
```css
/* Healthcare-focused design tokens */

Color Variables:
--primary: oklch(0.45 0.28 268)         /* Blue */
--secondary: oklch(0.65 0.22 198)       /* Teal */
--accent: oklch(0.65 0.22 198)          /* Cyan */
--background: oklch(0.98 0.001 250)     /* Off-white */
--foreground: oklch(0.15 0.02 250)      /* Dark gray */
--muted: oklch(0.92 0.02 250)           /* Light gray */
--border: oklch(0.92 0.02 250)          /* Border color */
--destructive: oklch(0.577 0.245 27.325) /* Red */

Typography Variables:
--font-sans: Geist
--font-mono: Geist Mono

Radius:
--radius: 0.625rem (10px)

All tokens have dark mode variants in .dark selector
```

#### 3. `components/Navigation.tsx` - Navigation Bar (72 lines)
```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  // Uses usePathname() to highlight active route
  // Routes:
  // - / (Home)
  // - /doctors (Doctor Directory)
  // - /appointments (Appointments)
  // - /records (Medical Records)
  // - /pharmacy (Pharmacy)
  // - /consultation (Telemedicine)
  // - /dashboard (Dashboard)

  Features:
  - Sticky header with primary color
  - Active route highlighting
  - Mobile hamburger menu structure
  - Logo with HealthHub branding
}
```

### Web Components (Shadow DOM)

#### 4. `components/web-components/custom-elements.ts` - Custom Elements (520 lines)

##### HealthMetricCard Class
```typescript
class HealthMetricCard extends HTMLElement {
  // Shadow DOM with named slots:
  // - title: Metric name
  // - value: Main value display
  // - unit: Unit of measurement
  // - badge: Status badge
  // - description: Description text
  // - nested-content: Nested Shadow DOM children

  Styling:
  - Hover animation with scale and shadow
  - Gradient border effects
  - Responsive padding and sizing
  - CSS variables for theming

  Shadow DOM Layers:
  - Level 1: HealthMetricCard
  - Can contain Level 2: AppointmentCard
  - Can contain Level 3: MedicationCard
  - Can contain Level 4: HealthIndicator
}
```

##### AppointmentCard Class
```typescript
class AppointmentCard extends HTMLElement {
  // Nested Shadow DOM within HealthMetricCard
  
  Slots:
  - doctor: Doctor name
  - date: Appointment date
  - time: Time slot
  - location: Location/clinic
  - status: Status badge
  - nested: Ultra-nested content

  Styling:
  - Left border accent (4px, colored)
  - Hover effects with shadow and border color
  - Icon-based layout (📅🕐📍)
  - Smooth transitions

  Shadow DOM Level: 2
  Can be nested within Level 1 HealthMetricCard
  Can contain Level 3 content
}
```

##### MedicationCard Class
```typescript
class MedicationCard extends HTMLElement {
  // Level 3 nested Shadow DOM
  
  Slots:
  - icon: Medication icon/emoji
  - name: Drug name
  - dosage: Dosage strength
  - frequency: How often to take
  - quantity: Number of units
  - nested-med: Ultra-nested content

  Styling:
  - Icon with gradient background
  - Color-coded dosage information
  - Quantity badge with accent color
  - Flex layout for horizontal display

  Shadow DOM Level: 3
  Can contain Level 4: HealthIndicator
}
```

##### HealthIndicator Class
```typescript
class HealthIndicator extends HTMLElement {
  // Level 4 - Ultra-nested Shadow DOM
  
  Slots:
  - text: Status text display

  Styling:
  - Pulsing animation (@keyframes pulse)
  - Circular indicator dot
  - Color coded (green for healthy)
  - Compact minimal design

  Shadow DOM Level: 4 (deepest nesting)
}
```

##### DoctorCard Class
```typescript
class DoctorCard extends HTMLElement {
  // Standard Shadow DOM (not nested)
  
  Slots:
  - avatar: Avatar emoji/image
  - name: Doctor's name
  - specialty: Medical specialty
  - rating: Star rating
  - reviews: Number of reviews
  - experience: Years of experience

  Styling:
  - Circular avatar with gradient
  - Hover animation with transform
  - Star rating display
  - Professional card layout
  - Text centering

  Shadow DOM Level: 1
  Independent component
}
```

#### 5. `components/web-components/index.tsx` - React Wrappers (171 lines)
```typescript
'use client';

import { useEffect } from 'react';
import './custom-elements';

// Type declarations for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'health-metric-card': React.DetailedHTMLProps<...>
      'appointment-card': React.DetailedHTMLProps<...>
      'medication-card': React.DetailedHTMLProps<...>
      'health-indicator': React.DetailedHTMLProps<...>
      'doctor-card': React.DetailedHTMLProps<...>
    }
  }
}

// React wrapper components:

export function HealthMetricCardComponent({
  title,
  value,
  unit,
  badge,
  description,
  children,
}: HealthMetricCardProps) {
  // Props → Slots mapping
  // Returns JSX with custom element
  // Children as slotted content
}

export function AppointmentCardComponent({
  doctor,
  date,
  time,
  location,
  status,
  children,
}: AppointmentCardProps) {
  // Similar pattern for appointments
}

export function MedicationCardComponent({
  name,
  dosage,
  frequency,
  quantity,
  icon,
  children,
}: MedicationCardProps) {
  // Similar pattern for medications
}

export function HealthIndicatorComponent({
  text,
}: HealthIndicatorProps) {
  // Simple indicator component
}

export function DoctorCardComponent({
  name,
  specialty,
  rating,
  reviews,
  experience,
  avatar,
  onClick,
}: DoctorCardProps) {
  // Doctor display component
}
```

### Page Components

#### 6. `app/page.tsx` - Home Page (239 lines)

```typescript
'use client';

export default function HomePage() {
  // Hero Section
  - Gradient background with blur overlays
  - Large heading "Your Health, Our Priority"
  - Subheading and value proposition
  - Two CTAs: Find Doctor, View Dashboard

  // Services Overview (6 cards)
  - Find Doctors (👨‍⚕️)
  - Book Appointments (📅)
  - Medical Records (📋)
  - Pharmacy Services (💊)
  - Telemedicine (📱)
  - Health Dashboard (📊)

  // Google Maps iframe
  - Shows clinic locations in New York
  - Responsive width 100%, height 400px
  - Security: allowFullScreen, loading lazy

  // Why Choose Us Section
  - 4 feature columns
  - Icons + text descriptions
  - Checkmark SVG icons

  // CTA Section
  - Gradient background
  - Call to action
  - Link to doctors page

  // Footer
  - 4-column layout: About, Services, Resources, Contact
  - Links to all pages
  - Contact information
  - Copyright notice
}
```

#### 7. `app/doctors/page.tsx` - Doctor Directory (188 lines)

```typescript
'use client';

import { useState } from 'react';
import { DoctorCardComponent } from '@/components/web-components';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: '★★★★★',
    reviews: 248,
    experience: '15 years',
    avatar: '👩‍⚕️',
  },
  // ... 5 more doctors
];

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Header Section
  - Gradient background
  - Title and description

  // Filter Section
  - Specialty buttons
  - Dynamic filtering
  - Count display

  // Doctor Grid
  - 3-column responsive grid
  - DoctorCard components
  - Click handlers for modal

  // Modal Dialog
  - Doctor details popup
  - Bio and experience
  - Book appointment button
  - Close functionality

  Features:
  - Filter by specialty
  - View doctor details in modal
  - Book appointments
  - Rating and review display
}
```

#### 8. `app/appointments/page.tsx` - Appointments (196 lines)

```typescript
'use client';

const appointmentsList = [
  {
    id: 1,
    doctor: 'Dr. Sarah Johnson',
    date: '2024-02-25',
    time: '10:00 AM',
    location: 'Clinic A, Room 101',
    status: 'Confirmed',
  },
  // ... more appointments
];

export default function AppointmentsPage() {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState(appointmentsList);

  // Header Section
  - Gradient background
  - Title and description

  // Main Content (Left)
  - Upcoming appointments list
  - Appointment booking form
  - Form inputs:
    - Doctor dropdown
    - Date picker
    - Time picker
    - Location text
  - AppointmentCard components
  - Form submission handler

  // Sidebar (Right)
  - Google Calendar iframe
  - Shows appointment availability
  - 400px height, responsive width
  - Sticky positioning

  Features:
  - View upcoming appointments
  - Book new appointments
  - Form validation
  - AppointmentCard UI
  - Calendar integration
}
```

#### 9. `app/records/page.tsx` - Medical Records (249 lines)

```typescript
'use client';

const medicalRecords = [
  {
    id: 1,
    type: 'Lab Report',
    title: 'Blood Test Results',
    date: '2024-02-10',
    doctor: 'Dr. David Kumar',
    details: 'Complete blood count...',
    status: 'Normal',
  },
  // ... more records
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
  // ... more medications
];

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Header Section
  - Gradient background
  - Title and description

  // Tab Navigation
  - Overview
  - Records
  - Prescriptions

  // Tab: Overview
  - HealthMetricCardComponent (3 cards)
    - Blood Pressure (120/80 mmHg)
    - Heart Rate (72 bpm)
    - BMI (24.5 kg/m²)
  - Each has HealthIndicatorComponent
  - Recent activity list

  // Tab: Records
  - Medical history cards
  - Type icons (🔬 Lab, 💊 Rx, 📋 Diagnosis, 💉 Vaccine)
  - Status badges
  - View buttons

  // Tab: Prescriptions
  - Active prescriptions
  - Medication details grid
  - Refill buttons
  - Expiry dates

  Features:
  - Health metrics display
  - Multi-layer Shadow DOM nesting
  - Record categorization
  - Prescription management
  - Status tracking
}
```

#### 10. `app/pharmacy/page.tsx` - Pharmacy (254 lines)

```typescript
'use client';

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
  // ... 5 more medications
];

export default function PharmacyPage() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Header Section
  - Gradient background
  - Title and description

  // Main Content (3/4 width)
  - Search input
  - Medications list
  - MedicationCardComponent for each
  - Add to cart buttons
  - Price display
  - Stock status

  // Cart Sidebar (1/4 width)
  - Cart items list
  - Item removal (×)
  - Price calculation
  - Subtotal display
  - Checkout button
  - Clear cart button
  - Empty state message

  // Features Section
  - Fast delivery (🚚)
  - Secure payment (🔒)
  - Licensed pharmacists (💊)
  - MedicationCard UI
  - Shopping cart functionality

  Features:
  - Search medications
  - Add to cart
  - Remove from cart
  - Price calculation
  - Stock status
  - Checkout integration
}
```

#### 11. `app/consultation/page.tsx` - Telemedicine (254 lines)

```typescript
'use client';

const availableSlots = [
  {
    id: 1,
    doctor: 'Dr. Sarah Johnson',
    time: '10:00 AM',
    date: 'Today',
  },
  // ... more slots
];

const consultationTypes = [
  {
    icon: '🎥',
    title: 'Video Consultation',
    description: 'Face-to-face video call',
    duration: '30 minutes',
    price: '$49.99',
  },
  // ... phone and chat options
];

export default function ConsultationPage() {
  const [selectedType, setSelectedType] = useState('video');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Header Section
  - Gradient background
  - Title and description

  // Consultation Types
  - 3 card grid
  - Video (🎥) - $49.99
  - Phone (📞) - $29.99
  - Chat (💬) - $19.99
  - Clickable cards with selection

  // How It Works Section
  - 4-step process
  - Numbered circles (1-4)
  - Step descriptions
  - Gray background section

  // Available Slots
  - 3-column responsive grid
  - DoctorCard-like display
  - Time, date, doctor
  - Book Now buttons

  // Booking Modal
  - Confirmation dialog
  - Booking details summary
  - Doctor, date, time display
  - Duration and fee
  - Confirm & Pay button
  - Cancel button

  // Features Section
  - End-to-End Encrypted (🔒)
  - No Waiting Time (⏱️)
  - Digital Records (💾)
  - Easy Follow-up (🔄)

  Features:
  - Type selection
  - Available slots display
  - Booking confirmation
  - Modal confirmation
  - Responsive grid layout
}
```

#### 12. `app/dashboard/page.tsx` - Patient Dashboard (383 lines)

```typescript
'use client';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Header Section
  - Welcome message
  - User avatar (👤)
  - Gradient background

  // Tab Navigation
  - Overview
  - Metrics
  - Medications
  - Appointments

  // Tab: Overview
  
  Quick Health Snapshot (4 stats):
  - Appointments: 3 (📅)
  - Active Medications: 2 (💊)
  - Health Score: 85% (⭐)
  - Days Streak: 15 (🔥)

  Upcoming Appointments:
  - AppointmentCardComponent (2 cards)
  - Links to view all

  Current Medications:
  - MedicationCardComponent (2 cards)
  - Links to pharmacy

  // Tab: Metrics
  
  Health Metrics Grid (6 cards):
  - Blood Pressure: 120/80 mmHg
  - Heart Rate: 72 bpm
  - BMI: 24.5 kg/m²
  - Blood Glucose: 95 mg/dL
  - Sleep Duration: 7.5 hours
  - Stress Level: 4/10

  Each HealthMetricCardComponent has:
  - Value display
  - Unit
  - Badge (NORMAL, GOOD, HEALTHY, LOW)
  - Description
  - HealthIndicatorComponent child

  Health Trends Section:
  - Google Calendar iframe
  - 600px height
  - Health events display

  // Tab: Medications
  
  Medication Grid (left):
  - 6 medication cards
  - Details grid layout
  - Started date
  - Next refill date
  - Refill button

  Tips Sidebar (right):
  - Take Medications (💊)
  - Keep Schedule (⏰)
  - Track Effects (📋)
  - Sticky positioning

  // Tab: Appointments
  
  Appointments List:
  - 3 appointments displayed
  - Doctor name and specialty
  - Date, time, location
  - Status badges
  - Reschedule buttons
  - Book New button

  Features:
  - 4-layer health metrics UI
  - HealthMetricCard components
  - HealthIndicator components
  - Google Calendar integration
  - Tab-based navigation
  - Responsive grid layouts
  - Sticky sidebar positioning
}
```

## Component Usage Examples

### Using HealthMetricCard with Nesting
```typescript
<HealthMetricCardComponent
  title="Blood Pressure"
  value="120/80"
  unit="mmHg"
  badge="NORMAL"
  description="Last measured: 2 hours ago"
>
  <HealthIndicatorComponent text="Healthy Range" />
</HealthMetricCardComponent>
```

### Using AppointmentCard
```typescript
<AppointmentCardComponent
  doctor="Dr. Sarah Johnson"
  date="Feb 25, 2024"
  time="10:00 AM"
  location="Clinic A, Room 101"
  status="Confirmed"
/>
```

### Using MedicationCard
```typescript
<MedicationCardComponent
  name="Lisinopril"
  dosage="10mg"
  frequency="Once daily"
  quantity="30 tablets"
  icon="💊"
/>
```

### Using DoctorCard
```typescript
<DoctorCardComponent
  name="Dr. Sarah Johnson"
  specialty="Cardiology"
  rating="★★★★★"
  reviews={248}
  experience="15 years of experience"
  avatar="👩‍⚕️"
  onClick={() => setSelectedDoctor(doctor)}
/>
```

## Design Tokens Reference

### Colors Used Throughout
```css
/* Primary Actions & Headers */
--primary: oklch(0.45 0.28 268);        /* #3B5CC4 */

/* Accent & Secondary Actions */
--accent: oklch(0.65 0.22 198);         /* #008B9F */

/* Text & Foreground */
--foreground: oklch(0.15 0.02 250);     /* #1A1A2E */

/* Backgrounds */
--background: oklch(0.98 0.001 250);    /* #F8F9FA */
--muted: oklch(0.92 0.02 250);          /* #E5E7EB */

/* Borders */
--border: oklch(0.92 0.02 250);         /* #E5E7EB */
```

### CSS Variables in Shadow DOM
All custom elements use CSS variables for theming:
```typescript
:host {
  --metric-primary: var(--primary);
  --metric-text: var(--foreground);
  --metric-bg: var(--background);
  --metric-border: var(--border);
}
```

## Responsive Design

### Breakpoints Used
```
Mobile: default (< 640px)
Tablet: md: (≥ 768px)
Desktop: lg: (≥ 1024px)
Large: xl: (≥ 1280px)
```

### Grid Layouts
```
Mobile: grid-cols-1
Tablet: md:grid-cols-2
Desktop: lg:grid-cols-3 or lg:grid-cols-4
```

## State Management

### Page-Level State
```typescript
// Doctor Directory
const [selectedSpecialty, setSelectedSpecialty] = useState('All');
const [selectedDoctor, setSelectedDoctor] = useState(null);

// Appointments
const [showForm, setShowForm] = useState(false);
const [appointments, setAppointments] = useState(appointmentsList);

// Pharmacy
const [cart, setCart] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

// Dashboard
const [activeTab, setActiveTab] = useState('overview');
```

## iframe Integration Points

### Location (Home)
- Google Maps showing clinic locations
- Responsive sizing

### Availability (Appointments)
- Google Calendar showing time slots
- Sidebar sticky positioning

### Events (Dashboard)
- Google Calendar for health events
- Full width in metrics tab

## Performance Considerations

1. **Shadow DOM**: CSS encapsulation prevents global style conflicts
2. **Code Splitting**: Each page is a separate component
3. **Lazy Loading**: iframe loading="lazy" attribute
4. **Tailwind CSS**: Utility-first CSS with purge optimization
5. **TypeScript**: Type safety with zero runtime overhead

## Browser Support

All features work in:
- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

This comprehensive guide covers the complete source code of the HealthHub healthcare platform with detailed explanations of each component and file.
