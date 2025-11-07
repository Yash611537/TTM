import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function Footer() {
  const contentRef = useScrollAnimation();

  return (
    <footer className="bg-gradient-to-br from-[#003366] to-[#001a33] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={contentRef}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#00BFFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-2xl">TTM</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              Empowering fleet managers with intelligent telematics solutions to optimize operations, reduce costs, and improve safety.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#features" className="hover:text-[#00BFFF] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">API</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Press</a></li>
              <li><a href="#contact" className="hover:text-[#00BFFF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-[#00BFFF] transition-colors">Community</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              2025 TTM Fleet Management. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#00BFFF] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00BFFF] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00BFFF] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
