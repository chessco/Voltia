import { User, Calendar, Search, Filter, Plus, MoreVertical, Clock } from 'lucide-react';
import { cn } from '../../../shared/lib/utils';
import { useTranslation } from 'react-i18next';

export const Orders = () => {
  const { t } = useTranslation();

  const columns = [
    { id: 'pending', title: t('orders.columns.pending'), count: 4, color: 'bg-orange-500' },
    { id: 'review', title: t('orders.columns.review'), count: 2, color: 'bg-blue-500' },
    { id: 'completed', title: t('orders.columns.completed'), count: 8, color: 'bg-green-500' }
  ];

  const orders = [
    { id: 'ORD-001', customer: 'Subestación Industrial A', amount: 12500, status: 'pending', time: t('orders.time.hours', { count: 2 }), priority: 'high' },
    { id: 'ORD-002', customer: 'Complejo Comercial B', amount: 8400, status: 'review', time: t('orders.time.hours', { count: 4 }), priority: 'medium' },
    { id: 'ORD-003', customer: 'Finca Residencial C', amount: 3200, status: 'pending', time: t('orders.time.days', { count: 1 }), priority: 'low' },
    { id: 'ORD-004', customer: 'Expansión de Fábrica D', amount: 45000, status: 'completed', time: t('orders.time.hours', { count: 1 }), priority: 'high' },
    { id: 'ORD-005', customer: 'Torre de Oficinas E', amount: 15600, status: 'completed', time: t('orders.time.hours', { count: 3 }), priority: 'medium' }
  ];
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t('orders.title')}</h1>
          <p className="text-gray-500 mt-1">{t('orders.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder={t('orders.searchPlaceholder')} 
              className="pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm w-64"
            />
          </div>
          <button className="p-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter size={20} />
          </button>
          <button className="px-4 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2">
            <Plus size={16} />
            {t('orders.newOrder')}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.id} className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className={cn("w-2 h-6 rounded-full", col.color)}></div>
                <h3 className="text-lg font-bold text-gray-900">{col.title}</h3>
                <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full">{col.count}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-900 transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {orders.filter(o => o.status === col.id).map((order) => (
                <div key={order.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{order.id}</span>
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest",
                      order.priority === 'high' ? "bg-red-50 text-red-600" : 
                      order.priority === 'medium' ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {t('orders.priority', { level: t(`orders.priorities.${order.priority}`) })}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">{order.customer}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {order.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      Oct 24, 2023
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center overflow-hidden">
                          <User size={14} className="text-gray-400" />
                        </div>
                      ))}
                    </div>
                    <p className="text-lg font-black text-gray-900">${order.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-4 border-2 border-dashed border-gray-100 rounded-3xl text-gray-400 font-bold text-sm hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50/30 transition-all flex items-center justify-center gap-2">
                <Plus size={16} />
                {t('orders.addOrder')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

