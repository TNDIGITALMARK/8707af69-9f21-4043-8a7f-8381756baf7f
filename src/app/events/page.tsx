import Image from 'next/image';
import Header from '@/components/westend/Header';
import Footer from '@/components/westend/Footer';

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: 'Wine Tasting Evening',
      date: 'March 15, 2025',
      time: '7:00 PM - 10:00 PM',
      description:
        'Join us for an exclusive wine tasting featuring selections from renowned vineyards around the world. Our sommelier will guide you through each pairing.',
      image: '/generated/gallery-cocktail.png',
      category: 'Dining',
    },
    {
      id: 2,
      title: 'Networking Mixer',
      date: 'March 22, 2025',
      time: '6:00 PM - 9:00 PM',
      description:
        'Connect with fellow members in a relaxed atmosphere. Enjoy cocktails and hors d\'oeuvres while expanding your professional network.',
      image: '/generated/gallery-event1.png',
      category: 'Networking',
    },
    {
      id: 3,
      title: 'Charity Gala',
      date: 'April 5, 2025',
      time: '7:30 PM - 12:00 AM',
      description:
        'An elegant evening supporting local charities. Black-tie event featuring live entertainment, gourmet dinner, and silent auction.',
      image: '/generated/gallery-dining.png',
      category: 'Charity',
    },
    {
      id: 4,
      title: 'Live Jazz Night',
      date: 'April 12, 2025',
      time: '8:00 PM - 11:00 PM',
      description:
        'Experience an unforgettable evening of smooth jazz performed by internationally acclaimed artists in our intimate lounge setting.',
      image: '/generated/gallery-lounge.png',
      category: 'Entertainment',
    },
    {
      id: 5,
      title: 'Golf Tournament',
      date: 'May 3, 2025',
      time: '9:00 AM - 4:00 PM',
      description:
        'Annual member golf tournament at prestigious Oakmont Country Club. Includes breakfast, lunch, and awards ceremony.',
      image: '/generated/gallery-event1.png',
      category: 'Sports',
    },
    {
      id: 6,
      title: 'Summer Soirée',
      date: 'June 15, 2025',
      time: '6:00 PM - 11:00 PM',
      description:
        'Celebrate the season on our rooftop terrace with craft cocktails, live music, and stunning city views under the stars.',
      image: '/generated/gallery-cocktail.png',
      category: 'Social',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4 uppercase tracking-wide">
              Events & Community
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Immerse yourself in a calendar of curated experiences designed to inspire, connect, and entertain.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 rounded text-xs uppercase font-bold tracking-wider">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-2xl text-navy mb-2 font-bold">
                      {event.title}
                    </h3>

                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <svg
                        className="w-4 h-4 mr-2"
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
                      <span>{event.time}</span>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

                    <button className="w-full bg-navy text-white py-3 rounded hover:bg-gold transition-colors duration-300 font-semibold uppercase tracking-wider text-sm">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Spotlights */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Member Spotlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-navy rounded-full flex items-center justify-center text-gold text-3xl font-bold">
                  JS
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-1 font-semibold">
                  John Smith
                </h3>
                <p className="text-gray-600 text-sm mb-3">Executive Director</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "Westend has transformed my professional network and provided unparalleled opportunities for growth."
                </p>
              </div>

              {/* Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-navy rounded-full flex items-center justify-center text-gold text-3xl font-bold">
                  SJ
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-1 font-semibold">
                  Sarah Johnson
                </h3>
                <p className="text-gray-600 text-sm mb-3">Marketing Consultant</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "The events and community at Westend are exceptional. I've made lasting connections here."
                </p>
              </div>

              {/* Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-navy rounded-full flex items-center justify-center text-gold text-3xl font-bold">
                  DC
                </div>
                <h3 className="font-['Playfair_Display'] text-xl text-navy mb-1 font-semibold">
                  David Chen
                </h3>
                <p className="text-gray-600 text-sm mb-3">Investment Banker</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "A truly world-class club with impeccable service and an amazing community of professionals."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-center text-3xl md:text-4xl font-['Playfair_Display'] text-navy mb-12 uppercase tracking-wide">
              Past Events Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                '/generated/gallery-cocktail.png',
                '/generated/gallery-lounge.png',
                '/generated/gallery-event1.png',
                '/generated/gallery-dining.png',
                '/generated/gallery-event1.png',
                '/generated/gallery-cocktail.png',
                '/generated/gallery-lounge.png',
                '/generated/gallery-dining.png',
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <Image
                    src={image}
                    alt={`Past event ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
