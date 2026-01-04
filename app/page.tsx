'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TopNav from '@/components/TopNav';
import SideNav from '@/components/SideNav';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<'5lb' | '30lb' | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection((entry.target as HTMLElement).id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && containerRef.current) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <StructuredData />
      <TopNav activeSection={activeSection} />
      <div ref={containerRef} className="scroll-container">
        {/* HOME */}
        <section id="home" className="section home">
          <div className="section-content">
            <h1>Real Nutrition. Not Burnt.</h1>
            <p className="text-lg leading-relaxed">
              Carefully cooked dog food that preserves nutrients — without cutting corners or inflating prices.
            </p>
            <div className="hero-image-container">
              <Image
                src="/high-protein-omega.png"
                alt="ATHENA'S BEST® Dog Food Bags"
                width={300}
                height={300}
                priority
                className="hero-image"
              />
            </div>
            <div className="mt-8">
              <button className="btn" onClick={() => scrollToSection('products')}>
                Shop Athena's Best
              </button>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="section problem">
          <div className="section-content">
            <h2>The Problem</h2>
            <p>
              Most dog foods are cooked at extremely high temperatures to streamline production. This destroys the very nutrients your dog needs — proteins break down, vitamins evaporate, and essential fats oxidize.
            </p>
            <p>
              Meanwhile, premium brands charge double or triple for the same broken nutrition, just in a fancier bag.
            </p>
            <h2 className="mt-8">There's a Better Way</h2>
            <p>
              Athena's Best uses controlled-temperature cooking to preserve the nutrients that matter. Your dog gets the nutrition of premium food at a price that respects your budget.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section process">
          <div className="section-content">
            <h2>Our Process</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Low-Temperature Cooking</h3>
                <p>
                  We cook at carefully controlled temperatures to preserve proteins, vitamins, and omega fats. No flash-burning. No nutrient stripping.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Clean Ingredient Sourcing</h3>
                <p>
                  Every ingredient is selected for nutritional value. Named proteins only. No mystery meat meals. No artificial additives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Batch-Tested Quality</h3>
                <p>
                  Each batch is tested to ensure consistency and safety. We stand behind what we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section id="ingredients" className="section ingredients">
          <div className="section-content">
            <h2>What's Inside</h2>
            <div className="mt-8 space-y-4 text-left w-full max-w-2xl">
              <p>
                <strong>Named Proteins:</strong> Beef, chicken, fish, or lamb — no meat meals or unidentified animal by-products.
              </p>
              <p>
                <strong>Balanced Fats:</strong> Omega-3 and Omega-6 in the right ratio for skin, coat, and cognitive health.
              </p>
              <p>
                <strong>Whole Vegetables & Grains:</strong> Sweet potato, pumpkin, brown rice, oats — intact and digestible.
              </p>
              <p>
                <strong>No Artificial Additives:</strong> No BHA, BHT, ethoxyquin, or synthetic colorants.
              </p>
              <p>
                <strong>No Fillers:</strong> No corn meal, wheat gluten, or empty calories.
              </p>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="section why">
          <div className="section-content">
            <h2>Why Athena's Best</h2>
            <div className="mt-8 space-y-6 text-left w-full max-w-2xl">
              <div>
                <h3 className="text-lg font-semibold mb-1">Nutrition Without the Markup</h3>
                <p>
                  Premium food doesn't need a premium price tag. We invest in process, not packaging.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Built for Long-Term Health</h3>
                <p>
                  Preserved nutrients mean healthier digestion, shinier coat, and more energy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Designed by People Who Care</h3>
                <p>
                  Founded by a family who refused to compromise their dog's nutrition. That same philosophy runs through every batch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="section products">
          <div className="section-content">
            <h2>Our Bags</h2>
            <div className="product-grid">
              <div className="product-card">
                <h3>5 lb Bag</h3>
                <p>Perfect for small breeds or trial size. Try Athena's Best risk-free.</p>
                <button className="btn btn-dark mt-4" onClick={() => setSelectedProduct('5lb')}>View Details</button>
              </div>
              <div className="product-card">
                <h3>30 lb Bag</h3>
                <p>Best value for regular-to-large breeds. Subscribe for 10% off recurring orders.</p>
                <button className="btn btn-dark mt-4" onClick={() => setSelectedProduct('30lb')}>View Details</button>
              </div>
            </div>
            <div className="mt-6 max-w-2xl">
              <h3 className="text-lg font-semibold mb-4">Feeding Guidelines</h3>
              <p className="text-sm leading-relaxed mb-2">
                Feeding amounts vary by dog weight and activity level. See bag for detailed guidelines, or consult your veterinarian.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq">
          <div className="section-content">
            <h2>Questions</h2>
            <div className="faq-container">
              <FAQItem
                question="Is Athena's Best grain-free?"
                answer="No. We use whole grains like brown rice and oats, which are digestible and nutrient-dense. Grain-free diets offer no nutritional advantage and may increase the risk of heart issues in some dogs. Whole grains are the better choice."
              />
              <FAQItem
                question="How is it cooked?"
                answer="We use a controlled-temperature slow-cooking process that preserves nutrients while ensuring food safety. The exact method is proprietary, but the result is measurable: higher nutrient retention than conventional kibble."
              />
              <FAQItem
                question="Where is it made?"
                answer="Athena's Best is manufactured in a AAFCO-certified facility in the United States with rigorous quality control standards."
              />
              <FAQItem
                question="Who should use Athena's Best?"
                answer="Athena's Best is suitable for most adult dogs. If your dog has specific allergies, sensitivities, or dietary needs, consult your veterinarian before switching food. Puppies and senior dogs may have different nutritional requirements."
              />
              <FAQItem
                question="Can I mix it with other foods?"
                answer="Yes. You can transition gradually by mixing Athena's Best with your dog's current food to avoid digestive upset. A typical transition takes 7-10 days."
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-content">
            <h2>About Athena's Best</h2>
            <p className="mt-4 text-left max-w-2xl">
              Athena's Best was founded on a simple principle: a dog doesn't need to eat fancy food to eat well. It needs nutrition that's been thoughtfully preserved and honestly priced.
            </p>
            <p className="text-left max-w-2xl">
              We named the brand after Athena—the Greek goddess of wisdom, strength, and protection. Those qualities guide every decision we make: the wisdom to prioritize nutrition over marketing, the strength to challenge industry shortcuts, and the protection that comes from putting your dog's health first.
            </p>
            <p className="text-left max-w-2xl">
              This isn't a premium brand. It's a responsible one.
            </p>
          </div>
        </section>

        {/* SHOP */}
        <section id="shop" className="section shop">
          <div className="section-content">
            <h2>Ready to Switch?</h2>
            <p>
              Start with a 5 lb bag to see how your dog responds. If you're happy, subscribe to 30 lb bags and save 10% on every order.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <button className="btn" onClick={() => scrollToSection('products')}>
                Shop Now
              </button>
              <button className="btn btn-light">Subscribe & Save</button>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
              <p className="mb-2">Questions? Contact us:</p>
              <p className="mb-1">Email: info@athenasbest.com</p>
              <p className="mb-1">Phone: 207-947-1999</p>
              <p className="mb-4">Address: PO Box 52, Detroit, ME 04929</p>
              <div className="mt-4 flex justify-center gap-4">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </div>
              <p className="mt-4 text-xs">© 2025-2026 ATHENA'S BEST®. All rights reserved.</p>
            </div>
          </div>
        </section>
      </div>

      <SideNav activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image">
                <Image
                  src="/high-protein-omega.png"
                  alt={`${selectedProduct === '5lb' ? '5 lb' : '30 lb'} ATHENA'S BEST® Bag`}
                  width={300}
                  height={300}
                  priority
                />
              </div>
              <div className="modal-info">
                <h3 className="text-2xl font-bold mb-4">{selectedProduct === '5lb' ? '5 lb Bag' : '30 lb Bag'}</h3>
                <p className="mb-4">
                  {selectedProduct === '5lb'
                    ? 'Our 5 lb bag is perfect for small breeds or if you want to try Athena\'s Best risk-free. See the quality for yourself with our premium formula.'
                    : 'Our 30 lb bag offers the best value for regular-to-large breed dogs. Subscribe and save 10% on recurring orders for continuous nutrition.'
                  }
                </p>
                <div className="modal-price mb-6">
                  <p className="text-lg font-semibold">Premium Nutrition</p>
                  <p className="text-sm text-gray-600">High-protein formula with omega fatty acids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '−' : '+'} {question}
      </div>
      <div className="faq-answer">
        {answer}
      </div>
    </div>
  );
}
