import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Tag,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { product: PRODUCTS[0], quantity: 2 },
    { product: PRODUCTS[1], quantity: 5 },
    { product: PRODUCTS[2], quantity: 1 }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.product.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.12;
  const shipping = subtotal > 5000 ? 0 : 150;
  const total = subtotal + tax + shipping;

  return (
    <div className="space-y-12 py-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic">Revise su Carrito</h1>
          <p className="text-gray-500 mt-1">Revise sus componentes de infraestructura técnica antes de generar una solicitud de pedido.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
            <ShoppingCart size={24} />
          </div>
          <span className="text-2xl font-black text-gray-900">{cartItems.length} Artículos</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {cartItems.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all group flex flex-col sm:flex-row items-center gap-8"
              >
                <div className="w-32 h-32 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex-shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{item.product.category}</span>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight italic group-hover:text-orange-500 transition-colors truncate">{item.product.name}</h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-1">{item.product.description}</p>
                  
                  <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-lg transition-all"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-black text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-lg transition-all"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors flex items-center gap-1 uppercase tracking-widest"
                    >
                      <Trash2 size={14} />
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="text-center sm:text-right min-w-[120px]">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total</p>
                  <p className="text-2xl font-black text-gray-900">${(item.product.price * item.quantity).toLocaleString()}</p>
                  <p className="text-xs font-bold text-gray-400 mt-1">${item.product.price.toLocaleString()} / unidad</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {cartItems.length === 0 && (
            <div className="bg-white rounded-[40px] border border-gray-100 p-20 text-center space-y-6">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                <ShoppingCart size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight italic">Su carrito está vacío</h3>
                <p className="text-gray-500">Parece que aún no ha añadido ningún componente a su proyecto.</p>
              </div>
              <button className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                Explorar Catálogo Técnico
              </button>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="space-y-8">
          <div className="bg-[#151619] text-white p-10 rounded-[40px] shadow-2xl shadow-gray-900/20 sticky top-32">
            <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">Resumen del Pedido</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
                <span className="text-lg font-black italic">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Impuesto Estimado (12%)</span>
                <span className="text-lg font-black italic">${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Envío y Manejo</span>
                <span className="text-lg font-black italic">{shipping === 0 ? 'GRATIS' : `$${shipping}`}</span>
              </div>
              
              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="flex-1 relative group">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
                  <input 
                    type="text" 
                    placeholder="Código Promocional" 
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-bold placeholder:text-gray-600"
                  />
                </div>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all">Aplicar</button>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mb-10">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Monto Total</span>
                <span className="text-4xl font-black text-orange-500 italic">${total.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium text-right uppercase tracking-widest">Incluye todas las certificaciones técnicas</p>
            </div>

            <button className="w-full py-5 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest italic hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 group">
              Generar Solicitud de Pedido
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 border border-white/10">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest text-center leading-tight">Transacción Segura</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 border border-white/10">
                  <Truck size={18} />
                </div>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest text-center leading-tight">Entrega Rápida</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 border border-white/10">
                  <RotateCcw size={18} />
                </div>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest text-center leading-tight">Devoluciones Fáciles</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-100 flex gap-4">
            <Info className="text-blue-500 flex-shrink-0" size={24} />
            <div className="space-y-2">
              <p className="text-xs font-black text-blue-900 uppercase tracking-widest">Nota Técnica</p>
              <p className="text-sm text-blue-700 leading-relaxed">Los pedidos que superen los $50,000 requieren una revisión técnica manual por parte de nuestro departamento de ingeniería antes de la aprobación final.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
