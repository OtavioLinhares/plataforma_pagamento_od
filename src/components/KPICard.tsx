import React from 'react';
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from 'lucide-react';

interface KPICardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
    color: 'sky' | 'emerald' | 'amber' | 'rose' | 'red';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon: Icon, trend, trendUp, color }) => {
    const colorClasses = {
        sky: 'bg-sky-500/10 text-sky-500',
        emerald: 'bg-emerald-500/10 text-emerald-500',
        amber: 'bg-amber-500/10 text-amber-500',
        rose: 'bg-rose-500/10 text-rose-500',
        red: 'bg-red-500/10 text-red-500',
    };

    return (
        <div className="bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-700 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-slate-100">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                    <Icon size={24} />
                </div>
            </div>

            {trend && (
                <div className="flex items-center gap-1 text-sm font-medium">
                    {trendUp ? (
                        <ArrowUpRight size={16} className="text-emerald-500" />
                    ) : (
                        <ArrowDownRight size={16} className="text-rose-500" />
                    )}
                    <span className={trendUp ? 'text-emerald-500' : 'text-rose-500'}>
                        {trend}
                    </span>
                    <span className="text-slate-500 font-normal ml-1">vs mês anterior</span>
                </div>
            )}
        </div>
    );
};

export default KPICard;
