import { motion } from 'framer-motion';
import { FileText, Award, BookOpen, ExternalLink } from 'lucide-react';

const CallForPapers = () => {
  const features = [
    {
      icon: FileText,
      title: 'Peer-Reviewed Papers',
      description: 'Submit original, peer-reviewed research papers (6–8 pages) in IEEE format.',
    },
    {
      icon: BookOpen,
      title: 'Poster Presentations',
      description: 'Present posters highlighting work-in-progress and emerging ideas.',
    },
    {
      icon: Award,
      title: 'Workshops & Panels',
      description: 'Propose focused workshops and panel sessions on specialised themes.',
    },
  ];

  return (
    <section id="call-for-papers" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Call for Papers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-reviewed papers, posters, workshops, and panels aligned with the themes of Engineering Informatics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Publication & Awards</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">✓</span>
                  <span>All accepted papers will be submitted for publication in IEEE Xplore Digital Library.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">✓</span>
                  <span>Best Paper, Best Workshop, and Best Poster awards.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">✓</span>
                  <span>Selected papers may be recommended for extended journal publication.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">✓</span>
                  <span>IEEE digital certificates for all authors</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Submit via EasyChair</h4>
                <p className="text-blue-100 mb-6">
                  Use our official submission portal for a streamlined review process
                </p>
                
                <a
                href="https://easychair.org/conferences/?conf=icei2026"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center space-x-2 shadow-xl">
                    <span>Submit on EasyChair</span>
                    <ExternalLink className="w-5 h-5" />
                    </button>
                    </a>


              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Submission Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Paper Format</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>6-8 pages (including references)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>IEEE two-column format</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>PDF format only</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-900">Review Process</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Double-blind peer review</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Minimum 3 reviewers per paper</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Accept/Reject with revision option</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallForPapers;
