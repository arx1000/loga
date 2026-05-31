"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, MessageCircle, User, LogOut, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useCart } from "@/components/features/cart-provider";
import { useAuth } from "@/components/auth/auth-provider";
import { cn } from "@/lib/utils";

export function Header() {
  const { totalItems, toggleCart } = useCart();
  const { user, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-primary"
            >
              Lux<span className="text-foreground">Wood</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <ThemeToggle />

              <button
                  onClick={() => {
                    setChatOpen(true);
                    window.dispatchEvent(new CustomEvent("open-chat"));
                  }}
                  className="relative p-2 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Open chat"
                >
                  <MessageCircle size={20} />
                </button>

                {user ? (
                  <>
                    <Link
                      href="/orders"
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      <FileText size={16} />
                      Orders
                    </Link>
                    <button
                      onClick={signOut}
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    <User size={16} />
                    Sign In
                  </Link>
                )}

              <button
                onClick={toggleCart}
                className="relative p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-foreground/70"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fadeIn">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
