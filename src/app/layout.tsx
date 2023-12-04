import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/Components/ui/Navbar';
import Footer from '@/Components/ui/Footer';

export const metadata: Metadata = {
  title: 'Mixologist',
  description: 'Drink Discovery App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authorName = 'Ryan Wilson'; 
  const currentYear = new Date().getFullYear(); // Dynamically gets the current year

  return (
    <html lang="en" data-theme="retro">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer authorName={authorName} year={currentYear} />
      </body>
    </html>
  );
}
