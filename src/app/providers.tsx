"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/components/features/cart-provider";
import { AuthProvider } from "@/components/auth/auth-provider";
import { ToastProvider } from "@/components/features/toast";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/features/cart-drawer";
import { ChatBot } from "@/components/features/chatbot";
import { PWARegister } from "@/components/features/pwa-register";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <ChatBot />
            <PWARegister />
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
