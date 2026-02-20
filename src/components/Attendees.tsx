import { motion } from 'framer-motion';
import { GraduationCap, Building2, Users, Code, Landmark, FlaskConical } from 'lucide-react';

const Attendees = () => {
  const attendeeTypes = [
    {
      icon: FlaskConical,
      title: 'Researchers',
      description: 'Leading scientists and research scholars in AI and informatics',
      count: '50+',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Professors',
      description: 'Academic faculty from top universities worldwide',
      count: '40+',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Building2,
      title: 'Industry Leaders',
      description: 'CTOs, engineers, and technology innovators',
      count: '60+',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: Users,
      title: 'Students',
      description: 'PhD candidates, graduate, and undergraduate students',
      count: '70+',
      color: 'from-blue-800 to-blue-900',
    },
    {
      icon: Landmark,
      title: 'Government Agencies',
      description: 'Policy makers and public sector representatives',
      count: '15+',
      color: 'from-blue-900 to-blue-950',
    },
    {
      icon: Code,
      title: 'Developers',
      description: 'Software engineers and AI/ML practitioners',
      count: '45+',
      color: 'from-blue-500 to-blue-600',
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
            Who Will Attend
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join 200+ professionals from academia, industry, and government sectors
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-full text-2xl font-bold">
            200+ Expected Attendees
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attendeeTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-6 right-6">
                  <span className="text-3xl font-bold text-blue-100">{type.count}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attendees;
