/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Link from 'next/link';
import CopyrightNotice from './CopyrightNotice'; // Import the new component
import Image from 'next/image'; // Import the Image component

// Modified Props interface to include authorName and year
interface Props {
  authorName: string;
  year: number;

}

const Footer: FC<Props> = ({ authorName, year }): JSX.Element => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href={'/about'} className="link link-hover">
          About us
        </Link>
        <Link href={'/contact'} className="link link-hover">
          Contact
        </Link>
        <Link href={'/feedback'} className="link link-hover">
          Feedback
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Social Media Icons */}
          {/* ... (existing SVG icons code) ... */}
        </div>
      </nav>
      <img
        src="/images/logoDark.png"
        alt="logo"
        width="50"
        height="50"
        className="rounded-lg border-2 border-base-300 bg-none"
      />
      {/* Using the CopyrightNotice component */}
      <CopyrightNotice year={year} authorName={authorName} />
    </footer>
  );
};

export default Footer;
