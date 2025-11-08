import { MapPin, TrendingUp, Wrench, Route } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const features = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Monitor your entire fleet in real-time with precise GPS tracking and geofencing capabilities.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'Driver Performance Insights',
    description: 'Analyze driver behavior, safety scores, and productivity metrics to optimize performance.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    description: 'Stay ahead of breakdowns with AI-powered maintenance alerts and vehicle health monitoring.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Route,
    title: 'Route Optimization & Fuel Analytics',
    description: 'Reduce costs with intelligent routing and comprehensive fuel consumption analytics.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const headingRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  useGSAP(() => {
    // Prevent initial flash
    const tl2 = gsap.timeline({
      defaults: { ease: 'power1.inOut' },
      scrollTrigger: {
        trigger: '.group',
        start: 'top -15%',
        end: '+=500',
        scrub: true,
      },
    });
    tl2.to('.group', {
      y:34,
      stagger:2,
      opacity:1
    })

    

    const tl = gsap.timeline({
      defaults: { ease: 'power1.inOut' },
      scrollTrigger: {
        trigger: '#transform',
        start: 'top 80%',
        end: '+=1200',
        scrub: true,
      },
    });
    tl.to('#transform', {
      // x: 850,
      scale: 1.5,
      // rotation: 240,
      // borderRadius: '100%',
      duration: 2,
      opacity: 1,
      transformOrigin: '50% 50%',
    })
  }, [])
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-[#F5F8FA]">
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
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#003366]">
              Manage Your Fleet
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed to give you complete visibility and control over your operations
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className={`group relative opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#00BFFF]/30 cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              // viewport={{ once: true, amount: 0.2 }}
              // transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/0 to-[#003366]/0 group-hover:from-[#00BFFF]/5 group-hover:to-[#003366]/5 rounded-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#00BFFF] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className={`mt-6 flex items-center text-[#00BFFF] font-semibold transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                    <span className="text-sm">Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div
          id='transform'
          className="mt-20 bg-gradient-to-br from-[#003366] to-[#0066cc] rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Fleet Operations?
            </h3>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join hundreds of companies saving time and money with TTM's intelligent fleet management platform
            </p>
            <button className="px-8 py-4 bg-[#00BFFF] text-white rounded-lg font-semibold hover:bg-[#00a8e8] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
