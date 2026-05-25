const Institute = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div
        className="relative h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/campus/campus3.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wide">
            The Institute
          </h1>

          <div className="w-52 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-red-700 mb-10">
            About Symbiosis Institute of Technology (SIT), Pune
          </h2>

          {/* CONTENT */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">

            <p>
              Symbiosis Institute of Technology (SIT), Pune is one of the premier
              engineering institutes under Symbiosis International (Deemed University),
              offering quality technical education with a strong focus on innovation,
              research, and industry-oriented learning.
            </p>

            <p>
              The institute provides undergraduate, postgraduate, and doctoral programs
              across various engineering disciplines including Computer Science,
              Artificial Intelligence & Machine Learning, Electronics & Telecommunication,
              Mechanical Engineering, Civil Engineering, and Robotics & Automation.
            </p>

            <p>
              SIT Pune emphasizes experiential learning through modern laboratories,
              research centres, industry collaborations, hackathons, innovation projects,
              internships, and international exposure opportunities.
            </p>

            <p>
              The institute is committed to developing globally competent engineers
              equipped with technical expertise, leadership skills, ethical values,
              and entrepreneurial mindset required for future-ready industries.
            </p>

            <p>
              The campus offers world-class infrastructure including smart classrooms,
              advanced laboratories, incubation facilities, sports amenities,
              collaborative learning spaces, and vibrant student communities.
            </p>

            <p>
              SIT Pune actively promotes multidisciplinary education, innovation,
              sustainability, digital transformation, and research-driven engineering
              practices aligned with Industry 4.0 and next-generation technologies.
            </p>

            <p className="font-semibold">
              For more details, please visit{" "}
              <a
                href="https://www.sitpune.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://www.sitpune.edu.in/
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
  );
};

export default Institute;