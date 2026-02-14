import React from 'react';
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ComposedChart,
    Line
} from 'recharts';
import { Calendar, Filter, TrendingUp, TrendingDown } from 'lucide-react';

const data = [
    { name: '15 Fev', entrada: 4000, saida: 2400, saldo: 1600 },
    { name: '16 Fev', entrada: 3000, saida: 1398, saldo: 1602 },
    { name: '17 Fev', entrada: 2000, saida: 9800, saldo: -7800 },
    { name: '18 Fev', entrada: 2780, saida: 3908, saldo: -1128 },
    { name: '19 Fev', entrada: 1890, saida: 4800, saldo: -2910 },
    { name: '20 Fev', entrada: 2390, saida: 3800, saldo: -1410 },
    { name: '21 Fev', entrada: 3490, saida: 4300, saldo: -810 },
];

const CashFlow: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-100">Fluxo de Caixa Projetado</h2>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                        <Calendar size={18} />
                        Próximos 30 Dias
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                        <Filter size={18} />
                        Todas as Lojas
                    </button>
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <p className="text-sm font-medium text-slate-400">Entradas Previstas</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-emerald-500 mt-1">R$ 145.200,00</h3>
                        <TrendingUp size={20} className="text-emerald-500" />
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <p className="text-sm font-medium text-slate-400">Saídas Previstas</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-red-500 mt-1">R$ 89.450,00</h3>
                        <TrendingDown size={20} className="text-red-500" />
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <p className="text-sm font-medium text-slate-400">Saldo Projetado</p>
                    <h3 className="text-2xl font-bold text-slate-100 mt-1">R$ 55.750,00</h3>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-96">
                <h3 className="text-lg font-bold text-slate-100 mb-6">Projeção Diária</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                            itemStyle={{ color: '#f8fafc' }}
                        />
                        <Legend />
                        <Bar dataKey="entrada" name="Entradas" fill="#10b981" barSize={20} radius={[4, 4, 0, 0]} />
                        <Bar dataKey="saida" name="Saídas" fill="#ef4444" barSize={20} radius={[4, 4, 0, 0]} />
                        <Line type="monotone" dataKey="saldo" name="Saldo Líquido" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            {/* Receivables Table */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                    <h3 className="text-lg font-bold text-slate-100">Recebimentos Futuros</h3>
                </div>
                <table className="w-full text-sm">
                    <thead className="bg-slate-900/50 text-slate-400 font-semibold uppercase">
                        <tr>
                            <th className="px-6 py-4 text-left">Data Prevista</th>
                            <th className="px-6 py-4 text-left">Origem</th>
                            <th className="px-6 py-4 text-left">Loja</th>
                            <th className="px-6 py-4 text-left">Parcela</th>
                            <th className="px-6 py-4 text-right">Valor Líquido</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">15/02/2026</td>
                            <td className="px-6 py-4 text-slate-200">Cielo - Crédito Visa</td>
                            <td className="px-6 py-4 text-slate-400">Loja 01</td>
                            <td className="px-6 py-4 text-slate-400">1/3</td>
                            <td className="px-6 py-4 text-right text-emerald-500 font-bold">R$ 4.500,00</td>
                        </tr>
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">15/02/2026</td>
                            <td className="px-6 py-4 text-slate-200">Stone - Crédito Master</td>
                            <td className="px-6 py-4 text-slate-400">Loja 03</td>
                            <td className="px-6 py-4 text-slate-400">2/6</td>
                            <td className="px-6 py-4 text-right text-emerald-500 font-bold">R$ 2.350,00</td>
                        </tr>
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">16/02/2026</td>
                            <td className="px-6 py-4 text-slate-200">GetNet - Débito</td>
                            <td className="px-6 py-4 text-slate-400">Loja 02</td>
                            <td className="px-6 py-4 text-slate-400">Única</td>
                            <td className="px-6 py-4 text-right text-emerald-500 font-bold">R$ 1.200,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CashFlow;
