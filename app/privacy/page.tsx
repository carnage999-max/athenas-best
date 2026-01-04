import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how ATHENA\'S BEST® collects, uses, and protects your personal information. We are committed to transparency and data protection in accordance with global privacy standards.',
  openGraph: {
    title: 'Privacy Policy | ATHENA\'S BEST®',
    description: 'Our commitment to protecting your privacy and personal information.',
    url: 'https://athenasbest.com/privacy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://athenasbest.com/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-teal hover:text-dark-brown transition-colors mb-8 font-medium">
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
          <header className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-brown">Privacy Policy</h1>
            <p className="text-gray-600 text-sm">Last Updated: January 4, 2026</p>
          </header>

          <article className="prose prose-lg max-w-none">

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">Introduction</h2>
            <p>
              This Global Privacy Policy (the "Policy") describes how ATHENA'S BEST® ("Company," "we," "our," or "us") collects, uses, discloses, and safeguards personal information across all current and future websites, subdomains, and online services (collectively, the "Services"). This Policy sets a global standard for privacy compliance and data protection in accordance with the highest international legal frameworks, including but not limited to the General Data Protection Regulation (EU) 2016/679 ("GDPR"), the California Consumer Privacy Act and Privacy Rights Act (CCPA/CPRA), the Virginia Consumer Data Protection Act (VCDPA), the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA), and the Brazilian General Data Protection Law (LGPD). It applies to all users regardless of geographic location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">1. Scope and Applicability</h2>
            <p>
              This Policy applies to all visitors, customers, and users of our Services, and to all data collected online or offline through any form of interaction. By using our Services, you consent to the practices described herein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">2. Information We Collect</h2>
            <p>
              We collect personal data directly and automatically, including identifiers (name, email, phone number, address), commercial data (transactions, purchases, payment methods), biometric and health data (where applicable), geolocation, internet activity, behavioral analytics, device identifiers, and any other data required for lawful and legitimate business operations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">3. Automated and AI‑Based Processing</h2>
            <p>
              We utilize Artificial Intelligence and Machine Learning ("AI/ML") technologies to analyze behavioral data, enhance service personalization, detect fraud, and improve user experience. Automated decision‑making may influence personalized recommendations or fraud prevention mechanisms, never without appropriate human oversight and legal safeguards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">4. How We Use Information</h2>
            <p>
              We process data for legitimate business purposes: service delivery, account management, communication, compliance, analytics, marketing, personalization, and platform security. Processing is always grounded in a lawful basis under applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">5. Disclosure and Data Sharing</h2>
            <p>
              We do not sell personal data. We share information only with trusted service providers, payment processors, affiliates, analytics vendors, and legal authorities when required by law. Each third‑party partner is contractually obligated to maintain equivalent data protection standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">6. International Data Transfers</h2>
            <p>
              Data may be processed and stored in the United States and other jurisdictions. All transfers comply with GDPR Chapter V and equivalent safeguards through Standard Contractual Clauses, adequacy decisions, or binding corporate rules.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">7. Data Retention</h2>
            <p>
              Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected or as required by law. Retention schedules are periodically reviewed for compliance and minimization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">8. Children's Privacy</h2>
            <p>
              We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect data from children under 13 years old (or 16 in applicable jurisdictions) without verifiable parental consent. Parents may contact us to review or delete their child's data at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">9. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, restrict processing, object to processing, port your data, or withdraw consent. Requests can be submitted using the contact information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">10. Security and Safeguards</h2>
            <p>
              We employ administrative, technical, and physical safeguards that meet or exceed industry standards, including encryption, pseudonymization, role‑based access controls, multi‑factor authentication, and continuous threat monitoring.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">11. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and similar tools for site functionality, analytics, and marketing. Users can control cookie preferences via browser settings or our Cookie Management Tool.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">12. Cross‑Border Compliance</h2>
            <p>
              This Policy incorporates global privacy principles such as lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, integrity, and accountability. These principles apply uniformly across all operations and subsidiaries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">13. Data Protection Officer and Contact</h2>
            <p className="mb-4">
              We maintain a designated Data Protection Officer ("DPO") to oversee compliance. Users may exercise their rights or submit complaints via:
            </p>
            <p className="font-semibold">
              Email: info@athenasbest.com<br/>
              Phone: 207-947-1999<br/>
              Address: PO Box 52, Detroit, ME 04929
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-dark-brown mb-4">14. Updates to This Policy</h2>
            <p>
              We may update this Policy to reflect legal, technical, or business developments. The latest version will always be available on our website, with a new 'Last Updated' date. Continued use of our Services constitutes acceptance of any modifications.
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
