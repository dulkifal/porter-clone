/**
 * Global application constants
 */

import type { NavLink, Service, Feature, Testimonial, FooterColumn, SocialLink } from '@/types';

// Navigation
export const NAV_LINKS: NavLink[] = [
  { href: '/enterprise', label: 'For Enterprise' },
  { href: '/partners', label: 'Delivery Partners' },
  { href: '/support', label: 'Support' },
];

// Services
export const SERVICES: Service[] = [
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

// Features
export const FEATURES: Feature[] = [
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

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
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

// Footer
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Offers', href: '/offers' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'City Tempo', href: '/services/city-tempo' },
      { label: 'Packers & Movers', href: '/services/packers-movers' },
      { label: 'Driver Partners', href: '/partners' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    title: 'Download App',
    links: [
      { label: 'Android', href: 'https://play.google.com/store' },
      { label: 'iOS', href: 'https://apps.apple.com' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: 'F', label: 'Facebook', href: '#' },
  { icon: 'T', label: 'Twitter', href: '#' },
  { icon: 'I', label: 'Instagram', href: '#' },
  { icon: 'L', label: 'LinkedIn', href: '#' },
];

// Hero
export const DEFAULT_CITY = 'Ahmedabad';

export const SERVICE_OPTIONS = [
  { icon: '🚚', label: 'Truck' },
  { icon: '🛵', label: 'Two Wheeler' },
  { icon: '📦', label: 'Packers & Movers' },
];

// Utility
export const CURRENT_YEAR = new Date().getFullYear();
