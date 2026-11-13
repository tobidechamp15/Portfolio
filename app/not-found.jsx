import Link from "next/link";

export const metadata = { title: "Page not found | Oluwatobiloba Oluwadare" };

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="container-x">
        <p className="label">404</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.02em] text-ink-text">This page does not exist</h1>
        <p className="lead mt-4 max-w-[28rem]">
          The link may be old or mistyped. The portfolio home page has everything.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
