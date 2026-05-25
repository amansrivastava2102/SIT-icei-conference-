import { motion } from 'framer-motion';
import { Award, Check } from 'lucide-react';

const Sponsorship = () => {
  const packages = [
    {
      tier: 'Platinum',
      amount: '₹3,00,000',
      color: 'from-gray-400 to-gray-600',
      borderColor: 'border-gray-400',
      benefits: [
        'Prime exhibition booth (10x10 ft)',
        'Logo on all conference materials',
        'Full-page advertisement in proceedings',
        '5 complimentary registrations',
        'Speaking opportunity in plenary session',
        'Exclusive branding on conference website',
        'Logo on conference banners and signage',
        'Social media promotion',
      ],
      highlight: true,
    },
    {
      tier: 'Gold',
      amount: '₹2,00,000',
      color: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-500',
      benefits: [
        'Exhibition booth (8x8 ft)',
        'Logo on conference website',
        'Half-page advertisement in proceedings',
        '3 complimentary registrations',
        'Acknowledgment in opening ceremony',
        'Logo on conference bags',
        'Social media mentions',
      ],
      highlight: false,
    },
    {
      tier: 'Silver',
      amount: '₹1,00,000',
      color: 'from-gray-300 to-gray-500',
      borderColor: 'border-gray-400',
      benefits: [
        'Exhibition booth (6x6 ft)',
        'Logo on conference website',
        'Quarter-page advertisement',
        '2 complimentary registrations',
        'Logo in conference brochure',
        'Certificate of appreciation',
      ],
      highlight: false,
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
          <Award className="w-16 h-16 mx-auto mb-6 text-blue-900" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sponsorship Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with ICEI 2026 and gain visibility among leading academics and industry professionals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${pkg.borderColor} ${
                pkg.highlight ? 'transform lg:scale-105' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${pkg.color} text-white p-8 text-center`}>
                <h3 className="text-3xl font-bold mb-4">
                  {pkg.tier}
                </h3>
                <div className="text-5xl font-bold mb-2">
                  {pkg.amount}
                </div>
                <p className="text-sm opacity-90">One-time investment</p>
              </div>

              <div className="p-8">
                <h4 className="font-bold text-lg text-gray-900 mb-6">Benefits Include:</h4>
                <ul className="space-y-4">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Become a {pkg.tier} Sponsor
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Sponsor ICEI 2026?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">200+</div>
              <p className="text-gray-700">Experts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <p className="text-gray-700">Research Papers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-gray-700">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <p className="text-gray-700">IEEE Publication</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Custom Sponsorship Options Available</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            We can create tailored sponsorship packages to meet your specific marketing and branding objectives
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
            Contact Sponsorship Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;
