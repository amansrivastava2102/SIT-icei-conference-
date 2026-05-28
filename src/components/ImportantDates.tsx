import { motion } from 'framer-motion';
import {
  Calendar,
  Send,
  Ticket,
  FileUp,
  ClipboardCheck,
  Presentation,
} from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    {
      icon: Send,
      title: 'Paper submission deadline',
      date: '10th August 2026',
      description: 'Paper submission portal opens for ICEI 2026.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Calendar,
      title: 'Notification Date',
      date: '30th September 2026',
      description: 'Submission deadline for initial review.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Ticket,
      title: 'Super Early Bird Registration',
      date: '10th July 2026',
      description: 'Notification of first round acceptance.',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: FileUp,
      title: 'Early Bird Registration',
      date: '10th August 2026',
      description: 'Camera Ready submission deadline after revisions.',
      color: 'from-blue-800 to-blue-900',
    },
    {
      icon: ClipboardCheck,
      title: 'Registration Deadline',
      date: '10th November 2026',
      description: 'Final acceptance notification to authors.',
      color: 'from-blue-900 to-blue-950',
    },
    {
      icon: Presentation,
      title: 'Conference Days',
      date: '4-5 December 2026',
      description: 'ICEI 2026 Conference at SIT Pune',
      color: 'from-green-600 to-green-700',
      highlight: true,
    },
  ];

  return (
    <section id="dates" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-blue-900" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Important Dates
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendar with these key milestones for ICEI 2026
          </p>
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-green-500"></div>

          <div className="space-y-12">
            {dates.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center"
                >

                  {/* LEFT SIDE */}
                  {isLeft ? (
                    <div className="md:text-right md:pr-6">
                      <Card item={item} />
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* CENTER ICON */}
                  <div className="flex justify-center relative z-10">
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white ${
                        item.highlight ? 'scale-110' : ''
                      }`}
                    >
                      <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  {!isLeft ? (
                    <div className="md:text-left md:pl-6">
                      <Card item={item} />
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item }: any) => (
  <div
    className={`bg-white rounded-xl p-6 shadow-md ${
      item.highlight
        ? 'border-2 border-green-500'
        : 'border border-gray-100'
    }`}
  >
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
);

export default ImportantDates;