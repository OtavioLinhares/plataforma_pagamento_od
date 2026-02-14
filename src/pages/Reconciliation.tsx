import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, ArrowRightLeft, Search } from 'lucide-react';

const Reconciliation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'sales' | 'bank'>('sales');

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-100">Conciliação</h2>
                <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
                    <button
                        onClick={() => setActiveTab('sales')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'sales' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                        Conciliação de Vendas
                    </button>
                    <button
                        onClick={() => setActiveTab('bank')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'bank' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                        Conciliação Bancária
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Total Conciliado</p>
                            <h3 className="text-2xl font-bold text-emerald-500 mt-1">98.5%</h3>
                        </div>
                        <div className="p-3 bg-emerald-500/10 rounded-xl">
                            <CheckCircle2 className="text-emerald-500" size={24} />
                        </div>
                    </div>
                    <div className="mt-4 w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Divergências</p>
                            <h3 className="text-2xl font-bold text-red-500 mt-1">12</h3>
                        </div>
                        <div className="p-3 bg-red-500/10 rounded-xl">
                            <AlertTriangle className="text-red-500" size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">Ação necessária em 5 itens</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Em Processamento</p>
                            <h3 className="text-2xl font-bold text-amber-500 mt-1">45</h3>
                        </div>
                        <div className="p-3 bg-amber-500/10 rounded-xl">
                            <ArrowRightLeft className="text-amber-500" size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">Aguardando arquivo da adquirente</p>
                </div>
            </div>

            {/* Filters Area */}
            <div className="flex gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por NSU, ID ou Valor..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    />
                </div>
                <button className="px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 border border-slate-600 transition-colors">
                    Exportar
                </button>
            </div>

            {/* Discrepancy List */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <AlertTriangle size={20} className="text-red-500" />
                        Divergências Pendentes
                    </h3>
                </div>
                <table className="w-full text-sm">
                    <thead className="bg-slate-900/50 text-slate-400 font-semibold uppercase">
                        <tr>
                            <th className="px-6 py-4 text-left">Data</th>
                            <th className="px-6 py-4 text-left">Tipo</th>
                            <th className="px-6 py-4 text-left">Descrição</th>
                            <th className="px-6 py-4 text-left">Valor ERP</th>
                            <th className="px-6 py-4 text-left">Valor Banco</th>
                            <th className="px-6 py-4 text-right">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">14/02/2026</td>
                            <td className="px-6 py-4"><span className="px-2 py-1 bg-red-500/10 text-red-500 rounded text-xs font-bold">Taxa Divergente</span></td>
                            <td className="px-6 py-4 text-slate-200">Stone - Crédito Visa</td>
                            <td className="px-6 py-4 text-slate-400">R$ 100,00</td>
                            <td className="px-6 py-4 text-slate-100 font-bold">R$ 98,50</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-red-500 hover:text-red-400 font-medium text-sm border border-red-500/30 px-3 py-1 rounded hover:bg-red-500/10 transition-colors">Resolver</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">13/02/2026</td>
                            <td className="px-6 py-4"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 rounded text-xs font-bold">Não Encontrado</span></td>
                            <td className="px-6 py-4 text-slate-200">Pix - ID 998877</td>
                            <td className="px-6 py-4 text-slate-400">R$ 50,00</td>
                            <td className="px-6 py-4 text-slate-500 italic">--</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-amber-500 hover:text-amber-400 font-medium text-sm border border-amber-500/30 px-3 py-1 rounded hover:bg-amber-500/10 transition-colors">Conciliar Manual</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reconciliation;
