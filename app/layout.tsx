import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eeshwar - Full Stack Developer",
  description: "Professional portfolio showcasing my projects and expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
