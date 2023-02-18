'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function GlobalError({
  error
}: // reset
{
  error: Error;
  // reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col  max-w-2xl mx-auto w-full'>
      <h2 className='inner-header mb-4'>Something went wrong!</h2>
      {/* <button
        className='mt-4 bg-wakatime-blue hover:bg-wakatime-indigo text-white font-bold py-2 px-4 rounded'
        onClick={() => reset()}
      >
        Try again
      </button> */}
    </div>
  );
}
