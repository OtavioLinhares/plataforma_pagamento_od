import React from 'react';
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from 'lucide-react';

interface KPICardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: {
        value: string;
        positive: boolean;
    };
    color: 'sky' | 'emerald' | 'amber' | 'rose';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon: Icon, trend, color }) => {
    const colorClasses = {
        sky: 'bg-sky-50 text-sky-600',
        emerald: 'bg-emerald-50 text-emerald-600',
        amber: 'bg-amber-50 text-amber-600',
        rose: 'bg-rose-50 text-rose-600',
    };

    const trendColor = trend?.positive ? 'text-emerald-600' : 'text-rose-600';
    const TrendIcon = trend?.positive ? ArrowUpRight : ArrowDownRight;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                    <Icon size={24} />
                </div>
            </div>

            {trend && (
                <div className={`flex items-center gap-1 text-sm ${trendColor} font-medium`}>
                    <TrendIcon size={16} />
                    <span>{trend.value}</span>
                    <span className="text-gray-400 font-normal ml-1">vs mês anterior</span>
                </div>
            )}
        </div>
    );
};

export default KPICard;
