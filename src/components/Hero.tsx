import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const headingRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const mockupRef = useScrollAnimation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#003366] via-[#004d99] to-[#0066cc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-16 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#00BFFF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">TTM</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
          <a href="#features" className="hover:text-[#00BFFF] transition-colors">Features</a>
          <a href="#benefits" className="hover:text-[#00BFFF] transition-colors">Solutions</a>
          <a href="#clients" className="hover:text-[#00BFFF] transition-colors">Clients</a>
          <a href="#contact" className="hover:text-[#00BFFF] transition-colors">Contact</a>
        </div>
        <button className="px-6 py-2.5 bg-white text-[#003366] rounded-lg font-semibold hover:bg-[#00BFFF] hover:text-white transition-all duration-300 shadow-lg">
          Sign In
        </button>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={headingRef} className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#00BFFF] text-sm font-semibold border border-white/20">
              Track. Transport. Manage.
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Smarter Fleet Management.{" "}
              <span className="text-[#00BFFF]">Real-Time.</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#00FFFF]">
                Everywhere.
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Optimize operations, track vehicles live, and improve driver safety — all in one powerful dashboard.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in">
              <button
                className="group px-8 py-4 bg-[#00BFFF] text-white rounded-lg font-semibold hover:bg-[#00a8e8] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Book a Demo</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>

              <button className="group px-8 py-4 bg:white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div ref={statsRef} className="flex items-center space-x-8 pt-8 animate-slide-up stagger-2">
              <div className="text-center">
                <div className="text-3xl font-bold text:white">500+</div>
                <div className="text-sm text-white/70">Active Fleets</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15K+</div>
                <div className="text-sm text-white/70">Vehicles Tracked</div>
              </div>
              <div className="w-px h-12 bg:white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text:white">98%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
            </div>
          </div>

          <div ref={mockupRef} className="relative lg:block hidden animate-slide-left">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00BFFF]/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="bg-gradient-to-br from-[#F5F8FA] to-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">dashboard.ttm.io</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Active Vehicles</div>
                      <div className="text-2xl font-bold text-[#003366]">1,247</div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF] to-[#0066cc] rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-100">
                      <div className="text-xs text-gray-500 mb-1">In Transit</div>
                      <div className="text-xl font-bold text-green-600">892</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                      <div className="text-xs text-gray-500 mb-1">Idle</div>
                      <div className="text-xl font-bold text-blue-600">355</div>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-gray-700">Fuel Efficiency</div>
                      <div className="text-sm text-green-600 font-semibold">+12%</div>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  <div className="h-24 bg-gradient-to-r from-[#003366]/5 to-[#00BFFF]/5 rounded-lg flex items-end justify-around p-4 space-x-2">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#00BFFF] to-[#003366] rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
