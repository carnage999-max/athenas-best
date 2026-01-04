import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for ATHENA\'S BEST®. Understand your rights and obligations when using our website, products, and services.',
  openGraph: {
    title: 'Terms of Service | ATHENA\'S BEST®',
    description: 'Terms and conditions for using ATHENA\'S BEST® products and services.',
    url: 'https://athenasbest.com/terms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://athenasbest.com/terms',
  },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-teal hover:text-dark-brown transition-colors mb-8 font-medium">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
          <header className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-brown">Terms of Service</h1>
            <p className="text-gray-600 text-sm">Last Updated: January 4, 2026</p>
          </header>

          <article className="prose prose-lg max-w-none">

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">Introduction</h2>
            <p>
              Welcome to ATHENA'S BEST® (the "Company," "we," "our," or "us"). These Terms of Service (the "Terms") govern your access to and use of our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">1. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on our Services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on our Services</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">2. Disclaimer</h2>
            <p>
              The materials on our Services are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">3. Limitations</h2>
            <p>
              In no event shall ATHENA'S BEST® or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our Services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">4. Accuracy of Materials</h2>
            <p>
              The materials appearing on our Services could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our Services are accurate, complete, or current. We may make changes to the materials contained on our Services at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">5. Materials and Content</h2>
            <p>
              We do not endorse any content or information accessible through our Services. We have no control over the content posted on our website by third parties and make no representations regarding the accuracy, reliability, or legality of such content. Your use of our Services constitutes your acknowledgment that you have read these Terms and that you agree to comply with all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">6. Limitations of Liability</h2>
            <p>
              In no case shall ATHENA'S BEST® or its officers, directors, employees, or agents be liable to you for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our Services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">7. Revisions and Changes</h2>
            <p>
              ATHENA'S BEST® may revise these Terms of Service at any time without notice. By using our Services, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of Florida, United States, and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">9. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="font-semibold">
              Email: info@athenasbest.com<br/>
              Phone: 207-947-1999<br/>
              Address: PO Box 52, Detroit, ME 04929
            </p>
          </section>

          </article>

          <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              © 2025-2026 ATHENA'S BEST®. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
