import Heading from '@/Components/ui/Heading';
import SubHeading from '@/Components/ui/SubHeading';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-full">
        <div>
          <Heading title="Bartender" iconClass="fas fa-wine-bottle" />
          <SubHeading
            title="Search for your favorite cocktail!"
            iconClass="fas fa-search"
          />
          <p>
            Find your favorite cocktail or search for a new one. You can also
            search by ingredient! Whether you&apos;re looking for a classic like a
            Margarita or something new and exciting, our extensive database has
            you covered.
          </p>
          <p>
            Explore cocktails by name, ingredient, or even randomly discover a
            new favorite. Learn about the ingredients, preparation methods, and
            the history behind each cocktail. Perfect for both cocktail
            enthusiasts and beginners, our platform offers a fun and interactive
            way to enhance your mixology skills.
          </p>
        </div>
        <div className="inline-block max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src="/images/cocktail.png"
            alt="Cocktail"
            width={500}
            height={500}
            className="rounded-lg border-2 border-base-300 bg-base-200 p-2"
          />
        </div>
      </div>

      <div className="mt-4 w-full text-center">
        <button type="button" className="btn rounded-lg text-3xl">
          Enter the Bar
        </button>
      </div>
    </div>
  );
}
