import { motion } from 'framer-motion';
import { Droplet, Sparkles, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: <Droplet className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    title: 'Extreme Hydrophobics',
    description: 'Advanced polymers create a self-cleaning surface that effortlessly repels water and dirt.'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    title: 'Immaculate Gloss',
    description: 'Enhances depth and clarity, leaving a flawless wet-look shine on any paint surface.'
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    title: 'Ceramic Shield',
    description: 'Bonds with your clear coat to protect against UV rays, oxidation, and harsh elements.'
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    title: 'Enduring Protection',
    description: 'Engineered for maximum endurance, keeping your vehicle protected for months at a time.'
  }
];

export function Features() {
  return (
    <section id="details" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col items-start mb-24 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary tracking-[0.25em] text-xs font-semibold mb-6 uppercase"
          >
            Formulation & Tech
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            The Science<br />of Shine.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed font-light"
          >
            Every drop is engineered with advanced nanotechnology, delivering a molecular bond that redefines automotive protection and gloss.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 shadow-inner shadow-white/5 group-hover:border-primary/30 transition-colors duration-500">
                {feature.icon}
              </div>
              <h4 className="text-white text-lg font-semibold mb-3 tracking-wide">{feature.title}</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
