import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { DASHBOARD_METRICS, RECENT_ACTIVITY, CHART_DATA } from '../constants';
import { cn } from '../lib/utils';

export const Dashboard = () => {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Centro de Mando Técnico</h1>
          <p className="text-gray-500 mt-1">Resumen en tiempo real de sus operaciones de infraestructura eléctrica.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Clock size={16} />
            Últimos 30 Días
          </button>
          <button className="px-4 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
            Exportar Informe
          </button>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_METRICS.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{metric.label}</span>
              <div className={cn(
                "p-2 rounded-lg transition-colors",
                metric.trend === 'up' ? "bg-green-50 text-green-600" : 
                metric.trend === 'down' ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-600"
              )}>
                {metric.trend === 'up' ? <TrendingUp size={16} /> : 
                 metric.trend === 'down' ? <TrendingDown size={16} /> : <ArrowUpRight size={16} />}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
              {metric.change !== 0 && (
                <span className={cn(
                  "text-xs font-bold px-2 py-1 rounded-full",
                  metric.change > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                )}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Analysis Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Análisis de Tendencias</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pedidos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Cotizaciones</span>
              </div>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorOrders)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="quotes" 
                  stroke="#cbd5e1" 
                  strokeWidth={3}
                  fillOpacity={0} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Actividad Reciente</h3>
            <button className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Ver Todo</button>
          </div>
          <div className="flex-1 space-y-6">
            {RECENT_ACTIVITY.map((activity) => (
              <div key={activity.id} className="flex gap-4 group cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors">
                    {activity.action.includes('Approved') ? <CheckCircle2 size={18} className="text-green-500" /> : 
                     activity.action.includes('Requested') ? <AlertCircle size={18} className="text-orange-500" /> : <Clock size={18} className="text-blue-500" />}
                  </div>
                  {activity.id !== RECENT_ACTIVITY[RECENT_ACTIVITY.length - 1].id && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gray-100"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate group-hover:text-orange-500 transition-colors">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{activity.user} • {activity.project}</p>
                  <p className="text-[10px] font-medium text-gray-400 mt-1 uppercase tracking-wider">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <p className="text-xs font-bold text-orange-800 uppercase tracking-widest mb-1">Salud del Sistema</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-orange-700">Todos los sistemas operativos</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
