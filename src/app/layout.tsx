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
    <html lang="en" data-theme="night">
      <head>
        {/* Favicon and Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Web Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
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
