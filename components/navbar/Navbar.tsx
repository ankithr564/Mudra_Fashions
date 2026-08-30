'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MudraLogo } from '@/components/brand/MudraLogo';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useSearch } from '@/context/SearchContext';
import { useRole } from '@/context/RoleContext';
import { Search, Heart, ShoppingBag, User, Menu, Building2, Crown, ChevronDown, Sparkles, LogOut } from 'lucide-react';
import { MobileNav } from './MobileNav';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { setIsCartOpen, totalItemsCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch } = useSearch();
  const { role, user, setRole } = useRole();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Fabrics', href: '/fabrics' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkTextColor = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    if (isActive) {
      return 'text-[#D9234B] font-bold border-b-2 border-[#D9234B] pb-1';
    }
    return 'text-neutral-800 hover:text-[#D9234B] font-semibold pb-1 transition-colors';
  };

  return (
    <>
      {/* 1. Flowing Right-to-Left Ticker Announcement Bar */}
      <div className="bg-white text-neutral-800 text-[11px] font-semibold py-2 px-4 border-b border-neutral-200 overflow-hidden relative">
        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
          {/* Loop Set 1 */}
          <div className="flex items-center space-x-8">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-neutral-900 uppercase tracking-wider">Official Corporate Apparel &amp; Mill Direct Sourcing</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center space-x-1.5 text-neutral-700">
              <Sparkles className="w-3.5 h-3.5 text-[#D9234B]" />
              <span>Nationwide Express B2B &amp; Retail Freight Shipping</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="font-bold text-[#D9234B]">Official GST Input Tax Credit Invoices</span>
            <span className="text-neutral-300">•</span>
            <span>Tiered Wholesale Discounts Up to 55% OFF</span>
            <span className="text-neutral-300">•</span>
            <span className="font-serif italic text-neutral-600">Premium 80s Giza Cottons &amp; Pure Linen Fabrics</span>
          </div>

          {/* Loop Set 2 (for seamless infinite marquee) */}
          <div className="flex items-center space-x-8">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-neutral-900 uppercase tracking-wider">Official Corporate Apparel &amp; Mill Direct Sourcing</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center space-x-1.5 text-neutral-700">
              <Sparkles className="w-3.5 h-3.5 text-[#D9234B]" />
              <span>Nationwide Express B2B &amp; Retail Freight Shipping</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="font-bold text-[#D9234B]">Official GST Input Tax Credit Invoices</span>
            <span className="text-neutral-300">•</span>
            <span>Tiered Wholesale Discounts Up to 55% OFF</span>
            <span className="text-neutral-300">•</span>
            <span className="font-serif italic text-neutral-600">Premium 80s Giza Cottons &amp; Pure Linen Fabrics</span>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-neutral-900 border-b border-neutral-200 shadow-sm transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2 text-neutral-800 hover:text-[#D9234B] transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <MudraLogo variant="light" size="md" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={linkTextColor(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & CTA Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            {/* Search */}
            <button
              onClick={openSearch}
              className="p-2 text-neutral-800 hover:text-[#D9234B] transition-colors rounded-full hover:bg-neutral-100"
              aria-label="Search"
              title="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-neutral-800 hover:text-[#D9234B] transition-colors rounded-full hover:bg-neutral-100"
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4.5 h-4.5 bg-[#D9234B] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-neutral-800 hover:text-[#D9234B] transition-colors rounded-full hover:bg-neutral-100"
              aria-label="Cart"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute top-0 right-0 w-4.5 h-4.5 bg-[#D9234B] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Account Icon & Sleek Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1.5 py-1.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 rounded-full text-xs font-semibold transition-all shadow-sm"
                aria-label="Account Menu"
              >
                <User className="w-4 h-4 text-[#D9234B]" />
                <span className="hidden sm:inline max-w-[110px] truncate">
                  {role === 'guest' ? 'Sign In' : user.name.split(' ')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
              </button>

              {/* Ultra-Clean Sleek Dropdown */}
              {isUserMenuOpen && (
                <div
                  onMouseLeave={() => setIsUserMenuOpen(false)}
                  className="absolute right-0 top-11 w-72 bg-white border border-neutral-200 shadow-2xl p-4 space-y-3 text-xs z-50 rounded-xl"
                >
                  {/* Header Box */}
                  <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-lg">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9234B] block">
                      {role === 'guest' ? 'Welcome to Mudra' : 'Active Account'}
                    </span>
                    <span className="font-bold text-neutral-900 text-sm block truncate mt-0.5">
                      {role === 'guest' ? 'Sign in or Create Account' : user.name}
                    </span>
                    {role !== 'guest' && (
                      <span className="text-[11px] text-neutral-500 font-medium block capitalize mt-0.5">
                        Tier: {role.replace('_', ' ')}
                      </span>
                    )}

                    {/* Quick Login/Register Buttons inside header if Guest */}
                    {role === 'guest' && (
                      <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-neutral-200/60">
                        <Link
                          href="/login"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="py-2 px-3 bg-[#D9234B] text-white text-xs font-bold text-center rounded hover:bg-[#9E1B32] transition-colors shadow-sm"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/register"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="py-2 px-3 bg-neutral-900 text-white text-xs font-bold text-center rounded hover:bg-neutral-800 transition-colors shadow-sm"
                        >
                          Register
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Clean Links */}
                  <div className="space-y-1">
                    <Link
                      href="/account"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 hover:bg-neutral-100 font-semibold text-neutral-800 rounded-md transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <User className="w-4 h-4 text-neutral-600" />
                        <span>My Account &amp; Orders</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-400 -rotate-90" />
                    </Link>

                    <Link
                      href="/wishlist"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 hover:bg-neutral-100 font-semibold text-neutral-800 rounded-md transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <Heart className="w-4 h-4 text-[#D9234B]" />
                        <span>Saved Wishlist</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-400 -rotate-90" />
                    </Link>

                    <Link
                      href="/wholesale/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 hover:bg-neutral-100 font-semibold text-neutral-800 rounded-md transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <Building2 className="w-4 h-4 text-amber-600" />
                        <span>Wholesale B2B Portal</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-400 -rotate-90" />
                    </Link>

                    {role !== 'guest' && (
                      <button
                        onClick={() => {
                          setRole('guest');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center space-x-2.5 p-2.5 text-rose-600 hover:bg-rose-50 font-bold rounded-md transition-colors border-t border-neutral-100 mt-2"
                      >
                        <LogOut className="w-4 h-4 text-rose-600" />
                        <span>Sign Out</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Wholesale Partner Button */}
            <Link
              href="/wholesale/apply"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 bg-[#D9234B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9E1B32] transition-colors rounded-sm shadow-sm"
            >
              <Building2 className="w-4 h-4" />
              <span>Wholesale Partner</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
