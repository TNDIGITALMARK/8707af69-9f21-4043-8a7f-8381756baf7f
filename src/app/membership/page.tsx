'use client';

import { useState } from 'react';
import Header from '@/components/westend/Header';
import Footer from '@/components/westend/Footer';

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'classic',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', tier: 'classic', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4 uppercase tracking-wide">
              Membership
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join an exclusive community of discerning individuals who appreciate the finer things in life.
            </p>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Membership Tiers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Classic Tier */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold transition-colors duration-300">
                <h3 className="text-2xl font-['Playfair_Display'] text-navy mb-4 font-bold text-center">
                  Classic
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-navy">$2,500</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Access to main lounge</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Monthly events access</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">2 guest passes per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">10% dining discount</span>
                  </li>
                </ul>
                <button className="w-full bg-navy text-white py-3 rounded hover:bg-gold transition-colors duration-300 font-semibold uppercase tracking-wider">
                  Apply Now
                </button>
              </div>

              {/* Premium Tier */}
              <div className="bg-gold text-navy rounded-lg p-8 transform md:scale-105 shadow-xl relative">
                <div className="absolute top-0 right-0 bg-navy text-gold px-4 py-1 text-xs uppercase tracking-wider font-bold rounded-bl-lg">
                  Popular
                </div>
                <h3 className="text-2xl font-['Playfair_Display'] mb-4 font-bold text-center">
                  Premium
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">$5,000</span>
                  <span className="text-navy/70">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-navy mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>All Classic benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-navy mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>VIP lounge access</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-navy mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Priority event reservations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-navy mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5 guest passes per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-navy mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>20% dining discount</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-navy mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Concierge service</span>
                  </li>
                </ul>
                <button className="w-full bg-navy text-gold py-3 rounded hover:bg-navy/90 transition-colors duration-300 font-semibold uppercase tracking-wider">
                  Apply Now
                </button>
              </div>

              {/* Executive Tier */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold transition-colors duration-300">
                <h3 className="text-2xl font-['Playfair_Display'] text-navy mb-4 font-bold text-center">
                  Executive
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-navy">$10,000</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">All Premium benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Private dining room access</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Unlimited guest passes</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">30% dining discount</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Personalized concierge</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">Exclusive member events</span>
                  </li>
                </ul>
                <button className="w-full bg-navy text-white py-3 rounded hover:bg-gold transition-colors duration-300 font-semibold uppercase tracking-wider">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-4 uppercase tracking-wide">
              Apply for Membership
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Complete the form below and our membership team will contact you to discuss your application.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="tier" className="block text-gray-700 font-medium mb-2">
                  Membership Tier *
                </label>
                <select
                  id="tier"
                  required
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="classic">Classic - $2,500/year</option>
                  <option value="premium">Premium - $5,000/year</option>
                  <option value="executive">Executive - $10,000/year</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Tell us why you'd like to join Westend Club..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy text-white py-4 rounded hover:bg-gold transition-colors duration-300 font-semibold uppercase tracking-wider"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
