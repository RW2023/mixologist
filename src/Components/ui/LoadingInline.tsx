'use client';
import React from 'react';

const LoadingInline = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <p className="text-xl">
          <span className="m-2">
            <span className="loading loading-bars loading-md"></span>
          </span>{' '}
          Loading.....⏱️ Notes...📒
        </p>
      </div>
    </div>
  );
};

export default LoadingInline;
