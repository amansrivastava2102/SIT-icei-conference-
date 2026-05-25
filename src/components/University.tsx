import Navbar from './Navbar';

const University = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-[90px]">

        {/* HERO SECTION */}
        <div
          className="relative h-[320px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/campus/campus2.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wide">
              The University
            </h1>

            <div className="w-52 h-1 bg-red-500 mx-auto mt-4"></div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto px-6 py-16">

          <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">

            <h2 className="text-3xl font-bold text-red-700 mb-10">
              About Symbiosis International (Deemed University)
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">

              <p>
                Symbiosis International (Deemed University) is a
                multi-disciplinary university offering its students and faculty a
                vibrant learning ecosystem designed around multicultural and
                innovative ethos.
              </p>

              <p>
                Symbiosis was established in 1971 by Prof. (Dr.) S. B. Mujumdar,
                which was a “home away from home” for international students.
                The institution is based on the principles of the “World as One
                Family.”
              </p>

              <p>
                The university has campuses spread across multiple cities in India
                and is recognized for academic excellence, innovation, research,
                global exposure, and interdisciplinary education.
              </p>

              <p>
                Symbiosis International (Deemed University) has been awarded
                Category-I status by UGC and has consistently ranked among India’s
                top private universities.
              </p>

              <p>
                The university strongly promotes liberal arts education,
                innovation, entrepreneurship, research collaborations,
                international exchange programmes, and industry-oriented learning.
              </p>

              <p>
                Students across all Symbiosis institutes benefit from a
                technology-enabled learning environment, modern infrastructure,
                innovation centres, global collaborations, and exposure to
                multidisciplinary education.
              </p>

              <p>
                Symbiosis International (Deemed University) is committed to the
                generation of knowledge and innovation while nurturing globally
                competent professionals prepared for future challenges.
              </p>

              <p className="font-semibold">
                For more details, please visit{" "}
                <a
                  href="https://www.siu.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  https://www.siu.edu.in/
                </a>
              </p>

            </div>

            {/* FOOTER INFO */}
            <div className="border-t border-red-300 mt-12 pt-8 text-center text-gray-700">
              <p className="text-2xl font-semibold text-gray-800">
                Symbiosis Institute of Technology (SIT), Pune
              </p>

              <p className="mt-4 text-xl">
                Phone: +91 020 6193 6300 | Email:{" "}
                <a
                  href="mailto:info@sitpune.edu.in"
                  className="text-blue-600 underline"
                >
                  info@sitpune.edu.in
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default University;