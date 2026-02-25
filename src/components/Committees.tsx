import { motion } from 'framer-motion';
import { Users, Award, UserCircle, Briefcase } from 'lucide-react';

const Committees = () => {
  const committees = [
    {
      title: 'Patron(s)',
      icon: Award,
      color: 'from-purple-600 to-purple-700',
      members: [
        {
          name: 'Prof. (Dr.) S. B. Mujumdar',
          role: 'Founder and President, Symbiosis | Chancellor, Symbiosis International (Deemed University), Pune',
        },
        {
          name: 'Dr. Vidya Yeravdekar',
          role: 'Principal Director, Symbiosis | Pro Chancellor, Symbiosis International (Deemed University), Pune',
        },
        {
          name: 'Dr. Ramakrishnan Raman',
          role: 'Vice Chancellor, Symbiosis International (Deemed University), Pune',
        },
      ],
    },

    {
      title: 'General Chair(s)',
      icon: Users,
      color: 'from-blue-600 to-white',
      members: [
        {
          name: 'Prof. (Dr.) Ketan Kotecha',
          role:
            'Dean, Faculty of Engineering, SIU | Professor & Director, Symbiosis Institute of Technology, Pune | Head, Symbiosis Centre for Applied AI (SCAAI)',
        },
        {
          name: 'A/Prof Ambarish Kulkarni',
          role:
            'Director – Vehicle Engineering Team, School of Engineering, Swinburne University of Technology',
        },
      ],
    },

    {
      title: 'Conference Chair(s)',
      icon: UserCircle,
      color: 'from-blue-700 to-white',
      members: [
        {
          name: 'Asc/Prof. Greg Adamson',
          role: 'Vice President Technical Activities, IEEE SSIT',
        },
        {
          name: 'Dr. Aditi Sharma',
          role:
            'Associate Professor, Dept. of Computer Science and Engineering, Symbiosis Institute of Technology, Pune',
        },
        {
          name: 'Dr. MVV Prasad Kantipudi',
          role:
            'Professor, Dept. of Electronics and Communication Engineering, Symbiosis Institute of Technology, Pune',
        },
      ],
    },

    {
      title: 'Secretarial Committee',
      icon: Briefcase,
      color: 'from-blue-800 to-white',
      members: [
        {
          name: 'To Be Announced',
          role: 'Details will be updated soon',
        },
      ],
    },
  ];

  return (
    <section id="committees" className="py-24 bg-gray-50">
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
            Organizing Committees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distinguished leaders guiding ICEI 2026 to success
          </p>
        </motion.div>

        {/* Committee Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${committee.color} text-white p-6 flex items-center space-x-4`}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <committee.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{committee.title}</h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {committee.members.map((member, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-bold text-lg text-gray-900">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 mt-1">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Committees;