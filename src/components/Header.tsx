import React from 'react';
import { Bell, Search } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold text-gray-800">Visão Geral</h1>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar pedidos, clientes..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent w-64"
                    />
                </div>

                <button className="relative p-2 text-gray-500 hover:text-sky-600 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-gray-900">Admin Silva</p>
                        <p className="text-xs text-gray-500">Diretor Financeiro</p>
                    </div>
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-bold border border-sky-200">
                        AS
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
