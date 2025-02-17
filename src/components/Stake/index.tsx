import React from "react";
import { StakeForm } from "./StakeForm";
import { StakePoolInfo } from "./StakePoolInfo";
import BN from "bn.js";
import { Keypair } from "@solana/web3.js";
import { useAppKitProvider } from "@reown/appkit/react";
import { type Provider } from "@reown/appkit-adapter-solana/react";
import { stake } from "@/services/streamflow";
import { useEffect } from "react";
import { useFetchStakePool } from "@/hooks/useFetchStakePool";

export const StakePanel = () => {
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const { stakepool } = useFetchStakePool(
    "2H29y5auDTCKox8vxZP2h5acrDai385KLpjiNKEtRqUj"
  );

  useEffect(() => {
    console.log(stakepool, "yoooo");
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
    <section className="container mx-auto py-6 grid md:grid-cols-[60%,40%] gap-10 mt-16 px-4">
      <StakePoolInfo />
      <StakeForm handleStake={handleStake} />
    </section>
  );
};
