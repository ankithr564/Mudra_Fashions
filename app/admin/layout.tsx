'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, FolderTree, Users, FileCheck, ShoppingCart, FileText, Tag, Boxes, Settings, ArrowLeft, Crown } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const adminLinks = [
    { name: 'Dashboard Overview', href: '/admin', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Products', href: '/admin/products', icon: <Package className="w-4 h-4" /> },
    { name: 'Categories', href: '/admin/categories', icon: <FolderTree className="w-4 h-4" /> },
    { name: 'Customers', href: '/admin/customers', icon: <Users className="w-4 h-4" /> },
    { name: 'Wholesale Requests', href: '/admin/wholesale-applications', icon: <FileCheck className="w-4 h-4" /> },
    { name: 'Orders', href: '/admin/orders', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'Quotations', href: '/admin/quotations', icon: <FileText className="w-4 h-4" /> },
    { name: 'Pricing', href: '/admin/pricing', icon: <Tag className="w-4 h-4" /> },
    { name: 'Inventory Alerts', href: '/admin/inventory', icon: <Boxes className="w-4 h-4" /> },
    { name: 'Settings', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#F8FAFC] text-neutral-900 min-h-screen font-sans flex flex-col md:flex-row">
      {/* Clean Light Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-neutral-200 p-5 flex-shrink-0 space-y-6 flex flex-col justify-between shadow-sm">
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

      {/* Main View Area */}
      <main className="flex-1 p-6 md:p-8 max-w-7xl overflow-x-hidden">{children}</main>
    </div>
  );
}
