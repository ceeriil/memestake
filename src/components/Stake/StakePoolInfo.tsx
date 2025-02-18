import React from "react";
import { Card } from "../Card";
import Image from "next/image";
import { StakersIcon } from "../Assets/StakersIcon";

export const StakePoolInfo = () => {
  return (
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
          <p> (0x3..454)</p>
        </div>
      </div>
      <div className="w-full grid-cols-2 grid border-t mt-12 py-3">
        <div>
          <p>Total Value Locked</p>
          <p className="mt-2 text-3xl font-bold">9,800</p>
        </div>
        <div>
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
  );
};
