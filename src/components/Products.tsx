import { motion } from 'framer-motion';
import { Package, Search, PlusCircle, Database } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Products() {
  const isMobile = useIsMobile();
  const categories = [
    { 
      title: "Gastroenterology", 
      desc: "Advanced formulations for digestive health and metabolic disorders.",
      count: "24+ Products",
      icon: Package
    },
    { 
      title: "Analgesics & Antipyretics", 
      desc: "Effective pain management and fever relief solutions.",
      count: "18+ Products",
      icon: Search
    },
    { 
      title: "Antibiotics", 
      desc: "Broad-spectrum anti-infectives for various clinical applications.",
      count: "32+ Products",
      icon: PlusCircle
    },
    { 
      title: "Nutritional Supplements", 
      desc: "Therapeutic vitamins and minerals for balanced health.",
      count: "15+ Products",
      icon: Package
    },
    { 
      title: "Respiratory Care", 
      desc: "Specialized treatments for cold, cough, and asthmatic conditions.",
      count: "12+ Products",
      icon: Search
    },
    { 
      title: "Cardiovascular", 
      desc: "Critical formulations for heart health and hypertension management.",
      count: "Ready 2024",
      icon: PlusCircle
    }
  ];

  return (
    <section id="products" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
              <Database size={16} />
              Portfolio Expansion
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Our Product <br />Catalogue
            </h2>
            <p className="text-zinc-500 text-lg">
              We are currently finalizing our digital product catalogue to ensure the most accurate data on our range of Tablets, Capsules, and Oral Formulations.
            </p>
          </div>
        </div>

        {/* Product Categories Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: isMobile ? (i * 0.03) : (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
              className="group bg-zinc-50 border border-zinc-100 p-10 rounded-sm relative overflow-hidden transition-all duration-300 hover:border-amber-700/30 hover:shadow-xl hover:shadow-amber-500/5 transform-gpu will-change-transform"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/5 blur-3xl rounded-full group-hover:bg-amber-500/10 transition-colors duration-700" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 text-amber-700 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                  <cat.icon />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-amber-700 transition-colors">
                  {cat.count}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 relative z-10 transition-colors duration-300 group-hover:text-amber-700">{cat.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8 relative z-10">
                {cat.desc}
              </p>
              
              <div className="h-[2px] w-12 bg-zinc-100 relative z-10 overflow-hidden">
                <motion.div 
                   className="absolute inset-0 bg-amber-700"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 0.8, delay: 0.3 + (i * 0.05) }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Database Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-8 border-2 border-dashed border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-50/30"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-900 text-white">
              <PlusCircle size={20} />
            </div>
            <div>
              <p className="text-zinc-900 font-bold text-sm uppercase tracking-wider">Full Database Integration</p>
              <p className="text-zinc-500 text-xs mt-1">Our technical team is currently syncing the 2024 SKU list with this portal.</p>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 hover:text-amber-700 underline underline-offset-8"
          >
            Request Full List
          </button>
        </motion.div>

      </div>
    </section>
  );
}
