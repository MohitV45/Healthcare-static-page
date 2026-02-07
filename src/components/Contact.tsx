import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91 1800-XXX-XXXX',
      subDetail: 'Mon-Sat, 9:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@reltsenhealthcare.com',
      subDetail: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Reltsen Health Care',
      subDetail: 'Mundiyampakkam, Villupuram, Tamil Nadu'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      detail: 'Monday - Saturday',
      subDetail: '9:00 AM - 6:00 PM'
    }
  ];

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Contact Reltsen Health Care
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions about our products or services? Our team is here to help you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-teal-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-teal-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-teal-500"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-teal-500 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                whileHover={{ x: 10, backgroundColor: theme === 'dark' ? '#1e293b' : '#f9fafb' }}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl transition-colors cursor-default border border-transparent hover:border-blue-100 dark:hover:border-blue-900 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 dark:text-gray-200 font-medium">
                      {info.detail}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {info.subDetail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 h-[400px] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=Reltsen%20Health%20Care%20Mundiyampakkam&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Reltsen Health Care Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
