import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col max-w-xs">
          <h3 className="text-white text-xl font-bold tracking-tight mb-4">HEXA AUTOCARE</h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Premium automotive detailing solutions engineered for perfectionists. Uncompromising shine, unmatched protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-primary text-xs tracking-widest font-semibold uppercase mb-2">Contact Us</h4>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm font-light group">
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              +1 (555) 123-4567
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm font-light group">
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              contact@hexaautocare.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-primary text-xs tracking-widest font-semibold uppercase mb-2">Location</h4>
            <div className="flex items-start gap-3 text-gray-400 text-sm font-light leading-relaxed group cursor-default">
              <MapPin className="w-4 h-4 text-primary mt-1 group-hover:scale-110 transition-transform shrink-0" />
              <span>
                123 Automotive Way<br />
                Suite 400<br />
                Los Angeles, CA 90015
              </span>
            </div>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs font-light">
          &copy; {new Date().getFullYear()} Hexa AutoCare. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
