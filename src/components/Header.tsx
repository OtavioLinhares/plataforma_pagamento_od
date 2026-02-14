import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold text-slate-100">Visão Geral</h1>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar pedidos, clientes..."
                        className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all w-64 placeholder-slate-500"
                    />
                </div>

                <button className="relative p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-slate-200">Admin Silva</p>
                        <p className="text-xs text-slate-500">Diretor Financeiro</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-red-500 font-bold border border-slate-700">
                        AS
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
