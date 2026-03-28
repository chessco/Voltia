import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#151619] relative overflow-hidden p-20 flex-col justify-between">
        <div className="absolute top-0 right-0 w-full h-full bg-orange-500/5 skew-x-12 translate-x-1/4"></div>
        
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Zap className="text-white fill-white" size={28} />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic text-white">Voltia</span>
        </Link>

        <div className="relative z-10 space-y-6">
          <h2 className="text-6xl font-black text-white leading-tight uppercase tracking-tighter italic">
            Join the <span className="text-orange-500">Future</span> of Power.
          </h2>
          <p className="text-gray-400 text-xl max-w-md leading-relaxed">
            Create your engineering account and start managing your electrical infrastructure projects today.
          </p>
        </div>

        <div className="relative z-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] max-w-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white">
              <ShieldCheck size={24} />
            </div>
            <p className="text-sm font-black text-white uppercase tracking-widest italic">Enterprise Security</p>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            All accounts are protected by multi-factor authentication and bank-grade encryption for your project data.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-20 bg-[#F9FAFB]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-10"
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic">Create Account</h1>
            <p className="text-gray-500">Start your 14-day free trial of the Voltia Portal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <User size={14} />
                Full Name
              </label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera" 
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Mail size={14} />
                Work Email
              </label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@voltia.tech" 
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Lock size={14} />
                Create Password
              </label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold"
              />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                I agree to the <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 group"
            >
              Initialize My Portal
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-sm font-bold text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-500 hover:underline uppercase tracking-widest">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
