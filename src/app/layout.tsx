import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
        <header className="flex justify-center bg-blue-900 text-white p-5 text-2xl">
          <Image
            src="/images/pokeball.png"
            alt="pokeball"
            width={96}
            height={96}
          ></Image>
        </header>
        <div className="py-10 h-full">{children}</div>
      </body>
    </html>
  );
}
