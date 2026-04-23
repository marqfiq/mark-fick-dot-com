import type { Metadata } from "next";
import "./globals.css";
import FirebaseAnalytics from "../components/FirebaseAnalytics";

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
      <body className="bg-bg text-text antialiased">
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
