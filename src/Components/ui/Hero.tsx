// Hero.tsx
import { FC, ReactNode } from 'react';

interface HeroProps {
  img: string; // The path to the background image
  children: ReactNode; // The content to display on top of the image
}

const Hero: FC<HeroProps> = ({ img, children }) => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`, // Dynamic background image
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-40" />
      <div className="flex flex-col items-center justify-center m-auto">
        {children}
      </div>
    </div>
  );
};

export default Hero;
