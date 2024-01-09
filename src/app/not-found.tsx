import Link from 'next/link';
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <Link href="/">Back to homepage</Link>
    </div>
  );
}
