import React from 'react';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Settings, 
  BarChart3, 
  ChevronRight, 
  Star,
  Download,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export const Landing = () => {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full h-24 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-[100] flex items-center justify-between px-8 lg:px-20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Zap className="text-white fill-white" size={28} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">Voltia</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12">
          {['Solutions', 'Catalog', 'Projects', 'Resources', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-black uppercase tracking-widest italic text-gray-400 hover:text-orange-500 transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-black uppercase tracking-widest italic text-gray-900 hover:text-orange-500 transition-colors">Client Portal</Link>
          <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-500 transition-all shadow-xl shadow-gray-900/10 hover:shadow-orange-500/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 skew-x-12 translate-x-1/4 -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 italic">Technical Excellence as a Service</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] uppercase tracking-tighter italic">
              Empowering Your <span className="text-orange-500">Electrical</span> Future
            </h1>
            <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
              High-performance electrical infrastructure solutions for industrial, commercial, and residential projects. Engineered for reliability, safety, and efficiency.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="px-10 py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 flex items-center gap-3 group">
                Explore Solutions
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white border-2 border-gray-100 rounded-2xl font-black uppercase tracking-widest italic text-gray-900 hover:bg-gray-50 hover:border-orange-200 transition-all flex items-center gap-3">
                Watch Demo
                <Zap size={24} className="text-orange-500" />
              </button>
            </div>
            <div className="flex items-center gap-8 pt-10 border-t border-gray-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 uppercase italic">Trusted by 500+ Companies</p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-xs font-bold text-gray-400 ml-2">4.9/5 Average Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 w-full aspect-square bg-white rounded-[60px] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/industrial/1000/1000" 
                alt="Industrial Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] text-white">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2 italic">Featured Project</p>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">Metropolis Power Grid Expansion</h3>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-xl font-black italic">15MW</p>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-white/60">Capacity</p>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <p className="text-xl font-black italic">99.9%</p>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-white/60">Uptime</p>
                    </div>
                  </div>
                  <button className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-all">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter italic">Engineered for Reliability</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Our infrastructure solutions are built on three core pillars of technical excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Safety First', desc: 'Advanced protection systems that exceed international safety standards and regulations.' },
              { icon: Settings, title: 'Precision Control', desc: 'Smart monitoring and control units for granular management of your electrical network.' },
              { icon: BarChart3, title: 'Efficiency Optimized', desc: 'High-efficiency components designed to minimize energy loss and maximize performance.' }
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/5 transition-all group">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                <button className="mt-8 flex items-center gap-2 text-sm font-black uppercase tracking-widest italic text-orange-500 hover:text-orange-600 transition-colors group/btn">
                  Learn More
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter italic">Technical Catalog</h2>
              <p className="text-gray-500 text-lg max-w-xl">Browse our high-performance electrical infrastructure components.</p>
            </div>
            <Link to="/products" className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-500 transition-all shadow-xl shadow-gray-900/10 flex items-center gap-3">
              View Full Catalog
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <Link 
                key={product.id} 
                to={`/products/${product.id}`}
                className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-gray-900 uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors">{product.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-black text-gray-900">${product.price.toLocaleString()}</p>
                    <button className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto bg-[#151619] rounded-[60px] p-16 lg:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 skew-x-12 translate-x-1/4 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-16">
            <div className="max-w-2xl space-y-8">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter italic">Ready to build the future?</h2>
              <p className="text-gray-400 text-xl leading-relaxed">Our technical team is ready to provide detailed specs and pricing for your specific infrastructure needs. Let's start your project today.</p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 flex items-center gap-3 group/btn">
                  Generate Quote Request
                  <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-black uppercase tracking-widest italic hover:bg-white/20 transition-all flex items-center gap-3">
                  <Download size={24} />
                  Full Catalog PDF
                </button>
              </div>
            </div>
            <div className="hidden lg:block w-80 h-80 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[60px] p-10 rotate-12 group-hover:rotate-6 transition-transform duration-700">
              <div className="w-full h-full border-2 border-dashed border-white/20 rounded-[40px] flex flex-col items-center justify-center gap-4 text-white/40">
                <Zap size={64} className="animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-widest text-center">Technical Command Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 px-8 lg:px-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Zap className="text-white fill-white" size={24} />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase italic">Voltia</span>
              </div>
              <p className="text-gray-500 leading-relaxed">Technical excellence as a service. Providing high-performance electrical infrastructure solutions globally.</p>
              <div className="flex items-center gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest italic text-gray-900">Solutions</h4>
              <ul className="space-y-4">
                {['Industrial Power', 'Commercial Grid', 'Residential Systems', 'Smart Monitoring', 'Safety Protection'].map((item) => (
                  <li key={item}><a href="#" className="text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest italic text-gray-900">Resources</h4>
              <ul className="space-y-4">
                {['Technical Docs', 'Case Studies', 'Safety Standards', 'Support Center', 'API Reference'].map((item) => (
                  <li key={item}><a href="#" className="text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-widest italic text-gray-900">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-500">1234 Innovation Way, Silicon Valley, CA 94025</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-500">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={20} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-gray-500">contact@voltia.tech</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2026 Voltia Technical Services. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Privacy Policy</a>
              <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Terms of Service</a>
              <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
