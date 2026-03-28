import React, { useState } from 'react';
import { 
  Filter, 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  ArrowRight, 
  Download,
  Star,
  Plus
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['Todos', 'Distribución de Energía', 'Monitoreo', 'Protección', 'Iluminación'];

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Catálogo Técnico</h1>
          <p className="text-gray-500 mt-1">Explore nuestros componentes de infraestructura eléctrica de alto rendimiento.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm w-64"
            />
          </div>
          <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6 overflow-x-auto gap-8">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                activeCategory === cat 
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 min-w-max">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <span>Ordenar por:</span>
            <button className="flex items-center gap-1 text-gray-900 hover:text-orange-500 transition-colors">
              Popularidad <ChevronDown size={14} />
            </button>
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <span>Precio:</span>
            <button className="flex items-center gap-1 text-gray-900 hover:text-orange-500 transition-colors">
              Menor a Mayor <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={`/products/${product.id}`}
            className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-gray-900 uppercase tracking-widest shadow-sm">
                  {product.category}
                </span>
                {product.status === 'Low Stock' && (
                  <span className="px-3 py-1 bg-red-500/90 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                    Stock Bajo
                  </span>
                )}
              </div>
              <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-orange-500 transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Plus size={18} />
              </button>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} className="fill-orange-400 text-orange-400" />
                ))}
                <span className="text-[10px] font-bold text-gray-400 ml-1">(48 Reseñas)</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-1">{product.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Precio</p>
                  <p className="text-xl font-black text-gray-900">${product.price.toLocaleString()}</p>
                </div>
                <button className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-all shadow-lg shadow-gray-900/10 group-hover:shadow-orange-500/20">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Need a Quote Callout */}
      <div className="bg-[#151619] rounded-[40px] p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/10 skew-x-12 translate-x-1/4 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter italic">¿Necesita una cotización de proyecto personalizada?</h2>
            <p className="text-gray-400 mt-4 text-lg">Nuestro equipo técnico está listo para proporcionar especificaciones detalladas y precios para sus necesidades específicas de infraestructura.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-3 group/btn">
              Generar Solicitud de Cotización
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-black uppercase tracking-widest italic hover:bg-white/20 transition-all flex items-center gap-3">
              <Download size={20} />
              Catálogo Completo PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
