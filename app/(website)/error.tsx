'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col  max-w-2xl mx-auto w-full'>
      <h1 className='mb-4 text-3xl font-bold tracking-tight capsize  md:text-5xl text-gray-100'>
        Something went wrong!
      </h1>
      <button
        className='mt-4 bg-wakatime-blue hover:bg-wakatime-indigo text-white font-bold py-2 px-4 rounded'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
