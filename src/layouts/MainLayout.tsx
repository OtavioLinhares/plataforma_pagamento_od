import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
