import { Pill, Microscope, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Pill,
    title: 'Pharmaceutical Manufacturing',
    description: 'State-of-the-art manufacturing facilities producing high-quality medicines across multiple therapeutic segments including antibiotics, analgesics, and cardiovascular drugs.',
    features: ['WHO-GMP Certified', 'ISO 9001:2015', 'Advanced Quality Control']
  },
  {
    icon: Microscope,
    title: 'Research & Development',
    description: 'Dedicated R&D team working on innovative formulations and drug development. We focus on creating cost-effective solutions without compromising on quality.',
    features: ['Innovation Labs', 'Clinical Trials', 'Generic Development']
  },
  {
    icon: Truck,
    title: 'Distribution & Supply',
    description: 'Nationwide distribution network ensuring timely delivery of medicines to hospitals, clinics, and pharmacies. Cold chain logistics for temperature-sensitive products.',
    features: ['Pan-India Network', 'Cold Chain', '24/7 Availability']
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From manufacturing to distribution, we provide end-to-end pharmaceutical services with uncompromising quality standards.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group border border-transparent dark:hover:border-blue-900"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
