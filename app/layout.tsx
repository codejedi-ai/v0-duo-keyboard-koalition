import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duo Keyboard Koalition",
  description: "Community of passionate hackers, coders, and tech enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main>
              {children}
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}