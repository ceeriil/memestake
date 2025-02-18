import React from "react";
import { Card } from "../Card";
import DurationSlider from "./DurationSlider";

export const StakeForm = ({ handleStake }: { handleStake: () => void }) => {
  return (
    <Card title={"Stake token"}>
      <div className="flex flex-col w-full items-center">
        <p className="py-2 pt-6">
          Stake token to this pool to earn daily rewards.
        </p>
        <div className="w-full">
          <input
            type="number"
            className="w-full py-3 border-2 rounded-lg px-4 bg-transparent border-[#000]"
            value={20}
          />
        </div>
        <DurationSlider minDays={1} maxDays={795} />
        <button
          className="py-3 px-5 bg-[#73BDA8] active rounded-xl text-black w-full font-semi-bold text-lg"
          onClick={handleStake}
        >
          Stake
        </button>
      </div>
    </Card>
  );
};
