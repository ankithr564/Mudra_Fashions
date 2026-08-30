'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Users,
  FileCheck,
  ShoppingCart,
  FileText,
  Tag,
  Boxes,
  Settings,
  ArrowLeft,
  Crown,
  Menu,
  X,
  Store,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAdminMobileOpen, setIsAdminMobileOpen] = useState(false);

  const adminLinks = [
    { name: 'Dashboard Overview', href: '/admin', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Products Catalog', href: '/admin/products', icon: <Package className="w-4 h-4" /> },
    { name: 'Categories & Filters', href: '/admin/categories', icon: <FolderTree className="w-4 h-4" /> },
    { name: 'Customer Directory', href: '/admin/customers', icon: <Users className="w-4 h-4" /> },
    { name: 'Wholesale B2B Requests', href: '/admin/wholesale-applications', icon: <FileCheck className="w-4 h-4" /> },
    { name: 'Customer Orders', href: '/admin/orders', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'B2B Quotations', href: '/admin/quotations', icon: <FileText className="w-4 h-4" /> },
    { name: 'Pricing Tiers', href: '/admin/pricing', icon: <Tag className="w-4 h-4" /> },
    { name: 'Inventory & Stock Alerts', href: '/admin/inventory', icon: <Boxes className="w-4 h-4" /> },
    { name: 'Admin Settings', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
  ];

  const currentPage = adminLinks.find((l) => l.href === pathname) || adminLinks[0];

  return (
    <div className="bg-[#F8FAFC] text-neutral-900 min-h-screen font-sans flex flex-col md:flex-row">
      {/* 1. SEGREGATED MOBILE ADMIN TOP HEADER (Shown only on small screens < md) */}
      <header className="md:hidden sticky top-0 z-40 bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsAdminMobileOpen(true)}
            className="p-2 text-neutral-700 hover:text-[#D9234B] hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Open Admin Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D9234B] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9234B]">Mudra Admin</span>
            </div>
            <h2 className="font-serif font-bold text-sm text-neutral-900 truncate max-w-[220px] sm:max-w-none">
              {currentPage.name}
            </h2>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center space-x-1 py-1.5 px-3 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-md hover:bg-neutral-200 transition-colors"
          title="Return to Customer Storefront"
        >
          <Store className="w-3.5 h-3.5 text-[#D9234B]" />
          <span>Exit</span>
        </Link>
      </header>

      {/* 2. SEGREGATED MOBILE ADMIN DRAWER MENU */}
      <AnimatePresence>
        {isAdminMobileOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdminMobileOpen(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-[85%] max-w-sm h-full bg-white text-neutral-900 shadow-2xl flex flex-col justify-between z-50"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-neutral-200 bg-[#FAF9F6] flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#D9234B] text-white flex items-center justify-center font-bold text-base shadow-sm">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-neutral-900">Mudra Admin Panel</h3>
                    <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">
                      Enterprise Management Console
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsAdminMobileOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation List */}
              <div className="flex-1 overflow-y-auto py-3 px-4 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2 px-2 pt-1">
                  Admin Modules &amp; Reports
                </span>

                {adminLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsAdminMobileOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-[#D9234B] text-white font-bold shadow-md'
                          : 'text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={isActive ? 'text-white' : 'text-[#D9234B]'}>{link.icon}</span>
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-neutral-200 bg-[#FAF9F6] space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsAdminMobileOpen(false)}
                  className="w-full py-3 px-4 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-md text-center flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Exit Admin to Storefront</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. DESKTOP SIDEBAR (Hidden on mobile < md, shown on desktop >= md) */}
      <aside className="hidden md:flex w-64 bg-white border-r border-neutral-200 p-5 flex-shrink-0 space-y-6 flex-col justify-between shadow-sm min-h-screen">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D9234B] text-white flex items-center justify-center font-bold text-base shadow-sm">
                M
              </div>
              <div>
                <span className="font-bold text-sm text-neutral-900 block">Mudra Admin</span>
                <span className="text-[10px] text-neutral-500 font-medium">Control Panel</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-xs font-medium">
            {adminLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#D9234B] text-white font-bold shadow-sm'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-neutral-500'}>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Back to Website */}
        <div className="pt-4 border-t border-neutral-200 space-y-3">
          <Link
            href="/"
            className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors"
          >
            <span className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 text-[#D9234B]" />
              <span>Back to Storefront</span>
            </span>
          </Link>
        </div>
      </aside>

      {/* 4. MAIN VIEW AREA */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl overflow-x-hidden">{children}</main>
    </div>
  );
}
