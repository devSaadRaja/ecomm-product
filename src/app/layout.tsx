import type { Metadata } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "BabyBliss - Premium Newborn Essentials",
  description:
    "Discover our premium collection of newborn essentials designed with love for your baby's comfort and your peace of mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${openSans.variable}`}>
        <ThemeProvider attribute="class">
          <Toaster
            position="top-right"
            // reverseOrder={false}
            // containerClassName="mt-16 flex ml-[30px]"
            // containerStyle={{}}
            // toastOptions={{
            //   className: "",
            //   duration: 5000,
            //   style: {
            //     background: "#363636",
            //     color: "#fff",
            //   },
            //   success: {
            //     duration: 3000,
            //   },
            //   loading: {
            //     duration: 300000,
            //   },
            // }}
          />

          <Header />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
