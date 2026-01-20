import styles from './Features.module.css';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    id: 'on-time-delivery',
    icon: '⏱️',
    title: 'On-Time Delivery',
    description:
      'Reliable service that ensures your goods reach their destination on time, every time.',
  },
  {
    id: 'real-time-tracking',
    icon: '📍',
    title: 'Real-time Tracking',
    description:
      'Track your goods in real-time and stay updated with the location of your package.',
  },
  {
    id: 'economical-pricing',
    icon: '💰',
    title: 'Economical Pricing',
    description:
      'Get the best rates in the market with transparent pricing and no hidden charges.',
  },
];

/**
 * Features - Highlight key differentiators and benefits of the Porter service
 * Displays core value propositions to build trust with customers
 */
export default function Features(): React.ReactElement {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Why Choose Porter?</h2>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div key={feature.id} className={styles.feature}>
              <div className={styles.icon} aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
