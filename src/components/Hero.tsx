import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Uncompromising\nShine.",
    subtitle: "Hexa Ceramic Foam Shampoo",
    desc: "Engineered with advanced ceramic-infused foam technology, this high-performance shampoo gently removes dirt, dust, mud, and road grime while enhancing your vehicle's surface protection.",
    image: "/bottle.png",
    glowColor: "bg-primary/20",
    filter: ""
  },
  {
    id: 2,
    title: "Ultimate\nProtection.",
    subtitle: "Hexa Exterior Silicone Polish",
    desc: "Designed to deliver a ceramic-like finish, this advanced silicone polish enhances paint brightness, restores smoothness, and creates a water-repellent protective layer for long-lasting shine.",
    image: "",
    glowColor: "bg-blue-500/20",
    filter: "hue-rotate-180"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    triggerFlash();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    triggerFlash();
  };

  const triggerFlash = () => {
    if (isFlashing) return;
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 800);
  };

  const activeProduct = products[currentIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-[#050505] pt-24 pb-12"
    >

      {/* Extremely subtle Car Reference with Blink Animation */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
        initial={{ opacity: 0.15, filter: "grayscale(100%)" }}
        animate={{
          opacity: isFlashing ? [0.15, 0.25, 0.15] : 0.15,
          filter: isFlashing ? ["grayscale(100%)", "grayscale(50%)", "grayscale(100%)"] : "grayscale(100%)"
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <video
          src="/carwash.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 h-full">

        {/* Left Typography & CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center z-30 min-h-fit md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary tracking-[0.25em] text-xs font-semibold mb-4 md:mb-6 uppercase">
                {activeProduct.subtitle}
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 md:mb-8 whitespace-pre-line">
                {activeProduct.title}
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md font-light mb-8 md:mb-12 min-h-[60px] md:min-h-[80px]">
                {activeProduct.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <a
              href="#products"
              className="glass-button text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-3 group"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white group"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white group"
                aria-label="Next product"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Product Image - Desktop only */}
        <div className="hidden md:flex w-full md:w-1/2 relative justify-center items-center md:h-[60vh]">

          <AnimatePresence mode="wait">
            {activeProduct.image ? (
              <motion.img
                key={`img-${activeProduct.id}`}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src={activeProduct.image}
                alt={activeProduct.title}
                onClick={handleNext}
                className={`relative z-30 w-full max-w-[220px] md:max-w-[550px] h-auto object-contain drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ${activeProduct.filter}`}
              />
            ) : (
              <motion.div
                key={`img-${activeProduct.id}`}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleNext}
                className={`relative z-30 w-full max-w-[260px] md:max-w-[350px] aspect-[3/4] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-6 cursor-pointer hover:scale-105 hover:border-primary/30 hover:bg-white/10 transition-all duration-500 drop-shadow-2xl ${activeProduct.filter}`}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-lg">Coming Soon</span>
                  <span className="text-gray-400 text-sm font-light text-center px-8">Product packaging is currently being updated</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}