import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "나만의 포켓몬 도감 웹 사이트 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-gray-200">
        <header className="text-center bg-blue-600 text-white p-5 text-2xl">
          나만의 포켓몬 도감
        </header>
        <div className="py-10 h-full">{children}</div>
      </body>
    </html>
  );
}
