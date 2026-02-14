import React, { useState } from 'react';
import { Search, Filter, Eye, MoreVertical } from 'lucide-react';

const Orders: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStore, setSelectedStore] = useState('Todas');
    const [selectedStatus, setSelectedStatus] = useState('Todos');

    const stores = Array.from({ length: 10 }, (_, i) => `Loja ${String(i + 1).padStart(2, '0')}`);

    const orders = Array.from({ length: 15 }, (_, i) => ({
        id: `#20${40 + i}`,
        customer: `Cliente ${i + 1}`,
        store: `Loja ${String((i % 10) + 1).padStart(2, '0')}`,
        date: '14/02/2026',
        amount: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`,
        status: i % 3 === 0 ? 'Pago' : i % 3 === 1 ? 'Pendente' : 'Cancelado',
        method: i % 2 === 0 ? 'Cartão de Crédito' : 'Pix'
    }));

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pago': return 'bg-emerald-500/10 text-emerald-500';
            case 'Pendente': return 'bg-amber-500/10 text-amber-500';
            case 'Cancelado': return 'bg-red-500/10 text-red-500';
            default: return 'bg-slate-700 text-slate-300';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-100">Pedidos</h2>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                        <Filter size={18} />
                        Filtros
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        Exportar Relatório
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="md:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por cliente ou ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                    />
                </div>
                <select
                    className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:ring-red-500/50"
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                >
                    <option value="Todas">Todas as Lojas</option>
                    {stores.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <select
                    className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:ring-red-500/50"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                >
                    <option value="Todos">Todos os Status</option>
                    <option value="Pago">Pago</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Cancelado">Cancelado</option>
                </select>
            </div>

            {/* Orders Table */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-900/50 text-xs uppercase text-slate-400 font-semibold">
                            <tr>
                                <th className="px-6 py-4 text-left">Pedido</th>
                                <th className="px-6 py-4 text-left">Cliente</th>
                                <th className="px-6 py-4 text-left">Loja</th>
                                <th className="px-6 py-4 text-left">Data</th>
                                <th className="px-6 py-4 text-left">Valor</th>
                                <th className="px-6 py-4 text-left">Pagamento</th>
                                <th className="px-6 py-4 text-left">Status</th>
                                <th className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-700/50 transition-colors text-sm">
                                    <td className="px-6 py-4 font-medium text-slate-100">{order.id}</td>
                                    <td className="px-6 py-4 text-slate-300">{order.customer}</td>
                                    <td className="px-6 py-4 text-slate-400">{order.store}</td>
                                    <td className="px-6 py-4 text-slate-400">{order.date}</td>
                                    <td className="px-6 py-4 font-semibold text-slate-200">{order.amount}</td>
                                    <td className="px-6 py-4 text-slate-300">{order.method}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Placeholder */}
                <div className="px-6 py-4 border-t border-slate-700 flex justify-between items-center text-sm text-slate-400">
                    <span>Mostrando 1-15 de 45 pedidos</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 disabled:opacity-50">Anterior</button>
                        <button className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600">Próxima</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
