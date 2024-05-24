import type { Metadata } from "next";
import "./styles/style.scss";
import SmoothScrolling from "@/app/components/smooth-scrolling/SmoothScrolling";

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
    <link rel="icon" href="/favicon.svg" sizes="any"/>
    <SmoothScrolling>{children}</SmoothScrolling>
    </body>
    </html>
  );
}
