import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // This completely silences the warning and sets your deployment domain
  metadataBase: new URL('https://onyq.tech'), 
  
  title: "Onyq Tech | Custom Web Applications & Enterprise Software",
  description: "End-to-end software engineering, high-speed web applications, and robust data pipelines built for scale.",
  openGraph: {
    title: 'Onyq Tech | Enterprise Engineering',
    description: 'Custom web applications and enterprise software.',
    url: 'https://onyq.tech',
    siteName: 'Onyq Tech',
    images: [
      {
        url: '/logo.png', // Uses your new transparent logo for WhatsApp/LinkedIn previews!
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The scroll-smooth class ensures the navbar links glide instead of jump
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}