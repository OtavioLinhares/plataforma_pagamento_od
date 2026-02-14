import React from 'react';
import { LayoutDashboard, ShoppingCart, FileText, RefreshCw, Archive, Wallet, CreditCard, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center gap-2">
                <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">Ó</div>
                <span className="text-xl font-bold text-sky-900">ÓticaPay</span>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <NavItem to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                <NavItem to="/orders" icon={<ShoppingCart size={20} />} label="Pedidos" />
                <NavItem to="/order-details" icon={<FileText size={20} />} label="Detalhes Pedido" />
                <NavItem to="/reconciliation" icon={<RefreshCw size={20} />} label="Conciliação" />
                <NavItem to="/daily-cash" icon={<Archive size={20} />} label="Caixa / Sangria" />
                <NavItem to="/cash-flow" icon={<Wallet size={20} />} label="Fluxo de Caixa" />
                <NavItem to="/post-sales" icon={<CreditCard size={20} />} label="Pós-Venda" />
            </nav>

            <div className="p-4 border-t border-gray-200">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                    <LogOut size={20} />
                    <span>Sair</span>
                </button>
            </div>
        </aside>
    );
};

interface NavItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'bg-sky-50 text-sky-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
};

export default Sidebar;
