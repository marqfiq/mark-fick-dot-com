import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FirebaseAnalytics from "../components/FirebaseAnalytics";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL("https://markfick.com"),
  title: { default: "Mark Fick — builder in Seattle", template: "%s · Mark Fick" },
  description:
    "Technical founder in Seattle building RetroFlow: tools for the friction between the code, as AI changes how software teams work.",
  openGraph: {
    title: "Mark Fick — builder in Seattle",
    description: "Tools for the friction between the code.",
    url: "https://markfick.com",
    siteName: "Mark Fick",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <FirebaseAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
