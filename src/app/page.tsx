import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/westend/Header';
import Footer from '@/components/westend/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/hero-background.png"
              alt="Westend Club Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold mb-6 uppercase tracking-wide">
              Where Exclusivity Meets
              <br />
              Entertainment.
            </h1>
            <Link
              href="/membership"
              className="inline-block bg-white text-navy px-8 py-3 rounded text-sm uppercase tracking-wider font-semibold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Event 1 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-navy flex items-center justify-center border-4 border-gold">
                  <svg
                    className="w-12 h-12 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-2 font-semibold">
                  Evening Mixer
                </h3>
                <p className="text-gray-600 text-sm uppercase tracking-wider">
                  Mar 15
                </p>
              </div>

              {/* Event 2 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-navy flex items-center justify-center border-4 border-gold">
                  <svg
                    className="w-12 h-12 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-2 font-semibold">
                  Live Jazz Night
                </h3>
                <p className="text-gray-600 text-sm uppercase tracking-wider">
                  Mar 22
                </p>
              </div>

              {/* Event 3 */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-navy flex items-center justify-center border-4 border-gold">
                  <svg
                    className="w-12 h-12 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-2 font-semibold">
                  Charity Gala
                </h3>
                <p className="text-gray-600 text-sm uppercase tracking-wider">
                  Apr 5
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Member Benefits */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Member Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Benefit 1 */}
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-3 font-semibold">
                  Priority Access
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Skip the lines, enjoy exclusive entry.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-3 font-semibold">
                  VIP Lounge
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Private areas & world-class service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/generated/gallery-cocktail.png"
                  alt="Cocktail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/generated/gallery-lounge.png"
                  alt="Lounge"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/generated/gallery-event1.png"
                  alt="Event"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src="/generated/gallery-dining.png"
                  alt="Dining"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}