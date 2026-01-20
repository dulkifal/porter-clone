import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Porter | Logistics Simplified',
  description: 'India\'s Largest Marketplace for Intra-City Logistics. Download the App for On-Demand Truck/Bike Booking.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout - Root layout wrapper for the entire application
 * Applies global font settings and provides metadata for SEO
 */
export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
