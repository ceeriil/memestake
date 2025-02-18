"use client";
import { ConnectButton } from "@/components/ConnectButton";
import { StakePanel } from "@/components/Stake";
import { STAKE_POOL_DETAILS } from "@/config/stakePools";

export default function Home() {
  return (
    <div className={"pages "}>
      <header className=" w-full py-3 px-4 ">
        <div className="container mx-auto flex justify-between">
          <h3 className="text-xl font-semibold">Meme Stake</h3>
          <ConnectButton />
        </div>
      </header>
      <StakePanel
        stakePool={STAKE_POOL_DETAILS.stakePool}
        stakePoolMint={STAKE_POOL_DETAILS.stakePoolMint}
      />
    </div>
  );
}
