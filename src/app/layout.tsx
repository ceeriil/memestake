import type { Metadata } from "next";

import "./globals.css";
import ContextProvider from "@/context";

export const metadata: Metadata = {
  title: "Solana Meme Staking dApp",
  description: "Solana Meme Staking dApp",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
