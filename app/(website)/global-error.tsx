'use client';
import { useEffect } from 'react';

export default function Error({
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
      <h2 className='inner-header mb-4'>
        Something went wrong ... try to refresh a page
      </h2>
    </div>
  );
}
