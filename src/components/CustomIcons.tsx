import { motion } from 'framer-motion';

export const MoleculeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <motion.circle 
      cx="12" cy="12" r="3" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
    />
    <motion.path 
      d="M12 9V5m0 14v-4m-3-3H5m14 0h-4" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }}
    />
    <circle cx="12" cy="3" r="2" />
    <circle cx="12" cy="21" r="2" />
    <circle cx="3" cy="12" r="2" />
    <circle cx="21" cy="12" r="2" />
  </svg>
);

export const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <motion.path 
      d="M9 3h6m-5 0v7.89a2 2 0 0 1-.528 1.364l-4.43 5.103A2 2 0 0 0 6.566 21h10.868a2 2 0 0 0 1.524-3.643l-4.43-5.103A2 2 0 0 1 14 10.89V3" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2 }}
    />
    <motion.path 
      d="M8.5 13h7" 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }}
    />
  </svg>
);

export const DNAIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
    <motion.path 
      d="M8 3c4 4 4 14 0 18M16 3c-4 4-4 14 0 18" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
    />
    <motion.path 
      d="M8 7h8m-8 5h8m-8 5h8" 
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
    />
  </svg>
);
