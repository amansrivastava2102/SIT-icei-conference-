import { motion } from 'framer-motion';

const Registration = () => {
  const fees = [
    {
      category: 'Author Registration',
      description: 'For presenting authors (per paper)',
      early: '₹12,000 / AUD 218',
      regular: '₹15,000 / AUD 273',
    },
    {
      category: 'Industry Participant',
      description: 'For industry professionals',
      early: '₹15,000 / AUD 273',
      regular: '₹18,000 / AUD 327',
    },
    {
      category: 'Academia Participant',
      description: 'For faculty and researchers',
      early: '₹10,000 / AUD 182',
      regular: '₹12,000 / AUD 218',
    },
    {
      category: 'Student (Individual)',
      description: 'For individual students with valid ID',
      early: '₹5,000 / AUD 91',
      regular: '₹6,000 / AUD 109',
    },
    {
      category: 'Student Group (5+)',
      description: 'Group discount for 5 or more students',
      early: '₹4,000 / AUD 73',
      regular: '₹5,000 / AUD 91',
    },
  ];

  return (
    <section id="registration" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
            Registration Fees
          </h2>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Registration categories and fee structure for ICEI 2026.
            <br />
            <span className="text-sm text-gray-500">
              (AUD values are approximate conversions)
            </span>
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm md:text-base">
              <thead className="bg-[#1E3A8A] text-white">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left font-semibold">Category</th>
                  <th className="px-4 md:px-6 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 md:px-6 py-3 text-left font-semibold">Early Bird</th>
                  <th className="px-4 md:px-6 py-3 text-left font-semibold">Regular</th>
                </tr>
              </thead>

              <tbody>
                {fees.map((fee, index) => (
                  <tr
                    key={fee.category}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 md:px-6 py-3 font-semibold text-gray-900">
                      {fee.category}
                    </td>

                    <td className="px-4 md:px-6 py-3 text-gray-700">
                      {fee.description}
                    </td>

                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">
                      {fee.early}
                    </td>

                    <td className="px-4 md:px-6 py-3 font-medium text-gray-900">
                      {fee.regular}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Registration;