import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata: Metadata = {
  title: "Elibel",
  description: "Elibel | bebes - niños, adolescentes",
  icons: {
    icon: '/icono.png',
    apple: '/icono.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-400">
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
