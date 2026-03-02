import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { fetchNavConfig } from "@/lib/nav/fetchNavConfig";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchFooterConfig } from "@/lib/footer/fetchFooterConfig";
import Footer from "@/components/footer/Footer";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightchain dApp",
  description: "Lightchain dApp Hub",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
