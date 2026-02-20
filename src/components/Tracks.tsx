import { motion } from 'framer-motion';
import { Factory, HeartPulse, DollarSign, Radio, Boxes, Shield } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      icon: Factory,
      title: 'Track 1: Agentic and Generative AI for Autonomous Industry 4.0',
      color: 'from-blue-500 to-blue-600',
      topics: [
        'Autonomous industrial agents',
        'Generative digital twins',
        'Human-AI collaborative robotics',
        'Sustainable manufacturing',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Track 2: Agentic and Generative AI for Cognitive Healthcare Informatics',
      color: 'from-blue-600 to-blue-700',
      topics: [
        'Clinical decision agents',
        'AI diagnostics',
        'Precision medicine',
        'Autonomous monitoring systems',
      ],
    },
    {
      icon: DollarSign,
      title: 'Track 3: Agentic and Generative AI for Smart Financial Systems',
      color: 'from-blue-700 to-blue-800',
      topics: [
        'Autonomous trading',
        'Fraud detection',
        'Responsible fintech',
        'Blockchain intelligence',
      ],
    },
    {
      icon: Radio,
      title: 'Track 4: AI-Native 5G/6G Networks and Intelligent Communication Systems',
      color: 'from-blue-800 to-blue-900',
      topics: [
        'Intelligent network management',
        'Generative traffic modelling',
        'Edge AI',
        'Semantic communication',
      ],
    },
    {
      icon: Boxes,
      title: 'Track 5: Agentic AI for Smart IoT and Cyber-Physical Systems',
      color: 'from-blue-900 to-blue-950',
      topics: [
        'Smart cities',
        'Digital infrastructure',
        'V2X systems',
        'Urban digital twins',
      ],
    },
    {
      icon: Shield,
      title: 'Cross Cutting: Responsible Trustworthy Human-Centric Agentic AI',
      color: 'from-blue-600 to-blue-800',
      topics: [
        'Explainable AI',
        'AI safety',
        'Ethical governance',
        'Human in loop systems',
      ],
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 tracking-tight">
            Conference Tracks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six specialized tracks covering the full spectrum of AI-driven Engineering Informatics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="p-6 md:p-7 border-b border-gray-100 flex items-center space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <track.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#1E3A8A] text-left">
                  {track.title}
                </h3>
              </div>
              <div className="p-6 md:p-7 flex-1">
                <h4 className="font-semibold text-sm md:text-base text-gray-900 mb-3">
                  Key Topics
                </h4>
                <ul className="space-y-2 text-sm md:text-[15px] text-gray-700">
                  {track.topics.map((topic) => (
                    <li key={topic} className="flex items-start space-x-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
