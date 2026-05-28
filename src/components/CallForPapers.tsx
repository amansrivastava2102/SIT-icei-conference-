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
                href=" https://easychair.org/cfp/ICEI2026"
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
  <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
    Submission Guidelines
  </h3>

  <div className="space-y-8 text-gray-700">

    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        Author Instructions
      </h4>

      <p className="mb-3">
        Please comply with the following guidelines:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Submitted papers should be written in English, including all figures,
          tables, references, and appendices.
        </li>

        <li>
          The paper must discuss only new and previously unpublished results.
        </li>

        <li>
          The paper must be formatted according to the IEEE Manuscript Templates
          for Conference Proceedings.
        </li>

        <li>
          The paper must have a minimum of four pages and must not exceed six
          pages, including figures and references.
        </li>

        <li>
          The paper must address at least one category specified in the Call for
          Papers.
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        Submit
      </h4>

      <p className="mb-3">
        All submissions must be made through the Online Submission System (CMT)
        using the following link:
      </p>

      <a
        href="https://easychair.org/my/conference?conf=icei2026"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline break-all"
      >
        https://easychair.org/my/conference?conf=icei2026
      </a>

      <p className="mt-3">
        Submissions cannot be accepted via email.
      </p>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        Submit Two Copies of Your Paper
      </h4>

      <div className="space-y-4">

        <div>
          <p className="font-semibold">
            a) Complete Paper in PDF Format
          </p>

          <p>
            Please submit the full paper in PDF format, including author names,
            affiliations, and acknowledgments.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            b) Anonymized Paper in PDF Format
          </p>

          <p className="mb-2">
            Submit a second version of your paper without any author names,
            affiliations, or identifying information.
          </p>

          <p className="mb-2">
            Prefix the file name with
            <span className="font-medium"> Blind_ </span>
            (e.g., Blind_PaperTitle.pdf).
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remove names from the title page, headers, and document body.
            </li>

            <li>
              Replace self-references with neutral descriptions like:
              "Previous work has shown..."
            </li>

            <li>
              Remove acknowledgments that may reveal author identity.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        Additional Guidelines
      </h4>

      <div className="space-y-5">

        <div>
          <h5 className="font-semibold text-gray-900 mb-1">
            Originality Detection
          </h5>

          <p>
            Authors must ensure that submissions are original and not previously
            published or under consideration elsewhere. All papers will undergo
            plagiarism and self-plagiarism checks.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-gray-900 mb-1">
            Language Check
          </h5>

          <p>
            Authors are encouraged to thoroughly check spelling and grammar
            before submission.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-gray-900 mb-1">
            Topic of Interest
          </h5>

          <p>
            The paper content must align with the conference theme and scope.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-gray-900 mb-1">
            Presentation
          </h5>

          <p>
            Presentation at the conference is mandatory for all accepted papers.
          </p>

          <p className="mt-2">
            Accepted, registered, and presented papers will be submitted to IEEE
            for possible inclusion in IEEE Xplore®.
          </p>

          <p className="mt-2">
            Each speaker will receive a 20-minute presentation slot including
            Q&A.
          </p>
        </div>
      </div>
    </div>

    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
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
