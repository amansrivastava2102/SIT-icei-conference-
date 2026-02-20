import { motion } from 'framer-motion';
import { Brain, Network, Factory } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: Brain,
      title: 'ICEI 2026 Overview',
      description:
        'The 2026 IEEE Conference on Engineering Informatics (ICEI 2026) is an international scientific forum under the flagship of IEEE that brings together academia, industry, and research communities to present advances in AI-driven engineering informatics and digital engineering systems.',
    },
    {
      icon: Network,
      title: 'Engineering Informatics',
      description:
        'Engineering Informatics is evolving through Artificial Intelligence, Agentic Systems, Generative AI, Digital Twins, Cyber-Physical Systems, Robotics, Industrial IoT, Extended Reality, and cybersecurity.',
    },
    {
      icon: Factory,
      title: 'Multidisciplinary Focus',
      description:
        'The conference emphasizes intelligent, autonomous, human-centric, and sustainable engineering systems and provides a multidisciplinary platform connecting electrical, mechanical, civil, computer, and industrial engineering.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-5 tracking-tight">
            About the Conference
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ICEI 2026 provides an IEEE-aligned platform for AI-driven Engineering Informatics and digital
            engineering systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-5">
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#1E3A8A] mb-3">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
