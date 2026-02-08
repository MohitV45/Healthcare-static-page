import { motion } from 'framer-motion';
import { Package, Search, PlusCircle, Database } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden relative section-divider">
      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
              <Database size={16} />
              Portfolio Expansion
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Product <br />Catalogue
            </h2>
            <p className="text-gray-500 text-lg">
              We are currently finalizing our digital product catalogue to ensure the most accurate data on our range of Tablets, Capsules, and Oral Formulations.
            </p>
          </div>
        </div>

        {/* Coming Soon Interactive Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-8 py-20 md:px-20 bg-slate-50 border border-gray-100 flex flex-col items-center justify-center text-center overflow-hidden rounded-xl"
        >
          {/* Background decoration */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 15, 12]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none"
          >
            <Package size={300} />
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-20 bg-amber-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-amber-900/10"
          >
            <PlusCircle size={32} />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl font-bold text-slate-900 mb-4 tracking-tight uppercase"
          >
            Product Database <span className="text-amber-600">Coming Soon</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 max-w-xl text-lg leading-relaxed mb-10"
          >
            Our comprehensive list of generic and contract manufacturing products is being updated to reflect our 2024 production capabilities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch w-full max-w-lg bg-white border border-gray-200 shadow-sm transition-all focus-within:border-amber-500 group overflow-hidden"
          >
            <div className="flex flex-1 items-center gap-3 pl-6 text-gray-400">
              <Search size={18} className="shrink-0" />
              <input 
                type="text" 
                placeholder="Notify me of specific therapeutic areas..." 
                className="bg-transparent border-none outline-none py-5 text-slate-900 placeholder:text-gray-300 w-full text-sm font-medium"
                disabled
              />
            </div>
            <button className="whitespace-nowrap bg-slate-900 text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-amber-600 w-full sm:w-auto shrink-0">
              Request Info
            </button>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
            {['Analgesics', 'Antibiotics', 'Gastrointestinal', 'Nutritional', 'Cold & Cough'].map((tag, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-8"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
