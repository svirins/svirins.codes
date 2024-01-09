export default async function Snippets() {
  return (
    <div className="flex flex-col   mx-auto pb-16">
      <h1 className="mb-4 text-3xl font-bold capsize tracking-tight md:text-5xl text-gray-100">
        Code Snippets
      </h1>
      <p className="font-semibold text-gray-100 text-base md:text-lg mb-4 mt-2">
        Some{' '}
        <span role="image" aria-label="random">
          🎲
        </span>{' '}
        stuff I&apos;ve found useful and want to share.
      </p>

      <div className="grid w-full grid-cols-1 gap-4 my-2 mt-2">TBD ...</div>
    </div>
  );
}
