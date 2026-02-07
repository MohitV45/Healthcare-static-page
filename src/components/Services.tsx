import { Pill, Microscope, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const fadeInUp: any = {
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
            Facilities & Quality
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Our Manufacturing Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            World-class infrastructure dedicated to excellence in pharmaceutical manufacturing and quality standards.
          </p>
        </motion.div>

        {/* Facilities Table */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-16 overflow-x-auto border border-gray-100 dark:border-slate-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Pill className="text-teal-600" size={28} />
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white">Production Capacity</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 italic">
            In our firm we produce tablet and capsules as per the schedule basis and the number of units per year production are provided below:
          </p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-50 dark:bg-slate-700/50">
                <th className="p-4 border-b dark:border-slate-600 font-bold text-blue-900 dark:text-white rounded-tl-xl">Production Capacity</th>
                <th className="p-4 border-b dark:border-slate-600 font-bold text-blue-900 dark:text-white">In Per Shift</th>
                <th className="p-4 border-b dark:border-slate-600 font-bold text-blue-900 dark:text-white">In Per Month</th>
                <th className="p-4 border-b dark:border-slate-600 font-bold text-blue-900 dark:text-white rounded-tr-xl">In Per Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                <td className="p-4 border-b dark:border-slate-700 font-semibold text-gray-700 dark:text-gray-300">Tablets</td>
                <td className="p-4 border-b dark:border-slate-700 text-gray-600 dark:text-gray-400">4,00,000 Tablets</td>
                <td className="p-4 border-b dark:border-slate-700 text-gray-600 dark:text-gray-400">1 Crores Tablets</td>
                <td className="p-4 border-b dark:border-slate-700 text-gray-600 dark:text-gray-400">12 Crores Tablets</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                <td className="p-4 text-gray-700 dark:text-gray-300 font-semibold">Capsules</td>
                <td className="p-4 text-gray-600 dark:text-gray-400">1,00,000 Capsules</td>
                <td className="p-4 text-gray-600 dark:text-gray-400">25 lakhs Capsules</td>
                <td className="p-4 text-gray-600 dark:text-gray-400">3 Crores Capsules</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our Quality Assurance Team is the totality of the arrangements made with the object of ensuring that our pharmaceutical products are of good quality, as required for their intended use. There are approved standard operating procedures for each and every activity carried out at the facility.
            </p>
          </motion.div>

          {/* Quality Control */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <Microscope className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
              Quality Control (QC)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Stringent quality systems are in place at every gateway right from procurement to final release of finished products. All our products undergo an extensive quality control test as per international norms.
            </p>
          </motion.div>

          {/* Experienced Staff */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
              Experienced Staff
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We recruit experienced staff for each section including the Analysis Department, Chemist Department, Tablets and Capsules section, Packing Division, and Material Store Departments to ensure operational excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

