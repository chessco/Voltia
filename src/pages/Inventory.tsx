import React from 'react';
import { 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  Plus, 
  Download, 
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

export const Inventory = () => {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Gestión de Inventario</h1>
          <p className="text-gray-500 mt-1">Rastree y gestione sus niveles de stock de componentes eléctricos.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download size={16} />
            Exportar CSV
          </button>
          <button className="px-4 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
            <Plus size={16} />
            Agregar Nuevo Producto
          </button>
        </div>
      </header>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Filtrar por nombre..." 
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all w-64"
              />
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            </div>
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all">
              <option>Todas las Categorías</option>
              <option>Distribución de Energía</option>
              <option>Monitoreo</option>
              <option>Protección</option>
            </select>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Mostrando <span className="text-gray-900 font-bold">{PRODUCTS.length}</span> productos
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Producto</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                    Categoría <ArrowUpDown size={12} />
                  </button>
                </th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Stock</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Precio</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estado</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-100 flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{product.name}</p>
                        <p className="text-xs text-gray-400 truncate">ID: {product.id.padStart(6, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{product.category}</span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className={cn(
                      "text-sm font-bold",
                      product.stock < 10 ? "text-red-600" : "text-gray-900"
                    )}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-gray-900">${product.price.toLocaleString()}</p>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        product.status === 'In Stock' ? "bg-green-500" : 
                        product.status === 'Low Stock' ? "bg-orange-500" : "bg-red-500"
                      )}></div>
                      <span className="text-xs font-bold text-gray-700">{product.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-900 rounded-lg transition-all group-hover:hidden">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-400 hover:bg-white hover:text-gray-900 transition-all disabled:opacity-50" disabled>Anterior</button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 bg-orange-500 text-white rounded-lg text-xs font-bold shadow-lg shadow-orange-500/20">1</button>
              <button className="w-8 h-8 hover:bg-white border border-transparent hover:border-gray-200 rounded-lg text-xs font-bold text-gray-500 transition-all">2</button>
              <button className="w-8 h-8 hover:bg-white border border-transparent hover:border-gray-200 rounded-lg text-xs font-bold text-gray-500 transition-all">3</button>
            </div>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-500 hover:bg-white hover:text-gray-900 transition-all">Siguiente</button>
          </div>
          <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">Página 1 de 12</p>
        </div>
      </div>
    </div>
  );
};
