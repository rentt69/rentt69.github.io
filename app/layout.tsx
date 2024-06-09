import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  style: 'normal',
  weight: "500",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Rentt69",
  description: "Makisama ka nalang may lagnat ako nung ginawa ko to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
