import Heading from '@/Components/ui/Heading';
import SubHeading from '@/Components/ui/SubHeading';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap h-screen justify-center text-3xl items-center">
      <div className="text text-4xl">
        <Heading title="Mixologist" iconClass="fas fa-cocktail" />
        <SubHeading
          title="Your one stop shop for all things cocktails"
          iconClass="fas fa-brain"
        />
        <Image
          src="/images/cocktail.png"
          alt="cocktail"
          width={400}
          height={400}
          className="rounded-lg border-2 border-base-500 bg-base-300 p-2 items-center justify-center mx-auto mb-4"
        />
      </div>

      <SubHeading title='search for your favorite cocktail, or find a new one to try! ' iconClass='fas fa-search' />
    </div>
  );
}
