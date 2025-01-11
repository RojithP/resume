import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";



const ed_garamond = EB_Garamond({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rojith.P",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ed_garamond.className}
      >
        {children}
      </body>
    </html>
  );
}
