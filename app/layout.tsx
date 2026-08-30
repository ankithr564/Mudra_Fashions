import type { Metadata, Viewport } from 'next';
import './globals.css';
import { RoleProvider } from '@/context/RoleContext';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { SearchProvider } from '@/context/SearchContext';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { SearchOverlay } from '@/components/search/SearchOverlay';
import { RoleSwitcher } from '@/components/role/RoleSwitcher';

export const metadata: Metadata = {
  title: "MUDRA FASHIONS — Men's Wear • Uniforms • Fabrics",
  description: "Official premium website for MUDRA FASHIONS. Executive menswear, corporate uniforms, lab coats, and textile fabrics for retail and B2B wholesale.",
  generator: 'Mudra Fashions',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#D9234B',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-neutral-900 antialiased selection:bg-[#D9234B] selection:text-white">
      <body className="min-h-screen flex flex-col font-sans">
        <RoleProvider>
          <CartProvider>
            <WishlistProvider>
              <SearchProvider>
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <CartDrawer />
                <SearchOverlay />
                <RoleSwitcher />
              </SearchProvider>
            </WishlistProvider>
          </CartProvider>
        </RoleProvider>
      </body>
    </html>
  );
}
