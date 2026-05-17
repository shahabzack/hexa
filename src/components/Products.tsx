import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Hexa Ceramic Foam Shampoo',
    category: 'Ceramic Shampoo',
    price: '',
    description: 'Engineered with advanced ceramic-infused foam technology, this high-performance shampoo gently removes dirt, dust, mud, and road grime while enhancing your vehicle’s surface protection. Its rich, thick foam provides a scratch-free wash experience and leaves behind a smooth, glossy finish with water-beading performance.',
    features: ['Powerful deep-cleaning foam', 'Ceramic-enhanced shine & protection', 'Safe on paint, coating, and wraps', 'Helps repel water and dust', 'Streak-free glossy finish', 'pH-balanced and easy to rinse'],
    image: '/bottle.png',
    glow: 'bg-primary/20',
    filter: '',
    whatsappMessage: "Hey I want to buy Hexa Ceramic Foam Shampoo"
  },
  {
    id: 2,
    name: 'Hexa Exterior Silicone Polish',
    category: 'Exterior Polish',
    price: '',
    description: 'Give your car a deep glossy shine with Hexa Exterior Silicone Polish, the ultimate exterior protection and finishing solution. Designed to deliver a ceramic-like finish, this advanced silicone polish enhances paint brightness, restores smoothness, and creates a water-repellent protective layer for long-lasting shine. When used after washing with Hexa Ceramic Foam Shampoo, the shine and protection can last up to 5 days, keeping your vehicle looking fresh, clean, and showroom-ready.',
    features: ['Ceramic coating–like glossy finish', 'Long-lasting water beading protection', 'Enhances paint depth and smoothness', 'Protects against dust and light dirt', 'Easy spray-and-wipe application', 'Best performance with Hexa Ceramic Foam Shampoo'],
    image: '',
    glow: 'bg-blue-500/20',
    filter: 'hue-rotate-180',
    whatsappMessage: "Hey I want to buy Hexa Exterior Silicone Polish"
  }
];

export function Products() {
  const whatsappNumber = "918281351870";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const activeProduct = products[currentIndex];

  return (
    <section id="products" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-primary tracking-[0.25em] text-xs font-semibold mb-6 uppercase"
          >
            Our Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Engineered Perfection.
          </motion.h2>
        </div>

        <div
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className="bg-white/[0.02] rounded-[2rem] border border-white/[0.05] p-6 sm:p-8 md:p-14 relative overflow-hidden transition-all duration-500 hover:bg-white/[0.03]">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20 relative z-10"
              >
                {/* Product Image Side */}
                <div className="w-full lg:w-2/5 flex justify-center items-center relative min-h-[200px] sm:min-h-[250px] md:min-h-[450px] py-4 md:py-0">
                  {activeProduct.image ? (
                    <motion.img
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className={`relative z-10 w-full max-w-[120px] sm:max-w-[180px] md:max-w-[400px] h-auto max-h-[180px] sm:max-h-[240px] md:max-h-none object-contain drop-shadow-2xl ${activeProduct.filter}`}
                    />
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="relative z-10 w-full max-w-[200px] sm:max-w-[280px] md:max-w-[320px] aspect-[3/4] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-6 drop-shadow-2xl"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base">Coming Soon</span>
                        <span className="text-gray-500 text-xs font-light text-center px-6">Packaging being updated</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Product Info Side */}
                <div className="w-full lg:w-3/5 flex flex-col items-start">
                  <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-white/10 px-4 py-1.5 rounded-full bg-white/5">
                    {activeProduct.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4 leading-tight">
                    {activeProduct.name}
                  </h3>

                  {activeProduct.price && (
                    <p className="text-xl md:text-2xl font-light text-primary mb-6">{activeProduct.price}</p>
                  )}

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light max-w-xl">
                    {activeProduct.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-6 mb-8 md:mb-10 w-full">
                    {activeProduct.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5 md:mt-0" />
                        <span className="text-gray-300 text-xs sm:text-sm font-light leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(activeProduct.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button text-white px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 group w-full sm:w-auto hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <ShoppingBag className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform" />
                    Buy via WhatsApp
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Navigation Arrows (Inside Card) */}
            <div className="absolute inset-y-0 left-0 items-center justify-start pointer-events-none px-4 md:px-8 z-20 hidden lg:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={handlePrev} className="p-3 rounded-full bg-black/60 hover:bg-black/90 transition-colors border border-white/10 text-white pointer-events-auto backdrop-blur-md" aria-label="Previous product">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 items-center justify-end pointer-events-none px-4 md:px-8 z-20 hidden lg:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={handleNext} className="p-3 rounded-full bg-black/60 hover:bg-black/90 transition-colors border border-white/10 text-white pointer-events-auto backdrop-blur-md" aria-label="Next product">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots & Mobile Navigation (Below Card) */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button onClick={handlePrev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white lg:hidden" aria-label="Previous product">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-4">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-10' : 'bg-white/20 hover:bg-white/40 w-2.5'}`}
                  aria-label={`Go to product ${idx + 1}`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white lg:hidden" aria-label="Next product">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
