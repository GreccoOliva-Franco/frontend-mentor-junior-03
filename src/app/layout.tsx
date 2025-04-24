import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const font = Rubik({
  subsets: ['latin'],
  weight: 'variable'
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Time tracking dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased min-h-screen bg-Navy-950',
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
