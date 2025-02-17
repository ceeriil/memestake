"use client";
import { ConnectButton } from "@/components/ConnectButton";
import BN from "bn.js";
import { Keypair } from "@solana/web3.js";
import { useAppKitProvider } from "@reown/appkit/react";
import { type Provider } from "@reown/appkit-adapter-solana/react";
import { stake } from "@/services/streamflow";
import { Stake } from "@/components/Stake";
import { useFetchStakePools } from "@/hooks/useFetchStakePools";
import { useEffect } from "react";
import { Card } from "@/components/Card";
import Image from "next/image";
import { StakersIcon } from "@/components/Assets/StakersIcon";

export default function Home() {
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const { stakepools } = useFetchStakePools();

  useEffect(() => {
    console.log(stakepools, "yoooo");
  });

  const createStakeParams = {
    nonce: 28,
    amount: new BN(1000000),
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
        console.log("successful", stake);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  return (
    <div className={"pages "}>
      <header className=" w-full py-3 ">
        <div className="container mx-auto flex justify-between">
          <h3 className="text-xl font-semibold">Meme Stake</h3>
          <ConnectButton />
        </div>
      </header>
      <section className="container mx-auto py-6 grid grid-cols-[60%,40%] gap-x-10 mt-16">
        <Card>
          <div className="flex space-x-6">
            <Image
              src={"img/token-logo.svg"}
              width={60}
              height={60}
              alt="token logo"
              className="active rounded-full border border-black"
            />
            <div>
              <h2 className=" text-xl font-semibold">USDC-dev</h2>
              <p className=""> (0x3..454)</p>
            </div>
          </div>
          <div className="w-full grid-cols-2 grid border-t mt-12 py-3">
            <div className="">
              <p>Total Value Locked</p>
              <p className="mt-2 text-3xl font-bold">9,800</p>
            </div>
            <div className="">
              <p>Stakers</p>
              <div className="flex space-x-2 items-center mt-2 ">
                <div>
                  {" "}
                  <StakersIcon />
                </div>

                <span className="text-3xl font-bold">9</span>
              </div>
            </div>
          </div>
          <p className="font-bold mt-10">Reward in Pool</p>
          <div className="w-full grid-cols-2 grid border-t mt-3 py-3">
            <div className="">
              <p>Total </p>
              <p className="mt-2 text-2xl font-bold">9,800</p>
            </div>
            <div className="">
              <p>Daily Reward</p>
              <p className="mt-2 text-2xl font-bold">9 - 10 </p>
            </div>
          </div>
        </Card>
        <Stake handleStake={handleStake} />
      </section>
    </div>
  );
}
