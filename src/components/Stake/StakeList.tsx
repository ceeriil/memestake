import React, { useEffect } from "react";
import { Card } from "../Card";
import { useFetchStakeEntries } from "@/hooks/useFetchStakeEntries";
import { PublicKey } from "@solana/web3.js";

export const StakeList = () => {
  const stakePoolPK = new PublicKey(
    "2H29y5auDTCKox8vxZP2h5acrDai385KLpjiNKEtRqUj"
  );
  const { stakeEntries } = useFetchStakeEntries(stakePoolPK);

  useEffect(() => {
    console.log("sk", stakeEntries);
  }, [stakeEntries]);

  return (
    <div className="mt-16 mb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Your Stakes</h2>
        <div className="grid lg:grid-cols-2 mt-12">
          <Card>
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p>Staked</p>
                <p className="mt-2 text-xl font-bold">9,800</p>
              </div>
              <div>
                <p>APY</p>
                <p className="mt-2 text-xl font-bold">00</p>
              </div>
              <div>
                <p>Multiplier</p>
                <p className="mt-2 text-xl font-bold">00</p>
              </div>
              <div>
                <p>Duration</p>
                <p className="mt-2 text-base font-bold">6 months 27 days</p>
              </div>
              <div>
                <p>Stake Locked</p>
                <p className="mt-2 text-base font-bold">
                  Feb 10, 2025, 1:15 AM{" "}
                </p>
              </div>
              <div>
                <p>Stake Unlocked</p>
                <p className="mt-2 text-base font-bold">
                  Feb 10, 2025, 1:15 AM{" "}
                </p>
              </div>
            </div>
            <button className="py-3 px-5 bg-[#73BDA8] active rounded-xl text-black w-full font-semi-bold text-lg mt-8 inline-block">
              Claim Reward
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};
