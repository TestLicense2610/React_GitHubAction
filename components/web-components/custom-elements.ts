// Multi-layer Shadow DOM Web Components for Healthcare App
// Only define components in browser environment
if (typeof window !== 'undefined' && typeof HTMLElement !== 'undefined') {
  // Level 1: Base Health Metric Card with Shadow DOM
  class HealthMetricCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          --metric-primary: var(--primary, #3b5cc4);
          --metric-text: var(--foreground, #1a1a1a);
          --metric-bg: var(--background, #ffffff);
          --metric-border: var(--border, #e5e7eb);
        }

        .metric-container {
          background: var(--metric-bg);
          border: 1px solid var(--metric-border);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .metric-container:hover {
          box-shadow: 0 4px 12px rgba(59, 92, 196, 0.15);
          transform: translateY(-2px);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--metric-border);
        }

        .metric-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--metric-text);
          margin: 0;
        }

        .metric-badge {
          background: var(--metric-primary);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .metric-content {
          margin-top: 12px;
        }

        .metric-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--metric-primary);
          margin: 8px 0;
        }

        .metric-unit {
          font-size: 14px;
          color: var(--metric-text);
          opacity: 0.7;
        }

        .metric-description {
          font-size: 13px;
          color: var(--metric-text);
          opacity: 0.6;
          margin-top: 8px;
        }

        ::slotted([slot="nested-content"]) {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--metric-border);
        }
      </style>

      <div class="metric-container">
        <div class="metric-header">
          <h3 class="metric-title"><slot name="title">Metric</slot></h3>
          <span class="metric-badge"><slot name="badge">INFO</slot></span>
        </div>
        <div class="metric-content">
          <div class="metric-value"><slot name="value">--</slot></div>
          <div class="metric-unit"><slot name="unit"></slot></div>
          <div class="metric-description"><slot name="description"></slot></div>
          <slot name="nested-content"></slot>
        </div>
      </div>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

// Level 2: Appointment Card with nested Shadow DOM inside HealthMetricCard
class AppointmentCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          --appt-bg: var(--card, #ffffff);
          --appt-border: var(--border, #e5e7eb);
          --appt-accent: var(--accent, #008b9f);
          --appt-text: var(--foreground, #1a1a1a);
        }

        .appointment-card {
          background: linear-gradient(135deg, var(--appt-bg) 0%, rgba(0, 139, 159, 0.02) 100%);
          border: 2px solid var(--appt-border);
          border-left: 4px solid var(--appt-accent);
          border-radius: 10px;
          padding: 16px;
          margin: 8px 0;
          transition: all 0.3s ease;
        }

        .appointment-card:hover {
          border-left-color: var(--appt-accent);
          box-shadow: 0 2px 8px rgba(0, 139, 159, 0.1);
        }

        .appt-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 12px;
        }

        .appt-doctor {
          font-weight: 600;
          color: var(--appt-text);
          font-size: 14px;
        }

        .appt-status {
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          background: var(--appt-accent);
          color: white;
        }

        .appt-details {
          display: grid;
          gap: 8px;
          font-size: 13px;
          color: var(--appt-text);
        }

        .appt-time {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .appt-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--appt-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
        }

        ::slotted([slot="nested"]) {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--appt-border);
        }
      </style>

      <div class="appointment-card">
        <div class="appt-header">
          <div class="appt-doctor"><slot name="doctor">Dr. Name</slot></div>
          <span class="appt-status"><slot name="status">Scheduled</slot></span>
        </div>
        <div class="appt-details">
          <div class="appt-time">
            <span class="appt-icon">📅</span>
            <slot name="date">Date</slot>
          </div>
          <div class="appt-time">
            <span class="appt-icon">🕐</span>
            <slot name="time">Time</slot>
          </div>
          <div class="appt-time">
            <span class="appt-icon">📍</span>
            <slot name="location">Location</slot>
          </div>
        </div>
        <slot name="nested"></slot>
      </div>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

// Level 3: Medication Card with multi-layer Shadow DOM
class MedicationCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          --med-primary: var(--primary, #3b5cc4);
          --med-bg: var(--card, #ffffff);
          --med-text: var(--foreground, #1a1a1a);
          --med-border: var(--border, #e5e7eb);
        }

        .medication-card {
          background: var(--med-bg);
          border: 1px solid var(--med-border);
          border-radius: 10px;
          padding: 14px;
          margin: 8px 0;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .med-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--med-primary), rgba(59, 92, 196, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
        }

        .med-info {
          flex: 1;
        }

        .med-name {
          font-weight: 600;
          font-size: 14px;
          color: var(--med-text);
          margin: 0;
        }

        .med-dosage {
          font-size: 12px;
          color: var(--med-text);
          opacity: 0.7;
          margin: 4px 0;
        }

        .med-frequency {
          font-size: 12px;
          color: var(--med-primary);
          font-weight: 500;
        }

        .med-quantity {
          padding: 4px 8px;
          background: rgba(59, 92, 196, 0.1);
          border-radius: 6px;
          font-size: 11px;
          color: var(--med-primary);
          font-weight: 600;
          display: inline-block;
          margin-top: 6px;
        }

        ::slotted([slot="nested-med"]) {
          margin-top: 8px;
        }
      </style>

      <div class="medication-card">
        <div class="med-icon"><slot name="icon">💊</slot></div>
        <div class="med-info">
          <h4 class="med-name"><slot name="name">Medication Name</slot></h4>
          <div class="med-dosage"><slot name="dosage">Dosage</slot></div>
          <div class="med-frequency"><slot name="frequency">Frequency</slot></div>
          <div class="med-quantity"><slot name="quantity">Quantity</slot></div>
          <slot name="nested-med"></slot>
        </div>
      </div>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

// Level 4: Nested Health Indicator (ultra-nested Shadow DOM within MedicationCard)
class HealthIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          --indicator-success: #10b981;
          --indicator-warning: #f59e0b;
          --indicator-danger: #ef4444;
          --indicator-text: var(--foreground, #1a1a1a);
        }

        .health-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          color: var(--indicator-success);
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--indicator-success);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .indicator-text {
          color: var(--indicator-text);
        }
      </style>

      <div class="health-indicator">
        <span class="indicator-dot"></span>
        <span class="indicator-text"><slot name="text">Active</slot></span>
      </div>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

// Doctor Card Component with Shadow DOM
class DoctorCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
          --doctor-bg: var(--card, #ffffff);
          --doctor-text: var(--foreground, #1a1a1a);
          --doctor-border: var(--border, #e5e7eb);
          --doctor-accent: var(--accent, #008b9f);
        }

        .doctor-card {
          background: var(--doctor-bg);
          border: 1px solid var(--doctor-border);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .doctor-card:hover {
          border-color: var(--doctor-accent);
          box-shadow: 0 4px 12px rgba(0, 139, 159, 0.15);
          transform: translateY(-4px);
        }

        .doctor-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--doctor-accent), rgba(0, 139, 159, 0.7));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin: 0 auto 16px;
          color: white;
        }

        .doctor-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--doctor-text);
          margin: 0 0 4px;
        }

        .doctor-specialty {
          font-size: 13px;
          color: var(--doctor-accent);
          font-weight: 600;
          margin: 0 0 12px;
        }

        .doctor-rating {
          font-size: 12px;
          color: var(--doctor-text);
          margin: 8px 0;
        }

        .stars {
          color: #fbbf24;
          letter-spacing: 2px;
        }

        .doctor-info {
          font-size: 12px;
          color: var(--doctor-text);
          opacity: 0.7;
          margin: 8px 0;
          line-height: 1.4;
        }
      </style>

      <div class="doctor-card">
        <div class="doctor-avatar"><slot name="avatar">👨‍⚕️</slot></div>
        <h3 class="doctor-name"><slot name="name">Dr. Name</slot></h3>
        <p class="doctor-specialty"><slot name="specialty">Specialty</slot></p>
        <div class="doctor-rating">
          <span class="stars"><slot name="rating">★★★★★</slot></span>
          <span>(<slot name="reviews">0</slot>)</span>
        </div>
        <div class="doctor-info"><slot name="experience">Years of experience</slot></div>
      </div>
    `;

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

  // Register all custom elements
  if (!customElements.get('health-metric-card')) {
    customElements.define('health-metric-card', HealthMetricCard);
  }
  if (!customElements.get('appointment-card')) {
    customElements.define('appointment-card', AppointmentCard);
  }
  if (!customElements.get('medication-card')) {
    customElements.define('medication-card', MedicationCard);
  }
  if (!customElements.get('health-indicator')) {
    customElements.define('health-indicator', HealthIndicator);
  }
  if (!customElements.get('doctor-card')) {
    customElements.define('doctor-card', DoctorCard);
  }
}

export {
  HealthMetricCard,
  AppointmentCard,
  MedicationCard,
  HealthIndicator,
  DoctorCard,
};
