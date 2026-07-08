// src/layout/ClientLayout.jsx

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/client-home/Footer";

export default function ClientLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col h-full relative md:ml-72 lg:ml-72 min-w-0 overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={() => setSidebarOpen(true)} />
        
        {/* Contenu principal : flex-grow permet de pousser le footer vers le bas */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-8 max-w-[1600px] mx-auto w-full text-slate-900 dark:text-slate-100 transition-colors">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}