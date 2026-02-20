import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const Budget = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const budgetSections = [
    {
      id: 'income',
      title: 'Expected Income',
      icon: TrendingUp,
      color: 'from-green-600 to-green-700',
      items: [
        { item: 'Registration fees (200 participants)', amount: '₹20,00,000' },
        { item: 'Sponsorship (Platinum, Gold, Silver)', amount: '₹6,00,000' },
        { item: 'Exhibition stalls', amount: '₹3,00,000' },
        { item: 'Workshop fees', amount: '₹2,00,000' },
      ],
      total: '₹31,00,000',
    },
    {
      id: 'expenditure',
      title: 'Estimated Expenditure',
      icon: TrendingDown,
      color: 'from-red-600 to-red-700',
      items: [
        { item: 'Venue and facilities', amount: '₹5,00,000' },
        { item: 'Catering (lunch, tea, dinner)', amount: '₹8,00,000' },
        { item: 'Keynote speaker honorarium', amount: '₹3,00,000' },
        { item: 'Publication and printing', amount: '₹4,00,000' },
        { item: 'Marketing and publicity', amount: '₹2,00,000' },
        { item: 'Audio-visual and IT infrastructure', amount: '₹2,50,000' },
        { item: 'Conference kits and materials', amount: '₹3,00,000' },
        { item: 'Awards and certificates', amount: '₹1,50,000' },
      ],
      total: '₹29,00,000',
    },
    {
      id: 'ieee',
      title: 'IEEE Agreement & Costs',
      icon: DollarSign,
      color: 'from-blue-600 to-blue-700',
      items: [
        { item: 'IEEE Technical Co-sponsorship Fee', amount: '₹50,000' },
        { item: 'IEEE Xplore Publication Fee', amount: '₹1,20,000' },
        { item: 'IEEE Conference Management', amount: '₹30,000' },
      ],
      total: '₹2,00,000',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Budget & Financial Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent financial planning for a world-class conference experience
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {budgetSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-lg font-semibold text-blue-900 mt-1">
                      Total: {section.total}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    expandedSection === section.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-4 border-t border-gray-100">
                      <div className="space-y-3">
                        {section.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                            <span className="text-gray-700 font-medium">{item.item}</span>
                            <span className="text-gray-900 font-bold text-lg">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t-2 border-gray-300 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total {section.title}</span>
                        <span className="text-2xl font-bold text-blue-900">{section.total}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Total Income</h3>
              <p className="text-4xl font-bold">₹31,00,000</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Total Expenditure</h3>
              <p className="text-4xl font-bold">₹31,00,000</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">Net Balance</h3>
              <p className="text-4xl font-bold text-green-400">₹0</p>
            </div>
          </div>
          <p className="text-center mt-6 text-blue-100">
            Balanced budget ensures quality conference experience without financial burden
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Budget;
