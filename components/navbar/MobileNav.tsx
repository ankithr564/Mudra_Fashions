'use client';

import React from 'react';
import Link from 'next/link';
import { MudraLogo } from '@/components/brand/MudraLogo';
import { useRole } from '@/context/RoleContext';
import { X, Building2, User, Crown, ChevronRight, LogIn, UserPlus, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  const { role, user } = useRole();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden bg-black/60 backdrop-blur-md lg:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Sliding Panel */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-[85%] max-w-sm h-full bg-white text-neutral-900 shadow-2xl flex flex-col justify-between z-[101]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-white">
            <MudraLogo size="sm" />
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* User Account Quick Banner */}
          <div className="p-4 bg-white border-b border-neutral-200 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">Logged in as:</span>
              <span className="font-bold text-neutral-900 flex items-center space-x-1.5 truncate max-w-[150px]">
                {role === 'admin' && <Crown className="w-3.5 h-3.5 text-[#D9234B]" />}
                <span className="truncate">{user.name}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <Link
                href="/login"
                onClick={onClose}
                className="py-2.5 px-3 bg-[#D9234B] text-white rounded-md text-center flex items-center justify-center space-x-1.5 hover:bg-[#9E1B32] transition-all shadow-sm"
              >
                <LogIn className="w-4 h-4 text-white" />
                <span className="text-white font-bold">Sign In</span>
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="py-2.5 px-3 bg-neutral-900 text-white rounded-md text-center flex items-center justify-center space-x-1.5 hover:bg-neutral-800 transition-all shadow-sm"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span className="text-white font-bold">Register</span>
              </Link>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="flex-1 overflow-y-auto py-3 px-5 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2 pt-1">
              Explore Collections
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-3 border-b border-neutral-100 text-sm font-serif font-bold tracking-wide text-neutral-900 hover:text-[#D9234B] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </Link>
            ))}

            {/* Quick Portals & Options */}
            <div className="pt-5 pb-4 space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2">
                User Account &amp; Portals
              </span>

              <Link
                href="/account"
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-md hover:bg-neutral-100 text-xs font-semibold text-neutral-800 transition-colors"
              >
                <div className="flex items-center space-x-2.5">
                  <User className="w-4 h-4 text-[#D9234B]" />
                  <span>My Account &amp; Orders</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </Link>

              <Link
                href="/wholesale/dashboard"
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-md hover:bg-neutral-100 text-xs font-semibold text-neutral-800 transition-colors"
              >
                <div className="flex items-center space-x-2.5">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>Wholesale B2B Dashboard</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              </Link>

              {role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-md bg-rose-50 text-xs font-bold text-[#D9234B] hover:bg-rose-100 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <Crown className="w-4 h-4 text-[#D9234B]" />
                    <span>Admin Panel</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#D9234B]" />
                </Link>
              )}
            </div>
          </div>

          {/* Bottom Wholesale CTA */}
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-white">
            <Link
              href="/wholesale/apply"
              onClick={onClose}
              className="w-full py-3 px-4 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider rounded-md text-center flex items-center justify-center space-x-2 hover:bg-[#9E1B32] transition-colors shadow-md"
            >
              <Building2 className="w-4 h-4" />
              <span>Apply for Wholesale Partner</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
