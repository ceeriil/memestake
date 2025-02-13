"use client";
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import BN from "bn.js";
import { Keypair } from "@solana/web3.js";
import { useAppKitProvider } from "@reown/appkit/react";
import { type Provider } from "@reown/appkit-adapter-solana/react";
import { stake } from "@/services/streamflow";
import { Stake } from "@/components/Stake";

export default function Home() {
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  const createStakeParams = {
    nonce: 3,
    amount: new BN(500000),
    duration: new BN(86400 * 33),
    stakePool: "2H29y5auDTCKox8vxZP2h5acrDai385KLpjiNKEtRqUj",
    stakePoolMint: "So11111111111111111111111111111111111111112",
  };

  const handleStake = async () => {
    await stake(
      createStakeParams,
      {
        invoker: walletProvider as unknown as Keypair,
      },
      (stake) => {
        console.log("successfull", stake);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  return (
    <div className={"pages"}>
      <h1 className="text-4xl text-red-200">
        AppKit Solana Next.js App Router Example
      </h1>

      <div>
        <ConnectButton />
      </div>
      <div>
        <ActionButtonList />
      </div>
      <InfoList />
      <Stake handleStake={handleStake} />
    </div>
  );
}
