import React, { useState } from 'react';
import { Archive, Plus, Minus, AlertCircle, Save } from 'lucide-react';

const CashManagement: React.FC = () => {
    const [selectedStore, setSelectedStore] = useState('Loja 01 - Centro');
    const stores = Array.from({ length: 10 }, (_, i) => `Loja ${String(i + 1).padStart(2, '0')} - ${['Centro', 'Norte', 'Shopping', 'Sul', 'Leste'][i % 5]}`);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-100">Controle de Caixa</h2>
                <select
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 w-64"
                >
                    {stores.map(store => (
                        <option key={store} value={store}>{store}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Summary Cards */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-sm font-medium text-slate-400">Saldo Inicial</p>
                        <h3 className="text-2xl font-bold text-slate-100 mt-1">R$ 500,00</h3>
                        <p className="text-xs text-slate-500 mt-2">Aberto às 08:00</p>
                    </div>
                    <Archive className="absolute right-4 top-4 text-slate-700/50" size={48} />
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-sm font-medium text-slate-400">Entradas (Dinheiro)</p>
                        <h3 className="text-2xl font-bold text-emerald-500 mt-1">+ R$ 1.250,00</h3>
                        <p className="text-xs text-slate-500 mt-2">15 Vendas</p>
                    </div>
                    <Plus className="absolute right-4 top-4 text-emerald-500/20" size={48} />
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-sm font-medium text-slate-400">Saídas / Sangrias</p>
                        <h3 className="text-2xl font-bold text-red-500 mt-1">- R$ 300,00</h3>
                        <p className="text-xs text-slate-500 mt-2">2 Operações</p>
                    </div>
                    <Minus className="absolute right-4 top-4 text-red-500/20" size={48} />
                </div>
            </div>

            {/* Current Balance & Actions */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                        <p className="text-sm text-slate-400 mb-1">Saldo Atual em Caixa</p>
                        <p className="text-3xl font-bold text-slate-100">R$ 1.450,00</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                            <AlertCircle size={16} />
                            <span>Diferença de -R$ 10,00 detectada</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-red-500/20">
                        <Minus size={20} />
                        Realizar Sangria
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-emerald-500/20">
                        <Save size={20} />
                        Fechar Caixa
                    </button>
                </div>
            </div>

            {/* Daily Log */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                    <h3 className="text-lg font-bold text-slate-100">Movimentações do Dia</h3>
                </div>
                <table className="w-full text-sm">
                    <thead className="bg-slate-900/50 text-slate-400 font-semibold uppercase">
                        <tr>
                            <th className="px-6 py-4 text-left">Hora</th>
                            <th className="px-6 py-4 text-left">Tipo</th>
                            <th className="px-6 py-4 text-left">Descrição</th>
                            <th className="px-6 py-4 text-left">Responsável</th>
                            <th className="px-6 py-4 text-right">Valor</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-400">14:15</td>
                            <td className="px-6 py-4"><span className="text-emerald-500 font-medium">Venda #2035</span></td>
                            <td className="px-6 py-4 text-slate-200">Pagamento em Dinheiro</td>
                            <td className="px-6 py-4 text-slate-400">Maria S.</td>
                            <td className="px-6 py-4 text-right text-emerald-500 font-bold">+ R$ 150,00</td>
                        </tr>
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-400">13:00</td>
                            <td className="px-6 py-4"><span className="text-red-500 font-medium">Sangria</span></td>
                            <td className="px-6 py-4 text-slate-200">Transporte de Valores</td>
                            <td className="px-6 py-4 text-slate-400">Gerente Carlos</td>
                            <td className="px-6 py-4 text-right text-red-500 font-bold">- R$ 300,00</td>
                        </tr>
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-400">08:00</td>
                            <td className="px-6 py-4"><span className="text-slate-100 font-medium">Abertura</span></td>
                            <td className="px-6 py-4 text-slate-200">Saldo Inicial</td>
                            <td className="px-6 py-4 text-slate-400">Gerente Carlos</td>
                            <td className="px-6 py-4 text-right text-slate-100 font-bold">R$ 500,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CashManagement;
