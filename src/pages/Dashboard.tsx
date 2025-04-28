
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from '@/components/dashboard/AppSidebar';
import WalletSummary from '@/components/dashboard/WalletSummary';
import ActiveSavings from '@/components/dashboard/ActiveSavings';
import ActionButtons from '@/components/dashboard/ActionButtons';
import Notifications from '@/components/dashboard/Notifications';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from '@/components/Logo';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="px-4 py-3 border-b flex items-center justify-between bg-white dark:bg-gray-900 shadow-sm">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Logo showText={false} size="sm" />
              <span className="font-semibold text-lg hidden sm:inline">Épargne Communautaire</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-full w-9 h-9 flex items-center justify-center hover:bg-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
          
          <div className="p-4 md:p-6 flex-1 overflow-y-auto bg-secondary/20">
            <div className="max-w-5xl mx-auto space-y-6">
              <h1 className="text-2xl font-bold">Bienvenue, John</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-7 space-y-6">
                  <WalletSummary />
                  <ActionButtons />
                  <ActiveSavings />
                </div>
                <div className="md:col-span-5">
                  <Notifications />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
