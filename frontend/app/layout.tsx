import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EditAI",
  description: "AI Powered Video Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}