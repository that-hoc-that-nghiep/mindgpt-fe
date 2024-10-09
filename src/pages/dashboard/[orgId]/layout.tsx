import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../_compoments/header";
import Sidebar from "../_compoments/sidebar";

export default function DashboardLayout() {
  const [showSettingsLinks, setShowSettingsLinks] = useState(false);

  const toggleSettingsLinks = () => {
    setShowSettingsLinks(!showSettingsLinks);
  };

  return (
    <div className="fixed inset-0 flex">
      <div className="hidden md:block w-[240px] border-r border-gray-200">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-[60px] border-b border-gray-200">
          <Header />
        </div>
        <main className="flex-1 overflow-auto bg-background">
          <div className="max-w-7xl mx-auto p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}