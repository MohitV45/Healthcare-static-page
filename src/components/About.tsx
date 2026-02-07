import { motion } from 'framer-motion';
import { History, Factory, Award, ShieldCheck } from 'lucide-react';

export default function About() {
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
              <div className="flex items-center gap-2 text-amber-600 font-bold tracking-widest text-xs uppercase mb-4">
                <History size={16} />
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Established Excellence <br />
                <span className="text-amber-600">Since 2011</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Reltsen Health Care was established in the year 2011 as a Medium Scale Industry in the centrally located industrial area of <span className="text-slate-900 font-semibold">Puducherry, India</span>. 
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
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-md">
                    <ShieldCheck className="text-amber-600" size={20} />
                    <span className="text-slate-800 font-bold text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1780&auto=format&fit=crop" 
                alt="Modern Laboratory" 
                className="rounded-sm shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Stat Block */}
              <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 text-white hidden md:block border-b-8 border-amber-600">
                <div className="text-5xl font-bold mb-1">14+</div>
                <div className="text-amber-500 font-bold uppercase tracking-widest text-xs">Years of Stability</div>
              </div>
            </motion.div>
            
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-50 opacity-[0.03] -z-10 pointer-events-none">
              <Factory size={500} />
            </div>
          </div>

        </div>

        {/* Technical Competencies Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          <div className="group">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Award size={20} />
              </div>
              Reputed Manufacturer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Recognized as a reliable partner for finished formulations, serving India's top pharmaceutical brands.
            </p>
          </div>
          <div className="group">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <ShieldCheck size={20} />
              </div>
              Licensed Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Holds active licenses from the Puducherry Pollution Control Board and maintaining strict effluent tank procedures.
            </p>
          </div>
          <div className="group">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="p-2 bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Factory size={20} />
              </div>
              cGMP Infrastructure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Modern facility equipped with integrated Air Handling Units ensuring a sterile, strictly controlled environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
