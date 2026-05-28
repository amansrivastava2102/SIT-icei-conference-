import Navbar from './Navbar';

const AboutPune = () => {
  const places = [
    {
      title: 'Shaniwar Wada',
      image: '/images/pune/shaniwarwada.png',
      description:
        'Shaniwar Wada is one of Pune’s most iconic historical landmarks and was the seat of the Peshwas of the Maratha Empire.',
    },
    {
      title: 'Aga Khan Palace',
      image: '/images/pune/agakhan.png',
      description:
        'Aga Khan Palace is a historic monument associated with Mahatma Gandhi and India’s freedom movement.',
    },
    {
      title: 'Sinhagad Fort',
      image: '/images/pune/sinhagad.png',
      description:
        'Sinhagad Fort is a famous hill fortress near Pune known for its scenic beauty and historical significance.',
    },
    {
      title: 'Dagdusheth Ganpati',
      image: '/images/pune/dagdusheth.png',
      description:
        'Shreemant Dagdusheth Halwai Ganpati Temple is one of the most visited and revered temples in Maharashtra.',
    },
    {
      title: 'Lal Mahal',
      image: '/images/pune/lalmahal.png',
      description:
        'Lal Mahal is a historic monument closely associated with Chhatrapati Shivaji Maharaj’s early life.',
    },
    {
      title: 'Rajiv Gandhi Zoological Park',
      image: '/images/pune/zoo.png',
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
          className="relative h-[220px] md:h-[280px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/campus/campus3.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wide">
              Pune
            </h1>

            <div className="w-40 h-1 bg-red-500 mt-4"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-14">

          {/* ABOUT PUNE */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-8">
              About Pune
            </h2>

            <div className="space-y-6 text-gray-700 leading-8 text-[15px] md:text-[17px]">
              <p>
                Pune, popularly known as the “Oxford of the East,” is one of India’s
                leading educational, cultural, and IT hubs. Located in Maharashtra,
                Pune is renowned for its academic excellence, vibrant student life,
                rich history, and modern infrastructure.
              </p>

              <p>
                Pune is home to several prestigious educational institutions,
                multinational companies, research centers, and innovation hubs.
                The city has rapidly emerged as a center for technology,
                engineering, startups, and smart urban development.
              </p>

              <p>
                With its pleasant climate, historical landmarks, thriving cultural
                scene, and strong industrial ecosystem, Pune offers a perfect blend
                of tradition and modernity. The city is also known for its vibrant
                arts, music, literature, and culinary culture.
              </p>

              <p>
                Pune provides excellent connectivity, world-class infrastructure,
                and a safe, welcoming environment, making it an ideal destination
                for international conferences, academic collaborations, and global
                research engagement.
              </p>
            </div>
          </div>

          {/* TOURISM */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-10">
              Pune Tourism
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {places.map((place) => (
                <div key={place.title}>

                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-[260px] object-cover"
                  />

                  <h3 className="text-2xl font-bold text-center text-gray-800 uppercase mt-5 mb-4">
                    {place.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-[14px] text-center">
                    {place.description}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* FOOTER INFO */}
          <div className="mt-20 border-t border-red-400 pt-8 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Symbiosis Institute of Technology (SIT), Pune
            </h3>

            <p className="text-gray-700 mt-2 text-base md:text-lg">
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
    </>
  );
};

export default AboutPune;