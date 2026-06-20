import Navbar from './Navbar';
import Footer from './Footer';

const AboutPune = () => {
  const places = [
    {
      title: 'Shaniwar Wada',
      image: 'images/Pune/shaniwarwada.jpg',
      description:
        'Shaniwar Wada is one of Pune’s most iconic historical landmarks and was the seat of the Peshwas of the Maratha Empire.',
    },
    {
      title: 'Aga Khan Palace',
      image: 'images/Pune/agakhan.jpg',
      description:
        'Aga Khan Palace is a historic monument associated with Mahatma Gandhi and India’s freedom movement.',
    },
    {
      title: 'Sinhagad Fort',
      image: 'images/Pune/sinhagadfort.jpg',
      description:
        'Sinhagad Fort is a famous hill fortress near Pune known for its scenic beauty and historical significance.',
    },
    {
      title: 'Dagdusheth Ganpati',
      image: 'images/Pune/dagdusheth.jpg',
      description:
        'Shreemant Dagdusheth Halwai Ganpati Temple is one of the most visited and revered temples in Maharashtra.',
    },
    {
      title: 'Lal Mahal',
      image: 'images/Pune/lalmahal.jpg',
      description:
        'Lal Mahal is a historic monument closely associated with Chhatrapati Shivaji Maharaj’s early life.',
    },
    {
      title: 'Rajiv Gandhi Zoological Park',
      image: 'images/Pune/zoo.jpg',
      description:
        'Rajiv Gandhi Zoological Park is a major wildlife attraction in Pune featuring diverse animal species and nature trails.',
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen pt-[90px]">

        {/* HERO SECTION */}
        <div
          className="relative h-[260px] md:h-[360px] bg-cover bg-center"
          style={{
            backgroundImage: "url('images/Pune/pune.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-[0.2em]">
              Pune
            </h1>

            <div className="w-48 h-1 bg-red-500 mt-5"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

          {/* ABOUT PUNE */}
          <div className="mb-24">

            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-10">
              About Pune
            </h2>

            <div className="space-y-8 text-gray-700 leading-9 text-[16px] md:text-[18px]">

              <p>
                Pune, popularly known as the “Oxford of the East,” is one of India’s
                leading educational, cultural, and technological hubs. Located in the
                western state of Maharashtra, Pune has earned a global reputation for its
                academic excellence, vibrant student community, historical heritage, and
                rapidly growing innovation ecosystem. The city seamlessly blends rich
                cultural traditions with modern urban development, making it one of the
                most dynamic metropolitan cities in India.
              </p>

              <p>
                Pune is home to numerous prestigious universities, engineering colleges,
                research institutions, and international educational centers that attract
                students and researchers from across India and around the world. The city
                has emerged as a major center for higher education, artificial
                intelligence, information technology, engineering research, and startup
                innovation. Its strong academic environment has played a key role in
                shaping Pune into a knowledge-driven city with a highly skilled and
                diverse workforce.
              </p>

              <p>
                Over the years, Pune has also developed into a thriving industrial and
                economic powerhouse. The city hosts leading multinational corporations,
                automobile manufacturers, IT parks, software companies, research labs, and
                smart manufacturing industries. With its rapidly expanding infrastructure
                and focus on digital transformation, Pune has become a significant hub for
                engineering innovation, Industry 4.0 technologies, smart city
                initiatives, and sustainable urban development.
              </p>

              <p>
                Pune’s pleasant climate, greenery, and scenic surroundings contribute to
                its reputation as one of India’s most livable cities. The city offers an
                exceptional quality of life with modern transportation systems,
                international connectivity, healthcare facilities, shopping districts,
                entertainment centers, and a vibrant nightlife. Pune’s welcoming and
                cosmopolitan environment makes it particularly attractive for students,
                professionals, researchers, and international visitors.
              </p>

              <p>
                Rich in history and culture, Pune has deep connections to the Maratha
                Empire and the legacy of Chhatrapati Shivaji Maharaj. Historical landmarks
                such as Shaniwar Wada, Lal Mahal, Aga Khan Palace, and Sinhagad Fort
                reflect the city’s architectural beauty and historical significance. Pune
                is equally known for its thriving arts, music, theatre, literature, and
                culinary culture, which together create a unique blend of heritage and
                modernity.
              </p>

              <p>
                As a major academic and technological destination, Pune provides an ideal
                setting for international conferences, research collaborations, and global
                knowledge exchange. Its world-class infrastructure, intellectual
                ecosystem, and strong industry-academia connections make Pune a perfect
                host city for ICEI 2026 and a prominent destination for engineering,
                innovation, and scientific advancement.
              </p>

            </div>
          </div>

          {/* TOURISM */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-14">
              Pune Tourism
            </h2>

            <div className="grid md:grid-cols-2 gap-14">

              {places.map((place) => (
                <div
                  key={place.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >

                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-[340px] object-cover"
                  />

                  <div className="p-8">

                    <h3 className="text-2xl font-bold text-gray-800 uppercase mb-4">
                      {place.title}
                    </h3>

                    <p className="text-gray-600 leading-8 text-[15px]">
                      {place.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* FOOTER INFO */}
          <div className="mt-24 border-t border-red-400 pt-10 text-center">

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              Symbiosis Institute of Technology (SIT), Pune
            </h3>

            <p className="text-gray-700 mt-3 text-base md:text-lg">
              Phone: +91 020 6193 6300 | Email:{' '}
              <a
                href="mailto:info@sitpune.edu.in"
                className="text-blue-700 underline"
              >
                info@sitpune.edu.in
              </a>
            </p>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPune;