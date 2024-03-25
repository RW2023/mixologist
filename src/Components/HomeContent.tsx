import { FC } from 'react';
import Link from 'next/link';
import Heading from '@/Components/ui/Heading';
import SubHeading from '@/Components/ui/SubHeading';
import Image from 'next/image';

interface Props {
  imageWidth: number;
  imageHight: number;
  alt: string;
  img: string;
}

const content1 = (
  <>
    <SubHeading
      title="Search drinks by name or ingredient!"
      iconClass="fas fa-search"
    />
    <p className="mb-4  text-base-content text-left">
      Find your favorite cocktail or search for a new one. You can  search
      by name or ingredient. Whether you&apos;re looking for a classic like a Margarita
      or something new and exciting, our extensive database has you covered.
    </p>
  </>
);

const content2 = (
 <div className='text-left m-1 p-2'>
     <ul className='list list-disc list-inside'>
        <li>
            Search by name
        </li>
        <li>
            Search by ingredient
        </li>
        <li>
            Ai Powered Food Pairings
        </li>
        <li>
            Click each result for more
        </li>
     </ul>
 </div>
);

const HomeContent: FC<Props> = ({
  imageWidth,
  imageHight,
  alt,
  img,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 mt-2">
      <div className="mt-16 md:mt-0 mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 text-center w-full">
        <div className="border drop-shadow-sm rounded-lg p-2 flex flex-col bg-base-300 ">
          <Heading title="cheers" iconClass="fas fa-wine-bottle" />
          <div className="text-center mt-6">
            {content1}
            {content2}
            <Link href="/search">
              <button
                type="button"
                className="btn btn-primary rounded-lg text-3xl"
              >
                Enter the Bar
              </button>
            </Link>
          </div>
        </div>
        <div className="inline-block max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            width={imageWidth}
            height={imageHight}
            src={img}
            alt={alt}
            className="w-full h-auto rounded-xl border border-1 bg-black p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
