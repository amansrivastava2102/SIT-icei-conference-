import { motion } from 'framer-motion';
import { Calendar, MapPin, BookOpen } from 'lucide-react';

const PastConferences = () => {
  const conferences = [
    {
      year: '2025',
      location: 'Swinburne University of Technology',
      country: 'Melbourne, Australia',
      icon: Calendar,
      link: 'https://easychair.org/cfp/ICEI2025',
    },
    {
      year: '2024',
      location: 'IIT Dharwad',
      country: 'Dharwad, India',
      icon: MapPin,
      link: 'https://icei.iitdh.ac.in/',
    },
    {
      year: '2023',
      location: 'ICEI Australia Edition',
      country: 'Virtual Conference',
      icon: BookOpen,
      link: 'https://easychair.org/cfp/ICEI2025',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ICEI Conferences Series
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proud legacy of academic excellence and innovation across the globe
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col gap-8`}
              >

                {/* CONTENT CARD */}
                <div
                  className={`flex-1 ${
                    index === 1 ? 'md:text-left' : 'md:text-right'
                  } text-center`}
                >
                  <a
                    href={conf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 cursor-pointer">

                      <div
                        className={`flex items-center ${
                          index === 1 ? 'justify-start' : 'justify-end'
                        } space-x-4 mb-4`}
                      >

                        {/* ICON LEFT FOR 2024 */}
                        {index === 1 && (
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                            <conf.icon className="w-6 h-6 text-white" />
                          </div>
                        )}

                        {/* TEXT */}
                        <div>
                          <h3 className="text-3xl font-bold text-blue-900">
                            ICEI {conf.year}
                          </h3>

                          <p className="text-lg font-semibold text-gray-700 mt-2">
                            {conf.location}
                          </p>

                          <p className="text-gray-600">
                            {conf.country}
                          </p>
                        </div>

                        {/* ICON RIGHT FOR OTHERS */}
                        {index !== 1 && (
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                            <conf.icon className="w-6 h-6 text-white" />
                          </div>
                        )}

                      </div>
                    </div>
                  </a>
                </div>

                {/* CENTER DOT */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* EMPTY SIDE */}
                <div className="flex-1"></div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* IEEE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-blue-900 text-white rounded-2xl p-8"
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4" />

          <h3 className="text-2xl font-bold text-white mb-4">
            Published in IEEE Xplore
          </h3>

          <p className="text-blue-100 max-w-2xl mx-auto">
            All proceedings from past ICEI conferences are published and indexed
            in IEEE Xplore Digital Library, ensuring global visibility and citation.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PastConferences;