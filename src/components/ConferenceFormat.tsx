import { motion } from 'framer-motion';
import { Presentation, Users, Store, Coffee, Laptop } from 'lucide-react';

const ConferenceFormat = () => {
  const formats = [
    {
      icon: Presentation,
      title: 'Invited Plenary Lectures',
      description: 'Flagship keynote talks by internationally recognised experts in AI and Engineering Informatics.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Oral Presentations',
      description: 'Technical paper sessions with structured presentations and discussion.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Store,
      title: 'Exhibition Booths',
      description: 'Industry and research exhibition booths showcasing cutting-edge technologies.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: Coffee,
      title: 'Networking Lunch & High Tea',
      description: 'Curated informal networking over lunch and high tea for academic–industry interactions.',
      color: 'from-blue-800 to-blue-900',
    },
    {
      icon: Laptop,
      title: 'Workshops',
      description: 'Hands-on technical workshops and tutorials on emerging topics.',
      color: 'from-blue-900 to-blue-950',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference Format
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive program designed to maximize learning, networking, and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${format.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <format.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {format.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {format.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceFormat;
