'use client';

import styles from './Hero.module.css';

interface ServiceOption {
  icon: string;
  label: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { icon: '🚚', label: 'Truck' },
  { icon: '🛵', label: 'Two Wheeler' },
  { icon: '📦', label: 'Packers & Movers' },
];

const DEFAULT_CITY = 'Ahmedabad';

/**
 * Hero - Hero section component with main value proposition and service selection widget
 * Allows users to select a service type and get quick estimates
 */
export default function Hero(): React.ReactElement {
  const handleGetEstimate = (): void => {
    // TODO: Navigate to estimate page or open booking flow
    console.log('Get estimate clicked');
  };

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Delivery hai?</h2>
          <h1 className={styles.heroHashtag}>#HoJayega!</h1>
        </div>
      </div>

      <div className={styles.floatingWidgetContainer}>
        <div className={styles.floatingWidget}>
          <div className={styles.citySelector} role="region" aria-label="Location selector">
            <span className={styles.cityIcon} aria-hidden="true">
              📍
            </span>
            <span>
              City: <strong>{DEFAULT_CITY}</strong>
            </span>
            <span aria-hidden="true">▼</span>
          </div>

          <div className={styles.servicesGrid} role="region" aria-label="Service options">
            {SERVICE_OPTIONS.map((service) => (
              <div key={service.label} className={styles.serviceOption}>
                <span className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </span>
                <span className={styles.serviceLabel}>{service.label}</span>
              </div>
            ))}

            <button
              className={styles.estimateBtn}
              onClick={handleGetEstimate}
              aria-label="Get estimate for delivery"
            >
              <span className={styles.btnText}>Get an Estimate →</span>
              <span className={styles.btnSubtext}>(takes ~2 mins)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
