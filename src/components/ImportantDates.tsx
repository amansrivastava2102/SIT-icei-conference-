import { motion } from 'framer-motion';
import { Calendar, Send, CheckCircle, Upload, CreditCard, Presentation } from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    {
      icon: Send,
      title: 'Paper Submission Start',
      date: '1 March 2026',
      description: 'Paper submission portal opens for ICEI 2026.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Upload,
      title: 'First Submission Due',
      date: '30 June 2026',
      description: 'First submission deadline for initial review.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: CheckCircle,
      title: 'First Acceptance',
      date: '31 July 2026',
      description: 'Notification of first round acceptance.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: Upload,
      title: 'Second Submission Due',
      date: '31 August 2026',
      description: 'Second submission deadline after revisions.',
      color: 'from-blue-800 to-blue-900',
    },
    {
      icon: CheckCircle,
      title: 'Final Acceptance',
      date: '30 September 2026',
      description: 'Final acceptance notification to authors.',
      color: 'from-blue-900 to-blue-950',
    },
    {
      icon: CreditCard,
      title: 'Registration Calls',
      date: 'August & October 2026',
      description: 'Registration calls and announcements in August and October 2026.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Presentation,
      title: 'Conference Days',
      date: '27–28 November 2026',
      description: 'ICEI 2026 Conference at SIT Pune',
      color: 'from-green-600 to-green-700',
      highlight: true,
    },
  ];

  return (
    <section id="dates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-900" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Important Dates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendar with these key milestones for ICEI 2026
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-green-500"></div>

          <div className="space-y-8">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-left pl-20 md:pl-12`}>
                  <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    item.highlight ? 'border-2 border-green-500' : 'border border-gray-100'
                  }`}>
                    <div className="flex items-start space-x-4 md:space-x-0">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center md:hidden`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-2xl font-bold text-blue-900 mb-2">
                          {item.date}
                        </p>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white hidden md:flex ${
                    item.highlight ? 'scale-125' : ''
                  }`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white md:hidden"></div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our mailing list to receive reminders and updates about important deadlines
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
            Subscribe to Updates
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantDates;
