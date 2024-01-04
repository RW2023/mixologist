'use client';
import { FC } from 'react';

const Loading: FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-3xl">
          <span className="m-2">
            <span className="loading loading-bars loading-lg min-"></span>
          </span>{' '}
          Loading Drinks.....☝🏾 any second now...⏱️
        </p>
      </div>
    </div>
  );
};

export default Loading;
