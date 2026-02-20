import { motion } from 'framer-motion';
import { Users, Award, UserCircle, Briefcase } from 'lucide-react';

const Committees = () => {
  const committees = [
    {
      title: 'Patrons',
      icon: Award,
      color: 'from-purple-600 to-purple-700',
      members: [
        { name: 'Dr. Vidya Yeravdekar', role: 'Principal Director, SIU' },
        { name: 'Dr. S.B. Mujumdar', role: 'Pro-Chancellor, SIU' },
      ],
    },
    {
      title: 'General Chairs',
      icon: Users,
      color: 'from-blue-600 to-blue-700',
      members: [
        { name: 'Dr. Rajesh Kumar', role: 'Director, SIT Pune' },
        { name: 'Prof. Michael Chen', role: 'Swinburne University, Australia' },
        { name: 'Prof. Sarah Williams', role: 'IIT Dharwad' },
      ],
    },
    {
      title: 'Conference Chairs',
      icon: UserCircle,
      color: 'from-blue-700 to-blue-800',
      members: [
        { name: 'Dr. Anil Sharma', role: 'Professor, Computer Science, SIT' },
        { name: 'Dr. Priya Deshmukh', role: 'Professor, AI & ML, SIT' },
        { name: 'Dr. James Anderson', role: 'IEEE Maharashtra Section' },
      ],
    },
    {
      title: 'Secretarial Committee',
      icon: Briefcase,
      color: 'from-blue-800 to-blue-900',
      members: [
        { name: 'Dr. Meera Joshi', role: 'Conference Secretary, SIT' },
        { name: 'Dr. Amit Patel', role: 'Technical Program Chair, SIT' },
        { name: 'Prof. Sneha Reddy', role: 'Publications Chair, SIT' },
        { name: 'Dr. Vikram Singh', role: 'Finance Chair, SIT' },
      ],
    },
  ];

  return (
    <section id="committees" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h3 className="text-2xl font-bold">
                  {committee.title}
                </h3>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {committee.members.map((member, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-bold text-lg text-gray-900">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Technical Program Committee</h3>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8 text-lg">
            Our Technical Program Committee comprises 50+ renowned researchers and academics from leading universities
            and research institutions worldwide, ensuring rigorous peer review and high-quality conference proceedings.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">TPC Members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Countries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Expert Review</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Committees;
