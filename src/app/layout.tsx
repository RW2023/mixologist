import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mixologist',
  description: 'Drink Discovery App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </header>
      <body>{children}</body>
    </html>
  );
}
