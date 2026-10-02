import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vibeland.io"),
  title: {
    default: "VIBELAND | The Sovereign Metaverse",
    template: "%s | VIBELAND"
  },
  description: "VIBELAND is a concept for an immersive 3D metaverse on the Sovereign Stack. It is not yet playable.",
  keywords: ["VIBELAND", "metaverse", "virtual world", "3D", "sovereign", "decentralized", "multiplayer", "avatars", "Sovereign Stack"],
  authors: [{ name: "Powerclub Global" }],
  openGraph: {
    title: "VIBELAND | The Sovereign Metaverse",
    description: "VIBELAND is a concept for an immersive 3D metaverse on the Sovereign Stack. It is not yet playable.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VIBELAND | The Sovereign Metaverse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBELAND | The Sovereign Metaverse",
    description: "VIBELAND is a concept for an immersive 3D metaverse on the Sovereign Stack. It is not yet playable.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
