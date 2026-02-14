import React from 'react';
import {
    DollarSign,
    Clock,
    CheckCircle2,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical
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

const KPICard = ({ title, value, icon: Icon, trend, color, trendUp }: any) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-4">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                <Icon size={24} />
            </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
            {trendUp ? (
                <ArrowUpRight size={16} className="text-emerald-500" />
            ) : (
                <ArrowDownRight size={16} className="text-rose-500" />
            )}
            <span className={trendUp ? 'text-emerald-500 font-medium' : 'text-rose-500 font-medium'}>
                {trend}
            </span>
            <span className="text-gray-400">vs mês anterior</span>
        </div>
    </div>
);

const data = [
    { name: '01', prev: 4000, curr: 2400 },
    { name: '05', prev: 3000, curr: 1398 },
    { name: '10', prev: 2000, curr: 9800 },
    { name: '15', prev: 2780, curr: 3908 },
    { name: '20', prev: 1890, curr: 4800 },
    { name: '25', prev: 2390, curr: 3800 },
    { name: '30', prev: 3490, curr: 4300 },
];

const paymentData = [
    { name: 'Pix', value: 400, color: '#0ea5e9' },
    { name: 'Crédito', value: 300, color: '#10b981' },
    { name: 'Crediário', value: 200, color: '#8b5cf6' },
    { name: 'Dinheiro', value: 100, color: '#f59e0b' },
];

const Dashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard
                    title="Total Recebido Hoje"
                    value="R$ 14.590"
                    icon={DollarSign}
                    trend="+12%"
                    trendUp={true}
                    color="bg-sky-50 text-sky-600"
                />
                <KPICard
                    title="Total Pendente"
                    value="R$ 3.250"
                    icon={Clock}
                    trend="-5%"
                    trendUp={true}
                    color="bg-amber-50 text-amber-600"
                />
                <KPICard
                    title="Total Conciliado"
                    value="R$ 128.400"
                    icon={CheckCircle2}
                    trend="+8%"
                    trendUp={true}
                    color="bg-emerald-50 text-emerald-600"
                />
                <KPICard
                    title="Divergências"
                    value="R$ 450"
                    icon={AlertTriangle}
                    trend="+2%"
                    trendUp={false}
                    color="bg-rose-50 text-rose-600"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cash Flow Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Fluxo de Caixa (30 dias)</h3>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-sky-500"></span> Realizado
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span> Previsto
                            </span>
                        </div>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorCurr" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(value) => `R$${value / 1000}k`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ color: '#1e293b', fontSize: '12px', fontWeight: 500 }}
                                    labelStyle={{ display: 'none' }}
                                />
                                <Area type="monotone" dataKey="prev" stroke="#cbd5e1" strokeWidth={2} fillOpacity={1} fill="url(#colorPrev)" />
                                <Area type="monotone" dataKey="curr" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorCurr)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Payment Methods Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Meios de Pagamento</h3>
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
                                >
                                    {paymentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Legend
                                    verticalAlign="bottom"
                                    height={36}
                                    iconType="circle"
                                    formatter={(value) => <span className="text-xs text-gray-600 ml-1">{value}</span>}
                                />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-2xl font-bold text-gray-800">1.2k</span>
                            <p className="text-xs text-gray-500">Transações</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">Transações Recentes</h3>
                    <button className="text-sm text-sky-600 font-medium hover:text-sky-700">Ver todas</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Data</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Loja</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Valor</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { id: '#2039', date: 'Hoje, 14:30', store: 'Loja Centro', amount: 'R$ 1.250,00', status: 'Pago', statusColor: 'bg-emerald-100 text-emerald-700' },
                                { id: '#2038', date: 'Hoje, 14:15', store: 'Shopping Plaza', amount: 'R$ 890,50', status: 'Pendente', statusColor: 'bg-amber-100 text-amber-700' },
                                { id: '#2037', date: 'Hoje, 13:45', store: 'Loja Norte', amount: 'R$ 2.400,00', status: 'Erro', statusColor: 'bg-rose-100 text-rose-700' },
                                { id: '#2036', date: 'Hoje, 13:20', store: 'Loja Centro', amount: 'R$ 150,00', status: 'Pago', statusColor: 'bg-emerald-100 text-emerald-700' },
                                { id: '#2035', date: 'Hoje, 12:55', store: 'Shopping Maia', amount: 'R$ 3.100,00', status: 'Pago', statusColor: 'bg-emerald-100 text-emerald-700' },
                            ].map((tx) => (
                                <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{tx.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{tx.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{tx.store}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{tx.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tx.statusColor}`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
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
