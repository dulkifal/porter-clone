import styles from './Testimonials.module.css';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Porter has completely transformed how we manage our logistics. The real-time tracking is a game changer for our business.',
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    avatar: 'RK',
  },
  {
    id: 'testimonial-2',
    quote:
      'Excellent service! The driver was polite and helpful. I moved my entire house with Porter and it was hassle-free.',
    name: 'Priya Singh',
    role: 'Home Maker',
    avatar: 'PS',
  },
  {
    id: 'testimonial-3',
    quote:
      'Affordable and reliable. I use Porter for all my ad-hoc delivery needs. Highly recommended.',
    name: 'Amit Patel',
    role: 'Freelancer',
    avatar: 'AP',
  },
];

/**
 * Testimonials - Customer testimonials section showcasing user satisfaction
 * Builds credibility through real customer experiences and feedback
 */
export default function Testimonials(): React.ReactElement {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>What our customers say</h2>
        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  title={`${testimonial.name} - ${testimonial.role}`}
                  aria-label={testimonial.name}
                >
                  {testimonial.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{testimonial.name}</span>
                  <span className={styles.role}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
