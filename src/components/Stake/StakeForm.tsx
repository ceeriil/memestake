import React, { useState } from "react";
import { Card } from "../Card";
import DurationSlider from "./DurationSlider";
import { durationToSeconds } from "@/lib/utils";
interface StakeFormProps {
  handleStake: (formData: FormData) => void;
}

export const StakeForm: React.FC<StakeFormProps> = ({ handleStake }) => {
  const [durationDays, setDurationDays] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set("duration", durationToSeconds(durationDays).toString());
    handleStake(formData);
  };

  return (
    <Card title="Stake Token">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center"
      >
        <p className="py-2 pt-6">
          Stake tokens to this pool to earn daily rewards.
        </p>

        <div className="w-full">
          <input
            type="number"
            name="amount"
            className="w-full py-3 border-2 rounded-lg px-4 bg-transparent border-[#000]"
            defaultValue={20}
            step="any"
          />
        </div>

        <DurationSlider
          minDays={1}
          maxDays={795}
          value={durationDays}
          onChange={setDurationDays}
        />

        <button
          type="submit"
          className="py-3 px-5 bg-[#73BDA8] active rounded-xl text-black w-full font-semibold text-lg"
        >
          Stake
        </button>
      </form>
    </Card>
  );
};
