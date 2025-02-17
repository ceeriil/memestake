"use client";

import { solanaWeb3JsAdapter, projectId, networks } from "@/config";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "Solana Meme Staking dApp",
  description: "Solana Meme Staking dApp",
  url: "https://github.com/0xonerb/next-reown-appkit-ssr",
  icons: [""],
};

// Create the modal
export const modal = createAppKit({
  adapters: [solanaWeb3JsAdapter],
  projectId,
  networks,
  metadata,
  themeMode: "light",
  features: {
    analytics: true,
  },
  themeVariables: {
    "--w3m-font-family": "Space Grotesk",
    "--w3m-accent": "#73BDA8",
  },
});

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default ContextProvider;
