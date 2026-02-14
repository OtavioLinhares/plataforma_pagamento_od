import React from 'react';
import { AlertCircle, RotateCcw, ShieldAlert, FileWarning } from 'lucide-react';

const PostSales: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">Gestão de Pós-Venda</h2>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Total Estornado</p>
                            <h3 className="text-2xl font-bold text-slate-100 mt-1">R$ 1.250,00</h3>
                        </div>
                        <div className="p-3 bg-slate-700/50 rounded-xl">
                            <RotateCcw className="text-slate-100" size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Chargebacks (Disputas)</p>
                            <h3 className="text-2xl font-bold text-red-500 mt-1">R$ 450,00</h3>
                        </div>
                        <div className="p-3 bg-red-500/10 rounded-xl">
                            <ShieldAlert className="text-red-500" size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Cancelamentos</p>
                            <h3 className="text-2xl font-bold text-amber-500 mt-1">5 Pedidos</h3>
                        </div>
                        <div className="p-3 bg-amber-500/10 rounded-xl">
                            <FileWarning className="text-amber-500" size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Taxa de Problemas</p>
                            <h3 className="text-2xl font-bold text-emerald-500 mt-1">0.4%</h3>
                        </div>
                        <div className="p-3 bg-emerald-500/10 rounded-xl">
                            <AlertCircle className="text-emerald-500" size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Abaixo da meta de 1%</p>
                </div>
            </div>

            {/* Disputes Table */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <ShieldAlert size={20} className="text-red-500" />
                        Disputas em Aberto
                    </h3>
                </div>
                <table className="w-full text-sm">
                    <thead className="bg-slate-900/50 text-slate-400 font-semibold uppercase">
                        <tr>
                            <th className="px-6 py-4 text-left">Data</th>
                            <th className="px-6 py-4 text-left">Pedido</th>
                            <th className="px-6 py-4 text-left">Motivo</th>
                            <th className="px-6 py-4 text-left">Loja</th>
                            <th className="px-6 py-4 text-left">Valor</th>
                            <th className="px-6 py-4 text-left">Prazo</th>
                            <th className="px-6 py-4 text-right">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">12/02/2026</td>
                            <td className="px-6 py-4 text-slate-200 font-medium">#2010</td>
                            <td className="px-6 py-4 text-slate-400">Fraude suspeita</td>
                            <td className="px-6 py-4 text-slate-400">Loja 04</td>
                            <td className="px-6 py-4 text-slate-100 font-bold">R$ 250,00</td>
                            <td className="px-6 py-4 text-red-400 font-bold">2 dias</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-slate-100 bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">Enviar Defesa</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4 text-slate-300">10/02/2026</td>
                            <td className="px-6 py-4 text-slate-200 font-medium">#1988</td>
                            <td className="px-6 py-4 text-slate-400">Produto não recebido</td>
                            <td className="px-6 py-4 text-slate-400">Loja 01</td>
                            <td className="px-6 py-4 text-slate-100 font-bold">R$ 1.200,00</td>
                            <td className="px-6 py-4 text-amber-500 font-bold">5 dias</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-slate-300 hover:text-white border border-slate-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">Anexar Comp.</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostSales;
