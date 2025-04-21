import Header from "@/components/shared/Header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Ticket Bounty",
  description: "Ticket Bound Applicaion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} antialiased`}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Header />
          <main className="py-24 px-8 min-h-screen flex-1 overflow-y-auto overflow-x-hidden bg-secondary/20 flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
