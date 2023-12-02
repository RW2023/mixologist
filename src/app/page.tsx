import Heading from '@/Components/ui/Heading';
import SubHeading from '@/Components/ui/SubHeading';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <Heading title="cocktail professor" iconClass="fas fa-cocktail" />
        <div className="inline-block max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src="/images/cocktail.png"
            alt="cocktail"
            width={400}
            height={400}
            className="rounded-lg border-2 border-base-500 bg-base-300 p-2"
          />
        </div>
      </div>

      <SubHeading
        title="search for your favorite cocktail!"
        iconClass="fas fa-search"
      />
      <button
        type="button"
        className="btn rounded-lg text-3xl fas fa-martini-glass"
      >
        Enter
      </button>
    </div>
  );
}
