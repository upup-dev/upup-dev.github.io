import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./styles/style.scss";
import SmoothScrolling from "@/app/components/smooth-scrolling/SmoothScrolling";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpUp",
  description: "Software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
