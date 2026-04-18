import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mark Fick",
  description: "Mark Fick's Personal Website",
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
