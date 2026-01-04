import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | ATHENA\'S BEST®',
  description: 'Page not found',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-dark-brown mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-dark-brown mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-gold text-dark-brown font-semibold rounded hover:bg-opacity-90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
