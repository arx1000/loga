import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LuxWood Doors — Premium Handcrafted Wooden Doors",
  description:
    "Discover handcrafted wooden doors from LuxWood. Premium mahogany, oak, walnut doors with free shipping, 5-year warranty, and custom sizing available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
