import type { Metadata } from "next";
import { Grandstander, Changa } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const grandstander = Grandstander({
  variable: "--font-grandstander",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const changa = Changa({
  variable: "--font-changa",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KakaduCoin ($KAKADU) - The Cockatoo with the Greatest Hair",
  description: "Same hair. Same energy. Same legend. Kakadu is Trump. Trump is Kakadu. The most tremendous meme coin on Solana.",
  openGraph: {
    title: "KakaduCoin ($KAKADU)",
    description: "Same hair. Same energy. Same legend. The cockatoo that IS Trump.",
    images: ["/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KakaduCoin ($KAKADU)",
    description: "Same hair. Same energy. Same legend.",
    images: ["/banner.png"],
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
        className={`${grandstander.variable} ${changa.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
