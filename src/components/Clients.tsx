import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "TTM transformed how we manage our logistics. The real-time tracking and predictive maintenance features have reduced our operational costs by 28% in just 6 months.",
    author: "Sarah Mitchell",
    role: "Fleet Manager",
    company: "TransLogix Inc.",
    rating: 5,
  },
  {
    quote: "The driver performance insights have been game-changing. We've seen a 40% improvement in safety scores and our insurance premiums have dropped significantly.",
    author: "James Rodriguez",
    role: "Operations Director",
    company: "GlobalFreight Solutions",
    rating: 5,
  },
  {
    quote: "Implementation was seamless and the ROI was immediate. The platform pays for itself with the fuel savings alone. Highly recommended for any serious fleet operation.",
    author: "Emily Chen",
    role: "VP of Operations",
    company: "Metro Distribution",
    rating: 5,
  },
];

export default function Clients() {
  const headingRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-white to-[#F5F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          ref={headingRef}
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-block px-4 py-2 bg-[#00BFFF]/10 rounded-full text-[#003366] text-sm font-semibold">
            Customer Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#003366]">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied fleet managers who trust TTM daily
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00BFFF]/30 group`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00BFFF] text-[#00BFFF]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#00BFFF]/20 group-hover:text-[#00BFFF]/40 transition-colors" />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#003366] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-[#003366]">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={statsRef}
          className="bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-3xl p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-12 mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">4.9/5</div>
                <div className="text-white/80">Average Rating</div>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00BFFF] text-[#00BFFF]" />
                  ))}
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>

              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the difference that industry-leading support and technology can make
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
