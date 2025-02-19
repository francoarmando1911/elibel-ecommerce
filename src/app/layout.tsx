import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elibel",
  description: "Elibel | bebes - niños, adolescentes",
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
      </body>
    </html>
  );
}
