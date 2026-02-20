import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Call for Papers', href: '#call-for-papers' },
    { label: 'Important Dates', href: '#dates' },
    { label: 'Registration', href: '#registration' },
    { label: 'Committees', href: '#committees' },
    { label: 'Contact', href: '#contact' },
  ];

  const resources = [
    { label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org' },
    { label: 'IEEE Maharashtra Section', url: 'https://ieeemanipal.org' },
    { label: 'SIT Pune Website', url: 'https://www.sitpune.edu.in' },
    { label: 'Paper Submission Portal', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                SIT
              </div>
              <div>
                <h3 className="font-bold text-xl">ICEI 2026</h3>
                <p className="text-sm text-blue-200">IEEE Conference</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              International conference on Engineering Informatics focusing on Agentic and Generative AI.
            </p>
            <div className="flex items-center space-x-2 text-blue-200">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Pune, Maharashtra, India</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                  >
                    <span>{resource.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">icei2026@sitpune.edu.in</p>
                  <p className="text-sm text-gray-300">conference@sitpune.edu.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">+91-20-3911-6000</p>
                  <p className="text-sm text-gray-300">+91-20-3911-6001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                <strong className="text-white">Organized by:</strong> Symbiosis Institute of Technology, Pune
              </p>
              <p>
                <strong className="text-white">Technically Co-Sponsored by:</strong> IEEE Maharashtra Section
              </p>
            </div>
            <div className="text-sm text-gray-400 md:text-right">
              <p className="mb-2">
                All accepted papers will be published in IEEE Xplore Digital Library
              </p>
              <p>
                © {new Date().getFullYear()} ICEI 2026. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>Powered by</span>
            <span className="font-semibold text-white">Symbiosis Institute of Technology</span>
            <span>×</span>
            <span className="font-semibold text-white">IEEE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
