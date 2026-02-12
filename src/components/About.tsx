import { motion } from 'framer-motion';
import { History, Factory, Award, ShieldCheck } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

export default function About() {
  const isMobile = useIsMobile();
  const certifications = [
    "WHO-GMP Certified Facility",
    "ISO 9001:2015 Standards",
    "Schedule M Compliant",
    "Pollution Board Licensed"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative section-divider">
      {/* Top gradient fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-amber-700 font-bold tracking-widest text-xs uppercase mb-4">
                <History size={16} />
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight animate-reveal">
                Established Excellence <br />
                <span className="text-amber-700">Since 2011</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p className="animate-reveal [animation-delay:200ms]">
                  Reltsen Health Care was established in the year 2011 as a Medium Scale Industry in the centrally located industrial area of <span className="text-slate-900 dark:text-slate-200 font-semibold">Puducherry, India</span>. 
                </p>
                <p>
                  We have grown into a reputed manufacturer of finished pharmaceutical formulations, specializing in contract manufacturing for leading corporations across India.
                </p>
                <p>
                  Our facility is fully restructured as per <span className="text-slate-900 font-semibold">Revised Schedule ‘M’</span> and equipped with centralized Air Handling Units (AHU). The site maintains expansive open spaces and waste disposal infrastructure that strictly adheres to National Pollution Control Department norms.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: isMobile ? (i * 0.1) : (0.2 + (i * 0.15)), 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="flex items-center gap-3 p-4 bg-slate-50 border-l-4 border-amber-700 rounded-r-md"
                  >
                    <ShieldCheck className="text-amber-700" size={20} />
                    <span className="text-slate-800 font-bold text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop" 
                alt="Modern Laboratory" 
                width="800"
                height="600"
                className="rounded-sm shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Stat Block */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-10 -left-10 bg-slate-900 p-8 text-white hidden md:block border-b-8 border-amber-600 shadow-2xl"
              >
                <div className="text-5xl font-bold mb-1">14+</div>
                <div className="text-amber-500 font-bold uppercase tracking-widest text-xs">Years of Stability</div>
              </motion.div>
            </motion.div>
            
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-50 opacity-[0.03] -z-10 pointer-events-none">
              <Factory size={500} />
            </div>
          </div>

        </div>

        {/* Technical Competencies Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="mt-24 grid md:grid-cols-3 gap-12 border-t border-gray-100 dark:border-slate-800 pt-16"
        >
          {[
            { 
              icon: Award, 
              title: "Reputed Manufacturer", 
              text: "Recognized as a reliable partner for finished formulations, serving India's top pharmaceutical brands." 
            },
            { 
              icon: ShieldCheck, 
              title: "Licensed Quality", 
              text: "Holds active licenses from the Puducherry Pollution Control Board and maintaining strict effluent tank procedures." 
            },
            { 
              icon: Factory, 
              title: "cGMP Infrastructure", 
              text: "Modern facility equipped with integrated Air Handling Units ensuring a sterile, strictly controlled environment." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2.5 bg-amber-100 dark:bg-slate-800 text-amber-700 dark:text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-amber-500/20">
                  <item.icon size={20} />
                </div>
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
