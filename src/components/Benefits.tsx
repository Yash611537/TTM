import { Clock, DollarSign, Shield, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const benefits = [
  {
    stat: '35%',
    label: 'Reduction in Downtime',
    description: 'Predictive maintenance keeps your fleet on the road',
    icon: Clock,
  },
  {
    stat: '20%',
    label: 'Fuel Cost Savings',
    description: 'Optimized routes and driver behavior monitoring',
    icon: DollarSign,
  },
  {
    stat: '45%',
    label: 'Improved Safety',
    description: 'Real-time alerts and driver coaching programs',
    icon: Shield,
  },
  {
    stat: '60%',
    label: 'Better Efficiency',
    description: 'Data-driven decisions that maximize productivity',
    icon: BarChart3,
  },
];

export default function Benefits() {
  const contentRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const statsRef = useScrollAnimation();

  return (
    <section id="benefits" className="py-24 bg-white z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            ref={contentRef}
            className="space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-block px-4 py-2 bg-[#00BFFF]/10 rounded-full text-[#003366] text-sm font-semibold">
              Proven Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] leading-tight">
              Real Impact on Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#003366]">
                Bottom Line
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our customers see measurable improvements within the first 90 days. From reduced operational costs to enhanced safety metrics, TTM delivers ROI that matters.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#00BFFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#00BFFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Instant visibility across your entire fleet with real-time dashboards</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#00BFFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#00BFFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">AI-powered analytics that predict issues before they become problems</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#00BFFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#00BFFF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 to-[#003366]/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#F5F8FA] to-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                    >
                      <Icon className="w-8 h-8 text-[#00BFFF] mb-4" />
                      <div className="text-3xl font-bold text-[#003366] mb-2">
                        {benefit.stat}
                      </div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">
                        {benefit.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {benefit.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-[#003366] to-[#0066cc] rounded-xl text-white"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Average ROI</div>
                    <div className="text-3xl font-bold">$2.4M</div>
                    <div className="text-xs opacity-75 mt-1">per year for mid-size fleets</div>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="bg-gradient-to-br from-[#F5F8FA] to-white rounded-3xl p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#003366] mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">
              Companies worldwide rely on TTM to power their fleet operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold text-gray-400">VOLVO</div>
            <div className="text-2xl font-bold text-gray-400">TATA MOTORS</div>
            <div className="text-2xl font-bold text-gray-400">SCANIA</div>
            <div className="text-2xl font-bold text-gray-400">MERCEDES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
