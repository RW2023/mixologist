import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const HomepageContent: FC<Props> = (): JSX.Element => {
  return (
    <div className="text-center mt-6 container p-4 m-auto bg-base-100 border rounded flex flex-col justify-center align-middle">
      <div className="bg-base-300 p-4 border rounded-md drop-shadow-md m-2">
        <p className="mb-4 text-lg text-base-content text-left">
          Find your favorite cocktail or search for a new one. You can also
          search by ingredient! Whether you&apos;re looking for a classic like a
          Margarita or something new and exciting, our extensive database has
          you covered.
        </p>
      </div>
      {/* <div className="bg-base-300 p-4 border rounded-md drop-shadow-md m-2">
        <p className="text-lg text-base-content text-left">
          Explore cocktails by name, ingredient, or even randomly discover a new
          favorite. Learn about the ingredients, preparation methods, and the
          history behind each cocktail. Perfect for both cocktail enthusiasts
          and beginners, our platform offers a fun and interactive way to
          enhance your mixology skills.
        </p>
      </div> */}
      <Link href="/search">
        <button type="button" className="btn btn-primary rounded-lg text-3xl">
          Enter the Bar
        </button>
      </Link>
    </div>
  );
};

export default HomepageContent;
