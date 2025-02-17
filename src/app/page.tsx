"use client";
import { ConnectButton } from "@/components/ConnectButton";
import { StakePanel } from "@/components/Stake";

export default function Home() {
  return (
    <div className={"pages "}>
      <header className=" w-full py-3 px-4 ">
        <div className="container mx-auto flex justify-between">
          <h3 className="text-xl font-semibold">Meme Stake</h3>
          <ConnectButton />
        </div>
      </header>
      <StakePanel />
    </div>
  );
}
