import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  ShoppingCart, 
  Settings, 
  LogOut, 
  Zap,
  ClipboardList,
  BarChart3
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Panel de Control', path: '/dashboard' },
  { icon: Package, label: 'Productos', path: '/products' },
  { icon: ClipboardList, label: 'Inventario', path: '/inventory' },
  { icon: FileText, label: 'Cotizaciones', path: '/quotations' },
  { icon: ShoppingCart, label: 'Pedidos', path: '/orders' },
  { icon: BarChart3, label: 'Análisis', path: '/analytics' },
];

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-[#151619] text-white flex flex-col h-screen sticky top-0 border-r border-white/10">
      <div className="p-6 flex items-center gap-3">
        <NavLink to="/" className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
          <Zap className="text-white fill-white" size={24} />
        </NavLink>
        <span className="text-xl font-bold tracking-tight uppercase">Voltia</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )
            }
          >
            <item.icon size={20} className={cn("transition-colors", "group-hover:text-white")} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
          <Settings size={20} />
          <span className="font-medium">Configuración</span>
        </button>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};
