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
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-['Roboto_Condensed'] font-bold mb-6 uppercase tracking-wide">
              Your Local South African Bar
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 font-['Open_Sans'] max-w-2xl mx-auto">
              Good drinks, good vibes, good people. That's what Westend is all about.
            </p>
            <Link
              href="/events"
              className="inline-block bg-amber text-white px-8 py-3 rounded text-sm uppercase tracking-wider font-semibold hover:bg-rust transition-all duration-300 shadow-lg"
            >
              See What's On
            </Link>
          </div>
        </section>

        {/* What's On */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Roboto_Condensed'] text-rust mb-4 uppercase tracking-wide">
              What's On
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Check out what's happening at Westend this week
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Event 1 */}
              <div className="text-center p-6 bg-cream-light rounded-lg">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rust flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-amber"
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
                <h3 className="font-['Roboto_Condensed'] text-xl text-rust mb-2 font-semibold">
                  Live Music Friday
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Local bands every Friday night
                </p>
                <p className="text-amber text-sm font-semibold uppercase tracking-wider">
                  This Friday
                </p>
              </div>

              {/* Event 2 */}
              <div className="text-center p-6 bg-cream-light rounded-lg">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rust flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-amber"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-['Roboto_Condensed'] text-xl text-rust mb-2 font-semibold">
                  Rugby on the Big Screen
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Watch all the big games with us
                </p>
                <p className="text-amber text-sm font-semibold uppercase tracking-wider">
                  Weekends
                </p>
              </div>

              {/* Event 3 */}
              <div className="text-center p-6 bg-cream-light rounded-lg">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rust flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-amber"
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
                <h3 className="font-['Roboto_Condensed'] text-xl text-rust mb-2 font-semibold">
                  Happy Hour
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  R20 off all drinks
                </p>
                <p className="text-amber text-sm font-semibold uppercase tracking-wider">
                  Daily 5-7pm
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Visit */}
        <section className="py-16 md:py-20 bg-cream-light">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Roboto_Condensed'] text-rust mb-4 uppercase tracking-wide">
              Why Come to Westend?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Just a regular bar with a great atmosphere
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-amber"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-['Roboto_Condensed'] text-xl text-rust mb-3 font-semibold">
                  Friendly Atmosphere
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Meet locals, make friends, enjoy yourself
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-amber"
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
                <h3 className="font-['Roboto_Condensed'] text-xl text-rust mb-3 font-semibold">
                  Cold Drinks
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Well-stocked bar with local and imported beers
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-amber"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-['Roboto_Condensed'] text-xl text-rust mb-3 font-semibold">
                  Sports & Entertainment
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Big screens for all the games, pool tables, darts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Roboto_Condensed'] text-rust mb-4 uppercase tracking-wide">
              The Place
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Come check it out for yourself
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="relative aspect-square overflow-hidden rounded group">
                <Image
                  src="/generated/gallery-cocktail.png"
                  alt="Drinks at the bar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded group">
                <Image
                  src="/generated/gallery-lounge.png"
                  alt="Bar interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded group">
                <Image
                  src="/generated/gallery-event1.png"
                  alt="Live music night"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded group">
                <Image
                  src="/generated/gallery-dining.png"
                  alt="Crowd enjoying themselves"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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