import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'motion/react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
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
            Powering the <span className="text-orange-500">Infrastructure</span> of Tomorrow.
          </h2>
          <p className="text-gray-400 text-xl max-w-md leading-relaxed">
            Access your technical command center and manage your electrical projects with precision.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-8 pt-10 border-t border-white/10">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-4 border-[#151619] bg-gray-800 overflow-hidden">
                <img src={`https://picsum.photos/seed/auth${i}/100/100`} alt="User" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest italic">Join 500+ Engineering Teams</p>
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
            <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic">Welcome Back</h1>
            <p className="text-gray-500">Enter your credentials to access your portal.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Mail size={14} />
                Email Address
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
              <div className="flex items-center justify-between">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Lock size={14} />
                  Password
                </label>
                <a href="#" className="text-[10px] font-bold text-orange-500 uppercase tracking-widest hover:underline">Forgot Password?</a>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-bold"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 group"
            >
              Sign In to Portal
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="bg-[#F9FAFB] px-4 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
              <Chrome size={18} />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
              <Github size={18} />
              GitHub
            </button>
          </div>

          <p className="text-center text-sm font-bold text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-orange-500 hover:underline uppercase tracking-widest">Create Account</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
