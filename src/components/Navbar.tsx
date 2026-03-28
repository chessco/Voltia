import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar proyectos, productos o pedidos..." 
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 leading-none">Alex Rivera</p>
            <p className="text-xs text-gray-500 mt-1">Gerente de Proyecto</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-orange-500 transition-all overflow-hidden">
            <User size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};
