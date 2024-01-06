import Link from 'next/link';
export default function NotFound() {
  return (
    <div id="page_container">
      <h1>404</h1>
      <Link href="/">Back to homepage</Link>
    </div>
  );
}
