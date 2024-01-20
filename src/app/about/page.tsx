// Import necessary components and styles
import React from 'react';
import Heading from '@/Components/ui/Heading';
import SubHeading from '@/Components/ui/SubHeading';
import Image from 'next/image';

const About = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 md:mt-0 mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-full">
          {/* About section */}
          <div className="border drop-shadow-sm rounded-lg p-2 flex flex-col">
            <Heading title="About Mixologist" iconClass='fas fa-cocktail' />
            <div className="mt-6 text-left">
              <p className="mb-4 text-lg text-base-content">
                Hi, I&apos;m Ryan a web developer! This is my Mixology web app
                that I made just for fun. I don&apos;t often drink but when I do
                I like to experiment. The problem is I don&apos;t drink enough
                to know the recipes by heart. So I made this app to help me
                discover new drinks based on whatever ingredients are available.
                This way I can continue to experiment whenever the right
                occasion arises.
              </p>
              <p className="text-lg text-base-content">
                On this site, you&apos;ll find a collection of some fantastic
                recipes, tips for aspiring mixologists, and insights into the
                history and culture of cocktails. I hope you enjoy.
              </p>
            </div>
          </div>
          {/* Image section */}
          <div className="inline-block max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/cocktail.png"
              alt="Your Name"
              width={500}
              height={500}
              className="rounded-xl border border-1 bg-black p-1"
            />
          </div>
        </div>
      </div>
    );
}

export default About;
