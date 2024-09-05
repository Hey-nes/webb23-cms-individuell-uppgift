import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>We couldn&apos;t find the page you&apos;re looking for.</p>
      <a href="/" className="column-link">
        Go back to the homepage
      </a>
    </div>
  );
}
