import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Ceramic Care',
    category: 'Ceramic Shampoo',
    price: '$29.99',
    description: 'Engineered for the perfectionist. Our ceramic-infused formula delivers an immaculate mirror finish and durable protection in a single step.',
    features: ['SiO2 Infused Formula', 'pH Neutral & Safe', 'High-Foam Action', 'Mirror-like Finish'],
    image: '/bottle.png',
    glow: 'bg-primary/20',
    filter: '',
    whatsappMessage: "Hi, I'm interested in purchasing the Premium Ceramic Care Shampoo."
  },
  {
    id: 2,
    name: 'Advanced Graphene Seal',
    category: 'Graphene Coating',
    price: '$45.00',
    description: 'Next-generation surface science. Creates an impenetrable barrier against environmental contaminants with extreme water beading capabilities.',
    features: ['Graphene-Oxide Tech', '12-Month Protection', 'Extreme Water Beading', 'Deep Color Enhancement'],
    image: '/bottle.png',
    glow: 'bg-blue-500/20',
    filter: 'hue-rotate-180',
    whatsappMessage: "Hi, I'm interested in purchasing the Advanced Graphene Seal."
  }
];

export function Products() {
  const whatsappNumber = "15551234567"; // Using the dummy number from Footer

  return (
    <section id="products" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Engineered Perfection.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="flex flex-col bg-white/[0.02] rounded-3xl border border-white/[0.05] p-6 md:p-8 hover:bg-white/[0.04] transition-colors group"
            >
              {/* Product Image */}
              <div className="w-full relative flex justify-center items-center h-[200px] mb-8">
                <div className={`absolute bottom-1/4 w-1/2 h-1/4 ${product.glow} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`relative z-10 h-full object-contain drop-shadow-2xl ${product.filter} group-hover:scale-110 transition-transform duration-700`}
                />
              </div>

              {/* Product Info */}
              <div className="w-full flex flex-col items-start h-full">
                <span className="text-gray-500 text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-lg font-light text-primary mb-4">{product.price}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light flex-grow">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                  {product.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-gray-300 text-xs font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button text-white px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 group w-full"
                >
                  <ShoppingBag className="w-4 h-4 text-primary group-hover:-translate-y-1 transition-transform" />
                  Buy via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
