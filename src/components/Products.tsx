import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Injections', 'Antibiotics'];

const products = [
  // ... existing products (skipping for brevity but keeping in output)
  {
    name: 'Reltsen-CV 625',
    category: 'Tablets',
    composition: 'Amoxicillin 500mg + Clavulanic Acid 125mg',
    therapeutic: 'Antibiotics',
    image: '💊'
  },
  {
    name: 'Reltsen-Para',
    category: 'Tablets',
    composition: 'Paracetamol 650mg',
    therapeutic: 'Analgesics',
    image: '💊'
  },
  {
    name: 'Reltsen-Azith 500',
    category: 'Tablets',
    composition: 'Azithromycin 500mg',
    therapeutic: 'Antibiotics',
    image: '💊'
  },
  {
    name: 'Reltsen-Cold',
    category: 'Syrups',
    composition: 'Cetirizine + Phenylephrine',
    therapeutic: 'Cold & Cough',
    image: '🧪'
  },
  {
    name: 'Reltsen-B Complex',
    category: 'Capsules',
    composition: 'Multivitamin + Minerals',
    therapeutic: 'Nutritional',
    image: '💊'
  },
  {
    name: 'Reltsen-Cef 1g',
    category: 'Injections',
    composition: 'Ceftriaxone 1g',
    therapeutic: 'Antibiotics',
    image: '💉'
  },
  {
    name: 'Reltsen-Omez',
    category: 'Capsules',
    composition: 'Omeprazole 20mg',
    therapeutic: 'Gastrointestinal',
    image: '💊'
  },
  {
    name: 'Reltsen-Iron Plus',
    category: 'Syrups',
    composition: 'Iron + Folic Acid',
    therapeutic: 'Nutritional',
    image: '🧪'
  },
  {
    name: 'Reltsen-Doxi 100',
    category: 'Capsules',
    composition: 'Doxycycline 100mg',
    therapeutic: 'Antibiotics',
    image: '💊'
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.composition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Premium Pharmaceutical Range
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive catalog of quality medicines across various therapeutic categories.
          </p>
        </motion.div>

        <motion.div 
          className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products or composition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="text-gray-600" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? 'bg-blue-900 dark:bg-teal-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all group border border-transparent dark:hover:border-teal-900"
              >
                <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-950 rounded-lg flex items-center justify-center mb-4 text-5xl border border-blue-50/50 dark:border-slate-700">
                  {product.image}
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {product.composition}
                </p>
                <div className="flex items-center justify-between pt-3 border-t dark:border-slate-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {product.therapeutic}
                  </span>
                  <button className="text-blue-900 dark:text-teal-400 font-semibold text-sm hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
