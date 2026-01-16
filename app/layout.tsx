import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eeshwar | Data Analytics Engineer",
  description: "Entry-level Data Analytics Engineer portfolio - Turning data into actionable insights through analytics, visualization, and data-driven solutions.",
  keywords: ["Data Analytics", "Power BI", "SQL", "Python", "Data Visualization", "Business Intelligence", "Microsoft Fabric"],
  authors: [{ name: "Eeshwar" }],
  openGraph: {
    title: "Eeshwar | Data Analytics Engineer",
    description: "Turning data into actionable insights",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
