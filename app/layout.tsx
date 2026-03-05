import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { fetchNavConfig } from "@/lib/nav/fetchNavConfig";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchFooterConfig } from "@/lib/footer/fetchFooterConfig";
import Footer from "@/components/footer/Footer";
import { Toaster } from "sonner";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightchain dApp",
  description: "Lightchain dApp Hub",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rawMenus = await fetchNavConfig();
  const { columns: footerColumns, social: socials } = await fetchFooterConfig();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header rawMenus={rawMenus} socials={socials} />
          {children}
          <Footer footerColumns={footerColumns} socials={socials} />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
