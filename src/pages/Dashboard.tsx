import React, { useState } from 'react';
import {
    DollarSign,
    Clock,
    CheckCircle2,
    AlertTriangle,
    MoreVertical,
    Store
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';
import KPICard from '../components/KPICard';

const data = [
    { name: '01', prev: 42000, curr: 24500 },
    { name: '05', prev: 35000, curr: 28900 },
    { name: '10', prev: 28000, curr: 45000 },
    { name: '15', prev: 32000, curr: 39000 },
    { name: '20', prev: 25000, curr: 48000 },
    { name: '25', prev: 29000, curr: 38000 },
    { name: '30', prev: 38000, curr: 43000 },
];

const paymentData = [
    { name: 'Pix', value: 4000, color: '#0ea5e9' },
    { name: 'Crédito', value: 3000, color: '#10b981' },
    { name: 'Crediário', value: 2000, color: '#8b5cf6' },
    { name: 'Dinheiro', value: 1000, color: '#f59e0b' },
];

const stores = Array.from({ length: 10 }, (_, i) => `Loja ${String(i + 1).padStart(2, '0')}`);

const Dashboard: React.FC = () => {
    const [selectedStore, setSelectedStore] = useState('Todas as Lojas');

    return (
        <div className="space-y-6">
            {/* Store Selector */}
            <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="flex items-center gap-2 text-slate-100 font-medium">
                    <Store size={20} className="text-red-500" />
                    <span>Visualizando dados de:</span>
                </div>
                <select
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
                >
                    <option value="Todas as Lojas">Todas as Lojas (Rede)</option>
                    {stores.map(store => (
                        <option key={store} value={store}>{store}</option>
                    ))}
                </select>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Total Recebido Hoje"
                    value="R$ 145.590"
                    icon={DollarSign}
                    trend="+12%"
                    trendUp={true}
                    color="emerald"
                />
                <KPICard
                    title="Total Pendente"
                    value="R$ 32.250"
                    icon={Clock}
                    trend="-5%"
                    trendUp={true}
                    color="amber"
                />
                <KPICard
                    title="Total Conciliado"
                    value="R$ 1.284.400"
                    icon={CheckCircle2}
                    trend="+8%"
                    trendUp={true}
                    color="sky"
                />
                <KPICard
                    title="Divergências"
                    value="R$ 4.500"
                    icon={AlertTriangle}
                    trend="+2%"
                    trendUp={false}
                    color="red"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cash Flow Chart */}
                <div className="lg:col-span-2 bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-700">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-slate-100">Fluxo de Caixa (30 dias)</h3>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span> Realizado
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-slate-600"></span> Previsto
                            </span>
                        </div>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorCurr" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(value) => `R$${value / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }}
                                    itemStyle={{ color: '#f8fafc', fontSize: '12px', fontWeight: 500 }}
                                    labelStyle={{ display: 'none' }}
                                />
                                <Area type="monotone" dataKey="prev" stroke="#475569" strokeWidth={2} fillOpacity={1} fill="url(#colorPrev)" />
                                <Area type="monotone" dataKey="curr" stroke="#dc2626" strokeWidth={3} fillOpacity={1} fill="url(#colorCurr)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Payment Methods Chart */}
                <div className="bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-700">
                    <h3 className="text-lg font-bold text-slate-100 mb-6">Meios de Pagamento</h3>
                    <div className="h-64 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={paymentData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    strokeOpacity={0}
                                >
                                    {paymentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    iconType="circle"
                                    formatter={(value) => <span className="text-xs text-slate-400 ml-1">{value}</span>}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-2xl font-bold text-slate-100">12k</span>
                            <p className="text-xs text-slate-500">Transações</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="bg-slate-800 rounded-2xl shadow-sm border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-100">Transações Recentes</h3>
                    <button className="text-sm text-red-500 font-medium hover:text-red-400">Ver todas</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-900/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Data</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Loja</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Valor</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {[
                                { id: '#2039', date: 'Hoje, 14:30', store: 'Loja 01 - Centro', amount: 'R$ 1.250,00', status: 'Pago', statusColor: 'bg-emerald-500/10 text-emerald-500' },
                                { id: '#2038', date: 'Hoje, 14:15', store: 'Loja 03 - Shopping', amount: 'R$ 890,50', status: 'Pendente', statusColor: 'bg-amber-500/10 text-amber-500' },
                                { id: '#2037', date: 'Hoje, 13:45', store: 'Loja 02 - Norte', amount: 'R$ 2.400,00', status: 'Erro', statusColor: 'bg-red-500/10 text-red-500' },
                                { id: '#2036', date: 'Hoje, 13:20', store: 'Loja 01 - Centro', amount: 'R$ 150,00', status: 'Pago', statusColor: 'bg-emerald-500/10 text-emerald-500' },
                                { id: '#2035', date: 'Hoje, 12:55', store: 'Loja 05 - Sul', amount: 'R$ 3.100,00', status: 'Pago', statusColor: 'bg-emerald-500/10 text-emerald-500' },
                                { id: '#2034', date: 'Hoje, 12:40', store: 'Loja 10 - Matriz', amount: 'R$ 5.230,00', status: 'Pago', statusColor: 'bg-emerald-500/10 text-emerald-500' },
                            ].map((tx) => (
                                <tr key={tx.id} className="hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-100">{tx.id}</td>
                                    <td className="px-6 py-4 text-sm text-slate-400">{tx.date}</td>
                                    <td className="px-6 py-4 text-sm text-slate-400">{tx.store}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-100">{tx.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.statusColor}`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-500 hover:text-slate-300">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
