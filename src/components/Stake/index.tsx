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
import { StakeList } from "./StakeList";

interface StakePanelProps {
  stakePool: string;
  stakePoolMint: string;
}

export const StakePanel: React.FC<StakePanelProps> = ({
  stakePool,
  stakePoolMint,
}) => {
  const { walletProvider } = useAppKitProvider<Provider>("solana");
  const { stakepool } = useFetchStakePool(stakePool);

  useEffect(() => {
    console.log(stakepool, "yoooo");
  });

  const handleStake = async (formData: FormData) => {
    const amount = Number(formData.get("amount"));
    const durationInSeconds = Number(formData.get("duration"));
    const decimals = 9;

    console.log(amount, durationInSeconds);

    const totalAmountInLamports = new BN(Math.round(amount * 10 ** decimals));
    console.log(totalAmountInLamports, durationInSeconds);

    const createStakeParams = {
      nonce: 504,
      amount: new BN(totalAmountInLamports),
      duration: new BN(durationInSeconds),
      stakePool,
      stakePoolMint,
    };

    await stake(
      createStakeParams,
      { invoker: walletProvider as unknown as Keypair },
      (stake) => console.log("successful", stake),
      (error) => console.log("error", error)
    );
  };

  return (
    <div>
      <section className="container mx-auto py-6 grid md:grid-cols-[40%,60%] gap-10 mt-16 px-4">
        <StakeForm handleStake={handleStake} />
        <StakePoolInfo />
      </section>
      <section>
        <StakeList />
      </section>
    </div>
  );
};
