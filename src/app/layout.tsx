import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import DockNavbar from '@/components/DockNavbar';
import { Particles } from '@/components/magicui/particles';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Indian Blockchain Fraternity",
  description: "Fostering the future of Web3 through collaboration, innovation, and education within the community.",
  icons: {
    icon: { url: '/logo.png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        {children}
        <Particles className="absolute inset-0" quantity={100} ease={80} color="#ffffff" />
        <DockNavbar />
      </body>
    </html>
  );
}