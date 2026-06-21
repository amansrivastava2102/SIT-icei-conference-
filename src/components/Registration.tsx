import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const fees = [
    {
      no: "1",
      description: "Author/Presenter (Full Registration)",
      earlyIEEE: "14,160 / AUD 250",
      earlyNonIEEE: "15,500 / AUD 274",
      ieee: "15,500 / AUD 274",
      nonIEEE: "16,600 / AUD 293",
    },
    {
      no: "2",
      description: "Industry Registration (non-author)",
      earlyIEEE: "7,100 / AUD 125",
      earlyNonIEEE: "8,300 / AUD 146",
      ieee: "8,300 / AUD 146",
      nonIEEE: "9,500 / AUD 168",
    },
    {
      no: "3",
      description: "Academia Registration (co-author/non-author)",
      earlyIEEE: "6,000 / AUD 106",
      earlyNonIEEE: "7,100 / AUD 125",
      ieee: "7,100 / AUD 125",
      nonIEEE: "8,300 / AUD 146",
    },
    {
      no: "4",
      description: "Students Attendee",
      earlyIEEE: "-",
      earlyNonIEEE: "-",
      ieee: "2,500 / AUD 44",
      nonIEEE: "3,600 / AUD 64",
    },
    {
      no: "5",
      description:
        "Group of 5 or more Student Attendees from the same institute (Discounted registration fee)",
      earlyIEEE: "-",
      earlyNonIEEE: "-",
      ieee: "2,125 / AUD 38",
      nonIEEE: "3,060 / AUD 54",
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
            <table className="min-w-full text-sm md:text-base border-collapse">

              <thead className="bg-[#1E3A8A] text-white">
                <tr>
                  <th className="px-4 py-4 border border-white/20 font-semibold">
                    No
                  </th>

                  <th className="px-6 py-4 border border-white/20 font-semibold min-w-[280px]">
                    Description
                  </th>

                  <th className="px-4 py-4 border border-white/20 font-semibold min-w-[180px]">
                    Early Bird
                    <br />
                    (IEEE Member)
                  </th>

                  <th className="px-4 py-4 border border-white/20 font-semibold min-w-[190px]">
                    Early Bird
                    <br />
                    (Non-IEEE Member)
                  </th>

                  <th className="px-4 py-4 border border-white/20 font-semibold min-w-[160px]">
                    IEEE Member
                  </th>

                  <th className="px-4 py-4 border border-white/20 font-semibold min-w-[170px]">
                    Non-IEEE Member
                  </th>
                </tr>
              </thead>

              <tbody>
                {fees.map((fee, index) => (
                  <tr
                    key={fee.no}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-4 border border-gray-200 text-center font-semibold text-gray-900">
                      {fee.no}
                    </td>

                    <td className="px-6 py-4 border border-gray-200 text-gray-800 font-medium">
                      {fee.description}
                    </td>

                    <td className="px-4 py-4 border border-gray-200 text-center text-gray-900 font-medium">
                      {fee.earlyIEEE}
                    </td>

                    <td className="px-4 py-4 border border-gray-200 text-center text-gray-900 font-medium">
                      {fee.earlyNonIEEE}
                    </td>

                    <td className="px-4 py-4 border border-gray-200 text-center text-gray-900 font-medium">
                      {fee.ieee}
                    </td>

                    <td className="px-4 py-4 border border-gray-200 text-center text-gray-900 font-medium">
                      {fee.nonIEEE}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </motion.div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => navigate("/register")}
            className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-md transition-all duration-300"
          >
            Register Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Registration;

