import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    fleetSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const headingRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div ref={headingRef} className="animate-slide-up text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-[#00BFFF]/10 rounded-full text-[#003366] text-sm font-semibold">
            Get Started
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366]">
            Talk to Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#003366]">
              Fleet Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a personalized demo and discover how TTM can transform your fleet operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div ref={contentRef} className="animate-slide-right space-y-8">
            <div className="bg-gradient-to-br from-[#F5F8FA] to-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Why Choose TTM?</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#003366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#003366] mb-1">Quick Implementation</div>
                    <div className="text-gray-600 text-sm">Get up and running in less than 48 hours with our expert onboarding team</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#003366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#003366] mb-1">No Hidden Fees</div>
                    <div className="text-gray-600 text-sm">Transparent pricing with no surprise charges or long-term contracts</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#003366] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#003366] mb-1">Award-Winning Support</div>
                    <div className="text-gray-600 text-sm">24/7 customer support with an average response time under 5 minutes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div className="text-sm text-gray-500 mb-1">Email Us</div>
                <div className="font-semibold text-[#003366]">hello@ttm.io</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div className="text-sm text-gray-500 mb-1">Call Us</div>
                <div className="font-semibold text-[#003366]">+1 800 TTM-FLEET</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div className="text-sm text-gray-500 mb-1">Visit Us</div>
                <div className="font-semibold text-[#003366]">San Francisco, CA</div>
              </div>
            </div>
          </div>

          <div ref={formRef} className="animate-slide-left bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#003366] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#003366] mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#003366] mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all"
                  placeholder="Acme Logistics"
                />
              </div>

              <div>
                <label htmlFor="fleetSize" className="block text-sm font-semibold text-[#003366] mb-2">
                  Fleet Size *
                </label>
                <select
                  id="fleetSize"
                  name="fleetSize"
                  value={formData.fleetSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all"
                >
                  <option value="">Select fleet size</option>
                  <option value="1-10">1-10 vehicles</option>
                  <option value="11-50">11-50 vehicles</option>
                  <option value="51-200">51-200 vehicles</option>
                  <option value="201-500">201-500 vehicles</option>
                  <option value="500+">500+ vehicles</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#003366] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your fleet management needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#003366] text-white rounded-lg font-semibold hover:from-[#00a8e8] hover:to-[#00264d] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <span>Request Demo</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-gray-500">
                By submitting this form, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
