import { Target, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: '14+', label: 'Years of Excellence' },
    { number: '500+', label: 'Products' },
    { number: '50K+', label: 'Satisfied Patients' },
    { number: '200+', label: 'Healthcare Partners' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide accessible, affordable, and high-quality pharmaceutical solutions that improve lives and contribute to a healthier society.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, and patient-centricity guide every decision we make. We believe in ethical practices and transparent operations.'
    },
    {
      icon: TrendingUp,
      title: 'Our Vision',
      description: 'To be a leading pharmaceutical company recognized for excellence in quality, innovation, and commitment to global healthcare advancement.'
    }
  ];

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Reltsen Health Care
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6">
              14 Years of Healthcare Heritage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Reltsen Health Care was established in the year 2011 and started its operations as a Medium Scale Industry in the centrally located and industrial area at Union Territory of Puducherry, India.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Reltsen Health Care is one of the reputed manufacturers of finished pharmaceutical formulations doing contract manufacturing for most of the leading companies in India.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              The facility complies with cGMP Standards & Revised Schedule ‘M’. From inception in 2024 the company has reached its present status as one of the reputed pharmaceutical manufacturing companies in India.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Reltsen Health Care is restructured as per the “Schedule M” and installed “Air Handling Units” and centralized air condition in the remaining areas (section wise). The site has adequate open space around it and the disposal of wastes comply as per norms of pollution department.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Reltsen Health Care holds the appropriate license from the “Puducherry Pollution Control Board” for maintaining the effluent tank and disposals of other wastes are done as per procedures laid out.
            </p>
            <div className="space-y-3">
              {[
                "WHO-GMP and ISO certified manufacturing facilities",
                "Comprehensive product portfolio across therapeutic segments",
                "Nationwide distribution network with cold chain logistics"
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-blue-900 to-teal-700 p-8 rounded-2xl text-center shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
