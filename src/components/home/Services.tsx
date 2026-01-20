import styles from './Services.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const SERVICES: Service[] = [
  {
    id: 'two-wheeler',
    title: '2 Wheeler',
    description: 'Send packages up to 20kg anytime, anywhere in the city.',
    icon: '🏍️',
  },
  {
    id: 'trucks',
    title: 'Trucks',
    description: 'Rent Tata Ace, 8ft Pickup, and more for goods movement.',
    icon: '🚚',
  },
  {
    id: 'packers-movers',
    title: 'Packers & Movers',
    description: 'Shift your house or office with our safe and reliable services.',
    icon: '📦',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Logistics solutions for businesses of all sizes.',
    icon: '🏢',
  },
];

/**
 * Services - Display of available logistics services with descriptions
 * Shows key service offerings and their benefits
 */
export default function Services(): React.ReactElement {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Services We Offer</h2>
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconPlaceholder} aria-hidden="true">
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
