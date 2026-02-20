import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Navigation } from 'lucide-react';

const Venue = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-900" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Venue & Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at the state-of-the-art campus of Symbiosis Institute of Technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Conference Venue</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Address</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Symbiosis Institute of Technology, Pune<br />
                      Lavale, Mulshi<br />
                      Pune, Maharashtra 412115<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone</h4>
                    <p className="text-blue-100">+91-20-3911-6000</p>
                    <p className="text-blue-100">+91-20-3911-6001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <p className="text-blue-100">icei2026@sitpune.edu.in</p>
                    <p className="text-blue-100">conference@sitpune.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Website</h4>
                    <p className="text-blue-100">www.sitpune.edu.in</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 px-6 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100"
            >
              <h4 className="font-bold text-gray-900 mb-4">Getting to Pune</h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">✈</span>
                  <span><strong>By Air:</strong> Pune International Airport (20 km from venue)</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">🚂</span>
                  <span><strong>By Train:</strong> Pune Railway Station (25 km from venue)</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">🚗</span>
                  <span><strong>By Road:</strong> Well connected via Mumbai-Pune Expressway</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl h-full min-h-[600px]">
              <iframe
                src="https://maps.google.com/maps?q=Symbiosis%20Institute%20of%20Technology%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SIT Pune Location"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8"
        >
          <h4 className="font-bold text-2xl text-gray-900 mb-4">About SIT Pune</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Symbiosis Institute of Technology is a premier engineering college under Symbiosis International
            University. The institute is known for its world-class infrastructure, experienced faculty,
            and strong industry connections.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">15+</div>
              <p className="text-sm text-gray-600">Years Legacy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">100+</div>
              <p className="text-sm text-gray-600">Faculty</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">2000+</div>
              <p className="text-sm text-gray-600">Students</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
