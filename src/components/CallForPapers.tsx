import { motion } from 'framer-motion';
import {
  FileText,
  Award,
  BookOpen,
  ExternalLink,
} from 'lucide-react';

const CallForPapers = () => {
  const features = [
    {
      icon: FileText,
      title: 'Peer-Reviewed Papers',
      description:
        'Submit original, peer-reviewed research papers (6–10 pages) in IEEE format.',
    },
    {
      icon: BookOpen,
      title: 'Poster Presentations',
      description:
        'Present posters highlighting work-in-progress and emerging ideas.',
    },
    {
      icon: Award,
      title: 'Workshops & Panels',
      description:
        'Propose focused workshops and panel sessions on specialised themes.',
    },
  ];

  return (
    <section
      id="call-for-papers"
      className="py-24 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
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
            Peer-reviewed papers, posters, workshops, and panels aligned with
            the themes of Engineering Informatics.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
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

        {/* PUBLICATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Publication & Awards
              </h3>

              <div className="space-y-4">

                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">
                    ✓
                  </span>

                  <span>
                    All accepted papers will be submitted for publication in
                    IEEE Xplore Digital Library.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">
                    ✓
                  </span>

                  <span>
                    Best Paper, Best Workshop, and Best Poster awards.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">
                    ✓
                  </span>

                  <span>
                    Selected papers may be recommended for extended journal
                    publication.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-blue-300 font-bold text-xl mt-1">
                    ✓
                  </span>

                  <span>
                    IEEE digital certificates for all authors.
                  </span>
                </div>

              </div>
            </div>

            <div className="text-center md:text-right">

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">

                <h4 className="text-2xl font-bold text-white mb-4">
                  Submit via EasyChair
                </h4>

                <p className="text-blue-100 mb-6">
                  Use our official submission portal for a streamlined review
                  process.
                </p>

                <a
                  href="https://easychair.org/cfp/ICEI2026"
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

        {/* SUBMISSION GUIDELINES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white rounded-xl p-8 shadow-lg"
        >

          {/* TITLE WITH LOGO */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-8">

            <img
              src="images/logos/logo7.jpeg"
              alt="Submission Guidelines"
              className="w-34 h-32 object-contain"
            />

            <h3 className="text-4xl font-bold text-gray-900 text-center">
              Submission Guidelines
            </h3>

          </div>

          <div className="space-y-6 text-gray-700 leading-8 text-[15px] md:text-[16px]">

            <p>
              The contributions should be between
              <span className="font-semibold"> 6–10 pages </span>
              including references and will receive full peer-review for
              consideration for presentation in a paper session and publication
              in the
              <span className="font-semibold">
                {' '}ICEI2026 Conference Proceedings
              </span>
              published through IEEE Xplore.
            </p>

            <p>
              ICEI2026 proceedings will be published in
              <span className="font-semibold"> IEEE Xplore </span>
              and indexed in
              <span className="font-semibold"> SCOPUS</span>.
            </p>

            <p>
              Papers are expected to present original, cutting-edge research.
              They should contain detailed and explicit methodology and/or
              theoretical underpinnings along with a comprehensive literature
              review, and clearly explain the novelty and contribution of the
              work to its respective field.
            </p>

            <p>
              Papers must be formatted in accordance with the
              <span className="font-semibold">
                {' '}IEEE Conference Template
              </span>.
            </p>

            <p>
              If a paper is accepted, at least one author must register for the
              conference. If more than one author presents the paper, all
              presenters must be registered.
            </p>

            <p>
              Authors of selected regular papers may be invited to revise and
              expand their work for publication in a special journal issue.
            </p>

            {/* AUTHOR REQUIREMENTS */}
            <div>

              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Author Requirements
              </h4>

              <ul className="list-disc pl-6 space-y-3">

                <li>All papers must be written in English.</li>

                <li>
                  All papers must be original unpublished work.
                </li>

                <li>
                  Each author listed on the paper must also be listed in the
                  paper management system.
                </li>

                <li>
                  One author must be designated as the corresponding author for
                  the paper.
                </li>

                <li>
                  We highly recommend using the provided IEEE templates to
                  generate your paper.
                </li>

                <li>
                  Each submission will be reviewed for compliance of margins,
                  headers, footers, page numbers, and other formatting
                  specifications.
                </li>

                <li>
                  Papers that are non-compliant may not be included in the
                  proceedings.
                </li>

              </ul>
            </div>

            {/* SUBMISSION PORTAL */}
            <div>

              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Submission Portal
              </h4>

              <p className="mb-4">
                All submissions must be made through the official EasyChair
                submission system:
              </p>

              <a
                href="https://easychair.org/my/conference?conf=icei2026"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                https://easychair.org/my/conference?conf=icei2026
              </a>

            </div>

            {/* CONTACT */}
            <div>

              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact for Queries
              </h4>

              <p>iceiagnei@sitpune.edu.in</p>
              <p>aditi.sharma@sitpune.edu.in</p>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CallForPapers;