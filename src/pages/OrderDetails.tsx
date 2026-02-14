import React from 'react';
import { ArrowLeft, User, CreditCard, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderDetails: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link to="/orders" className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                        Pedido #2045
                        <span className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-500 font-medium border border-emerald-500/20">
                            Pago
                        </span>
                    </h2>
                    <p className="text-slate-400 text-sm">Realizado em 14 Fev 2026 às 14:30 • Loja 03 - Shopping Plaza</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Customer Info */}
                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                            <User size={20} className="text-red-500" />
                            Dados do Cliente
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs uppercase text-slate-500 font-semibold">Nome Completo</label>
                                <p className="text-slate-200 font-medium">Maria Oliveira da Silva</p>
                            </div>
                            <div>
                                <label className="text-xs uppercase text-slate-500 font-semibold">CPF</label>
                                <p className="text-slate-200 font-medium">123.456.789-00</p>
                            </div>
                            <div>
                                <label className="text-xs uppercase text-slate-500 font-semibold">E-mail</label>
                                <p className="text-slate-200 font-medium">maria.silva@email.com</p>
                            </div>
                            <div>
                                <label className="text-xs uppercase text-slate-500 font-semibold">Telefone</label>
                                <p className="text-slate-200 font-medium">(11) 98765-4321</p>
                            </div>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 className="text-lg font-bold text-slate-100 mb-4">Itens do Pedido</h3>
                        <table className="w-full text-sm">
                            <thead className="bg-slate-900/50 text-slate-400 font-semibold uppercase">
                                <tr>
                                    <th className="px-4 py-3 text-left">Produto</th>
                                    <th className="px-4 py-3 text-center">Qtd</th>
                                    <th className="px-4 py-3 text-right">Unitário</th>
                                    <th className="px-4 py-3 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="px-4 py-3 text-slate-200">Armação Ray-Ban Aviator</td>
                                    <td className="px-4 py-3 text-center text-slate-300">1</td>
                                    <td className="px-4 py-3 text-right text-slate-300">R$ 850,00</td>
                                    <td className="px-4 py-3 text-right text-slate-100 font-medium">R$ 850,00</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-slate-200">Lentes Varilux Comfort</td>
                                    <td className="px-4 py-3 text-center text-slate-300">1</td>
                                    <td className="px-4 py-3 text-right text-slate-300">R$ 1.200,00</td>
                                    <td className="px-4 py-3 text-right text-slate-100 font-medium">R$ 1.200,00</td>
                                </tr>
                            </tbody>
                            <tfoot className="border-t border-slate-700">
                                <tr>
                                    <td colSpan={3} className="px-4 py-3 text-right text-slate-400 font-medium">Subtotal</td>
                                    <td className="px-4 py-3 text-right text-slate-100">R$ 2.050,00</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="px-4 py-3 text-right text-slate-400 font-medium">Desconto</td>
                                    <td className="px-4 py-3 text-right text-emerald-500">- R$ 50,00</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="px-4 py-3 text-right text-slate-100 font-bold text-lg">Total</td>
                                    <td className="px-4 py-3 text-right text-red-500 font-bold text-lg">R$ 2.000,00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Sidebar Status & Payment */}
                <div className="space-y-6">
                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                            <CreditCard size={20} className="text-red-500" />
                            Pagamentos
                        </h3>

                        <div className="space-y-4">
                            <div className="relative pl-6 border-l-2 border-emerald-500 pb-4 last:pb-0">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-900 border-2 border-emerald-500 flex items-center justify-center">
                                    <CheckCircle2 size={10} className="text-emerald-500" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-slate-200 font-medium">Cartão de Crédito (Visa)</p>
                                        <p className="text-xs text-slate-500">Autorizado • NSU: 987236</p>
                                    </div>
                                    <span className="text-slate-100 font-bold">R$ 1.000,00</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">14 Fev 2026 - 14:32</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-emerald-500">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-900 border-2 border-emerald-500 flex items-center justify-center">
                                    <CheckCircle2 size={10} className="text-emerald-500" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-slate-200 font-medium">Pix (QR Code)</p>
                                        <p className="text-xs text-slate-500">Liquidado • ID: e89...</p>
                                    </div>
                                    <span className="text-slate-100 font-bold">R$ 1.000,00</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">14 Fev 2026 - 14:35</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                        <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                            <Clock size={20} className="text-amber-500" />
                            Linha do Tempo
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[60px] text-xs text-slate-500 text-right">14:30</div>
                                <div>
                                    <p className="text-sm text-slate-200 font-medium">Pedido Criado</p>
                                    <p className="text-xs text-slate-500">Vendedor: João Silva</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[60px] text-xs text-slate-500 text-right">14:32</div>
                                <div>
                                    <p className="text-sm text-slate-200 font-medium">Pagamento 1 Autorizado</p>
                                    <p className="text-xs text-slate-500">Visa Crédito (R$ 1.000,00)</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[60px] text-xs text-slate-500 text-right">14:35</div>
                                <div>
                                    <p className="text-sm text-slate-200 font-medium">Pagamento 2 Confirmado</p>
                                    <p className="text-xs text-slate-500">Pix (R$ 1.000,00)</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="mt-1 min-w-[60px] text-xs text-slate-500 text-right">14:36</div>
                                <div>
                                    <p className="text-sm text-emerald-400 font-bold">Pedido Finalizado</p>
                                    <p className="text-xs text-slate-500">Status alterado para PAGO</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
