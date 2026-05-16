import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 z-50 py-8 px-8 md:px-16 flex justify-between items-center bg-transparent"
      >
        {/* Logo */}
        <div className="flex flex-col items-start cursor-pointer group">
          <span className="text-2xl font-bold tracking-[0.2em] uppercase text-white group-hover:text-primary transition-colors">
            Hexa
          </span>
          <span className="text-gray-500 text-[10px] font-semibold tracking-[0.3em] uppercase mt-1">
            AutoCare
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12 text-xs font-semibold tracking-widest uppercase">
          <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#products" className="text-white hover:text-primary transition-colors">Collection</a>
          <a href="#details" className="text-gray-400 hover:text-white transition-colors">Technology</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center lg:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-8 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <div className="flex flex-col items-center gap-10 text-lg font-semibold tracking-widest uppercase">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-primary transition-colors">Collection</a>
              <a href="#details" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Technology</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
